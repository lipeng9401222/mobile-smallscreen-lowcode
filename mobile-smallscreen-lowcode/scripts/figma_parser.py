#!/usr/bin/env python3
"""解析 Figma 设计稿数据，为 IOC 低码组件生成提供结构化输入。

此脚本用于辅助处理从 figma-mcp 获取到的设计数据，
将 Figma 节点树转换为适合 IOC 组件生成的中间格式。

典型用法：
    在 figma-mcp 获取到节点数据后，将 JSON 保存到文件，
    然后用此脚本分析：

    python scripts/figma_parser.py <figma_data.json> --output <output.json>
"""

from __future__ import annotations

import argparse
import json
import re
import sys
from pathlib import Path
from typing import Any, Dict, List, Optional, Set, Tuple


# Figma 节点类型到 M8 组件的映射
FIGMA_TO_M8_MAP = {
    "RECTANGLE": None,
    "ELLIPSE": None,
    "TEXT": "text",
    "FRAME": "container",
    "GROUP": "container",
    "COMPONENT": "container",
    "INSTANCE": "container",
    "VECTOR": "icon",
    "BOOLEAN_OPERATION": "icon",
    "LINE": "divider",
    "STAR": "icon",
    "POLYGON": "icon",
}

# 按关键词识别 UI 元素类型
UI_ELEMENT_KEYWORDS = {
    "button": ["btn", "button", "submit", "确认", "提交", "按钮", "保存", "取消"],
    "input": ["input", "field", "输入", "搜索", "search", "text field"],
    "textarea": ["textarea", "说明", "备注", "描述", "remark", "comment", "留言"],
    "image": ["image", "img", "图片", "photo", "avatar", "头像", "banner", "icon"],
    "upload": ["upload", "上传", "camera", "相机", "拍照", "附件"],
    "stepper": ["stepper", "数量", "quantity", "加减", "minus", "plus", "count"],
    "switch": ["switch", "toggle", "开关"],
    "checkbox": ["checkbox", "勾选", "check", "多选"],
    "radio": ["radio", "单选"],
    "list": ["list", "列表", "item", "row", "card", "卡片"],
    "tab": ["tab", "标签", "选项卡", "segment"],
    "swipe": ["swipe", "carousel", "轮播", "slider", "banner"],
    "rate": ["rate", "star", "评分", "评价", "星级"],
    "divider": ["divider", "分割", "separator", "line"],
    "badge": ["badge", "tag", "标签", "徽标"],
    "price": ["price", "价格", "金额", "¥", "￥", "amount"],
}


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="解析 Figma 设计数据并输出 IOC 组件 manifest")
    parser.add_argument("source", help="Figma 节点数据 JSON 文件路径")
    parser.add_argument("--output", help="输出 JSON 路径，默认打印到 stdout")
    parser.add_argument("--component-name", help="可选，覆盖推断出的组件名")
    return parser.parse_args()


def sanitize_component_name(raw: str) -> str:
    cleaned = re.sub(r"[^A-Za-z0-9]+", " ", raw).strip()
    if not cleaned:
        return "GeneratedIocComponent"
    return "".join(part[:1].upper() + part[1:] for part in cleaned.split())


def load_figma_data(source: Path) -> Dict[str, Any]:
    try:
        return json.loads(source.read_text(encoding="utf-8"))
    except (json.JSONDecodeError, UnicodeDecodeError) as exc:
        raise ValueError(f"无法解析 Figma 数据文件: {exc}")


def extract_colors(node: Dict[str, Any], colors: Set[str]) -> None:
    """递归提取节点中的所有颜色值。"""
    fills = node.get("fills", [])
    for fill in fills:
        if fill.get("type") == "SOLID" and "color" in fill:
            c = fill["color"]
            r = int(c.get("r", 0) * 255)
            g = int(c.get("g", 0) * 255)
            b = int(c.get("b", 0) * 255)
            a = c.get("a", 1)
            if a < 1:
                colors.add(f"rgba({r}, {g}, {b}, {a:.2f})")
            else:
                colors.add(f"#{r:02x}{g:02x}{b:02x}")

    strokes = node.get("strokes", [])
    for stroke in strokes:
        if stroke.get("type") == "SOLID" and "color" in stroke:
            c = stroke["color"]
            r = int(c.get("r", 0) * 255)
            g = int(c.get("g", 0) * 255)
            b = int(c.get("b", 0) * 255)
            colors.add(f"#{r:02x}{g:02x}{b:02x}")

    for child in node.get("children", []):
        extract_colors(child, colors)


def extract_fonts(node: Dict[str, Any], fonts: List[Dict[str, Any]]) -> None:
    """递归提取字体信息。"""
    style = node.get("style", {})
    if style:
        font_info = {}
        if "fontFamily" in style:
            font_info["fontFamily"] = style["fontFamily"]
        if "fontSize" in style:
            font_info["fontSize"] = style["fontSize"]
        if "fontWeight" in style:
            font_info["fontWeight"] = style["fontWeight"]
        if "lineHeightPx" in style:
            font_info["lineHeight"] = style["lineHeightPx"]
        if "letterSpacing" in style:
            font_info["letterSpacing"] = style["letterSpacing"]
        if font_info:
            fonts.append(font_info)

    for child in node.get("children", []):
        extract_fonts(child, fonts)


def extract_spacing(node: Dict[str, Any]) -> Dict[str, Any]:
    """提取节点的间距信息。"""
    spacing = {}
    if "paddingLeft" in node:
        spacing["paddingLeft"] = node["paddingLeft"]
    if "paddingRight" in node:
        spacing["paddingRight"] = node["paddingRight"]
    if "paddingTop" in node:
        spacing["paddingTop"] = node["paddingTop"]
    if "paddingBottom" in node:
        spacing["paddingBottom"] = node["paddingBottom"]
    if "itemSpacing" in node:
        spacing["gap"] = node["itemSpacing"]
    return spacing


