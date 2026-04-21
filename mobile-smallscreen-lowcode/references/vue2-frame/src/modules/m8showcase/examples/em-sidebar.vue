<template>
    <div class="container">
        <div class="van-content">
            <h4 class="cell-title">基础用法</h4>
            <em-sidebar v-model="current1">
                <em-sidebar-item title="标签名称"></em-sidebar-item>
                <em-sidebar-item title="标签名称"></em-sidebar-item>
                <em-sidebar-item title="标签名称"></em-sidebar-item>
            </em-sidebar>
            <h4 class="cell-title">徽标提示</h4>
            <em-sidebar v-model="current2">
                <em-sidebar-item title="标签名称" dot></em-sidebar-item>
                <em-sidebar-item title="标签名称" :badge="5"></em-sidebar-item>
                <em-sidebar-item title="标签名称" badge="99+"></em-sidebar-item>
            </em-sidebar>
            <h4 class="cell-title">禁用选项</h4>
            <em-sidebar v-model="current3">
                <em-sidebar-item title="标签名称"></em-sidebar-item>
                <em-sidebar-item title="标签名称" :disabled="true"></em-sidebar-item>
                <em-sidebar-item title="标签名称"></em-sidebar-item>
            </em-sidebar>
            <h4 class="cell-title">监听切换事件</h4>
            <em-sidebar v-model="current4" @change="onChange">
                <em-sidebar-item title="标签名称"></em-sidebar-item>
                <em-sidebar-item title="标签名称"></em-sidebar-item>
                <em-sidebar-item title="标签名称"></em-sidebar-item>
            </em-sidebar>
            <h4 class="cell-title">路由跳转</h4>
            <em-sidebar v-model="current5">
                <em-sidebar-item title="url跳转" url="./em-loading"></em-sidebar-item>
                <em-sidebar-item title="外部链接跳转" url="http://www.baidu.com"></em-sidebar-item>
                <em-sidebar-item title="路由跳转" to="./em-cell"></em-sidebar-item>
                <em-sidebar-item title="路由对象跳转" :to="{path: './em-cell', query: {a: 'b'}}"></em-sidebar-item>
                <em-sidebar-item title="路由替换跳转" :to="{path: '../index', query: {a: 'b'}, replace: true}"></em-sidebar-item>
            </em-sidebar>
        </div>
        <em-toast ref="emToast"></em-toast>
    </div>
</template>
<script>
export default {
    name: 'sidebarDemo',
    data() {
        return {
            current1: 0,
            current2: 0,
            current3: 0,
            current4: 0,
            current5: 0
        };
    },
    methods: {
        onChange(index) {
            Toast(`触发change事件 index:${index}`);
        }
    }
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