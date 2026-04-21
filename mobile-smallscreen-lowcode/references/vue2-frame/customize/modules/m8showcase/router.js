// 使用@originalFilePath，在构建时框架会将@originalFilePath替换为源文件路径
import  routerDefault from '{{@originalFilePath}}';

routerDefault.routes.push({
    path: 'modules/m8showcase/examples/customize',
    style: {
        navigationBarTitleText: '个性化示例'
    }
});

// 导出路由文件
export default routerDefault;
