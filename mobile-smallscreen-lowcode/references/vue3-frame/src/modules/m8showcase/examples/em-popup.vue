<template>
    <div class="container" :class="[show ? 'scrollforbid' : '']">
        <text class="cell-title">基础用法</text>
        <em-cell title="展示弹出层" @click="show = true" is-link></em-cell>

        <text class="cell-title">弹出位置</text>
        <em-cell-group>
            <em-cell title="顶部弹出" @click="showTop = true" is-link></em-cell>
            <em-cell title="底部弹出" @click="showBottom = true" is-link></em-cell>
            <em-cell title="左侧弹出" @click="showLeft = true" is-link></em-cell>
            <em-cell title="右侧弹出" @click="showRight = true" is-link></em-cell>
        </em-cell-group>

        <text class="cell-title">关闭图标</text>
        <em-cell-group>
            <em-cell title="关闭图标" @click="showClose = true" is-link></em-cell>
            <em-cell title="自定义图标" @click="showZdy = true" is-link></em-cell>
            <em-cell title="图标位置" @click="showIconP = true" is-link></em-cell>
        </em-cell-group>

        <text class="cell-title">圆角弹窗</text>
        <em-cell title="圆角弹窗" @click="showRound = true" is-link></em-cell>
        <em-popup
            v-model="show"
            round
            closeable
            @before-enter="onBeforeEnter"
            @enter="onEnter"
            @after-enter="onAfterEnter"
            @before-leave="onBeforeLeave"
            @leave="onLeave"
            @after-leave="onAfterLeave"
            custom-style="width: 50%; height: 80%; textAlign: center; lineHeight:100px;"
        >
            <!-- #ifdef APP-PLUS -->
            <scroller class="scroller">
                <!-- #endif -->
                <div class="wrapper">
                    <text v-for="(item, index) in 8" :key="item" class="text">{{ index }}、item</text>
                </div>
                <!-- #ifdef APP-PLUS -->
            </scroller>
            <!-- #endif -->
        </em-popup>
        <em-popup v-model="showTop" position="top">
            <div class="content" :style="{ width: viewWidth ? viewWidth + 'px' : '' }"></div>
        </em-popup>
        <em-popup v-model="showBottom" position="bottom">
            <div class="content" :style="{ width: viewWidth ? viewWidth + 'px' : '' }"></div>
        </em-popup>
        <em-popup v-model="showLeft" position="left" custom-style="width:30%;height: 100%;">
            <div class="contentW" :style="{ height: viewHeight ? viewHeight + 'px' : '' }"></div>
        </em-popup>
        <em-popup v-model="showRight" position="right" custom-style="width:30%;height: 100%;">
            <div class="contentW" :style="{ height: viewHeight ? viewHeight + 'px' : '' }"></div>
        </em-popup>
        <em-popup
            v-model="showClose"
            closeable
            position="bottom"
            @click-close-icon="onClickCloseIcon"
            @click-overlay="onClickOverlay"
        >
            <div class="content" :style="{ width: viewWidth ? viewWidth + 'px' : '' }"></div>
        </em-popup>
        <em-popup v-model="showZdy" closeable :close-icon="closeIcon" position="bottom" custom-style="height:30%">
            <div class="content" :style="{ width: viewWidth ? viewWidth + 'px' : '' }"></div>
        </em-popup>
        <em-popup
            v-model="showIconP"
            closeable
            close-icon-position="top-left"
            position="bottom"
            custom-style="height:30%"
        >
            <div class="content" :style="{ width: viewWidth ? viewWidth + 'px' : '' }"></div>
        </em-popup>
        <em-popup v-model="showRound" round position="bottom" custom-style="height:30%">
            <div class="content" :style="{width: viewWidth ? viewWidth + 'px' : ''}"></div>
        </em-popup>
        <em-toast ref="emToast"></em-toast>
    </div>
</template>

<script lang="ts">
export default {
    name: 'Popup',
    data() {
        return {
            closeIcon: 'https://b.yzcdn.cn/vant/icon-demo-1126.png',
            show: false,
            showTop: false,
            showBottom: false,
            showLeft: false,
            showRight: false,
            showClose: false,
            showZdy: false,
            showIconP: false,
            showRound: false,
            showBody: false,
            viewWidth: 0,
            viewHeight: 0
        };
    },
    created() {
        const that = this;

        // #ifdef APP-PLUS
        const dom = weex.requireModule('dom');

        dom.getComponentRect('viewport', function (res) {
            that.viewWidth = res.size.width;
            that.viewHeight = res.size.height;
        });
        // #endif
    },
    mounted() {
        Toast.setDefaultOptions({
            context: this
        });
    },
    methods: {
        onClickCloseIcon() {
            Toast('关闭');
        },
        onClickOverlay() {
            Toast('关闭');
        },
        onBeforeEnter() {
            console.log('---onBeforeEnter---');
            Toast('---onBeforeEnter---');
        },
        onEnter() {
            console.log('---onEnter---');

            Toast('---onEnter---');
        },
        onBeforeLeave() {
            console.log('---onBeforeLeave---');

            Toast('---onBeforeLeave---');
        },
        onLeave() {
            console.log('---onLeave---');

            Toast('---onLeave---');
        },
        onAfterEnter() {
            console.log('---onAfterEnter---');

            Toast('---onAfterEnter---');
        },
        onAfterLeave() {
            console.log('---onAfterLeave---');

            Toast('---onAfterLeave---');
        }
    }
};
</script>

<style scoped>
.container {
    /* #ifndef APP-PLUS */
    box-sizing: border-box;
    /* #endif */
    padding: 10px;
    /* height: 100%; */
}

.scrollforbid {
    overflow: hidden;
}

.scroller {
    width: 188px;
    height: 534px;
}

.wrapper {
    /* #ifndef APP-PLUS */
    display: flex;
    /* #endif */
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.content {
    height: 200px;
}

.contentW {
    width: 113px;
}

.text {
    /* #ifndef APP-PLUS */
    display: block;
    /* #endif */
    line-height: 100px;
}
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
