# 版本检测规范

> 定义 Vue 版本检测规则与版本特定的代码规范。

## 🔍 版本检测方法

在开始开发前，**必须**确定项目使用的 Vue 版本。

### 检测步骤

1. 打开 `package.json` 文件
2. 查找 `dependencies` 或 `devDependencies` 中的 `vue` 依赖
3. 根据版本号确定使用的规范

### 版本判断规则

| 版本号格式        | Vue 版本 | 适用规范                           |
| ----------------- | -------- | ---------------------------------- |
| `"vue": "^2.x.x"` | Vue2     | Options API                        |
| `"vue": "^3.x.x"` | Vue3     | Composition API + `<script setup>` |

```json
// Vue2 项目
{
  "dependencies": {
    "vue": "^2.6.14"
  }
}

// Vue3 项目
{
  "dependencies": {
    "vue": "^3.4.21"
  }
}
```

## ⚠️ 重要原则

> **在输出最终代码前，必须验证所有语法与检测到的 Vue 版本完全兼容**

## 📊 版本差异对照表

### 组件语法

| 特性       | Vue2                 | Vue3                        |
| ---------- | -------------------- | --------------------------- |
| 脚本语法   | Options API          | `<script setup>`            |
| 响应式数据 | `data()` 返回对象    | `ref()` / `reactive()`      |
| 计算属性   | `computed: {}`       | `computed()`                |
| 侦听器     | `watch: {}`          | `watch()` / `watchEffect()` |
| 生命周期   | `created`, `mounted` | `onMounted`, `onLoad`       |
| 组件引用   | `$refs`              | `ref`                       |

### 样式穿透

| Vue 版本 | 推荐写法   | 废弃写法             |
| -------- | ---------- | -------------------- |
| Vue2     | `::v-deep` | `/deep/`, `:deep`    |
| Vue3     | `:deep()`  | `::v-deep`, `/deep/` |

```scss
// Vue2
::v-deep .em-cell {
  color: red;
}

// Vue3
:deep(.em-cell) {
  color: red;
}
```

### 状态管理

| Vue 版本 | 状态管理库 | Store 文件 |
| -------- | ---------- | ---------- |
| Vue2     | Vuex       | `store.js` |
| Vue3     | Pinia      | `store.ts` |

### 路由传参获取

**Vue2**：

```javascript
created() {
  const id = Util.getExtraDataByKey("id") || "";
  this.getDetail(id);
}
```

**Vue3**：

```typescript
import { onLoad } from "@dcloudio/uni-app";

onLoad((options) => {
  const id = options.id || "";
});
```

## 📝 代码模板

### Vue2 基础模板

```vue
<template>
  <view class="container">
    <!-- 页面内容 -->
  </view>
</template>

<script>
export default {
  data() {
    return {
      // 响应式数据
    };
  },
  computed: {
    // 计算属性
  },
  watch: {
    // 侦听器
  },
  created() {
    // 数据初始化
  },
  mounted() {
    // DOM 挂载后
  },
  methods: {
    // 方法定义
  },
};
</script>

<style lang="scss" scoped>
@import "./css/[module_name].scss";
</style>
```

### Vue3 基础模板

```vue
<template>
  <view class="container">
    <!-- 页面内容 -->
  </view>
</template>

<script lang="ts" setup>
import { ref, reactive, computed, watch, onMounted } from "vue";
import { onLoad } from "@dcloudio/uni-app";

// 响应式数据
const data = ref("");

// 计算属性
const computedData = computed(() => data.value);

// 侦听器
watch(data, (newVal, oldVal) => {
  // 处理变化
});

// 页面加载
onLoad((options) => {
  // 获取路由参数
});

// DOM 挂载
onMounted(() => {
  // 初始化操作
});

// 方法定义
const handleClick = () => {
  // 事件处理
};
</script>

<style lang="scss" scoped>
@import "./css/[module_name].scss";
</style>
```

## ✅ 版本检查清单

- [ ] 已确认项目 Vue 版本
- [ ] 使用对应版本的语法规范
- [ ] 样式穿透使用正确的语法
- [ ] 状态管理使用对应的库
- [ ] 生命周期钩子使用正确
- [ ] 路由传参获取方式正确
