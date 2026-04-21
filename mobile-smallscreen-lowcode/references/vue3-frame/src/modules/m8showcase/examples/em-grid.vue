<template>
    <div class="container">
        <!-- #ifdef APP-PLUS -->
        <scroller class="scroller">
            <!-- #endif -->
            <div class="van-content">
                <text class="cell-title">基础用法</text>
                <em-grid>
                    <em-grid-item icon="photo-o" text="文字" />
                    <em-grid-item icon="photo-o" text="文字" />
                    <em-grid-item icon="photo-o" text="文字" />
                    <em-grid-item icon="photo-o" text="文字" />
                </em-grid>

                <text class="cell-title">自定义列数</text>
                <em-grid :column-num="3">
                    <em-grid-item v-for="value in 6" :key="value" icon="photo-o" text="文字" />
                </em-grid>

                <text class="cell-title">自定义内容</text>
                <em-grid :border="false" :column-num="3">
                    <em-grid-item>
                        <em-image width="93px" height="73px" src="https://img.yzcdn.cn/vant/apple-1.jpg" />
                    </em-grid-item>
                    <em-grid-item>
                        <em-image width="93px" height="73px" src="https://img.yzcdn.cn/vant/apple-2.jpg" />
                    </em-grid-item>
                    <em-grid-item>
                        <em-image width="93px" height="73px" src="https://img.yzcdn.cn/vant/apple-3.jpg" />
                    </em-grid-item>
                </em-grid>

                <text class="cell-title">正方形格子</text>
                <em-grid square>
                    <em-grid-item v-for="value in 8" :key="value" icon="photo-o" text="文字" />
                </em-grid>

                <text class="cell-title">格子间距</text>
                <em-grid :gutter="10">
                    <em-grid-item v-for="value in 8" :key="value" icon="photo-o" text="文字" />
                </em-grid>

                <text class="cell-title">内容横排</text>
                <em-grid direction="horizontal" :column-num="3">
                    <em-grid-item icon="photo-o" text="文字" />
                    <em-grid-item icon="photo-o" text="文字" />
                    <em-grid-item icon="photo-o" text="文字" />
                </em-grid>

                <text class="cell-title">页面导航</text>
                <em-grid clickable :column-num="2">
                    <em-grid-item icon="home-o" text="路由跳转" to="./em-cell" />
                    <em-grid-item icon="search" text="URL 跳转" url="./em-loading" />
                </em-grid>

                <text class="cell-title">徽标提示</text>
                <em-grid :column-num="2">
                    <em-grid-item icon="home-o" text="文字" dot @click="onClick" />
                    <em-grid-item icon="search" text="文字" badge="99+" />
                </em-grid>
            </div>
            <!-- #ifdef APP-PLUS -->
        </scroller>
        <!-- #endif -->
    </div>
</template>

<script lang="ts">
export default {
    name: 'GoodsAction',
    methods: {
        onClick(e) {
            console.log(e);
        }
    }
};
</script>

<style scoped>
.van-content {
    background-color: #f7f8fa;
}

/* #ifdef APP-PLUS */
.scroller {
    height: 700px;
}
/* #endif */
</style>
<style>
/* custom style */
.cell-title:first-child {
    padding-top: 10px;
}

.cell-title {
    /* #ifndef APP-PLUS */
    display: block;
    /* #endif */
    padding-top: 30px;
    padding-bottom: 10px;
    padding-left: 10px;
    color: rgba(69, 90, 100, 0.6);
    font-size: 14px;
    font-weight: 400;
}
</style>
