<template>
    <div class="container">
        <div class="van-content">
            <h4 class="cell-title">基础用法</h4>
            <em-badge :content="5">
                <div class="child" />
            </em-badge>
            <em-badge :content="10">
                <div class="child" />
            </em-badge>
            <em-badge content="Hot">
                <div class="child" />
            </em-badge>
            <em-badge dot>
                <div class="child" />
            </em-badge>

            <h4 class="cell-title">最大值</h4>
            <em-badge :content="20" max="9">
                <div class="child" />
            </em-badge>
            <em-badge :content="50" max="20">
                <div class="child" />
            </em-badge>
            <em-badge :content="200" max="99">
                <div class="child" />
            </em-badge>

            <h4 class="cell-title">自定义颜色</h4>
            <em-badge :content="5" color="#1989fa">
                <div class="child" />
            </em-badge>
            <em-badge :content="10" color="#1989fa">
                <div class="child" />
            </em-badge>
            <em-badge dot color="#1989fa">
                <div class="child" />
            </em-badge>

            <h4 class="cell-title">自定义徽标内容</h4>
            <em-badge>
                <div class="child" />
                <template #content>
                    <em-icon name="success" class="badge-icon" />
                </template>
            </em-badge>
            <em-badge>
                <div class="child" />
                <template #content>
                    <em-icon name="cross" class="badge-icon" />
                </template>
            </em-badge>
            <em-badge>
                <div class="child" />
                <template #content>
                    <em-icon name="down" class="badge-icon" />
                </template>
            </em-badge>

            <h4 class="cell-title">独立展示</h4>
            <em-badge class="mrg10" :content="20" />
            <em-badge :content="200" max="99" />
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: 'Badge'
};
</script>

<style scoped>
::v-deep .em-badge-wrapper{
    margin-right: 20px;
    margin-left: 10px;
}
.child {
    width: 40px;
    height: 40px;
    background: #f2f3f5;
    border-radius: 4px;
}

.badge-icon {
    display: block;
    font-size: 10px;
    line-height: 16px;
}

.mrg10{
    margin-right: 30px;
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