---
name: mobile-smallscreen-lowcode
description: 将各种来源（Google AI Studio zip 压缩包、Figma 设计稿、文字需求描述）转换为 M8 IOC 小屏低代码组件。当用户提到低代码组件、小屏组件、IOC 组件、card_components、Google AI Studio 转组件、Figma 转低代码、React+Tailwind 转 IOC、生成低代码组件、创建小屏卡片组件等场景时，都应优先使用这个技能。即使用户没有明确说"低代码"，只要涉及 M8 框架下的移动端组件开发、卡片组件创建，也应触发。
license: MIT
compatibility: Standalone skill package with embedded references/ and scripts/. Figma mode requires figma-mcp configured.
metadata:
  author: juanjuan
  version: "1.0.0"
---

# Mobile SmallScreen LowCode 组件生成器

一个统一的小屏低代码组件生成技能，支持三种输入模式：

1. **ZIP 转换模式** — Google AI Studio / React+Tailwind 压缩包转 IOC 组件
2. **Figma 设计稿模式** — 从 Figma 设计稿直接生成 IOC 组件
3. **文字描述模式** — 根据需求文字描述直接生成 IOC 组件

## 必读参考

在开始任何模式之前，至少阅读以下核心文件（后续按需深入具体条目）：

- `references/ioc-docs/AI 快速开发低码组件指南.md` — 完整开发指南
- `references/ioc-docs/第二步：小屏组件开发目录结构了解.md` — 目录结构规范
- `references/ioc-docs/常见FAQ.md` — 常见问题解答
- `references/knowledge/standards/_index.md` — 编码标准索引
- `references/knowledge/standards/02-vue/component.md` — Vue 组件规范
- `references/knowledge/m8mpdoc/UI组件库/000-组件库下载使用.md` — UI 组件库概览
- `references/ioc-templates/template-index.md` — 模板选择指南

若需确认某个 `em-*` 组件的 API，再读取对应文档，例如：
- `references/knowledge/m8mpdoc/UI组件库/005-button按钮.md`
- `references/knowledge/m8mpdoc/UI组件库/013-field输入框.md`
- `references/knowledge/m8mpdoc/UI组件库/033-stepper步进器.md`
- `references/knowledge/m8mpdoc/UI组件库/040-uploader文件上传.md`
- `references/knowledge/m8mpdoc/UI组件库/044-image图片.md`

## 输入模式判断

技能启动后，按以下优先级自动判断输入模式：

1. 用户提供了 **zip 文件路径** 或工作区存在待处理 zip → 进入 ZIP 转换模式
2. 用户提供了 **Figma fileKey + nodeId** 或提到 Figma 设计稿 → 进入 Figma 设计稿模式
3. 用户仅给出 **文字描述** → 进入文字描述模式

如果判断不确定，先问用户确认输入模式，不要猜测。

## 通用执行流程

无论哪种输入模式，最终都要经历以下步骤：

### 1. 环境检测

检查当前项目根目录是否可执行 IOC 命令：
- 存在 `package.json`
- `package.json.scripts` 中存在 `ioc` 脚本

### 2. 创建组件骨架

**如果环境可用（推荐）：**

```bash
npm run ioc create <ComponentName>
```

在项目根目录执行。`<ComponentName>` 必须遵循 PascalCase 命名规范。

**如果环境不可用：**

使用 `scripts/manual_scaffold.py` 手工生成骨架：

```bash
python scripts/manual_scaffold.py <ComponentName> --display-name "<中文名>" --target-root "<项目根目录>"
```

### 3. 填充组件代码

根据输入源（zip 分析结果 / Figma 设计数据 / 文字需求）填充组件各文件。

### 4. 运行与测试

组件代码落盘后，在项目根目录执行：

```bash
npm run ioc start <ComponentName>
```

**必须等待自动化测试通过**。如果测试失败：
- 分析错误日志，修复代码
- 重新执行 `npm run ioc start <ComponentName>`
- 循环直到测试通过

### 5. 输出报告

