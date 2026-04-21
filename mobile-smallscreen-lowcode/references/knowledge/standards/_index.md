# M8 前端开发规范 - 统一入口

> 本文件汇总所有规范要点，便于 AI/工具快速读取。

---

## 一、项目规范

### 1.1 版本检测

- Vue2: `"vue": "^2.x.x"` → Options API
- Vue3: `"vue": "^3.x.x"` → Composition API + `<script setup>`
- **必须验证代码与 Vue 版本兼容**

### 1.2 目录结构

```
src/pages/[module_name]/
├── css/[module_name].scss    # 样式文件
├── images/                    # 图片资源
├── [module_name].vue          # 页面组件
├── router.js                  # 路由配置
├── store.js                   # 状态管理
└── mock.js                    # Mock 数据
```

### 1.3 命名规范

| 类型      | 规则        | 示例                |
| --------- | ----------- | ------------------- |
| 页面文件  | 小写+下划线 | `user_list.vue`     |
| 通用组件  | PascalCase  | `UserCard.vue`      |
| 变量/函数 | camelCase   | `userName`          |
| CSS 类名  | BEM + 小写  | `.user-card__title` |
| 图片资源  | `img_` 前缀 | `img_logo.png`      |

### 1.4 全局变量

**禁止 import，直接使用**：`Config`、`Util`、`ejs`

---

## 二、Vue 规范

### 2.1 样式分离

```vue
<!-- 禁止内联 CSS，使用外部引入 -->
<style lang="scss" scoped>
@import "./css/[module_name].scss";
</style>
```

### 2.2 API 优先原则

| 场景     | 使用方案             |
| -------- | -------------------- |
| 消息提示 | `ejs.ui.toast`       |
| 确认框   | `ejs.ui.confirm`     |
| 日期选择 | `ejs.ui.pickDate`    |
| 加载提示 | `ejs.ui.showWaiting` |

### 2.3 输入框规范

- readonly 必须添加 `is-link` + `clickable`
- 必须设置 `placeholder`
- textarea 建议添加 `autosize`

### 2.4 注释规范

**Vue 文件必须包含头部注释**（位于文件最顶部）：

```vue
<!--
 * @作者: author
 * @创建时间: 2025-01-08 14:20:03
 * @修改时间: 2025-01-08 14:20:03
 * @版本: [1.0]
 * @版权: 国泰新点软件股份有限公司
 * @描述: 页面功能描述
-->
```

| 字段        | 说明                             |
| ----------- | -------------------------------- |
| `@作者`     | 开发者姓名                       |
| `@创建时间` | 格式：`YYYY-MM-DD HH:mm:ss`      |
| `@修改时间` | 每次修改后需更新                 |
| `@版本`     | 如 `[1.0]`、`[1.1]`              |
| `@版权`     | 固定：`国泰新点软件股份有限公司` |
| `@描述`     | 页面功能简要描述                 |

### 2.5 样式穿透

- Vue2: `::v-deep`
- Vue3: `:deep()`

### 2.6 状态管理

- Vue2: Vuex (`store.js`)
- Vue3: Pinia (`store.ts`)

---

## 三、CSS 规范

### 3.1 BEM 命名

```scss
.block {
}
.block__element {
}
.block--modifier {
}
```

### 3.2 书写顺序

1. 位置属性 (position, display)
2. 大小属性 (width, margin)
3. 文字属性 (font, color)
4. 背景边框 (background, border)
5. 其他 (animation)

### 3.3 避免

- 深层嵌套 (>3 层)
- !important
- 标签选择器

---

## 四、API 规范

### 4.1 Ajax 请求

```javascript
Util.ajax({
  url: Config.serverUrl + "/api/data",
  data: { params: JSON.stringify({ id: "123" }) },
}).then((res) => {});
```

### 4.2 页面跳转

```javascript
ejs.page.open("./detail", { id: "123" });
ejs.page.close();
```

### 4.3 常用验证

```javascript
Util.string.isMobile("18888888888"); // 手机号
Util.string.isEmail("test@qq.com"); // 邮箱
Util.string.isIdCard("..."); // 身份证
```

---

## 五、路由规范

```javascript
// router.js - 无需 import 组件
const routes = [
  {
    path: "pages/[module]/[page]",
    style: { navigationBarTitleText: "标题" },
  },
];
export default { routes, options: { autoSubPackages: true } };
```

---

## 六、Mock 规范

```javascript
// mock.js
import Mock from "@mock";
const resultData = [
  {
    methodUrl: "/rest/api/list",
    input: {},
    output: Mock.mock({
      "infolist|10": [{ title: () => Mock.Random.csentence() }],
    }),
  },
];
export default resultData;
```

---

## 七、TypeScript 规范

- 显式声明类型
- 禁止使用 `any`
- 接口用 `I` 前缀：`IUserInfo`
- 类型用 `T` 前缀：`TStatus`
- 用常量对象替代枚举

---

## 八、检查清单

- [ ] 代码与 Vue 版本兼容
- [ ] CSS 已分离到 scss 文件
- [ ] 使用 scoped 样式
- [ ] 全局变量未 import
- [ ] readonly 输入框有 is-link
- [ ] 文件有头部注释
- [ ] 路由已配置
- [ ] 变量有中文注释
