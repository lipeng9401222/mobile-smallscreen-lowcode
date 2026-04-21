<template>
    <div class="container">
        <!-- #ifdef APP-PLUS -->
        <scroller class="scroller">
            <!-- #endif -->
            <text class="cell-title">基础用法</text>
            <em-cell-group>
                <em-cell title="单元格" value="内容" :is-link="false"></em-cell>
                <em-cell title="单元格" value="内容" label="描述信息" :is-link="false" :border="false"></em-cell>
            </em-cell-group>

            <text class="cell-title">单元格大小</text>
            <em-cell-group>
                <em-cell title="单元格" value="内容" size="large" :is-link="true"></em-cell>
                <em-cell
                    title="单元格"
                    value="内容"
                    size="large"
                    :is-link="false"
                    :border="false"
                    label="描述信息"
                ></em-cell>
            </em-cell-group>

            <text class="cell-title">展示图标</text>
            <em-cell-group>
                <em-cell title="单元格" icon="location-o" :is-link="false" :border="false"></em-cell>
            </em-cell-group>

            <text class="cell-title">只设置 value</text>
            <em-cell-group>
                <em-cell value="内容" :is-link="false" :border="false"></em-cell>
            </em-cell-group>

            <text class="cell-title">展示箭头</text>
            <em-cell-group>
                <em-cell title="单元格" is-link />
                <em-cell title="单元格" is-link value="内容" />
                <em-cell title="单元格" is-link arrow-direction="down" :border="false" value="内容" />
            </em-cell-group>
            <text class="cell-title">页面导航</text>
            <em-cell-group>
                <em-cell title="URL 跳转" is-link url="https://cn.vuejs.org/v2/api/#ref" />
                <em-cell title="路由跳转" is-link to="./em-button" :border="false" />
            </em-cell-group>
            <text class="cell-title">分组标题</text>
            <em-cell-group title="分组1">
                <em-cell title="单元格" value="内容" :border="false" />
            </em-cell-group>
            <em-cell-group title="分组2">
                <em-cell title="单元格" value="内容" :border="false" />
            </em-cell-group>
            <text class="cell-title">使用插槽</text>
            <em-cell-group>
                <em-cell value="内容" is-link>
                    <template #title>
                        <text class="custom-title">单元格</text>
                    </template>
                </em-cell>

                <em-cell title="路由跳转" is-link to="./em-button" />
                <em-cell title="单元格" icon="shop-o" extra-position="right" :border="false">
                    <template #rightIcon>
                        <em-icon name="search" custom-class="em-cell__right-icon-wrap" />
                    </template>
                    <template #extra>extra</template>
                </em-cell>
            </em-cell-group>
            <text class="cell-title">垂直居中</text>
            <em-cell-group>
                <em-cell center title="单元格" value="内容" label="描述信息" :border="false" />
            </em-cell-group>
            <!-- #ifdef APP-PLUS -->
        </scroller>
        <!-- #endif -->
    </div>
</template>

<script lang="ts">
export default {
    name: 'Cell'
};
</script>

<style lang="scss" scoped>
.mt30 {
    margin-top: 30px;
}
.custom-title {
    margin-right: 4px;
    // #ifndef APP-PLUS
    vertical-align: middle;
    // #endif
}

// #ifdef APP-PLUS
.scroller{
    height: 700px;
}
// #endif
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