生成 `conversion_report.md`，包含：
1. 输入源类型与详情
2. 最终组件名与输出目录
3. 使用的模板参考
4. 跳过的区域
5. 组件映射清单
6. `ioc create` / `ioc start` 执行情况
7. 测试通过状态
8. 待人工确认点

---

## 模式 A：ZIP 转换模式

适用于 Google AI Studio 导出的 React + Tailwind 压缩包，或任意 React 项目目录。

### 步骤

1. **分析源码** — 运行分析脚本：

```bash
python scripts/analyze_source.py "<zip或目录路径>" --output "<输出json>"
```

脚本会输出入口文件、依赖关系、Tailwind 类名、lucide 图标、内联 SVG、图片资源、可跳过区域、推荐模板。

2. **确定组件名** — 优先级：
   - 用户明确指定的英文名
   - 压缩包 / 目录名
   - 源码中的页面标题 / `metadata.json.name`
   - 回退：`GeneratedIocComponent`

3. **源码分析规则**：
   - 入口探测顺序：`src/App.tsx` → `src/App.jsx` → `src/main.tsx` → `src/main.jsx` → 首个包含 JSX 的文件
   - 只追踪本地相对 import，深度最多 2 层
   - 重点识别：表单区、上传区、列表区、数量调整区、提交按钮、Tailwind 类名、lucide 图标、内联 SVG、远程图片

4. **固定跳过区域**（除非用户明确要求保留）：
   - 顶部状态栏
   - 顶部导航栏
   - 底部 home indicator

5. **代码转换** — 将 React + Tailwind 代码转换为 Vue2 + SCSS 的 IOC 组件代码

---

## 模式 B：Figma 设计稿模式

适用于用户提供 Figma 设计稿数据（fileKey + nodeId）的场景。依赖 figma-mcp。

### 前置条件

用户需提前配置好 figma-mcp。输入格式：

```json
{
  "fileKey": "9nEUPUYtLMIcUauoIpVWku",
  "nodeId": "1-2706"
}
```

### 步骤

1. **获取设计数据** — 通过 figma-mcp 获取设计稿节点信息：
   - 调用 figma MCP 获取节点树、样式、布局信息
   - 解析颜色、字体、间距、圆角等设计 token
   - 识别组件层级结构和交互区域

2. **设计分析** — 从 Figma 数据中提取：
   - 页面布局结构（Flex/Grid）
   - 颜色系统（背景色、文字色、边框色）
   - 字体规格（大小、粗细、行高）
   - 间距系统（padding、margin、gap）
   - 图标和图片资源
   - 交互元素（按钮、输入框、开关等）

3. **映射到 M8 组件** — 将 Figma 设计元素映射为 em-* 组件

4. **生成组件代码** — 按 IOC 规范生成完整组件目录

5. **资源处理** — Figma 中的图片资源下载到组件 `img/` 目录

---

## 模式 C：文字描述模式

适用于用户只给出需求描述，没有源码或设计稿的场景。

### 步骤

1. **需求分析** — 解析用户描述，提取：
   - 页面类型（表单、列表、详情、卡片等）
   - 包含的 UI 元素（输入框、按钮、图片、上传等）
   - 业务逻辑（提交、计算、联动等）
   - 样式偏好（圆角、配色等）

2. **模板匹配** — 读取 `references/ioc-templates/template-index.md`，选择最接近的 1-2 个模板

3. **直接生成** — 按需求和模板参考，直接生成完整 IOC 组件

---

## 模板选择规则

先读 `references/ioc-templates/template-index.md`，只打开最接近的 1 到 2 个模板。

推荐映射：

**完整模板**（可直接打开参考）：

- 商品列表、数量加减、供应商分组、订单确认、底部提交栏 → `ShoppingCart`（⭐ 通用首选）
- 客服电话、弹框面板、拨号交互 → `CustomerServiceSheet`
- 环形图、饼图、简单数据占比 → `RingCharts`
- 柱状+折线混合图、双Y轴、dataZoom → `ZbMixedChartsEmChart`（进阶，config 较大）

**代码片段参考**（见 `template-index.md` 底部，无完整模板）：

