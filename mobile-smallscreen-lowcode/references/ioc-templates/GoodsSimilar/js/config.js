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
                    displayName: '布局配置',
                    name: 'layoutConfig',
                    tip: '控制商品卡片的布局方式',
                    value: [
                        {
                            displayName: '每行展示数量',
                            name: 'itemsPerRow',
                            type: 'select',
                            tip: '一屏内同时显示的商品卡片数量',
                            value: 3,
                            options: [
                                { label: '2个', value: 2 },
                                { label: '3个', value: 3 },
                                { label: '4个', value: 4 }
                            ]
                        },
                        {
                            displayName: '卡片间距',
                            name: 'cardSpacing',
                            type: 'number',
                            tip: '商品卡片之间的水平间距(px)',
                            value: 10
                        },
                        {
                            displayName: '行间距',
                            name: 'rowSpacing',
                            type: 'number',
                            tip: '商品卡片行之间的垂直间距(px)',
                            value: 15
                        }
                    ]
                },
                {
                    displayName: '卡片样式',
                    name: 'cardStyle',
                    tip: '商品卡片的样式配置',
                    value: [
                        {
                            displayName: '图片高度',
                            name: 'imageHeight',
                            type: 'number',
                            value: 120
                        },
                        {
                            displayName: '圆角大小',
                            name: 'borderRadius',
                            type: 'number',
                            value: 8
                        },
                        {
                            displayName: '背景颜色',
                            name: 'backgroundColor',
                            type: 'color',
                            value: 'transparent'
                        },
                        {
                            displayName: '标题字体大小',
                            name: 'titleFontSize',
                            type: 'number',
                            value: 14
                        },
                        {
                            displayName: '标题颜色',
                            name: 'titleColor',
                            type: 'color',
                            value: '#333333'
                        },
                        {
                            displayName: '价格字体大小',
                            name: 'priceFontSize',
                            type: 'number',
                            value: 16
                        },
                        {
                            displayName: '价格颜色',
                            name: 'priceColor',
                            type: 'color',
                            value: '#ff6600'
                        }
                    ]
                },
                {
                    displayName: '金豆图标配置',
                    name: 'goldIconConfig',
                    value: [
                        {
                            displayName: '显示金豆图标',
                            name: 'show',
                            type: 'boolean',
                            value: true
                        },
                        {
                            displayName: '自定义图标',
                            name: 'imageUrl',
                            type: 'uploadimage',
                            tip: '自定义金豆图标,留空使用默认图标',
                            value: ''
                        }
                    ]
                },
                {
                    displayName: '轮播配置',
                    name: 'swiperConfig',
                    value: [
                        {
                            displayName: '自动轮播',
                            name: 'autoplay',
                            type: 'boolean',
                            value: false
                        },
                        {
                            displayName: '轮播间隔',
                            name: 'interval',
                            type: 'number',
                            tip: '自动轮播间隔时间(毫秒)',
                            value: 3000
                        },
                        {
                            displayName: '显示指示器',
                            name: 'showIndicator',
                            type: 'boolean',
                            value: true
                        }
                    ]
                },
                {
                    displayName: '指示器样式',
                    name: 'indicatorConfig',
                    value: [
                        {
                            displayName: '未选中颜色',
                            name: 'color',
                            type: 'color',
                            value: '#ccc'
                        },
                        {
                            displayName: '选中颜色',
                            name: 'activeColor',
                            type: 'color',
                            value: '#ff6600'
                        }
                    ]
                },
                {
                    displayName: '空状态配置',
                    name: 'emptyConfig',
                    value: [
                        {
                            displayName: '描述文字',
                            name: 'description',
                            type: 'text',
                            value: '暂无商品数据'
                        },
                        {
                            displayName: '自定义图片',
                            name: 'image',
                            type: 'uploadimage',
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
                                value: 'console.log("组件已挂载:", e)'
                            }
                        },
                        {
                            name: 'onItemClick',
                            displayName: 'onItemClick事件',
                            tip: '点击商品卡片时触发',
                            dynamic: true,
                            type: 'array',
                            value: [],
                            template: {
                                name: 'templeteOnItemClick_1',
                                displayName: '动作',
                                type: 'text',
                                value: 'console.log("点击商品:", e)'
                            }
                        },
                        {
                            name: 'onChange',
                            displayName: 'onChange事件',
                            tip: '轮播切换时触发',
                            dynamic: true,
                            type: 'array',
                            value: [],
                            template: {
                                name: 'templeteOnChange_1',
                                displayName: '动作',
                                type: 'text',
                                value: 'console.log("轮播切换:", e)'
                            }
                        }
                    ]
                }
            ]
        }
    ]
};
