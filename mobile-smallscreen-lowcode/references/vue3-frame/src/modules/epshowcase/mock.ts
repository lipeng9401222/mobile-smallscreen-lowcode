/*
 * 作者: 吴松泽
 * 创建时间: 2022-03-24 15:39:22
 * 修改时间: 2022-05-11 13:51:26
 * 版本: [1.0]
 * 版权: 国泰新点软件股份有限公司
 * 描述: mock数据定义，M8框架自动读取
 */
import Mock from '@mock';
import workflowData from './workflow-mock';
import selectPersonData from '../m8showcase/mock';

const getTemplate = function (item: any) {
    // 使用闭包维护当前页码
    let currentPage = 1;

    return function () {
        if (item === 'All') {
            return Mock.mock({
                'data|100': [
                    {
                        'num|+1': 1,
                        userGuid: function () {
                            return String(this.num);
                        },
                        itemName: function () {
                            return `我是事项${this.num}`;
                        },
                        showLoginId: function () {
                            return `111${this.num}`;
                        },
                        ouName: function () {
                            return `部门${this.num}`;
                        },
                        'status|1': ['审批中', '已完成', '草稿', '已退回'],
                        'age|18-100': 1,
                        date: '2024-05-10 12:00:00',
                        schedule: '2024-05-10 12:00:00'
                    }
                ],
                total: 100
            });
        }

        const pageSize = 10;
        const startNum = (currentPage - 1) * pageSize + 1;

        // 更新页码，模拟翻页
        currentPage = currentPage > 11 ? 12 : currentPage + 1;

        if (currentPage === 12) {
            return Mock.mock({
                data: [],
                total: 100
            });
        }

        return Mock.mock({
            'data|10': [
                {
                    'num|+1': startNum,
                    userGuid: function () {
                        return String(this.num);
                    },
                    itemName: function () {
                        return `我是事项${this.num}`;
                    },
                    showLoginId: function () {
                        return `111${this.num}`;
                    },
                    ouName: function () {
                        return `部门${this.num}`;
                    },
                    'status|1': ['审批中', '已完成', '草稿', '已退回'],
                    'age|18-100': 1,
                    date: '2024-05-10 12:00:00',
                    schedule: '2024-05-10 12:00:00'
                }
            ],
            total: 100
        });
    };
};

const mockData: {
    methodUrl: string;
    // 入参
    input: any;
    // 出参
    output: any;
}[] = [
    {
        // 接口地址
        methodUrl: '/rest/mock/goods',
        // 入参
        input: {
            keyword: '',
            currentpageindex: '',
            pagesize: ''
        },
        // 出参
        output: Mock.mock({
            'infolist|10': [
                {
                    title: '选择标题样式,在这里更改标题的排列方式'
                }
            ]
        })
    }
];
const gridMock = ['All', 1, 2, 3, 4, 5, ''].map((item) => {
    return {
        // 接口地址
        methodUrl: '/frameaction/getDataGridData' + item,
        // 入参
        input: {
            params: JSON.stringify({
                pageIndex: 1,
                pageSize: 10
            })
        },
        // 出参
        output: getTemplate(item)
    };
});

export default [...mockData, ...gridMock, ...workflowData, ...selectPersonData];
