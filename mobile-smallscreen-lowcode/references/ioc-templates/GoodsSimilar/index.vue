<template>
    <div class="epoint-component similar-pro-swiper">
        <!-- 空状态提示 -->
        <em-empty
            v-if="myData.length === 0"
            class="custom-image"
            :description="emptyConfig.description"
            :image="emptyImageUrl"
            :image-size="emptyConfig.imageSize"
            :style="emptyContainerStyle"
        />

        <!-- 轮播容器 -->
        <em-swipe
            v-else
            class="swiper-container"
            :autoplay="swiperAutoplay"
            :duration="swiperConfig.duration"
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
                                :style="goldIconStyle"
                                mode="aspectFit"
                            />
                            <text class="price-value">{{ item.price }}</text>
                        </div>
                    </div>
                </div>
            </em-swipe-item>

            <!-- 圆点指示器 -->
            <template #indicator v-if="swiperConfig.showIndicator">
                <div class="custom-indicator" :style="indicatorBoxStyle">
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
            currentPage: 0, // 当前页码
            defaultProductImage: '/static/default-product.png' // 默认商品图片
        };
    },
    computed: {
        // 接口前缀
        prefix() {
            const origin = location.origin;
            let path = location.pathname;

            if (path.indexOf('/') === 0) {
                path = path.substring(1);
            }
            //判断当前是否是测试环境
            const basePath = '/' + path.split('/')[0];

            if (!this.isTest()) {
                //正式地址
                return origin + basePath + '/';
            }

            // 测试地址
            return 'http://218.4.136.120:8990/smallscreen-demo/';
        },

        // 容器样式
        boxOptions() {
            const { boxOptions } = this.config.options;
            const boxmodel = boxOptions.boxmodel;

            // 根据实际情况进行单位修改
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
                console.warn('SimilarProSwiper: data 必须是数组类型');

                return [];
            }

            if (this.data.length === 0) {
                console.warn('SimilarProSwiper: 商品数据为空');

                return [];
            }

            // 验证数据结构
            const validData = this.data.filter((item) => {
                if (!item.title || item.price === undefined) {
                    console.warn('SimilarProSwiper: 商品数据缺少必要字段', item);

                    return false;
                }

                return true;
            });

            return validData;
        },

        // 布局配置
        layoutConfig() {
            const config = this.config?.options?.layoutConfig || {};
            let itemsPerRow = config.itemsPerRow || 3;

            // 验证 itemsPerRow 范围
            if (itemsPerRow < 2 || itemsPerRow > 4) {
                console.warn('SimilarProSwiper: itemsPerRow 应在 2-4 之间,使用默认值 3');
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
                show: config.show !== false, // 默认显示
                imageUrl: config.imageUrl || '',
                width: config.width || 16,
                height: config.height || 16
            };
        },

        // 轮播配置
        swiperConfig() {
            const config = this.config?.options?.swiperConfig || {};

            return {
                autoplay: config.autoplay || false,
                interval: config.interval || 3000,
                duration: config.duration || 300,
                showIndicator: config.showIndicator !== false // 默认显示
            };
        },

        // 空状态配置
        emptyConfig() {
            const config = this.config?.options?.emptyConfig || {};

            return {
                padding: config.padding || '20px',
                image: config.image || '',
                imageSize: config.imageSize || 160,
                description: config.description || '暂无商品数据'
            };
        },

        // 空状态图片 URL
        emptyImageUrl() {
            // 如果配置了自定义图片,使用自定义图片
            if (this.emptyConfig.image) {
                const uploadedImage = this.prefix + this.emptyConfig.image;

                console.log('emptyImageUrl - uploadedImage:', uploadedImage);

                return uploadedImage;
            }
        },

        // 空状态容器样式
        emptyContainerStyle() {
            return {
                padding: this.emptyConfig.padding
            };
        },

        // 轮播自动播放间隔(em-swipe 需要的格式)
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

        // 卡片容器样式(无边框无阴影)
        cardContainerStyle() {
            const itemsPerRow = this.layoutConfig.itemsPerRow;
            const spacing = this.layoutConfig.cardSpacing;

            // 计算卡片宽度: (100% - (n-1) × 间距) / n
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
            const imageWidth = this.cardStyle.imageWidth || '100%';

            return {
                position: 'relative',
                width: imageWidth,
                height: `${this.cardStyle.imageHeight || 120}px`,
                overflow: 'hidden',
                borderRadius: `${this.cardStyle.borderRadius || 8}px`,
                marginBottom: `${this.cardStyle.imageMarginBottom || 8}px`
            };
        },

        // 图片样式
        imageStyle() {
            const imageWidth = this.cardStyle.imageWidth || '100%';

            return {
                width: imageWidth,
                height: '100%',
                borderRadius: `${this.cardStyle.borderRadius || 8}px`
            };
        },

        // 金豆图标图片 URL
        goldIconImageUrl() {
            // 如果配置了自定义图标,使用自定义图标
            if (this.goldIconConfig.imageUrl) {
                const uploadedIcon = this.prefix + this.goldIconConfig.imageUrl;

                console.log('goldIconImageUrl - uploadedIcon:', uploadedIcon);

                return uploadedIcon;
            }

            // 否则使用默认图标
            return require('./img/img_gold.png');
        },

        // 金豆图标样式(在价格左侧)
        goldIconStyle() {
            const config = this.goldIconConfig;

            return {
                width: `${config.width}px`,
                height: `${config.height}px`,
                marginRight: '4px'
            };
        },

        // 标题样式
        titleStyle() {
            const style = this.cardStyle.titleStyle || {};

            return {
                fontSize: `${style.fontSize || 14}px`,
                color: style.color || '#333333',
                WebkitLineClamp: style.maxLines || 2
            };
        },

        // 价格样式
        priceStyleComputed() {
            const style = this.cardStyle.priceStyle || {};

            return {
                fontSize: `${style.fontSize || 16}px`,
                color: style.color || '#ff6600'
            };
        },

        // 指示器容器样式
        indicatorBoxStyle() {
            const config = this.config?.options?.indicatorConfig || {};

            return {
                marginTop: `${config.marginTop || 0}px`,
                bottom: `${config.bottom || 10}px`
            };
        },

        // 指示器未选中样式
        indicatorStyle() {
            const config = this.config?.options?.indicatorConfig || {};

            return {
                width: `${config.width || 6}px`,
                height: `${config.height || 6}px`,
                borderRadius: `${config.borderRadius || 3}px`,
                backgroundColor: config.color || '#ccc'
            };
        },

        // 指示器选中样式
        indicatorActiveStyle() {
            const config = this.config?.options?.indicatorConfig || {};

            return {
                width: `${config.activeWidth || 16}px`,
                height: `${config.height || 6}px`,
                borderRadius: `${config.borderRadius || 3}px`,
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
        // 判断是否为测试环境
        isTest() {
            let href = location.href;

            if (href.includes('smallscreen-demo') && href.includes('218.4.136.120:8990')) {
                return false; //走正式地址   开发环境的外网映射
            }
            //域名
            if (href.startsWith('https:') || href.startsWith('http://app.epoint.com.cn')) {
                return false; //https和公司域名走 正式地址
            }
            if (
                href.includes('smallscreen-demo') ||
                href.startsWith('http://localhost')
                // ||href.startsWith('http://192.168')
            ) {
                return true; //走测试地址
            }

            return false;
        },

        // 处理商品图片点击
        handleImageClick(item) {
            // 触发自定义事件
            this.eventGenerate('onItemClick', {
                item
            });
        },

        // 处理轮播切换（仅更新当前页码，不触发事件）
        handleSwiperChange(index) {
            this.currentPage = index;
        },

        // 处理图片加载错误
        handleImageError(item) {
            console.warn('SimilarProSwiper: 图片加载失败', item.imageUrl);
            // 设置默认图片
            item.imageUrl = this.defaultProductImage;
        }
    },
    beforeDestroy() {},
    // 所有组件必须设置_getConfig和_getMockData,用于低码平台获取组件配置信息
    _getConfig: () => defaultConfig,
    _getMockData: () => mockData
};
</script>

<style lang="scss" scoped>
@import './css/index.scss';
</style>
