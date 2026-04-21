<template>
    <div class="content">
        <text class="msg">{{ message }}</text>
        <text class="msg">当前数值：{{ count }}</text>
        <div class="btn" @click="onClick"><text class="btn-txt">返回上一页</text></div>
    </div>
</template>
<script>
import mixin from './mixin';
import { mapState } from 'vuex';

export default {
    mixins: [mixin],
    data() {
        return {
            message: '我是详情页'
        };
    },
    computed: {
        ...mapState('weexapp', ['count'])
    },
    methods: {
        onClick() {
            this.pop();
        }
    }
};
</script>
<style>
@import './css/common.css';

.content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.msg {
    font-size: 16px;
    font-weight: bold;
    line-height: 18px;
}
</style>
