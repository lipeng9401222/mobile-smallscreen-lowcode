<template>
    <div class="epoint-component" :style="[boxOptions, boxOptions.boxmodel]">
        <div class="device-info-wrap">
            <div class="info-left">
                <img
                    :src="pathinfo"
                    alt=""
                />
            </div>
            <div class="info-right">
                <div class="device-name">{{ sbmc }}</div>
                <div class="device-type">{{ sblx }}</div>
            </div>
        </div>
        <div class="from-wrap" v-if="!isAdditional">
            <div class="rate-wrap">
                <div class="rate-label">商品质量</div>
                <em-rate v-model="spzl" :icon="rateIconUrl" size="16px" :void-icon="rateVoidUrl" gutter="8px" />
            </div>
            <div class="rate-wrap">
                <div class="rate-label">服务态度</div>
                <em-rate v-model="fwtd" :icon="rateIconUrl" size="16px" :void-icon="rateVoidUrl" gutter="8px" />
            </div>
            <div class="rate-wrap">
                <div class="rate-label">物流速度</div>
                <em-rate v-model="wlsd" :icon="rateIconUrl" size="16px" :void-icon="rateVoidUrl" gutter="8px" />
            </div>
            <div class="all-rate">
                <div class="rate-label">总体评价</div>
                <em-radio-group v-model="ztpj" direction="horizontal" icon>
                    <em-radio name="1" checked-color="#E2001F" icon-size="16px" :indeterminate="indeterminate">
                        优秀
                        <template #icon="props">
                            <img class="radio-icon" :src="props.checked ? radioActiveIcon : radioUrl" />
                        </template>
                    </em-radio>
                    <em-radio name="2" checked-color="#E2001F" :indeterminate="indeterminate">
                        良好
                        <template #icon="props">
                            <img class="radio-icon" :src="props.checked ? radioActiveIcon : radioUrl" />
                        </template>
                    </em-radio>
                    <em-radio name="3" checked-color="#E2001F" :indeterminate="indeterminate">
                        一般
                        <template #icon="props">
                            <img class="radio-icon" :src="props.checked ? radioActiveIcon : radioUrl" />
                        </template>
                    </em-radio>
                    <em-radio name="4" checked-color="#E2001F" :indeterminate="indeterminate">
                        较差
                        <template #icon="props">
                            <img class="radio-icon" :src="props.checked ? radioActiveIcon : radioUrl" />
                        </template>
                    </em-radio>
                </em-radio-group>
            </div>
            <div class="feedback‌-wrap">
                <div class="rate-label">评价描述</div>
                <textarea
                    class="feedback‌-textarea"
                    id="multiline"
                    v-model="pjms"
                    placeholder="设备是否给力？快分享你的购物心得吧~"
                    placeholder-style="color:#999"
                ></textarea>
            </div>
            <!-- <div class="picture-wrap">
                <div class="rate-label">晒单图片（非必填）</div>
                <em-uploader v-model="sdList" multiple accept="image/*" :max-count="8" :after-read="afterRead">
                    <div class="em-upload em-row">
                        <img src="./img/img_icon_add.png" alt="" />
                    </div>
                </em-uploader>
            </div> -->
        </div>
        <div class="rate-content-wrap" v-else>
            <div class="content-top">
                <div class="top-left">
                    <div class="top-left-text">已评分：</div>
                    <em-rate v-model="ypf" :icon="rateIconUrl" size="10px" :void-icon="rateVoidUrl" gutter="2px" />
                </div>
                <div class="top-right">{{ pjsj }}</div>
            </div>
            <div class="content-wrap">
                {{ pjms }}
            </div>
            <div class="rate-img">
                <em-uploader
                    preview-size="73px"
                    v-model="fileList"
                    accept="image/*"
                    :multiple="false"
                    :show-upload="false"
                    :deletable="false"
                ></em-uploader>
            </div>
        </div>
        <div class="from-wrap" v-if="isAdditional">
            <div class="feedback‌-wrap">
                <div class="rate-label">追加描述</div>
                <textarea
                    class="feedback‌-textarea"
                    id="multiline"
                    v-model="zjms"
                    placeholder="对商品评价进行补充，更准确客观～"
                    placeholder-style="color:#999"
                ></textarea>
            </div>
            <!-- <div class="picture-wrap">
                <div class="rate-label">晒单图片（非必填）</div>
                <em-uploader v-model="sdList" multiple accept="image/*" :max-count="8" :after-read="afterRead">
                    <div class="em-upload em-row">
                        <img src="./img/img_icon_add.png" alt="" />
                    </div>
                </em-uploader>
            </div> -->
        </div>
        <div class="btn-wrap">
            <div class="btn" @click="submit()">提交</div>
        </div>
    </div>
