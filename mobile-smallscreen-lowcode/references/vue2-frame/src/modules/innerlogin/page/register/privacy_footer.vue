<template>
    <div class="em-footer" v-if="showFooter">
        <div class="login-agreement">
            <em-checkbox v-model="read" icon-size="12px" class="em-checkbox">我已阅读并同意</em-checkbox>
            <span class="color-blue" @click="toProtocol('service')">《用户协议》</span>
            和
            <span class="color-blue" @click="toProtocol('privacy')">《隐私政策》</span>
        </div>
        <!-- 顶部通知 -->
        <em-notify v-model="isShowNotify" :type="notifyType" :message="notifyMsg"></em-notify>
    </div>
</template>

<script>
import api from '../api/api.js';
export default {
    model: {
        prop: 'isRead',
        event: 'update:isRead'
    },
    props: {
        isRead: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        read: {
            get() {
                return this.isRead;
            },
            set(val) {
                this.$emit('update:isRead', val);
            }
        },
        showFooter() {
            return (
                Util.mpVerifyManager.options.loginType === 'mp' ||
                (Util.mpVerifyManager.options.loginType === 'ep' && Util.mpVerifyManager.options.appGuid)
            );
        }
    },
    // 定义用到的数据，在template中使用{{ }}包裹，自动实现绑定
    data() {
        return {
            // 顶部通知栏相关参数
            isShowNotify: false,
            notifyType: '',
            notifyMsg: '',
            // 隐私协议
            privacyProtocol: '',
            // 用户协议
            userProtocol: ''
        };
    },
    async mounted() {
        // 不展示底部协议时，不需要阅读协议
        if (!this.showFooter) {
            this.read = true;
        }
        // 获取协议
        this.getProtocol();
    },
    methods: {
        // 获取用户和隐私协议
        getProtocol() {
            //  * 登录类型：公众版（mp）；内部版（ep）
            if (Util.mpVerifyManager.options.loginType === 'mp') {
                api.common('oauth2mem/getprotocolurl', {}, false, false).then((data) => {
                    this.privacyProtocol = data.privacyprotocol;
                    this.userProtocol = data.userprotocol;

                    if (this.privacyProtocol.charAt(0) === '/') {
                        this.privacyProtocol = this.privacyProtocol.slice(1, this.privacyProtocol.length);
                    }
                    if (this.userProtocol.charAt(0) === '/') {
                        this.userProtocol = this.userProtocol.slice(1, this.userProtocol.length);
                    }
                });
            } else {
                // 内部版隐私协议由EMP平台对应app的appguid决定，不需要从后台获取。
                if (!Util.mpVerifyManager.options.appGuid) {
                    console.error('初始化Util.mpVerifyManage需传递appGuid参数，用于展示对应的用户隐私协议');

                    return;
                }
                this.privacyProtocol = `frame/pages/agreement/privacy.html?appguid=${Util.mpVerifyManager.options.appGuid}`;
                this.userProtocol = `frame/pages/agreement/service.html?appguid=${Util.mpVerifyManager.options.appGuid}`;
            }
        },
        // 展示顶部通知
        showNotify(type, msg) {
            this.notifyType = type;
            this.notifyMsg = msg;
            this.isShowNotify = true;
            setTimeout(() => {
                this.isShowNotify = false;
            }, 2000);
        },
        // 跳转协议
        toProtocol(type) {
            if (!this.privacyProtocol || !this.userProtocol) {
                this.showNotify('error', '协议获取失败，请稍后再试');

                return;
            }
            const src = Util.mpVerifyManager.options.ssoUrl + (type === 'service' ? this.userProtocol : this.privacyProtocol);

            ejs.page.open({
                pageUrl: '/modules/innerlogin/page/register/webview?src=' + encodeURIComponent(src)
            });
        }
    }
};
</script>

<style lang="scss" scoped>
.em-footer {
    width: 100%;
    text-align: center;

    .login-agreement {
        font-size: 14px;
        .em-checkbox {
            display: inline-block;
        }
    }
    .em-register-btn {
        display: block;
        margin-top: 20px;
    }
    .color-blue {
        color: #2e6be5;
    }
}
</style>