- 轮播或卡片滑动展示 → template-index.md「轮播/滑动卡片」片段
- 售后申请、评价、退款说明、上传凭证 → template-index.md「评价表单」片段
- 金额小计、价格拆分展示 → template-index.md「订单确认/价格展示」片段

不要把整套模板机械拼接，按业务区拆解，只复用结构和配置组织方式。

### 特殊类型组件注意事项

- **图表类**（`em-chart`）：`async mounted` 中 `initChart` + `getInstance`；`watch` 数据变化触发 `refresh`；动态 `resize` 适配容器
- **弹框类**（`em-actionsheet`/`em-popup`）：管理 `show` 状态；编辑器预览模式提供触发按钮；对外暴露 `openSheet`/`closeSheet` 方法

## 组件映射优先级

优先级固定为：

1. `em-*` 组件（M8 组件库）
2. 本地 `img/` 资源
3. 原始自定义 DOM / inline SVG

常用映射：

| 原始元素 | M8 组件 |
|---------|---------|
| `button` | `em-button` |
| `input` | `em-field` |
| `textarea` | `em-field type="textarea"` |
| 上传占位、相机入口 | `em-uploader` |
| 数量加减控件 | `em-stepper` |
| 普通图片 | `em-image` |
| 评分星级 | `em-rate` |
| 开关 | `em-switch` |
| 复选框 | `em-checkbox` |
| 轮播 | `em-swipe` |
| 弹出操作面板 | `em-actionsheet` |
| 数据图表 | `em-chart` |

若 M8 组件已能满足，不保留原始自定义结构。

如需确认某个 em-* 组件的具体 API，请直接读取 `references/knowledge/m8mpdoc/UI组件库/` 下对应的文档。

## Tailwind CSS → SCSS 转换规则

**ZIP 转换模式下，Tailwind CSS 类必须精确转换为对应的 SCSS 样式，不允许残留任何 Tailwind 类名。**

详细的 Tailwind → SCSS 映射表见 `references/knowledge/standards/tailwind-to-scss.md`。

### 核心转换原则

1. **精确对应** — 每个 Tailwind 类都必须找到对应的 SCSS 属性，不能丢弃
2. **语义化类名** — 转换后的 SCSS 使用有业务含义的类名（如 `.order-item`、`.submit-btn`），不要用 `.flex-col-center`
3. **嵌套组织** — 利用 SCSS 嵌套，按组件结构层级组织样式
4. **变量提取** — 反复出现的颜色、间距值提取为 SCSS 变量，并对应到 `config.js` 可配置项
5. **响应式处理** — Tailwind 响应式前缀（`sm:`、`md:`、`lg:`）在小屏组件场景通常不需要，取移动端默认值即可
6. **hover/focus 状态** — `hover:` / `focus:` 前缀转为对应的 SCSS `&:hover` / `&:focus` 嵌套

### 快速参考（常用）

| Tailwind | SCSS |
|----------|------|
| `flex` / `flex-col` | `display: flex;` / `flex-direction: column;` |
| `items-center` / `justify-between` | `align-items: center;` / `justify-content: space-between;` |
| `p-{n}` / `m-{n}` | `padding: {n*4}px;` / `margin: {n*4}px;` |
| `text-sm` / `text-base` / `text-lg` | `font-size: 14px;` / `16px;` / `18px;` |
| `font-medium` / `font-bold` | `font-weight: 500;` / `700;` |
| `rounded-lg` / `rounded-full` | `border-radius: 8px;` / `9999px;` |
| `shadow-md` | `box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), ...;` |
| `truncate` | `overflow: hidden; text-overflow: ellipsis; white-space: nowrap;` |

## 资源处理规则

### 目录
统一使用组件目录下的 `img/`，不生成 `images/`。

### 保留策略
- 业务图标、lucide 图标、需要保真的 SVG → 沉淀到 `img/`
- 远程示例商品图 → 保留在 `mock/data.js`
- 纯设备壳层图标（属于跳过区域）→ 不导出

## 组件代码硬性要求

### 1. 目录结构

