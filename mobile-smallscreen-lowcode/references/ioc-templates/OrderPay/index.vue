<template>
    <div class="epoint-component">
        <div class="list_container" v-for="(item, index) in myData[0].productlist" :key="index">
            <div class="item_top" @click="clickItem(item)">
                <div class="item_top_left">
                    <img :src="item.picurl" alt="" />
                    <div class="item_top_title">{{ item.gysname }}</div>
                </div>
                <img src="./img/img1.png" alt="" />
            </div>
            <div class="box_container">
                <div class="item_box" v-for="(item, index) in item.products" :key="index" @click="clickItem(item)">
                    <img :src="item.pathinfo" alt="" />
                    <div class="item_box_right">
                        <div class="item_box_right_title">{{ item.productname }}</div>
                        <div class="type">{{ getType(item.piclist || []) }}</div>
                        <div class="box_bottom">
                            <div class="num">数量：{{ item.purchasenum }}</div>
                            <div class="price">
                                <img src="./img/icon.png" style="margin-right: 4px" alt="" />
                                <span v-html="formatPrice(item.price)"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="remark">
                <div class="remark_title">备注信息</div>
                <input type="text" v-model="remarkValue[index]" placeholder="选填，可以告诉我们您的特殊需求" />
            </div>
            <div class="total_container">
                <div class="price_total">
                    小计：
                    <img src="./img/icon.png" style="margin-right: 4px" alt="" />
                    <span v-html="formatPrice(getTotalPrice(item.products || []))"></span>
                </div>
                <div class="shipping_cost" v-if="item.freight">
                    运费：
                    <img src="./img/icon.png" style="margin-right: 4px" alt="" />
                    <span v-html="formatPrice(item.freight)"></span>
                </div>
            </div>
        </div>
        <div class="bottom_btn">
            <div class="heji">
                合计：
                <img src="./img/icon.png" style="margin-right: 4px" alt="" />
                <span v-html="formatPrice(myData[0].producttotal)"></span>
            </div>
            <div class="btn" @click="submitOrderThrottle">提交订单</div>
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
            remarkValue: []
        };
    },
    watch: {
        myData: {
            handler(newVal) {
                if (newVal.length > 0) {
                    this.remarkValue = new Array(newVal.length).fill('');
                }
            },
            deep: true
        }
    },
    computed: {
        boxOptions() {
            const { boxOptions } = this.config.options;
            const boxmodel = boxOptions.boxmodel;
            Object.keys(boxmodel).forEach((key) => {
                if (!isNaN(Number(boxmodel[key]))) {
                    boxmodel[key] = boxmodel[key] + 'px';
                }
            });
            return boxOptions;
        },
        myData() {
            return this.data;
        }
    },
    created() {
        this.submitOrderThrottle = this.throttle(this.submitOrder, 2000);
    },
    mounted() {
        this.eventGenerate('onMounted', '自定义参数');
    },
    methods: {
        throttle(fn, delay = 1000) {
            let lastTime = 0;
            return (...args) => {
                const now = Date.now();
                if (now - lastTime >= delay) {
                    lastTime = now;
                    fn.apply(this, args);
                }
            };
        },
        clickItem(item) {
            this.eventGenerate('onClick', item);
        },
        // 格式化价格显示，将小数部分字体大小改为12px
        formatPrice(price) {
            if (!price) return '';
            const priceStr = price.toString();
            const decimalIndex = priceStr.indexOf('.');
            if (decimalIndex === -1) return priceStr;
            const integerPart = priceStr.substring(0, decimalIndex);
            const decimalPart = priceStr.substring(decimalIndex);
            return `${integerPart}<span style="font-size: 12px">${decimalPart}</span>`;
        },
        // 提交订单
        submitOrder() {
            let checkArr = [],
                products = [];
            this.myData[0].productlist.forEach((item, index) => {
                checkArr.push({
                    id: item.gysguid,
                    ischeck: 1,
                    remark: this.remarkValue[index] || ''
                });
                if (item.products.length > 0) {
                    item.products.forEach((prod) => {
                        products.push({
                            productguid: prod.productguid,
                            productname: prod.productname,
                            isjx: '0',
                            isdirect: prod.isdirect,
                            gysguid: item.gysguid,
                            purchasenum: prod.purchasenum
                        });
                    });
                }
            });
            this.eventGenerate('onSubmit', { checkArr, products });
        },
        getType(list) {
            return list.map((item) => `${item.picname}:${item.picvalue}`).join('; ');
        },
        getTotalPrice(products) {
            let total = 0;
            products.forEach((item) => {
                total += parseFloat(item.price) * parseInt(item.purchasenum);
            });
            return total;
        }
    },
    // 所有组件必须设置_getConfig和_getMockData，用于低码平台获取组件配置信息
    _getConfig: () => defaultConfig,
    _getMockData: () => mockData
};
</script>

<style lang="scss" scoped>
@import './css/index.scss';
</style>
