<template>
    <div class="content">
        <image class="logo" src="/static/logo.jpg"></image>
        <div class="em-cell-group">
            <em-cell-group>
                <em-cell class="title" is-link @click="click">{{ title }}</em-cell>
                <em-cell class="title" is-link @click="navigatorToModules">{{ modulesTitle }}</em-cell>
                <em-cell class="title" is-link @click="navigatorToShowcase">{{ uiShowcase }}</em-cell>
                <em-cell class="title" is-link @click="navigatorToLogin">{{ loginShowcase }}</em-cell>
                <em-cell class="title" @click="mockReq">{{ mock }}</em-cell>
            </em-cell-group>
            <em-field v-model="value" label="Mock内容" placeholder="Mock响应内容" />
        </div>
    </div>
</template>

<script>
export default {
    // 定义用到的数据，在template中使用{{ }}包裹，自动实现绑定
    data() {
        return {
            title: '页面跳转',
            modulesTitle: 'modules页面跳转',
            uiShowcase: 'UI组件示例(分包)',
            mock: '测试mock请求',
            loginShowcase: '三方小程序登录示例',
            value: ''
        };
    },
    // 计算属性
    computed: {},
    // 侦听属性
    watch: {},
    created() {
        // 实例数据创建完成后调用
        console.log('created');
    },
    onLoad() {
        // (新增)监听页面加载，其参数为上个页面传递的数据，参数类型为 Object（用于页面传参）
        console.log('onLoad');
    },
    onShow() {
        // (新增)监听页面显示。页面每次出现在屏幕上都触发，包括从下级页面点返回露出当前页面
        console.log('onShow');
    },
    mounted() {
        // 实例DOM被挂载后调用
        console.log('mounted');
    },
    onReady() {
        // (新增)监听页面初次渲染完成
        console.log('onReady');
    },
    onHide() {
        // (新增)监听页面隐藏
        console.log('onHide');
    },
    methods: {
        click() {
            ejs.page.open({
                pageUrl: './detail',
                data: {
                    id: 1,
                    name: 'M8移动前端框架'
                },
                success: function () {}
            });
        },
        navigatorToModules() {
            ejs.page.open({
                pageUrl: '../../modules/m8demo/list',
                data: {
                    id: 1,
                    name: 'modules页面跳转'
                },
                success: function () {}
            });
        },
        navigatorToShowcase() {
            ejs.page.open({
                pageUrl: '../../modules/m8showcase/index',
                data: {
                    id: 1,
                    name: 'M8移动前端框架'
                },
                success: function () {}
            });
        },
        mockReq() {
            var self = this;

            Util.ajax({
                url: Config.serverUrl + 'test',
                data: {
                    name: 'name',
                    age: 18
                },
                // v8.3.10支持dataPath，建议使用
                dataPath: 'custom.test',
                success(res) {
                    if (res.code === 1) {
                        self.value = res.data;
                    }
                }
            });
        },
        navigatorToLogin() {
            ejs.page.open({
                pageUrl: '../../modules/innerlogin/page/demo/demo',
                success: function () {}
            });
        }
    }
};
</script>

<style scoped>
.content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.logo {
    height: 100px;
    width: 100px;
    margin: 100px auto 25px auto;
}

.text-area {
    display: flex;
    justify-content: center;
}

.em-cell-group {
    width: 100%;
}
</style>
