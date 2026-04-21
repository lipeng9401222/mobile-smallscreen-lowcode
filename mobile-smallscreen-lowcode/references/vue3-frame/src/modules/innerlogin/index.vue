<template>
    <div class="content">
        <div class="app-content">
            <div class="app-title">{{ title }}</div>
        </div>
        <div class="em-tabs-content" v-if="loginType === 'mp'">
            <em-tabs v-model="userType">
                <em-tab title="个人用户"></em-tab>
                <em-tab title="法人用户"></em-tab>
            </em-tabs>
        </div>
        <div class="em-btn-content">
            <em-button class="em-login-btn" type="info" open-type="getPhoneNumber" @getphonenumber="getphonenumber">
                微信授权登录
            </em-button>
            <div class="em-register-btn" @click="openRegister" v-if="loginType === 'mp'">新用户注册</div>
        </div>

        <footer>
            <privacyFooter v-model:isRead="isRead" ref="emFooter"></privacyFooter>
        </footer>
    </div>
</template>

<script>
import privacyFooter from './page/register/privacy_footer';

export default {
    components: {
        privacyFooter
    },
    // 定义用到的数据，在template中使用{{ }}包裹，自动实现绑定
    data() {
        return {
            isRead: false, //是否已阅读协议
            userType: Util.mpVerifyManager.userType === 'P' ? 0 : 1,
            title: '新点移动办公'
        };
    },
    // 计算属性
    computed: {
        loginType() {
            return Util.mpVerifyManager.options.loginType;
        }
    },
    // 侦听属性
    watch: {
        userType(val) {
            Util.mpVerifyManager.userType = val === 0 ? 'P' : 'L';
        }
    },
    methods: {
        // 小程序获取手机号code
        getphonenumber(info) {
            if (info.detail.code) {
                if (this.isRead) {
                    this.handleMobileRegister(info.detail.code);
                } else {
                    this.$refs.emFooter.showNotify('danger', '请先勾选《用户协议》和《隐私政策》');
                }
            }
        },
        // 处理用户手机号码绑定注册
        async handleMobileRegister(mobileCode) {
            // 根据手机号code获取用户状态码
            const bindResult = await Util.mpVerifyManager.getBindByMobileCode(mobileCode);

            // 根据用户状态处理用户登录流程
            Util.mpVerifyManager.handleBindUser(bindResult).then(() => {
                // 登录成功后登录器会自动存储用户信息，后续请求会自动带上用户信息
                ejs.page.close();
            });
        },
        openRegister() {
            ejs.page.open({
                pageUrl:
                    Util.mpVerifyManager.userType === 'P'
                        ? Util.mpVerifyManager.options.registerRouterPath
                        : Util.mpVerifyManager.options.registerLegalRouterPath
            });
        }
    },
    unmounted() {
        // 实例销毁后调用
        uni.$off('MpGetTokenSuccess');
    }
};
</script>

<style lang="scss" scoped>
.content {
    width: 100%;
    .app-content {
        height: 25vh;
        display: flex;
        justify-content: center;
        margin-bottom: 20px;

        .app-title {
            font-size: 32px;
            line-height: 32px;
            padding-top: calc(25vh - 32px);
        }
    }
    .em-tabs-content {
        width: 70%;
        margin: 0 auto 20px auto;
    }
    .em-btn-content {
        display: flex;
        align-items: center;
        flex-direction: column;
        .em-login-btn {
            display: flex;
            justify-content: center;
            width: 80%;
            font-size: 16px;
            ::v-deep .em-button--round {
                width: 100%;
            }
        }
        .em-register-btn {
            display: block;
            width: 100%;
            text-align: center;
            margin-top: 20px;
            font-size: 14px;
            color: #8a8f99;
        }
    }
    footer {
        position: fixed;
        bottom: 20px;
        padding: 20px 14px 40px;
        width: 100%;
    }
}
</style>
