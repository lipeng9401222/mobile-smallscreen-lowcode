/*
 * 作者: 吴松泽
 * 创建时间: 2022-03-24 15:39:22
 * 修改时间: 2022-05-11 13:51:26
 * 版本: [1.0]
 * 版权: 国泰新点软件股份有限公司
 * 描述: mock数据定义，M8框架自动读取
 */
const resultData = [
    {
        // 接口地址
        methodUrl: '/rest/mock/test',
        // 入参
        input: {
            guid: ''
        },
        // 出参
        output: {
            test: 'Hello world by-Mock'
        }
    }
];

module.exports = resultData;
