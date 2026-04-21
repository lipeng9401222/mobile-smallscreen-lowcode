# Vue 典型示例

> 提供 Vue2 和 Vue3 的表单页面与列表页面典型代码示例。

## 📝 表单页面示例

### Vue2 表单

```vue
<template>
  <em-form @submit="onSubmit" @failed="onFailed">
    <em-field
      v-model="form.username"
      label="用户名"
      placeholder="请输入用户名"
      :rules="[{ required: true, message: '请填写用户名' }]"
    />
    <em-field
      v-model="form.password"
      type="password"
      label="密码"
      placeholder="请输入密码"
      :rules="[{ required: true, message: '请填写密码' }]"
    />
    <div style="margin: 16px;">
      <em-button round block type="info" native-type="submit">提交</em-button>
    </div>
  </em-form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: "", // 用户名
        password: "", // 用户密码
      },
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    // 验证通过后触发
    onSubmit(value) {
      console.log("submit", this.form);
    },
    // 验证不通过后触发
    onFailed(errorInfo) {
      console.log("error", errorInfo);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./css/form.scss";
</style>
```

### Vue3 表单

```vue
<template>
  <em-form @submit="onSubmit" @failed="onFailed">
    <em-field
      v-model="form.username"
      label="用户名"
      placeholder="请输入用户名"
      :rules="[{ required: true, message: '请填写用户名' }]"
    />
    <em-field
      v-model="form.password"
      type="password"
      label="密码"
      placeholder="请输入密码"
      :rules="[{ required: true, message: '请填写密码' }]"
    />
    <div style="margin: 16px">
      <em-button round block type="info" native-type="submit">提交</em-button>
    </div>
  </em-form>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const form = ref({
  username: "", // 用户名
  password: "", // 用户密码
});

const onSubmit = () => {
  console.log("onSubmit", form.value);
};

const onFailed = (errors) => {
  console.log("onFailed", errors);
};
</script>

<style lang="scss" scoped>
@import "./css/form.scss";
</style>
```

## 📋 列表页面示例

### Vue2 列表

```vue
<template>
  <view class="container">
    <em-minirefresh
      ref="scrollPull"
      :initPageIndex="initPageIndex"
      :page-size="pageSize"
      :url="url"
      :request-data="dataRequest"
      :change-data="dataChange"
    >
      <template v-slot:default="{ listData }">
        <em-cell
          v-for="(item, index) in listData"
          :key="index"
          :title="item.title"
          @click="itemClick(item)"
        />
      </template>
    </em-minirefresh>
  </view>
</template>

<script>
export default {
  data() {
    return {
      url: `${Config.serverUrl}/rest/list`, // 请求地址
      initPageIndex: 0, // 初始页码
      pageSize: 10, // 每页条数
    };
  },
  methods: {
    // 请求参数函数
    dataRequest(currPage, pageSize) {
      return {
        params: JSON.stringify({
          currentpageindex: currPage,
          pagesize: pageSize,
        }),
      };
    },
    // 数据处理函数
    dataChange(res) {
      if (res?.status?.code === 1) {
        return res.custom.infolist;
      }
      console.error("接口返回参数错误");
      return [];
    },
    // 列表项点击
    itemClick(item) {
      ejs.page.open({
        pageUrl: "./detail",
        data: { id: item.id },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./css/list.scss";
</style>
```

### Vue3 列表

```vue
<template>
  <view class="container">
    <em-minirefresh
      ref="scrollPull"
      :page-size="pageSize"
      :url="url"
      :request-data="dataRequest"
      :change-data="dataChange"
      @update:listData="(val) => (listData = val)"
    >
      <em-cell
        v-for="(item, index) in listData"
        :key="index"
        :title="item.title"
        @click="itemClick(item)"
      />
    </em-minirefresh>
  </view>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const url = `${Config.serverUrl}/rest/list`; // 请求地址
const pageSize = ref(15); // 每页条数
const listData = ref([]); // 列表数据

// 请求参数函数
const dataRequest = (currPage, pageSize) => {
  return {
    params: JSON.stringify({
      currentpageindex: currPage,
      pagesize: pageSize,
    }),
  };
};

// 数据处理函数
const dataChange = (res) => {
  if (res.status.code === 1) {
    return res.custom.infolist;
  }
  console.error("接口返回参数错误");
  return [];
};

// 列表项点击
const itemClick = (item) => {
  ejs.page.open({
    pageUrl: "./detail",
    data: { id: item.id },
  });
};
</script>

<style lang="scss" scoped>
@import "./css/list.scss";
</style>
```
