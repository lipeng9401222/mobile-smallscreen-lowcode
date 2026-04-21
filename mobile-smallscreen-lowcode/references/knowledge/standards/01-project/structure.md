# 项目结构规范

> 定义 M8 项目的标准目录结构与文件组织方式。

## 📁 标准目录结构

```
ejs.m8.project/
├── src/
│   ├── components/              # 通用组件目录
│   │   └── [ComponentName].vue  # PascalCase 命名
│   │
│   ├── pages/                   # 页面视图目录
│   │   └── [module_name]/       # 模块目录（小写+下划线）
│   │       ├── css/             # 样式文件目录
│   │       │   └── [page_name].scss
│   │       ├── images/          # 模块图片资源
│   │       ├── [page_name].vue  # 页面组件
│   │       ├── router.js        # 路由配置
│   │       ├── store.js         # 状态管理（Vue2: Vuex）
│   │       ├── store.ts         # 状态管理（Vue3: Pinia）
│   │       └── mock.js          # Mock 数据定义
│   │
│   ├── shared/                  # 配置文件目录
│   │   └── config.js            # 全局配置
│   │
│   ├── common/                  # 通用文件目录
│   │   └── css/
│   │       └── common.extend    # 拓展样式
│   │
│   └── static/                  # 静态资源目录
│       └── [module_name]/       # 按模块存放静态资源
│           └── img_[name].png   # 图片以 img_ 为前缀
│
├── package.json
└── pages.json                   # 路由配置汇总（自动生成）
```

## 📄 文件组织规则

### 1. 页面文件组织

每个业务模块应包含以下文件：

| 文件                     | 必需 | 说明                     |
| ------------------------ | ---- | ------------------------ |
| `[module_name].vue`      | ✅   | 页面主组件               |
| `css/[module_name].scss` | ✅   | 页面样式（禁止内联样式） |
| `router.js`              | ✅   | 路由配置                 |
| `store.js/store.ts`      | ❌   | 状态管理（按需）         |
| `mock.js`                | ❌   | Mock 数据（开发阶段）    |
| `images/`                | ❌   | 模块专用图片资源         |

### 2. 样式文件分离

**规则**：Vue 文件中禁止直接编写 CSS 代码

```
src/pages/login/
├── login.vue           # 页面组件
└── css/
    └── login.scss      # 对应的样式文件
```

**Vue 文件中引用方式**：

```vue
<!-- style 标签与 script 标签同级 -->
<style lang="scss" scoped>
@import "./css/login.scss";
</style>
```

### 3. 静态资源存放

```
static/
├── notice/              # 与路由模块同名
│   ├── img_banner.png   # 以 img_ 为前缀
│   └── img_icon.png
└── login/
    └── img_logo.png
```

**引用方式**：

```html
<image src="/static/notice/img_banner.png" />
```

## 🔒 强制规则

| 规则             | 说明                 |
| ---------------- | -------------------- |
| 样式必须分离     | Vue 文件禁止内联 CSS |
| 使用 scoped 样式 | 避免全局样式污染     |
| 模块化存放       | 按模块组织文件       |
| 统一命名         | 同模块文件名保持一致 |

## ✅ 检查清单

- [ ] 页面组件放置在 `src/pages/[module_name]/` 下
- [ ] 样式文件放置在 `css/` 子目录
- [ ] 静态资源放置在 `static/[module_name]/` 下
- [ ] 图片命名以 `img_` 为前缀
- [ ] 路由配置在 `router.js` 中定义
