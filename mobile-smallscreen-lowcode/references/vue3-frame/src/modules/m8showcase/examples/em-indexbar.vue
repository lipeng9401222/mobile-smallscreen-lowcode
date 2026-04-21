<template>
    <view class="container">
        <em-tabs v-model="active">
            <em-tab name="1" title="基础用法">
                <em-index-bar>
                    <div v-for="(item, i) in list" :key="i">
                        <em-index-anchor :index="item.anchor" />
                        <em-cell v-for="(title, k) in item.title" :key="k" :title="title" />
                    </div>
                </em-index-bar>
            </em-tab>
            <em-tab name="2" title="自定义索引">
                <em-index-bar :index-list="indexList" ref="indexbar">
                    <em-index-anchor index="1">标题1</em-index-anchor>
                    <em-cell title="文本" />
                    <em-cell title="文本" />
                    <em-cell title="文本" />
                    <em-index-anchor index="2">标题2</em-index-anchor>
                    <em-cell title="文本" />
                    <em-cell title="文本" />
                    <em-cell title="文本" />
                    <em-index-anchor index="3">标题3</em-index-anchor>
                    <em-cell title="文本" />
                    <em-cell title="文本" />
                    <em-cell title="文本" />
                    <em-index-anchor index="4">标题4</em-index-anchor>
                    <em-cell title="文本" />
                    <em-cell title="文本" />
                    <em-cell title="文本" />
                    <em-index-anchor index="5">标题5</em-index-anchor>
                    <em-cell title="文本" />
                    <em-cell title="文本" />
                    <em-cell title="文本" />
                    <em-index-anchor index="6">标题6</em-index-anchor>
                    <em-cell title="文本" />
                    <em-cell title="文本" />
                    <em-cell title="文本" />
                    <em-index-anchor index="7">标题7</em-index-anchor>
                    <em-cell title="文本" />
                    <em-cell title="文本" />
                    <em-cell title="文本" />
                </em-index-bar>
            </em-tab>
        </em-tabs>
    </view>
</template>

<script lang="ts">
export default {
    data() {
        return {
            list: [
                {
                    anchor: 'A',
                    title: ['文本', '文本', '文本']
                },
                {
                    anchor: 'B',
                    title: ['文本', '文本', '文本']
                },
                {
                    anchor: 'C',
                    title: ['文本', '文本', '文本']
                },
                {
                    anchor: 'D',
                    title: ['文本', '文本', '文本']
                },
                {
                    anchor: 'E',
                    title: ['文本', '文本', '文本']
                },
                {
                    anchor: 'F',
                    title: ['文本', '文本', '文本']
                },
                {
                    anchor: 'G',
                    title: ['文本', '文本', '文本']
                },
                {
                    anchor: 'H',
                    title: ['文本', '文本', '文本']
                },
                {
                    anchor: 'I',
                    title: ['文本', '文本', '文本']
                },
                {
                    anchor: 'J',
                    title: ['文本', '文本', '文本']
                },
                {
                    anchor: 'K',
                    title: ['文本', '文本', '文本']
                },
                {
                    anchor: 'L',
                    title: ['文本', '文本', '文本']
                },
                {
                    anchor: 'M',
                    title: ['文本', '文本', '文本']
                },
                {
                    anchor: 'N',
                    title: ['文本', '文本', '文本']
                },
                {
                    anchor: 'O',
                    title: ['文本', '文本', '文本']
                },
                {
                    anchor: 'P',
                    title: ['文本', '文本', '文本']
                },
                {
                    anchor: 'Q',
                    title: ['文本', '文本', '文本']
                },
                {
                    anchor: 'R',
                    title: ['文本', '文本', '文本']
                },
                {
                    anchor: 'S',
                    title: ['文本', '文本', '文本']
                },
                {
                    anchor: 'T',
                    title: ['文本', '文本', '文本']
                },
                {
                    anchor: 'U',
                    title: ['文本', '文本', '文本']
                },
                {
                    anchor: 'V',
                    title: ['文本', '文本', '文本']
                },
                {
                    anchor: 'W',
                    title: ['文本', '文本', '文本']
                },
                {
                    anchor: 'X',
                    title: ['文本', '文本', '文本']
                },
                {
                    anchor: 'Y',
                    title: ['文本', '文本', '文本']
                },
                {
                    anchor: 'Z',
                    title: ['文本', '文本', '文本']
                }
            ],
            indexList: ['1', 2, 3, 4, 5, 6, 7, 8, 9, 10],
            active: '1'
        };
    },
    watch: {
        active(val){
            if(val){
                this.$refs.indexbar && this.$refs.indexbar.resize();
            }
        }
    },
    methods: {
        select(index) {
            console.log('select', index);
        },
        change(index) {
            console.log('change', index);
        },
        onClick() {
            this.$refs.bar1.scrollTo('9');
        },
        onClick2() {
            this.$refs.bar2.scrollTo(1);
        }
    },
    // #ifdef MP-WEIXIN || MP-QQ || MP-ALIPAY
    // 微信/支付宝小程序下的滚动事件,如不加,则在微信/支付宝环境下不可滚动
    onPageScroll() {}
    // #endif
};
</script>

<style lang="scss" scoped>
.container {
    height: 100vh;
    overflow: hidden;
    .list {
        display: flex;
        flex-direction: row;
        padding: 8px 0px;
        align-items: center;
        font-size: 16px;
        margin-left: 10px;
        color: #303133;
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