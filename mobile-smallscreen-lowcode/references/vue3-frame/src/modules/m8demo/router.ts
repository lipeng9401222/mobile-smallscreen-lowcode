/**
 * router.js无需import组件，需要path路径与vue组件名称保持匹配。
 * routers数组下有效参数只有path与style，保持与uniapp一致 https://uniapp.dcloud.io/collocation/pages.html#pages
 * 构建时会自动将模块下的路由配置合并到pages.json内
 */
const routes = [
    {
        // 匹配到m8demo/list时会自动加载list组件
        path: 'modules/m8demo/list',
        style: {
            navigationBarTitleText: '列表页面'
        }
    },
    {
        // 匹配到m8demo/detail时加载detail组件
        path: 'modules/m8demo/detail',
        style: {
            navigationBarTitleText: '详情页面'
        }
    }
];

const options = {
    // 该模块是否自动分包处理
    autoSubPackages: true,
    /* 该模块是否为首页模块
     * 开启后路由信息会放在pages.json中的pages数组的第一个位置
     * 定义在routes对象中的第一个模块地址为应用默认首页
     * 所有模块仅支持一个首页模块
     * autoSubPackages为true时，该值无效 */
    isFirstModule: false
};

// 导出路由文件
export default { routes, options };
