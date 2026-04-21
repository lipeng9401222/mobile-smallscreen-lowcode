<template>
    <div class="container">
        <div class="van-content">
            <h4 class="cell-title">基础用法</h4>
            <em-divider :hairline="false" />

            <h4 class="cell-title">展示文字</h4>
            <em-divider>文字</em-divider>

            <h4 class="cell-title">内容位置</h4>
            <em-divider content-position="left">文字</em-divider>
            <em-divider content-position="right">文字</em-divider>

            <h4 class="cell-title">虚线</h4>
            <em-divider dashed>文字</em-divider>

            <h4 class="cell-title">自定义样式</h4>
            <em-divider custom-style="color: #1989fa; border-color: #1989fa;padding: 0 16px;">文字</em-divider>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: 'component_circle'
};
</script>
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