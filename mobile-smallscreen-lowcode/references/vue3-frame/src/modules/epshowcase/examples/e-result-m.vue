<template>
    <div class="van-content">
        <div class="example-group">
            <text class="cell-title">基本用法</text>
            <div class="example-card">
                <div class="example-content">
                    <e-result-m title="Success Tip" sub-title="Please follow the instructions" icon="success">
                        <template #extra>
                            <e-button-m type="primary">Back</e-button-m>
                        </template>
                    </e-result-m>
                    <e-result-m title="Warning Tip" sub-title="Please follow the instructions" icon="warning">
                        <template #extra>
                            <e-button-m type="primary">Back</e-button-m>
                        </template>
                    </e-result-m>
                    <e-result-m title="Error Tip" sub-title="Please follow the instructions" icon="error">
                        <template #extra>
                            <e-button-m type="primary">Back</e-button-m>
                        </template>
                    </e-result-m>
                    <e-result-m title="Info Tip" sub-title="Please follow the instructions" icon="info">
                        <template #extra>
                            <e-button-m type="primary">Back</e-button-m>
                        </template>
                    </e-result-m>
                </div>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">自定义内容</text>
            <div class="example-card">
                <e-result-m title="404"  sub-title="Sorry, request error">
                    <template #icon>
                        <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" alt="">
                    </template>
                    <template #extra>
                        <e-button-m type="primary">Back</e-button-m>
                    </template>
                </e-result-m>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>

</script>

<style lang="scss" scoped>
@import '../css/common.scss';
</style>
