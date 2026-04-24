# mobile-smallscreen-lowcode

将各种来源转换为 M8 IOC 小屏低代码组件的 AI Skill。

## 功能

支持三种输入模式：

1. **ZIP 转换** — Google AI Studio / React+Tailwind 压缩包转 IOC 组件
2. **Figma 设计稿** — 从 Figma 设计稿直接生成 IOC 组件（需配置 figma-mcp）
3. **文字描述** — 根据需求文字描述直接生成 IOC 组件

## 安装

```bash
npx @anthropic-ai/skills add <github-repo-url> --skill mobile-smallscreen-lowcode
```

## 触发场景

- Google AI Studio 导出的 zip 转低代码组件
- Figma 设计稿转小屏 IOC 组件
- React+Tailwind 页面转 `card_components`
- 只有业务描述，直接生成 IOC 组件
- 任何涉及 M8 框架小屏组件开发的场景

## 内置资源

- `references/knowledge` — M8 框架知识库
- `references/ioc-docs` — IOC 开发文档
- `references/ioc-templates` — IOC 组件模板（5 个参考模板）
- `scripts/analyze_source.py` — React+Tailwind 源码分析器
- `scripts/figma_parser.py` — Figma 设计数据解析器
- `scripts/manual_scaffold.py` — 手工骨架生成器

## 自动化约定

- 优先在项目根目录执行 `npm run ioc create <ComponentName>` 创建组件骨架
- 代码落盘后执行 `npm run ioc start <ComponentName>` 运行测试
- 测试必须通过才算完成
- 若当前目录无法执行 `ioc`，自动降级为手工骨架生成

## 前提条件

- Node.js v22.19.0+
- M8 框架脚手架 8.3.25+
- Figma 模式需要预配置 figma-mcp

## License

MIT
