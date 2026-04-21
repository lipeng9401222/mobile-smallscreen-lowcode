<template>
    <div class="content">
        <em-chart ref="emChart" width="100vw" height="400px" @loaded="loaded"></em-chart>
        <em-button type="primary" @click="getImage">获取图片</em-button>
        <em-button type="info" @click="refresh">刷新图表</em-button>
        <em-button type="info" @click="addEvent">绑定图表点击事件</em-button>
        <em-image v-if="imageUrl" width="100vw" height="400px" :src="imageUrl" />
    </div>
</template>

<script lang="ts">
let echarts = null;
export default {
    data() {
        return {
            imageUrl: ''
        };
    },
    methods: {
        async loaded() {
            this.myChartNode = this.$refs.emChart;
            echarts = this.myChartNode.getEcharts();
            this.myChartNode.initChart(this.getOption());
            // 获取echarts图表的实例，可使用echarts实例上的方法
            // 由于图表初始化完成后才可以获取echarts实例，所以该方法是异步的
            this.myChart = await this.$refs.emChart.getInstance();
        },
        getImage() {
            const self = this;

            // 小程序平台都是由canvas渲染，生成图片时会将tooltip一起截图
            // 为了与H5端保持一致，建议在获取图片时隐藏多余的组件
            this.myChart.dispatchAction({
                type: 'hideTip'
            });

            setTimeout(() => {
                this.myChartNode.getImage({
                    success(res) {
                        // 在H5平台下，tempFilePath 为 base64
                        // 支付宝小程序的IDE不支持 canvasToTempFilePath，请在真机上进行预览
                        console.log(res);

                        self.imageUrl = res.tempFilePath;
                    },
                    fail(error) {
                        console.log(error);
                    }
                });
            }, 300);
        },
        refresh() {
            let option = this.getOption();

            option.title.text = '蒸发量和降水量比较';
            this.myChartNode.setOption(option);
        },
        addEvent() {
            this.myChart.on('click', 'series', function () {
                // 默认使用同层渲染
                // 微信小程序的IDE上预览图表时，若遮挡了其他元素，请在真机上预览，以真机预览效果为准
                ejs.ui.toast('series 被点击了');
            });
        },
        getOption() {
            return {
                title: {
                    text: '某地区蒸发量和降水量',
                    subtext: '纯属虚构'
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data: ['蒸发量', '降水量'],
                    y: 'bottom'
                },
                toolbox: {
                    show: true,
                    feature: {
                        magicType: { show: true, type: ['line', 'bar'] },
                        restore: { show: true }
                    }
                },
                calculable: true,
                xAxis: [
                    {
                        type: 'category',
                        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
                    }
                ],
                yAxis: [
                    {
                        type: 'value'
                    }
                ],
                series: [
                    {
                        name: '蒸发量',
                        type: 'bar',
                        data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
                        markPoint: {
                            data: [
                                { type: 'max', name: '最大值' },
                                { type: 'min', name: '最小值' }
                            ]
                        },
                        markLine: {
                            data: [{ type: 'average', name: '平均值' }]
                        },
                        itemStyle: {
                            color: new echarts.graphic.LinearGradient(
                                // 前四个参数用于配置渐变色的起止位置，这四个参数依次对应 右下左上 四个方位。也就是从右边开始顺时针方向。
                                // 通过修改前4个参数，可以实现不同的渐变方向
                                // 第五个参数则是一个数组，用于配置颜色的渐变过程。
                                // 每项为一个对象，包含offset和color两个参数
                                0,
                                0,
                                0,
                                1,
                                [
                                    {
                                        //代表渐变色从正上方开始
                                        offset: 0, //offset范围是0~1，用于表示位置，0是指0%处的颜色
                                        color: '#005BEA'
                                    }, //柱图渐变色
                                    {
                                        offset: 1, //指100%处的颜色
                                        color: '#00C6FB'
                                    }
                                ]
                            )
                        }
                    },
                    {
                        name: '降水量',
                        type: 'bar',
                        data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
                        markPoint: {
                            data: [
                                { name: '年最高', value: 182.2, xAxis: 7, yAxis: 183 },
                                { name: '年最低', value: 2.3, xAxis: 11, yAxis: 3 }
                            ]
                        },
                        markLine: {
                            data: [{ type: 'average', name: '平均值' }]
                        }
                    }
                ]
            };
        }
    }
};
</script>

<style scoped></style>
