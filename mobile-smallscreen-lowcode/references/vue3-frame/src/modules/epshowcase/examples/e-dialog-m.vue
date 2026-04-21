<template>
    <div class="van-content">
        <text class="cell-title">基本使用</text>
        <div class="flex justify-spacep-between mb-4 flex-wrap gap-4">
            <e-button-m @click="dialogVisible1 = true">点击打开dialog</e-button-m>
            <e-dialog-m v-model="dialogVisible1" title="提示" :show-cancel-button="true" @confirm="handleConfirm"
                @cancel="handleCancel">
                <p>这里是备注提示内容</p>
            </e-dialog-m>
        </div>

        <text class="cell-title">无标题</text>
        <div class="flex justify-spacep-between mb-4 flex-wrap gap-4">
            <e-button-m @click="dialogVisible10 = true">点击打开dialog</e-button-m>
            <e-dialog-m v-model="dialogVisible10" :show-cancel-button="true">
                <p>这里是提示内容这里是提示内容</p>
            </e-dialog-m>
        </div>

        <text class="cell-title">重要提示确认</text>
        <div class="flex justify-spacep-between mb-4 flex-wrap gap-4">
            <e-button-m @click="dialogVisible11 = true">点击打开dialog</e-button-m>
            <e-dialog-m v-model="dialogVisible11" title="提示" confirm-button-text="我知道了">
                <p>这里是备注提示内容</p>
            </e-dialog-m>
        </div>

        <text class="cell-title">轻提示关闭</text>
        <div class="flex justify-spacep-between mb-4 flex-wrap gap-4">
            <e-button-m @click="dialogVisible12 = true">点击打开dialog</e-button-m>
            <e-dialog-m v-model="dialogVisible12" title="提示" :show-confirm-button="false" cancel-button-text="关闭"
                :show-cancel-button="true">
                <p>这里是备注提示内容</p>
            </e-dialog-m>
        </div>

        <text class="cell-title">自定义内容</text>
        <div class="flex justify-spacep-between mb-4 flex-wrap gap-4">
            <e-button-m @click="dialogVisible2 = true">点击打开dialog</e-button-m>
            <e-dialog-m v-model="dialogVisible2" title="自定义内容自定义内容自定义内容自定义内容">
                <e-input-m :border="false" type="textarea" maxlength="50" placeholder="请输入留言" show-word-limit
                    v-model="textareaValue"></e-input-m>
            </e-dialog-m>
        </div>

        <text class="cell-title">slot插槽</text>
        <div class="flex justify-spacep-between mb-4 flex-wrap gap-4">
            <e-button-m @click="dialogVisible3 = true">点击打开dialog</e-button-m>
            <e-dialog-m v-model="dialogVisible3" title="slot插槽">
                <template #header>
                    <span>header插槽</span>
                </template>
                <p>内容区域</p>
                <span>文字文字文字文字</span>
                <template #footer>
                    <div style="display: flex;padding: 5px 20px;">
                        <e-button-m round block size="small" @click="dialogVisible3 = false">取消</e-button-m>
                        <e-button-m type="primary" block round size="small"
                            @click="dialogVisible3 = false">确认</e-button-m>
                    </div>
                </template>
            </e-dialog-m>
        </div>

        <text class="cell-title">关闭 dialog 前回调</text>
        <div class="flex justify-spacep-between mb-4 flex-wrap gap-4">
            <e-button-m @click="dialogVisible4 = true">点击打开dialog</e-button-m>
            <e-dialog-m v-model="dialogVisible4" title="关闭dialog前回调" :show-cancel-button="true"
                :before-close="handleBeforClose">
                <p>内容区域</p>
                <span>文字文字文字文字</span>
            </e-dialog-m>
        </div>

        <text class="cell-title">延迟关闭、打开</text>
        <div class="flex justify-spacep-between mb-4 flex-wrap gap-4">
            <e-button-m @click="dialogVisible5 = true">点击打开dialog</e-button-m>
            <e-dialog-m v-model="dialogVisible5" title="延迟关闭/打开" :show-cancel-button="true" :open-delay="500"
                :close-delay="500">
                <p>内容区域</p>
                <span>文字文字文字文字</span>
            </e-dialog-m>
        </div>

        <text class="cell-title">添加contentCls额外样式类名</text>
        <div class="flex justify-spacep-between mb-4 flex-wrap gap-4">
            <e-button-m @click="dialogVisible6 = true">点击打开dialog</e-button-m>
            <e-dialog-m v-model="dialogVisible6" title="contentCls" :show-cancel-button="true"
                content-cls="my-dialog-content">
                <span>文字文字文字文字</span>
            </e-dialog-m>
        </div>

        <text class="cell-title">添加contentPadding内容区域的边距</text>
        <div class="flex justify-spacep-between mb-4 flex-wrap gap-4">
            <e-button-m @click="dialogVisible7 = true">点击打开dialog</e-button-m>
            <e-dialog-m v-model="dialogVisible7" title="contentPadding" :show-cancel-button="true"
                :content-padding="[10, 20]">
                <span>文字文字文字文字</span>
            </e-dialog-m>
        </div>

        <text class="cell-title">添加contentStyle内容区域的额外样式</text>
        <div class="flex justify-spacep-between mb-4 flex-wrap gap-4">
            <e-button-m @click="dialogVisible8 = true">点击打开dialog</e-button-m>
            <e-dialog-m v-model="dialogVisible8" title="contentStyle" :show-cancel-button="true"
                :content-style="myStyle">
                <span>文字文字文字文字</span>
            </e-dialog-m>
        </div>

        <text class="cell-title">show-bg为内容区域添加背景色</text>
        <div class="flex justify-spacep-between mb-4 flex-wrap gap-4">
            <e-button-m @click="dialogVisible9 = true">点击打开dialog</e-button-m>
            <e-dialog-m v-model="dialogVisible9" title="show-bg" :show-cancel-button="true" :show-bg="true">
                <span>文字文字文字文字</span>
            </e-dialog-m>
        </div>

        <text class="cell-title">全屏展示</text>
        <div class="flex justify-spacep-between mb-4 flex-wrap gap-4">
            <e-button-m @click="dialogVisible20 = true">点击打开dialog</e-button-m>
            <e-dialog-m v-model="dialogVisible20" :fullscreen="true" title="全屏展示" :show-cancel-button="true">
                <span>文字文字文字文字</span>
            </e-dialog-m>
        </div>

        <text class="cell-title">显示全屏按钮</text>
        <div class="flex justify-spacep-between mb-4 flex-wrap gap-4">
            <e-button-m @click="dialogVisible21 = true">点击打开dialog</e-button-m>
            <e-dialog-m v-model="dialogVisible21" :showFullscreen="true" title="显示全屏按钮" :show-cancel-button="true">
                <span>文字文字文字文字</span>
            </e-dialog-m>
        </div>

        <text class="cell-title">API使用:打开链接</text>
        <e-button-m @click="clickOpenLink">点击打开dialog</e-button-m>

        <text class="cell-title">API使用:打开链接,并获取iframe回调</text>
        <e-button-m @click="clickOpenLink2">点击打开dialog</e-button-m>

        <text class="cell-title">API使用:打开组件</text>
        <e-button-m @click="clickOpenComponent">点击打开dialog</e-button-m>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import type { CSSProperties } from 'vue';
