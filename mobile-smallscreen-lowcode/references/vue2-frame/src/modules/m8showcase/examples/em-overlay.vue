<template>
    <div class="container">
        <div class="em-content">
            <text class="cell-title">基础用法</text>
            <em-button type="primary" @click="show1 = true">显示遮罩层</em-button>
            <text class="cell-title">嵌入内容</text>
            <em-button type="primary" @click="show2 = true">嵌入内容</em-button>
        </div>
        <em-overlay :show="show1" @click="show1 = false"></em-overlay>
        <em-overlay class="emOverlay" :show="show2" @click="show2 = false">
            <div class="wrapper">
                <!-- #ifdef APP-PLUS -->
                <scroller class="scroll-items">
                    <!-- #endif -->
                    <!-- #ifndef APP-PLUS -->
                    <scroll-view @click.stop scroll-y="true" class="scroll-items" style="scroll-behavior: smooth">
                        <!-- #endif -->
                        <div v-for="(item, index) in 20" :key="index"><text>item</text></div>
                        <!-- #ifndef APP-PLUS -->
                    </scroll-view>
                    <!-- #endif -->
                    <!-- #ifdef APP-PLUS -->
                </scroller>
                <!-- #endif -->
            </div>
        </em-overlay>
    </div>
</template>

<script>
export default {
    name: 'Overlay',
    data() {
        return {
            // 是否展示蒙版
            show1: false,
            show2: false
        };
    }
};
</script>

<style scoped>
.em-button {
    margin: 0 0 0 10px;
}

.emOverlay{
    /* #ifndef APP-PLUS */
    display: flex;
    /* #endif */
    align-items: center;
    justify-content: center;
}

.wrapper {
    /* #ifndef APP-PLUS */
    display: flex;
    /* #endif */
    align-items: center;
    justify-content: center;
    /* #ifndef APP-PLUS */
    height: 100%;
    /* #endif */
}

.scroll-items {
    width: 120px;
    height: 120px;
    background-color: #fff;
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
