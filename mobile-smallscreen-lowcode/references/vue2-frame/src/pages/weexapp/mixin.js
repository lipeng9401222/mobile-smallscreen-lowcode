// #ifdef APP-PLUS
// const navigator = weex.requireModule('navigator');
// #endif

export default {
    methods: {
        push(path) {
            // #ifdef APP-PLUS
            // 使用路由时
            this.$router.push(path);

            // 不使用路由时，需要将a.js的绝对地址转为b.js的绝对地址
            // const toUrl = weex.config.bundleUrl.split('/').slice(0, -1).join('/') + '/' + path + '.js';

            // navigator.push({
            //     url: toUrl,
            //     animated: 'true'
            // });

            // #endif

            // #ifndef APP-PLUS
            uni.navigateTo({
                url: path
            });
            // #endif
        },

        pop() {
            // #ifdef APP-PLUS
            // 使用路由时
            this.$router.go(-1);

            // 不使用路由时，返回通过 navigator 模块
            // navigator.pop({
            //     animated: 'true'
            // });

            // #endif

            // #ifndef APP-PLUS
            uni.navigateBack();
            // #endif
        }
    }
};
