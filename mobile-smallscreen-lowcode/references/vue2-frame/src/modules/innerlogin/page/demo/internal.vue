<template>
    <div class="content">
        <div class="em-cell-group">
            <em-cell-group class="em-cell-group" title="登录-内部版">
                <em-cell is-link class="title" @click="login">平台小程序登录-内部版</em-cell>
                <em-cell is-link class="title" @click="logout">平台小程序登录-登出</em-cell>
            </em-cell-group>
        </div>
    </div>
</template>

<script>
import PluginDemo from '../../plugins/plugin';
export default {
    // 定义用到的数据，在template中使用{{ }}包裹，自动实现绑定
    data() {
        return {};
    },
    mounted() {
        // 实例DOM被挂载后调用
        console.log('mounted');
        // 初始化平台小程序用户身份管理器。初始化只需要初始化一次，建议放在main.js里，此处用于演示。
        Util.mpVerifyManager.init({
            //  登录类型：公众版（mp）；内部版（ep）
            loginType: 'ep',
            // ssoUrl: sso服务地址
            ssoUrl: 'http://172.29.2.31:8080/epoint-shell-member-center-demo/',
            // 三方系统应用id，通过三方系统获取（小程序appid）
            ep3rdAppid: 'applet',
            // 三方平台id，通过框架三方集成平台获取（框架三方集成平台id）
            ep3rdPlatid: 'weixin',
            // authorizeRouterPath: 授权登录页面。用户openId如果sso中未绑定，会跳转到授权登录页面，授权获取手机号。支持其他个性化路由地址
            authorizeRouterPath: '/modules/innerlogin/index',
            // registerRouterPath: 注册页路由地址。授权获取的手机号码如果未在系统中存在，会跳转到注册页面。支持其他个性化路由地址
            registerRouterPath: '/modules/innerlogin/page/register/register',
            // 插件，可以进行个性化业务拦截处理
            plugins: [new PluginDemo()],
            // appGuid为内部版EMP平台对应的app的Client_Id，仅用于展示对应的隐私授权协议
            appGuid: 'xxx'
        });
    },
    methods: {
        async login() {
            await Util.mpVerifyManager.login();
            console.log(await Util.mpVerifyManager.getUserAuth());
            // 登录成功之后的请求会自动携带token
            // Util.ajax(...)
        },
        async logout() {
            await Util.mpVerifyManager.logout();
            ejs.ui.toast('登出成功');
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
.em-cell-group {
    display: block;
    margin-bottom: 20px;
}
.text-area {
    display: flex;
    justify-content: center;
}

.em-cell-group {
    width: 100%;
}
</style>
