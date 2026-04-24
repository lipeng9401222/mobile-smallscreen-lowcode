import base from './base';
import boxOptions from '../plugin/boxoptions/config';

export default {
    base,
    dimension: {
        width: '100%',
        height: 'auto'
    },
    configuration: [
        {
            name: 'options',
            value: [
                boxOptions,
                {
                    displayName: '弹框内容',
                    name: 'contentConfig',
                    value: [
                        {
                            displayName: '标题',
                            name: 'title',
                            value: '客服电话',
                            type: 'text'
                        },
                        {
                            displayName: '电话列表',
                            name: 'phoneList',
                            type: 'array',
                            dynamic: true,
                            value: [
                                {
                                    name: 'phoneItem_1',
                                    displayName: '电话项',
                                    value: [
                                        {
                                            displayName: '展示文案',
                                            name: 'name',
                                            value: '4006010088（转2）',
                                            type: 'text'
                                        },
                                        {
                                            displayName: '拨号号码',
                                            name: 'phoneNumber',
                                            value: '4006010088',
                                            type: 'text'
                                        }
                                    ]
                                }
                            ],
                            template: {
                                name: 'phoneItem',
                                displayName: '电话项',
                                value: [
                                    {
                                        displayName: '展示文案',
                                        name: 'name',
                                        value: '',
                                        type: 'text'
                                    },
                                    {
                                        displayName: '拨号号码',
                                        name: 'phoneNumber',
                                        value: '',
                                        type: 'text'
                                    }
                                ]
                            }
                        },
                        {
                            displayName: '取消按钮文字',
                            name: 'cancelText',
                            value: '取消',
                            type: 'text'
                        }
                    ]
                }
            ]
        },
        {
            name: 'interaction',
            displayName: '交互',
            value: [
                {
                    name: 'callback',
                    displayName: '回调参数',
                    type: 'array',
                    dynamic: true,
                    value: [],
                    template: {
                        name: 'callback',
                        displayName: '参数',
                        value: [
                            {
                                name: 'param',
                                displayName: '变量名',
                                type: 'text',
                                value: ''
                            },
                            {
                                name: 'field',
                                displayName: '字段值',
                                type: 'text',
                                value: ''
                            }
                        ]
                    }
                },
                {
                    name: 'event',
                    displayName: '事件（新）',
                    type: 'array',
                    value: [
                        {
                            name: 'onMounted',
                            displayName: 'onMounted事件',
                            dynamic: true,
                            type: 'array',
                            value: [],
                            template: {
                                name: 'templeteMounted_1',
                                displayName: '动作',
                                type: 'text',
                                value: 'console.log("onMounted事件:", e)'
                            }
                        },
                        {
                            name: 'onOpen',
                            displayName: '打开弹框',
                            dynamic: true,
                            type: 'array',
                            value: [],
                            template: {
                                name: 'templeteOnOpen_1',
                                displayName: '动作',
                                type: 'text',
                                value: 'console.log("onOpen事件:", e)'
                            }
                        },
                        {
                            name: 'onSelect',
                            displayName: '点击内容项',
                            dynamic: true,
                            type: 'array',
                            value: [],
                            template: {
                                name: 'templeteOnSelect_1',
                                displayName: '动作',
                                type: 'text',
                                value: 'console.log("onSelect事件:", e)'
                            }
                        },
                        {
                            name: 'onCall',
                            displayName: '拨打电话',
                            dynamic: true,
                            type: 'array',
                            value: [],
                            template: {
                                name: 'templeteOnCall_1',
                                displayName: '动作',
                                type: 'text',
                                value: 'console.log("onCall事件:", e)'
                            }
                        },
                        {
                            name: 'onCancel',
                            displayName: '点击取消',
                            dynamic: true,
                            type: 'array',
                            value: [],
                            template: {
                                name: 'templeteOnCancel_1',
                                displayName: '动作',
                                type: 'text',
                                value: 'console.log("onCancel事件:", e)'
                            }
                        },
                        {
                            name: 'onClose',
                            displayName: '关闭弹框',
                            dynamic: true,
                            type: 'array',
                            value: [],
                            template: {
                                name: 'templeteOnClose_1',
                                displayName: '动作',
                                type: 'text',
                                value: 'console.log("onClose事件:", e)'
                            }
                        }
                    ]
                }
            ]
        }
    ]
};
