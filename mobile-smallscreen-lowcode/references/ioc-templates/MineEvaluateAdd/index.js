//构建入口，勿动
import Component from './index.vue';

if (!Component.name) {
    console.error('卡片组件vue内请定义name字段后重新构建！');
}
const install = function (Vue) {
    Vue.component(Component.name, Component);
};

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export { default as component } from './index.vue';

export default {
    install
};
