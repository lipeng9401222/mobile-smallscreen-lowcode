
import { defineStore } from 'pinia';

// 使用说明：
// 你可以任意命名 `defineStore()` 的返回值，但最好使用 store 的名字，同时以 `use` 开头且以 `Store` 结尾。
// (比如 `useUserStore`，`useCartStore`，`useProductStore`)
export const useIndexStore = defineStore(
    // 第一个参数是你的应用中 Store 的唯一 ID。
    'index', {
    // 你可以认为 state 是 store 的数据 (data)
    state: () => ({
        moduleInfo: '状态信息'
    }),
    // getters 是 store 的计算属性 (computed)
    getters: {
        moduleInfoData: (state) => state.moduleInfo + '数据'
    },
    // 而 actions 则是方法 (methods)
    actions: {
        setModuleInfo(data) {
            this.moduleInfo = data;
        }
    }
}
);

