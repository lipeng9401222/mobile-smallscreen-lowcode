<template>
    <view class="content">
        <!-- #ifndef APP-PLUS -->
        <em-cell-group>
            <em-cell
                v-for="(item, index) in apis"
                :key="index"
                is-link
                :title="item.title"
                :label="item.os.join('、')"
                :border="index !== apis.length - 1"
                @click="onClick(item.runcode)"
            />
        </em-cell-group>
        <!-- #endif -->
        <!-- #ifdef APP-PLUS -->
        <div class="back" @click="back"><text class="back-text">返回上一页</text></div>
        <list class="list">
            <cell v-for="(item, index) in apis" :key="index" @click="onClick(item.runcode)">
                <div class="cell">
                    <text class="cell-text">{{ item.title }}</text>
                    <text class="cell-sub-text">支持: {{ item.os.join('、') }}</text>
                </div>
            </cell>
        </list>
        <!-- #endif -->
    </view>
</template>

<script lang="ts">
export default {
    data() {
        return {
            apis: [
                {
                    title: 'toast',
                    os: ['ejs', 'h5', 'dd', 'wechat', 'alipay', 'weex'],
                    runcode() {
                        ejs.ui.toast({
                            message: 'sd#ddd测试',
                            h5UI: false, // 是否强制使用H5-UI效果，默认false
                            success: function (result) {
                                setTimeout(() => {
                                    ejs.ui.toast('成功回调');

                                }, 800);
                                console.log('toast成功');
                            },
                            error: function (err) {
                                ejs.ui.toast('失败回调：' + JSON.stringify(err));
                            }
                        });

                        // ejs.ui.toast('快速调用');
                    }
                },
                {
                    title: 'toastAndEvent',
                    os: ['ejs'],
                    runcode() {
                        ejs.ui.toastAndEvent({
                            message: 'sd#ddd测试',
                            buttonName: '收藏设置',
                            iconType: '0', // 0无图标，1成功图标，2失败图标
                            duration: '2000', // 弹框持续时间，不传默认2000，单位ms
                            position: 'bottom', // 弹出位置，可选值为 top(距离顶部1/3) bottom（中间） center（距离底部1/3）
                            success: function (result) {
                                ejs.ui.toast('点击了按钮');
                            }, // 成功回调表示点击了按钮
                            error: function (err) {
                                ejs.ui.toast('失败回调：' + JSON.stringify(err));
                            }
                        });
                    }
                },
                {
                    title: 'showDebugDialog',
                    os: ['ejs', 'h5', 'dd', 'wechat', 'alipay', 'weex'],
                    runcode() {
                        // 没有成功回调
                        ejs.ui.showDebugDialog({
                            debugInfo: '信息',
                            // h5UI: true,
                            // 调用成功后立马回调
                            success: function (result) {
                                setTimeout(() => {
                                    ejs.ui.toast('成功回调');

                                }, 300);
                                console.log(result);
                            },
                            error: function (err) {
                                ejs.ui.toast('失败回调：' + JSON.stringify(err));
                            }
                        });
                    }
                },
                {
                    title: 'alert',
                    os: ['ejs', 'h5', 'dd', 'wechat', 'alipay', 'weex'],
                    runcode() {
                        ejs.ui.alert({
                            title: '',
                            message: '信息',
                            buttonName: 'bu确定',
                            cancelable: 0,
                            // h5UI: true,// 是否强制使用H5-UI效果，默认false
                            success: function (result) {
                                ejs.ui.toast('成功回调：' + JSON.stringify(result));
                                // 点击 alert的按钮后回调
                                console.log(result);
                            },
                            error: function (err) {
                                ejs.ui.toast('失败回调：' + JSON.stringify(err));
                            }
                        });
                    }
                },
                {
                    title: 'confirm',
                    os: ['ejs', 'h5', 'dd', 'wechat', 'alipay', 'weex'],
                    runcode() {
                        ejs.ui.confirm({
                            title: '是否选择',
                            message: '2',
                            buttonLabels: ['bb%取消', '确%定'],
                            cancelable: 1,
                            // h5UI: true, // 是否强制使用H5-UI效果，默认false
                            success: function (result) {
                                ejs.ui.toast('成功回调：' + JSON.stringify(result));
                                console.log(result);
                            },
                            error: function (err) {
                                ejs.ui.toast('失败回调：' + JSON.stringify(err));
                            }
                        });
                    }
                },
                {
                    title: 'prompt',
                    os: ['ejs', 'h5', 'dd', 'wechat', 'alipay', 'weex'],
                    runcode() {
                        ejs.ui.prompt({
                            title: '测试输入',
                            hint: '提示',
                            text: '已存在的文本',
                            lines: 3,
                            maxLength: 1000,
                            buttonLabels: ['v取消', '确定'],
                            cancelable: 1,
                            // h5UI: true, // 是否强制使用H5-UI效果，默认false
                            success: function (result) {
                                ejs.ui.toast('成功回调：' + JSON.stringify(result));
                                console.log(result);
                            },
                            error: function (err) {
                                ejs.ui.toast('失败回调：' + JSON.stringify(err));
                            }
                        });
                    }
                },
                {
                    title: 'showWaiting',
                    os: ['ejs', 'h5', 'dd', 'wechat', 'alipay'],
                    runcode() {
                        console.log('version', ejs.version);
                        ejs.ui.showWaiting({
                            message: '正在加载....',
                            padlock: true
                        });

                        setTimeout(() => {
                            ejs.ui.closeWaiting();
                        }, 2000);
                    }
                },
                {
                    title: 'actionSheet',
                    os: ['ejs', 'h5', 'dd', 'wechat', 'alipay'],
                    runcode() {
                        ejs.ui.actionSheet({
                            items: ['远野贵树', '篠原明里', '澄田花苗', '立花泷', '宫水三叶'],
                            // h5UI: true, // 是否强制使用H5-UI效果，默认false
                            success: function (result) {
                                ejs.ui.toast('成功回调：' + JSON.stringify(result));
                                console.log(result);
                            },
                            error: function (err) {
                                ejs.ui.toast('失败回调：' + JSON.stringify(err));
                                console.log(err);
                            }
                        });
                    }
                },
                {
                    title: 'pickDate',
                    os: ['ejs', 'h5', 'dd', 'wechat', 'alipay', 'weex'],
                    runcode() {
                        ejs.ui.pickDate({
                            title: 'pickDate',
                            datetime: '2016-12-05',
                            // h5中的开始日期
                            minDate: '2010-12-01',
                            // h5中的结束日期
                            maxDate: '2020-12-01',
                            h5UI: false, // 是否强制使用H5-UI效果，默认false
                            success: function (result) {
                                ejs.ui.toast('成功回调：' + JSON.stringify(result));
                                console.log(result);
                            },
                            error: function (err) {
                                ejs.ui.toast('失败回调：' + JSON.stringify(err));
                            }
                        });
                    }
                },
                {
                    title: 'pickTime',
                    os: ['ejs', 'h5', 'dd', 'wechat', 'alipay', 'weex'],
                    runcode() {
                        ejs.ui.pickTime({
                            title: 'pickTime',
                            datetime: '10:20',
                            minHour: 0,
                            maxHour: 23,
                            minMinute: 0,
                            maxMinute: 59,
                            h5UI: false, // 是否强制使用H5-UI效果，默认false
                            success: function (result) {
                                ejs.ui.toast('成功回调：' + JSON.stringify(result));
                                console.log(result);
                            },
                            error: function (err) {
                                ejs.ui.toast('失败回调：' + JSON.stringify(err));
                            }
                        });
                    }
                },
                {
                    title: 'pickDateTime',
                    os: ['ejs', 'h5', 'dd', 'wechat', 'alipay'],
                    runcode() {
                        ejs.ui.pickDateTime({
                            // 原生与h5表现效果不同，
                            // 原生方法需要设置两个标题，h5方法只需要一个标题
                            title: '选择日期时间',
                            datetime: '2016-12-05 10:20',
                            // h5中的开始年份
                            minDate: '',
                            // h5中的结束年份
                            maxDate: '',
                            h5UI: false, // 是否强制使用H5-UI效果，默认false
                            success: function (result) {
                                ejs.ui.toast('成功回调：' + JSON.stringify(result));
                                console.log(result);
                            },
                            error: function (err) {
                                ejs.ui.toast('失败回调：' + JSON.stringify(err));
                            }
                        });
                    }
                },
                {
                    title: 'pickMonth',
                    os: ['h5', 'dd', 'wechat', 'alipay'],
                    runcode() {
                        ejs.ui.pickMonth({
                            title: '选择月份',
                            datetime: '2017-06',
                            // h5中的开始年月
                            minDate: '',
                            // h5中的结束年月
                            maxDate: '',
                            success: function (result) {
                                ejs.ui.toast('成功回调：' + JSON.stringify(result));
                                console.log(result);
                            },
                            error: function (err) {
                                ejs.ui.toast('失败回调：' + JSON.stringify(err));
                            }
                        });
                    }
                },
                {
                    title: 'popPicker 一级',
                    os: ['h5', 'dd', 'wechat', 'alipay'],
                    runcode() {
                        ejs.ui.popPicker({
                            layer: 1,
                            data: [
                                {
                                    value: 'value1',
                                    text: 'text1'
                                },
                                {
                                    value: 'value2',
                                    text: 'text2'
                                }
                            ],
                            // h5UI: true,
                            success: function (result) {
                                ejs.ui.toast('成功回调：' + JSON.stringify(result));
                                console.log(result);
                            },
                            error: function (err) {
                                ejs.ui.toast('失败回调：' + JSON.stringify(err));
                            }
                        });
                    }
                },
                {
                    title: 'popPicker 二级',
                    os: ['h5', 'dd', 'wechat', 'alipay'],
                    runcode() {
                        ejs.ui.popPicker({
                            layer: 1,
                            // h5UI: true,
                            data: [
                                {
                                    value: 'value111',
                                    text: 'text111',
                                    children: [
                                        {
                                            value: 'value11',
                                            text: 'text11'
                                        },
                                        {
                                            value: 'value12',
                                            text: 'text12'
                                        }
                                    ]
                                },
                                {
                                    value: 'value222',
                                    text: 'text222',
                                    children: [
                                        {
                                            value: 'value21',
                                            text: 'text21'
                                        },
                                        {
                                            value: 'value22',
                                            text: 'text22'
                                        }
                                    ]
                                }
                            ],
                            success: function (result) {
                                ejs.ui.toast('成功回调：' + JSON.stringify(result));
                                console.log(result);
                            },
                            error: function (err) {
                                ejs.ui.toast('失败回调：' + JSON.stringify(err));
                            }
                        });
                    }
                },
                {
                    title: 'popPicker 三级',
                    os: ['h5', 'dd', 'wechat', 'alipay'],
                    runcode() {
                        ejs.ui.popPicker({
                            layer: 1,
                            // h5UI: true,
                            data: [
                                {
                                    value: '110000',
                                    text: '北京市',
                                    children: [
                                        {
                                            value: '110101',
                                            text: '北京市',
                                            children: [
                                                {
                                                    value: '110101',
                                                    text: '东城区'
                                                },
                                                {
                                                    value: '110102',
                                                    text: '西城区'
                                                },
                                                {
                                                    value: '110103',
                                                    text: '崇文区'
                                                },
                                                {
                                                    value: '110104',
                                                    text: '宣武区'
                                                },
                                                {
                                                    value: '110105',
                                                    text: '朝阳区'
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    value: '120000',
                                    text: '天津市',
                                    children: [
                                        {
                                            value: '120100',
                                            text: '天津市',
                                            children: [
                                                {
                                                    value: '120101',
                                                    text: '和平区'
                                                },
                                                {
                                                    value: '120102',
                                                    text: '河东区'
                                                },
                                                {
                                                    value: '120103',
                                                    text: '河西区'
                                                },
                                                {
                                                    value: '120104',
                                                    text: '南开区'
                                                },
                                                {
                                                    value: '120105',
                                                    text: '河北区'
                                                },
                                                {
                                                    value: '120106',
                                                    text: '红桥区'
                                                },
                                                {
                                                    value: '120107',
                                                    text: '塘沽区'
                                                },
                                                {
                                                    value: '120108',
                                                    text: '汉沽区'
                                                },
                                                {
                                                    value: '120109',
                                                    text: '大港区'
                                                },
                                                {
                                                    value: '120110',
                                                    text: '东丽区'
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ],
                            success: function (result) {
                                ejs.ui.toast('成功回调：' + JSON.stringify(result));
                                console.log(result);
                            },
                            error: function (err) {
                                ejs.ui.toast('失败回调：' + JSON.stringify(err));
                            }
                        });
                    }
                },
                {
                    title: 'select 单选',
                    os: ['ejs', 'h5', 'dd', 'wechat', 'alipay', 'weex'],
                    runcode() {
                        ejs.ui.select({
                            title: '普通单选',
                            items: [
                                '远野贵树',
                                '篠原明里',
                                '澄田花苗',
                                '立花泷',
                                '宫水三叶',
                                '远野贵树',
                                '篠原明里',
                                '澄田花苗',
                                '立花泷',
                                '宫水三叶'
                            ],
                            cancelable: 0,
                            // h5UI: true, // 是否强制使用H5-UI效果，默认false
                            success: function (result) {
                                ejs.ui.toast('成功回调：' + JSON.stringify(result));
                                console.log(result);
                            },
                            error: function (err) {
                                ejs.ui.toast('失败回调：' + JSON.stringify(err));
                            }
                        });
                    }
                },
                {
                    title: 'select 多选',
                    os: ['ejs', 'h5', 'dd', 'wechat', 'alipay'],
                    runcode() {
                        // items
                        ejs.ui.select({
                            title: '多选',
                            items: [
                                '远野贵树',
                                '篠原明里',
                                '澄田花苗',
                                '立花泷',
                                '宫水三叶'
                            ],
                            choiceState: ['0', '0', '0', '1', '1', '0', '1'],
                            isMultiSelect: 1,
                            cancelable: 0,
                            // h5UI: true, // 是否强制使用H5-UI效果，默认false
                            success: function (result) {
                                ejs.ui.toast('成功回调：' + JSON.stringify(result));
                                console.log(result);
                            },
                            error: function (err) {
                                ejs.ui.toast('失败回调：' + JSON.stringify(err));
                            }
                        });
                    }
                },
                {
                    title: 'select 九宫格单选',
                    os: ['ejs', 'h5', 'dd', 'wechat', 'alipay'],
                    runcode() {
                        ejs.ui.select({
                            title: '九宫格选择',
                            items: ['远野贵树', '篠原明里', '澄田花苗', '立花泷', '宫水三叶'],
                            // 样式类型，默认为0。 0：单列表样式；1：九宫格样式(目前只支持单选)
                            type: 1,
                            columns: 3,
                            // 默认可取消
                            cancelable: 1,
                            // h5UI: true,
                            success: function (result) {
                                ejs.ui.toast('成功回调：' + JSON.stringify(result));
                                console.log(result);
                            },
                            error: function (error) {
                                ejs.ui.toast('失败回调：' + JSON.stringify(error));
                                console.log(error);
                            }
                        });
                    }
                },
                {
                    title: 'popWindow',
                    os: ['ejs'],
                    runcode() {
                        var iconSrc = 'http://app.epoint.com.cn/staticResource/img_head.png';

                        ejs.ui.popWindow({
                            titleItems: ['立花泷', '宫水三叶'],
                            iconItems: [iconSrc, iconSrc],
                            iconFilterColor: '',
                            success: function (result) {
                                ejs.ui.toast('成功回调：' + JSON.stringify(result));
                                console.log(result);
                            },
                            error: function (err) {
                                ejs.ui.toast('失败回调：' + JSON.stringify(err));
                            }
                        });
                    }
                }
            ]
        };
    },
    methods: {
        onClick(cb) {
            cb && cb(this);
        },
        back() {
            this.$router.go(-1);
        }
    }
};
</script>

<style>
.list {
    flex: 1;
    height: 600px;
}
.cell {
    height: 60px;
    border-bottom: 1px solid #888;
}
.cell-text{
    font-size: 18px;
}
.cell-sub-text{
    color: #888;
    font-size: 14px;
}

.back{
    background-color: blue;
    height: 40px;
    flex: 1;
    margin-top: 40px;
}

.back-text{
    font-size: 18px;
    color: #fff;
}
</style>
