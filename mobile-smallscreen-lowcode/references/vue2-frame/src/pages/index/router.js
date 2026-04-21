/**
 * router.js无需import组件，需要path路径与vue组件名称保持匹配。
 * routers数组下有效参数只有path与style，保持与uniapp一致 https://uniapp.dcloud.io/collocation/pages.html#pages
 * 构建时会自动将模块下的路由配置合并到pages.json内
 */
const routes = [
    {
        // 匹配到/pages/index/index时会自动加载index组件
        path: 'pages/index/index',
        style: {
            navigationBarTitleText: 'hello'
        }
    },
    {
        path: 'pages/index/detail',
        style: {
            navigationBarTitleText: 'detail'
        }
    }
];

// 导出路由文件
export default routes;
