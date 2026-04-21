<template>
    <view style="display: flex;flex-direction: column;justify-content: center;padding: 30px;height: 100vh;">
        <em-button block plain type="primary" @click="testPostMessage">测试window.parent.postMessage</em-button>
    </view>
</template>

<script setup lang="ts">
const testPostMessage = () => {
    ejs.ui.toast('点击按钮');
    window.parent.postMessage(
        {
            type: 'closeDialog', // 固定值，告诉父页面次消息是用来关闭 dialog
            id: '', // dialog 的 id，从 url 上获取
            params: 'test message;123465748', // 要传递给 closeCallback 回调方法的参数
        },
        '*'
    );
}
</script>
