export default {
    name: '基本组件', //组件名称
    module_name: 'GoodsInfo', //需要和组件文件夹名匹配
    version: '0.1.2'
    // 如果当前组件需要使用三方npm库依赖，可以在这里配置;
    // 配置参考文档：https://epointfe.feishu.cn/wiki/wikcnWfDygigkfyAELeQhjjl3Ch
    // packages: [
    //     {
    //         title: 'ucharts 图表库',
    //         // 组件本地开发、跨端源码构建会使用package和version版本号安装依赖
    //         // 在组件开发时，源码引用依赖正常引用package组件包名使用。例如在index.vue中：import uCharts from '@qiun/ucharts/u-charts.js';
    //         package: '@qiun/ucharts',
    //         version: '^2.5.0-20230101',
    //         // 设计器设计、预览使用cdn加载组件
    //         urls: ['http://app.epoint.com.cn/h5/fileattaches/20230404/u-charts-20230404170212.js'],
    //         // 组件构建上传时会过滤库，需要设计器使用cdn加载或设计器手动上传加载库文件加载到该全局变量名称的库文件
    //         library: 'uCharts'
    //     }
    // ]
};
