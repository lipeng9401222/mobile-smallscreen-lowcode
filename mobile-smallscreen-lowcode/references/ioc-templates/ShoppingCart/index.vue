<template>
    <div class="epoint-component">
        <div class="em-container" :style="boxOptions">
            <em-tabs v-model="tabActive" color="#E2001F" title-active-color="#E2001F" @change="onTabChange()">
                <em-tab title="全部"></em-tab>
                <em-tab title="按供应商"></em-tab>
                <em-tab title="按类目"></em-tab>
            </em-tabs>
            <div class="em-scroll-wrap">
                <div class="em-group-wrap" v-for="(item, index) in cartList" :key="index">
                    <div class="em-store-title">
                        <!-- 供应商选择 -->
                        <em-checkbox
                            v-model="item.checked"
                            checked-color="#E2001F"
                            shape="round"
                            icon-size="16px"
                            @change="handleStoreChange(item)"
                        ></em-checkbox>
                        <span class="em-store-image" v-if="tabActive != 2" @click="handleStoreClick(item)">
                            <img :src="getSupplierImg(item)" />
                        </span>
                        <span class="em-store-name" @click="handleStoreClick(item)">
                            {{ tabActive == 2 ? item.categoryName : item.supplier }}
                        </span>
                        <span class="em-right-arrow" @click="handleStoreClick(item)">
                            <img src="./images/img_rightarrow.png" alt="" />
                        </span>
                    </div>
                    <ul class="em-goods-list-wrap">
                        <li class="em-goods-item" v-for="(product, pIndex) in item.products" :key="pIndex">
                            <em-swipe-cell>
                                <div class="em-goods-item-wrap">
                                    <em-checkbox
                                        v-model="product.checked"
                                        checked-color="#E2001F"
                                        shape="round"
                                        icon-size="16px"
                                        @change="handleGoodsChange($event, product, item)"
                                    ></em-checkbox>
                                    <span class="em-goods-image" @click="handleGoodsClick(product, item)">
                                        <img :src="product.img" alt="" />
                                    </span>
                                    <div class="em-goods-info">
                                        <span class="em-goods-name" @click="handleGoodsClick(product, item)">
                                            {{ product.productname }}
                                        </span>
                                        <span class="em-goods-type">
                                            {{ getSpecificationText(product) }}
                                            <em-icon class="em-type-arrow" name="arrow-down" size="12" />
                                        </span>
                                        <div class="em-row">
                                            <span class="em-goods-price">
                                                <img src="./images/img_goldbean.png" alt="" />
                                                <span class="em-goods-price-int">
                                                    {{ product.price | intNumberFilter }}
                                                </span>
                                                <span class="em-goods-price-float">
                                                    {{ product.price | floatNumberFilter }}
                                                </span>
                                            </span>
                                            <span class="em-goods-num">
                                                <em-stepper
                                                    class="em-num-stepper"
                                                    v-model="product.nums"
                                                    @change="handleNumChange(product, item)"
                                                />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <template #right>
                                    <em-button type="danger" square @click.native.stop="handleDelete(product, item)">
                                        删除
                                    </em-button>
                                </template>
                            </em-swipe-cell>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="em-total-money">
                <em-checkbox
                    v-model="allChecked"
                    checked-color="#E2001F"
                    shape="round"
                    icon-size="16px"
                    @change="handleAllCheckedChange"
                >
                    全选
                </em-checkbox>
                <span class="em-total-title">合计：</span>
                <span class="em-goods-price">
                    <img src="./images/img_goldbean.png" alt="" />
                    <span class="em-goods-price-int">{{ totalPrice | intNumberFilter }}</span>
                    <span class="em-goods-price-float">{{ totalPrice | floatNumberFilter }}</span>
                </span>
                <em-button class="em-placeorder-btn" type="danger" color="#E2001F" @click="handleSubmit">
                    确认下单
                </em-button>
            </div>
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
        // mock中的data.js - 购物车列表数据
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
        // 获取父级组件数据
        cdata: Object
    },
    filters: {
        // 获取价格整数部分
        intNumberFilter(value) {
            if (value) {
                return value.toString().split('.')[0];
            }
            return '0';
        },
        // 获取价格小数部分
        floatNumberFilter(value) {
            value = value - 0;
            if (value) {
                return '.' + (value.toFixed(2).toString().split('.')[1] || '00');
            }
            return '.00';
        }
    },
    data() {
        return {
            tabActive: 0,
            allChecked: false,
            totalPrice: 0,
            cartList: []
        };
    },
    watch: {
        // 监听外部数据变化，重新初始化购物车列表
        data: {
            handler(newVal) {
                this.initCartList(newVal);
            },
            immediate: true,
            deep: true
        },

        // 监听购物车数据变化，计算总价
        cartList: {
            handler() {
                this.totalPrice = this.calculateTotalPrice();
            },
            deep: true
        }
    },

    computed: {
        // 容器样式配置
        boxOptions() {
            const { boxOptions } = this.config.options;
            const boxmodel = boxOptions.boxmodel;

            Object.keys(boxmodel).forEach((key) => {
                if (!isNaN(Number(boxmodel[key]))) {
                    boxmodel[key] = boxmodel[key] + 'px';
                }
            });

            return boxOptions;
        }
    },

    mounted() {
        this.eventGenerate('onMounted', { cartList: this.cartList });
    },
    methods: {
        /**
         * @description: 初始化购物车列表，添加选中状态
         */
        initCartList(data) {
            if (!Array.isArray(data) || data.length === 0) {
                this.cartList = [];
                return;
            }

            this.cartList = data.map((supplier) => ({
                ...supplier,
                checked: false,
                products: (supplier.products || []).map((product) => ({
                    ...product,
                    checked: false
                }))
            }));
        },

        /**
         * @description: 获取供应商图片
         */
        getSupplierImg(item) {
            return item.supplierimg || item.storeimg || require('./images/img_store_default.png');
        },

        /**
         * @description: 获取规格显示文本
         */
        getSpecificationText(product) {
            if (product.brandname) {
                return product.brandname;
            }
            if (product.specification) {
                return product.specification.split('/')[0] || '';
            }
            return '';
        },

        /**
         * @description: 处理供应商点击事件
         */
        handleStoreClick(item) {
            this.eventGenerate('onStoreClick', {
                supplierguid: item.supplierguid,
                supplier: item.supplier
            });
        },

        /**
         * @description: 处理商品点击事件
         */
        handleGoodsClick(product, supplier) {
            this.eventGenerate('onGoodsClick', {
                product,
                supplier: {
                    supplierguid: supplier.supplierguid,
                    supplier: supplier.supplier
                }
            });
        },

        /**
         * @description: 处理供应商选择变化
         */
        handleStoreChange(item) {
            item.products.forEach((product) => {
                product.checked = item.checked;
            });
            this.allChecked = this.isCheckAll();
        },

        /**
         * @description: 处理商品选择变化
         */
        handleGoodsChange(flag, product, supplier) {
            supplier.checked = supplier.products.every((p) => p.checked);
            this.allChecked = flag ? this.isCheckAll() : false;
        },

        /**
         * @description: 处理全选变化
         */
        handleAllCheckedChange(val) {
            this.cartList.forEach((supplier) => {
                supplier.checked = val;
                supplier.products.forEach((product) => {
                    product.checked = val;
                });
            });
        },

        /**
         * @description: 处理商品数量变化
         */
        handleNumChange(product, supplier) {
            this.eventGenerate('onNumChange', {
                rowguid: product.rowguid,
                productguid: product.productguid,
                nums: product.nums,
                supplierguid: supplier.supplierguid
            });
        },

        /**
         * @description: 处理删除商品
         */
        handleDelete(product, supplier) {
            this.eventGenerate('onDelete', {
                rowguid: product.rowguid,
                productguid: product.productguid,
                supplierguid: supplier.supplierguid
            });
        },

        /**
         * @description: 处理确认下单
         */
        handleSubmit() {
            const selectedProducts = [];

            this.cartList.forEach((supplier) => {
                supplier.products.forEach((product) => {
                    if (product.checked) {
                        selectedProducts.push({
                            ...product,
                            supplierguid: supplier.supplierguid,
                            supplier: supplier.supplier
                        });
                    }
                });
            });
            this.eventGenerate('onSubmit', {
                selectedProducts,
                totalPrice: this.totalPrice
            });
        },

        /**
         * @description: 判断是否全选
         */
        isCheckAll() {
            return this.cartList.every((supplier) => supplier.checked);
        },

        /**
         * @description: 计算总价
         */
        calculateTotalPrice() {
            let total = 0;

            this.cartList.forEach((supplier) => {
                supplier.products.forEach((product) => {
                    if (product.checked) {
                        total += product.price * product.nums;
                    }
                });
            });
            return total.toFixed(2);
        },
        onTabChange() {
            this.eventGenerate('onTabChange', { tabActive: this.tabActive });
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
