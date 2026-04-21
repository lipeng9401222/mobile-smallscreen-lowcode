<template>
    <div class="container">
        <div class="van-content">
            <text class="cell-title">基础用法</text>
            <em-cell-group>
                <em-cell title="文字提示" @click="showToast('提示内容')" is-link></em-cell>
                <em-cell title="加载提示" @click="loadingToast('加载中...')" is-link></em-cell>
                <em-cell title="成功提示" @click="successToast" is-link></em-cell>
                <em-cell title="失败提示" @click="errorToast" is-link :border="false"></em-cell>
            </em-cell-group>

            <text class="cell-title">自定义图标</text>
            <em-cell-group>
                <em-cell title="自定义图标" @click="zdyToast" is-link></em-cell>
                <em-cell title="自定义图片" @click="zdyImgToast" is-link></em-cell>
                <em-cell title="自定义加载图标" @click="zdyLoadingToast" is-link :border="false"></em-cell>
            </em-cell-group>

            <text class="cell-title">动态更新提示</text>
            <em-cell title="动态更新提示" @click="advToast" is-link></em-cell>

            <text class="cell-title">多个toast</text>
            <em-cell title="多个toast" @click="moreToast" is-link></em-cell>
        </div>
        <em-toast ref="emToast"></em-toast>
        <em-toast ref="emToast1"></em-toast>
    </div>
</template>

<script>
export default {
    name: 'Toast',
    mounted() {
        Toast.setDefaultOptions({
            context: this
        });
    },
    methods: {
        showToast(msg) {
            Toast(msg);
        },
        loadingToast(msg) {
            Toast.loading({
                message: msg,
                forbidClick: true
            });
        },
        successToast() {
            Toast.success('成功文案');
        },
        errorToast() {
            Toast.fail('失败文案');
        },
        zdyToast() {
            Toast({
                message: '自定义图标',
                icon: 'like-o'
            });
        },
        zdyImgToast() {
            Toast({
                message: '自定义图片',
                icon: 'https://img.yzcdn.cn/vant/logo.png'
            });
        },
        zdyLoadingToast() {
            Toast.loading({
                message: '加载中...',
                loadingType: 'spinner'
            });
        },
        advToast() {
            const toast = Toast.loading({
                // 持续展示 toast
                duration: 0,
                // 禁用背景点击
                forbidClick: true,
                // loadingType: 'spinner',
                message: '倒计时 3 秒'
            });

            let second = 3;
            let times = () => {
                setTimeout(() => {
                    second--;
                    if (second > 0) {
                        toast.message = `倒计时 ${second} 秒`;
                        times();
                    } else {
                        // 关闭 toast
                        Toast.clear();
                    }
                }, 1000);
            };

            times();
        },
        moreToast() {
            Toast('一个提示');
            Toast({
                message: '另一个提示',
                selector: 'emToast1',
                position: 'bottom'
            });
        }
    }
};
</script>

<style scoped>
.van-button {
    margin-left: 10px;
}
</style>
<style>
/* custom style */
.cell-title:first-child {
    padding-top: 10px;
}

.cell-title {
    /* #ifndef APP-PLUS */
    display: block;
    /* #endif */
    padding-top: 30px;
    padding-bottom: 10px;
    padding-left: 10px;
    color: rgba(69, 90, 100, 0.6);
    font-size: 14px;
    font-weight: 400;
}
</style>
