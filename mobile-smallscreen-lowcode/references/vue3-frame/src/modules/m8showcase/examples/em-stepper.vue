<template>
  <div class="container">
    <em-cell center title="基础用法">
      <em-stepper v-model="value1" />
    </em-cell>

    <em-cell center title="步长设置">
      <em-stepper v-model="value2" :step="2" />
    </em-cell>

    <em-cell center title="限制输入范围">
      <em-stepper v-model="value3" :min="5" :max="8" />
    </em-cell>

    <em-cell center title="限制输入整数">
      <em-stepper v-model="value4" integer />
    </em-cell>

    <em-cell center title="禁用状态">
      <em-stepper v-model="value5" disabled />
    </em-cell>

    <em-cell center title="禁用输入框">
      <em-stepper v-model="value11" disable-input />
    </em-cell>

    <em-cell center title="禁用长按">
      <em-stepper v-model="value6" :long-press="false" />
    </em-cell>

    <em-cell center title="固定小数位数">
      <em-stepper v-model="value7" :step="0.2" :decimal-length="1" />
    </em-cell>

    <em-cell center title="异步变更">
      <em-stepper
        :modelValue="value8"
        async-change
        @change="(value) => onChange('value8', value)"
      />
    </em-cell>

    <em-cell center title="自定义大小">
      <em-stepper v-model="value9" input-width="40px" button-size="32px" />
    </em-cell>
    <em-cell title="圆角风格">
        <em-stepper v-model="value10" theme="round" button-size="22" />
    </em-cell>
    <em-toast ref="emToast"></em-toast>
  </div>
</template>

<script lang="ts">
export default {
  name: 'StepperDemo',
  data() {
      return {
        value1: 1,
        value2: 1,
        value3: 1,
        value4: 1,
        value5: 1,
        value6: 1,
        value7: 1,
        value8: 1,
        value9: 1,
        value10: 1,
        value11: 1
      };
  },
  methods: {
    onChange(target, value) {
        Toast.loading({
            forbidClick: true
        });
        setTimeout(() => {
            Toast.clear();
            this[target] = value;
        }, 500);
    }
  }
  
};
</script>

<style lang="scss">
 
</style>
<style>
/* custom style */
.cell-title:first-child {
    padding-top: 10px;
}

.cell-title {
    padding-top: 30px;
    padding-bottom: 10px;
    padding-left: 10px;
    color: rgba(69, 90, 100, .6);
    font-size: 14px;
    font-weight: 400;
}
</style>