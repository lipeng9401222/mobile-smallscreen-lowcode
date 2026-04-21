<template>
    <div class="content">
        <em-cell-group class="em-cell-group">
            <em-cell @click="click">{{ msg }}</em-cell>
            <em-cell @click="testVuex">测试store</em-cell>
            <em-cell is-link @click="testPageOpen">页面跳转</em-cell>
        </em-cell-group>
    </div>
</template>

<script lang="ts">
import { useM8demoStore } from './store';

const m8demoStore = useM8demoStore();

export default {
    data() {
        return {
            msg: '测试'
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
        console.log(option);
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
        click() {
            console.log('click');
            ejs.ui.toast('123');
            console.log(Util.uuid());
        },
        testVuex() {
            console.log(this);
            console.log(m8demoStore.isPageRefresh);
            m8demoStore.setPageRefresh(false);
            console.log(m8demoStore.isPageRefresh);
        },
        testPageOpen() {
            ejs.page.open({
                pageUrl: './detail',
                data: {
                    id: 2,
                    name: 'M8移动前端框架'
                },
                success: function () {}
            });
        }
    }
};
</script>

<style lang="scss">
.content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .em-cell-group {
        width: 100%;
    }
}
</style>
