<template>
    <div class="epoint-component">
        <div class="product-card">
            <!-- 顶部区域 -->
            <div class="top-section">
                <!-- 价格区域 -->
                <div class="price-section">
                    <p class="product-price" :style="{ color: priceConfig.priceColor }">
                        <span class="price-icon"></span>
                        <span class="price-left">{{ getPriceInteger(goodsData.price) }}</span>
                        <span class="price-right">.{{ getPriceDecimal(goodsData.price) }}</span>
                        <span v-if="priceConfig.showPriceUnit" class="price-unit">{{ goodsData.priceUnit }}</span>
                    </p>
                    <div v-if="priceConfig.showOriginalPrice && goodsData.originalPrice" class="original-price">
                        ¥{{ goodsData.originalPrice }}
                    </div>
                </div>

                <!-- 销量标签 -->
                <div v-if="salesConfig.showSales && goodsData.salesCount" class="sales-tag">
                    {{ salesConfig.salesPrefix }}{{ goodsData.salesCount }}
                </div>

                <!-- 标题区域 -->
                <div class="title-container">
                    <span v-if="tagConfig.showTags && goodsData.tags && goodsData.tags.length > 0" class="product-tags">
                        <span
                            v-for="(tag, index) in goodsData.tags"
                            :key="index"
                            class="product-tag"
                            :style="{ backgroundColor: tagConfig.tagBgColor, color: tagConfig.tagTextColor }"
                        >
                            {{ tag }}
                        </span>
                    </span>
                    <span class="product-title">{{ goodsData.title }}</span>
                </div>
            </div>

            <!-- 底部区域 -->
            <!-- <div class="bottom-section"> -->
                <!-- 配送信息 -->
                <!-- <div v-if="deliveryConfig.showDelivery" class="delivery-section">
                    <div class="section-header">
                        <div class="section-title">{{ deliveryConfig.deliveryTitle }}</div>
                        <div class="section-content" @click="handleDeliveryClick">
                            <div class="arrow-content">
                                <span class="location-icon"></span>
                                <div class="address-text">{{ goodsData.deliveryAddress }}</div>
                                <div class="line-arrow"></div>
                            </div>
                            <div v-if="goodsData.deliveryInfo" class="sub-info">{{ goodsData.deliveryInfo }}</div>
                        </div>
                    </div>
                </div> -->

                <!-- 规格选择 -->
                <!-- <div v-if="specConfig.showSpec" class="spec-section">
                    <div class="section-header">
                        <div class="section-title">{{ specConfig.specTitle }}</div>
                        <div class="section-content" @click="handleSpecClick">
                            <div class="arrow-content">
                                <div class="spec-text">{{ goodsData.specText }}</div>
                                <div class="line-arrow"></div>
                            </div>
                        </div>
                    </div>
                </div> -->
            <!-- </div> -->
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
        // 获取父级组件数据
        cdata: Object
    },
    data() {
        return {
            showPopover: false
        };
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
        },

        // 商品数据（取数组第一项）
        goodsData() {
            const defaultData = {
                price: '0.00',
                originalPrice: '',
                priceUnit: '',
                salesCount: '',
                tags: [],
                title: '',
                deliveryAddress: '',
                deliveryInfo: '',
                specText: ''
            };

            if (!Array.isArray(this.data) || this.data.length === 0) {
                return defaultData;
            }

            return { ...defaultData, ...this.data[0] };
        },

        // 价格配置
        priceConfig() {
            const config = this.config?.options?.priceConfig || {};

            return {
                showOriginalPrice: config.showOriginalPrice !== false,
                showPriceUnit: config.showPriceUnit !== false,
                priceColor: config.priceColor || '#e2001f'
            };
        },

        // 销量配置
        salesConfig() {
            const config = this.config?.options?.salesConfig || {};

            return {
                showSales: config.showSales !== false,
                salesPrefix: config.salesPrefix || '累计销量：'
            };
        },

        // 标签配置
        tagConfig() {
            const config = this.config?.options?.tagConfig || {};

            return {
                showTags: config.showTags !== false,
                tagBgColor: config.tagBgColor || '#e2001f',
                tagTextColor: config.tagTextColor || '#ffffff'
            };
        },

        // 配送信息配置
        deliveryConfig() {
            const config = this.config?.options?.deliveryConfig || {};

            return {
                showDelivery: config.showDelivery !== false,
                deliveryTitle: config.deliveryTitle || '配送至'
            };
        },

        // 规格配置
        specConfig() {
            const config = this.config?.options?.specConfig || {};

            return {
                showSpec: config.showSpec !== false,
                specTitle: config.specTitle || '已选择'
            };
        },

        // 位置设置
        positionSetting() {
            let { positionSetting } = this.config.options;

            if (positionSetting.isOpen) {
                positionSetting.position = 'relative';
            } else {
                positionSetting.position = 'static';
            }

            return positionSetting;
        }
    },
    created() {},
    mounted() {
        this.eventGenerate('onMounted', { goodsData: this.goodsData });
    },
    methods: {
        // 获取价格整数部分
        getPriceInteger(price) {
            if (!price) return '0';
            const numPrice = parseFloat(price);

            if (isNaN(numPrice)) return '0';

            return Math.floor(numPrice).toString();
        },

        // 获取价格小数部分
        getPriceDecimal(price) {
            if (!price) return '00';
            const numPrice = parseFloat(price);

            if (isNaN(numPrice)) return '00';
            const decimal = (numPrice - Math.floor(numPrice)).toFixed(2);

            return decimal.split('.')[1] || '00';
        },

        // 处理配送信息点击事件
        handleDeliveryClick() {
            console.log('配送信息被点击');
            this.eventGenerate('onDeliveryClick', {
                type: 'delivery',
                address: this.goodsData.deliveryAddress,
                info: this.goodsData.deliveryInfo
            });
        },

        // 处理规格选择点击事件
        handleSpecClick() {
            console.log('规格选择被点击');
            this.eventGenerate('onSpecClick', {
                type: 'spec',
                specText: this.goodsData.specText
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
// 定义变量
$primary-color: #e2001f;
$border-color: #f0f0f0;
$text-color: white;
$tag-radius: 4px;
$tag-font-size: 12px;
$tag-line-height: 16px;
$font-family-title: 'YouSheBiaoTiHei';
$font-family-price: 'OPPOSans';
$font-family-text: 'Source Han Sans CN';
$font-family-default: 'Source Han Sans CN';

.epoint-component {
    background-color: #f5f6fa;
    height: auto;
    padding: 12px;

    .product-card {
        .top-section {
            padding: 12px;
            background-color: #fff;
            border-radius: 4px;
            margin-bottom: 12px;

            .price-section {
                display: flex;
                align-items: center;
                height: 24px;
                gap: 12px;
                margin-bottom: 8px;

                .product-price {
                    margin: 0;
                    color: $primary-color;
                    display: flex;
                    align-items: baseline;

                    .price-icon {
                        width: 12px;
                        height: 13px;
                        background-repeat: no-repeat;
                        background-size: contain;
                        background-position: center;
                        margin-right: 4px;
                        background-image: url('./img/icon_price.png');
                        position: relative;
                        top: 0.07em;
                    }

                    .price-left {
                        font-family: $font-family-price;
                        font-weight: 400;
                        font-style: Heavy;
                        font-size: 16px;
                        line-height: 1;
                        letter-spacing: 0%;
                    }

                    .price-right {
                        font-family: $font-family-price;
                        font-weight: 400;
                        font-style: Heavy;
                        font-size: 12px;
                        line-height: 1;
                        letter-spacing: 0%;
                    }

                    .price-unit {
                        font-family: $font-family-default;
                        font-weight: 400;
                        font-style: Regular;
                        font-size: 12px;
                        line-height: 24px;
                        letter-spacing: 0%;
                        color: #666666;
                    }
                }

                .original-price {
                    color: #999;
                    font-family: $font-family-price;
                    font-weight: 400;
                    font-style: Medium;
                    font-size: 12px;
                    line-height: 24px;
                    letter-spacing: 0%;
                    text-decoration: line-through;
                }
            }

            .sales-tag {
                height: 22px;
                width: fit-content;
                border-radius: 12px;
                opacity: 1;
                gap: 10px;
                padding: 0 8px;
                background-color: #efefef;
                color: #333333;
                font-family: $font-family-default;
                font-weight: 400;
                font-size: 12px;
                line-height: 22px;
                letter-spacing: 0%;
                margin-bottom: 8px;
            }

            .title-container {
                .product-tags {
                    float: left;
                    margin-right: 3px;

                    .product-tag {
                        color: $text-color;
                        background-color: $primary-color;
                        white-space: nowrap;
                        box-sizing: border-box;
                        height: 16px;
                        border-radius: $tag-radius;
                        opacity: 1;
                        padding: 0 3px;
                        font-family: $font-family-title;
                        font-weight: 400;
                        font-size: $tag-font-size;
                        line-height: $tag-line-height;
                        text-align: center;
                        margin-right: 4px;
                        display: inline-block;
                    }
                }

                .product-title {
                    font-family: $font-family-default;
                    font-weight: 500;
                    font-style: Medium;
                    font-size: 16px;
                    line-height: 1.5;
                    letter-spacing: 0%;
                    text-align: left;
                    color: #333333;
                    overflow: hidden;
                }
            }
        }

        .bottom-section {
            padding: 12px;
            background-color: #fff;
            border-radius: 4px;

            .delivery-section {
                margin-bottom: 20px;
            }

            .section-header {
                display: flex;
                align-items: flex-start;
                justify-content: space-between;
                gap: 10px;
                margin-bottom: 6px;

                .section-title {
                    flex-shrink: 0;
                    width: 36px;
                    font-family: $font-family-default;
                    font-weight: 400;
                    font-size: 12px;
                    line-height: 18px;
                    letter-spacing: 0%;
                    color: #999999;
                    text-align: left;
                    padding-top: 2px;
                }

                .section-content {
                    flex: 1;
                    min-width: 0;
                    cursor: pointer;

                    .arrow-content {
                        display: flex;
                        gap: 8px;
                        flex-grow: 1;

                        .location-icon {
                            display: inline-block;
                            width: 10px;
                            height: 12px;
                            background-image: url('./img/icon_vector.png');
                            background-repeat: no-repeat;
                            background-size: contain;
                            background-position: center;
                            flex-shrink: 0;
                            margin-top: 4px;
                        }

                        .address-text {
                            color: #333;
                            font-family: $font-family-default;
                            font-weight: 400;
                            font-size: 14px;
                            line-height: 21px;
                            letter-spacing: 0%;
                            white-space: nowrap;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            flex: 1;
                            min-width: 0;
                        }

                        .spec-text {
                            color: #333;
                            font-family: $font-family-default;
                            font-weight: 400;
                            font-size: 14px;
                            line-height: 21px;
                            letter-spacing: 0%;
                        }

                        .line-arrow {
                            width: 5.66px;
                            height: 5.66px;
                            position: relative;
                            top: 7px;
                            right: 1.4px;
                            flex-shrink: 0;
                            opacity: 1;

                            &::before {
                                content: '';
                                position: absolute;
                                top: 0;
                                left: 0;
                                width: 100%;
                                height: 100%;
                                border-right: 1px solid #666666;
                                border-bottom: 1px solid #666666;
                                transform: rotate(-45deg);
                            }
                        }
                    }

                    .sub-info {
                        color: #333;
                        font-family: $font-family-default;
                        font-weight: 400;
                        font-size: 14px;
                        line-height: 21px;
                        letter-spacing: 0%;
                    }
                }
            }
        }
    }
}
</style>
