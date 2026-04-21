# 性能优化规范

> 定义 Vue 应用的性能优化策略与最佳实践。

## 🎯 核心性能指标

| 指标    | 说明         | 目标    |
| ------- | ------------ | ------- |
| **LCP** | 最大内容绘制 | < 2.5s  |
| **FID** | 首次输入延迟 | < 100ms |
| **CLS** | 累计布局偏移 | < 0.1   |

**检测工具**：Lighthouse、WebPageTest

## ⚡ 渲染优化

### v-show vs v-if

| 指令     | 特点          | 适用场景     |
| -------- | ------------- | ------------ |
| `v-show` | CSS 切换显示  | 频繁切换     |
| `v-if`   | 完全销毁/创建 | 条件很少改变 |

### 合理使用 computed

```javascript
// ✅ 使用 computed：有缓存
const filteredList = computed(() => list.value.filter((item) => item.active));

// ❌ 避免 methods：每次渲染都重新计算
```

### keep-alive 缓存

```vue
<keep-alive include="UserList,OrderList">
  <router-view />
</keep-alive>
```

## 📦 代码分割

### Vue3 异步组件

```typescript
import { defineAsyncComponent } from "vue";
const AsyncComponent = defineAsyncComponent(
  () => import("./HeavyComponent.vue")
);
```

### Suspense 包裹

```vue
<Suspense>
  <template #default><AsyncComponent /></template>
  <template #fallback><div>加载中...</div></template>
</Suspense>
```

## 🖼️ 图片优化

- 使用 WebP 格式
- 设置尺寸属性（避免 CLS）
- 启用懒加载 `lazy-load`
- 压缩图片 < 100KB

## ✅ 性能检查清单

- [ ] 频繁切换使用 `v-show`
- [ ] 使用 `computed` 替代方法调用
- [ ] 适当使用 `keep-alive` 缓存
- [ ] 非关键组件动态加载
- [ ] 图片使用 WebP 格式并懒加载
