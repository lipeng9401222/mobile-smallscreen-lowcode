<template>
    <div class="van-content">
        <text class="cell-title">基本使用</text>
        <div class="demo-color-palette">
            <div class="demo-color-block">
                <span class="demonstration">有默认值</span>
                <e-color-palette-m v-model="color1" />
            </div>
            <div class="demo-color-block">
                <span class="demonstration">无默认值</span>
                <e-color-palette-m v-model="color2" />
            </div>
        </div>

        <text class="cell-title">透明度</text>
        <div>
            <e-color-palette-m v-model="color3" :showAlpha="true" />
        </div>

        <text class="cell-title">预设自定义颜色</text>
        <div>
            <e-radio-group-m class="custom-radio-group" v-model="paletteType" @change="paletteTypeChange">
                <e-radio-m value="1" size="large">默认</e-radio-m>
                <e-radio-m value="2" size="small">自定义-一行</e-radio-m>
                <e-radio-m value="3" size="small">自定义-多行</e-radio-m>
            </e-radio-group-m>
            <e-color-palette-m v-model="color4" :predefine="predefineColors" show-alpha enable-predefine />
        </div>

        <text class="cell-title">历史记录</text>
        <div>
            <e-color-palette-m ref="colorPaletteRef" v-model="color5" show-alpha enable-predefine enable-history />
            <e-button-m type="primary" size="small" plain style="margin-top: 30px" @click="getValue">获取当前颜色</e-button-m>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const color1 = ref('#409EFF');
const color2 = ref();
const color3 = ref('rgba(236, 29, 15, 0.8)'); //透明度
const color4 = ref('#009688');   //预设自定义颜色
const color5 = ref('rgba(255, 69, 0, 0.68)');   //历史记录

// 预设自定义颜色
const paletteType = ref('1');
const predefineColors = ref<string[] | string[][] | undefined>(undefined);
    const paletteTypeChange = (val: string) => {
  switch (val) {
    case '1':
      predefineColors.value = undefined;
      break;
    case '2':
      predefineColors.value = ['#ff4500', '#ff8c00', '#ffd700', '#90ee90', '#00ced1', '#1e90ff', '#c71585'];
      break;
    case '3':
      predefineColors.value = [
        ['#B71C1C', '#C62828', '#D32F2F', '#E53935', '#F44336', '#EF5350', '#E57373', '#EF9A9A'],
        ['#F57F17', '#F9A825', '#FBC02D'],
        ['#004D40', '#00695C', '#00796B', '#00897B', '#009688', '#26A69A'],
      ];
      break;
    default:
      break;
  }
};
// 预设自定义颜色

//历史记录获取当前值
const colorPaletteRef = ref();
const getValue = () => {
    let color=colorPaletteRef.value?.color.value;
    ejs.ui.toast(color);
    console.log("当前颜色=>",color);

};
//历史记录获取当前值

</script>

<style lang="scss" scoped>
@import '../css/common.scss';
.color-value {
    margin-top: 8px;
    font-size: 14px;
    color: #666;
}

.demo-color {
    &-palette {
        display: flex;
        flex-direction: column;
    }
    &-block {
        width: 100%;
        flex: 1;
        margin: 10px;
        display: flex;
        flex-direction: column;
        .demonstration {
            width: 100%;
            display: block;
            margin-bottom: 10px;
            font-size: 12px;
        }
    }
}

// 自定义按钮组
.custom-radio-group{
    padding-left: 10px;
    .ep-radio,.ep-radio.radio-size-small{
        height: 24px;
        font-size: 12px;
    }
}
</style>
