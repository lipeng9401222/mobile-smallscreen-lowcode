<template>
    <div class="van-content">
        <div class="example-group">
            <text class="cell-title">基本使用</text>
            <div class="example-card">
                <div class="example-content">
                    <e-eweb-editor-m id="ewebeditor1" v-model="simpleEditorContent" @change="onChange1" />
                    <div class="btn-groups">
                        <e-button-m type="primary" @click="getValue">获取值</e-button-m>
                        <e-button-m type="primary" @click="setValue">设置值</e-button-m>
                    </div>
                </div>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">进阶使用</text>
            <div class="example-card">
                <div class="example-content">
                    <e-eweb-editor-m
                        id="ewebeditor2"
                        v-model="editorContent"
                        :config="editorConfig"
                        :autoHeight="true"
                        :height="600"
                        :style="['font-size:24px']"
                        skin="dark"
                        lang="zh-tw"
                        :readonly="false"
                        @ready="onReady"
                        @change="onChange2"
                        @remove="onRemove"
                        @paste="onPaste"
                        @all="onAll"
                        ref="ewebeditor"
                    />
                    <div class="btn-groups">
                        <e-button-m type="primary" @click="getCount">获取文本长度</e-button-m>
                        <e-button-m type="primary" @click="getHtml">获取HTML内容</e-button-m>
                        <e-button-m type="primary" @click="getText">获取纯文本内容</e-button-m>
                        <e-button-m type="primary" @click="setHtml">设置HTML内容</e-button-m>
                        <e-button-m type="primary" @click="getSelectedElement">获取选中的元素</e-button-m>
                        <e-button-m type="primary" @click="getSelectedHtml">获取选中的HTML</e-button-m>
                        <e-button-m type="primary" @click="getSelectedText">获取选中的文本</e-button-m>
                        <e-button-m type="primary" @click="setReadOnly">设置只读</e-button-m>
                        <e-button-m type="primary" @click="update">更新内容</e-button-m>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { reactive, ref, watch } from 'vue';

//===================简单示例========================
// 赋予初始值
const simpleEditorContent = ref('');

//获取值
const getValue= () => {
    console.log('getValue', simpleEditorContent.value);
};

// 设置值
const setValue = () => {
    simpleEditorContent.value = 'EwebEditor Hello！<a href="http://www.baidu.com">百度</a>';
};
//监听变化
const onChange1 = (editorInstance, editorId) => {
    console.log(`onchagned1: ${editorId}`, editorInstance);
};


//===================简单示例========================

//===================进阶示例========================
const editorContent = ref('');
// ref变量
const ewebeditor = ref();
// editorConfig 额外参数配置
const editorConfig = reactive({
    placeholder: '请输入内容'
});

//获取文本长度
const getCount = () => {
    let data = ewebeditor.value.getCount(); //获取当前字数
    console.log('getCount', data);
};

//获取HTML内容
const getHtml = () => {
    let data = ewebeditor.value.getHtml();
    console.log('getHtml', data);
};
//获取纯文本内容
const getText = () => {
    let data = ewebeditor.value.getText();
    console.log('getText', data);
};
//设置HTML内容
const setHtml = () => {
    ewebeditor.value.setHtml('<p>2025年6月30日18:21:37</p>');
};
//获取选中的元素
const getSelectedElement = () => {
    let data = ewebeditor.value.getSelectedElement();
    console.log('getSelectedElement', data);
};

//获取选中的HTML
const getSelectedHtml = () => {
    let data = ewebeditor.value.getSelectedHtml();
    console.log('getSelectedHtml', data);
};
//获取选中的文本
const getSelectedText = () => {
    let data = ewebeditor.value.getSelectedText();
    console.log('getSelectedText', data);
};
//设置只读
const setReadOnly = () => {
    ewebeditor.value.setReadOnly(true);
};

//更新内容
const update = () => {
    ewebeditor.value.update();
};

// 监听变化
const onChange2 = (editorInstance,editorId) => {
    console.log(`onchagned2: ${editorId}`, editorInstance);
};
// 监听初始化完成
const onReady = (editorInstance) => {
    console.log('onReady', editorInstance);
};
//监听onRemove 编辑器移除
const onRemove = (editorInstance, editorId) => {
    console.log('onRemove', editorInstance, editorId);
};
//监听编辑器的粘贴功能
const onPaste = (editorInstance, editorId) => {
    console.log('onPaste', editorInstance, editorId);
};
//监听所有事件
const onAll = (eventName, editorInstance, editorId) => {
    console.log('onAll', eventName, editorInstance, editorId);
};
//===================进阶示例========================

</script>
<style lang="scss" scoped>
@import '../css/common.scss';
.btn-groups {
    margin-top: 10px;
    .ep-button {
        margin-left:0px;
        margin-right: 10px;
    }
}
</style>
