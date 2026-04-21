#!/usr/bin/env python3
"""分析 React + Tailwind 源码，为 IOC 低码组件转换提供结构化输入。"""

from __future__ import annotations

import argparse
import json
import re
import sys
import tempfile
import zipfile
from collections import Counter
from pathlib import Path
from typing import Dict, Iterable, List, Optional, Set, Tuple


ENTRY_CANDIDATES = (
    "src/App.tsx",
    "src/App.jsx",
    "src/main.tsx",
    "src/main.jsx",
)

IMPORT_RE = re.compile(
    r"""import\s+(?:[\w*\s{},]+from\s+)?["'](?P<target>\.[^"']+)["'];?""",
    re.MULTILINE,
)
CLASS_RE = re.compile(r"""className\s*=\s*["'`]([^"'`]+)["'`]""")
LUCIDE_RE = re.compile(
    r"""import\s*\{([^}]+)\}\s*from\s*['"]lucide-react['"]""",
    re.MULTILINE,
)
REMOTE_IMG_RE = re.compile(r"""https?://[^\s"'`<>]+""")
JSX_COMMENT_RE = re.compile(r"""\{/\*\s*(.*?)\s*\*/\}""")
TAG_RE = re.compile(r"""<([A-Za-z][\w.-]*)\b""")

SKIP_KEYWORDS = {
    "顶部状态栏": ("status", "statusbar", "status-bar"),
    "顶部导航栏": ("header", "navbar", "sticky top-0", "chevronleft", "morehorizontal"),
    "底部 home indicator": ("home indicator", "bg-black", "rounded-full mx-auto"),
}


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="分析 React/Tailwind 源码并输出 IOC 转换 manifest")
    parser.add_argument("source", help="zip 文件或源码目录")
    parser.add_argument("--output", help="输出 json 路径，默认打印到 stdout")
    parser.add_argument("--component-name", help="可选，覆盖推断出的组件名")
    return parser.parse_args()


def sanitize_component_name(raw: str) -> str:
    cleaned = re.sub(r"[^A-Za-z0-9]+", " ", raw).strip()
    if not cleaned:
        return "GeneratedIocComponent"
    return "".join(part[:1].upper() + part[1:] for part in cleaned.split())


def load_source_root(source: Path) -> Tuple[Path, str, Optional[tempfile.TemporaryDirectory[str]]]:
    if source.is_dir():
        return source.resolve(), "directory", None
    if source.is_file() and source.suffix.lower() == ".zip":
        temp_dir = tempfile.TemporaryDirectory(prefix="ioc-react-src-")
        with zipfile.ZipFile(source, "r") as archive:
            archive.extractall(temp_dir.name)
        root = Path(temp_dir.name)
        children = [item for item in root.iterdir() if item.name != "__MACOSX"]
        if len(children) == 1 and children[0].is_dir():
            root = children[0]
        return root.resolve(), "zip", temp_dir
    raise FileNotFoundError(f"不支持的输入源: {source}")


def find_entry(root: Path) -> Optional[Path]:
    for candidate in ENTRY_CANDIDATES:
        path = root / candidate
        if path.exists():
            return path.resolve()
    for ext in ("*.tsx", "*.jsx"):
        for path in root.rglob(ext):
            try:
                text = path.read_text(encoding="utf-8")
            except UnicodeDecodeError:
                continue
            if "return (" in text or "return <" in text:
                return path.resolve()
    return None


def resolve_import(base_file: Path, target: str) -> Optional[Path]:
    candidate = (base_file.parent / target).resolve()
    possible = [
        candidate,
        candidate.with_suffix(".tsx"),
        candidate.with_suffix(".jsx"),
        candidate.with_suffix(".ts"),
        candidate.with_suffix(".js"),
        candidate / "index.tsx",
        candidate / "index.jsx",
        candidate / "index.ts",
        candidate / "index.js",
    ]
    for item in possible:
        if item.exists():
            return item.resolve()
    return None


def collect_files(entry: Path, max_depth: int = 2) -> List[Path]:
    queue: List[Tuple[Path, int]] = [(entry, 0)]
    visited: Set[Path] = set()
    collected: List[Path] = []
    while queue:
        current, depth = queue.pop(0)
        if current in visited or not current.exists():
            continue
        visited.add(current)
        collected.append(current)
        if depth >= max_depth:
            continue
        try:
            text = current.read_text(encoding="utf-8")
        except UnicodeDecodeError:
            continue
        for match in IMPORT_RE.finditer(text):
            resolved = resolve_import(current, match.group("target"))
            if resolved is not None:
                queue.append((resolved, depth + 1))
    return collected


def read_text(path: Path) -> str:
    try:
        return path.read_text(encoding="utf-8")
    except UnicodeDecodeError:
        return path.read_text(encoding="utf-8", errors="ignore")


def collect_tailwind_classes(text: str) -> Set[str]:
    tokens: Set[str] = set()
    for raw in CLASS_RE.findall(text):
        tokens.update(token for token in raw.split() if token)
    return tokens


def detect_skip_candidates(relative_path: str, text: str) -> List[Dict[str, str]]:
    candidates: List[Dict[str, str]] = []
    lowered = text.lower()
    for region_name, keywords in SKIP_KEYWORDS.items():
        for keyword in keywords:
            if keyword in lowered:
                candidates.append(
                    {
                        "region": region_name,
                        "file": relative_path,
                        "reason": f"命中关键词: {keyword}",
                        "excerpt": keyword,
                    }
                )
                break
    for comment in JSX_COMMENT_RE.findall(text):
        lowered_comment = comment.lower()
        if "header" in lowered_comment or "indicator" in lowered_comment:
            candidates.append(
                {
                    "region": "候选壳层区域",
                    "file": relative_path,
                    "reason": "命中 JSX 注释",
                    "excerpt": comment.strip(),
                }
            )
    return candidates


