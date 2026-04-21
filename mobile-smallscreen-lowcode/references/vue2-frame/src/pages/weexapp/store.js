export default {
    // 独立命名名称
    moduleName: 'weexapp',
    // 使用独立命名空间
    namespaced: true,
    state: {
        count: 0
    },
    mutations: {
        increment (state) {
            state.count++;
          }
    }
};
