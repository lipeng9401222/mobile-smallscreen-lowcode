<!--
 * @作者: 范绪超
 * @创建时间: 2023-07-17 09:02:39
 * @修改时间: 2025-12-12 10:15:21
 * @版本: [1.0]
 * @版权: 国泰新点软件股份有限公司
 * @描述: 环形图 emChart版
-->
<template>
    <div class="epoint-component">
        <div class="em-container" :style="boxoptions">
            <em-chart :ref="emChartId" :height="250"></em-chart>
        </div>
    </div>
</template>

<script>
// 小屏低码组件相关配置
import '@boot';
import mockData from './mock/data';
import defaultConfig from './js/config';
import event from './plugin/eventgenerate';
export default {
    name: 'SgxRingCharts002',
    mixins: [event],
    props: {
        data: {
            type: Array,
            default: () => {
                return mockData.data;
            }
        },
        config: {
            type: Object
        },
        cdata: Object
    },
    data() {
        return {
            emChartId: 'Ring' + Date.now(),
            curIndex: '',
            curtip: ''
        };
    },
    computed: {
        boxoptions() {
            const { boxoptions } = this.config.options;
            return boxoptions;
        },
        myData() {
            return this.data;
        },
        // 父级数据
        pdata() {
            let { pdata } = this.config.options;
            return pdata;
        },
        // 图表配置
        chartSetting() {
            let { chartSetting } = this.config.options;
            // console.log(chartSetting);
            return chartSetting;
        },
        dataRatioSetting() {
            let { dataRatioSetting } = this.config.options;
            return dataRatioSetting;
        },
        // 配色
        setColors() {
            let { setColors } = this.config.options;
            return setColors;
        },
        amount() {
            if (this.myData) {
                return this.myData.reduce((accumulator, currentValue) => accumulator + parseInt(currentValue.value), 0);
            } else {
                return 0;
            }
        },
        total() {
            const initialValue = 0;
            if (this.myData) {
                return this.myData.reduce(
                    (accumulator, currentValue) => accumulator + parseFloat(currentValue.value),
                    initialValue
                );
            }
        },
        // 中心文字
        centerTextSetting() {
            let { centerTextSetting } = this.config.options;
            return centerTextSetting;
        },
        // 数据总值
        centerTotalSetting() {
            let { centerTotalSetting } = this.config.options;
            return centerTotalSetting;
        }
    },
    watch: {
        data() {
            this.refresh();
        },
        config() {
            this.refresh();
        }
    },
    created() {},
    async mounted() {
        this.myChartNode = this.$refs[this.emChartId];
        this.myChartNode.initChart(this.getOption());
        // 获取echarts图表的实例，可使用echarts实例上的方法
        // 由于图表初始化完成后才可以获取echarts实例，所以该方法是异步的
        this.myChart = await this.myChartNode.getInstance();
        let parentNode = this.myChartNode.$el.parentNode;
        // 动态获取父级容器宽度
        this.myChartNode.$el.style.width =
            parentNode.offsetWidth -
            parentNode.style.paddingLeft.replace(/\s+|px/gi, '') -
            parentNode.style.paddingRight.replace(/\s+|px/gi, '') +
            'px';
        //获取到之后需要重绘一下
        this.myChart.resize();
        this.myChart.on('mouseover', (e) => {
            this.curIndex = e.dataIndex;
            this.itemClick(e.dataIndex);
        });

        this.myChart.on('mouseout', (e) => {
            this.myChart.dispatchAction({
                type: 'downplay',
                seriesIndex: 0
            });
            this.curIndex = '';
        });
        console.log(this.total);
    },
    methods: {
        async refresh() {
            this.myChartNode = this.$refs[this.emChartId];
            this.myChart = await this.myChartNode.getInstance();
            this.myChart.clear();
            let parentNode = this.myChartNode.$el.parentNode;
            this.myChartNode.$el.style.width =
                parentNode.offsetWidth -
                parentNode.style.paddingLeft.replace(/\s+|px/gi, '') -
                parentNode.style.paddingRight.replace(/\s+|px/gi, '') +
                'px';
            this.myChart.resize();
            let option = this.getOption();
            this.myChartNode.setOption(option, true);
            this.myChart.on('mouseover', (e) => {
                this.curIndex = e.dataIndex;
                this.itemClick(e.dataIndex);
            });

            this.myChart.on('mouseout', (e) => {
                this.curIndex = '';
                this.myChart.dispatchAction({
                    type: 'downplay',
                    seriesIndex: 0
                });
            });
        },
        addEvent() {
            this.myChart.on('click', 'series', function () {
                // 默认使用同层渲染
                // 微信小程序的IDE上预览图表时，若遮挡了其他元素，请在真机上预览，以真机预览效果为准
                ejs.ui.toast('series 被点击了');
            });
        },
        getOption() {
            let _this = this;
            let curData = _this.myData;
            let unitSetting = this.centerTotalSetting?.unitSetting || {};
            let option = {
                title: {
                    show: _this.centerTotalSetting.show,
                    text: `{val|${_this.amount}}{unit|${unitSetting?.unit || ''}}`,
                    top: _this.centerTotalSetting.top,
                    textAlign: 'center',
                    left: _this.centerTotalSetting.left,
                    textStyle: {
                        rich: {
                            val: {
                                fontSize: _this.centerTotalSetting.fontSize,
                                color: _this.centerTotalSetting.color,
                                fontWeight: _this.centerTotalSetting.fontWeight
                            },
                            unit: {
                                color: unitSetting.color,
                                fontSize: unitSetting.fontSize,
                                padding: unitSetting?.padding?.split(',')?.map(Number)
                            }
                        }
                    },
                    zlevel: 99
                },
                color: _this.setColors,
                tooltip: {
                    show: false
                },
                legend: {
                    show: false
                },
                graphic: {
                    elements: [
                        {
                            // 文字
                            type: 'text',
                            left: _this.centerTextSetting.left,
                            top: _this.centerTextSetting.top,
                            style: {
                                text: _this.centerTextSetting.show ? _this.centerTextSetting.content : '',
                                textAlign: 'center',
                                fill: _this.centerTextSetting.color,
                                fontSize: _this.centerTextSetting.fontSize
                            },
                            zlevel: 99
                        }
                    ]
                },
                series: [
                    {
                        name: _this.chartSetting.titleName,
                        type: 'pie',
                        roseType: this.chartSetting.roseType,
                        radius: [_this.chartSetting.insideRadius + '%', _this.chartSetting.outerRadius + '%'], //环形的粗细
                        center: [_this.chartSetting.left + '%', _this.chartSetting.top + '%'], // 圆心位置
                        avoidLabelOverlap: true,
                        label: {
                            show: true,
                            formatter: function (params) {
                                let percent = _this.amount
                                    ? ((params.data.value / _this.amount) * 100).toFixed(_this.chartSetting.fixedNumber)
                                    : 0;

                                return `{a|${params.name}}\n{b|${params.value}}{d|个}{b|${percent}}{c|%}`;
                            },
                            rich: {
                                a: {
                                    fontSize: 12,
                                    color: '#333',
                                    padding: [0, 0, 6, 0]
                                },
                                b: {
                                    fontSize: '14px',
                                    color: '#333',
                                    fontWeight: 700
                                },
                                c: {
                                    fontSize: '12px',
                                    color: '#999'
                                },
                                d: {
                                    fontSize: '12px',
                                    color: '#999',
                                    padding: [0, 6, 0, 0]
                                }
                            }
                        },
                        itemStyle: {
                            normal: {
                                borderWidth: 2, // 间距的宽度
                                borderColor: '#fff' //修改边框的背景颜色
                            }
                        },
                        emphasis: {
                            label: {
                                show: true
                            }
                        },
                        labelLine: {
                            show: true,
                            showAbove: false
                        },
                        data: curData,
                        zlevel: '3'
                    },
                    {
                        name: '',
                        type: 'pie',
                        startAngle: 90,
                        center: [_this.chartSetting.left + '%', _this.chartSetting.top + '%'],
                        radius: [_this.chartSetting.insideRadius - 5 + '%', _this.chartSetting.outerRadius + 7 + '%'],
                        hoverAnimation: false,
                        animation: false,
                        itemStyle: {
                            color: {
                                type: 'radial',
                                x: 0.5, // 渐变中心的横坐标（相对比例）
                                y: 0.5, // 渐变中心的纵坐标
                                r: 0.5, // 渐变半径
                                colorStops: [
                                    { offset: 0, color: 'rgba(239, 244, 254,0)' },
                                    { offset: 1, color: '#EFF4FE' }
                                ],
                                global: false
                            },
                            opacity: '1',
                            borderWidth: '1',
                            borderColor: '#dbeaff'
                        },
                        labelLine: {
                            show: false
                        },
                        data: [100],
                        zlevel: '2'
                    },
                    {
                        name: '',
                        type: 'pie',
                        startAngle: 90,
                        center: [_this.chartSetting.left + '%', _this.chartSetting.top + '%'],
                        radius: ['0', '12%'],
                        hoverAnimation: false,
                        animation: false,
                        itemStyle: {
                            color: {
                                type: 'radial',
                                x: 0.5, // 渐变中心的横坐标（相对比例）
                                y: 0.5, // 渐变中心的纵坐标
                                r: 0.5, // 渐变半径
                                colorStops: [
                                    { offset: 0, color: 'rgba(239, 244, 254,0)' },
                                    { offset: 1, color: '#c7dbff' }
                                ],
                                global: false
                            },
                            opacity: '1',
                            borderWidth: '1',
                            borderColor: '#dbeaff'
                        },
                        labelLine: {
                            show: false
                        },
                        data: [100],
                        zlevel: '2'
                    }
                ]
            };
            return option;
        },
        // 过滤数据 将入参转换为可以使用的 value
        filterPieData(data, key = 'value') {
            if (data && Array.isArray(data)) {
                let newData = data.map((item) => {
                    return {
                        ...item,
                        value: item[key]
                    };
                });
                return newData;
            }
            return [];
        },
        resize() {
            this.refresh();
        }
    },
    beforeDestroy() {},
    // 所有组件必须设置_getConfig和_getMockData，用于低码平台获取组件配置信息
    _getConfig: () => defaultConfig,
    _getMockData: () => mockData
};
</script>

<style lang="scss" scoped>
@import './css/index.scss';
</style>