</template>

<script>
// 小屏低码组件相关配置
import '@boot';
import mockData from './mock/data';
import defaultConfig from './js/config';
import base from './js/base';
// 事件交互
import eventMixin from './plugin/eventgenerate';

export default {
    name: base.module_name,
    mixins: [eventMixin],
    props: {
        // mock中的data.js
        data: {
            type: Array,
            default: () => {
                return mockData.data;
            }
        },
        // 配置项
        config: {
            type: Object
        },
        //获取父级组件数据
        cdata: Object
    },
    data() {
        return {
            sbmc: '',
            sblx: '',
            pathinfo:"",//商品展示图片
            spzl: 0, // 商品质量
            fwtd: 0, //服务态度
            wlsd: 0, //物流速度
            ztpj: '1', //总体评价
            pjms: '', //评价描述
            sdList: [], //晒单照片
            rateIconUrl: '', //评分选中图标
            rateVoidUrl: '', //评分未选中图标
            indeterminate: true,
            radioUrl: '', //总体评价未选中图标
            radioActiveIcon: '', //总体评价选中图标
            isAdditional: false, //是否是追加评价页面
            ypf: '', //已评分
            pjsj: '', //评价时间
            zjms: '', //追加描述
            fileList: [] //已评价照片
        };
    },
    watch: {},
    computed: {
        // 注意：使用el.style等操作DOM的方式在微信小程序不支持
        boxOptions() {
            const { boxOptions } = this.config.options;
            const boxmodel = boxOptions.boxmodel;
            //根据实际情况进行单位修改
            Object.keys(boxmodel).forEach((key) => {
                if (!isNaN(Number(boxmodel[key]))) {
                    //是纯数字才加单位
                    boxmodel[key] = boxmodel[key] + 'px';
                }
            });
            return boxOptions;
        },
        myData() {
            return this.data[0];
        }
    },
    created() {},
    mounted() {
        if (Util.getExtraDataByKey('isAdditional') == '1') {
            this.isAdditional = true;
        }
        this.eventGenerate('onMounted', '自定义参数');
        this.rateIconUrl = require('./img/icon_rate1.png');
        this.rateVoidUrl = require('./img/icon_rate2.png');
        this.radioUrl = require('./img/icon_radio1.png');
        this.radioActiveIcon = require('./img/icon_radio2.png');
        this.upDate();
    },
    methods: {
        afterRead() {
            // let pop = that.fileList.pop();

            // pop.attachguid = Util.uuid();
            this.sdList.push(file);

            // ejs.ui.showWaiting('正在上传...');

            // Util.upload({
            //     url: Config.serverUrl + 'rest/frame/uploadattach_v7', //【简易案件无此接口】
            //     data: {
            //         clientguid: this.clientguid,
            //         clienttag: 'DTXC-001',
            //         attachfilename: file.name
            //     },
            //     files: [
            //         {
            //             name: file.name,
            //             file: file
            //         }
            //     ],
            //     beforeSend: function () {
            //         // ejs.ui.toast('准备上传');
            //     },
            //     success: function (res) {
            //         ejs.ui.closeWaiting();
            //         if (typeof res == 'string') {
            //             res = JSON.parse(res);
            //         }

            //         let pop = that.fileList.pop();

            //         pop.attachguid = res.custom.attachguid;
            //         that.fileList.push(pop);
            //     },
            //     error: function () {
            //         // error callback
            //     },
            //     uploading: function (progressEvent) {
            //         // progress Upload
            //         console.log(progressEvent);
            //     }
            // });
        },
        getFromData() {
            return {
                spzl: this.spzl,
                fwtd: this.fwtd,
                wlsd: this.wlsd,
                ztpj: this.ztpj,
                pjms: this.pjms,
                zjms: this.zjms,
                sdList: this.sdList
            };
        },
        submit() {
            console.log(this.getFromData());
            
            this.eventGenerate('onSubmit', this.getFromData());
        },
        upDate() {
            this.sbmc = this.myData.sbmc || '';
            this.pathinfo = this.myData.pathinfo || '';
            this.sblx = this.myData.sblx || '';
            this.spzl = this.myData.spzl || '';
            this.fwtd = this.myData.fwtd || '';
            this.wlsd = this.myData.wlsd || '';
            this.ztpj = this.myData.ztpj || '';
            this.pjms = this.myData.pjms || '';
            this.ypf = Number(this.myData.ypf) || '';
            this.pjsj = this.myData.pjsj || '';
            this.fileList = this.myData.fileList.map((item) => {
                return {
                    url: item.url || '',
                    isImage: true
                };
            });
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
