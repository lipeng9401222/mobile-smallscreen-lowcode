<template>
    <div class="container">
        <div class="van-content">
            <h4 class="cell-title">基础用法</h4>
            <em-progress :percentage="50" />

            <h4 class="cell-title">线条粗细</h4>
            <em-progress :percentage="50" stroke-width="8" />

            <h4 class="cell-title">置灰</h4>
            <em-progress :percentage="50" inactive />

            <h4 class="cell-title">样式定制</h4>
            <em-progress pivot-text="橙色" color="#f2826a" :percentage="25" />

            <em-progress pivot-text="红色" color="#f44" :percentage="50" />

            <em-progress
                :percentage="75"
                pivot-text="紫色"
                pivot-color="#7232dd"
                color="linear-gradient(to right, #be99ff, #7232dd)"
            />
        </div>
    </div>
</template>

<script>
export default {
    name: 'Progress'
};
</script>

<style lang="scss" scoped>
.van-content {
    padding: 10px;
}

::v-deep .em-progress {
    margin-bottom: 20px;
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