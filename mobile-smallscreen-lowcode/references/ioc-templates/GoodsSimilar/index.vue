<template>
    <div class="epoint-component similar-pro-swiper">
        <!-- 空状态提示 -->
        <em-empty
            v-if="myData.length === 0"
            class="custom-image"
            :description="emptyConfig.description"
            :image="emptyConfig.image"
            :image-size="160"
        />

        <!-- 轮播容器 -->
        <em-swipe
            v-else
            class="swiper-container"
            :autoplay="swiperAutoplay"
            :duration="300"
            @change="handleSwiperChange"
            :style="boxOptions"
        >
            <!-- 每一页 -->
            <em-swipe-item v-for="(group, pageIndex) in groupedData" :key="pageIndex">
                <div class="product-row" :style="rowStyle">
                    <!-- 每个商品卡片 -->
                    <div
                        v-for="(item, itemIndex) in group"
                        :key="itemIndex"
                        class="product-card"
                        @click="handleImageClick(item)"
                        :style="cardContainerStyle"
                    >
                        <!-- 图片容器 -->
                        <div class="image-wrapper" :style="imageWrapperStyle">
                            <image
                                class="product-image"
                                :src="item.imageUrl"
                                :style="imageStyle"
                                mode="aspectFill"
                                lazy-load
                                @error="handleImageError(item)"
                            />
                        </div>

                        <!-- 商品标题 -->
                        <div class="product-title" :style="titleStyle">
                            {{ item.title }}
                        </div>

                        <!-- 商品价格(金豆在左侧) -->
                        <div class="product-price" :style="priceStyleComputed">
                            <image
                                v-if="goldIconConfig.show"
                                class="gold-icon"
                                :src="goldIconImageUrl"
                                :style="{ width: '16px', height: '16px', marginRight: '4px' }"
                                mode="aspectFit"
                            />
                            <text class="price-value">{{ item.price }}</text>
                        </div>
                    </div>
                </div>
            </em-swipe-item>

            <!-- 圆点指示器 -->
            <template #indicator v-if="swiperConfig.showIndicator">
                <div class="custom-indicator">
                    <div class="indicators-list">
                        <i
                            v-for="(group, index) in groupedData"
                            :key="index"
                            class="indicators-item"
                            :style="index === currentPage ? indicatorActiveStyle : indicatorStyle"
                        ></i>
                    </div>
                </div>
            </template>
        </em-swipe>
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
        // 商品数据数组
        data: {
            type: Array,
            default: () => {
                return mockData.data;
            }
        },
        // 配置对象
        config: {
            type: Object,
            required: true
        },
        // 父级组件数据
        cdata: {
            type: Object
        }
    },
    data() {
        return {
            currentPage: 0,
            defaultProductImage: '/static/default-product.png'
        };
    },
    computed: {
        // 容器样式
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

        // 商品数据数组(带验证)
        myData() {
            if (!Array.isArray(this.data)) {
                return [];
            }
            return this.data.filter((item) => item.title && item.price !== undefined);
        },

        // 布局配置
        layoutConfig() {
            const config = this.config?.options?.layoutConfig || {};
            let itemsPerRow = config.itemsPerRow || 3;

            if (itemsPerRow < 2 || itemsPerRow > 4) {
                itemsPerRow = 3;
            }

            return {
                itemsPerRow,
                cardSpacing: config.cardSpacing || 10,
                rowSpacing: config.rowSpacing || 15
            };
        },

        // 卡片样式配置
        cardStyle() {
            return this.config?.options?.cardStyle || {};
        },

        // 金豆图标配置
        goldIconConfig() {
            const config = this.config?.options?.goldIconConfig || {};
            return {
                show: config.show !== false,
                imageUrl: config.imageUrl || ''
            };
        },

        // 轮播配置
        swiperConfig() {
            const config = this.config?.options?.swiperConfig || {};
            return {
                autoplay: config.autoplay || false,
                interval: config.interval || 3000,
                showIndicator: config.showIndicator !== false
            };
        },

        // 空状态配置
        emptyConfig() {
            const config = this.config?.options?.emptyConfig || {};
            return {
                image: config.image || '',
                description: config.description || '暂无商品数据'
            };
        },

        // 轮播自动播放间隔
        swiperAutoplay() {
            return this.swiperConfig.autoplay ? this.swiperConfig.interval : -1;
        },

        // 分组后的商品数据
        groupedData() {
            const itemsPerRow = this.layoutConfig.itemsPerRow;
            const groups = [];

            for (let i = 0; i < this.myData.length; i += itemsPerRow) {
                groups.push(this.myData.slice(i, i + itemsPerRow));
            }

            return groups;
        },

        // 卡片容器样式
        cardContainerStyle() {
            const itemsPerRow = this.layoutConfig.itemsPerRow;
            const spacing = this.layoutConfig.cardSpacing;
            const totalSpacing = (itemsPerRow - 1) * spacing;
            const widthPercent = (100 - totalSpacing / 3.75) / itemsPerRow;

            return {
                width: `${widthPercent}%`,
                marginRight: `${spacing}px`,
                backgroundColor: this.cardStyle.backgroundColor || 'transparent'
            };
        },

        // 行样式
        rowStyle() {
            return {
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                paddingBottom: `${this.layoutConfig.rowSpacing}px`
            };
        },

        // 图片容器样式
        imageWrapperStyle() {
            return {
                position: 'relative',
                width: '100%',
                height: `${this.cardStyle.imageHeight || 120}px`,
                overflow: 'hidden',
                borderRadius: `${this.cardStyle.borderRadius || 8}px`,
                marginBottom: '8px'
            };
        },

        // 图片样式
        imageStyle() {
            return {
                width: '100%',
                height: '100%',
                borderRadius: `${this.cardStyle.borderRadius || 8}px`
            };
        },

        // 金豆图标图片 URL
        goldIconImageUrl() {
            // 如果配置了自定义图标,使用上传的图标（需拼接项目实际的资源前缀）
            if (this.goldIconConfig.imageUrl) {
                return this.goldIconConfig.imageUrl;
            }
            return require('./img/img_gold.png');
        },

        // 标题样式
        titleStyle() {
            return {
                fontSize: `${this.cardStyle.titleFontSize || 14}px`,
                color: this.cardStyle.titleColor || '#333333',
                WebkitLineClamp: 2
            };
        },

        // 价格样式
        priceStyleComputed() {
            return {
                fontSize: `${this.cardStyle.priceFontSize || 16}px`,
                color: this.cardStyle.priceColor || '#ff6600'
            };
        },

        // 指示器未选中样式
        indicatorStyle() {
            const config = this.config?.options?.indicatorConfig || {};
            return {
                width: '6px',
                height: '6px',
                borderRadius: '3px',
                backgroundColor: config.color || '#ccc'
            };
        },

        // 指示器选中样式
        indicatorActiveStyle() {
            const config = this.config?.options?.indicatorConfig || {};
            return {
                width: '16px',
                height: '6px',
                borderRadius: '3px',
                backgroundColor: config.activeColor || '#ff6600'
            };
        }
    },
    mounted() {
        this.eventGenerate('onMounted', {
            totalProducts: this.myData.length,
            totalPages: this.groupedData.length
        });
    },
    methods: {
        // 处理商品图片点击
        handleImageClick(item) {
            this.eventGenerate('onItemClick', { item });
        },

        // 处理轮播切换
        handleSwiperChange(index) {
            this.currentPage = index;
        },

        // 处理图片加载错误
        handleImageError(item) {
            item.imageUrl = this.defaultProductImage;
        }
    },
    // 所有组件必须设置_getConfig和_getMockData,用于低码平台获取组件配置信息
    _getConfig: () => defaultConfig,
    _getMockData: () => mockData
};
</script>

<style lang="scss" scoped>
@import './css/index.scss';
</style>
