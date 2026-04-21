import configReady from '@boot';
import Vue from 'vue';
import App from './App';
import storeModules from '@epoint-mrc/em-cli/lib/resolution/store/index.tool';
import Vuex from 'vuex';

Vue.config.productionTip = process.env.NODE_ENV === 'development';
App.mpType = 'app';
Vue.use(Vuex);

const jsApiList = [];

configReady(jsApiList, () => {
    const app = new Vue({
        store: new Vuex.Store({
            modules: storeModules
        }),
        ...App
    });

    app.$mount();
}, (err) => {
    console.error(err);
});