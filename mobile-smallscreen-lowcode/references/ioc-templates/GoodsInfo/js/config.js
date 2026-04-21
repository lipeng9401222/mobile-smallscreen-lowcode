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
                    displayName: '价格配置',
                    name: 'priceConfig',
                    tip: '商品价格相关配置',
                    value: [
                        {
                            displayName: '显示原价',
                            name: 'showOriginalPrice',
                            type: 'boolean',
                            value: true
                        },
                        {
                            displayName: '显示价格单位',
                            name: 'showPriceUnit',
                            type: 'boolean',
                            value: true
                        },
                        {
                            displayName: '价格颜色',
                            name: 'priceColor',
                            type: 'color',
                            value: '#e2001f'
                        }
                    ]
                },
                {
                    displayName: '销量配置',
                    name: 'salesConfig',
                    tip: '销量显示配置',
                    value: [
                        {
                            displayName: '显示销量',
                            name: 'showSales',
                            type: 'boolean',
                            value: true
                        },
                        {
                            displayName: '销量前缀',
                            name: 'salesPrefix',
                            type: 'text',
                            value: '累计销量：'
                        }
                    ]
                },
                {
                    displayName: '标签配置',
                    name: 'tagConfig',
                    tip: '商品标签配置',
                    value: [
                        {
                            displayName: '显示标签',
                            name: 'showTags',
                            type: 'boolean',
                            value: true
                        },
                        {
                            displayName: '标签背景色',
                            name: 'tagBgColor',
                            type: 'color',
                            value: '#e2001f'
                        },
                        {
                            displayName: '标签文字颜色',
                            name: 'tagTextColor',
                            type: 'color',
                            value: '#ffffff'
                        }
                    ]
                },
                {
                    displayName: '配送信息配置',
                    name: 'deliveryConfig',
                    tip: '配送信息显示配置',
                    value: [
                        {
                            displayName: '显示配送信息',
                            name: 'showDelivery',
                            type: 'boolean',
                            value: true
                        },
                        {
                            displayName: '配送标题',
                            name: 'deliveryTitle',
                            type: 'text',
                            value: '配送至'
                        }
                    ]
                },
                {
                    displayName: '规格配置',
                    name: 'specConfig',
                    tip: '规格选择显示配置',
                    value: [
                        {
                            displayName: '显示规格',
                            name: 'showSpec',
                            type: 'boolean',
                            value: true
                        },
                        {
                            displayName: '规格标题',
                            name: 'specTitle',
                            type: 'text',
                            value: '已选择'
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
                                value: 'console.log("OnClick事件:", e)'
                            }
                        },
                        {
                            name: 'onDeliveryClick',
                            displayName: '配送地址点击事件',
                            tip: '点击配送信息区域时触发',
                            type: 'array',
                            dynamic: true,
                            value: [],
                            template: {
                                name: 'templeteDeliveryClick_1',
                                displayName: '动作',
                                type: 'text',
                                value: 'console.log("onDeliveryClick事件:", e)'
                            }
                        },
                        {
                            name: 'onSpecClick',
                            displayName: '型号规格点击事件',
                            tip: '点击规格选择区域时触发',
                            type: 'array',
                            dynamic: true,
                            value: [],
                            template: {
                                name: 'templeteSpecClick_1',
                                displayName: '动作',
                                type: 'text',
                                value: 'console.log("onSpecClick事件:", e)'
                            }
                        }
                    ]
                }
            ]
        }
    ]
};
