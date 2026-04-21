import 'virtual:mock-module';
import { EUIThemeManager } from '../theme';

// // #ifdef H5
// if (Config.isTestPerformance) {
//     Util.loaderLibrary({
//         inject: 'body',
//         src: './static/h5/performance.js',
//         type: 'js'
//     });
// }
// // #endif

const configReady = Config.configReady;

// vue2转vue3，兼容vue3的api调用
function isPromise(obj) {
    return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}

uni.addInterceptor({
    returnValue(resp) {
        if (!isPromise(resp)) {
            return resp;
        }

        return new Promise((resolve, reject) => {
            resp.then((res) => {
                if (res) {
                    if (res[0]) {
                        reject(res[0]);
                    } else {
                        resolve(res[1]);
                    }
                } else {
                    resolve(res);
                }
            });
        });
    }
});

// 组件挂载之前监听原生的模式或主题切换
if (ejs.os.ejs) {
    ejs.event.registerEvent({
        key: 'onModeChanged', // 模式切换
        success: function (result) {
            console.log('当前模式：', result.type);
        },
        error: function (error) {
            console.error(error);
        }
    });

    ejs.event.registerEvent({
        key: 'onThemeChanged', // 主题切换
        success: function (result) {
            // 切换主题
            EUIThemeManager.setTheme(result.type);
        },
        error: function (error) {
            console.error(error);
        }
    });
}

export default configReady;


