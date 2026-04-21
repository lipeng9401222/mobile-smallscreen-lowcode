<template>
    <view>
        <h4 class="cell-title">基础用法</h4>
        <em-panel title="标题" desc="描述信息" status="状态">
            <view class="content">内容</view>
        </em-panel>

        <h4 class="cell-title">高级用法</h4>
        <em-panel title="标题" icon="info-o" desc="描述信息" status="状态" use-footer-slot>
            <view class="content">内容</view>
            <template #footer>
                <view class="footer">
                    <em-button size="small" class="demo-margin-right">按钮</em-button>
                    <em-button size="small" type="danger">按钮</em-button>
                </view>
            </template>
        </em-panel>
    </view>
</template>

<script></script>

<style lang="scss">
.content {
    padding: 20px;
    font-size: 16px;
}

.footer {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    text-align: right;
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
    color: rgba(69, 90, 100, 0.6);
    font-size: 14px;
    font-weight: 400;
}
</style>
