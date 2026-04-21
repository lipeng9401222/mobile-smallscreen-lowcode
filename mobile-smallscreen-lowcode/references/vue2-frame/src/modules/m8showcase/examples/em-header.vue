<template>
    <view class="container">
        <view class="em-content">
            <h4 class="cell-title">基础用法</h4>
            <em-header
                title="标题"
                :left-arrow="true"
                left-text="返回"
                right-text="按钮"
                :z-index="10"
                @click-left="onClickLeft"
                @click-right="onClickRight"
            ></em-header>
            <h4 class="cell-title">含有下划线</h4>
            <em-header
                title="标题"
                :left-arrow="true"
                right-text="按钮"
                border
                @click-left="onClickLeft"
                @click-right="onClickRight"
            ></em-header>
            <h4 class="cell-title">背景颜色</h4>
            <em-header
                title="标题"
                :left-arrow="true"
                backgroundColor="#f9f9f9"
                @click-left="onClickLeft"
                @click-right="onClickRight"
            ></em-header>
            <h4 class="cell-title">按钮颜色</h4>
            <em-header
                title="标题"
                :left-arrow="true"
                btnColor="#333"
                @click-left="onClickLeft"
                @click-right="onClickRight"
            ></em-header>

            <h4 class="cell-title" style="margin-top: 70px">使用插槽</h4>
            <em-header
                title="标题"
                :left-arrow="true"
                left-text="返回"
                @click-left="onClickLeft"
                @click-right="onClickRight"
            >
                <template #left>返回啊~</template>
                <template #title>标题插槽</template>
                <template #right>
                    <em-icon size="20px" name="search"></em-icon>
                </template>
            </em-header>
        </view>
        <em-toast ref="emToast"></em-toast>
    </view>
</template>

<script>
export default {
    name: 'Header',
    methods: {
        onClickLeft() {
            Toast('返回按钮');
        },
        onClickRight() {
            Toast('右侧按钮');
        }
    }
};
</script>
<style scoped>
.em-content {
    height: calc(100vh - 46px);
    background-color: #f7f8fa;
}
.cell-title {
    margin-top: 0;
    padding-top: 10px;
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