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
                            displayName: '图片宽度',
                            name: 'imageWidth',
                            type: 'text',
                            tip: '商品图片的宽度，支持px或百分比',
                            value: '100%'
                        },
                        {
                            displayName: '图片高度',
                            name: 'imageHeight',
                            type: 'number',
                            tip: '商品图片的高度(px)',
                            value: 120
                        },
                        {
                            displayName: '圆角大小',
                            name: 'borderRadius',
                            type: 'number',
                            tip: '图片的圆角大小(px)',
                            value: 8
                        },
                        {
                            displayName: '图片下边距',
                            name: 'imageMarginBottom',
                            type: 'number',
                            tip: '图片与标题之间的间距(px)',
                            value: 8
                        },
                        {
                            displayName: '背景颜色',
                            name: 'backgroundColor',
                            type: 'color',
                            tip: '卡片背景颜色',
                            value: 'transparent'
                        },
                        {
                            displayName: '标题样式',
                            name: 'titleStyle',
                            value: [
                                {
                                    displayName: '字体大小',
                                    name: 'fontSize',
                                    type: 'number',
                                    value: 14
                                },
                                {
                                    displayName: '字体颜色',
                                    name: 'color',
                                    type: 'color',
                                    value: '#333333'
                                },
                                {
                                    displayName: '最大行数',
                                    name: 'maxLines',
                                    type: 'number',
                                    tip: '标题最多显示几行,超出显示省略号',
                                    value: 2
                                }
                            ]
                        },
                        {
                            displayName: '价格样式',
                            name: 'priceStyle',
                            value: [
                                {
                                    displayName: '字体大小',
                                    name: 'fontSize',
                                    type: 'number',
                                    value: 16
                                },
                                {
                                    displayName: '字体颜色',
                                    name: 'color',
                                    type: 'color',
                                    value: '#ff6600'
                                }
                            ]
                        }
                    ]
                },
                {
                    displayName: '金豆图标配置',
                    name: 'goldIconConfig',
                    tip: '价格左侧的金豆图标配置',
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
                        },
                        {
                            displayName: '图标宽度',
                            name: 'width',
                            type: 'number',
                            tip: '金豆图标宽度(px)',
                            value: 16
                        },
                        {
                            displayName: '图标高度',
                            name: 'height',
                            type: 'number',
                            tip: '金豆图标高度(px)',
                            value: 16
                        }
                    ]
                },
                {
                    displayName: '指示器配置',
                    name: 'indicatorConfig',
                    tip: '轮播指示器样式配置',
                    value: [
                        {
                            displayName: '距轮播图上边距',
                            name: 'marginTop',
                            type: 'number',
                            tip: '指示器距离轮播图图片的上边距(px)',
                            value: 0
                        },
                        {
                            displayName: '距底部距离',
                            name: 'bottom',
                            type: 'number',
                            tip: '指示器距离底部的距离(px)',
                            value: 10
                        },
                        {
                            displayName: '圆点宽度',
                            name: 'width',
                            type: 'number',
                            tip: '未选中圆点的宽度(px)',
                            value: 6
                        },
                        {
                            displayName: '圆点高度',
                            name: 'height',
                            type: 'number',
                            tip: '圆点的高度(px)',
                            value: 6
                        },
                        {
                            displayName: '选中宽度',
                            name: 'activeWidth',
                            type: 'number',
                            tip: '选中圆点的宽度(px)',
                            value: 16
                        },
                        {
                            displayName: '圆角大小',
                            name: 'borderRadius',
                            type: 'number',
                            tip: '圆点的圆角大小(px)',
                            value: 3
                        },
                        {
                            displayName: '未选中颜色',
                            name: 'color',
                            type: 'color',
                            tip: '未选中圆点的颜色',
                            value: '#ccc'
                        },
                        {
                            displayName: '选中颜色',
                            name: 'activeColor',
                            type: 'color',
                            tip: '选中圆点的颜色',
                            value: '#ff6600'
                        }
                    ]
                },
                {
                    displayName: '空状态配置',
                    name: 'emptyConfig',
                    tip: '数据为空时的展示配置',
                    value: [
                        {
                            displayName: '内边距',
                            name: 'padding',
                            type: 'text',
                            tip: '空状态容器内边距,支持 CSS padding 格式',
                            value: '20px'
                        },
                        {
                            displayName: '自定义图片',
                            name: 'image',
                            type: 'uploadimage',
                            tip: '自定义空状态图片,留空使用默认图片',
                            value: ''
                        },
                        {
                            displayName: '图片大小',
                            name: 'imageSize',
                            type: 'number',
                            tip: '图片大小(px)',
                            value: 160
                        },
                        {
                            displayName: '描述文字',
                            name: 'description',
                            type: 'text',
                            tip: '图片下方的描述文字',
                            value: '暂无商品数据'
                        }
                    ]
                },
                {
                    displayName: '轮播配置',
                    name: 'swiperConfig',
                    tip: '轮播行为配置',
                    value: [
                        {
                            displayName: '自动轮播',
                            name: 'autoplay',
                            type: 'boolean',
                            tip: '是否开启自动轮播',
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
                            displayName: '动画时长',
                            name: 'duration',
                            type: 'number',
                            tip: '切换动画时长(毫秒)',
                            value: 300
                        },
                        {
                            displayName: '显示指示器',
                            name: 'showIndicator',
                            type: 'boolean',
                            tip: '是否显示页码指示器',
                            value: true
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
