<template>
    <div class="van-content">
        <div class="example-group">
            <text class="cell-title">基础用法</text>
            <div class="example-card">
                <div class="example-row">
                    <e-button-m plain @click="open1">Closes automatically</e-button-m>
                    <e-button-m plain @click="open2">Won't close automatically</e-button-m>
                </div>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">带类型</text>
            <div class="example-card">
                <div class="example-row">
                    <e-button-m plain @click="open3">Success</e-button-m>
                    <e-button-m plain @click="open4">Warning</e-button-m>
                    <e-button-m plain @click="open5">Info</e-button-m>
                    <e-button-m plain @click="open6">Error</e-button-m>
                    <e-button-m plain @click="open7">No Type</e-button-m>
                </div>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">自定义位置</text>
            <div class="example-card">
                <div class="example-content">
                    <div class="example-desc">Top Center</div>
                    <div class="example-row">
                        <e-button-m plain @click="open8">Top Center</e-button-m>
                    </div>
                    <div class="example-desc">Bottom Center</div>
                    <div class="example-row">
                        <e-button-m plain @click="open9">Bottom Center</e-button-m>
                    </div>
                    <div class="example-desc">Top Left</div>
                    <div class="example-row">
                        <e-button-m plain @click="open10">Top Left</e-button-m>
                    </div>
                    <div class="example-desc">Bottom Left</div>
                    <div class="example-row">
                        <e-button-m plain @click="open11">Bottom Left</e-button-m>
                    </div>
                    <div class="example-desc">Top Right</div>
                    <div class="example-row">
                        <e-button-m plain @click="open12">Top Right</e-button-m>
                    </div>
                    <div class="example-desc">Bottom Right</div>
                    <div class="example-row">
                        <e-button-m plain @click="open13">Bottom Right</e-button-m>
                    </div>
                </div>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">带有偏移</text>
            <div class="example-card">
                <e-button-m plain @click="open14">ENotification with offset</e-button-m>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">使用 HTML 字符串</text>
            <div class="example-card">
                <e-button-m plain @click="open15">Use HTML String</e-button-m>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">隐藏关闭按钮</text>
            <div class="example-card">
                <e-button-m plain @click="open16">Hide close button</e-button-m>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { h } from 'vue';
import { ENotificationM } from '@epoint-mfe/eui-components';

const open1 = () => {
    ENotificationM({
        title: 'Title',
        message: h('i', { style: 'color: teal' }, 'This is a reminder')
    });
};

const open2 = () => {
    ENotificationM({
        title: 'Prompt',
        message: 'This is a message that does not automatically close',
        duration: 0
    });
};
const open3 = () => {
    ENotificationM({
        title: 'Success',
        message: 'This is an Success message',
        type: 'success'
    });
};

const open4 = () => {
    ENotificationM({
        title: 'Warning',
        message: 'This is a warning message',
        type: 'warning'
    });
};

const open5 = () => {
    ENotificationM({
        title: 'Info',
        message: 'This is an info message',
        type: 'info'
    });
};

const open6 = () => {
    ENotificationM({
        title: 'Error',
        message: 'This is an error message',
        type: 'error'
    });
};
const open7 = () => {
    ENotificationM({
        title: 'No Type',
        message: "This is an No Type message"
    });
};

const open8 = () => {
    ENotificationM({
        title: 'Custom Position',
        message: "I'm at the top center corner",
        position: 'top-center'
    });
};

const open9 = () => {
    ENotificationM({
        title: 'Custom Position',
        message: "I'm at the bottom center corner",
        position: 'bottom-center'
    });
};

const open10 = () => {
    ENotificationM({
        title: 'Custom Position',
        message: "I'm at the top left corner",
        position: 'top-left'
    });
};
const open11 = () => {
    ENotificationM({
        title: 'Custom Position',
        message: "I'm at the bottom left corner",
        position: 'bottom-left'
    });
};
const open12 = () => {
    ENotificationM({
        title: 'Custom Position',
        message: "I'm at the top right corner",
        position: 'top-right'
    });
};
const open13 = () => {
    ENotificationM({
        title: 'Custom Position',
        message: "I'm at the bottom right corner",
        position: 'bottom-right'
    });
};
const open14 = () => {
    ENotificationM.success({
        title: 'Success',
        message: 'This is a success message',
        offset: 100
    });
};
const open15 = () => {
    ENotificationM({
        title: 'HTML String',
        dangerouslyUseHTMLString: true,
        message: '<strong>This is <i>HTML</i> string</strong>'
    });
};
const open16 = () => {
  ENotificationM.success({
    title: 'Info',
    message: 'This is a message without close button',
    showClose: false,
  });
};
</script>
<style lang="scss" scoped>
@import '../css/common.scss';
</style>
