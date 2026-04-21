<template>
    <div class="van-content">
        <div class="example-group">
            <text class="cell-title">基本用法</text>
            <div class="example-card">
                <e-picker-m v-model="pickerValue" title="标题" show-toolbar :columns="columns" @confirm="confirm" />
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
const pickerValue = ref('');
const columns = ref(['杭州', '宁波', '温州', '绍兴', '湖州', '嘉兴', '金华', '衢州']);

const confirm = (e) => {
    console.log(e, 'wai');
};
</script>
<style lang="scss" scoped>
@import '../css/common.scss';
</style>
