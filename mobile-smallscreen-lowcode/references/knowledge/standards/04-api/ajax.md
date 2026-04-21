# Ajax 请求规范

> 定义 M8 项目中 Ajax 请求的使用规范与示例。

## 📡 普通 Ajax 请求

### 基础用法

```javascript
Util.ajax({
  url: Config.serverUrl + "/api/user/detail",
  data: {
    params: JSON.stringify({
      userId: "12345",
    }),
  },
})
  .then((res) => {
    console.log("请求成功:", res);

    // 标准响应处理
    if (res?.status?.code === 1) {
      const data = res.custom;
      // 处理数据
    }
  })
  .catch((error) => {
    console.error("请求失败:", error);
  })
  .finally(() => {
    // 请求完成（无论成功失败）
    ejs.ui.closeWaiting();
  });
```

### 带加载提示

```javascript
ejs.ui.showWaiting("加载中...");

Util.ajax({
  url: `${Config.serverUrl}/api/data`,
  data: {
    params: JSON.stringify({ id: "123" }),
  },
})
  .then((res) => {
    if (res?.status?.code === 1) {
      // 处理数据
    } else {
      ejs.ui.toast(res?.status?.message || "请求失败");
    }
  })
  .catch((error) => {
    ejs.ui.toast("网络请求失败");
  })
  .finally(() => {
    ejs.ui.closeWaiting();
  });
```

## 📤 文件上传

### 跨端上传（推荐）

支持 H5、微信小程序、支付宝小程序：

```javascript
// afterRead 回调中处理上传
const afterRead = (file) => {
  Util.upload({
    url: `${Config.serverUrl}/api/upload`,
    filePath: file.path, // 文件路径
    name: file.name, // 文件名
    formData: {
      userId: "user123",
    },
    success: (res) => {
      console.log("上传成功:", res);
    },
    fail: (error) => {
      console.error("上传失败:", error);
    },
  });
};
```

### H5 专用上传

```javascript
const afterRead = (file) => {
  Util.upload({
    url: `${Config.serverUrl}/api/upload`,
    files: [{ file: file }],
    formData: {
      userId: "user123",
    },
    success: (res) => {
      console.log("上传成功:", res);
    },
  });
};
```

### 小程序文件名生成

```javascript
const generateFileName = (path) => {
  const timestamp = new Date().getTime();
  const random = Math.floor(Math.random() * 10000);
  const extension = path.toLowerCase().split(".").pop();
  return `file_${timestamp}_${random}.${extension}`;
};
```

## 📦 完整上传组件示例

```vue
<template>
  <em-uploader :after-read="afterRead" />
</template>

<script>
export default {
  methods: {
    afterRead(file) {
      // 判断是数组还是对象（多选/单选）
      const files = Array.isArray(file) ? file : [file];

      files.forEach((f) => {
        Util.upload({
          url: `${Config.serverUrl}/api/upload`,
          filePath: f.path,
          name: f.name || this.generateFileName(f.path),
          formData: { userId: "user123" },
          success: (res) => {
            console.log("上传成功:", res);
          },
          fail: (error) => {
            ejs.ui.toast("上传失败");
          },
        });
      });
    },

    generateFileName(path) {
      const timestamp = new Date().getTime();
      const random = Math.floor(Math.random() * 10000);
      const extension = path.toLowerCase().split(".").pop();
      return `file_${timestamp}_${random}.${extension}`;
    },
  },
};
</script>
```

## 📋 文件对象属性

| 属性   | 说明     | 平台   |
| ------ | -------- | ------ |
| `path` | 文件路径 | 全平台 |
| `file` | 文件对象 | 全平台 |
| `name` | 文件名   | 仅 H5  |
| `size` | 文件大小 | 仅 H5  |

## ⚠️ 注意事项

1. **跨端兼容**：小程序使用 `filePath` + `name`，H5 使用 `files`
2. **文件名获取**：小程序环境下需手动生成文件名
3. **多选处理**：`afterRead` 多选时返回数组，单选返回对象

## ✅ 检查清单

- [ ] 使用 `Util.ajax` 发起请求
- [ ] 请求参数使用 `JSON.stringify`
- [ ] 正确处理响应状态码
- [ ] 添加 loading 状态
- [ ] 文件上传区分平台
