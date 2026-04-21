<template>
    <div class="van-content">
        <div class="example-group">
            <text class="cell-title">基础用法</text>
            <div class="example-card">
                <e-verify-code-m action="https://fe.epoint.com.cn/mock/752/eui-vue/initAndCheckCaptcha" @validate="onValidate" />
                <div class="example-info">
                    <p>验证状态：{{ isValidate ? '成功' : '失败' }}</p>
                    <p>validateCode: {{ validateCode }}</p>
                </div>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">trigger 模式</text>
            <div class="example-card">
                <e-verify-code-m action="https://fe.epoint.com.cn/mock/752/eui-vue/initAndCheckCaptcha" type="trigger" />
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">dialog 模式</text>
            <div class="example-card">
                <e-button-m @click="showDialog">打开验证码</e-button-m>
            </div>
        </div>

        <em-dialog v-model="dialogVisible" title="请完成安全验证" :width="'80%'">
            <e-verify-code-m
                ref="verifyCodeRef"
                action="https://fe.epoint.com.cn/mock/752/eui-vue/initAndCheckCaptcha"
                @validate="onValidate"
            />
        </em-dialog>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
const isValidate = ref<boolean>(false);
const validateCode = ref<string>('');

const verifyCodeRef = ref();
const dialogVisible = ref<boolean>(false);
const showDialog = () => {
    dialogVisible.value = true;
    verifyCodeRef.value?.reload();
};
const onValidate = (e) => {
    isValidate.value = e.isValid;
    validateCode.value = e.validateCode;

    if (e.isValid) {
        setTimeout(() => {
            dialogVisible.value = false;
        }, 1000);
    }
};
</script>
<style lang="scss" scoped>
@import '../css/common.scss';
</style>
