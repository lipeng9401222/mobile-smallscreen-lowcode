<template>
    <div class="container">
        <div class="van-content">
            <h4 class="cell-title">基础用法</h4>
            <em-cell-group>
                <em-switch-cell title="标题" v-model="checked" :border="false"></em-switch-cell>
            </em-cell-group>
            <h4 class="cell-title">禁用状态</h4>
            <em-cell-group>
                <em-switch-cell title="标题" :disabled="true" v-model="checked"></em-switch-cell>
            </em-cell-group>
            <h4 class="cell-title">加载状态</h4>
            <em-cell-group>
                <em-switch-cell title="标题" :loading="true" v-model="checked"></em-switch-cell>
            </em-cell-group>
        </div>
    </div>
</template>

<script>

export default {
    name: 'switchCellDemo',
    data() {
        return {
            checked: true
        };
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