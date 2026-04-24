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
                            name: 'onClick',
                            displayName: 'onClick事件',
                            dynamic: true,
                            type: 'array',
                            value: [],
                            template: {
                                name: 'templeteOnClick_1',
                                displayName: '动作',
                                type: 'text',
                                value: 'console.log("onClick事件:", e)'
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
                        }
                    ]
                }
            ]
        }
    ]
};
