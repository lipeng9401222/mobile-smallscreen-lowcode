<template>
    <div class="van-content">
        <div class="example-group">

            <text class="cell-title">基本用法</text>

            <div class="example-card">

                <e-button-m type="primary" @click="show = true">显示遮罩层</e-button-m>

            </div>

        </div>
        <div class="example-group">

            <text class="cell-title">嵌入内容</text>

            <div class="example-card">

                <e-button-m type="primary" @click="show1 = true" >嵌入内容</e-button-m>

            </div>

        </div>

        <e-overlay-m :show="show" @click="show = false"/>
        <e-overlay-m :show="show1" @click="show1 = false">
            <div class="wrapper">
                <scroll-view scroll-y="true" class="scroll-items" style="scroll-behavior: smooth" @click.stop>
                    <div v-for="item in 20" :key="item">item</div>
                </scroll-view>
            </div>
        </e-overlay-m>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const show = ref(false);
const show1 = ref(false);
</script>
<style lang="scss" scoped>
@import '../css/common.scss';
.wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
}

.block {
    width: 120px;
    height: 120px;
    background-color: #fff;
}
.scroll-items {
    background-color: #fff;
}
</style>
