<template>
    <div class="van-content">
        <div class="example-group">
            <text class="cell-title">基础用法</text>
            <div class="example-card">
                <div class="example-row">
                    <e-button-m :plain="true" @click="open">Show message</e-button-m>
                    <e-button-m :plain="true" @click="openVn">VNode</e-button-m>
                </div>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">纯文字提示</text>
            <div class="example-card">
                <e-button-m :plain="true" @click="openText">text message</e-button-m>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">不同状态</text>
            <div class="example-card">
                <div class="example-row">
                    <e-button-m :plain="true" @click="open2">success</e-button-m>
                    <e-button-m :plain="true" @click="open3">warning</e-button-m>
                    <e-button-m :plain="true" @click="open1">message</e-button-m>
                    <e-button-m :plain="true" @click="open4">error</e-button-m>
                </div>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">可关闭的消息提示</text>
            <div class="example-card">
                <div class="example-row">
                    <e-button-m :plain="true" @click="open5">message</e-button-m>
                    <e-button-m :plain="true" @click="open6">success</e-button-m>
                    <e-button-m :plain="true" @click="open7">warning</e-button-m>
                    <e-button-m :plain="true" @click="open8">error</e-button-m>
                </div>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">文字居中</text>
            <div class="example-card">
                <e-button-m plain @click="openCenter">Centered text</e-button-m>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">使用 HTML 片段作为正文内容</text>
            <div class="example-card">
                <e-button-m :plain="true" @click="openHTML">Use HTML String</e-button-m>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">分组消息合并</text>
            <div class="example-card">
                <e-button-m :plain="true" @click="open9">Show message</e-button-m>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { h } from 'vue';
import { EMessageM } from '@epoint-mfe/eui-components/src/components/ep-message/index.js';

const open = () => {
    EMessageM({
        message: 'this is a message.'
    });
};

const openVn = () => {
    EMessageM({
        message: h('p', null, [h('span', null, 'Message can be '), h('i', { style: 'color: teal' }, 'VNode')])
    });
};
const open1 = () => {
    EMessageM('this is a message.');
};
const open2 = () => {
    EMessageM({
        message: 'Congrats, this is a success message.',
        type: 'success'
    });
};
const open3 = () => {
    EMessageM({
        message: 'Warning, this is a warning message.',
        type: 'warning'
    });
};
const open4 = () => {
    EMessageM.error('Oops, this is a error message.');
};
const open5 = () => {
    EMessageM({
        showClose: true,
        message: 'This is a message.'
    });
};
const open6 = () => {
    EMessageM({
        showClose: true,
        message: 'Congrats, this is a success message.',
        type: 'success'
    });
};
const open7 = () => {
    EMessageM({
        showClose: true,
        message: 'Warning, this is a warning message.',
        type: 'warning'
    });
};
const open8 = () => {
    EMessageM({
        showClose: true,
        message: 'Oops, this is a error message.',
        type: 'error'
    });
};
const openCenter = () => {
    EMessageM({
        showClose: true,
        message: 'Centered text',
        center: true
    });
};
const openHTML = () => {
    EMessageM({
        dangerouslyUseHTMLString: true,
        message: '<strong>This is <i>HTML</i> string</strong>'
    });
};
const open9 = () => {
    EMessageM({
        message: 'this is a message.',
        grouping: true,
        type: 'success'
    });
};
const openText = () => {
    EMessageM({
        message: 'this is a message.',
        text: true
    });
};
</script>
<style lang="scss" scoped>
@import '../css/common.scss';
</style>
