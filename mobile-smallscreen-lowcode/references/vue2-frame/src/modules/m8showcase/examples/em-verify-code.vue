<template>
    <div class="container">
        <div class="van-content">
            <div class="cell-title">基础用法</div>
            <em-cell-group>
                <em-field placeholder="请输入验证码" v-model="value"></em-field>
            </em-cell-group>
            <em-verify-code :width="160" custom-style="margin: 10px;" ref="verifycode"></em-verify-code>
            <div style="margin-left: 10px">
                <em-button class="mr10" type="primary" plain @click="checkVerifyCode">校验验证码</em-button>
                <em-button type="danger" plain @click="updateVerify">更新验证码</em-button>
            </div>
        </div>
        <em-toast ref="emToast"></em-toast>
    </div>
</template>

<script>
export default {
    name: 'VerifyCode',
    data() {
        return {
            value: ''
        };
    },
    methods: {
        updateVerify() {
            this.$refs.verifycode.update();
        },
        checkVerifyCode() {
            Toast(`验证结果：${this.$refs.verifycode.validate(this.value)}`);
        }
    }
};
</script>

<style scoped>
.verify-item {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-left: 10px;
    margin-top: 10px;
}

.mr10 {
    margin-right: 10px;
}
</style>
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