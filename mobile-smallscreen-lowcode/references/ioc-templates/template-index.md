# IOC 参考模板索引

只打开与当前任务最接近的 1 到 2 个模板，不要一次性把全部模板内容加载到上下文里。

## 完整模板

### `ShoppingCart`（通用业务模板 ⭐ 推荐首选）

适合：

- 商品列表、数量增减、勾选、汇总
- 供应商分组、tab 切换
- 底部操作栏（全选 + 合计 + 提交按钮）
- 滑动删除

关注点：

- `em-stepper`、`em-checkbox`、`em-tabs`、`em-swipe-cell`、`em-button`
- filters 价格整数/小数分离
- 列表事件（onStoreClick / onGoodsClick / onDelete / onNumChange / onSubmit）
- 全选/反选逻辑、总价计算

也可参考用于：

- 订单确认页（去掉 tabs + stepper，加备注输入）
- 售后申请（替换列表为表单组件）
- 轮播展示（替换列表为 em-swipe）

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

---

## 无完整模板的场景 — 关键代码片段

以下场景不提供完整模板，但提供核心代码片段。生成时以 `ShoppingCart` 为骨架参考，替换业务部分即可。

### 轮播/滑动卡片

**核心组件**：`em-swipe` + `em-swipe-item` + `em-empty`

```vue
<!-- 轮播容器 -->
<em-swipe :autoplay="autoplay ? interval : -1" :duration="300" @change="onSwiperChange">
    <em-swipe-item v-for="(group, idx) in groupedData" :key="idx">
        <div class="product-row">
            <div v-for="item in group" :key="item.id" class="product-card" @click="onItemClick(item)">
                <image :src="item.imageUrl" mode="aspectFill" lazy-load />
                <div class="title">{{ item.title }}</div>
                <div class="price">{{ item.price }}</div>
            </div>
        </div>
    </em-swipe-item>
    <!-- 自定义指示器 -->
    <template #indicator>
        <div class="custom-indicator">
            <i v-for="(g, i) in groupedData" :key="i"
               :style="i === currentPage ? activeStyle : normalStyle"></i>
        </div>
    </template>
</em-swipe>
```

**数据分组**：

```js
// 将平铺数据按每行 N 个分组
computed: {
    groupedData() {
        const n = this.config?.options?.itemsPerRow || 3;
        const groups = [];
        for (let i = 0; i < this.data.length; i += n) {
            groups.push(this.data.slice(i, i + n));
        }
        return groups;
    }
}
```