<template>
    <div class="van-content">
        <div class="example-group">
            <text class="cell-title">区域加载</text>
            <div class="example-card">
                <div v-loading="loading">
                    内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
                </div>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">自定义加载中组件内容</text>
            <div class="example-card">
                <div class="example-content">
                    <div
                        v-loading="loading"
                        loading-text="Loading..."
                        :loading-spinner="svg"
                        loading-svg-view-box="0 0 400 400"
                        loading-background="rgba(122, 122, 122, 0.8)"
                    >
                        内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
                    </div>
                    <div v-loading="loading" :loading-svg="svg" class="custom-loading-svg" loading-svg-view-box="0 0 400 400">
                        内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
                    </div>
                </div>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">让加载组件铺满整个屏幕</text>
            <div class="example-card">
                <div class="example-row">
                    <e-button-m v-loading.fullscreen.lock="fullscreenLoading" type="primary" @click="openFullScreen1">
                        As a directive
                    </e-button-m>
                    <e-button-m type="primary" @click="openFullScreen2">As a service</e-button-m>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue';
import { ELoadingM } from '@epoint-mfe/eui-components';
const loading = ref(true);
const svg = `
<g><path fill="#3472d7" d="M219.91,190.42v119.54h-39.99V190.42h20H219.91z" /><path fill="#3472d7" d="M143.44,237.17L228.28,322L200,350.28l-84.83-84.83l14.14-14.14L143.44,237.17z" /><path fill="#3472d7" d="M284.83,265.45L200,350.28L171.72,322l84.83-84.83l14.14,14.14L284.83,265.45z" /><path fill="#4E5463" d="M342.36,171.17c-12.12-12.58-27.07-21.57-43.46-26.33c0.29-2.88,0.44-5.79,0.44-8.71 c0-47.24-38.43-85.67-85.68-85.67c-43.92,0-80.23,33.22-85.11,75.85c-54.97,3.95-98.49,49.94-98.49,105.9 c0,56.45,44.29,102.75,99.94,105.99v-40.11c-33.58-3.15-59.94-31.49-59.94-65.87c0-36.49,29.69-66.18,66.18-66.18 c3.22,0,6.5,0.24,9.75,0.72l27.14,4l-4.49-27.06c-0.42-2.54-0.63-5.08-0.63-7.56c0-25.19,20.49-45.67,45.67-45.67 c25.19,0,45.68,20.49,45.68,45.67c0,5.97-1.14,11.78-3.39,17.27l-10.8,26.4l28.5,1.16c31.58,1.28,56.31,27.05,56.31,58.67 c0,32.39-26.35,58.74-58.74,58.74c-0.41,0-0.81-0.01-1.22-0.02v39.99c0.41,0,0.81,0.03,1.22,0.03 c54.45,0,98.74-44.29,98.74-98.74C369.96,213.97,360.16,189.66,342.36,171.17z" /></g>`;
const fullscreenLoading = ref(false);
const openFullScreen1 = () => {
    fullscreenLoading.value = true;
    setTimeout(() => {
        fullscreenLoading.value = false;
    }, 2000);
};

const openFullScreen2 = () => {
    const loading = ELoadingM.service({
        lock: true,
        text: 'Loading',
        background: 'rgba(0, 0, 0, 0.7)'
    });
    setTimeout(() => {
        loading.close();
    }, 2000);
};
</script>

<style lang="scss" scoped>
@import '../css/common.scss';
</style>
