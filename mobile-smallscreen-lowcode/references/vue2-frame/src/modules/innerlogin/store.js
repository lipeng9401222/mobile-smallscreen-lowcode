export default {
    // 独立命名名称
    moduleName: 'innerlogin',
    // 使用独立命名空间
    namespaced: true,
    state: {
        // 状态栏高度
        statusBarH: '',
        // 短信验证码有效期
        msgTime: 60
    },
    mutations: {
        // 设置状态栏高度
        setStatusBarH(state, data) {
            state.statusBarH = data;
        }
    }
};
