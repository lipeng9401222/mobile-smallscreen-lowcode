import base from './base';
// 通用容器样式
import boxoptions from '../plugin/boxoptions/config';
import { options } from '@dcloudio/uni-cli-shared/lib/url-loader';
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
                boxoptions,
                {
                    displayName: '系列数据',
                    name: 'IndividuateData',
                    type: 'array',
                    dynamic:true,
                    value: [
                        {
                            displayName: '系列一(柱状)',
                            name: 'action',
                            type: 'text',
                            value: [
                                {
                                    displayName: '对应y轴',
                                    name: 'yAxisIndex',
                                    type: 'select',
                                    value: 0,
                                    options: [
                                        {
                                            name: '左侧轴',
                                            value: 0
                                        },
                                        {
                                            name: '右侧轴',
                                            value: 1
                                        }
                                    ]
                                },
                                {
                                    displayName: '柱条样式',
                                    name: 'barStyle',
                                    value: [
                                        {
                                            displayName: '柱子宽度',
                                            name: 'barWidth',
                                            type: 'number',
                                            value: 12
                                        },
                                        {
                                            displayName: '柱子颜色',
                                            name: 'barColor',
                                            type: 'colors',
                                            value: [
                                                {
                                                    type: 'linear',
                                                    x: 0,
                                                    y: 0,
                                                    x2: 0,
                                                    y2: 1,
                                                    colorStops: [
                                                        {
                                                            offset: 0,
                                                            color: '#59D7FF'
                                                        },
                                                        {
                                                            offset: 1,
                                                            color: '#0094FF'
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    displayName: '文本标签',
                                    name: 'itemLabel',
                                    value: [
                                        {
                                            displayName: '是否显示',
                                            name: 'show',
                                            type: 'boolean',
                                            value: false
                                        },
                                        {
                                            displayName: '标签大小',
                                            name: 'itemLabelSize',
                                            type: 'number',
                                            value: 12
                                        },
                                        {
                                            displayName: '标签颜色',
                                            name: 'itemLabelColor',
                                            type: 'color',
                                            value: '#2E3033'
                                        },
                                        {
                                            displayName: '标签位置',
                                            name: 'itemLabelPosition',
                                            type: 'select',
                                            value: 'top',
                                            options: [
                                                {
                                                    name: 'top',
                                                    value: 'top'
                                                },
                                                {
                                                    name: 'left',
                                                    value: 'left'
                                                },
                                                {
                                                    name: 'right',
                                                    value: 'right'
                                                },
                                                {
                                                    name: 'bottom',
                                                    value: 'bottom'
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    displayName: 'tooltip单位设置',
                                    name: 'tooltipUnit',
                                    value: [
                                        {
                                            displayName: '内容',
                                            name: 'content',
                                            type:"text",
                                            value: '人'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            displayName: '系列二(柱状)',
                            name: 'action',
                            type: 'text',
                            value: [
                                {
                                    displayName: '对应y轴',
                                    name: 'yAxisIndex',
                                    type: 'select',
                                    value: 0,
                                    options: [
                                        {
                                            name: '左侧轴',
                                            value: 0
                                        },
                                        {
                                            name: '右侧轴',
                                            value: 1
                                        }
                                    ]
                                },
                                {
                                    displayName: '柱条样式',
                                    name: 'barStyle',
                                    value: [
                                        {
                                            displayName: '柱子宽度',
                                            name: 'barWidth',
                                            type: 'number',
                                            value: 12
                                        },
                                        {
                                            displayName: '柱子颜色',
                                            name: 'barColor',
                                            type: 'colors',
                                            value: [
                                                {
                                                    type: 'linear',
                                                    x: 0,
                                                    y: 0,
                                                    x2: 0,
                                                    y2: 1,
                                                    colorStops: [
                                                        {
                                                            offset: 0,
                                                            color: '#49DFA3'
                                                        },
                                                        {
                                                            offset: 1,
                                                            color: '#00A563'
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    displayName: '文本标签',
                                    name: 'itemLabel',
                                    value: [
                                        {
                                            displayName: '是否显示',
                                            name: 'show',
                                            type: 'boolean',
                                            value: false
                                        },
                                        {
                                            displayName: '标签大小',
                                            name: 'itemLabelSize',
                                            type: 'number',
                                            value: 12
                                        },
                                        {
                                            displayName: '标签颜色',
                                            name: 'itemLabelColor',
                                            type: 'color',
                                            value: '#2E3033'
                                        },
                                        {
                                            displayName: '标签位置',
                                            name: 'itemLabelPosition',
                                            type: 'select',
                                            value: 'top',
                                            options: [
                                                {
                                                    name: 'top',
                                                    value: 'top'
                                                },
                                                {
                                                    name: 'left',
                                                    value: 'left'
                                                },
                                                {
                                                    name: 'right',
                                                    value: 'right'
                                                },
                                                {
                                                    name: 'bottom',
                                                    value: 'bottom'
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    displayName: 'tooltip单位设置',
                                    name: 'tooltipUnit',
                                    value: [
                                        {
                                            displayName: '内容',
                                            name: 'content',
                                            type:"text",
                                            value: '人'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            displayName: '系列三(折线)',
                            name: 'action',
                            type: 'text',
                            value: [
                                {
                                    displayName: '对应y轴',
                                    name: 'yAxisIndex',
                                    type: 'select',
                                    value: 1,
                                    options: [
                                        {
                                            name: '左侧轴',
                                            value: 0
                                        },
                                        {
                                            name: '右侧轴',
                                            value: 1
                                        }
                                    ]
                                },
                                {
                                    displayName: '是否显示平滑曲线',
                                    name: 'smooth',
                                    type: 'boolean',
                                    value: false
                                },
                                {
                                    displayName: '线条',
                                    name: 'itemLineStyle',
                                    value: [
                                        {
                                            displayName: '线条类型',
                                            name: 'itemLineType',
                                            type: 'select',
                                            value: 'solid',
                                            options: [
                                                { name: '实线', value: 'solid' },
                                                { name: '虚线', value: 'dashed' },
                                                { name: '点虚线', value: 'dotted' }
                                            ]
                                        },
                                        {
                                            displayName: '线条颜色',
                                            name: 'lineColor',
                                            type: 'color',
                                            value: '#F79042'
                                        }
                                    ]
                                },
                                {
                                    displayName: '是否显示背景色',
                                    name: 'areaShow',
                                    type: 'boolean',
                                    value: false
                                },
                                {
                                    displayName: '背景色',
                                    name: 'areaColor',
                                    type: 'colors',
                                    value: [
                                        {
                                            type: 'linear',
                                            colorStops: [
                                                {
                                                    offset: 0,
                                                    color: '#e2ebfb'
                                                },
                                                {
                                                    offset: 1,
                                                    color: '#FFF'
                                                }
                                            ],
                                            x: 0,
                                            y: 0,
                                            x2: 0,
                                            y2: 1
                                        }
                                    ]
                                },
                                {
                                    displayName: '拐点',
                                    name: 'lineSymbol',
                                    value: [
                                        {
                                            displayName: '拐点类型',
                                            name: 'symbolType',
                                            type: 'text',
                                            value: 'circle'
                                        },
                                        {
                                            displayName: '拐点大小',
                                            name: 'symbolSize',
                                            type: 'number',
                                            value: 6
                                        },
                                        {
                                            displayName: '拐点颜色',
                                            name: 'symbolColor',
                                            type: 'color',
                                            value: '#F79042'
                                        },
                                        {
                                            displayName: '拐点边框宽度',
                                            name: 'symbolBorderWidth',
                                            type: 'number',
                                            value: 1
                                        },
                                        {
                                            displayName: '拐点边框颜色',
                                            name: 'symbolBorderColor',
                                            type: 'color',
                                            value: '#fff'
                                        }
                                    ]
                                },
                                {
                                    displayName: 'hover时拐点样式',
                                    name: 'hoverSymbol',
                                    value: [
                                        {
                                            displayName: '拐点颜色',
                                            name: 'hoverSymbolColor',
                                            type: 'color',
                                            value: '#fff'
                                        },
                                        {
                                            displayName: '拐点边框宽度',
                                            name: 'symbolBorderWidth',
                                            type: 'number',
                                            value: 2
                                        },
                                        {
                                            displayName: '拐点边框颜色',
                                            name: 'symbolBorderColor',
                                            type: 'color',
                                            value: '#F79042'
                                        }
                                    ]
                                },
                                {
                                    displayName: '文本标签',
                                    name: 'itemLabel',
                                    value: [
                                        {
                                            displayName: '是否显示',
                                            name: 'show',
                                            type: 'boolean',
                                            value: false
                                        },
                                        {
                                            displayName: '标签大小',
                                            name: 'itemLabelSize',
                                            type: 'number',
                                            value: 12
                                        },
                                        {
                                            displayName: '标签颜色',
                                            name: 'itemLabelColor',
                                            type: 'color',
                                            value: '#2E3033'
                                        },
                                        {
                                            displayName: '标签位置',
                                            name: 'itemLabelPosition',
                                            type: 'select',
                                            value: 'top',
                                            options: [
                                                {
                                                    name: 'top',
                                                    value: 'top'
                                                },
                                                {
                                                    name: 'left',
                                                    value: 'left'
                                                },
                                                {
                                                    name: 'right',
                                                    value: 'right'
                                                },
                                                {
                                                    name: 'bottom',
                                                    value: 'bottom'
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    displayName: 'tooltip单位设置',
                                    name: 'tooltipUnit',
                                    value: [
                                        {
                                            displayName: '内容',
                                            name: 'content',
                                            type:"text",
                                            value: '%'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    displayName: 'x轴设置',
                    name: 'xAxisSetting',
                    value: [
                        {
                            displayName: '轴线',
                            name: 'xAxisLine',
                            value: [
                                {
                                    displayName: '是否显示',
                                    name: 'show',
                                    type: 'boolean',
                                    value: true
                                },
                                {
                                    displayName: '颜色',
                                    name: 'colorLine',
                                    type: 'color',
                                    value: '#D9D9D9'
                                },
                                {
                                    displayName: '线类型',
                                    name: 'lineType',
                                    type: 'select',
                                    value: 'solid',
                                    options: [
                                        {
                                            name: '实线',
                                            value: 'solid'
                                        },
                                        {
                                            name: '虚线',
                                            value: 'dashed'
                                        },
                                        {
                                            name: '点虚线',
                                            value: 'dotted'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            displayName: '刻度',
                            name: 'xAxisTick',
                            value: [
                                {
                                    displayName: '是否显示',
                                    name: 'show',
                                    type: 'boolean',
                                    value: false
                                },
                                {
                                    displayName: '颜色',
                                    name: 'colorTick',
                                    type: 'color',
                                    value: ''
                                }
                            ]
                        },
                        {
                            displayName: '标签',
                            name: 'xAxisLabel',
                            value: [
                                {
                                    displayName: '是否显示',
                                    name: 'show',
                                    type: 'boolean',
                                    value: true 
                                },
                                {
                                    displayName: '宽度',
                                    name: 'width',
                                    type: 'number',
                                    value: 50
                                },
                                {
                                    displayName: '超出宽度配置',
                                    name: 'overflow',
                                    type: 'select',
                                    value: 'none',
                                    options:[
                                        {
                                            name:'截断',
                                            value:'truncate'
                                        },
                                        {
                                            name:'换行',
                                            value:'break'
                                        },
                                        {
                                            name:'无',
                                            value:'none'
                                        }
                                    ]
                                },
                                {
                                    displayName: '字体大小',
                                    name: 'labelSize',
                                    type: 'number',
                                    value: 11
                                },
                                {
                                    displayName: '颜色',
                                    name: 'colorLabel',
                                    type: 'color',
                                    value: '#2E3033'
                                },
                                {
                                    displayName: '字体倾斜',
                                    name: 'rotate',
                                    type: 'text',
                                    value: ''
                                },
                                {
                                    displayName: '内边距',
                                    name: 'padding',
                                    type: 'text',
                                    value: '-2,0,0,0'
                                }
                            ]
                        },
                        {
                            displayName: '分割线',
                            name: 'xAxisSplitLine',
                            value: [
                                {
                                    displayName: '是否显示',
                                    name: 'show',
                                    type: 'boolean',
                                    value: false
                                },
                                {
                                    displayName: '颜色',
                                    name: 'colorLine',
                                    type: 'color',
                                    value: '#E9E9E9'
                                },
                                {
                                    displayName: '线类型',
                                    name: 'lineType',
                                    type: 'select',
                                    value: 'dashed',
                                    options: [
                                        {
                                            name: '实线',
                                            value: 'solid'
                                        },
                                        {
                                            name: '虚线',
                                            value: 'dashed'
                                        },
                                        {
                                            name: '点虚线',
                                            value: 'dotted'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            displayName: '轴名称',
                            name: 'xAxisName',
                            value: [
                                {
                                    displayName: '是否显示',
                                    name: 'show',
                                    type: 'boolean',
                                    value: false
                                },
                                {
                                    displayName: '名称',
                                    name: 'xAxisNameText',
                                    type: 'text',
                                    value: '单位（xx）'
                                },

                                {
                                    displayName: '字体大小',
                                    name: 'xAxisNameSize',
                                    type: 'text',
                                    value: '12'
                                },
                                {
                                    displayName: '颜色',
                                    name: 'xAxisNameColor',
                                    type: 'color',
                                    value: '#666'
                                },
                                {
                                    displayName: '内边距',
                                    name: 'xAxisNamePadding',
                                    type: 'text',
                                    value: '0,0,0,10',
                                    tip: 'padding: 3, 4, 5, 6：表示 上, 右, 下, 左 的边距。'
                                }
                            ]
                        }
                    ]
                },
                {
                    displayName: 'y轴设置',
                    name: 'yAxisSetting',
                    value: [
                        {
                            displayName: '左侧轴设置',
                            name: 'leftYAxisSetting',
                            value: [
                                {
                                    displayName: '是否显示',
                                    name: 'show',
                                    type: 'boolean',
                                    value: true
                                },
                                {
                                    displayName: '最大值',
                                    name: 'max',
                                    type: 'number',
                                    value: 800
                                },
                                {
                                    displayName: '分割间隔',
                                    name: 'interval',
                                    type: 'number',
                                    value: 200
                                },
                                {
                                    displayName: '轴线',
                                    name: 'yAxisLine',
                                    value: [
                                        {
                                            displayName: '是否显示',
                                            name: 'show',
                                            type: 'boolean',
                                            value: false
                                        },
                                        {
                                            displayName: '颜色',
                                            name: 'colorLine',
                                            type: 'color',
                                            value: '#eee'
                                        },
                                        {
                                            displayName: '线类型',
                                            name: 'lineType',
                                            type: 'select',
                                            value: 'dashed',
                                            options: [
                                                {
                                                    name: '实线',
                                                    value: 'solid'
                                                },
                                                {
                                                    name: '虚线',
                                                    value: 'dashed'
                                                },
                                                {
                                                    name: '点虚线',
                                                    value: 'dotted'
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    displayName: '刻度',
                                    name: 'yAxisTick',
                                    value: [
                                        {
                                            displayName: '是否显示',
                                            name: 'show',
                                            type: 'boolean',
                                            value: false
                                        },
                                        {
                                            displayName: '颜色',
                                            name: 'colorTick',
                                            type: 'color',
                                            value: ''
                                        }
                                    ]
                                },
                                {
                                    displayName: '标签',
                                    name: 'yAxisLabel',
                                    value: [
                                        {
                                            displayName: '是否显示',
                                            name: 'show',
                                            type: 'boolean',
                                            value: true
                                        },
                                        {
                                            displayName: '字体大小',
                                            name: 'labelSize',
                                            type: 'number',
                                            value: 11
                                        },
                                        {
                                            displayName: '颜色',
                                            name: 'colorLabel',
                                            type: 'color',
                                            value: '#B8BECC'
                                        },
                                        {
                                            displayName: '单位',
                                            name: 'units',
                                            type: 'text',
                                            value: ''
                                        }
                                    ]
                                },
                                {
                                    displayName: '分割线',
                                    name: 'yAxisSplitLine',
                                    value: [
                                        {
                                            displayName: '是否显示',
                                            name: 'show',
                                            type: 'boolean',
                                            value: true
                                        },
                                        {
                                            displayName: '颜色',
                                            name: 'colorLine',
                                            type: 'color',
                                            value: '#E9E9E9'
                                        },
                                        {
                                            displayName: '线类型',
                                            name: 'lineType',
                                            type: 'select',
                                            value: 'dashed',
                                            options: [
                                                {
                                                    name: '实线',
                                                    value: 'solid'
                                                },
                                                {
                                                    name: '虚线',
                                                    value: 'dashed'
                                                },
                                                {
                                                    name: '点虚线',
                                                    value: 'dotted'
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    displayName: '轴名称',
                                    name: 'yAxisName',
                                    value: [
                                        {
                                            displayName: '是否显示',
                                            name: 'show',
                                            type: 'boolean',
                                            value: true
                                        },
                                        {
                                            displayName: '名称',
                                            name: 'yAxisNameText',
                                            type: 'text',
                                            value: '考勤数/人'
                                        },
                                        {
                                            displayName: '字体大小',
                                            name: 'yAxisNameSize',
                                            type: 'number',
                                            value: 11
                                        },
                                        {
                                            displayName: '颜色',
                                            name: 'yAxisNameColor',
                                            type: 'color',
                                            value: '#B8BECC'
                                        },
                                        {
                                            displayName: '内边距',
                                            name: 'yAxisNamePadding',
                                            type: 'text',
                                            value: '0,0,0,-35',
                                            tip: 'padding: 3, 4, 5, 6：表示 上, 右, 下, 左 的边距。'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            displayName: '右侧轴设置',
                            name: 'rightYAxisSetting',
                            value: [
                                {
                                    displayName: '是否显示',
                                    name: 'show',
                                    type: 'boolean',
                                    value: true
                                },
                                {
                                    displayName: '最大值',
                                    name: 'max',
                                    type: 'number',
                                    value: 100
                                },
                                {
                                    displayName: '分割间隔',
                                    name: 'interval',
                                    type: 'number',
                                    value: 25
                                },
                                {
                                    displayName: '轴线',
                                    name: 'yAxisLine',
                                    value: [
                                        {
                                            displayName: '是否显示',
                                            name: 'show',
                                            type: 'boolean',
                                            value: false
                                        },
                                        {
                                            displayName: '颜色',
                                            name: 'colorLine',
                                            type: 'color',
                                            value: '#eee'
                                        },
                                        {
                                            displayName: '线类型',
                                            name: 'lineType',
                                            type: 'select',
                                            value: 'dashed',
                                            options: [
                                                {
                                                    name: '实线',
                                                    value: 'solid'
                                                },
                                                {
                                                    name: '虚线',
                                                    value: 'dashed'
                                                },
                                                {
                                                    name: '点虚线',
                                                    value: 'dotted'
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    displayName: '刻度',
                                    name: 'yAxisTick',
                                    value: [
                                        {
                                            displayName: '是否显示',
                                            name: 'show',
                                            type: 'boolean',
                                            value: false
                                        },
                                        {
                                            displayName: '颜色',
                                            name: 'colorTick',
                                            type: 'color',
                                            value: ''
                                        }
                                    ]
                                },
                                {
                                    displayName: '标签',
                                    name: 'yAxisLabel',
                                    value: [
                                        {
                                            displayName: '是否显示',
                                            name: 'show',
                                            type: 'boolean',
                                            value: true
                                        },
                                        {
                                            displayName: '字体大小',
                                            name: 'labelSize',
                                            type: 'number',
                                            value: 11
                                        },
                                        {
                                            displayName: '颜色',
                                            name: 'colorLabel',
                                            type: 'color',
                                            value: '#B8BECC'
                                        },
                                        {
                                            displayName: '单位',
                                            name: 'units',
                                            type: 'text',
                                            value: ''
                                        }
                                    ]
                                },
                                {
                                    displayName: '分割线',
                                    name: 'yAxisSplitLine',
                                    value: [
                                        {
                                            displayName: '是否显示',
                                            name: 'show',
                                            type: 'boolean',
                                            value: true
                                        },
                                        {
                                            displayName: '颜色',
                                            name: 'colorLine',
                                            type: 'color',
                                            value: '#E9E9E9'
                                        },
                                        {
                                            displayName: '线类型',
                                            name: 'lineType',
                                            type: 'select',
                                            value: 'dashed',
                                            options: [
                                                {
                                                    name: '实线',
                                                    value: 'solid'
                                                },
                                                {
                                                    name: '虚线',
                                                    value: 'dashed'
                                                },
                                                {
                                                    name: '点虚线',
                                                    value: 'dotted'
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    displayName: '轴名称',
                                    name: 'yAxisName',
                                    value: [
                                        {
                                            displayName: '是否显示',
                                            name: 'show',
                                            type: 'boolean',
                                            value: true
                                        },
                                        {
                                            displayName: '名称',
                                            name: 'yAxisNameText',
                                            type: 'text',
                                            value: '考勤率/%'
                                        },
                                        {
                                            displayName: '字体大小',
                                            name: 'yAxisNameSize',
                                            type: 'number',
                                            value: 11
                                        },
                                        {
                                            displayName: '颜色',
                                            name: 'yAxisNameColor',
                                            type: 'color',
                                            value: '#B8BECC'
                                        },
                                        {
                                            displayName: '内边距',
                                            name: 'yAxisNamePadding',
                                            type: 'text',
                                            value: '0,0,0,45',
                                            tip: 'padding: 3, 4, 5, 6：表示 上, 右, 下, 左 的边距。'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    displayName: '图表组件位置',
                    name: 'chartsPosition',
                    value: [
                        {
                            displayName: '上',
                            name: 'top',
                            type: 'number',
                            value: 50
                        },
                        {
                            displayName: '下',
                            name: 'bottom',
                            type: 'number',
                            value: 20
                        },
                        {
                            displayName: '左',
                            name: 'left',
                            type: 'number',
                            value: 18
                        },
                        {
                            displayName: '右',
                            name: 'right',
                            type: 'number',
                            value: 22
                        },
                        {
                            displayName: '是否包含标签区域',
                            name: 'containLabel',
                            type: 'boolean',
                            value: true,
                            tip: '常用于防止标签溢出，计算距离时候会计算容器边到标签的距离，否则计算容器边缘到刻度线的距离。'
                        }
                    ]
                },
                {
                    displayName: '图例设置',
                    name: 'legendSetting',
                    value: [
                        {
                            name: 'show',
                            displayName: '是否显示',
                            type: 'boolean',
                            value: true
                        },
                        {
                            displayName: '图例布局朝向',
                            name: 'legendOrient',
                            type: 'select',
                            value: 'horizontal',
                            options: [
                                {
                                    name: '水平',
                                    value: 'horizontal'
                                },
                                {
                                    name: '垂直',
                                    value: 'vertical'
                                }
                            ]
                        },
                        
                        {
                            displayName: '图标',
                            name: 'legendIcon',
                            value: [
                                {
                                    displayName: '高度',
                                    name: 'iconHeight',
                                    type: 'number',
                                    value: 8
                                },
                                {
                                    displayName: '宽度',
                                    name: 'iconWidth',
                                    type: 'number',
                                    value: 12
                                }
                            ]
                        },
                        {
                            displayName: '文字',
                            name: 'legendText',
                            value: [
                                {
                                    displayName: '颜色',
                                    name: 'textColor',
                                    type: 'color',
                                    value: '#2E3033'
                                },
                                {
                                    displayName: '文字大小',
                                    name: 'textSize',
                                    type: 'number',
                                    value: 11
                                }
                            ]
                        },
                       
                        {
                            displayName: '位置设置',
                            name: 'position',
                            value: [
                                {
                                    displayName: '上',
                                    name: 'top',
                                    type: 'number',
                                    value: 20
                                },
                                {
                                    displayName: '图例水平对齐方式',
                                    name: 'legendposition',
                                    type: 'select',
                                    value: 'center',
                                    options: [
                                        {
                                            name: '居中',
                                            value: 'center'
                                        },
                                        {
                                            name: '左对齐',
                                            value: 'left'
                                        },
                                        {
                                            name: '右对齐',
                                            value: 'right'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    displayName: 'tooltip设置',
                    name: 'tooltipSetting',
                    value: [
                        {
                            displayName: '标题字段',
                            name: 'topTitle',
                            value: [
                                {
                                    displayName: '字体颜色',
                                    name: 'titleColor',
                                    type: 'color',
                                    value: '#fff'
                                },
                                {
                                    displayName: '字体大小',
                                    name: 'titleSize',
                                    type: 'number',
                                    value: 14
                                }
                            ]
                        },
                        {
                            displayName: '名称字段',
                            name: 'nameText',
                            value: [
                                {
                                    displayName: '字体颜色',
                                    name: 'nameColor',
                                    type: 'color',
                                    value: '#DDE0E4'
                                },
                                {
                                    displayName: '字体大小',
                                    name: 'nameSize',
                                    type: 'number',
                                    value: 12
                                }
                            ]
                        },
                        {
                            displayName: '数量字段',
                            name: 'numberText',
                            value: [
                                {
                                    displayName: '字体颜色',
                                    name: 'numberColor',
                                    type: 'color',
                                    value: '#fff'
                                },
                                {
                                    displayName: '字体大小',
                                    name: 'numberSize',
                                    type: 'number',
                                    value: 14
                                }
                            ]
                        },
                        {
                            displayName: '单位字段',
                            name: 'UnitText',
                            value: [
                                {
                                    displayName: '字体颜色',
                                    name: 'unitColor',
                                    type: 'color',
                                    value: '#DDE0E4'
                                },
                                {
                                    displayName: '字体大小',
                                    name: 'unitSize',
                                    type: 'number',
                                    value: 12
                                }
                            ]
                        }
                    ]
                },
                {
                    displayName: '滚动设置',
                    name: 'dataZoomSetting',
                    value: [
                        {
                            displayName: '是否显示',
                            name: 'show',
                            type: 'boolean',
                            value: false
                        },
                        {
                            displayName: '滚动条颜色',
                            name: 'fillerColor',
                            type: 'color',
                            value: '#2E6BE5'
                        },
                        {
                            displayName: '背景颜色',
                            name: 'backgroundColor',
                            type: 'color',
                            value: '#F5F6F7'
                        },
                        {
                            displayName: '展示个数',
                            name: 'zoomLimit',
                            type: 'number',
                            min:0,
                            tip: '数据小于展示个数时,滚动条会隐藏',
                            value: 4
                        },
                        // {
                        //     displayName: '数据展示范围',
                        //     name: 'scope',
                        //     value: [
                        //         {
                        //             displayName: '开始',
                        //             name: 'start',
                        //             type: 'number',
                        //             value: 0
                        //         },
                        //         {
                        //             displayName: '结束',
                        //             name: 'end',
                        //             type: 'number',
                        //             value: 100
                        //         }
                        //     ]
                        // },
                        {
                            displayName: '宽度',
                            name: 'width',
                            type: 'number',
                            value: 437
                        },
                        {
                            displayName: '高度',
                            name: 'height',
                            type: 'number',
                            value: 4
                        },
                        {
                            displayName: '位置设置',
                            name: 'position',
                            value: [
                                {
                                    displayName: '下',
                                    name: 'bottom',
                                    type: 'number',
                                    value: 8
                                },
                                {
                                    displayName: '左',
                                    name: 'left',
                                    type: 'number',
                                    value: 23
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            name: 'interaction',
            displayName: '交互',
            value: []
        }
    ]
};
