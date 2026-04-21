<template>
    <div class="van-content">
        <div class="example-group">
            <text class="cell-title">基础用法</text>
            <div class="example-card">
                <div class="example-content">
                    <e-link-m href="https://element-plus.org">default</e-link-m>
                    <e-link-m type="primary">primary</e-link-m>
                    <e-link-m type="success">success</e-link-m>
                    <e-link-m type="warning">warning</e-link-m>
                    <e-link-m type="danger">danger</e-link-m>
                    <e-link-m type="info">info</e-link-m>
                </div>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">禁用状态</text>
            <div class="example-card">
                <div class="example-content">
                    <e-link-m disabled>default</e-link-m>
                    <e-link-m type="primary" disabled>primary</e-link-m>
                    <e-link-m type="success" disabled>success</e-link-m>
                    <e-link-m type="warning" disabled>warning</e-link-m>
                    <e-link-m type="danger" disabled>danger</e-link-m>
                    <e-link-m type="info" disabled>info</e-link-m>
                </div>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">下划线</text>
            <div class="example-card">
                <div class="example-content">
                    <e-link-m :underline="false">Without Underline</e-link-m>
                    <e-link-m>With Underline</e-link-m>
                </div>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">图标</text>
            <div class="example-card">
                <div class="example-content">
                    <e-link-m :icon="Edit">Edit</e-link-m>
                    <e-link-m>
                        Check
                        <e-icon-m class="e-icon--right"><icon-view /></e-icon-m>
                    </e-link-m>
                </div>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">按钮样式</text>
            <div class="example-card">
                <div class="example-content">
                    <div class="example-desc">Basic link button</div>
                    <div class="example-row">
                        <e-button-m v-for="button in buttons" :key="button.text" :type="button.type" link>{{ button.text }}</e-button-m>
                    </div>
                    <div class="example-desc">Disabled link button</div>
                    <div class="example-row">
                        <e-button-m v-for="button in buttons" :key="button.text" :type="button.type" link disabled>
                            {{ button.text }}
                        </e-button-m>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Edit, View as IconView } from '@epoint-mfe/eui-icons';
const buttons = [
    { type: '', text: 'plain' },
    { type: 'primary', text: 'primary' },
    { type: 'success', text: 'success' },
    { type: 'info', text: 'info' },
    { type: 'warning', text: 'warning' },
    { type: 'danger', text: 'danger' }
] as const;
</script>
<style scoped lang="scss">
@import '../css/common.scss';

.ep-link {
    margin-right: 8px;
}

.ep-link .ep-icon--right.ep-icon {
    vertical-align: text-bottom;
}
</style>
