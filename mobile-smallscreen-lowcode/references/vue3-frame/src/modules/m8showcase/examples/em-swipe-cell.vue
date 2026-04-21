<template>
    <view class="container">
        <h4 class="cell-title">基础用法</h4>
        <em-swipe-cell>
            <template #left>
                <em-button type="primary" square>选择</em-button>
            </template>
            <em-cell title="单元格" value="内容" :border="false"></em-cell>
            <template #right>
                <em-button type="danger" square>删除</em-button>
                <em-button type="primary" square>收藏</em-button>
            </template>
        </em-swipe-cell>
        <h4 class="cell-title">自定义内容</h4>
        <em-swipe-cell>
            <em-image width="100" height="100" src="https://img.yzcdn.cn/vant/cat.jpeg" />
            <template #right>
                <em-button type="danger" square>关闭</em-button>
            </template>
        </em-swipe-cell>
        <h4 class="cell-title">异步关闭</h4>
        <em-swipe-cell left-width="100" right-width="200" :before-close="beforeClose" ref="swipecell" @open="onOpen" @close="onClose" @click="onClick">
            <template #left>
                <em-button type="primary" square>选择</em-button>
            </template>
            <em-cell title="单元格" value="内容" :border="false"></em-cell>
            <template #right>
                <em-button type="danger" square>异步关闭</em-button>
            </template>
        </em-swipe-cell>
        <em-button type="primary" square @click="openLeft">打开左侧</em-button>
        <em-toast ref="emToast"></em-toast>
    </view>
</template>
<script lang="ts">
export default {
    name: 'swipeCellDemo',
    methods: {
        // position 为关闭时点击的位置
        // instance 为对应的 SwipeCell 实例
        beforeClose({ position, instance }) {
            switch (position) {
                case 'left':
                case 'cell':
                    instance.close();
                    break;
                case 'right':
                    setTimeout(() => {
                        instance.close();
                    }, 2000);
                    break;
                default:
                    break;
            }
        },
        openLeft() {
            this.$refs.swipecell.open('left');
        },
        onOpen(e) {
            Toast(`触发open事件：${JSON.stringify(e)}`);
        },
        onClose(e) {
            Toast(`触发close事件：${JSON.stringify(e)}`);
        },
        onClick(e) {
            Toast(`触发click事件：${JSON.stringify(e)}`);
        }
    }
};
</script>
<style lang="scss" scoped></style>
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