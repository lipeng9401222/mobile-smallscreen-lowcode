import { defineStore } from 'pinia';

// 使用说明：
// 你可以任意命名 `defineStore()` 的返回值，但最好使用 store 的名字，同时以 `use` 开头且以 `Store` 结尾。
// (比如 `useUserStore`，`useCartStore`，`useProductStore`)
export const useInnerloginStore = defineStore(
    // 第一个参数是你的应用中 Store 的唯一 ID。
    'innerlogin', {
    // 你可以认为 state 是 store 的数据 (data)
    state: () => ({
        // 状态栏高度
        statusBarH: '',
        // 短信验证码有效期
        msgTime: 60
    }),
    // 而 actions 则是方法 (methods)
    actions: {
        // 设置状态栏高度
        setStatusBarH(data) {
            this.statusBarH = data;
        }
    }
}
);

