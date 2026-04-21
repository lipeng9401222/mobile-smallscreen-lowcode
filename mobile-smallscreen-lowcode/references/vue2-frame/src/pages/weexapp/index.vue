<template>
    <div class="content">
        <text class="header">weexapp首页</text>
        <div class="btn" @click="increment">
            <text class="btn-txt">点击加一，当前数值：{{ count }}</text>
        </div>
        <div class="btn" @click="jump">
            <text class="btn-txt">跳转详情页</text>
        </div>
        <view class="list-wrapper">
            <view v-for="(num, i) in lists" :key="i" @click="onClick(num)">
                <text class="txt">{{ num }}</text>
            </view>
        </view>
        <!-- #ifdef APP-PLUS -->
        <!-- weex端独有的组件需要条件编译 -->
        <web class="web" src="https://www.baidu.com"></web>
        <!-- #endif-->
    </div>
</template>

<script>
import mixin from './mixin';
import { mapState, mapMutations } from 'vuex';

export default {
    mixins: [mixin],
    data() {
        return {
            lists: ['A', 'B', 'C', 'D', 'E']
        };
    },
    computed: {
        ...mapState('weexapp', ['count'])
    },
    methods: {
        ...mapMutations('weexapp', ['increment']),
        onClick(num) {
            ejs.ui.toast('点击了' + num);
        },
        jump() {
            this.push('./detail');
        }
    }
};
</script>
<style>
@import './css/common.css';
.header {
    font-size: 32px;
    font-weight: bold;
}

.list-wrapper {
    padding: 25px;
}

.txt {
    font-size: 16px;
    color: red;
}

.web{
    flex: 1;
    height: 300px;
}
</style>
