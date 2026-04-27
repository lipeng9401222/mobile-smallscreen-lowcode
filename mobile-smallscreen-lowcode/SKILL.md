---
name: mobile-smallscreen-lowcode
description: 将各种来源（Google AI Studio zip 压缩包、Figma 设计稿、文字需求描述）转换为 M8 IOC 小屏低代码组件。当用户提到低代码组件、小屏组件、IOC 组件、card_components、Google AI Studio 转组件、Figma 转低代码、React+Tailwind 转 IOC、生成低代码组件、创建小屏卡片组件等场景时，都应优先使用这个技能。即使用户没有明确说"低代码"，只要涉及 M8 框架下的移动端组件开发、卡片组件创建，也应触发。
license: MIT
compatibility: Standalone skill package with embedded references/ and scripts/. Figma mode requires figma-mcp configured.
metadata:
  author: juanjuan
  version: "1.1.0"
---

# Mobile SmallScreen LowCode 组件生成器

统一的小屏低代码组件生成技能，支持三种输入模式：

1. **ZIP 转换模式** — Google AI Studio / React+Tailwind 压缩包转 IOC 组件
2. **Figma 设计稿模式** — 从 Figma 设计稿直接生成 IOC 组件
3. **文字描述模式** — 根据需求文字描述直接生成 IOC 组件

## ⛔ 作业边界（硬约束，必须遵守）

执行任何模式前，先把以下边界写进短期记忆，**任何一条违反都属于严重事故**：

1. **只允许在新组件目录内创建/写入文件**：唯一可写区域是 `<项目根>/src/components/card_components/<ComponentName>/`（以及该组件目录内的子目录、`conversion_report.md`）。
2. **禁止重命名、移动、删除项目里任何已有的文件或文件夹**。包括但不限于：
   - 不要给任何已存在的文件夹追加扩展名后缀（例如 `js/` → `js.svg/`、`img/` → `img.svg/` 都是严重错误）。
   - 不要"批量统一"现有目录的命名风格。
   - 不要因为目录里有 svg 文件就把目录名改成 `.svg`。
3. **SVG / 图标资源处理规则**：
   - 内联 SVG 需要落盘时，**只能**写入新组件目录的 `img/` 子目录里，文件名形如 `icon_<语义>.svg`，且只新建文件，不新建带 `.svg` 后缀的目录。
   - 不要扫描整个工程去把 SVG 图标搬家或重命名其所在文件夹。
4. **scaffold 操作只通过本技能内置脚本执行**：禁止用 `mv`、`os.rename`、`shutil.move` 之类的命令对用户项目里的文件夹做任何重命名/移动；本技能没有也不需要这种行为。
5. **目录结构的固定子目录名永远是**：`css/`、`img/`、`js/`、`mock/`、`plugin/boxoptions/`、`plugin/eventgenerate/`，全程不带任何扩展名后缀。
6. **改完后做自检**：组件落盘后，列出新组件目录下所有一级目录名，确认没有任何 `*.svg` / `*.png` / `*.js` 之类的目录名（即目录名不应包含 `.`）。

> 如果在任何时刻你"想"把一个文件夹改名加扩展名，停止——这一定是错的。直接把内容写成新组件目录里的文件即可。

## 快速决策树（先看这里）

进入技能后，**第一轮**只做这几件事，不要展开冗余分析：

1. **判断输入模式**（按优先级）：
   - zip 路径 / 工作区有 zip → 模式 A（ZIP 转换）
   - Figma `fileKey + nodeId` → 模式 B（Figma）
   - 仅文字描述 → 模式 C（文字描述）
   - 不确定 → 直接问用户，不要猜
2. **确认组件英文名**（PascalCase）：从用户输入 / zip 名 / Figma 节点名 / 描述提取，不确定就问
3. **确认项目根目录**（含 `package.json` 且 `scripts.ioc` 存在）
4. **按需读模板**：先读 `references/ioc-templates/template-index.md`，再选最多 2 个相近模板深读

每一步信息齐了才往下走，**不要重复读已经看过的文件**。

