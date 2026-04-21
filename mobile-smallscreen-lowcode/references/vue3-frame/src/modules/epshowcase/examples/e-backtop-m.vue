<template>
    <div class="van-content">
        <div class="example-group">
            <text class="cell-title">基础用法</text>
            <div class="example-card">
                <div class="example-desc">向下滑动，可显示右下角回到顶部按钮</div>
                <e-backtop-m :right="100" :bottom="100" :visibilityHeight="10" @click="handleClick" />
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">自定义按钮内容</text>
            <div class="example-card">
                <div class="example-desc">向下滑动，可显示UP按钮</div>
                <e-backtop-m :right="100" :bottom="200" :visibilityHeight="10" @click="handleClick">
                    <div style="line-height: 20px; width: 20px; background-color: #fff; text-align: center; color: #1989fa;">
                        UP
                    </div>
                </e-backtop-m>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">target指定容器</text>
            <div class="example-card">
                <div class="example-desc">在蓝色区域内滑动，可显示右下角回到顶部按钮</div>
                <div class="scroll-container">
                    <div class="cellitems" v-for="item in 80" :key="item">
                        {{ `文字第 ${item} 行` }}
                    </div>
                </div>
                <e-backtop-m target=".scroll-container" :right="100" :bottom="300" :visibilityHeight="10" @click="handleClick" />
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
const handleClick = (MouseEvent) => {
    console.log('click backtop', MouseEvent)
}
</script>
<style scoped lang='scss'>
@import '../css/common.scss';

.scroll-container {
    margin-top: 10px;
    width: 100%;
    height: 400px;
    background-color: #d1d1d2;
    overflow-y: scroll;
}

.cellitems {
    text-align: center;
    line-height: 30px;
    background-color: #bdd4fa;
}
</style>
