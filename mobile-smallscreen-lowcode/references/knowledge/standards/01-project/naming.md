# 命名规范

> 定义 M8 项目中各类资源的命名规则。

## 📝 文件命名

### Vue 文件

| 类型     | 规则                     | 示例                                |
| -------- | ------------------------ | ----------------------------------- |
| 页面组件 | 小写字母 + 数字 + 下划线 | `user_list.vue`, `order_detail.vue` |
| 通用组件 | PascalCase（大驼峰）     | `UserCard.vue`, `SearchBar.vue`     |

**禁止规则**：

- ❌ 禁止使用中文
- ❌ 禁止使用特殊字符
- ❌ 禁止使用大写字母（页面组件）

```
✅ 正确: user_profile.vue, order_list.vue
❌ 错误: UserProfile.vue, 用户列表.vue, order-list.vue
```

### 资源文件

| 类型 | 规则                | 示例                             |
| ---- | ------------------- | -------------------------------- |
| 图片 | `img_` 前缀 + 描述  | `img_logo.png`, `img_banner.jpg` |
| 图标 | `icon_` 前缀 + 描述 | `icon_home.svg`, `icon_user.png` |
| 样式 | 与 Vue 文件同名     | `login.scss`, `user_list.scss`   |

### 目录命名

| 类型     | 规则              | 示例                          |
| -------- | ----------------- | ----------------------------- |
| 模块目录 | 小写字母 + 下划线 | `user_center`, `order_manage` |
| 组件目录 | `components`      | 固定名称                      |
| 样式目录 | `css`             | 固定名称                      |
| 图片目录 | `images`          | 固定名称                      |

## 🏷️ 代码命名

### JavaScript/TypeScript

| 类型 | 规则                  | 示例                              |
| ---- | --------------------- | --------------------------------- |
| 变量 | camelCase（小驼峰）   | `userName`, `orderList`           |
| 常量 | UPPER_SNAKE_CASE      | `MAX_COUNT`, `API_BASE_URL`       |
| 函数 | camelCase             | `getUserInfo()`, `handleSubmit()` |
| 类   | PascalCase            | `UserService`, `OrderManager`     |
| 接口 | PascalCase + `I` 前缀 | `IUserInfo`, `IOrderData`         |
| 类型 | PascalCase + `T` 前缀 | `TStatus`, `TCallback`            |

**变量声明原则**：

```javascript
// ✅ 优先使用 const
const userName = "admin";
const userList = [];

// ⚠️ 仅在需要重新赋值时使用 let
let currentPage = 1;
currentPage = 2;

// ❌ 禁止使用 var
var oldStyle = "deprecated";
```

### CSS 命名

采用 **BEM 命名规范**：

| 类型               | 格式               | 示例                             |
| ------------------ | ------------------ | -------------------------------- |
| 块（Block）        | `.block`           | `.card`, `.header`               |
| 元素（Element）    | `.block__element`  | `.card__title`, `.header__logo`  |
| 修饰符（Modifier） | `.block--modifier` | `.card--active`, `.btn--primary` |

```scss
// ✅ 正确的 BEM 命名
.user-card {
  &__avatar {
    /* 元素 */
  }
  &__name {
    /* 元素 */
  }
  &--vip {
    /* 修饰符 */
  }
}

// ❌ 错误示例
.userCard {
  /* 禁止驼峰 */
}
.UserCard {
  /* 禁止大写 */
}
```

**class/id 命名规则**：

- ✅ 使用小写字母
- ✅ 使用中划线连接
- ❌ 禁止使用大写
- ❌ 禁止使用驼峰
- ❌ 避免过度简写

## 🛣️ 路由命名

```javascript
const routes = [
  {
    // 格式: pages/[module_name]/[page_name]
    path: "pages/user_center/profile",
    style: {
      navigationBarTitleText: "个人中心",
    },
  },
];
```

## 📦 Store 命名

### Vue2 (Vuex)

```javascript
export default {
  // 模块名与目录名一致
  moduleName: "user_center",
  namespaced: true,
  state: {},
  mutations: {},
  actions: {},
};
```

### Vue3 (Pinia)

```typescript
// 命名规则: use + 模块名 + Store
export const useUserCenterStore = defineStore("user_center", {
  state: () => ({}),
  getters: {},
  actions: {},
});
```

## ✅ 命名检查清单

- [ ] 页面 Vue 文件使用小写 + 下划线
- [ ] 通用组件使用 PascalCase
- [ ] 变量/函数使用 camelCase
- [ ] 常量使用 UPPER_SNAKE_CASE
- [ ] CSS 类名使用 BEM 规范
- [ ] 图片资源使用 `img_` 前缀