def detect_layout(node: Dict[str, Any]) -> Optional[str]:
    """检测节点的布局模式。"""
    layout_mode = node.get("layoutMode")
    if layout_mode == "HORIZONTAL":
        return "flex-row"
    elif layout_mode == "VERTICAL":
        return "flex-column"
    return None


def identify_ui_element(node_name: str) -> List[str]:
    """根据节点名称识别 UI 元素类型。"""
    lowered = node_name.lower()
    elements = []
    for element_type, keywords in UI_ELEMENT_KEYWORDS.items():
        for keyword in keywords:
            if keyword in lowered:
                elements.append(element_type)
                break
    return elements


def analyze_node_tree(
    node: Dict[str, Any],
    depth: int = 0,
    max_depth: int = 6,
) -> Dict[str, Any]:
    """递归分析节点树，提取结构化信息。"""
    result: Dict[str, Any] = {
        "name": node.get("name", "unknown"),
        "type": node.get("type", "unknown"),
        "layout": detect_layout(node),
        "spacing": extract_spacing(node),
    }

    # 尺寸
    bbox = node.get("absoluteBoundingBox", {})
    if bbox:
        result["width"] = bbox.get("width")
        result["height"] = bbox.get("height")

    # 圆角
    if "cornerRadius" in node:
        result["borderRadius"] = node["cornerRadius"]

    # 文字内容
    if node.get("type") == "TEXT":
        result["characters"] = node.get("characters", "")

    # UI 元素识别
    ui_elements = identify_ui_element(node.get("name", ""))
    if ui_elements:
        result["ui_elements"] = ui_elements

    # 递归子节点
    if depth < max_depth:
        children = node.get("children", [])
        if children:
            result["children"] = [
                analyze_node_tree(child, depth + 1, max_depth)
                for child in children
            ]

    return result


def collect_ui_summary(tree: Dict[str, Any]) -> Dict[str, int]:
    """统计所有 UI 元素类型的数量。"""
    from collections import Counter
    counter: Counter = Counter()

    def walk(node: Dict[str, Any]) -> None:
        for el in node.get("ui_elements", []):
            counter[el] += 1
        for child in node.get("children", []):
            walk(child)

    walk(tree)
    return dict(counter)


def recommend_templates(ui_summary: Dict[str, int], text_content: str) -> List[Dict[str, Any]]:
    """根据 UI 元素和文字内容推荐模板。"""
    from collections import Counter
    scores: Counter = Counter()
    lowered = text_content.lower()

    if ui_summary.get("upload") or ui_summary.get("textarea") or "售后" in lowered or "评价" in lowered:
        scores["MineEvaluateAdd"] += 5
    if ui_summary.get("price") or "小计" in lowered or "合计" in lowered or "提交" in lowered:
        scores["OrderPay"] += 4
    if ui_summary.get("stepper") or ui_summary.get("list") or "购物" in lowered or "数量" in lowered:
        scores["ShoppingCart"] += 5
    if ui_summary.get("price") or "商品" in lowered or "标题" in lowered:
        scores["GoodsInfo"] += 3
    if ui_summary.get("swipe") or "轮播" in lowered or "推荐" in lowered:
        scores["GoodsSimilar"] += 4

    reason_map = {
        "MineEvaluateAdd": "包含上传、文本域或售后/评价类表单信号",
        "OrderPay": "包含价格、小计或底部提交条信号",
        "ShoppingCart": "包含列表与数量增减信号",
        "GoodsInfo": "包含价格、标题、商品摘要信号",
        "GoodsSimilar": "包含轮播或卡片滑动信号",
    }

    return [
        {"template": name, "score": score, "reason": reason_map[name]}
        for name, score in scores.most_common()
    ]


def collect_all_text(node: Dict[str, Any]) -> str:
    """收集节点树中所有文字内容。"""
    parts: List[str] = []
    if node.get("type") == "TEXT":
        parts.append(node.get("characters", ""))
    for child in node.get("children", []):
        parts.append(collect_all_text(child))
    return " ".join(parts)


def build_manifest(source: Path, component_name: Optional[str]) -> Dict[str, Any]:
    data = load_figma_data(source)

    # 适配不同格式的 Figma 数据
    root_node = data
    if "document" in data:
        root_node = data["document"]
    elif "nodes" in data:
        nodes = data["nodes"]
        if nodes:
            first_key = next(iter(nodes))
            root_node = nodes[first_key].get("document", nodes[first_key])

    # 分析节点树
    tree = analyze_node_tree(root_node)

    # 提取颜色
    colors: Set[str] = set()
    extract_colors(root_node, colors)

    # 提取字体
    fonts: List[Dict[str, Any]] = []
    extract_fonts(root_node, fonts)

    # UI 元素统计
    ui_summary = collect_ui_summary(tree)

    # 文字内容
    text_content = collect_all_text(root_node)

    # 组件名推断
    raw_name = component_name or root_node.get("name", "GeneratedIocComponent")
    final_name = sanitize_component_name(raw_name)

    # 模板推荐
    templates = recommend_templates(ui_summary, text_content)

    return {
        "source": str(source.resolve()),
        "source_type": "figma",
        "component_name_candidate": final_name,
        "node_name": root_node.get("name"),
        "node_type": root_node.get("type"),
        "colors": sorted(colors),
        "fonts": fonts[:10],
        "ui_element_summary": ui_summary,
        "text_content_preview": text_content[:500],
        "recommended_templates": templates,
        "tree_structure": tree,
    }


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
