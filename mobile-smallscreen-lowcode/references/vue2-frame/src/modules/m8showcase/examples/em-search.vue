<template>
    <div class="container">
        <!-- #ifdef APP-PLUS -->
        <scroller class="scroller">
            <!-- #endif -->
            <text class="cell-title">基本用法</text>
            <em-search v-model="value" placeholder="请输入搜索关键词" />

            <text class="cell-title">带语音识别搜索功能</text>
            <em-search placeholder="请输入搜索关键词" v-model="value1" showVoice></em-search>

            <text class="cell-title">事件监听</text>
            <!-- #ifndef APP-PLUS -->
            <form action="/">
                <!-- #endif -->
                <em-search
                    v-model="value"
                    show-action
                    placeholder="请输入搜索关键词"
                    @search="onSearch"
                    @cancel="onCancel"
                />
                <!-- #ifndef APP-PLUS -->
            </form>
            <!-- #endif -->

            <text class="cell-title">搜索框内容对齐</text>
            <em-search v-model="value" placeholder="请输入搜索关键词" input-align="center" />
            <text class="cell-title">禁用搜索框</text>
            <em-search v-model="value" disabled placeholder="请输入搜索关键词" />

            <text class="cell-title">自定义背景色</text>
            <em-search v-model="value" shape="square" background="#4fc08d" placeholder="请输入搜索关键词" />

            <text class="cell-title">自定义按钮</text>
            <em-search v-model="value" show-action label="地址" placeholder="请输入搜索关键词" @search="onSearch">
                <template #action>
                    <text class="search-text" @click="onSearch">搜索</text>
                </template>
            </em-search>
            <!-- #ifdef APP-PLUS -->
        </scroller>
        <!-- #endif -->
        <em-toast ref="emToast"></em-toast>
    </div>
</template>

<script>
export default {
    name: 'Search',
    data() {
        return {
            value: '',
            value1: ''
        };
    },
    mounted() {
        Toast.setDefaultOptions({
            context: this
        });
    },
    methods: {
        onChange(e) {
            this.value = e.detail;
        },
        onSearch() {
            if (this.value) {
                Toast({
                    message: '搜索：' + this.value
                });
            }
        },
        onClick() {
            if (this.value) {
                Toast({
                    message: '搜索：' + this.value
                });
            }
        },
        onCancel() {
            Toast({
                message: '取消'
            });
        }
    }
};
</script>

<style scoped lang="scss">
.container {
    background: #f5f6f7;
}

.cell-title:first-child {
    padding-top: 15px;
    margin-top: 0;
}

.scroller{
    height: 700px;
}

.search-text{
    font-size: 16px;
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
