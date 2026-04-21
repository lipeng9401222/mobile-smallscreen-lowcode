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
                boxOptions,
                {
                    displayName: '文字内容',
                    name: 'title',
                    value: [
                        {
                            displayName: '内容',
                            name: 'content',
                            value: '这是一个文字组件',
                            type: 'text'
                        }
                    ]
                },
                {
                    displayName: '定位设置',
                    name: 'positionSetting',
                    tip: 'css中的定位',
                    value: [
                        {
                            displayName: '开启定位',
                            name: 'isOpen',
                            type: 'boolean',
                            value: false
                        },
                        {
                            displayName: 'left',
                            name: 'left',
                            type: 'text',
                            value: '10px'
                        },
                        {
                            displayName: 'top',
                            name: 'top',
                            type: 'text',
                            value: '10px'
                        },
                        {
                            displayName: 'right',
                            name: 'right',
                            type: 'text',
                            value: ''
                        },
                        {
                            displayName: 'bottom',
                            name: 'bottom',
                            type: 'text',
                            value: ''
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
                            // value中若预置事件的name需要全局唯一
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
                            // value中若预置事件的name需要全局唯一
                            value: [
                                {
                                    name: 'templeteOnStoreClick_1',
                                    displayName: '动作',
                                    type: 'text',
                                    value: 'console.log("供应商点击事件:", e)'
                                }
                            ],
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
                            // value中若预置事件的name需要全局唯一
                            value: [
                                {
                                    name: 'templeteOnGoodsClick_1',
                                    displayName: '动作',
                                    type: 'text',
                                    value: 'console.log("商品点击事件:", e)'
                                }
                            ],
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
                            // value中若预置事件的name需要全局唯一
                            value: [
                                {
                                    name: 'templeteonDelete_1',
                                    displayName: '动作',
                                    type: 'text',
                                    value: 'console.log("商品删除事件:", e)'
                                }
                            ],
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
                            // value中若预置事件的name需要全局唯一
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
                            // value中若预置事件的name需要全局唯一
                            value: [],
                            template: {
                                name: 'templeteOnSubmit_1',
                                displayName: '值变动',
                                type: 'text',
                                value: 'console.log("onSubmit事件:", e)'
                            }
                        },
                        {
                             name: 'onNumChange',
                            displayName: 'onNumChange事件',
                            dynamic: true,
                            type: 'array',
                            // value中若预置事件的name需要全局唯一
                            value: [],
                            template: {
                                name: 'templeteOnNumChange_1',
                                displayName: '值变动',
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
