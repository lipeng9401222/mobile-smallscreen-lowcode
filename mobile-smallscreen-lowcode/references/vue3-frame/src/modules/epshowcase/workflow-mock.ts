import Mock from '@mock';

export const mockData: {
    methodUrl: string;
    // 入参
    input: any;
    // 出参
    output: any;
}[] = [
    // 保存表单
    {
        methodUrl: '/save',
        // 入参
        input: {},
        // 出参
        output: {
            currentWorkItem: {},
            message: '',
            flag: true
        }
    },
    // 提交表单
    {
        methodUrl: '/submit',
        // 入参
        input: {},
        // 出参
        output: {}
    },
    // 获取工作流按钮
    {
        methodUrl: '/getOperationBtn',
        // 入参
        input: {},
        // 出参
        output: {
            btndata: Mock.mock({
                saveresturl: 'saveresturl',
                submitresturl: 'submitresturl',
                lockdttm: '如果锁定状态的锁定提醒信息', // 原移动端似乎没有锁定状态--待确定
                // 是否展示解锁按钮
                isshowlockbut: true,
                info: '处理页面顶部显示的提示信息',
                acthtml: '活动名称',
                pviguid: '112233',
                lockTimeControl: '2',
                // 流程如果处于加办处理中的加办提醒信息
                jbinfo: '',
                // 按钮信息
                btn: [
                    {
                        text: '通过',
                        operationguid: '111111',
                        transitionguid: '变迁独立按钮关联的变迁标识，非变迁独立按钮为空',
                        operationtype: 'Pass',
                        beforeact: '按钮触发前事件，返回对应隐藏按钮id', // 在vue中变为传入组件方法，此字段仅用作判断
                        afteract: '按钮操作后事件，返回对应隐藏按钮id', // 在vue中变为传入组件方法，此字段仅用作判断
                        // 意见是否必填
                        isrequireopinion: true,
                        click: '点击执行调用事件Js', // PC端未处理该字段，移动端不适合直接运行js语句
                        operationmodel: '', // PC端按钮样式相关--移动端暂时忽略
                        statelevel: '按钮配置对应重要程度，详见常量7', // 与operationmodel 一起确定PC按钮样式
                        btnid: function () {
                            return `btn_${this.operationguid}`;
                        },
                        // 是否是自定义流程设计按钮类型
                        isflow: false,
                        note: '按钮备注',
                        // 按钮配置的预处理人数量限制数据（送阅读、转交、抄送）
                        transactormaxcount: 5
                        // 服务化场景下，按钮操作后事件客户端执行，才会返回相关的事件信息
                    },
                    {
                        text: '保存',
                        operationguid: '22222',
                        transitionguid: '变迁独立按钮关联的变迁标识，非变迁独立按钮为空',
                        operationtype: 'Save',
                        beforeact: '按钮触发前事件，返回对应隐藏按钮id', // 在vue中变为传入组件方法，此字段仅用作判断
                        afteract: '按钮操作后事件，返回对应隐藏按钮id', // 在vue中变为传入组件方法，此字段仅用作判断
                        // 意见是否必填
                        isrequireopinion: true,
                        click: '点击执行调用事件Js', // PC端未处理该字段，移动端不适合直接运行js语句
                        operationmodel: '', // PC端按钮样式相关--移动端暂时忽略
                        statelevel: '按钮配置对应重要程度，详见常量7', // 与operationmodel 一起确定PC按钮样式
                        btnid: function () {
                            return `btn_${this.operationguid}`;
                        },
                        // 是否是自定义流程设计按钮类型
                        isflow: false,
                        note: '按钮备注',
                        // 按钮配置的预处理人数量限制数据（送阅读、转交、抄送）
                        transactormaxcount: 5
                    },
                    {
                        text: '退回',
                        operationguid: '33333',
                        transitionguid: '变迁独立按钮关联的变迁标识，非变迁独立按钮为空',
                        operationtype: 'Back',
                        beforeact: '按钮触发前事件，返回对应隐藏按钮id', // 在vue中变为传入组件方法，此字段仅用作判断
                        afteract: '按钮操作后事件，返回对应隐藏按钮id', // 在vue中变为传入组件方法，此字段仅用作判断
                        // 意见是否必填
                        isrequireopinion: true,
                        click: '点击执行调用事件Js', // PC端未处理该字段，移动端不适合直接运行js语句
                        operationmodel: '', // PC端按钮样式相关--移动端暂时忽略
                        statelevel: '按钮配置对应重要程度，详见常量7', // 与operationmodel 一起确定PC按钮样式
                        btnid: function () {
                            return `btn_${this.operationguid}`;
                        },
                        // 是否是自定义流程设计按钮类型
                        isflow: false,
                        note: '按钮备注',
                        // 按钮配置的预处理人数量限制数据（送阅读、转交、抄送）
                        transactormaxcount: 5
                    },
                    {
                        text: '转发',
                        operationguid: '444444',
                        transitionguid: '变迁独立按钮关联的变迁标识，非变迁独立按钮为空',
                        operationtype: 'AddTran',
                        beforeact: '按钮触发前事件，返回对应隐藏按钮id', // 在vue中变为传入组件方法，此字段仅用作判断
                        afteract: '按钮操作后事件，返回对应隐藏按钮id', // 在vue中变为传入组件方法，此字段仅用作判断
                        // 意见是否必填
                        isrequireopinion: true,
                        click: '点击执行调用事件Js', // PC端未处理该字段，移动端不适合直接运行js语句
                        operationmodel: '', // PC端按钮样式相关--移动端暂时忽略
                        statelevel: '按钮配置对应重要程度，详见常量7', // 与operationmodel 一起确定PC按钮样式
                        btnid: function () {
                            return `btn_${this.operationguid}`;
                        },
                        // 是否是自定义流程设计按钮类型
                        isflow: false,
                        note: '按钮备注',
                        // 按钮配置的预处理人数量限制数据（送阅读、转交、抄送）
                        transactormaxcount: 5
                    }
                ]
            }),
            processdata: {
                flag: '是否自定义流程标识',
                newCustomProcess: '新自定义流程标识',
                isdesign: '新设计交互表示',
                isStateMachine: '是否是状态机标识',
                info: {
                    title: '标题', // 这里接口文档 title 存在拼写错误
                    currentactname: '备案提交',
                    currentpercentage: 0.2,
                    fromdisplayname: '张三', // 从谁来
                    receivedate: '2天前', // 接收时间
                    image: 'imageurl',
                    endtime: '2025-02-20 20:35' // 完成时间
                }
            }
        }
    },
    // 获取能不能流转及可选步骤及人员
    // 意见签署页面信息
    {
        methodUrl: '/getOperationHandleInfo',
        // 入参
        input: {},
        // 出参
        output: {
            result: {
                isdefoperation: false,
                iscanpass: true,
                message: '提醒信息',
                processversioninstanceguid: 'pviguid12345678',
                activityinstanceguid: 'activity9874561',
                activityname: '活动名称',
                operationname: '通过',
                pagestyle: 'workflow-operate-pass-dialog-content', // PC端 vue模式下处理页面样式
                url: 'frame/pages/epointworkflow/client/commonoperationhandlepass',
                isshownextactivity: true,
                isshowopiniontemplete: true,
                transitionguid: '变迁标识',
                is_ShowAdvicetab: true,
                ishidestep: false, // 单步骤是否隐藏
                nextsteplist: {
                    issinglecheck: false,
                    data: [
                        {
                            ischeckuser: true,
                            stepguid: 'stepguid999999',
                            stepname: '上级审批',
                            hasSub: true,
                            subnextsteplist: {
                                issinglecheck: true,
                                checktype: 'radio',
                                data: [
                                    {
                                        checked: true,
                                        ischeckuser: true,
                                        smschecked: false,
                                        smscontext: '短信消息内容',
                                        smsvisible: true,
                                        stepguid: 'substepguid333333',
                                        stepname: '子步骤名称',
                                        transactormaxcount: 2
                                    },
                                    {
                                        checked: false,
                                        ischeckuser: true,
                                        smschecked: false,
                                        smscontext: '短信消息内容',
                                        smsvisible: true,
                                        stepguid: 'substepguid66666',
                                        stepname: '子步骤名称2',
                                        transactormaxcount: 2
                                    }
                                ]
                            },
                            checked: false, // 默认情况下选中首个
                            transactormaxcount: 3,
                            smsvisible: true,
                            smschecked: false,
                            smscontext: '短信提醒内容',
                            addhandler: true,
                            edithandler: true,
                            handlermode: '处理模式frame/workflow',
                            // 处理人员
                            handlerlist: [
                                {
                                    handlerguid: 'user11111',
                                    handlername: '用户1',
                                    ouguid: 'ou11111'
                                },
                                {
                                    handlerguid: 'user22222',
                                    handlername: '用户名称2',
                                    ouguid: 'ou22222'
                                }
                            ],
                            // 处理人员范围
                            filterhandlerlist: [
                                {
                                    handlerguid: 'user11111',
                                    handlername: '用户1',
                                    ouguid: 'ou22222'
                                },
                                {
                                    handlerguid: 'user22222',
                                    handlername: '用户名称2',
                                    ouguid: 'ou22222'
                                },
                                {
                                    handlerguid: 'user3333',
                                    handlername: '用户名称3',
                                    ouguid: 'ou22222'
                                }
                            ],
                            // 处理页面显示树信息
                            handlertree: [
                                {
                                    type: 'ownou', // ownou/subwebflowou/address/ou/jobrole/workflowou
                                    name: '本部门' // 本部门/本单位/地址簿/所有用户/岗位/所有用户
                                },
                                {
                                    type: 'subwebflowou', // ownou/subwebflowou/address/ou/jobrole/workflowou
                                    name: '本单位' // 本部门/本单位/地址簿/所有用户/岗位/所有用户
                                }
                            ]
                        },
                        {
                            ischeckuser: true,
                            stepguid: 'stepguid00000',
                            stepname: '主管审批',
                            hasSub: true,
                            subnextsteplist: {
                                issinglecheck: true,
                                checktype: 'radio',
                                data: [
                                    {
                                        checked: true,
                                        ischeckuser: true,
                                        smschecked: false,
                                        smscontext: '短信消息内容',
                                        smsvisible: true,
                                        stepguid: 'substepguid4444',
                                        stepname: '子步骤名称3',
                                        transactormaxcount: 2
                                    },
                                    {
                                        checked: false,
                                        ischeckuser: true,
                                        smschecked: false,
                                        smscontext: '短信消息内容',
                                        smsvisible: true,
                                        stepguid: 'substepguid5555',
                                        stepname: '子步骤名称4',
                                        transactormaxcount: 2
                                    }
                                ]
                            },
                            checked: false, // 默认情况下选中首个
                            transactormaxcount: 5,
                            smsvisible: true,
                            smschecked: false,
                            smscontext: '短信提醒内容',
                            addhandler: true,
                            edithandler: true,
                            handlermode: '处理模式frame/workflow',
                            // 处理人员
                            handlerlist: [
                                {
                                    handlerguid: 'user11111',
                                    handlername: '用户1',
                                    ouguid: 'ou11111'
                                },
                                {
                                    handlerguid: 'user22222',
                                    handlername: '用户名称2',
                                    ouguid: 'ou22222'
                                },
                                {
                                    handlerguid: 'user3333',
                                    handlername: '用户名称3',
                                    ouguid: 'ou22222'
                                }
                            ],
                            // 处理人员范围
                            filterhandlerlist: [],
                            // 处理页面显示树信息
                            handlertree: [
                                {
                                    type: 'ownou', // ownou/subwebflowou/address/ou/jobrole/workflowou
                                    name: '本部门' // 本部门/本单位/地址簿/所有用户/岗位/所有用户
                                },
                                {
                                    type: 'subwebflowou', // ownou/subwebflowou/address/ou/jobrole/workflowou
                                    name: '本单位' // 本部门/本单位/地址簿/所有用户/岗位/所有用户
                                }
                            ]
                        },
                        {
                            ischeckuser: false,
                            stepguid: 'stepguid11111',
                            stepname: '主管审批2',
                            hasSub: false,
                            subnextsteplist: {},
                            checked: false, // 默认情况下选中首个
                            transactormaxcount: 5,
                            smsvisible: true,
                            smschecked: false,
                            smscontext: '短信提醒内容',
                            addhandler: true,
                            edithandler: true,
                            handlermode: '处理模式frame/workflow',
                            // 处理人员
                            handlerlist: [
                                {
                                    handlerguid: 'user11111',
                                    handlername: '用户1',
                                    ouguid: 'ou11111'
                                }
                            ],
                            // 处理人员范围
                            filterhandlerlist: [],
                            // 处理页面显示树信息
                            handlertree: [
                                {
                                    type: 'ownou', // ownou/subwebflowou/address/ou/jobrole/workflowou
                                    name: '本部门' // 本部门/本单位/地址簿/所有用户/岗位/所有用户
                                },
                                {
                                    type: 'subwebflowou', // ownou/subwebflowou/address/ou/jobrole/workflowou
                                    name: '本单位' // 本部门/本单位/地址簿/所有用户/岗位/所有用户
                                }
                            ]
                        },
                        {
                            ischeckuser: false,
                            stepguid: 'stepguid22222',
                            stepname: '主管审批3',
                            hasSub: false,
                            subnextsteplist: {},
                            checked: false, // 默认情况下选中首个
                            transactormaxcount: 5,
                            smsvisible: true,
                            smschecked: false,
                            smscontext: '短信提醒内容',
                            addhandler: true,
                            edithandler: true,
                            handlermode: '处理模式frame/workflow',
                            // 处理人员
                            handlerlist: [
                                {
                                    handlerguid: 'user11111',
                                    handlername: '用户1',
                                    ouguid: 'ou11111'
                                }
                            ],
                            // 处理人员范围
                            filterhandlerlist: [],
                            // 处理页面显示树信息
                            handlertree: [
                                {
                                    type: 'ownou', // ownou/subwebflowou/address/ou/jobrole/workflowou
                                    name: '本部门' // 本部门/本单位/地址簿/所有用户/岗位/所有用户
                                },
                                {
                                    type: 'subwebflowou', // ownou/subwebflowou/address/ou/jobrole/workflowou
                                    name: '本单位' // 本部门/本单位/地址簿/所有用户/岗位/所有用户
                                }
                            ]
                        }
                    ]
                },
                opinion: {
                    text: '默认意见',
                    required: true,
                    // 个人意见
                    useropinionlist: {
                        total: 3,
                        data: [
                            {
                                opinionguid: 'opinion1',
                                opiniontext: '意见内容1'
                            },
                            {
                                opinionguid: 'opinion2',
                                opiniontext: '意见内容2'
                            },
                            {
                                opinionguid: 'opinion3',
                                opiniontext: '意见内容3'
                            },
                            {
                                opinionguid: 'opinion4',
                                opiniontext: '同意'
                            },
                            {
                                opinionguid: 'opinion5',
                                opiniontext: '情况属实，请尽快处理'
                            },
                            {
                                opinionguid: 'opinion6',
                                opiniontext: '已确认'
                            }
                        ]
                    },
                    // 公共意见
                    commonopinionlist: {
                        total: 1,
                        data: [
                            {
                                opinionguid: 'opinionguid4',
                                opiniontext: '意见内容4'
                            }
                        ]
                    }
                },
                workitemlist: {
                    total: 1,
                    data: [
                        {
                            username: '处理人1',
                            activityname: '活动名称（步骤）',
                            operationname: '按钮名称（操作）',
                            opinion: '处理意见',
                            sendusername: '提交人1',
                            createdate: '2025-02-03 11:20',
                            operatedate: '2025-02-04 08:20',
                            workitemguid: 'workitem1111'
                        }
                    ]
                }
            }
        }
    },
    // 获取办理历史
    {
        methodUrl: '/listHistoryWorkitem',
        // 入参
        input: {},
        // 出参
        output: {
            historydata: {
                total: 3,
                data: [
                    {
                        username: '处理人1',
                        activityname: '活动名称（步骤）1',
                        operationname: '按钮名称（操作）1',
                        opinion: '处理意见1',
                        sendusername: '提交人1',
                        createdate: '2025-02-01 10:30', // 收到时间
                        operatedate: '2020-03-01 09:11', // 处理时间
                        workitemguid: 'workitem111'
                    },
                    {
                        username: '处理人2',
                        activityname: '活动名称（步骤）2',
                        operationname: '按钮名称（操作）2',
                        opinion: '处理意见2',
                        sendusername: '提交人2',
                        createdate: '2025-03-01 10:30', // 收到时间
                        operatedate: '2020-03-02 09:11', // 处理时间
                        workitemguid: 'workitem222'
                    },
                    {
                        username: '处理人3',
                        activityname: '活动名称（步骤）3',
                        operationname: '按钮名称（操作）3',
                        opinion: '处理意见3',
                        sendusername: '提交人3',
                        createdate: '2025-04-01 10:30', // 收到时间
                        operatedate: '2020-04-04 09:11', // 处理时间
                        workitemguid: 'workitem333'
                    }
                ]
            }
        }
    },
    // 获取进程图
    {
        methodUrl: '/getProcessTracingInfo',
        // 入参
        input: {},
        // 出参
        output: {
            duration: 1000, // 整个审批过程耗时
            blockList: [
                {
                    // 是否是子流程
                    isSub: false,
                    pviguid: '流程版本实例标识',
                    activityinstanceguid: '活动实例标识',
                    children: [
                        {
                            //  是否是子流程
                            isSubFlow: true,
                            src: '图标url',
                            multi: 1, // 多人处理人数
                            multiName: '多人处理模式',
                            // 状态。3：退回；2：非退回操作1：停留；
                            status: 2,
                            statusTxt: '活动名称1',
                            flowList: [
                                {
                                    // 是否停留
                                    isStay: false,
                                    userName: '用户名称1',
                                    userGuid: '用户标识1',
                                    showname: '称1',
                                    image: 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg',
                                    src: '头像',
                                    imagecontext: '头像',
                                    backgroundcolor: 'var(--e-color-success)',
                                    handleStatus: '[提交]', // 处理状态，[待处理]
                                    time: '2025-02-01 12:11', // 未处理的显示停留处理时间，已处理的返回处理时间
                                    feedback: {
                                        show: true,
                                        content: '处理意见',
                                        files: [
                                            {
                                                id: '附件标识1',
                                                // 是否是图片
                                                isImg: false,
                                                size: '12.1k',
                                                title: '附件名称1',
                                                type: 'pdf', // 附件类型
                                                downloadUrl: '下载地址',
                                                previewUrl: '预览地址'
                                            }
                                        ]
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    // 是否是子流程
                    isSub: false,
                    pviguid: '流程版本实例标识',
                    activityinstanceguid: '活动实例标识',
                    children: [
                        {
                            //  是否是子流程
                            isSubFlow: false,
                            src: 'ArrowLeftUpCircleFilled',
                            multi: 1, // 多人处理人数
                            multiName: '多人处理模式',
                            // 状态。3：退回；2：非退回操作1：停留；
                            status: 2,
                            statusTxt: '活动名称1',
                            flowList: [
                                {
                                    // 是否停留
                                    isStay: false,
                                    userName: '用户名称1',
                                    userGuid: '用户标识1',
                                    showname: '称1',
                                    image: 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg',
                                    src: '头像',
                                    imagecontext: '头像',
                                    backgroundcolor: 'var(--e-color-success)',
                                    handleStatus: '[提交]', // 处理状态，[待处理]
                                    time: '2025-02-01 12:11', // 未处理的显示停留处理时间，已处理的返回处理时间
                                    feedback: {
                                        show: true,
                                        content: '处理意见',
                                        files: [
                                            {
                                                id: '附件标识1',
                                                // 是否是图片
                                                isImg: false,
                                                size: '12.1k',
                                                title: '附件名称1',
                                                type: 'pdf', // 附件类型
                                                downloadUrl: '下载地址',
                                                previewUrl: '预览地址'
                                            }
                                        ]
                                    }
                                },
                                {
                                    // 是否停留
                                    isStay: false,
                                    userName: '用户名称2',
                                    userGuid: '用户标识2',
                                    showname: '称2',
                                    image: '',
                                    src: '头像',
                                    imagecontext: '头像',
                                    backgroundcolor: 'var(--e-color-success)',
                                    handleStatus: '[自动通过]', // 处理状态，[待处理]
                                    time: '2025-02-01 12:11', // 未处理的显示停留处理时间，已处理的返回处理时间
                                    feedback: {
                                        show: true,
                                        content:
                                            '请领导批示请领导批示请领导批示请领导批示请领导批示请领导批示请领导批示请领导批示请领导批示请领导批示',
                                        files: [
                                            {
                                                id: '附件标识1',
                                                // 是否是图片
                                                isImg: false,
                                                size: '12.1k',
                                                title: '附件名称1',
                                                type: 'pdf', // 附件类型
                                                downloadUrl: '下载地址',
                                                previewUrl: '预览地址'
                                            }
                                        ]
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    // 是否是子流程
                    isSub: false,
                    pviguid: '流程版本实例标识',
                    activityinstanceguid: '活动实例标识',
                    children: [
                        {
                            //  是否是子流程
                            isSubFlow: false,
                            src: 'ArrowLeftUpCircleFilled',
                            multi: 1, // 多人处理人数
                            multiName: '多人处理模式',
                            // 状态。3：退回；2：非退回操作1：停留；
                            status: 1,
                            statusTxt: '活动名称1',
                            flowList: [
                                {
                                    // 是否停留
                                    isStay: true,
                                    userName: '用户名称3',
                                    userGuid: '用户标识3',
                                    showname: '称3',
                                    image: 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg',
                                    src: '头像',
                                    imagecontext: '头像',
                                    backgroundcolor: 'var(--e-color-primary)',
                                    handleStatus: '[处理中]', // 处理状态，[待处理]
                                    time: '2025-02-01 12:11', // 未处理的显示停留处理时间，已处理的返回处理时间
                                    feedback: {
                                        show: false
                                    }
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    },
    // 解锁
    {
        methodUrl: '/unlockWorkitem',
        // 入参
        input: {},
        // 出参
        output: {
            result: {
                message: '解锁成功！'
            }
        }
    },
    // 工作流树
    {
        methodUrl: '/getTreeModel',
        // 入参
        input: {},
        // 出参
        output: {}
    },
    // 不可添加树
    {
        methodUrl: '/getEditTreeModel',
        // 入参
        input: {},
        // 出参
        output: {}
    },
    // 获取表单权限
    {
        methodUrl: '/getApiSecurityConfig',
        // 入参
        input: {},
        // 出参
        output: {}
    },
    // 保存接口--未发起情况下才有返回值
    {
        methodUrl: '/saveUser',
        // 入参
        input: {},
        // 出参
        output: {
            currentWorkItem: {
                workitemguid: 'workitemguid1223',
                processversioninstanceguid: 'pviguid2222'
            },
            rowguid: 'rowguid1111'
        }
    },
    // 提交接口--无返回值
    {
        methodUrl: '/submit',
        // 入参
        input: {},
        // 出参
        output: {}
    },
    // 删除意见模板--无返回值
    {
        methodUrl: '/deleteOpinion',
        // 入参
        input: {},
        // 出参
        output: {}
    },
    // 新增意见模板
    {
        methodUrl: '/addOpinion',
        // 入参
        input: {},
        // 出参
        output: {
            msg: '成功或校验提醒内容',
            flag: '1' // 新增成功返回标记
        }
    },
    // 编辑意见模板
    {
        methodUrl: '/editOpinion',
        // 入参
        input: {},
        // 出参
        output: {
            msg: '成功或校验提醒内容',
            flag: '1' // 新增成功返回标记
        }
    },
    // 更新意见模板排序
    {
        methodUrl: '/updateOrderNumForOpinion',
        // 入参
        input: {},
        // 出参
        output: {
            msg: '成功或校验提醒内容',
            flag: '1' // 新增成功返回标记
        }
    },
    // 获取意见模板
    {
        methodUrl: '/getOpinionData',
        // 入参
        input: {},
        // 出参
        output: {
            opiniondata: {
                opinion: '当前工作项意见',
                // 个人意见模版
                useropinionlist: {
                    total: 5,
                    data: [
                        {
                            opinionguid: 'opinionguid1',
                            opiniontext: '意见内容1'
                        },
                        {
                            opinionguid: 'opinionguid2',
                            opiniontext: '意见内容2'
                        },
                        {
                            opinionguid: 'opinionguid3',
                            opiniontext: '意见内容3'
                        },
                        {
                            opinionguid: 'opinionguid4',
                            opiniontext: '意见内容4'
                        },
                        {
                            opinionguid: 'opinionguid5',
                            opiniontext: '意见内容5'
                        }
                    ]
                }
            }
        }
    },
    // 上传附件接口
    {
        methodUrl: '/getFileUploadModel',
        // 入参
        input: {},
        // 出参
        output: {
            id: 'file1',
            data: {
                attachLength: 770241,
                attachGuid: 'attachGuid1',
                attachFileName: 'file.gif',
                downloadUrl:
                    'rest/attachAction/getContent?isCommondto=true&attachGuid=545eebf8-b275-444a-a93c-39a992c58243',
                uploadDate: '2025-05-30 11:30:41',
                preparams:
                    'tp=1;季立霞,系统管理部,涉密文件请勿泄漏&furl=http://172.29.5.179:8080/epoint-workflowtest-web/rest/attachAction/getContent?isCommondto=true&attachGuid=545eebf8-b275-444a-a93c-39a992c58243&token=uploadpreview@9BCA029E7E533A8DA06AB6967C0E622E830C3FF2DD7D6E235B94A307A8E1A7C04C5C597E74B4FB59C86B350BF27EA6A8@31CB941CB819DCE5FCC232AA63798D91D2F47BAF20291D58FCCD5AB3F0E837FA@encrypt'
            }
        }
    },
    // 获取人员选择范围（@场景）
    {
        methodUrl: '/getInProcessPerson',
        // 入参
        input: {},
        // 出参
        output: {
            data: [
                {
                    userguid: '用户标识1',
                    username: '用户名称1',
                    ouguid: '部门标识1',
                    image: '用户头像内容base64'
                },
                {
                    userguid: '用户标识2',
                    username: '用户名称2',
                    ouguid: '部门标识2',
                    image: '用户头像内容base64'
                },
                {
                    userguid: '用户标识3',
                    username: '用户名称3',
                    ouguid: '部门标识3',
                    image: '用户头像内容base64'
                }
            ]
        }
    }
];

export default mockData;
