export default {
    // 独立命名名称
    moduleName: 'selectperson',
    // 使用独立命名空间
    namespaced: true,
    state: {
        option: null
    },
    mutations: {
        setOption(state, data){
            state.option = data;
        }
    }
};
