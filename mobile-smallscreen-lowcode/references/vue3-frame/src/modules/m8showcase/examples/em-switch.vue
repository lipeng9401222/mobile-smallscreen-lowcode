<template>
    <div class="container">
        <div class="van-content">
            <h4 class="cell-title">基础用法</h4>
            <em-switch v-model="checked1" active-value="是" inactive-value="否" />

            <h4 class="cell-title">禁用状态</h4>
            <em-switch v-model="checked2" disabled />

            <h4 class="cell-title">加载状态</h4>
            <em-switch v-model="checked3" loading />

            <h4 class="cell-title">自定义大小</h4>
            <em-switch v-model="checked4" size="32px" />

            <h4 class="cell-title">自定义颜色</h4>
            <em-switch v-model="checked5" active-color="#07c160" inactive-color="#ee0a24" />

            <h4 class="cell-title">异步控制</h4>
            <em-switch :modelValue="checked6" @input="onInput" />

            <h4 class="cell-title">搭配单元格使用</h4>
            <em-cell center title="标题">
                <template #rightIcon>
                    <em-switch v-model="checked" size="24" />
                </template>
            </em-cell>
        </div>
        <em-dialog ref="emDialog"></em-dialog>
    </div>
</template>

<script lang="ts">
export default {
    name: 'component_switch',
    data() {
        return {
            checked1: '是',
            checked2: true,
            checked3: true,
            checked4: false,
            checked5: true,
            checked6: true,
            checked: true,
            checked7: true
        };
    },
    methods: {
        onInput(checked) {
            Dialog.confirm({
                message: '是否切换开关'
            }).then(() => {
                this.checked6 = !this.checked6;
            }).catch(() => {});
        }
    }
};
</script>

<style scoped>
.van-content {
    height: 100vh;
    padding: 0 10px;
    background-color: #f7f8fa;
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