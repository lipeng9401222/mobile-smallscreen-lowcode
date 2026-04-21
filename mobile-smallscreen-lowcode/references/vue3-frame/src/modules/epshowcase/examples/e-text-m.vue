<template>
    <div class="van-content">
        <div class="example-group">
            <text class="cell-title">基础用法</text>
            <div class="example-card">
                <div class="example-row">
                    <e-text-m>Default</e-text-m>
                    <e-text-m type="primary">Primary</e-text-m>
                    <e-text-m type="success">Success</e-text-m>
                    <e-text-m type="info">Info</e-text-m>
                    <e-text-m type="warning">Warning</e-text-m>
                    <e-text-m type="danger">Danger</e-text-m>
                </div>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">size尺寸</text>
            <div class="example-card">
                <div class="example-row">
                    <e-text-m>Default</e-text-m>
                    <e-text-m size="large">Large</e-text-m>
                    <e-text-m size="small">Small</e-text-m>
                </div>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">省略号</text>
            <div class="example-card">
                <div class="example-content">
                    <div style="width: 100px;">
                        <e-text-m truncated>Self element set width 100px</e-text-m>
                    </div>
                    <div class="example-row">
                        <div style="max-width: 20%;">
                            <e-text-m truncated>Squeezed by parent element</e-text-m>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">tag覆盖</text>
            <div class="example-card">
                <div class="example-content">
                    <e-text-m>span</e-text-m>
                    <e-text-m tag="p">This is a paragraph.</e-text-m>
                    <e-text-m tag="b">Bold</e-text-m>
                    <e-text-m tag="i">Italic</e-text-m>
                    <e-text-m>
                        This is
                        <e-text-m tag="sub" size="small" type="primary">subscript</e-text-m>
                    </e-text-m>
                    <e-text-m>
                        This is
                        <e-text-m tag="sup" size="small">superscript</e-text-m>
                    </e-text-m>
                    <e-text-m tag="ins">Inserted</e-text-m>
                    <e-text-m tag="del">Deleted</e-text-m>
                    <e-text-m tag="mark">Marked</e-text-m>
                </div>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">文本混合</text>
            <div class="example-card">
                <div class="example-content">
                    <e-text-m>
                        <e-icon-m>
                            <Flag />
                        </e-icon-m>
                        旗帜
                    </e-text-m>
                    <div class="example-row">
                        <e-text-m>Rate</e-text-m>
                        <e-rate-m/>
                    </div>
                    <e-text-m>
                        This is text mixed icon
                        <e-icon-m>
                            <Bell />
                        </e-icon-m>
                        and component
                        <e-button-m type="info" plain>Button</e-button-m>
                    </e-text-m>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { Bell, Flag } from '@epoint-mfe/eui-icons';
</script>

<style scoped lang='scss'>
@import '../css/common.scss';
</style>