## 必读参考（按需读，最多 2 个模板）

第一轮先只读这三份核心文档，其余按需再读：

- `references/ioc-docs/第二步：小屏组件开发目录结构了解.md` — 目录结构规范
- `references/ioc-templates/template-index.md` — 模板选择指南
- `references/knowledge/standards/_index.md` — 编码标准索引（再按里面索引去读具体子项）

确认了模板后，再打开**最多 2 个最相近的模板**作为参考；不要把全部模板加载进上下文。

`em-*` 组件的 API 仅在用到时才读 `references/knowledge/m8mpdoc/UI组件库/` 下的对应文档。常用入口：

- `005-button按钮.md`、`013-field输入框.md`、`033-stepper步进器.md`、`040-uploader文件上传.md`、`044-image图片.md`

## 通用执行流程（按顺序，不要跳步）

| 步骤 | 关键动作 | 失败兜底 |
|------|---------|---------|
| 1. 环境检测 | 项目根目录有 `package.json` 且 `scripts.ioc` 存在 | 无 ioc → 用 `manual_scaffold.py` 降级 |
| 2. 创建骨架 | `npm run ioc create <ComponentName>` | 降级：`python scripts/manual_scaffold.py <ComponentName> --display-name "<中文名>" --target-root "<项目根>" --preset <form\|list\|sheet\|chart\|card>` |
| 3. 填充代码 | 按输入源 + 模板，写 `index.vue` / `config.js` / `index.scss` / `mock/data.js` | — |
| 4. 配置自检 | 对照 §4.1 推导清单逐项过，确保配置项尽量丰富 | 缺什么补什么再写盘 |
| 5. 运行测试 | `npm run ioc start <ComponentName>` | 失败读日志 → 修代码 → 重跑，循环到通过 |
| 6. 输出报告 | 在组件目录生成 `README.md` + 项目根 `conversion_report.md` | — |

`conversion_report.md` 至少包含：输入源类型、组件名与输出目录、使用的模板、跳过的区域、组件映射清单、`ioc create` / `ioc start` 执行情况、测试状态、待人工确认点。

---

## 模式 A：ZIP 转换

适用：Google AI Studio 导出的 React + Tailwind 压缩包，或任意 React 项目目录。

1. **分析源码**：

   ```bash
   python scripts/analyze_source.py "<zip或目录路径>" --output "<输出json>"
   ```

   产出：入口文件、依赖、Tailwind 类名、lucide 图标、内联 SVG、图片资源、可跳过区域、推荐模板。

2. **组件名优先级**：用户指定 → 压缩包/目录名 → 源码标题/`metadata.json.name` → `GeneratedIocComponent`。

3. **源码分析规则**：
   - 入口探测：`src/App.tsx` → `src/App.jsx` → `src/main.tsx` → `src/main.jsx` → 首个含 JSX 的文件
   - 只追踪本地相对 import，深度最多 2 层
   - 重点识别：表单区 / 上传区 / 列表区 / 数量调整区 / 提交按钮 / Tailwind 类名 / lucide 图标 / 内联 SVG / 远程图片

4. **固定跳过**（除非用户要求保留）：顶部状态栏、顶部导航栏、底部 home indicator。

5. **代码转换**：React + Tailwind → Vue2 + SCSS。Tailwind 不允许残留任何类名（详见下文 SCSS 转换规则）。

## 模式 B：Figma 设计稿

适用：用户提供 `{ fileKey, nodeId }`，依赖 figma-mcp。

1. 通过 figma-mcp 获取节点树、样式、布局
2. 提取设计 token：颜色、字体、间距、圆角；识别可交互元素（按钮、输入框、开关、上传等）
3. 用 `scripts/figma_parser.py <figma_data.json> --output <output.json>` 解析（可选辅助）
4. 映射到 `em-*` 组件（见下文映射表）
5. 图片资源下载到新组件目录的 `img/`

## 模式 C：文字描述

适用：仅有业务需求描述。

