/*
 * 作者: 吴松泽
 * 创建时间: 2022-03-24 15:39:22
 * 修改时间: 2022-05-11 13:51:26
 * 版本: [1.0]
 * 版权: 国泰新点软件股份有限公司
 * 描述: mock数据定义，M8框架自动读取
 */
const Mock = require('@mock');

const listData = [
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
    },
    {
        // 接口地址
        methodUrl: /address_getdimensionlist_v8/,
        // 出参
        output: {
            dimensionslist: [
                {
                    dimensiongguid: 'mainDimension',
                    oulists: [
                        {
                            ouguid: '9579bbf9-31d0-4548-b78f-ea4392bf68f9',
                            fullouname: '系统管理部',
                            usercount: 4,
                            ismyou: 1,
                            parentouguid: '',
                            ordernum: 176,
                            haschildou: 0,
                            haschilduser: 1,
                            ouname: '系统管理部'
                        }
                    ],
                    title: '主维度'
                },
                {
                    dimensiongguid: 'subDimension',
                    oulists: [
                        {
                            ouguid: '9579bbf9-31d0-4548-b78f-ea4392bf68f9',
                            fullouname: '系统管理部',
                            usercount: 4,
                            ismyou: 1,
                            parentouguid: '',
                            ordernum: 176,
                            haschildou: 0,
                            haschilduser: 1,
                            ouname: '系统管理部'
                        }
                    ],
                    title: '次维度'
                }
            ]
        }
    },
    {
        // 接口地址
        methodUrl: /lll/,
        // 出参
        output: {
            oulist: [
                {
                    ouguid: '部门guid2',
                    fullouname: '系统管理部>-测测测1',
                    usercount: 0,
                    ismyou: 0,
                    parentouguid: '上级部门guid',
                    ordernum: 98,
                    haschildou: 1,
                    haschilduser: 0,
                    ouname: '部门名称1'
                },
                {
                    ouguid: '部门guid3',
                    fullouname: '系统管理部>-测测测1',
                    usercount: 0,
                    ismyou: 0,
                    parentouguid: '上级部门guid',
                    ordernum: 98,
                    haschildou: 1,
                    haschilduser: 0,
                    ouname: '部门名称2'
                }
            ],
            userlist: [
                {
                    ccworksequenceid: '',
                    loginid: 'admin',
                    ouguid: '9579bbf9-31d0-4548-b78f-ea4392bf68f9',
                    mobile: '18094387565',
                    title: '侧手ee222',
                    photourl:
                        'rest/mobileattachaction/getUserPicture?isCommondto=true&userGuid=45f0c5f9-cad2-49e6-887d-b38dfcbc23de&isMobile=true&md5=d55d3855ef3b0d0d9930040e294e190c',
                    userguid: '45f0c5f9-cad2-49e6-887d-b38dfcbc23d1',
                    baseouname: '系统管理部>',
                    displayname: '用户名称1'
                },
                {
                    ccworksequenceid: '',
                    loginid: 'admin',
                    ouguid: '9579bbf9-31d0-4548-b78f-ea4392bf68f9',
                    mobile: '18094387565',
                    title: '侧手ee222',
                    photourl:
                        'rest/mobileattachaction/getUserPicture?isCommondto=true&userGuid=45f0c5f9-cad2-49e6-887d-b38dfcbc23de&isMobile=true&md5=d55d3855ef3b0d0d9930040e294e190c',
                    userguid: '45f0c5f9-cad2-49e6-887d-b38dfcbc23d2',
                    baseouname: '系统管理部>',
                    displayname: '用户名称2'
                }
            ]
        }
    },
    {
        // 接口地址
        methodUrl:
            /address_getouanduserlist_dimension_v8|address_getoulistwithuser_v7|address_getoulistwithuser_v8|address_getalluserlist_v7/,
        // 出参
        output: {
            oulists: [],
            userlist: [
                {
                    loginid: 'admin',
                    ouguid: '9579bbf9-31d0-4548-b78f-ea4392bf68f9',
                    title: '',
                    photourl:
                        'rest/mobileattachaction/getUserPicture?isCommondto=true&userGuid=45f0c5f9-cad2-49e6-887d-b38dfcbc23de&isMobile=true',
                    userguid: '45f0c5f9-cad2-49e6-887d-b38dfcbc23de',
                    baseouname: '系统管理部',
                    displayname: '系统管理员'
                },
                {
                    loginid: 'huangxj',
                    ouguid: '9579bbf9-31d0-4548-b78f-ea4392bf68f9',
                    title: '',
                    photourl:
                        'rest/mobileattachaction/getUserPicture?isCommondto=true&userGuid=fb480023-0e38-4c07-87a1-d547e0d3390a&isMobile=true',
                    userguid: 'fb480023-0e38-4c07-87a1-d547e0d3390a',
                    baseouname: '系统管理部',
                    displayname: '黄晓军'
                },
                {
                    loginid: 'cxyi',
                    ouguid: '9579bbf9-31d0-4548-b78f-ea4392bf68f9',
                    title: '',
                    photourl:
                        'rest/mobileattachaction/getUserPicture?isCommondto=true&userGuid=8c703142-5da5-4218-9f18-b7598a5bb5dc&isMobile=true',
                    userguid: '8c703142-5da5-4218-9f18-b7598a5bb5dc',
                    baseouname: '系统管理部',
                    displayname: '陈星怡'
                },
                {
                    loginid: 'zhouwn',
                    ouguid: '9579bbf9-31d0-4548-b78f-ea4392bf68f9',
                    sex: '女',
                    title: '',
                    photourl:
                        'rest/mobileattachaction/getUserPicture?isCommondto=true&userGuid=8c6928fe-1ab2-4c02-a20d-7cf9adde5a96&isMobile=true',
                    userguid: '8c6928fe-1ab2-4c02-a20d-7cf9adde5a96',
                    baseouname: '系统管理部',
                    displayname: '周魏楠'
                }
            ]
        }
    },
    {
        // 接口地址
        methodUrl: /personal_getdetail_v8|getuserinfo_guid_v7/,
        // 出参
        output: {
            loginid: 'admin',
            title: '',
            backgroundcolor: '#41bbb0',
            photourl:
                'rest/mobileattachaction/getUserPicture?isCommondto=true&userGuid=45f0c5f9-cad2-49e6-887d-b38dfcbc23de&isMobile=true',
            userguid: '45f0c5f9-cad2-49e6-887d-b38dfcbc23de',
            displayname: '系统管理员'
        }
    },
    {
        // 接口地址
        methodUrl: /frame_myaddressgrouplist_v8|frame_myaddressgrouplist_v7/,
        // 出参
        output: {
            grouplist: [
                {
                    ordernumber: '2147483647',
                    isdefault: '0',
                    groupguid: '244e587c-8e83-4bb4-b980-e25dac3fdb70',
                    addresscount: 2,
                    groupname: '默认分组'
                },
                {
                    ordernumber: '0',
                    isdefault: '0',
                    groupguid: 'b9d60274-f019-4863-80f1-253e964a0629',
                    addresscount: 0,
                    groupname: 'ffgg'
                }
            ]
        }
    },
    {
        // 接口地址
        methodUrl: /frame_myaddressbooklist_v8|frame_myaddressbooklist_v7/,
        // 出参
        output: {
            userlist: [
                {
                    photourl:
                        'rest/mobileattachaction/getUserPicture?isCommondto=true&userGuid=45f0c5f9-cad2-49e6-887d-b38dfcbc23de&isMobile=true',
                    ouguid: '9579bbf9-31d0-4548-b78f-ea4392bf68f9',
                    baseouname: '系统管理部',
                    objectguid: '45f0c5f9-cad2-49e6-887d-b38dfcbc23de',
                    objectname: '系统管理员',
                    ordernumber: '0',
                    groupguid: '244e587c-8e83-4bb4-b980-e25dac3fdb70',
                    title: '',
                    ouname: '系统管理部'
                },
                {
                    photourl:
                        'rest/mobileattachaction/getUserPicture?isCommondto=true&userGuid=fb480023-0e38-4c07-87a1-d547e0d3390a&isMobile=true',
                    ouguid: '9579bbf9-31d0-4548-b78f-ea4392bf68f9',
                    baseouname: '系统管理部',
                    objectguid: 'fb480023-0e38-4c07-87a1-d547e0d3390a',
                    objectname: '黄晓军',
                    ordernumber: '0',
                    groupguid: '244e587c-8e83-4bb4-b980-e25dac3fdb70',
                    title: '',
                    ouname: '系统管理部'
                }
            ]
        }
    },
    {
        // 接口地址
        methodUrl: /staruser_list_v8/,
        // 出参
        output: {
            userlist: [],
            usercount: 0
        }
    },
    {
        // 接口地址
        methodUrl: /address_searchouoruserbycondition_dimension_v8|address_searchuserbycondition_v7/,
        // 出参
        output: {
            oulists: [],
            userlist: [
                {
                    loginid: 'admin',
                    ouguid: '9579bbf9-31d0-4548-b78f-ea4392bf68f9',
                    title: '',
                    photourl:
                        'rest/mobileattachaction/getUserPicture?isCommondto=true&userGuid=45f0c5f9-cad2-49e6-887d-b38dfcbc23de&isMobile=true',
                    userguid: '45f0c5f9-cad2-49e6-887d-b38dfcbc23de',
                    baseouname: '系统管理部',
                    displayname: '系统管理员'
                },
                {
                    loginid: 'huangxj',
                    ouguid: '9579bbf9-31d0-4548-b78f-ea4392bf68f9',
                    title: '',
                    photourl:
                        'rest/mobileattachaction/getUserPicture?isCommondto=true&userGuid=fb480023-0e38-4c07-87a1-d547e0d3390a&isMobile=true',
                    userguid: 'fb480023-0e38-4c07-87a1-d547e0d3390a',
                    baseouname: '系统管理部',
                    displayname: '黄晓军'
                },
                {
                    loginid: 'cxyi',
                    ouguid: '9579bbf9-31d0-4548-b78f-ea4392bf68f9',
                    title: '',
                    photourl:
                        'rest/mobileattachaction/getUserPicture?isCommondto=true&userGuid=8c703142-5da5-4218-9f18-b7598a5bb5dc&isMobile=true',
                    userguid: '8c703142-5da5-4218-9f18-b7598a5bb5dc',
                    baseouname: '系统管理部',
                    displayname: '陈星怡'
                },
                {
                    loginid: 'zhouwn',
                    ouguid: '9579bbf9-31d0-4548-b78f-ea4392bf68f9',
                    sex: '女',
                    title: '',
                    photourl:
                        'rest/mobileattachaction/getUserPicture?isCommondto=true&userGuid=8c6928fe-1ab2-4c02-a20d-7cf9adde5a96&isMobile=true',
                    userguid: '8c6928fe-1ab2-4c02-a20d-7cf9adde5a96',
                    baseouname: '系统管理部',
                    displayname: '周魏楠'
                }
            ]
        }
    }
];

module.exports = listData;
