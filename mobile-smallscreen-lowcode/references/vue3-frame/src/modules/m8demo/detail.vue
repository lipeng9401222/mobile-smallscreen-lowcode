<template>
    <div class="content">
        详情页
        <div>id:{{id}}</div>
        <div>name:{{name}}</div>
    </div>
</template>

<script lang="ts">
export default {
    data() {
        return {
            title: 'Hello',
            id: '',
            name: ''
        };
    },
    // 计算属性
    computed: {},
    // 侦听属性
    watch: {},
    created() {
        // 实例数据创建完成后调用
    },
    onLoad(option) {
        // (新增)监听页面加载，其参数为上个页面传递的数据，参数类型为 Object（用于页面传参）
        this.id = option.id;
        this.name = option.name;
    },
    onShow() {
        // (新增)监听页面显示。页面每次出现在屏幕上都触发，包括从下级页面点返回露出当前页面
    },
    mounted() {
        // 实例DOM被挂载后调用
    },
    onReady() {
        // (新增)监听页面初次渲染完成
    },
    onHide() {
        // (新增)监听页面隐藏
    },
    methods: {
    }
};
</script>

<style lang="scss">
.content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
</style>
