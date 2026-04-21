<template>
    <div class="van-content">
        <div class="example-group">
            <text class="cell-title">基础用法</text>
            <div class="example-card">
                <div class="example-content">
                    <e-alert-m title="primary alert" type="primary" />
                    <e-alert-m title="success alert" type="success" />
                    <e-alert-m title="info alert" type="info" />
                    <e-alert-m title="warning alert" type="warning" />
                    <e-alert-m title="error alert" type="error" />
                </div>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">主题</text>
            <div class="example-card">
                <div class="example-content">
                    <e-alert-m title="success alert" type="success" effect="dark" />
                    <e-alert-m title="info alert" type="info" effect="dark" />
                    <e-alert-m title="warning alert" type="warning" effect="dark" />
                    <e-alert-m title="error alert" type="error" effect="dark" />
                    <e-alert-m title="error alert" type="primary" effect="dark" />
                </div>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">自定义关闭按钮</text>
            <div class="example-card">
                <div class="example-content">
                    <e-alert-m title="unclosable alert" type="success" :closable="false" />
                    <e-alert-m title="customized close-text" type="info" close-text="Gotcha" />
                    <e-alert-m title="alert with callback" type="warning" @close="hello" />
                </div>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">图标</text>
            <div class="example-card">
                <div class="example-content">
                    <e-alert-m title="success alert" type="primary" show-icon />
                    <e-alert-m title="success alert" type="success" show-icon />
                    <e-alert-m title="info alert" type="info" show-icon />
                    <e-alert-m title="warning alert" type="warning" show-icon />
                    <e-alert-m title="error alert" type="error" show-icon />
                </div>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">文字居中</text>
            <div class="example-card">
                <div class="example-content">
                    <e-alert-m title="success alert" type="success" center show-icon />
                    <e-alert-m title="info alert" type="info" center show-icon />
                    <e-alert-m title="warning alert" type="warning" center show-icon />
                    <e-alert-m title="error alert" type="error" center show-icon />
                </div>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">辅助性文字</text>
            <div class="example-card">
                <e-alert-m title="with description" type="success" description="This is a description." />
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">图标和描述</text>
            <div class="example-card">
                <div class="example-content">
                    <e-alert-m title="success alert" type="success" description="more text description" show-icon />
                    <e-alert-m title="info alert" type="info" description="more text description" show-icon />
                    <e-alert-m title="warning alert" type="warning" description="more text description" show-icon />
                    <e-alert-m title="error alert" type="error" description="more text description" show-icon />
                </div>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">折叠面板</text>
            <div class="example-card">
                <div class="example-content">
                    <e-alert-m title="success alert" type="success" description="more text description" collapsible />
                    <e-alert-m title="info alert" type="info" description="more text description" collapsible
                        collapse-text="collapse" expand-text="expand" show-icon />
                    <e-alert-m title="warning alert" type="warning" description="more text description" center collapsible
                        collapse-text="collapse" expand-text="expand" />
                    <e-alert-m title="error alert" type="error" description="more text description" center show-icon collapsible
                        collapse-text="collapse" expand-text="expand" />
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
const hello = () => {
    alert('Hello World!');
};
</script>
<style scoped lang='scss'>
@import '../css/common.scss';

.ep-alert {
    &+& {
        margin-top: 20px;
    }
}
</style>
