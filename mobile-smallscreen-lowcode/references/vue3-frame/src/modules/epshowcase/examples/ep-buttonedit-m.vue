<template>
    <div class="van-content">
        <text class="cell-title">基本用法</text>
        <div class="flex justify-spacep-between mb-4 flex-wrap gap-4 buttonedit-box">
            <div class="cell-title">
                <p>text: {{ text }}</p>
                <p>value: {{ value }}</p>
            </div>
            <ep-button-edit-m v-model="value" v-model:text="text" placeholder="请输入" :clearable="true" :disabled="false"
                :readonly="false" size="default" :allowInput="true" :popupUrl="popupUrl" title="F9页面标题"
                :popupWidth="'95%'" :popupHeight="500" :before="beforehandler" @click="clickHandler"
                @close="onButtonEditClose"></ep-button-edit-m>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
const value = ref('89706');
const text = ref('承办人');
// const popupUrl = ref('http://192.168.219.170/docs/vue/latest/frame/?_dialogId_=dialog-A581ED18-ADE2-45FA-B4C2-8A8C7870F361');
const popupUrl = ref('../demo');

const beforehandler = () => {
    console.log('🚀~~~ :::beforehandler');
    return true;
}
const clickHandler = () => {
    console.log('🚀~~~ :::clickHandler');
};

const onButtonEditClose = (e) => {
    console.log('🚀~~~ :::closeHandler', e);
    const pArr = e.params.split(';');
    // 将返回的数据格式化成 ButtonEdit 控件需要的格式
    // 为保证params和组件中引用同一个对象，只支持e.params方式修改params；并且修改只能是在同步函数中修改，不支持异步修改
    e.params = {
        text: pArr[0],
        value: pArr[1]
    };
};
</script>
<style lang="scss" scoped>
.van-content {
    background-color: #fff;
    height: 100vh;
}
@import '../css/common.scss';
</style>
