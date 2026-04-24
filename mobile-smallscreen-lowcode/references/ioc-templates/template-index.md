# IOC 参考模板索引

只打开与当前任务最接近的 1 到 2 个模板，不要一次性把全部模板内容加载到上下文里。

## 模板选择建议

### `MineEvaluateAdd`

适合：

- 售后申请
- 评价表单
- 文本说明
- 上传图片或视频
- 提交按钮

关注点：

- `em-rate`
- `textarea`
- `em-uploader`
- `onSubmit`

### `OrderPay`

适合：

- 订单确认
- 金额小计
- 底部提交栏
- 备注输入
- 商品价格标题、价格拆分展示

关注点：

- 金额展示
- 列表小计
- 底部操作条
- 价格整数/小数分离
- 标签信息

### `ShoppingCart`

适合：

- 商品列表
- 数量增减
- 勾选
- 汇总

关注点：

- `em-stepper`
- `em-checkbox`
- 列表事件
- 子组件拆分

### `GoodsSimilar`

适合：

- 滑动卡片
- 轮播展示
- 图片宫格

关注点：

- `em-swipe`
- 图片卡片布局
- 自定义指示器
- 空状态处理

### `CustomerServiceSheet`

适合：

- 客服电话弹框
- 弹出面板交互（ActionSheet）
- 拨打电话
- 带确认/取消的操作面板

关注点：

- `em-actionsheet`
- 弹框生命周期（open / select / cancel / close）
- `uni.makePhoneCall` / `ejs.device.callPhone` / `tel:` 多端拨号兼容
- 编辑器模式检测（`isEditorMode`）
- 组件对外暴露方法（`openSheet` / `closeSheet` / `toggleSheet`）

### `RingCharts`

适合：

- 环形图 / 饼图
- 简单数据占比展示
- 图表类组件入门

关注点：

- `em-chart` 组件用法
- `async mounted` + `getInstance` 异步初始化模式
- `watch` 数据变化时 `refresh` 重绘
- 动态获取父容器宽度并 `resize`
- ECharts 中心文字（graphic + title rich text）

### `ZbMixedChartsEmChart`（进阶参考）

适合：

- 柱状图 + 折线图混合
- 双 Y 轴图表
- 需要 dataZoom 滑动的长数据图表
- 复杂图表配置

关注点：

- 多系列（bar + line）组合
- 左右双 Y 轴配置
- `dataZoom`（slider + inside）滑动控制
- 丰富的 tooltip 自定义 formatter
- 图例（legend）配置

> **注意：** 该模板 config.js 较为庞大（1300+ 行），仅在需要复杂图表时参考，简单图表请优先使用 `RingCharts`。