def detect_widgets(text: str) -> Counter:
    lowered = text.lower()
    widgets = Counter()
    checks = {
        "textarea": "<textarea",
        "button": "<button",
        "input": "<input",
        "image": "<img",
        "inline_svg": "<svg",
        "upload_hint": "upload" if "upload" in lowered else "camera" if "camera" in lowered else "",
        "quantity_adjuster": "minus" if "minus" in lowered else "plus" if "plus" in lowered else "",
        "submit_action": "submit" if "submit" in lowered else "",
    }
    for key, marker in checks.items():
        if marker:
            widgets[key] += lowered.count(marker)
    return widgets


def recommend_templates(text: str, tailwind_tokens: Iterable[str]) -> List[Dict[str, object]]:
    lowered = text.lower()
    scores = Counter()
    if any(keyword in lowered for keyword in ("refund", "after-sale", "售后", "退款", "上传", "camera", "textarea")):
        scores["MineEvaluateAdd"] += 5
    if any(keyword in lowered for keyword in ("subtotal", "remark", "submit", "小计", "合计")):
        scores["OrderPay"] += 4
    if any(keyword in lowered for keyword in ("quantity", "minus", "plus", "stepper", "cart", "数量")):
        scores["ShoppingCart"] += 5
    if any(keyword in lowered for keyword in ("price", "title", "sales", "商品")):
        scores["GoodsInfo"] += 3
    if any(keyword in lowered for keyword in ("swipe", "carousel", "slider", "轮播")):
        scores["GoodsSimilar"] += 4
    if "line-clamp-2" in tailwind_tokens:
        scores["GoodsInfo"] += 1
    reason_map = {
        "MineEvaluateAdd": "包含文本说明、上传或售后/评价类表单信号",
        "OrderPay": "包含小计、备注、底部提交条等订单确认信号",
        "ShoppingCart": "包含商品列表与数量增减信号",
        "GoodsInfo": "包含价格、标题、商品摘要信号",
        "GoodsSimilar": "包含轮播或卡片滑动信号",
    }
    return [
        {"template": name, "score": score, "reason": reason_map[name]}
        for name, score in scores.most_common()
    ]


def extract_metadata_name(root: Path) -> Optional[str]:
    metadata_path = root / "metadata.json"
    if not metadata_path.exists():
        return None
    try:
        data = json.loads(metadata_path.read_text(encoding="utf-8"))
    except (json.JSONDecodeError, UnicodeDecodeError):
        return None
    value = data.get("name")
    return value.strip() if isinstance(value, str) and value.strip() else None


def build_manifest(source: Path, component_name: Optional[str]) -> Dict[str, object]:
    root, source_type, temp_dir = load_source_root(source)
    try:
        entry = find_entry(root)
        scanned_files = collect_files(entry) if entry else []
        combined_parts: List[str] = []
        tailwind_tokens: Set[str] = set()
        lucide_icons: Set[str] = set()
        remote_images: Set[str] = set()
        local_images: Set[str] = set()
        skip_candidates: List[Dict[str, str]] = []
        widget_counter = Counter()
        for file_path in scanned_files:
            relative_path = file_path.relative_to(root).as_posix()
            text = read_text(file_path)
            combined_parts.append(text)
            tailwind_tokens.update(collect_tailwind_classes(text))
            for icons in LUCIDE_RE.findall(text):
                lucide_icons.update(icon.strip() for icon in icons.split(",") if icon.strip())
            remote_images.update(REMOTE_IMG_RE.findall(text))
            skip_candidates.extend(detect_skip_candidates(relative_path, text))
            widget_counter.update(detect_widgets(text))
            for match in re.findall(r"""['"`](\./[^'"`]+\.(?:png|jpg|jpeg|svg|gif|webp))['"`]""", text):
                local_images.add(match)
        combined_text = "\n".join(combined_parts)
        metadata_name = extract_metadata_name(root)
        raw_component_name = component_name or metadata_name or source.stem or "GeneratedIocComponent"
        tag_counter = Counter(tag.lower() for tag in TAG_RE.findall(combined_text))
        return {
            "source": str(source.resolve()),
            "source_type": source_type,
            "analysis_root": str(root),
            "entry_file": str(entry.relative_to(root).as_posix()) if entry else None,
            "component_name_candidate": sanitize_component_name(raw_component_name),
            "metadata_name": metadata_name,
            "files_scanned": [path.relative_to(root).as_posix() for path in scanned_files],
            "tailwind_classes": sorted(tailwind_tokens),
            "lucide_icons": sorted(lucide_icons),
            "inline_svg_count": combined_text.lower().count("<svg"),
            "remote_images": sorted(remote_images),
            "local_image_refs": sorted(local_images),
            "skip_candidates": skip_candidates,
            "recommended_templates": recommend_templates(combined_text, tailwind_tokens),
            "widget_summary": dict(widget_counter),
            "tag_summary": dict(sorted(tag_counter.items(), key=lambda item: item[1], reverse=True)[:20]),
        }
    finally:
        if temp_dir is not None:
            temp_dir.cleanup()


def main() -> int:
    args = parse_args()
    source = Path(args.source)
    try:
        manifest = build_manifest(source, args.component_name)
    except Exception as exc:
        print(json.dumps({"error": str(exc)}, ensure_ascii=False, indent=2), file=sys.stderr)
        return 1

    rendered = json.dumps(manifest, ensure_ascii=False, indent=2)
    if args.output:
        output_path = Path(args.output)
        output_path.parent.mkdir(parents=True, exist_ok=True)
        output_path.write_text(rendered + "\n", encoding="utf-8")
    else:
        print(rendered)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
