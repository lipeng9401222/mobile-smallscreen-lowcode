<template>
    <div class="container">
        <div class="van-content">
            <text class="cell-title">基本用法</text>
            <em-skeleton title :row="3" />

            <text class="cell-title">显示头像</text>
            <em-skeleton title avatar :row="3" round :rowWidth="['100%', '80%', '60%']" />

            <text class="cell-title">显示子组件</text>
            <!-- #ifdef APP-PLUS -->
            <em-button @click="switchChange">切换展示内容</em-button>
            <!-- #endif -->
            <!-- #ifndef APP-PLUS -->
            <switch @change="switchChange" />
            <!-- #endif -->
            <em-skeleton title avatar :row="3" :avatar-size="avatarSize" :title-width="titleWidth" :loading="loading">
                <div>内容加载完成后显示我</div>
            </em-skeleton>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: 'SkeletonDemo',
    methods: {
        switchChange: function (e) {
            let checked = false;

            // #ifndef APP-PLUS
            checked = e.detail.value;
            // #endif

            // #ifdef APP-PLUS
            checked = this.checked;
            // #endif

            if (checked) {
                // #ifdef APP-PLUS
                this.checked = false;
                // #endif
                setTimeout(() => {
                    this.loading = false;
                }, 1000);
            } else {
                this.loading = true;
                // #ifdef APP-PLUS
                this.checked = true;
                // #endif
            }
        }
    },
    data() {
        return {
            loading: true,
            titleWidth: '50%',
            avatarSize: 62,
            checked: true
        };
    }
};
</script>

<style scoped>
.container{
    background-color: #fff;
    padding-bottom: 200px;
}
.van-content {
    padding: 0 10px;
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
