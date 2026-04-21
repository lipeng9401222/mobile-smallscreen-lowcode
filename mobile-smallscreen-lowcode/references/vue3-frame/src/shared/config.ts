/*
 * 移动前端框架全局配置项
 */
const Config:ConfigType = {
    /**
     * 是否开启代理
     */
    ajax: {
        // 如果开启，框架会处理一些默认的返回错误,并提示（非200情况下），处理的错误码如下
        // 401，403，417，429
        isAutoDealError: true,
        // 是否开启错误状态码自动弹窗提示
        isAutoErrToast: false,
        // 当开启isAutoErrToast后，根据对应错误关键字toast提示文字
        errMsg: {
            fail: '请求失败',
            timeout: '请求超时',
            abort: '请求中断'
        },
        // 每次 ajax时，也可以增加isAutoProxy:false，来让本次请求不代理
        // 是否自动代理，如果开启，所有的请求会在 headers 中默认带上用户相关信息
        // 如果非新点标准后台，请关闭，否则会影响正常请求
        isAutoProxy: true,
        // 开启isAutoProxy情况下生效
        // 每次 ajax时，也可以增加isAutoFingerprint:false，来让本次请求不添加染色体
        // 是否添加染色体，如果开启，会在所有ajax请求的请求头中增加User-Token请求头
        // 如果非新点标准后台，请关闭，否则会影响正常请求
        // 该配置开启默认会去请求token
        isAutoFingerprint: true,
        // 锁定token的时长，单位ms
        // ajax两次请求间隔小于该时长，第二次请求不会去请求token，而是直接使用上一次请求的token
        // 每次 ajax时，也可以传递 lockTokenDuration，修改上一次请求token锁定时长
        lockTokenDuration: 1000
    },
    /**
     * v6中针对ejs.oauth.getToken接口的定制
     * 可以修改getToken返回的值，方便v6中调试
     * v7中开发人员无需关注token（通过ajax自动代理进行设置）
     */
    token: {
        // 是否使用自定义token，可以用于非ejs环境下的token赋值刷新，影响到所有Util.ajax与下拉刷新请求
        isUseSelfToken: false,
        // 可以是字符串，也可以是方法
        // 非ejs环境下有效，ejs下默认就是容器的token，不容改变
        // 非ejs环境环境下isUseSelfToken为true生效
        getToken() {
            return Promise.resolve('a4bf8be66c4e45a3ccb79634aff575d8');
        },
        //非ejs环境下isUseSelfToken为true生效
        refreshToken: function () {
            // 自定义刷新token之后，请求的token仍然是从自定义getToken中获取token。
            return new Promise<void>((resolve) => {
                setTimeout(() => {
                    // 更新存储在本地的token
                    // ...
                    resolve();
                }, 1000);
            });
        },
        // 自定义刷新失败处理
        // 非ejs环境下isUseSelfToken为true生效
        // 超过允许最大刷新token次数后请求接口的响应状态码仍然403|401触发，可以在这里进行处理后续逻辑
        refreshTokenCountExceeded: function () {
            // ejs.ui.alert({
            //     title: '提醒',
            //     message: '用户身份失效，请重新登录',
            //     buttonName: '确定',
            //     success() {
            //         // ...
            //     }
            // });
        }
    },
    /**
     * 是否开启 调试面板， 开启可以在移动端捕获log
     * 仅在H5端生效
     * 在剥离后的dist/config.js中修改无效，此配置修改需要重新构建
     */
    isDebugPanel: 0,
    /**
     * 是否进行mock模拟数据请求
     * isProductionExternalMock为true时仅在dev环境生效
     */
    isMock: false,
    /**
     * 是否在生产环境下排除mockjs库
     * 防止构建后带mockjs资源过大
     * isMock: true时生效
     */
    isProductionExternalMock: true,
    /**
     * 是否开启性能检测，仅在H5端生效
     */
    isTestPerformance: 0,
    /**
     * 编译到微信小程序时，是否将框架组件库设置为异步化分包
     * 该配置可用于减小主包大小
     * 注意，开启后在mounted中需要延迟获取组件实例，因为组件可能还未加载成功
     */
    isAsyncPackages: 0,
    /**
     * 自定义异步化分包目录，isAsyncPackages开启时有效
     * 示例：customAsyncPackages: ['components/custom_components']
     * 注意，默认是src目录下的路径，建议将异步化分包放在 src/components 目录下
     */
    customAsyncPackages: [],
    /**
     * H5端打包新点小程序或低码组件时，是否需要剥离公共资源
     * 打包生成公共资源时，默认会进行缓存
     * 若要清除缓存构建最新资源，请删除 @epoint-mrc/vue-cli-plugin-mccommon/cache 目录再构建
     */
    isExternalCommon: 0,
    /**
     * 是否使用原生请求代理ajax请求
     */
    isUseEjsFetchAjax: false,
    /**
     * 是否使用个性化定制目录
     * 开启后，代码在构建时将会响应custom目录下的个性化代码
     * 修改后需重启服务或重新构建
     */
    isCustomize: false,
    /**
     * H5下是否开启多模块构建
     */
    isH5Multiple: false,
    // H5环境下需要用到的参数，例如政务微信刷新token
    h5Env: {
        // M820主流程测试
        clientId: 'f01cf96d-71e2-40b3-859d-b3599b15dd54',
        clientSecret: '331ab1c9-dbd6-4974-a32e-541bd566b8a9'
    },
    // 是否在dist下独立config.js文件，仅H5环境生效
    isExternalConfig: false,
    /**
     * H5 端构建后自动打包 zip 配置
     * 注意：该配置仅在H5端生效
     */
    isH5AutoZipConfig: {
        /**
         * 是否开启自动打包zip
         */
        enable: false,
        /**
         * 压缩文件名称
         */
        zipName: 'zipName',
        /**
         * 是否对zip文件加时间戳标识
         */
        isAddTimestamp: false
    },
    /**
     * 统一ejs初始化
     * @param {Array} jsApiList 自定义api列表
     * @param {Function} successCallback 成功回调，非必填
     * @param {Function} errorCallback 失败回调，非必填
     */
    configReady: (jsApiList, successCallback, errorCallback) => {
            const tmpApiList = jsApiList || [];
            const isFormal = false;

            ejs.config({
                // 注，jsApiList中key代表模块，其中value为对应类的包名，Android和iOS下有区别
                jsApiList: tmpApiList
            });
            ejs.error((error) => {
                console.error(error);
                // 说明: 可以捕获相应的错误，例如，验证失败会触发error，安卓原生容器捕获到图片加载异常错误也会触发
                errorCallback && errorCallback(error);
            });
            ejs.ready(() => {
                Config.serverUrl = isFormal ? 'http://ip/rest/' : 'http://127.0.0.1/rest/mock/';
                successCallback && successCallback();
            });
    },
    /**
     * 开发环境常量，ejs、dingtalk
     */
    env: (function () {
        // var ENV_H5 = 'uni';
        // var ENV_EJS = 'native';
        // var ENV_DD = 'dd';
        // var ENV_WEEX = 'weex';
        const ENV_EJS_H5 = 'native_uni';
        // var ENV_DD_H5 = 'dd_uni';
        // var ENV_ALL = 'native_dd_uni';
        // var ENV_EJS_WEEX_H5 = 'native_weex_uni';

        return ENV_EJS_H5;
    })(),
    /**
     * 本地调试跨域时，可以对devServer进行配置
     * 简化配置，仅需要配置host和target即可
     * 此配置仅在开发环境下生效
     * 修改此配置需要重新运行调试命令
     */
    devServerProxy: {
        // 代表我们本地路径/oa9_v7_demo后的请求将匹配下面配置
        '/oa9_v7_demo': {
            target: 'http://domain.cn/' //对应需要代理的接口
        }
    },
    /**
     * 是否开启统一 EUI 开发模式，默认关闭
     */
    isEuiMode: false
};

export default Config;
