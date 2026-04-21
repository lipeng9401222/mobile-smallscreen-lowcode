<template>
    <div class="van-content">
        <div class="example-group">
            <text class="cell-title">默认情况</text>
            <div class="example-card">
                <e-affix-m :offset="40">
                    <e-button-m type="primary">Offset top 40px</e-button-m>
                </e-affix-m>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">目标容器</text>
            <div class="example-card">
                <div class="affix-container">
                    <e-affix-m target=".affix-container" :offset="80">
                        <template #default>
                            <e-button-m type="primary">Target container</e-button-m>
                        </template>
                    </e-affix-m>
                </div>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">固定位置</text>
            <div class="example-card">
                <div class="affix-container">
                    <e-affix-m position="bottom" :offset="20">
                        <e-button-m type="primary">Offset bottom 20px</e-button-m>
                    </e-affix-m>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
</script>
<style scoped lang="scss">
@import '../css/common.scss';

.affix-container {
    text-align: center;
    height: 400px;
    border-radius: 4px;
    background: var(--ep-color-primary-light-9);
}
</style>
