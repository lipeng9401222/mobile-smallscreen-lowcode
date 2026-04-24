import base from './base';
// 通用容器样式
import boxoptions from '../plugin/boxoptions/config';
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
                    displayName: '配色',
                    name: 'setColors',
                    type: 'colors',
                    dynamic: true,
                    value: ['#2F76EA', '#3AF', '#3AD4A1', '#FAAF0C', '#A666FF']
                },
                {
                    displayName: '图表系列',
                    name: 'chartSetting',
                    value: [
                        {
                            displayName: '系列名',
                            name: 'titleName',
                            type: 'text',
                            value: '圆环图'
                        },
                        {
                            displayName: '占比保留小数',
                            name: 'fixedNumber',
                            type: 'number',
                            value: 2
                        },
                        {
                            displayName: '环形类型',
                            name: 'roseType',
                            type: 'select',
                            tip: '环形切换为南丁格尔玫瑰图',
                            value: false,
                            options: [
                                {
                                    name: '环形图',
                                    value: false
                                },
                                {
                                    name: '玫瑰图_圆心角展现数据百分比',
                                    value: 'radius'
                                },
                                {
                                    name: '玫瑰图_半径来展示数据百分比',
                                    value: 'area'
                                }
                            ]
                        },
                        {
                            displayName: '数据映射',
                            name: 'dataValue',
                            type: 'text',
                            value: 'value'
                        },
                        {
                            displayName: '中心-左(%)',
                            name: 'left',
                            type: 'number',
                            value: 50
                        },
                        {
                            displayName: '中心-上(%)',
                            name: 'top',
                            type: 'number',
                            value: 50
                        },
                        {
                            displayName: '内圈',
                            name: 'insideRadius',
                            type: 'number',
                            value: 30
                        },
                        {
                            displayName: '外圈',
                            name: 'outerRadius',
                            type: 'number',
                            value: 45
                        }
                    ]
                },
                {
                    displayName: '中心文字',
                    name: 'centerTextSetting',
                    value: [
                        {
                            displayName: '显示',
                            name: 'show',
                            type: 'boolean',
                            value: false
                        },
                        {
                            displayName: '文字内容',
                            name: 'content',
                            type: 'text',
                            value: '总数'
                        },
                        {
                            displayName: '颜色',
                            name: 'color',
                            type: 'color',
                            value: '#2E3033'
                        },
                        {
                            displayName: '文字大小',
                            name: 'fontSize',
                            type: 'text',
                            value: '13'
                        },
                        {
                            displayName: 'top',
                            name: 'top',
                            type: 'text',
                            value: '53%'
                        },
                        {
                            displayName: 'left',
                            name: 'left',
                            type: 'text',
                            value: 'center'
                        }
                    ]
                },
                {
                    displayName: '数据总值',
                    name: 'centerTotalSetting',
                    value: [
                        {
                            displayName: '显示',
                            name: 'show',
                            type: 'boolean',
                            value: false
                        },
                        {
                            displayName: '颜色',
                            name: 'color',
                            type: 'color',
                            value: '#2E3033'
                        },
                        {
                            displayName: '文字大小',
                            name: 'fontSize',
                            type: 'text',
                            value: '18'
                        },
                        {
                            displayName: '文字粗细',
                            name: 'fontWeight',
                            type: 'text',
                            value: '700'
                        },
                        {
                            displayName: 'top',
                            name: 'top',
                            type: 'text',
                            value: '40%'
                        },
                        {
                            displayName: 'left',
                            name: 'left',
                            type: 'text',
                            value: '50%'
                        },
                        {
                            displayName: '单位设置',
                            name: 'unitSetting',
                            value: [
                                {
                                    displayName: '单位内容',
                                    name: 'unit',
                                    type: 'text',
                                    value: '个'
                                },
                                {
                                    displayName: '颜色',
                                    name: 'color',
                                    type: 'color',
                                    value: '#8A8F99'
                                },
                                {
                                    displayName: '文字大小',
                                    name: 'fontSize',
                                    type: 'text',
                                    value: '14px'
                                },
                                {
                                    displayName: '内边距',
                                    name: 'padding',
                                    type: 'text',
                                    value: '0,0,0,2',
                                    tip: 'padding: 0, 0, 0, 0：表示 上, 右, 下, 左 的边距。'
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
