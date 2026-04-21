# Vue 基础规范

> 定义 Vue 开发的基础编码规范，适用于 Vue2 和 Vue3。

## 📋 通用编码规范

### 代码格式

| 规则 | 说明                                 |
| ---- | ------------------------------------ |
| 缩进 | 采用 4 个空格，避免 tab              |
| 行宽 | 每行不超过 120 个字符                |
| 空行 | `console` 代码与其他逻辑之间需有空行 |

### Console 使用规范

```javascript
// ❌ 错误：禁止使用空 console.log
console.log();

// ✅ 正确：必须包含描述信息
console.log("用户信息:", userInfo);

// ⚠️ 注意：console 代码前后需有空行
const data = fetchData();

console.log("获取的数据:", data);

processData(data);
```

### 变量声明

```javascript
// ✅ 优先使用 const
const MAX_COUNT = 100;
const userList = [];

// ⚠️ 仅在需要重新赋值时使用 let
let currentPage = 1;

// ❌ 禁止使用 var
```

## 🚫 禁止使用的元素

### 废弃的 HTML 标签

| 禁止使用   | 替代方案                 |
| ---------- | ------------------------ |
| `<font>`   | CSS `font-family`        |
| `<center>` | CSS `text-align: center` |
| `<b>`      | `<strong>`               |
| `<i>`      | `<em>` 或 CSS            |

### 废弃的 HTML 属性

| 禁止使用                 | 替代方案               |
| ------------------------ | ---------------------- |
| `align`                  | CSS `text-align`       |
| `valign`                 | CSS `vertical-align`   |
| `bgcolor`                | CSS `background-color` |
| `width/height`（非 img） | CSS                    |

## 📝 注释规范

### 文件头部注释

**每个 Vue 文件必须包含头部注释**，位于文件最顶部，`<template>` 标签之前。

#### 完整格式

```vue
<!--
 * @作者: 张三
 * @创建时间: 2024-11-11 14:20:03
 * @修改时间: 2024-11-11 14:20:03
 * @版本: [1.0]
 * @版权: 国泰新点软件股份有限公司
 * @描述: 用户登录页面，支持账号密码登录和短信验证码登录
-->
<template>
  <view class="login-container">
    <!-- 页面内容 -->
  </view>
</template>

<script>
// ...
</script>

<style lang="scss" scoped>
@import "./css/login.scss";
</style>
```

#### 字段说明

| 字段        | 必填 | 说明                                      |
| ----------- | ---- | ----------------------------------------- |
| `@作者`     | ✅   | 开发者姓名                                |
| `@创建时间` | ✅   | 文件创建时间，格式：`YYYY-MM-DD HH:mm:ss` |
| `@修改时间` | ✅   | 最后修改时间，每次修改后需更新            |
| `@版本`     | ✅   | 当前版本号，如 `[1.0]`、`[1.1]`           |
| `@版权`     | ✅   | 固定为 `国泰新点软件股份有限公司`         |
| `@描述`     | ✅   | 页面功能的简要描述                        |

#### 示例

**用户列表页**：

```vue
<!--
 * @作者: 李四
 * @创建时间: 2024-12-01 09:30:00
 * @修改时间: 2024-12-15 16:45:22
 * @版本: [1.2]
 * @版权: 国泰新点软件股份有限公司
 * @描述: 用户列表页面，支持分页加载、关键字搜索和下拉刷新
-->
```

**表单提交页**：

```vue
<!--
 * @作者: 王五
 * @创建时间: 2024-11-20 10:00:00
 * @修改时间: 2024-11-25 14:30:00
 * @版本: [1.0]
 * @版权: 国泰新点软件股份有限公司
 * @描述: 信息登记表单页面，包含基本信息填写和附件上传功能
-->
```

### 代码注释要求

| 注释类型 | 格式                                | 说明           |
| -------- | ----------------------------------- | -------------- |
| 变量注释 | `// 用户名`                         | 必须使用中文   |
| 函数注释 | 函数上方                            | 说明功能和参数 |
| TODO     | `// TODO: 待办内容（标记人，时间）` | 标记待完成事项 |
| 删除原因 | `// 已删除：原因说明`               | 解释删除的代码 |

```javascript
// Vue2 示例
export default {
  data() {
    return {
      userName: '',    // 用户名
      userAge: 0,      // 用户年龄
      isLogin: false   // 登录状态
    };
  },
  methods: {
    /**
     * 获取用户信息
     * @param {string} userId - 用户ID
     * @returns {Promise} 用户信息
     */
    getUserInfo(userId) {
      // TODO: 添加错误处理（张三，2024-11-11）
      return Util.ajax({...});
    }
  }
};
```

### 冗余代码处理

```javascript
// ❌ 禁止保留无说明的注释代码
// const oldData = fetchOldData();

// ✅ 如需保留，必须说明原因
// 已废弃：接口已更新为 v2 版本（2024-11-11）
// const oldData = fetchOldData();
```

## 🔧 全局变量使用

**以下变量已全局注入，禁止通过 import 导入**：

### Config

```javascript
// ❌ 错误用法
import { Config } from "@shared";

// ✅ 正确用法（直接使用）
const url = Config.serverUrl + "/api/users";
```

### Util

```javascript
// ❌ 错误用法
import { Util } from "@shared";

// ✅ 正确用法（直接使用）
Util.string.isMobile("18888888888");
Util.ajax({ url: "..." });
Util.uuid();
```

### ejs

```javascript
// ✅ 直接使用 ejs 对象
ejs.page.open("./detail");
ejs.ui.toast("操作成功");
ejs.ui.showWaiting("加载中...");
```

## 📂 目录结构

```
src/
├── components/    # 通用组件
├── pages/         # 页面视图
│   └── [module]/
│       ├── css/
│       ├── images/
│       ├── [page].vue
│       ├── router.js
│       ├── store.js
│       └── mock.js
├── shared/        # 配置文件
├── common/        # 通用文件
└── static/        # 静态资源
```

## ✅ 基础检查清单

- [ ] 使用 4 空格缩进
- [ ] 每行不超过 120 字符
- [ ] console 包含描述信息
- [ ] 优先使用 const
- [ ] 未使用废弃的标签/属性
- [ ] 文件包含头部注释
- [ ] 变量有中文注释
- [ ] 全局变量未通过 import 导入
