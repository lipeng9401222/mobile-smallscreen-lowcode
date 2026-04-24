import base from './base';
// 通用容器样式
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
                boxOptions
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
                            name: 'onStoreClick',
                            displayName: 'onStoreClick事件',
                            dynamic: true,
                            type: 'array',
                            value: [],
                            template: {
                                name: 'templeteOnStoreClick_1',
                                displayName: '动作',
                                type: 'text',
                                value: 'console.log("供应商点击事件:", e)'
                            }
                        },
                        {
                            name: 'onGoodsClick',
                            displayName: 'onGoodsClick事件',
                            dynamic: true,
                            type: 'array',
                            value: [],
                            template: {
                                name: 'templeteOnGoodsClick_1',
                                displayName: '动作',
                                type: 'text',
                                value: 'console.log("商品点击事件:", e)'
                            }
                        },
                        {
                            name: 'onDelete',
                            displayName: 'onDelete事件',
                            dynamic: true,
                            type: 'array',
                            value: [],
                            template: {
                                name: 'templeteonDelete_1',
                                displayName: '动作',
                                type: 'text',
                                value: 'console.log("商品删除事件:", e)'
                            }
                        },
                        {
                            name: 'onTabChange',
                            displayName: 'onTabChange事件',
                            dynamic: true,
                            type: 'array',
                            value: [],
                            template: {
                                name: 'templeteOnTabChange_1',
                                displayName: 'tab值变动',
                                type: 'text',
                                value: 'console.log("onTabChange事件:", e)'
                            }
                        },
                        {
                            name: 'onSubmit',
                            displayName: 'onSubmit事件',
                            dynamic: true,
                            type: 'array',
                            value: [],
                            template: {
                                name: 'templeteOnSubmit_1',
                                displayName: '动作',
                                type: 'text',
                                value: 'console.log("onSubmit事件:", e)'
                            }
                        },
                        {
                            name: 'onNumChange',
                            displayName: 'onNumChange事件',
                            dynamic: true,
                            type: 'array',
                            value: [],
                            template: {
                                name: 'templeteOnNumChange_1',
                                displayName: '动作',
                                type: 'text',
                                value: 'console.log("onNumChange事件:", e)'
                            }
                        }
                    ]
                }
            ]
        }
    ]
};
