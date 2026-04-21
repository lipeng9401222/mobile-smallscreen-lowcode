<template>
    <div class="van-content">
        <text class="cell-title">基本使用</text>
        <div class="box">
            <span class="demonstration">With default value</span>
            <e-color-picker-m v-model="color1" />

            <span class="demonstration">With no default value</span>
            <e-color-picker-m v-model="color2" />
        </div>

        <text class="cell-title">透明度</text>
        <div class="box"><e-color-picker-m v-model="color3" show-alpha /></div>

        <text class="cell-title">预设自定义颜色</text>
        <div class="box">

                <span class="demonstration">默认</span>
                <e-color-picker-m v-model="color4" show-alpha enable-predefine />

                <span class="demonstration">自定义-一行</span>
                <e-color-picker-m v-model="color5" show-alpha enable-predefine :predefine="predefineColors1" />

                <span class="demonstration">自定义-多行</span>
                <e-color-picker-m v-model="color6" show-alpha enable-predefine :predefine="predefineColors2" />
        </div>

        <text class="cell-title">历史记录</text>
        <div class="box"><e-color-picker-m v-model="color7" show-alpha enable-predefine enable-history /></div>
        <text class="cell-title">尺寸</text>
        <div class="box">
    <e-color-picker-m v-model="color8" size="large" />
    <e-color-picker-m v-model="color9" />
    <e-color-picker-m v-model="color10" size="small" />
  </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const color1 = ref('#409EFF');
const color2 = ref();
const color3 = ref('rgba(19, 206, 102, 0.8)');
const color4 = ref('rgba(255, 69, 0, 0.68)');
const color5 = ref('rgba(19, 206, 102, 0.8)');
const color6 = ref('rgba(19, 206, 102, 0.8)');
const color7 = ref('rgba(255, 69, 0, 0.68)');
const color8 = ref('#409EFF');
const color9 = ref('#409EFF');
const color10 = ref('#409EFF');
const predefineColors1 = ref(['#ff4500', '#ff8c00', '#ffd700', '#90ee90', '#00ced1', '#1e90ff', '#c71585']);
const predefineColors2 = ref([
    ['#B71C1C', '#C62828', '#D32F2F', '#E53935', '#F44336', '#EF5350', '#E57373', '#EF9A9A'],
    ['#F57F17', '#F9A825', '#FBC02D'],
    ['#004D40', '#00695C', '#00796B', '#00897B', '#009688', '#26A69A']
]);
</script>

<style lang="scss" scoped>
@import '../css/common.scss';
.color-value {
    margin-top: 8px;
    font-size: 14px;
    color: #666;
}
.box{
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-size: 14px;
    padding: 10px;
}

</style>