1. 解析描述：页面类型 / UI 元素 / 业务逻辑 / 样式偏好
2. 读 `references/ioc-templates/template-index.md`，选最相近的 1-2 个模板
3. 按模板结构生成完整组件代码 + 配置项（重点对照 §4.1 推导清单）

---

## 模板选择规则

先读 `references/ioc-templates/template-index.md`，只打开最接近的 1 到 2 个模板。

推荐映射：

**完整模板**（可直接打开参考）：

- 商品列表、数量加减、供应商分组、订单确认、底部提交栏 → `ShoppingCart`
- 弹框面板、拨号交互 → `CustomerServiceSheet`
- 环形图、饼图、简单数据占比 → `RingCharts`
- 柱状+折线混合图、双Y轴、dataZoom → `ZbMixedChartsEmChart`（进阶，config 较大）

**代码片段参考**（见 `template-index.md` 底部，无完整模板）：

- 轮播或卡片滑动展示 → template-index.md「轮播/滑动卡片」片段

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

### 4. 配置（重要 — 必须尽可能完善暴露给低码平台的可配置项）

`config.js` 必须包含：
- `boxOptions`（通用容器样式，必有）
- 至少一组**业务配置**（`contentConfig` / `styleConfig` / `listConfig` 等）
- `interaction.callback` 与 `interaction.event`

**核心原则：每一个用户在页面/设计稿/描述里能"看到"或"操作"的元素，都应该在 `config.js` 里有对应的可配置项。**不要只丢一个 `title` 就交差。

#### 4.1 配置项推导清单（按页面元素逐项排查）

落盘 `config.js` 之前，按以下表格自上而下逐项检查页面有没有这些元素，**有就必须暴露**：

| 页面元素 / 业务区 | 必须暴露的配置项 |
|------|------|
| 文字（标题、描述、按钮文案、占位符、空态文案、单位等） | 每条文字 → `text` 配置项 |
| 颜色（主色、强调色、文字色、背景色、边框色、按钮色） | 每种颜色 → `color` 配置项；批量同语义颜色用 `colors` 面板 |
| 字号 / 字重 | `number` 或 `select` 配置项 |
| 间距 / 圆角（非通用容器范围） | `number` / `text` |
| 显示/隐藏开关（如「显示价格」「显示销量」「显示评分」「展示分组头」） | `boolean` |
| 单选/枚举（布局方向、对齐方式、尺寸 sm/md/lg、tab 默认页） | `radio` 或 `select` + `options` |
| 数值范围（最大数量、最少字符、滑动间隔） | `number` 或 `range` |
| 图片资源（封面、占位图、空态图、Logo） | `uploadimage` |
| 视频 / 文件 | `uploadvideo` / `uploadfile` |
| 列表 / 菜单 / tab 项（条目可增删） | `array` + `template` + `dynamic: true` |
| 跳转/绑定的页面或组件 | `pageselect` / `componentselect` |
| 表单模型（如复用 M8 表单） | `formmodelselect` |
| 区域 / 行政区 | `area` |
| 自定义脚本扩展点 | `code` |

#### 4.2 命名与组织约定

- 顶层业务分组使用语义名：`contentConfig`、`styleConfig`、`listConfig`、`buttonConfig`、`emptyConfig` 等。
- 每个配置项必须有 `displayName`（中文，简洁）、`name`（英文 camelCase）、`type`、`value`（合理的默认值）。
- 颜色默认值用十六进制（`#333333`、`#ffffff`）。
- 文本默认值取自页面真实文案（来自 zip 源码 / Figma 文本节点 / 用户描述），避免 `请输入` 这种通用占位。
- 默认布尔值与页面初始状态保持一致（页面初始隐藏 → `false`，初始展示 → `true`）。
- 数组项的 `template` 必须与 `value` 中条目结构完全对齐，且每条条目都要有唯一的 `name`（例如 `phoneItem_1`、`phoneItem_2`）。

#### 4.3 事件（interaction.event）

事件至少包含 `onMounted`，其余按业务暴露**所有用户可触发的交互**。常见事件：

