<template>
    <div class="container">
        <div class="van-content">
            <h4 class="cell-title">基础用法</h4>
            <em-count-down :time="time" />

            <h4 class="cell-title">自定义格式</h4>
            <em-count-down :time="time" format="DD 天 HH 时 mm 分 ss 秒" />

            <h4 class="cell-title">毫秒级渲染</h4>
            <em-count-down millisecond :time="time" format="HH:mm:ss:SS" />

            <h4 class="cell-title">自定义样式</h4>
            <em-count-down :time="time">
                <template #default="{ timeData }">
                    <span class="block">{{ timeData.hours }}</span>
                    <span class="colon">:</span>
                    <span class="block">{{ timeData.minutes }}</span>
                    <span class="colon">:</span>
                    <span class="block">{{ timeData.seconds }}</span>
                </template>
            </em-count-down>

            <h4 class="cell-title">手动控制</h4>
            <em-count-down
                ref="countDown"
                millisecond
                :time="3000"
                :auto-start="false"
                format="ss:SSS"
                @finish="finish"
                @change="change"
            />
            <em-grid clickable>
                <em-grid-item text="开始" icon="play-circle-o" @click="start" />
                <em-grid-item text="暂停" icon="pause-circle-o" @click="pause" />
                <em-grid-item text="重置" icon="replay" @click="reset" />
            </em-grid>
        </div>
        <em-toast ref="emToast"></em-toast>
    </div>
</template>

<script lang="ts">
export default {
    name: 'component_circle',
    data() {
        return {
            time: 30 * 60 * 60 * 1000
        };
    },
    methods: {
        start() {
            this.$refs.countDown.start();
        },
        pause() {
            this.$refs.countDown.pause();
        },
        reset() {
            this.$refs.countDown.reset();
        },
        finish() {
            Toast('倒计时结束');
        },
        change(timeData) {
            console.log('change', timeData);
        }
    }
};
</script>
<style>
.van-count-down {
    margin-left: 10px;
}
.colon {
    display: inline-block;
    margin: 0 4px;
    color: #ee0a24;
}
.block {
    display: inline-block;
    width: 22px;
    color: #fff;
    font-size: 12px;
    text-align: center;
    background-color: #ee0a24;
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
    color: rgba(69, 90, 100, 0.6);
    font-size: 14px;
    font-weight: 400;
}
</style>
