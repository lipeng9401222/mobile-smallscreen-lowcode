# 路由规范

> 定义 M8 项目的路由配置规范。

## 📁 文件位置

```
src/pages/[module_name]/
├── [module_name].vue
└── router.js          # 路由配置
```

构建时会自动将模块下的路由配置合并到 `pages.json`。

## 📝 路由配置格式

```javascript
/**
 * router.js 无需 import 组件
 * path 路径与 vue 组件名称保持匹配
 * 有效参数只有 path 与 style
 */
const routes = [
  {
    path: "pages/user_center/index",
    style: {
      navigationBarTitleText: "用户中心",
      navigationStyle: "custom",
      navigationBarTextStyle: "white",
    },
  },
  {
    path: "pages/user_center/profile",
    style: {
      navigationBarTitleText: "个人资料",
    },
  },
];

const options = {
  // 是否自动分包
  autoSubPackages: true,
  // 是否为首页模块（autoSubPackages 为 true 时无效）
  isFirstModule: false,
};

export default { routes, options };
```

## 📋 style 配置项

| 属性                           | 类型    | 说明                           |
| ------------------------------ | ------- | ------------------------------ |
| `navigationBarTitleText`       | string  | 导航栏标题                     |
| `navigationStyle`              | string  | 导航栏样式：`default`/`custom` |
| `navigationBarTextStyle`       | string  | 标题颜色：`black`/`white`      |
| `navigationBarBackgroundColor` | string  | 导航栏背景色                   |
| `enablePullDownRefresh`        | boolean | 开启下拉刷新                   |
| `disableScroll`                | boolean | 禁止页面滚动                   |

## 🚀 页面跳转

### ejs.page.open

```javascript
// 同模块跳转
ejs.page.open("./profile");

// 跨模块跳转
ejs.page.open("../order/list");

// 带参数跳转
ejs.page.open({
  pageUrl: "./detail",
  data: {
    id: "12345",
  },
  success: (result) => {
    // 页面关闭后回调
  },
});
```

### 获取路由参数

**Vue2**：

```javascript
created() {
    const id = Util.getExtraDataByKey('id') || '';
    this.loadData(id);
}
```

**Vue3**：

```typescript
import { onLoad } from "@dcloudio/uni-app";

onLoad((options) => {
  const id = options?.id || "";
  loadData(id);
});
```

## ⚠️ 注意事项

1. **无需 import**：router.js 中不需要导入组件
2. **路径匹配**：path 必须与 vue 文件名对应
3. **数组格式**：routes 必须是数组
4. **有效参数**：仅 `path` 和 `style` 有效

## 📦 分包配置

```javascript
const options = {
  // 开启自动分包
  autoSubPackages: true,
};
```

分包后路由会自动放入 `subPackages`，减小主包体积。

## 🏠 首页配置

```javascript
const options = {
  autoSubPackages: false, // 必须关闭分包
  isFirstModule: true, // 设为首页模块
};
```

**注意**：所有模块仅支持一个首页模块。

## ✅ 检查清单

- [ ] router.js 放在模块目录下
- [ ] routes 为数组格式
- [ ] path 与 vue 文件名匹配
- [ ] 未在 router.js 中 import 组件
- [ ] 新页面已添加路由配置