- `onClick` — 卡片/列表项整体点击
- `onSubmit` — 表单提交
- `onCancel` / `onClose` — 取消 / 关闭弹框
- `onChange` — 值变化（输入框、单选、开关等）
- `onTabChange` — Tab 切换
- `onUploadChange` — 上传成功/删除
- `onQuantityChange` / `onNumChange` — 数量加减
- `onDelete` — 列表项删除
- `onSwipeChange` — 轮播切换
- `onSelect` — 选中条目（弹框、菜单）
- `onCall` — 拨号
- `onItemClick` — 子条目点击（与卡片整体 `onClick` 区分时使用）

每个事件必须按 IOC 标准模板写：

```js
{
    name: 'onClick',
    displayName: 'onClick事件',
    dynamic: true,
    type: 'array',
    value: [],
    template: {
        name: 'templeteOnClick_1',
        displayName: '动作',
        type: 'text',
        value: 'console.log("onClick事件:", e)'
    }
}
```

并且在 `index.vue` 对应交互处真的调用 `this.eventGenerate('<eventName>', payload)`，**配置中声明了的事件，模板里必须有调用点**。

### 5. 配置项类型

config.js 中配置项的 `type` 可选值：

| type | 说明 |
|------|------|
| `text` | 文本输入框 |
| `number` | 数字输入框 |
| `boolean` | 布尔开关 |
| `radio` | 单选按钮 |
| `select` | 下拉选择框（需 `options`） |
| `color` | 颜色选择器 |
| `colors` | 颜色面板（多色批量） |
| `range` | 滑块组件 |
| `array` | 数组类型（动态列表，需 `template`） |
| `tab` | 标签页类型 |
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

完成后至少自检（每项都要在心里过一遍，确认通过再交付）：

**结构与命名**
- [ ] `base.module_name === 文件夹名`，PascalCase
- [ ] 新组件目录下的所有子目录名为 `css` / `img` / `js` / `mock` / `plugin`，**没有任何带 `.` 的目录名**
- [ ] 没有重命名 / 移动 / 删除新组件目录之外的任何文件或文件夹

**代码与生命周期**
- [ ] `index.vue` 含 `_getConfig` 和 `_getMockData`
- [ ] `mounted()` 已触发 `onMounted`
- [ ] 样式已转换为 SCSS，无 Tailwind/CSS-in-JS 残留
- [ ] 未重构顶部状态栏、顶部导航栏、底部黑线（除非用户要求）

**配置项完备度**（重点）
- [ ] `config.js` 已包含 `boxOptions`
- [ ] 已对照 §4.1 配置项推导清单逐项过一遍，页面上所有可见文案都暴露成 `text`
- [ ] 页面所有可见颜色都暴露成 `color` / `colors`
- [ ] 页面所有可隐藏 / 可切换的区域都暴露成 `boolean` / `select`
- [ ] 列表 / Tab / 菜单类数据都暴露成 `array` + `template`，并且 `template` 与现有 `value` 结构一致
- [ ] 所有图片（封面、占位、空态）都暴露成 `uploadimage`
- [ ] `interaction.event` 内每个声明的事件，在 `index.vue` 都有对应 `eventGenerate` 调用

**运行与产物**
- [ ] 已执行 `npm run ioc start <ComponentName>` 且测试通过
- [ ] 组件目录下已生成 `README.md`（包含组件简介、配置项说明、事件说明、使用示例）
- [ ] 已生成 `conversion_report.md`

## 示例场景（一句话提示）

- **ZIP**：`把 worlddemo.zip 转成 IOC 低码组件` → 模式 A，组件名取自 zip / 用户指定
- **Figma**：`根据 Figma 生成组件，fileKey: xxx, nodeId: xxx` → 模式 B，下载图片到 `img/`
- **文字描述**：`生成一个"售后申请"低码组件，包含退款说明、上传凭证、电话、退款数量、提交按钮` → 模式 C，参考 `ShoppingCart` 模板，使用 `em-field` / `em-uploader` / `em-button` / `em-stepper`，配置项尽量丰富
