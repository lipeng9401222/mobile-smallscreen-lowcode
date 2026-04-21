// 统一编码开发模式，传统 H5 开发无需关注
// BASEPATH项目基础路径,研发环境取用`./`,正式环境需与实际项目基础路径同步，例如：
// 示例: 完整访问路径为 http://ip:port/epoint-web/frame/pages/epointsform/mobilesformrender/index.html#/pages/xxx/xxx
// BASEPATH 配置说明: 需设置为域名后到实际HTML文件目录的路径，如 const BASEPATH = '/epoint-web/frame/pages/epointsform/mobilesformrender/';
// 项目基础路径  按照规范为 /<应用名>/子路径
const BASEPATH = process.env.VITE_RUN_ALL_PATH || '/epoint-web/mobile/';
// 项目虚拟路径 即 /<应用名>
const ROOTPATH = process.env.VITE_RUN_ROOT_PATH || '/epoint-web';

// 是否在浏览器window环境
const isInWindowEnv = () => {
    return typeof window !== 'undefined' && window;
};

const config = {
    // 路由历史模式默认 HTML5 为 history 模式
    routeMode: 'HTML5',
    // 项目公共基础路径, 替代原来的`import.meta.env.VITE_BASE_URL`变量
    basePath: BASEPATH,
    // 项目的虚拟路径，
    rootPath: ROOTPATH,
    // ajax 的 base url
    ajaxBaseUrl: `${ROOTPATH}/rest`,
    // 其他ajax的配置
    ajaxConfig: {
        headers: {
            'X-Front-Path': isInWindowEnv() && window.location?.origin + BASEPATH
        }
    },
    // 系统参数接口地址
    getFrameSysParamUrl: '/resourceaction/getSysBoot',
    // 系统参数更新频率，单位为秒
    frameSysParamUpdateFrequency: 300,
    // 是否开启数据模拟，开启后会将/epoint-web下的请求代理到 https://fe.epoint.com.cn/mock/752/eui-vue/ mock 服务器上
    isMock: false
};

export default config;

// 仅研发环境注册全局变量
isInWindowEnv() && Config.isEuiMode && (window.__E_GLOBAL_CONFIG__ = config);
