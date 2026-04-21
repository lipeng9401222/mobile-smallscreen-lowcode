<template>
  <div class="van-content">
    <div class="example-group">
      <text class="cell-title">基本用法</text>
      <div class="example-card">
        <div class="example-content">
          <div class="example-desc">输入时列出建议</div>
          <e-autocomplete-m
            v-model="state1"
            :fetch-suggestions="querySearch"
            clearable
            placeholder="Please Input"
            @select="handleSelect"
            @change="handleChange"
          />

          <div class="example-desc">激活时列出建议</div>
          <e-autocomplete-m
            v-model="state2"
            :fetch-suggestions="querySearch"
            :trigger-on-focus="false"
            clearable
            placeholder="Please Input"
            @select="handleSelect"
          />
        </div>
      </div>
    </div>

    <div class="example-group">
      <text class="cell-title">自定义模板</text>
      <div class="example-card">
        <e-autocomplete-m
          v-model="state3"
          :fetch-suggestions="querySearch"
          popper-class="my-autocomplete"
          placeholder="Please input"
          @select="handleSelect"
        >
          <template #suffix>
            <e-icon-m name="Edit" @click="handleIconClick"/>
          </template>
          <template #item="{ item }">
            <div class="custom-item">
              <div class="value">{{ item.value }}</div>
              <span class="link">{{ item.link }}</span>
            </div>
          </template>
        </e-autocomplete-m>
      </div>
    </div>

    <div class="example-group">
      <text class="cell-title">远程搜索</text>
      <div class="example-card">
        <e-autocomplete-m
          v-model="state4"
          :fetch-suggestions="querySearchAsync"
          placeholder="Please input"
          @select="handleSelect"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";

interface RestaurantItem {
  value: string;
  link: string;
}

const state1 = ref("");
const state2 = ref("");
const state3 = ref("");
const state4 = ref("");

const restaurants = ref<RestaurantItem[]>([]);

const querySearch = (queryString: string, cb: any) => {
  const results = queryString
    ? restaurants.value.filter(createFilter(queryString))
    : restaurants.value;

  cb(results);
};

const createFilter = (queryString: string) => {
  return (restaurant: RestaurantItem) => {
    return (
      restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
    );
  };
};

const loadAll = () => {
  return [
    { value: "vue", link: "https://github.com/vuejs/vue" },
    { value: "element", link: "https://github.com/ElemeFE/element" },
    { value: "cooking", link: "https://github.com/ElemeFE/cooking" },
    { value: "mint-ui", link: "https://github.com/ElemeFE/mint-ui" },
    { value: "vuex", link: "https://github.com/vuejs/vuex" },
    { value: "vue-router", link: "https://github.com/vuejs/vue-router" },
    { value: "babel", link: "https://github.com/babel/babel" }
  ];
};

let timeout: NodeJS.Timeout;
const querySearchAsync = (queryString: string, cb: any) => {
  const results = queryString
    ? restaurants.value.filter(createFilter(queryString))
    : restaurants.value;

  clearTimeout(timeout);
  timeout = setTimeout(() => {
    cb(results);
  }, 3000 * Math.random());
};
const handleChange = (val: string) => {
  console.log(val,'handleChange');
};
const handleSelect = (item: RestaurantItem) => {
  console.log(item);
};

const handleIconClick = (ev: Event) => {
  console.log(ev);
};

onMounted(() => {
  restaurants.value = loadAll();
});
</script>

<style lang="scss" scoped>
@import '../css/common.scss';

.custom-item .value {
  font-weight: 500;
  color: #303133;
}

.custom-item .link {
  font-size: 12px;
  color: #909399;
}

.my-autocomplete {
  :deep(li) {
    line-height: normal;
    padding: 7px;
  }

  :deep(li .name) {
    text-overflow: ellipsis;
    overflow: hidden;
  }

  :deep(li .addr) {
    font-size: 12px;
    color: #b4b4b4;
  }

  :deep(li .highlighted .addr) {
    color: #ddd;
  }
}
</style>
