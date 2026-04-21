<template>
    <div>
        <view class="cell-title">基础用法</view>
        <em-steps :active="active">
            <em-step>买家下单</em-step>
            <em-step>商家接单</em-step>
            <em-step>买家提货</em-step>
            <em-step>交易完成</em-step>
        </em-steps>
        <em-button custom-class="demo-margin-left" @click="nextStep">下一步</em-button>

        <view class="cell-title">自定义样式</view>
        <em-steps :active="active" active-icon="success" active-color="#38f" inactive-color="#f00">
            <em-step>买家下单</em-step>
            <em-step>商家接单</em-step>
            <em-step>买家提货</em-step>
            <em-step>交易完成</em-step>
        </em-steps>

        <view class="cell-title">自定义图标</view>
        <em-steps :active="active" active-icon="checked" inactive-icon="todo-list" finish-icon="smile-o">
            <em-step>买家下单</em-step>
            <em-step>商家接单</em-step>
            <em-step>买家提货</em-step>
            <em-step>交易完成</em-step>
        </em-steps>

        <view class="cell-title">竖向步骤条</view>
        <em-steps direction="vertical" :active="active">
            <em-step>
                <h5>【城市】物流状态1</h5>
                <p>2016-07-12 12:40</p>
            </em-step>
            <em-step>
                <h5>【城市】物流状态2</h5>
                <p>2016-07-11 10:00</p>
            </em-step>
            <em-step>
                <h5>【城市】物流状态3</h5>
                <p>2016-07-11 10:00</p>
            </em-step>
            <em-step>
                <h5>快件已发货</h5>
                <p>2016-07-10 09:30</p>
            </em-step>
        </em-steps>
        <view class="cell-title">slot插槽</view>
        <em-steps :active="active">
            <em-step>
                <template #inactiveIcon>
                    <em-icon name="stop-circle-o"></em-icon>
                </template>
                <template #activIcon>
                    <em-icon name="play-circle-o"></em-icon>
                </template>
                <template #finishIcon>
                    <em-icon name="pause-circle-o"></em-icon>
                </template>
                <h5>物流状态1</h5>
            </em-step>
            <em-step>
                <template #inactiveIcon>
                    <em-icon name="stop-circle-o"></em-icon>
                </template>
                <template #activIcon>
                    <em-icon name="play-circle-o"></em-icon>
                </template>
                <template #finishIcon>
                    <em-icon name="pause-circle-o"></em-icon>
                </template>
                <h5>物流状态2</h5>
            </em-step>
            <em-step>
                <template #inactiveIcon>
                    <em-icon name="stop-circle-o"></em-icon>
                </template>
                <template #activIcon>
                    <em-icon name="play-circle-o"></em-icon>
                </template>
                <template #finishIcon>
                    <em-icon name="pause-circle-o"></em-icon>
                </template>
                <h5>物流状态3</h5>
            </em-step>
            <em-step>
                <template #inactiveIcon>
                    <em-icon name="stop-circle-o"></em-icon>
                </template>
                <template #activIcon>
                    <em-icon name="play-circle-o"></em-icon>
                </template>
                <template #finishIcon>
                    <em-icon name="pause-circle-o"></em-icon>
                </template>
                <h5>快件已发货</h5>
            </em-step>
        </em-steps>
    </div>
</template>
<script lang="ts">
export default {
    data() {
        return {
            active: 1
        };
    },
    created() {
        this.active = 1;
    },
    methods: {
        nextStep() {
            this.active = ++this.active % 4;
        },
        onClick(event) {
            console.log(event);
        }
    }
};
</script>
<style>
::v-deep p {
    font-size: 12px;
}
::v-deep h5 {
    font-size: 12px;
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