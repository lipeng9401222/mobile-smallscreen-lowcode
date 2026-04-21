<template>
    <div class="van-content">
        <div class="example-group">
            <text class="cell-title">基本用法</text>
            <div class="example-card">
                <e-popconfirm-m title="Are you sure to delete this?">
                    <template #reference>
                        <e-button-m type="default">Delete</e-button-m>
                    </template>
                </e-popconfirm-m>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">自定义</text>
            <div class="example-card">
                <e-popconfirm-m
                    title="Are you sure to delete this?"
                    width="280"
                    confirm-button-text="OK"
                    cancel-button-text="No, Thanks"
                    icon="InfoFilled"
                    icon-color="#626AEF"
                >
                    <template #reference>
                        <e-button-m type="default">Delete</e-button-m>
                    </template>
                </e-popconfirm-m>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">触发事件</text>
            <div class="example-card">
                <e-popconfirm-m
                    confirm-button-text="Yes"
                    cancel-button-text="No"
                    icon="InfoFilled"
                    icon-color="#626AEF"
                    title="Are you sure to delete this?"
                    @confirm="confirmEvent"
                    @cancel="cancelEvent"
                >
                    <template #reference>
                        <e-button-m type="default">Delete</e-button-m>
                    </template>
                </e-popconfirm-m>
            </div>
        </div>
    </div>
</template>

<script setup>
const confirmEvent = (e) => {
    console.log('confirm!', e);
};
const cancelEvent = (e) => {
    console.log('cancel!', e);
};
</script>

<style scoped lang="scss">
@import '../css/common.scss';
</style>
