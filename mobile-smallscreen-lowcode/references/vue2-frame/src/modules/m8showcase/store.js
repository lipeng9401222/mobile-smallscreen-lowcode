export default {
    // 独立命名名称
    moduleName: 'm8showcase',
    // 使用独立命名空间
    namespaced: true,
    state: {
        moduleInfo: '状态信息'
    },
    mutations: {
        setModuleInfo(state, data) {
            state.moduleInfo = data;
        }
    }
};
