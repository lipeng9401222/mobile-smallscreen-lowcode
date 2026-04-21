/*
 * 作者: 吴松泽
 * 创建时间: 2022-03-23 11:00:10
 * 修改时间: 2022-05-12 11:21:07
 * 版本: [1.0]
 * 版权: 国泰新点软件股份有限公司
 * 描述: mock数据定义，M8框架自动读取
 */
const Mock = require('@mock');

const resultData = [
    {
        // 接口地址
        methodUrl: '/rest/mock/list',
        // 入参
        input: {
            keyword: '',
            currentpageindex: '',
            pagesize: ''
        },
        // 出参
        output: Mock.mock({
            'infolist|10-20': [
                {
                    title: '2017公务员考试34万人报名 平均24人抢1个职位',
                    date: '2017-06-05 13:09:10',
                    content: '来源：综合',
                    photo: Mock.Random.image('114x83', '#00405d', '#FFF', 'Mock.js'),
                    attention_degree: Mock.mock('@guid')
                }
            ]
        })
    },
    {
        // 接口地址
        methodUrl: '/rest/mock/detail',
        // 入参
        input: {
            guid: ''
        },
        // 出参
        output:  Mock.mock({
            info: {
                title: Mock.Random.csentence(5, 10), // 随机生成一段中文文本。
                data: Mock.Random.csentence(25, 30)
            }
        })
    }
];

module.exports = resultData;
