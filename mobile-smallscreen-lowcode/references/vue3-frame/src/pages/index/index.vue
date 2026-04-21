<template>
    <view class="content">
        <image class="logo" src="/static/logo.jpg" />
        <view class="text-area">
            <text class="title">{{ title }}</text>
        </view>
        <div class="em-cell-group">
            <em-cell-group>
                <em-cell class="title" is-link @click="toDetail">点击跳转detail</em-cell>
                <em-cell class="title" is-link @click="toShowcase">点击跳转UI组件示例</em-cell>
                <em-cell class="title" is-link @click="navigatorToLogin">三方小程序登录示例</em-cell>
                <em-cell class="title" is-link @click="testStore">测试store</em-cell>
                <em-cell class="title" is-link @click="testMock">测试mock</em-cell>
            </em-cell-group>
            <em-field v-model="value" label="Mock内容" placeholder="Mock响应内容" />
        </div>
    </view>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useIndexStore } from './store';
const title = ref('M8移动前端跨端框架');
const value = ref();
const toDetail = () => {
    console.log(Config.token.getToken());
    ejs.page.open({
        pageUrl: './detail?id=1&name=M8移动前端框架'
    });
};
const toShowcase = () => {
    ejs.page.open({
        pageUrl: '/modules/m8showcase/index'
    });
};
const testStore = () => {
    const indexStore = useIndexStore();

    console.log(indexStore.moduleInfo);
    indexStore.setModuleInfo('M8移动前端跨端框架');
    console.log(indexStore.moduleInfo);
};
const testMock = () => {
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
                value.value = res.data;
            }
        }
    });
};
const navigatorToLogin = () => {
    ejs.page.open({
        pageUrl: '../../modules/innerlogin/page/demo/demo',
        success: function () {}
    });
};
</script>
<style>
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
