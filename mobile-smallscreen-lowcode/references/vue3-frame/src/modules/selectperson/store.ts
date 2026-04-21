import { defineStore } from 'pinia';

// 使用说明：
// 你可以任意命名 `defineStore()` 的返回值，但最好使用 store 的名字，同时以 `use` 开头且以 `Store` 结尾。
// (比如 `useUserStore`，`useCartStore`，`useProductStore`)
export const useSelectPersonStore = defineStore(
    // 第一个参数是你的应用中 Store 的唯一 ID。
    'selectperson',
    {
        // 你可以认为 state 是 store 的数据 (data)
        state: () => ({
            option: null
        }),
        // 而 actions 则是方法 (methods)
        actions: {
            setOption(data) {
                this.option = data;
            }
        }
    }
);
