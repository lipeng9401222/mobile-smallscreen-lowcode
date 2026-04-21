# Util 工具方法

> M8 框架全局工具方法使用规范。`Util` 已全局注入，直接使用即可。

## ⚠️ 重要提示

```javascript
// ❌ 禁止 import
import { Util } from "@shared";

// ✅ 直接使用
Util.string.isMobile("18888888888");
```

## 📱 Util.string - 字符串验证

### 手机号验证

```javascript
Util.string.isMobile("18962299766"); // true
Util.string.isMobile("1896229976"); // false
```

### 固定电话验证

```javascript
Util.string.isTel("051258222222"); // true
Util.string.isTel("1896229976"); // false
```

### 电话号码验证（手机+固话）

```javascript
Util.string.isPhone("18962299766"); // true
Util.string.isPhone("051258222222"); // true
Util.string.isPhone("1896229976"); // false
```

### 邮箱验证

```javascript
Util.string.isEmail("test@qq.com"); // true
Util.string.isEmail("user.name@example.com"); // true
```

### 邮政编码验证

```javascript
Util.string.isPostCode("215600"); // true
Util.string.isPostCode("21560"); // false
```

### 组织机构代码验证

```javascript
Util.string.isOrgCode("91320582704068740Y"); // true
Util.string.isOrgCode("91320582704068740a"); // false
```

### 身份证验证

```javascript
Util.string.isIdCard("320926195511175276"); // true
Util.string.isIdCard("320582199566666614"); // false
```

## 🔑 Util.uuid - 唯一标识生成

```javascript
const id = Util.uuid();
// 返回: "550e8400-e29b-41d4-a716-446655440000"
```

## 🍪 Util.cookie - Cookie 操作

### 设置 Cookie

```javascript
// 基础设置
Util.cookie.set("token", "abc123");

// 设置过期时间（秒）
Util.cookie.set("token", "abc123", { "max-age": "3600" });
```

### 获取 Cookie

```javascript
const token = Util.cookie.get("token");
```

### 删除 Cookie

```javascript
// 默认路径
Util.cookie.remove("token");

// 自定义路径
Util.cookie.remove("token", { path: "/" });
```

## 📡 Util.ajax - 网络请求

```javascript
Util.ajax({
  url: Config.serverUrl + "/api/data",
  data: {
    params: JSON.stringify({ id: "123" }),
  },
})
  .then((res) => {
    console.log("成功:", res);
  })
  .catch((error) => {
    console.error("失败:", error);
  });
```

## 📤 Util.upload - 文件上传

```javascript
Util.upload({
  url: Config.serverUrl + "/api/upload",
  filePath: file.path,
  name: file.name,
  formData: { userId: "user123" },
  success: (res) => {
    console.log("上传成功:", res);
  },
});
```

## 📦 Util.getExtraDataByKey - 获取传参（Vue2）

```javascript
// Vue2 created 中获取页面传参
created() {
    const id = Util.getExtraDataByKey('id') || '';
    this.loadDetail(id);
}
```

## 📋 常用方法速查

| 方法                          | 说明                  |
| ----------------------------- | --------------------- |
| `Util.string.isMobile(str)`   | 验证手机号            |
| `Util.string.isTel(str)`      | 验证固定电话          |
| `Util.string.isPhone(str)`    | 验证电话（手机+固话） |
| `Util.string.isEmail(str)`    | 验证邮箱              |
| `Util.string.isPostCode(str)` | 验证邮政编码          |
| `Util.string.isIdCard(str)`   | 验证身份证            |
| `Util.string.isOrgCode(str)`  | 验证组织机构代码      |
| `Util.uuid()`                 | 生成 UUID             |
| `Util.cookie.set(key, value)` | 设置 Cookie           |
| `Util.cookie.get(key)`        | 获取 Cookie           |
| `Util.cookie.remove(key)`     | 删除 Cookie           |
| `Util.ajax(options)`          | 发起请求              |
| `Util.upload(options)`        | 文件上传              |
| `Util.getExtraDataByKey(key)` | 获取页面传参          |

## ✅ 检查清单

- [ ] 未通过 import 导入 Util
- [ ] 优先使用 Util 提供的验证方法
- [ ] 表单验证使用 Util.string 系列方法
