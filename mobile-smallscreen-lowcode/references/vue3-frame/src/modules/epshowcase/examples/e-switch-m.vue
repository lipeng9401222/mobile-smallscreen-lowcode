<template>
    <div class="van-content">
        <div class="example-group">

            <text class="cell-title">基本用法</text>

            <div class="example-card">

                <e-switch-m v-model="value1" />

            </div>

        </div>
        <div class="example-group">

            <text class="cell-title">尺寸</text>

            <div class="example-card">

                <e-switch-m v-model="value3" size="large" active-text="Open" inactive-text="Close" />
            <br />
            <e-switch-m v-model="value4" active-text="Open" inactive-text="Close" />
            <br />
            <e-switch-m v-model="value5" size="small" active-text="Open" inactive-text="Close" />

            </div>

        </div>
        <div class="example-group">

            <text class="cell-title">文字描述</text>

            <div class="example-card">

                <e-switch-m v-model="value1" class="mb-2" active-text="Pay by month" inactive-text="Pay by year" />
            <br />
            <e-switch-m
                v-model="value2"
                class="mb-2"
                style="--e-switch-on-color: #13ce66; --e-switch-off-color: #ff4949"
                active-text="Pay by month"
                inactive-text="Pay by year"
            />
            <br />
            <e-switch-m v-model="value3" inline-prompt active-text="是" inactive-text="否" />
            <e-switch-m
                v-model="value4"
                class="ml-2"
                inline-prompt
                style="--e-switch-on-color: #13ce66; --e-switch-off-color: #ff4949"
                active-text="Y"
                inactive-text="N"
            />
            <e-switch-m v-model="value6" class="ml-2" width="60" inline-prompt active-text="超出省略" inactive-text="超出省略" />
            <e-switch-m
                v-model="value5"
                class="ml-2"
                inline-prompt
                style="--e-switch-on-color: #13ce66; --e-switch-off-color: #ff4949"
                active-text="完整展示多个内容"
                inactive-text="多个内容"
            />

            </div>

        </div>
        <div class="example-group">

            <text class="cell-title">显示自定义图标和自定义颜色</text>

            <div class="example-card">

                <e-switch-m v-model="value1" :active-icon="Check" :inactive-icon="Close" />
            <br />
            <e-switch-m
                v-model="value2"
                class="mt-2"
                style="margin-left: 24px"
                inline-prompt
                :active-icon="Check"
                :inactive-icon="Close"
            />
            <br />
            <e-switch-m v-model="value3" class="ml-2" style="--e-switch-on-color: #13ce66; --e-switch-off-color: #ff4949" />

            </div>

        </div>
        <div class="example-group">

            <text class="cell-title">拓展用法</text>

            <div class="example-card">

                <e-switch-m v-model="value1" show-inner-icon active-text="Open" inactive-text="Close" />
            <br />
            <e-switch-m v-model="value2" show-inner-icon :active-inner-icon="Edit" :inactive-inner-icon="Menu"/>

            </div>

        </div>
        <div class="example-group">

            <text class="cell-title">拓展值类型</text>

            <div class="example-card">

                <e-switch-m
            v-model="value7"
            style="--e-switch-on-color: #13ce66; --e-switch-off-color: #ff4949"
            active-value="100"
            inactive-value="0"
            />
            <div>Switch value:{{ value7 }}

            </div>

        </div>
        </div>
        <div class="example-group">

            <text class="cell-title">禁用</text>

            <div class="example-card">

                <e-switch-m v-model="value1" disabled />
            <e-switch-m v-model="value2" class="ml-2" />

            </div>

        </div>
        <div class="example-group">

            <text class="cell-title">加载中</text>

            <div class="example-card">

                <e-switch-m v-model="value1" loading />
            <e-switch-m v-model="value2" loading class="ml-2" />

            </div>

        </div>
        <div class="example-group">

            <text class="cell-title">防止切换</text>

            <div class="example-card">

                <e-switch-m v-model="value1" :loading="loading1" :before-change="beforeChange1" />
            <e-switch-m v-model="value2" class="ml-2" :loading="loading2" :before-change="beforeChange2" />

            </div>

        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import { Check, Close, Edit, Menu } from '@epoint-mfe/eui-icons';
const value1 = ref(true);
const value2 = ref(true);
const value3 = ref(true);
const value4 = ref(true);
const value5 = ref(false);
const value6 = ref(false);
const value7 = ref('100');
const loading1 = ref(false);
const loading2 = ref(false);

const beforeChange1 = () => {
  loading1.value = true;

  return new Promise((resolve) => {
    setTimeout(() => {
      loading1.value = false;
      ejs.ui.toast('Switch success');

      return resolve(true);
    }, 1000);
  });
};

const beforeChange2 = () => {
  loading2.value = true;

  return new Promise((_, reject) => {
    setTimeout(() => {
      loading2.value = false;
      ejs.ui.toast('Switch failed');

      return reject(new Error('Error'));
    }, 1000);
  });
};
</script>
<style lang="scss" scoped>
@import '../css/common.scss';
.m-2 {
    margin-bottom: 8px;
}
.mt-4 {
    margin-top: 16px;
}
</style>