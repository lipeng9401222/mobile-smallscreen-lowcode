import configReady from '@boot';
import App from './App.vue';
import { createApp } from 'vue';
import * as Pinia from 'pinia';
// @ts-ignore
import { setup, jsApiList } from 'virtual:setup';

const app = createApp(App);
app.use(Pinia.createPinia());

// 合并 jsApiList，eui模式需要调用的 jsApiList 会在 virtual:setup 中定义
// 普通模式下导出的 jsApiList 只是个空数组
const resolvedJsApiList = jsApiList.concat([]);

configReady(resolvedJsApiList, async () => {
    // eui模式需要调用 setup 方法，普通模式无需关注，只是个空方法
    await setup(app);
    // #ifdef H5
    app.mount('#app');
    // #endif
});

// #ifndef H5
// 在MP平台，App创建及挂载必须同步执行
app.mount('#app');
// #endif
