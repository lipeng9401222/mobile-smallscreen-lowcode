<!--
 * @作者: 沈子琦
 * @创建时间: 2023-08-03 16:15:30
 * @修改时间: 2025-05-20 10:47:16
 * @版本: [1.0]
 * @版权: 国泰新点软件股份有限公司
 * @描述: 淄博组合图 emChart版
-->

<template>
    <div class="epoint-component">
        <div class="em-container" :style="boxoptions">
            <em-chart :ref="emChartId" :height="boxoptions.height"></em-chart>
        </div>
    </div>
</template>

<script>
// 小屏低码组件相关配置
import '@boot';
import mockData from './mock/data';
import defaultConfig from './js/config';
import eventMixin from './plugin/eventgenerate';
export default {
    name: 'ZbMixedChartsEmChart',
    mixins: [eventMixin],
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
            emChartId: 'mixed' + Date.now()
        };
    },
    watch: {
        data() {
            this.refresh();
        },
        config() {
            this.refresh();
        }
    },
    computed: {
        boxoptions() {
            const { boxoptions } = this.config.options;
            return boxoptions;
        },
        myData() {
            return this.data[0];
        },
        // 图表设置
        SettingCharts() {
            const { SettingCharts } = this.config.options;
            return SettingCharts;
        },
        // x轴配置数据
        xAxisSetting() {
            const { xAxisSetting } = this.config.options;
            return xAxisSetting;
        },
        //x轴 轴线
        xAxisLine() {
            const { xAxisLine } = this.xAxisSetting;
            return xAxisLine;
        },
        //x轴 刻度
        xAxisTick() {
            const { xAxisTick } = this.xAxisSetting;
            return xAxisTick;
        },
        zoomEnd() {
            // if (this.myData) {
            //     return (this.dataZoomSetting.zoomLimit / this.myData.length) * 100;
            // }
            let endCount = this.dataZoomSetting.zoomLimit - 1;
            if (endCount < 0) {
                endCount = 0;
            }
            return endCount;
        },
        //x轴 标签
        xAxisLabel() {
            const { xAxisLabel } = this.xAxisSetting;
            return xAxisLabel;
        },
        //x轴 分割线
        xAxisSplitLine() {
            const { xAxisSplitLine } = this.xAxisSetting;
            return xAxisSplitLine;
        },
        //x轴 轴名称
        xAxisName() {
            const { xAxisName } = this.xAxisSetting;
            return xAxisName;
        },
        // y轴配置数据
        yAxisSetting() {
            const { yAxisSetting } = this.config.options;
            return yAxisSetting;
        },
        //左侧y轴配置数据
        leftYAxisSetting() {
            const { leftYAxisSetting } = this.yAxisSetting;
            return leftYAxisSetting;
        },
        //右侧y轴配置数据
        rightYAxisSetting() {
            const { rightYAxisSetting } = this.yAxisSetting;
            return rightYAxisSetting;
        },
        // 图表偏移量
        chartsPosition() {
            const { chartsPosition } = this.config.options;
            return chartsPosition;
        },
        lineStyle() {
            const { lineStyle } = this.SettingCharts;
            return lineStyle;
        },
        areaStyle() {
            const { areaStyle } = this.SettingCharts;
            return areaStyle;
        },
        IndividuateData() {
            const { IndividuateData } = this.config.options;
            return IndividuateData;
        },
        // 提示设置
        tooltipSetting() {
            const { tooltipSetting } = this.config.options;
            return tooltipSetting;
        },
        dataZoomSetting() {
            const { dataZoomSetting } = this.config.options;
            return dataZoomSetting;
        },
        //系列数据
        seriesData() {
            let seriesArr = [];
            if (this.myData && this.myData.yData) {
                this.myData.yData.forEach((item, index) => {
                    if (item.type === 'line') {
                        let data = this.IndividuateData[index];
                        let obj = {
                            name: item.name,
                            type: 'line',
                            yAxisIndex: data.yAxisIndex,
                            smooth: data.smooth,
                            symbol: 'circle',
                            barGap: '10%',
                            symbolSize: data.lineSymbol.symbolSize,
                            data: item.data,
                            itemStyle: {
                                normal: {
                                    color: data.lineSymbol.symbolColor,
                                    borderWidth: data.lineSymbol.symbolBorderWidth
                                        ? data.lineSymbol.symbolBorderWidth
                                        : data.hoverSymbol.symbolBorderWidth,
                                    borderColor: data.lineSymbol.symbolBorderColor,
                                    label: {
                                        show: data.itemLabel.show,
                                        position: data.itemLabel.itemLabelPosition,
                                        textStyle: {
                                            color: data.itemLabel.itemLabelColor,
                                            fontSize: data.itemLabel.itemLabelSize
                                        }
                                    }
                                },
                                emphasis: {
                                    color: data.hoverSymbol.hoverSymbolColor,
                                    borderWidth: data.hoverSymbol.symbolBorderWidth,
                                    borderColor: data.hoverSymbol.symbolBorderColor
                                }
                            },
                            lineStyle: {
                                type: data.itemLineStyle.itemLineType,
                                color: data.itemLineStyle.lineColor
                            },
                            areaStyle: {
                                normal: {
                                    opacity: data.areaShow ? 1 : 0,
                                    color: {
                                        ...data.areaColor[0],
                                        global: false
                                    }
                                }
                            },
                            zlevel: 2
                        };
                        seriesArr.push(obj);
                    } else {
                        let data = this.IndividuateData[index];
                        let obj = {
                            name: item.name,
                            type: 'bar',
                            stack: item.stack,
                            yAxisIndex: data.yAxisIndex,
                            data: item.data,
                            barWidth: data.barStyle.barWidth,
                            zlevel: 1,
                            barGap: '20%',
                            itemStyle: {
                                color: data.barStyle.barColor[0]
                            },
                            label: {
                                show: data.itemLabel.show,
                                position: data.itemLabel.itemLabelPosition,
                                textStyle: {
                                    color: data.itemLabel.itemLabelColor,
                                    fontSize: data.itemLabel.itemLabelSize
                                }
                            }
                        };
                        seriesArr.push(obj);
                    }
                });
            }

            return seriesArr;
        },
        xData() {
            if (this.myData && this.myData.xData) {
                return this.myData.xData;
            }
            return [];
        },
        //图例设置
        legendSetting() {
            const { legendSetting } = this.config.options;
            return legendSetting;
        },
        // 父级数据
        pdata() {
            let { pdata } = this.config.options;
            return pdata;
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
        },
        addEvent() {
            this.myChart.on('click', 'series', function () {
                // 默认使用同层渲染
                // 微信小程序的IDE上预览图表时，若遮挡了其他元素，请在真机上预览，以真机预览效果为准
                ejs.ui.toast('series 被点击了');
            });
        },
        getOption() {
            var _this = this;
            return {
                backgroundColor: '#fff',
                color: ['#2E6BE5', '#E03F3F', '#F79042', '#36B389', '#795DE1'],
                legend: {
                    show: this.legendSetting.show,
                    orient: this.legendSetting.legendOrient,
                    left: this.legendSetting.position.legendposition,
                    itemWidth: parseInt(this.legendSetting.legendIcon.iconWidth),
                    itemHeight: parseInt(this.legendSetting.legendIcon.iconHeight),
                    textStyle: {
                        color: this.legendSetting.legendText.textColor, // 图例文字颜色
                        fontSize: this.legendSetting.legendText.textSize
                    },
                    // left: this.legendSetting.position.left,
                    top: this.legendSetting.position.top
                },
                tooltip: {
                    axisPointer: {
                        type: 'none'
                    },
                    trigger: 'axis',
                    backgroundColor: 'rgba(46, 48, 51, 0.8)',
                    borderWidth: 0,
                    formatter: function (params) {
                        let valueStr = '';
                        params.forEach((item, index) => {
                            valueStr += `
                            <div style="display:flex;height:20px;margin-top:3px; align-items: center;">
                            <div style=" color:${_this.tooltipSetting.nameText.nameColor}; font-family: Source Han Sans CN; font-size: ${_this.tooltipSetting.nameText.nameSize}px; font-style: normal; font-weight: 400;">${item.seriesName}：</div>
                            <div style="color:${_this.tooltipSetting.numberText.numberColor}; font-family: Source Han Sans CN; font-size:${_this.tooltipSetting.numberText.numberSize}px; font-style: normal; font-weight: 400;">${item.value}</div>
                            <div style="color: ${_this.tooltipSetting.UnitText.unitColor}; font-family: Source Han Sans CN; font-size: ${_this.tooltipSetting.UnitText.unitSize}px; font-style: normal; font-weight: 400;">${_this.IndividuateData[index].tooltipUnit.content}</div>
                            </div>
                            `;
                        });
                        return (
                            ` <div style="color:${_this.tooltipSetting.topTitle.titleColor};font-size:${_this.tooltipSetting.topTitle.titleSize}px;height:20px; text-align:left">${params[0].name}</div>` +
                            valueStr
                        );
                    }
                },
                grid: {
                    left: this.chartsPosition.left,
                    right: this.chartsPosition.right,
                    bottom: this.chartsPosition.bottom,
                    top: this.chartsPosition.top,
                    containLabel: this.chartsPosition.containLabel
                },
                // x轴配置
                xAxis: [
                    {
                        type: 'category',
                        name: this.xAxisName.show ? this.xAxisName.xAxisNameText : '',
                        nameTextStyle: {
                            color: this.xAxisName.xAxisNameColor,
                            fontSize: this.xAxisName.xAxisNameSize,
                            padding: this.xAxisName.xAxisNamePadding.split(',')
                        },
                        axisLabel: {
                            show: this.xAxisLabel.show,
                            color: this.xAxisLabel.colorLabel,
                            fontSize: this.xAxisLabel.labelSize,
                            overflow: this.xAxisLabel.overflow,
                            width: this.xAxisLabel.width,
                            interval: 0,
                            ellipsis: '...',
                            fontFamily: 'Source Han Sans CN',
                            rotate: this.xAxisLabel.rotate,
                            padding: this.xAxisLabel.padding.split(',').map(Number)
                        },
                        axisLine: {
                            show: this.xAxisLine.show,
                            lineStyle: {
                                color: this.xAxisLine.colorLine,
                                type: this.xAxisLine.lineType
                            }
                        },
                        axisTick: {
                            show: this.xAxisTick.show,
                            lineStyle: {
                                color: this.xAxisTick.colorTick
                            }
                        },
                        splitLine: {
                            show: this.xAxisSplitLine.show,
                            lineStyle: {
                                color: this.xAxisSplitLine.colorLine,
                                type: this.xAxisSplitLine.lineType
                            }
                        },
                        data: this.xData
                    }
                ],
                yAxis: [
                    // 左侧轴
                    {
                        show: this.leftYAxisSetting.show,
                        type: 'value',
                        max: this.leftYAxisSetting.max,
                        interval: this.leftYAxisSetting.interval,
                        name: this.leftYAxisSetting.yAxisName.show ? this.leftYAxisSetting.yAxisName.yAxisNameText : '',
                        nameTextStyle: {
                            color: this.leftYAxisSetting.yAxisName.yAxisNameColor,
                            fontSize: this.leftYAxisSetting.yAxisName.yAxisNameSize,
                            padding: this.leftYAxisSetting.yAxisName.yAxisNamePadding.split(',')
                        },
                        // 标签
                        axisLabel: {
                            show: this.leftYAxisSetting.yAxisLabel.show,
                            fontSize: this.leftYAxisSetting.yAxisLabel.labelSize,
                            color: this.leftYAxisSetting.yAxisLabel.colorLabel,
                            formatter: (val) => {
                                return `${val.toFixed(0)}${this.leftYAxisSetting.yAxisLabel.units}`;
                            },
                            fontFamily: 'Source Han Sans CN'
                        },
                        // 网格线
                        splitLine: {
                            show: this.leftYAxisSetting.yAxisSplitLine.show,
                            lineStyle: {
                                color: this.leftYAxisSetting.yAxisSplitLine.colorLine,
                                type: this.leftYAxisSetting.yAxisSplitLine.lineType
                            }
                        },
                        // 轴线
                        axisLine: {
                            show: this.leftYAxisSetting.yAxisLine.show,
                            lineStyle: {
                                color: this.leftYAxisSetting.yAxisLine.colorLine,
                                type: this.leftYAxisSetting.yAxisLine.lineType
                            }
                        },
                        axisTick: {
                            show: this.leftYAxisSetting.yAxisTick.show,
                            lineStyle: {
                                color: this.leftYAxisSetting.yAxisTick.colorTick
                            }
                        }
                    },
                    // 右侧轴
                    {
                        type: 'value',
                        show: this.rightYAxisSetting.show,
                        max: this.rightYAxisSetting.max,
                        interval: this.rightYAxisSetting.interval,
                        name: this.rightYAxisSetting.yAxisName.show
                            ? this.rightYAxisSetting.yAxisName.yAxisNameText
                            : '',
                        nameTextStyle: {
                            color: this.rightYAxisSetting.yAxisName.yAxisNameColor,
                            fontSize: this.rightYAxisSetting.yAxisName.yAxisNameSize,
                            padding: this.rightYAxisSetting.yAxisName.yAxisNamePadding.split(',')
                        },
                        // 标签
                        axisLabel: {
                            show: this.rightYAxisSetting.yAxisLabel.show,
                            fontSize: this.rightYAxisSetting.yAxisLabel.labelSize,
                            color: this.rightYAxisSetting.yAxisLabel.colorLabel,
                            formatter: (val) => {
                                return `${val.toFixed(0)}${this.rightYAxisSetting.yAxisLabel.units}`;
                            },
                            fontFamily: 'Source Han Sans CN'
                        },
                        // 网格线
                        splitLine: {
                            show: this.rightYAxisSetting.yAxisSplitLine.show,
                            lineStyle: {
                                color: this.rightYAxisSetting.yAxisSplitLine.colorLine,
                                type: this.rightYAxisSetting.yAxisSplitLine.lineType
                            }
                        },
                        // 轴线
                        axisLine: {
                            show: this.rightYAxisSetting.yAxisLine.show,
                            lineStyle: {
                                color: this.rightYAxisSetting.yAxisLine.colorLine,
                                type: this.rightYAxisSetting.yAxisLine.lineType
                            }
                        },
                        axisTick: {
                            show: this.rightYAxisSetting.yAxisTick.show,
                            lineStyle: {
                                color: this.rightYAxisSetting.yAxisTick.colorTick
                            }
                        }
                    }
                ],
                dataZoom: [
                    {
                        type: 'slider',
                        show: this.dataZoomSetting.show
                            ? this.myData.xData.length > this.dataZoomSetting.zoomLimit
                            : false,
                        left: this.dataZoomSetting.position.left,
                        bottom: this.dataZoomSetting.position.bottom,
                        borderColor: 'transparent',
                        brushSelect: false,
                        lineStyle: {
                            opacity: 0
                        },
                        fillerColor: this.dataZoomSetting.fillerColor,
                        backgroundColor: this.dataZoomSetting.backgroundColor,
                        showDetail: false,
                        // start: this.dataZoomSetting.scope.start,
                        // end: this.dataZoomSetting.scope.end,
                        startValue: 0,
                        endValue: this.zoomEnd,
                        width: this.dataZoomSetting.width,
                        height: this.dataZoomSetting.height,
                        handleStyle: {
                            opacity: 0
                        },
                        showDataShadow: false,
                        moveHandleStyle: {
                            opacity: 0
                        },
                        textStyle: {
                            fontSize: 0
                        },
                        zoomLock: true
                    },
                    {
                        type: 'inside',
                        show: this.dataZoomSetting.show
                            ? this.myData.xData.length > this.dataZoomSetting.zoomLimit
                            : false,
                        left: this.dataZoomSetting.position.left,
                        bottom: this.dataZoomSetting.position.bottom,
                        borderColor: 'transparent',
                        brushSelect: false,
                        lineStyle: {
                            opacity: 0
                        },
                        fillerColor: this.dataZoomSetting.fillerColor,
                        backgroundColor: this.dataZoomSetting.backgroundColor,
                        showDetail: false,
                        // start: this.dataZoomSetting.scope.start,
                        // end: this.dataZoomSetting.scope.end,
                        startValue: 0,
                        endValue: this.zoomEnd,
                        width: this.dataZoomSetting.width,
                        height: this.dataZoomSetting.height,
                        handleStyle: {
                            opacity: 0
                        },
                        showDataShadow: false,
                        moveHandleStyle: {
                            opacity: 0
                        },
                        textStyle: {
                            fontSize: 0
                        },
                        zoomLock: true
                    }
                ],
                series: this.seriesData
            };
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
.box {
    box-shadow: 0 0 blur 4px #817d7d1a;
    border-radius: 4px;

}
</style>
