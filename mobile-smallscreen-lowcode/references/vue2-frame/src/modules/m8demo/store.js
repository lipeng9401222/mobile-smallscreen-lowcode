export default {
    // 独立命名名称
    moduleName: 'm8demo',
    // 使用独立命名空间
    namespaced: true,
    state: {
        isPageRefresh: true
    },
    mutations: {
        setPageRefresh(state, isRefresh) {
            state.isPageRefresh = isRefresh;
        }
    }
};
