# 状态管理规范

> 定义 Vue 应用的状态管理规范，Vue2 使用 Vuex，Vue3 使用 Pinia。

## 📁 文件结构

```
src/pages/[module_name]/
├── [module_name].vue
├── store.js          # Vue2 Vuex 定义
└── store.ts          # Vue3 Pinia 定义
```

## 📦 Vue2 - Vuex

### store.js 文件结构

```javascript
export default {
  // 模块名称：与目录名一致
  moduleName: "m8demo",

  // 使用独立命名空间
  namespaced: true,

  // 状态数据
  state: {
    count: 0, // 计数器
    userInfo: null, // 用户信息
    orderList: [], // 订单列表
  },

  // 同步修改状态
  mutations: {
    /**
     * 设置计数
     * @param {Object} state - 状态对象
     * @param {number} n - 增加的数量
     */
    increment(state, n) {
      state.count += n;
    },

    /**
     * 设置用户信息
     * @param {Object} state - 状态对象
     * @param {Object} userInfo - 用户信息
     */
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo;
    },
  },

  // 异步操作
  actions: {
    /**
     * 异步获取用户信息
     * @param {Object} context - Vuex 上下文
     * @param {string} userId - 用户ID
     */
    async fetchUserInfo({ commit }, userId) {
      const result = await Util.ajax({
        url: `${Config.serverUrl}/api/user/${userId}`,
      });
      commit("setUserInfo", result.data);
    },
  },

  // 计算属性
  getters: {
    /**
     * 获取格式化的用户名
     */
    formattedName: (state) => {
      return state.userInfo ? `用户: ${state.userInfo.name}` : "未登录";
    },
  },
};
```

### 组件中使用

```vue
<template>
  <view>
    <text>Count: {{ count }}</text>
    <text>User: {{ formattedName }}</text>
  </view>
</template>

<script>
export default {
  computed: {
    // 获取状态
    count() {
      return this.$store.state.m8demo.count;
    },
    // 获取 getter
    formattedName() {
      return this.$store.getters["m8demo/formattedName"];
    },
  },
  methods: {
    // 提交 mutation
    addCount() {
      this.$store.commit("m8demo/increment", 1);
    },
    // 派发 action
    loadUser(userId) {
      this.$store.dispatch("m8demo/fetchUserInfo", userId);
    },
  },
};
</script>
```

## 📦 Vue3 - Pinia

### store.ts 文件结构

```typescript
import { defineStore } from "pinia";

/**
 * 用户中心状态管理
 * 命名规则: use + 模块名 + Store
 */
export const useUserCenterStore = defineStore(
  // Store 的唯一 ID
  "user_center",
  {
    // 状态数据
    state: () => ({
      count: 0, // 计数器
      userInfo: null as UserInfo | null, // 用户信息
      orderList: [] as Order[], // 订单列表
    }),

    // 计算属性
    getters: {
      /**
       * 格式化用户名
       */
      formattedName: (state) => {
        return state.userInfo ? `用户: ${state.userInfo.name}` : "未登录";
      },

      /**
       * 订单总数
       */
      orderCount: (state) => state.orderList.length,
    },

    // 方法（支持同步和异步）
    actions: {
      /**
       * 增加计数
       * @param n - 增加的数量
       */
      increment(n: number) {
        this.count += n;
      },

      /**
       * 获取用户信息
       * @param userId - 用户ID
       */
      async fetchUserInfo(userId: string) {
        const result = await Util.ajax({
          url: `${Config.serverUrl}/api/user/${userId}`,
        });
        this.userInfo = result.data;
      },

      /**
       * 重置状态
       */
      reset() {
        this.count = 0;
        this.userInfo = null;
        this.orderList = [];
      },
    },
  }
);

// 类型定义
interface UserInfo {
  id: string;
  name: string;
  avatar: string;
}

interface Order {
  id: string;
  title: string;
  amount: number;
}
```

### 组件中使用

```vue
<template>
  <view>
    <text>Count: {{ store.count }}</text>
    <text>User: {{ store.formattedName }}</text>
  </view>
</template>

<script lang="ts" setup>
import { useUserCenterStore } from "./store";

// 获取 store 实例
const store = useUserCenterStore();

// 直接读取状态
console.log(store.count);

// 直接读取 getter
console.log(store.formattedName);

// 调用 action
store.increment(1);

// 异步 action
store.fetchUserInfo("user123");

// 重置状态
store.reset();
</script>
```

### 辅助函数（Options API 兼容）

```vue
<script>
import { useUserCenterStore } from "./store";
import { mapState, mapActions } from "pinia";

export default {
  computed: {
    // 映射 state 和 getters
    ...mapState(useUserCenterStore, ["count", "formattedName"]),
  },
  methods: {
    // 映射 actions
    ...mapActions(useUserCenterStore, ["increment", "fetchUserInfo"]),
  },
};
</script>
```

## 📋 使用原则

### 何时使用状态管理

| 场景           | 推荐方案         |
| -------------- | ---------------- |
| 组件内部状态   | `ref` / `data`   |
| 父子组件通信   | `props` / `emit` |
| 跨页面共享数据 | Vuex / Pinia     |
| 全局配置       | Vuex / Pinia     |

### 最佳实践

1. **避免滥用全局状态**

   - 优先使用 `props` / `emit` 进行组件通信
   - 仅在确实需要跨页面共享时使用 Store

2. **使用 computed 获取派生状态**

   ```typescript
   // ✅ 使用 getter
   const userName = computed(() => store.userInfo?.name);

   // ❌ 避免在方法中直接计算
   const getUserName = () => store.userInfo?.name;
   ```

3. **模块化状态管理**
   - 每个模块维护自己的 Store
   - 避免将所有状态放在一个文件中

## ✅ 状态管理检查清单

- [ ] Vue2 使用 Vuex，Vue3 使用 Pinia
- [ ] Store 文件放在对应模块目录下
- [ ] 使用独立命名空间
- [ ] 变量和方法添加中文注释
- [ ] 优先使用 props/emit，避免滥用全局状态
- [ ] 使用 getter 获取派生状态
