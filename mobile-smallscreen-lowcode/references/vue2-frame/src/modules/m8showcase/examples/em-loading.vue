<template>
    <div class="container">
        <div class="van-content">
            <text class="cell-title">加载类型</text>
            <em-row>
                <em-col class="col" :span="5" style="padding: 0 10px"><em-loading></em-loading></em-col>
                <em-col class="col" :span="4"><em-loading type="spinner"></em-loading></em-col>
                <em-col class="col" :span="4"><em-loading type="ball" /></em-col>
                <em-col class="col" :span="4"><em-loading type="square" /></em-col>
                <em-col class="col" :span="4"><em-loading type="operation" /></em-col>
            </em-row>

            <text class="cell-title">自定义颜色</text>
            <em-row>
                <em-col :span="5" style="padding: 0 10px"><em-loading color="#1989fa" /></em-col>
                <em-col :span="4"><em-loading type="spinner" color="#1989fa" /></em-col>
                <em-col :span="4"><em-loading type="ball" color="#1989fa" /></em-col>
                <em-col :span="4"><em-loading type="square" color="#2E3033" /></em-col>
                <em-col :span="4"><em-loading type="operation" color="#1989fa" /></em-col>
            </em-row>

            <text class="cell-title">自定义大小</text>
            <em-row>
                <em-col :span="5" style="padding: 0 10px"><em-loading :size="24" /></em-col>
                <em-col :span="4"><em-loading type="spinner" size="24px" /></em-col>
                <em-col :span="4"><em-loading type="ball" size="24px" /></em-col>
                <em-col :span="4"><em-loading type="square" size="24px" /></em-col>
                <em-col :span="4"><em-loading type="operation" size="24px" /></em-col>
            </em-row>

            <text class="cell-title">加载文案</text>
            <em-row>
                <em-col :span="8" style="padding: 0 10px"><em-loading size="15px">加载中...</em-loading></em-col>
                <em-col :span="8" style="padding: 0 10px"><em-loading type="spinner" size="15px">加载中...</em-loading></em-col>
                <em-col :span="8" style="padding: 0 10px"><em-loading type="ball" size="15px">加载中...</em-loading></em-col>
                <em-col :span="8" style="padding: 0 10px"><em-loading type="operation" size="15px">加载中...</em-loading></em-col>
            </em-row>

            <text class="cell-title">垂直排列</text>
            <em-row>
                <em-col :span="8" style="padding: 0 10px"><em-loading vertical size="15px">加载中...</em-loading></em-col>
                <em-col :span="8" style="padding: 0 10px"><em-loading vertical type="spinner" size="15px">加载中...</em-loading></em-col>
                <em-col :span="8" style="padding: 0 10px"><em-loading vertical type="ball" size="15px">加载中...</em-loading></em-col>
                <em-col :span="8" style="padding: 0 10px"><em-loading vertical type="square" size="20px">加载中...</em-loading></em-col>
                <em-col :span="8" style="padding: 0 10px"><em-loading vertical type="operation" size="15px">加载中...</em-loading></em-col>
            </em-row>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Loading'
};
</script>

<style scoped>
/* #ifndef APP-PLUS */
::v-deep .em-col{
    margin: 10px 0;
    text-align: center;
}
/* #endif */

.col{
    margin: 10px 0;
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