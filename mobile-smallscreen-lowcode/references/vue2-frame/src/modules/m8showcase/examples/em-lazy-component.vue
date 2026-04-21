<template>
    <div class="container">
        <div class="van-content">
            <h4 class="cell-title">基础用法</h4>
            <em-lazy-component>
                <img v-for="img in imageList" :src="img" :key="img" />
            </em-lazy-component>

            <h4 class="cell-title">背景图懒加载</h4>
            <em-lazy-component
                v-for="img in imageList"
                :background-image="img"
                :key="img"
                custom-style="height: 250px; width: 100%; margin-bottom: 20px; background-size: 100%;"
            >
                内容
            </em-lazy-component>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Lazyload',
    data() {
        return {
            imageList: [
                'https://img.yzcdn.cn/vant/apple-1.jpg',
                'https://img.yzcdn.cn/vant/apple-2.jpg',
                'https://img.yzcdn.cn/vant/apple-3.jpg',
                'https://img.yzcdn.cn/vant/apple-4.jpg'
            ]
        };
    },
    // #ifdef MP-WEIXIN || MP-ALIPAY
    onPageScroll() {}
    // #endif
};
</script>

<style lang="scss" scoped>
.van-content {
    background-color: #f7f8fa;
    padding-left: 10px;
    padding-right: 10px;

    img,
    .bg-img {
        padding: 15px;
        width: 100%;
        height: 250px;
        margin: 10px 0 0;
        background-color: white;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
        background-size: 315px 250px;
        background-position: 15px;
        background-repeat: no-repeat;
        box-sizing: border-box;
    }
}
</style>
<style>
/* custom style */
.cell-title:first-child {
    padding-top: 10px;
}

.cell-title {
    padding-top: 30px;
    padding-bottom: 10px;
    padding-left: 10px;
    color: rgba(69, 90, 100, .6);
    font-size: 14px;
    font-weight: 400;
}
</style>