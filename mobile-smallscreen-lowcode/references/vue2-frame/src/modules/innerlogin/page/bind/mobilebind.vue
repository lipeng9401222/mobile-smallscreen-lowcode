<template>
    <div class="em-content">
        <div class="em-title">
            <img class="em-title-icon" src="../../images/icon_lock.png" />
            <span class="em-title-text">很抱歉，该号码未绑定账号</span>
        </div>
        <div class="em-next">
            <span class="em-next-title">您可以</span>
            <div class="em-next-cell">
                <div class="em-next-cell-list">
                    <span class="em-cell-icon">1</span>
                    <span class="em-cell-text">确认选择的号码是否正确</span>
                </div>
                <!-- <div class="em-next-cell-list">
                    <span class="em-cell-icon">2</span>
                    <span class="em-cell-text">切换其他登录方式进行登录</span>
                </div> -->
                <div class="em-next-cell-list">
                    <span class="em-cell-icon">2</span>
                    <span v-if="loginType === 'mp'" class="em-cell-text em-register-btn" @click="openRegister">注册新用户</span>
                    <span v-else class="em-cell-text" >联系管理员注册账号</span>
                </div>
            </div>
        </div>
        <em-button class="em-back-btn" type="info" @click="back">返回</em-button>
    </div>
</template>

<script>
export default {
    methods: {
        openRegister() {
            ejs.page.replace({
                url: Util.mpVerifyManager.userType === 'P'
                        ? Util.mpVerifyManager.options.registerRouterPath
                        : Util.mpVerifyManager.options.registerLegalRouterPath
            });
        },
        back() {
            ejs.page.close();
        }
    },
    computed: {
        loginType() {
            return Util.mpVerifyManager.options.loginType;
        }
    }
};
</script>

<style lang="scss" scoped>
.em-content {
    margin: 0 24px;
    .em-title {
        text-align: center;
        margin-top: 64px;
        width: 100%;
        .em-title-icon {
            display: block;
            margin: 0 auto 24px auto;
            width: 47px;
            height: 57.5px;
        }
        .em-title-text {
            display: block;
            font-size: 16px;
            color: #2e3033;
            font-weight: bold;
        }
    }
    .em-next {
        margin-top: 48px;
        .em-next-title {
            font-size: 16px;
            color: #8a8f99;
        }
        .em-next-cell {
            margin-top: 14px;
            margin-bottom: 16px;
            .em-next-cell-list {
                margin-bottom: 16px;
                display: flex;
                align-items: center;
                .em-cell-icon {
                    display: inline-block;
                    box-sizing: border-box;
                    border: 2.5px solid #2463e0;
                    color: #e04343;
                    transform: skewX(-10deg);
                    width: 19px;
                    height: 22.5px;
                    text-align: center;
                    line-height: 19px;
                    font-size: 14px;
                }
                .em-cell-text {
                    margin-left: 9px;
                    font-size: 16px;
                    font-weight: 400;
                    &.em-register-btn {
                        color: #2463e0;
                    }
                }
            }
        }
    }
    .em-back-btn {
        margin-top: 32px;
        display: flex;
        justify-content: center;
        width: 100%;
        font-size: 16px;
        ::v-deep .em-button--round {
            width: 100%;
        }
    }
}
</style>
