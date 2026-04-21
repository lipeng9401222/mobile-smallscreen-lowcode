# 组件开发规范

> 定义 Vue 组件开发的标准规范与最佳实践。

## 📝 组件使用原则

### API 优先原则

> **优先使用 EJS API，仅在 API 无法满足时才考虑使用组件形式**

| 场景          | 优先使用              | 备选方案      |
| ------------- | --------------------- | ------------- |
| 单选/多选列表 | `ejs.ui.picker`       | `em-picker`   |
| 日期选择      | `ejs.ui.pickDate`     | -             |
| 时间选择      | `ejs.ui.pickTime`     | -             |
| 日期时间选择  | `ejs.ui.pickDateTime` | -             |
| 确认对话框    | `ejs.ui.confirm`      | `em-dialog`   |
| 提示信息      | `ejs.ui.alert`        | -             |
| 操作提示      | `ejs.ui.toast`        | -             |
| 加载提示      | `ejs.ui.showWaiting`  | `em-loading`  |
| 级联选择      | -                     | `em-cascader` |

## 🏗️ 组件开发规范

### 文件命名

| 类型     | 命名规则      | 示例            |
| -------- | ------------- | --------------- |
| 通用组件 | PascalCase    | `UserCard.vue`  |
| 页面组件 | 小写 + 下划线 | `user_list.vue` |

### Vue3 组件要求

**必须使用 `<script setup>` 语法**：

```vue
<template>
  <view class="user-card">
    <text>{{ userName }}</text>
  </view>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";

// Props 定义
interface Props {
  userId: string;
  userName?: string;
}

const props = withDefaults(defineProps<Props>(), {
  userName: "默认用户",
});

// Emits 定义
const emit = defineEmits<{
  (e: "update", value: string): void;
  (e: "delete", id: string): void;
}>();

// 响应式数据
const count = ref(0);

// 计算属性
const displayName = computed(() => `用户: ${props.userName}`);

// 方法
const handleClick = () => {
  emit("update", props.userId);
};
</script>
```

### Props 规范

**必须指定类型和默认值**：

```javascript
// Vue2
export default {
  props: {
    // ✅ 正确：指定类型和默认值
    title: {
      type: String,
      default: "",
    },
    list: {
      type: Array,
      default: () => [],
    },
    config: {
      type: Object,
      default: () => ({}),
    },
    // 必填属性
    userId: {
      type: String,
      required: true,
    },
  },
};
```

```typescript
// Vue3
interface Props {
  title?: string;
  list?: string[];
  config?: Record<string, any>;
  userId: string; // 必填
}

const props = withDefaults(defineProps<Props>(), {
  title: "",
  list: () => [],
  config: () => ({}),
});
```

### 组件通信

**禁止直接修改 props，使用 emit 通知父组件更新**：

```vue
<!-- ❌ 错误：直接修改 props -->
<script setup>
const props = defineProps<{ value: string }>();
// 错误！
props.value = 'new value';
</script>

<!-- ✅ 正确：使用 emit -->
<script setup>
const props = defineProps<{ value: string }>();
const emit = defineEmits<{
  (e: 'update:value', value: string): void;
}>();

const updateValue = (newValue: string) => {
  emit('update:value', newValue);
};
</script>
```

## 📦 常用组件使用规范

### em-field 输入框

#### readonly 状态

**必须同时添加 `is-link` 和 `clickable` 属性**：

```vue
<!-- ❌ 错误示例 -->
<em-field v-model="date" readonly label="选择日期" />

<!-- ✅ 正确示例 -->
<em-field
  v-model="date"
  readonly
  clickable
  is-link
  label="选择日期"
  @click="showDatePicker"
/>
```

#### textarea 类型

**建议添加 `autosize` 属性**：

```vue
<em-field
  v-model="content"
  type="textarea"
  label="内容"
  placeholder="请输入内容"
  autosize
/>
```

#### 输入格式限制

```vue
<!-- 手机号：仅数字 -->
<em-field
  v-model="phone"
  type="tel"
  label="手机号"
  placeholder="请输入手机号"
  :rules="[
    {
      validator: (val) => Util.string.isMobile(val),
      message: '请输入正确的手机号',
    },
  ]"
/>

<!-- 带小数位限制 -->
<em-field
  v-model="amount"
  type="number"
  label="金额"
  placeholder="请输入金额"
/>
```

### em-uploader 附件上传

**样式上自成一行，不通过 Slots 传入 em-field**：

```vue
<!-- ✅ 正确：独立使用 -->
<em-field label="附件">
  <template #input>
    <!-- 仅显示标签 -->
  </template>
</em-field>
<em-uploader :after-read="afterRead" />

<!-- ❌ 错误：嵌入 em-field -->
<em-field label="附件">
  <template #input>
    <em-uploader :after-read="afterRead" />
  </template>
</em-field>
```

### em-search 搜索框

```vue
<em-search
  v-model="keyword"
  placeholder="请输入搜索关键词"
  @search="onSearch"
/>
```

### em-picker 选择器

**使用注意事项**：

1. 无需与 `em-popup` 绑定使用
2. 必须添加 `show-toolbar` 属性

```vue
<!-- Vue3 示例 -->
<template>
  <em-picker
    v-model="selectedValue"
    :columns="columns"
    show-toolbar
    @confirm="onConfirm"
    @cancel="onCancel"
  />
</template>

<script lang="ts" setup>
import { ref } from "vue";

const columns = ref(["选项1", "选项2", "选项3"]);
const selectedValue = ref("");

const onConfirm = (value: string) => {
  selectedValue.value = value;
};

const onCancel = () => {
  // 取消选择
};
</script>
```

## 🔍 响应式数据管理

### Vue3 响应式原则

> **不是所有数据都需要是响应式的**

```typescript
// ✅ 需要响应式：页面显示相关
const userName = ref(""); // 需要显示
const userList = ref([]); // 需要渲染列表

// ❌ 不需要响应式：非渲染数据
const API_URL = "/api/users"; // 常量
let timer: number; // 定时器引用
```

## ✅ 组件检查清单

- [ ] 通用组件使用 PascalCase 命名
- [ ] Vue3 使用 `<script setup>` 语法
- [ ] Props 指定类型和默认值
- [ ] 使用 emit 而非直接修改 props
- [ ] readonly 输入框添加 `is-link` 和 `clickable`
- [ ] textarea 添加 `autosize` 属性
- [ ] 输入框设置 placeholder
