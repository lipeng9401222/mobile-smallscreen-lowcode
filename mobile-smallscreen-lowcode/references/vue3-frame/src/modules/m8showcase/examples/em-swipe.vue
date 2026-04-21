<template>
    <div class="container demo-swipe">
        <!-- #ifdef APP-PLUS -->
        <scroller class="scroller">
            <!-- #endif -->
            <text class="cell-title">基础用法</text>
            <em-swipe
                class="swipeStyle"
                ref="swipe"
                :autoplay="3000"
                indicator-color="white"
                duration="2000"
                :touchable="true"
            >
                <em-swipe-item class="odd" custom-class="odd"><text class="txt">1</text></em-swipe-item>
                <em-swipe-item class="even" custom-class="even"><text class="txt">2</text></em-swipe-item>
                <em-swipe-item class="odd" custom-class="odd"><text class="txt">3</text></em-swipe-item>
                <em-swipe-item class="even" custom-class="even"><text class="txt">4</text></em-swipe-item>
            </em-swipe>
            <text class="cell-title">图片轮播</text>
            <em-swipe class="swipeStyle" :autoplay="3000" @item-click="onItemClick">
                <em-swipe-item v-for="(image, index) in images" :key="index">
                    <image class="img" :src="image" />
                </em-swipe-item>
            </em-swipe>
            <text class="cell-title">监听 change 事件</text>
            <em-swipe class="swipeStyle" @change="onChange" lazy-render initial-swipe="2">
                <em-swipe-item class="odd" custom-class="odd"><text class="txt">1</text></em-swipe-item>
                <em-swipe-item class="even" custom-class="even"><text class="txt">2</text></em-swipe-item>
                <em-swipe-item class="odd" custom-class="odd"><text class="txt">3</text></em-swipe-item>
                <em-swipe-item class="even" custom-class="even"><text class="txt">4</text></em-swipe-item>
            </em-swipe>
            <text class="cell-title">纵向滚动</text>
            <em-swipe class="swipeStyle demo-swipe--vertical" custom-style="height: 200px" vertical>
                <em-swipe-item class="odd" custom-class="odd"><text class="txt">1</text></em-swipe-item>
                <em-swipe-item class="even" custom-class="even"><text class="txt">2</text></em-swipe-item>
                <em-swipe-item class="odd" custom-class="odd"><text class="txt">3</text></em-swipe-item>
                <em-swipe-item class="even" custom-class="even"><text class="txt">4</text></em-swipe-item>
            </em-swipe>
            <text class="cell-title">自定义滑块大小</text>
            <em-swipe :loop="false" class="swipeStyle" :width="300">
                <em-swipe-item class="odd" custom-class="odd"><text class="txt txt--zdy">1</text></em-swipe-item>
                <em-swipe-item class="even" custom-class="even"><text class="txt txt--zdy">2</text></em-swipe-item>
                <em-swipe-item class="odd" custom-class="odd"><text class="txt txt--zdy">3</text></em-swipe-item>
                <em-swipe-item class="even" custom-class="even"><text class="txt txt--zdy">4</text></em-swipe-item>
            </em-swipe>
            <text class="cell-title">自定义指示器</text>
            <em-swipe class="swipeStyle" @change="onChange2">
                <em-swipe-item class="odd" custom-class="odd"><text class="txt">1</text></em-swipe-item>
                <em-swipe-item class="even" custom-class="even"><text class="txt">2</text></em-swipe-item>
                <em-swipe-item class="odd" custom-class="odd"><text class="txt">3</text></em-swipe-item>
                <em-swipe-item class="even" custom-class="even"><text class="txt">4</text></em-swipe-item>
                <template #indicator>
                    <text class="custom-indicator">{{ current + 1 }}/4</text>
                </template>
            </em-swipe>
            <!-- #ifdef APP-PLUS -->
        </scroller>
        <!-- #endif -->
        <em-toast ref="emToast"></em-toast>
    </div>
</template>
<script lang="ts">
export default {
    name: 'swipeDemo',
    data() {
        return {
            current: 0,
            images: [
                'https://img01.yzcdn.cn/vant/apple-1.jpg',
                'https://img01.yzcdn.cn/vant/apple-2.jpg',
                'https://img01.yzcdn.cn/vant/apple-3.jpg',
                'https://img01.yzcdn.cn/vant/apple-4.jpg'
            ]
        };
    },
    mounted() {
        Toast.setDefaultOptions({
            context: this
        });
    },
    methods: {
        onChange(index) {
            Toast(`当前 Swipe 索引：${index}`);
        },
        onChange2(index) {
            this.current = index;
        },
        onItemClick(index) {
            Toast(`点击索引为${index}的图片`);
        }
    }
};
</script>
<style lang="scss" scoped>
// #ifndef APP-PLUS
.swipeStyle {
    width: 100%;
}

.txt {
    width: 100%;
}
::v-deep .demo-swipe {
    .em-swipe-item {
        color: #fff;
        font-size: 20px;
        line-height: 150px;
        text-align: center;

        &.even {
            background-color: #39a9ed;
        }
        &.odd {
            background-color: #66c6f2;
        }
    }
    &--vertical .em-swipe-item {
        line-height: 200px;
    }
}
// #endif

.swipeStyle {
    height: 200px;
}
.txt {
    display: inline-block;
    line-height: 200px;
    color: #fff;
    font-size: 20px;
    text-align: center;
}

::v-deep .even {
    background-color: #39a9ed;
}
::v-deep .odd {
    background-color: #66c6f2;
}

.img {
    width: 100%;
    height: 200px;
}

.custom-indicator {
    position: absolute;
    right: 5px;
    bottom: 5px;
    padding: 2px 5px;
    color: #fff;
    font-size: 12px;
    background: rgba(0, 0, 0, 0.1);
}
// #ifdef APP-PLUS
.swipeStyle {
    width: 375px;
}

.txt {
    width: 375px;
}

.txt--zdy {
    width: 300px;
}

.img {
    width: 375px;
}
.scroller {
    height: 700px;
}
// #endif
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
