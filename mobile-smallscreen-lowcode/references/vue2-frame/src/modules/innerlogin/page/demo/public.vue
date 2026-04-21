<template>
    <div class="content">
        <div class="em-cell-group">
            <em-cell-group class="em-cell-group" title="登录-公众版">
                <em-cell is-link class="title" @click="loginP">平台小程序登录-公众版-个人</em-cell>
                <em-cell is-link class="title" @click="loginL">平台小程序登录-公众版-法人</em-cell>
                <em-cell is-link class="title" @click="logout">平台小程序登录-登出</em-cell>
            </em-cell-group>
            <em-cell-group class="em-cell-group" title="注销删除账号(测试用)">
                <em-field
                    input-align="vertical"
                    v-model="mobile"
                    type="tel"
                    label="手机号码"
                    placeholder="请输入"
                    name="mobile"
                    :rules="[{ validator: mobileValidator, message: '请输入11位手机号码' }]"
                />
                <em-field
                    input-align="vertical"
                    v-model="smsCode"
                    type="number"
                    label="短信验证码"
                    placeholder="请输入"
                    name="verifyCode"
                >
                    <template #button>
                        <em-button type="info" size="small" round @click.prevent="userCancelCode" color="#2E6BE5">
                            发送验证码
                        </em-button>
                    </template>
                </em-field>
                <em-cell is-link class="title" @click="userCancel">删除账号</em-cell>
            </em-cell-group>
        </div>
    </div>
</template>

<script>
import PluginDemo from '../../plugins/plugin';
export default {
    // 定义用到的数据，在template中使用{{ }}包裹，自动实现绑定
    data() {
        return {
            smsCode: '',
            mobile: ''
        };
    },
    mounted() {
        // 实例DOM被挂载后调用
        console.log('mounted');
        // 初始化平台小程序用户身份管理器。初始化只需要初始化一次，建议放在main.js里，此处用于演示。
        Util.mpVerifyManager.init({
            //  登录类型：公众版（mp）；内部版（ep）
            loginType: 'mp',
            // ssoUrl: sso服务地址
            ssoUrl: 'http://172.29.2.30:8080/epoint-shell-member-demo/',
            // 三方系统应用id，通过三方系统获取（小程序appid）
            ep3rdAppid: 'applet',
            // 三方平台id，通过框架三方集成平台获取（框架三方集成平台id）
            ep3rdPlatid: 'weixin',
            // authorizeRouterPath: 授权登录页面。用户openId如果sso中未绑定，会跳转到授权登录页面，授权获取手机号。支持其他个性化路由地址
            authorizeRouterPath: '/modules/innerlogin/index',
            // registerRouterPath: 注册页路由地址。授权获取的手机号码如果未在系统中存在，会跳转到注册页面。支持其他个性化路由地址
            registerRouterPath: '/modules/innerlogin/page/register/register',
            // 插件，可以进行个性化业务拦截处理
            plugins: [new PluginDemo()]
        });
    },
    methods: {
        async loginP() {
            await Util.mpVerifyManager.login({
                // 用户类型：P：个人、L：法人
                userType: 'P'
            });
            console.log(await Util.mpVerifyManager.getUserAuth());
            // 登录成功之后的请求会自动携带token
            // Util.ajax(...)
        },
        async loginL() {
            await Util.mpVerifyManager.login({
                // 用户类型：P：个人、L：法人
                userType: 'L',
                // 多企业角色登录时，是否使用缓存的token，如果为true，再次登录会优先使用已选过缓存的token
                useCacheToken: true
            });
            console.log(await Util.mpVerifyManager.getUserAuth());
            // 登录成功之后的请求会自动携带token
            // Util.ajax(...)
        },
        async userCancelCode() {
            const res = await Util.mpVerifyManager.userCancelCode(this.mobile);

            if (res.status?.code === 1) {
                ejs.ui.toast('发送成功');
            }
        },
        async userCancel() {
            const res = await Util.mpVerifyManager.userCancel(this.smsCode);

            if (res.status?.code === 1) {
                ejs.ui.toast('注销删除成功');
            }
        },
        async logout() {
            await Util.mpVerifyManager.logout();
            ejs.ui.toast('登出成功');
        },
        mobileValidator(val) {
            return Util.string.isMobile(val);
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