生成结果必须符合：

```text
src/components/card_components/<ComponentName>/
├── css/index.scss
├── img/
├── js/base.js
├── js/config.js
├── mock/data.js
├── plugin/boxoptions/config.js
├── plugin/eventgenerate/index.js
├── index.vue
└── index.js
```

### 2. 命名
- 文件夹名 = `base.module_name`
- `base.module_name` 必须等于组件英文名
- 统一使用 `PascalCase`

### 3. 生命周期与导出

`index.vue` 必须满足：
- `name: base.module_name`
- 混入 `eventMixin`
- `_getConfig: () => defaultConfig`
- `_getMockData: () => mockData`
- `mounted()` 中必须触发 `this.eventGenerate('onMounted', ...)`

### 4. 配置

`config.js` 必须包含：
- `boxOptions`
- 至少一组业务配置
- `interaction.event`

事件按业务需要补充，例如：`onClick`、`onSubmit`、`onQuantityChange`、`onUploadChange`

### 5. 配置项类型

config.js 中配置项的 type 可选值：

| type | 说明 |
|------|------|
| `colors` | 颜色面板 |
| `array` | 数组类型（动态列表） |
| `tab` | 标签页类型 |
| `text` | 文本输入框 |
| `number` | 数字输入框 |
| `boolean` | 布尔开关 |
| `radio` | 单选按钮 |
| `select` | 下拉选择框 |
| `color` | 颜色选择器 |
| `range` | 滑块组件 |
| `uploadimage` | 图片上传 |
| `uploadvideo` | 视频上传 |
| `uploadfile` | 文件上传 |
| `area` | 区域选择器 |
| `componentselect` | 组件选择器 |
| `pageselect` | 页面选择器 |
| `code` | 代码编辑器 |
| `boxmodel` | 盒子模型控件 |
| `formmodelselect` | 表单模型选择器 |

### 6. 代码验证

对生成的 `.vue`、`.scss`、`.js` 文件依据 `references/knowledge/standards/` 下的编码规范进行自检，有问题则修正后重新写入。

## 生成后检查清单

完成后至少自检：

- [ ] `base.module_name === 文件夹名`
- [ ] `index.vue` 含 `_getConfig` 和 `_getMockData`
- [ ] `mounted()` 已触发 `onMounted`
- [ ] `config.js` 已包含 `boxOptions`
- [ ] 样式已转换为 SCSS，无 Tailwind/CSS-in-JS 残留
- [ ] 未重构顶部状态栏、顶部导航栏、底部黑线（除非用户要求）
- [ ] 已执行 `npm run ioc start <ComponentName>` 且测试通过
- [ ] 组件目录下已生成 `README.md`（包含组件简介、配置项说明、事件说明、使用示例）

## 示例场景

### 示例 1：ZIP 转换

> 用户：把 `worlddemo.zip` 转成 IOC 低码组件

执行流程：
1. 运行 `scripts/analyze_source.py` 分析 zip
2. 识别并跳过导航栏、状态栏、home indicator
3. 以最匹配的模板为结构参考
4. 优先使用 `em-*` 组件
5. 输出到 `src/components/card_components/<ComponentName>/`
6. 执行 `npm run ioc start` 确保测试通过

### 示例 2：Figma 设计稿

> 用户：根据 Figma 设计稿生成组件，fileKey: 9nEUPUYtLMIcUauoIpVWku, nodeId: 1-2706

执行流程：
1. 通过 figma-mcp 获取设计数据
2. 分析布局、样式、交互元素
3. 映射为 M8 em-* 组件
4. 生成完整 IOC 组件目录
5. 执行测试确保通过

### 示例 3：文字描述

> 用户：帮我生成一个"售后申请"低码组件，包含退款说明、上传凭证、联系电话、商品退款数量和提交按钮

执行流程：
1. 分析需求，匹配 `MineEvaluateAdd` 模板
2. 直接生成组件，使用 `em-field`、`em-uploader`、`em-button`、`em-stepper`
3. 按 IOC 规范落盘所有文件
4. 执行测试确保通过
