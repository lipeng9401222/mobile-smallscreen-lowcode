<!--
 * @作者: 范绪超
 * @创建时间: 2025-12-12 09:11:52
 * @修改时间: 2025-12-12 09:38:43
 * @版本: [1.0]
 * @版权: 国泰新点软件股份有限公司
 * @描述: 
-->
<template>
    <div class="em-goods-type-panel">
        <!-- 商品类型面板内容 -->
        <div class="em-goods-info">
            <div class="em-gooods-images">
                <img
                    src="https://oa.epoint.com.cn/h5/fileattaches/20251211/1765441617870_6a70e88a/img_goods2.png"
                    alt=""
                />
            </div>
            <div class="em-goods-details">
                <div class="em-goods-name">潘婷无硅油洗发水洗发露净澈赋能洗头膏男女防断发</div>
                <div class="em-goods-price">
                    <img src="../images/img_goldbean.png" alt="" />
                    <span class="em-goods-price-int">{{ totalPrice | intNumberFilter }}</span>
                    <span class="em-goods-price-float">{{ totalPrice | floatNumberFilter }}</span>
                    <span class="em-goods-price-unit">/{{ unit }}</span>
                    <span class="em-goods-price-original">共{{ totalPrice | intNumberFilter }}件</span>
                </div>
            </div>
            <!-- 关闭按钮 -->
            <div class="em-close"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'GoodsTypePanel',
    props: {},
    data() {
        return {
            totalPrice: 99.99, //商品总价
            unit:"个"          //商品单价
        };
    },
    filters: {
        intNumberFilter(value) {
            if (value) {
                return value.toString().split('.')[0];
            }
            return value;
        },
        floatNumberFilter(value) {
            if (value) {
                return '.' + value.toFixed(2).toString().split('.')[1] || '';
            }
            return '.00';
        }
    },
    methods: {}
};
</script>

<style scoped lang="scss">
.em-goods-type-panel {
    width: 100%;
    position: absolute;
    top: 100px;
    left: 0;
    z-index: 99;
    background-color: #fff;
    .em-goods-info {
        display: flex;
        flex-direction: row;
        justify-content: justify-between;
        align-items: center;
        .em-gooods-images {
            width: 100px;
            height: 100px;
            img {
                width: 100%;
                height: 100%;
            }
        }
        .em-goods-details {
            height: 100px;
            .em-goods-name {
                font-weight: 500;
                font-size: 16px;

                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 3;
                -webkit-box-orient: vertical;
            }
            // 价格展示
            .em-goods-price {
                height: 24px;
                display: flex;
                align-items: center;
                color: #e2001f;
                font-size: 16px;
                font-weight: 500;

                img {
                    width: 16px;
                    height: 16px;
                    margin-right: 2px;
                    vertical-align: middle;
                }

                .em-goods-price-int {
                    margin-left: 4px;
                    font-size: 16px;
                }

                .em-goods-price-float {
                    height: 100%;
                    margin-bottom: 2px;
                    display: flex;
                    justify-content: flex-start;
                    align-items: flex-end;
                    font-size: 12px;
                }
            }
        }
    }
}
</style>
