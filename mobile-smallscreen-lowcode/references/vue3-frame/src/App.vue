<script setup lang="ts">
import { onLaunch, onShow, onHide } from '@dcloudio/uni-app';
// @ts-ignore
import { globalConfig } from 'virtual:global-config';
// eui模式下提供国际化全局配置
// 普通模式无需关心，只是一个空方法
globalConfig();
onLaunch(() => {
    console.log('App Launch');
});
onShow(() => {
    console.log('App Show');
});
onHide(() => {
    console.log('App Hide');
});
</script>
<style lang="scss">
/* 每个页面公共css */
@import '@common/css/common.extend.css';
// #ifdef H5
/* eui组件库css */
@import '@epoint-mfe/eui-components/src/styles/index.scss';
// #endif
</style>