import { openComponentDialog, openIframeDialog, openDialog } from '@epoint-mfe/eui-components';
import { defineAsyncComponent, h } from 'vue';

// 方法调用
const clickOpenLink = () => {
    openDialog({
        title: '弹窗',
        width: 300,
        height: 500,
        url: 'http://192.168.219.170/docs/vue/latest/frame/',
        closeCallback: (params) => {
            console.log('close dialog params:', params);
        },
    })
}

const clickOpenLink2 = () => {
    openIframeDialog({
        title: '弹窗',
        fullscreen: true,
        showCancelButton: true,
        url: 'http://192.168.219.170/docs/vue/latest/frame/',
        closeCallback: (params) => {
            console.log('close dialog params:', params);
        },
        iframeEvents: {
            onload: () => {
                console.log('iframe 加载完成');
            },
            ondestroy: (action) => {
                console.log('iframe 销毁', action);
            }
        }
    })
}

const clickOpenComponent = () => {
    openComponentDialog(
        {
            title: '快速显示组件的dialog',
            width: 300,
            height: 500,
            closeCallback: (action) => {
                console.log('关闭对话框, 回传值为', action);
            },
        },
        () => {
            return h(
                defineAsyncComponent(() => import('./e-button-m.vue'))
            );
        }
    );
}

// 组件调用
const dialogVisible1 = ref(false);
const dialogVisible10 = ref(false);
const dialogVisible11 = ref(false);
const dialogVisible12 = ref(false);
const dialogVisible2 = ref(false);
const dialogVisible3 = ref(false);
const dialogVisible4 = ref(false);
const dialogVisible5 = ref(false);
const dialogVisible6 = ref(false);
const dialogVisible7 = ref(false);
const dialogVisible8 = ref(false);
const dialogVisible9 = ref(false);
const dialogVisible20 = ref(false);
const dialogVisible21 = ref(false);
const textareaValue = ref('');


// css样式
const myStyle = ref<CSSProperties>({
    color: 'blue',
    fontWeight: 'bold',
    textDecoration: 'underline',
});

// 设置before-close属性后，close-delay延迟关闭将被阻断
const handleBeforClose = (done: (flag: boolean) => void) => {
    ejs.ui.toast('延迟2秒关闭');
    setTimeout(() => {
        done(true)
    }, 2000);
}

const handleConfirm = () => {
    console.log('点击确认按钮时触发');
}
const handleCancel = () => {
    console.log('点击取消按钮时触发');
}
</script>
<style lang="scss" scoped>
::v-deep .my-dialog-content {
    background-color: red
}

@import '../css/common.scss';
</style>
