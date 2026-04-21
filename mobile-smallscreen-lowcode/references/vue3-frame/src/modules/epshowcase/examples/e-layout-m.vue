<template>
    <div class="van-content">
        <text class="cell-title">基础布局</text>
        <div class="flex justify-spacep-between mb-4 flex-wrap gap-4">
            <e-row-m>
                <e-col-m :span="24" tag="ul"><div class="grid-content ep-bg-purple" /></e-col-m>
            </e-row-m>
            <e-row-m>
                <e-col-m :span="12"><div class="grid-content ep-bg-purple" /></e-col-m>
                <e-col-m :span="12"><div class="grid-content ep-bg-purple-light" /></e-col-m>
            </e-row-m>
            <e-row-m>
                <e-col-m :span="8"><div class="grid-content ep-bg-purple" /></e-col-m>
                <e-col-m :span="8"><div class="grid-content ep-bg-purple-light" /></e-col-m>
                <e-col-m :span="8"><div class="grid-content ep-bg-purple" /></e-col-m>
            </e-row-m>
            <e-row-m>
                <e-col-m :span="6"><div class="grid-content ep-bg-purple" /></e-col-m>
                <e-col-m :span="6"><div class="grid-content ep-bg-purple-light" /></e-col-m>
                <e-col-m :span="6"><div class="grid-content ep-bg-purple" /></e-col-m>
                <e-col-m :span="6"><div class="grid-content ep-bg-purple-light" /></e-col-m>
            </e-row-m>
            <e-row-m>
                <e-col-m :span="4"><div class="grid-content ep-bg-purple" /></e-col-m>
                <e-col-m :span="4"><div class="grid-content ep-bg-purple-light" /></e-col-m>
                <e-col-m :span="4"><div class="grid-content ep-bg-purple" /></e-col-m>
                <e-col-m :span="4"><div class="grid-content ep-bg-purple-light" /></e-col-m>
                <e-col-m :span="4"><div class="grid-content ep-bg-purple" /></e-col-m>
                <e-col-m :span="4"><div class="grid-content ep-bg-purple-light" /></e-col-m>
            </e-row-m>
        </div>
        <text class="cell-title">分栏间隔</text>
        <e-row-m :gutter="20">
            <e-col-m :span="6"><div class="grid-content ep-bg-purple" /></e-col-m>
            <e-col-m :span="6"><div class="grid-content ep-bg-purple" /></e-col-m>
            <e-col-m :span="6"><div class="grid-content ep-bg-purple" /></e-col-m>
            <e-col-m :span="6"><div class="grid-content ep-bg-purple" /></e-col-m>
        </e-row-m>
        <text class="cell-title">混合布局</text>
        <e-row-m :gutter="20">
            <e-col-m :span="16"><div class="grid-content ep-bg-purple" /></e-col-m>
            <e-col-m :span="8"><div class="grid-content ep-bg-purple" /></e-col-m>
        </e-row-m>
        <e-row-m :gutter="20">
            <e-col-m :span="8"><div class="grid-content ep-bg-purple" /></e-col-m>
            <e-col-m :span="8"><div class="grid-content ep-bg-purple" /></e-col-m>
            <e-col-m :span="4"><div class="grid-content ep-bg-purple" /></e-col-m>
            <e-col-m :span="4"><div class="grid-content ep-bg-purple" /></e-col-m>
        </e-row-m>
        <e-row-m :gutter="20">
            <e-col-m :span="4"><div class="grid-content ep-bg-purple" /></e-col-m>
            <e-col-m :span="16"><div class="grid-content ep-bg-purple" /></e-col-m>
            <e-col-m :span="4"><div class="grid-content ep-bg-purple" /></e-col-m>
        </e-row-m>
        <text class="cell-title">列偏移</text>
        <div class="flex justify-spacep-between mb-4 flex-wrap gap-4">
            <e-row-m>
                <e-col-m :span="6"><div class="grid-content ep-bg-purple" /></e-col-m>
                <e-col-m :span="6" :offset="6"><div class="grid-content ep-bg-purple" /></e-col-m>
            </e-row-m>
            <e-row-m>
                <e-col-m :span="6" :offset="6"><div class="grid-content ep-bg-purple" /></e-col-m>
                <e-col-m :span="6" :offset="6"><div class="grid-content ep-bg-purple" /></e-col-m>
            </e-row-m>
            <e-row-m>
                <e-col-m :span="12" :offset="6"><div class="grid-content ep-bg-purple" /></e-col-m>
            </e-row-m>
        </div>
        <text class="cell-title">对齐方式</text>
        <div class="flex justify-spacep-between mb-4 flex-wrap gap-4">
            <e-row-m class="row-bg">
                <e-col-m :span="6"><div class="grid-content ep-bg-purple" /></e-col-m>
                <e-col-m :span="6"><div class="grid-content ep-bg-purple-light" /></e-col-m>
                <e-col-m :span="6"><div class="grid-content ep-bg-purple" /></e-col-m>
            </e-row-m>
            <e-row-m class="row-bg" justify="center">
                <e-col-m :span="6"><div class="grid-content ep-bg-purple" /></e-col-m>
                <e-col-m :span="6"><div class="grid-content ep-bg-purple-light" /></e-col-m>
                <e-col-m :span="6"><div class="grid-content ep-bg-purple" /></e-col-m>
            </e-row-m>
            <e-row-m class="row-bg" justify="end">
                <e-col-m :span="6"><div class="grid-content ep-bg-purple" /></e-col-m>
                <e-col-m :span="6"><div class="grid-content ep-bg-purple-light" /></e-col-m>
                <e-col-m :span="6"><div class="grid-content ep-bg-purple" /></e-col-m>
            </e-row-m>
            <e-row-m class="row-bg" justify="space-between">
                <e-col-m :span="6"><div class="grid-content ep-bg-purple" /></e-col-m>
                <e-col-m :span="6"><div class="grid-content ep-bg-purple-light" /></e-col-m>
                <e-col-m :span="6"><div class="grid-content ep-bg-purple" /></e-col-m>
            </e-row-m>
            <e-row-m class="row-bg" justify="space-around">
                <e-col-m :span="6"><div class="grid-content ep-bg-purple" /></e-col-m>
                <e-col-m :span="6"><div class="grid-content ep-bg-purple-light" /></e-col-m>
                <e-col-m :span="6"><div class="grid-content ep-bg-purple" /></e-col-m>
            </e-row-m>
            <e-row-m class="row-bg" justify="space-evenly">
                <e-col-m :span="6"><div class="grid-content ep-bg-purple" /></e-col-m>
                <e-col-m :span="6"><div class="grid-content ep-bg-purple-light" /></e-col-m>
                <e-col-m :span="6"><div class="grid-content ep-bg-purple" /></e-col-m>
            </e-row-m>
        </div>
        <text class="cell-title">响应式布局</text>
        <e-row-m :gutter="10">
            <e-col-m :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content ep-bg-purple" /></e-col-m>
            <e-col-m :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content ep-bg-purple-light" /></e-col-m>
            <e-col-m :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content ep-bg-purple" /></e-col-m>
            <e-col-m :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content ep-bg-purple-light" /></e-col-m>
        </e-row-m>
    </div>
</template>
<script lang="ts" setup></script>
<style lang="scss" scoped>
@import '../css/common.scss';
.ep-row {
    margin-bottom: 20px;
}
.ep-row:last-child {
    margin-bottom: 0;
}
.ep-col {
    border-radius: 4px;
}

.grid-content {
    border-radius: 4px;
    min-height: 36px;
}
.row-bg {
    height: 46px;
}
.ep-bg-purple-dark {
    background: #99a9bf;
}

.ep-bg-purple {
    background: #d3dce6;
}

.ep-bg-purple-light {
    background: #e5e9f2;
}
</style>
