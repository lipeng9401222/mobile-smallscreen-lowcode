# EJS API 规范

> 定义 M8 框架 EJS API 的使用规范与示例。

## 🚀 路由类 API

### ejs.page.open - 打开新页面

```javascript
// 完整用法
ejs.page.open({
  pageUrl: "./detail", // 页面地址
  pageStyle: 1,
  orientation: 1,
  alive: 0, // 0不保活，1保活
  data: {
    // 传递参数
    id: "12345",
  },
  useRouter: true,
  success: function (result) {
    // 目标页面关闭后回调
  },
  error: function (error) {},
});

// 快速调用
ejs.page.open("./detail", { id: "12345" });
```

**URL 规则**：

- 同模块跳转：`'./路由名称'`
- 跨模块跳转：`'../模块名称/路由名称'`

### ejs.page.close - 关闭页面

```javascript
// 完整用法
ejs.page.close({
  resultData: { key: "value" },
  success: function (result) {},
  error: function (error) {},
});

// 快速调用
ejs.page.close(JSON.stringify({ key: "value" }));
ejs.page.close();
```

### ejs.page.replace - 替换页面

```javascript
ejs.page.replace({
  url: "./new-page",
  success: function (result) {},
  error: function (error) {},
});

// 快速调用
ejs.page.replace("./new-page");
```

### ejs.page.reload - 重新加载

```javascript
ejs.page.reload();
// 注意：微信小程序请使用 uniapp API
```

## 💬 UI 类 API

### ejs.ui.toast - 轻提示

```javascript
ejs.ui.toast("操作成功");
```

### ejs.ui.alert - 弹窗提示

```javascript
// 完整用法
ejs.ui.alert({
  title: "提示",
  message: "操作已完成",
  buttonName: "确定",
  cancelable: 1,
  h5UI: false,
  success: function (result) {
    // 点击按钮后回调
  },
});

// 快速调用
ejs.ui.alert(message, title, buttonName);
```

### ejs.ui.confirm - 确认对话框

```javascript
ejs.ui.confirm({
  title: "确认操作",
  message: "是否删除该记录？",
  buttonLabels: ["取消", "确定"],
  cancelable: 1,
  h5UI: false,
  success: function (result) {
    // result.which: 0=取消, 1=确定
    if (result.which === 1) {
      // 确认操作
    }
  },
});
```

### ejs.ui.showWaiting / closeWaiting - 加载提示

```javascript
// 显示加载
ejs.ui.showWaiting("正在加载...");

// 关闭加载
ejs.ui.closeWaiting();
```

## 📅 选择器 API

### ejs.ui.pickDate - 日期选择

```javascript
ejs.ui.pickDate({
  title: "选择日期",
  datetime: "2024-01-01", // 默认日期
  minDate: "2020-01-01", // 最小日期
  maxDate: "2030-12-31", // 最大日期
  h5UI: false,
  success: function (result) {
    console.log(result.date); // '2024-01-15'
  },
});
```

### ejs.ui.pickTime - 时间选择

```javascript
ejs.ui.pickTime({
  title: "选择时间",
  datetime: "10:30",
  minHour: 0,
  maxHour: 23,
  minMinute: 0,
  maxMinute: 59,
  h5UI: false,
  success: function (result) {
    console.log(result.time); // '14:30'
  },
});
```

### ejs.ui.pickDateTime - 日期时间选择

```javascript
ejs.ui.pickDateTime({
  title: "选择日期时间",
  datetime: "2024-01-01 10:30",
  minDate: "2020-01-01",
  maxDate: "2030-12-31",
  h5UI: false,
  success: function (result) {
    console.log(result.datetime); // '2024-01-15 14:30'
    console.log(result.week); // '周一'
  },
});
```

## 📌 使用优先级

> **API 优先于组件使用**

| 场景       | 使用方案             |
| ---------- | -------------------- |
| 消息提示   | `ejs.ui.toast`       |
| 确认对话框 | `ejs.ui.confirm`     |
| 加载提示   | `ejs.ui.showWaiting` |
| 日期选择   | `ejs.ui.pickDate`    |
| 时间选择   | `ejs.ui.pickTime`    |

## ✅ 检查清单

- [ ] 优先使用 EJS API 而非组件
- [ ] 页面跳转使用正确的 URL 格式
- [ ] 加载提示成对使用 show/close
