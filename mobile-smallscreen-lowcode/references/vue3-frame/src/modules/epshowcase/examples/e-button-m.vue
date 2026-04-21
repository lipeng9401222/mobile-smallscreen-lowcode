<template>
    <div class="van-content">
        <div class="example-group">
            <text class="cell-title">基本用法</text>
            <div class="example-card">
                <div class="example-content">
                    <div class="example-desc">圆角按钮</div>
                    <e-row-m class="column-gap-4">
                        <e-button-m>Default</e-button-m>
                        <e-button-m type="primary">Primary</e-button-m>
                        <e-button-m type="success">Success</e-button-m>
                        <e-button-m type="info">Info</e-button-m>
                        <e-button-m type="warning">Warning</e-button-m>
                        <e-button-m type="danger">Danger</e-button-m>
                    </e-row-m>

                    <div class="example-desc">直角按钮</div>
                    <e-row-m class="column-gap-4">
                        <e-button-m :round="false">Default</e-button-m>
                        <e-button-m type="primary" :round="false">Primary</e-button-m>
                        <e-button-m type="success" :round="false">Success</e-button-m>
                        <e-button-m type="info" :round="false">Info</e-button-m>
                        <e-button-m type="warning" :round="false">Warning</e-button-m>
                        <e-button-m type="danger" :round="false">Danger</e-button-m>
                    </e-row-m>

                    <div class="example-desc">朴素按钮</div>
                    <e-row-m class="column-gap-4">
                        <e-button-m plain>Plain</e-button-m>
                        <e-button-m type="primary" plain>Primary</e-button-m>
                        <e-button-m type="success" plain>Success</e-button-m>
                        <e-button-m type="info" plain>Info</e-button-m>
                        <e-button-m type="warning" plain>Warning</e-button-m>
                        <e-button-m type="danger" plain>Danger</e-button-m>
                    </e-row-m>

                    <div class="example-desc">圆形图标按钮</div>
                    <e-row-m class="column-gap-4">
                        <e-button-m :icon="Search" circle />
                        <e-button-m type="primary" :icon="Edit" circle />
                        <e-button-m type="success" :icon="Check" circle />
                        <e-button-m type="info" :icon="Message" circle />
                        <e-button-m type="warning" :icon="Star" circle />
                        <e-button-m type="danger" :icon="Delete" circle />
                    </e-row-m>
                </div>
            </div>
        </div>
        <text class="cell-title">禁用状态</text>
        <div class="flex justify-spacep-between mb-4 flex-wrap gap-4">
            <e-row-m class="column-gap-4">
                <e-button-m disabled>Default</e-button-m>
                <e-button-m type="primary" disabled>Primary</e-button-m>
                <e-button-m type="success" disabled>Success</e-button-m>
                <e-button-m type="info" disabled>Info</e-button-m>
                <e-button-m type="warning" disabled>Warning</e-button-m>
                <e-button-m type="danger" disabled>Danger</e-button-m>
            </e-row-m>

            <e-row-m class="column-gap-4">
                <e-button-m plain disabled>Plain</e-button-m>
                <e-button-m type="primary" plain disabled>Primary</e-button-m>
                <e-button-m type="success" plain disabled>Success</e-button-m>
                <e-button-m type="info" plain disabled>Info</e-button-m>
                <e-button-m type="warning" plain disabled>Warning</e-button-m>
                <e-button-m type="danger" plain disabled>Danger</e-button-m>
            </e-row-m>
        </div>
        <text class="cell-title">链接按钮</text>
        <div class="flex justify-spacep-between mb-4 flex-wrap gap-4">
            <p>Basic link button</p>
            <div class="column-gap-4">
                <e-button-m v-for="button in buttons" :key="button.text" :type="button.type" link>
                    {{ button.text }}
                </e-button-m>
            </div>

            <p>Disabled link button</p>
            <div class="column-gap-4">
                <e-button-m v-for="button in buttons" :key="button.text" :type="button.type" link disabled>
                    {{ button.text }}
                </e-button-m>
            </div>
        </div>
        <text class="cell-title">文字按钮</text>
        <div class="flex justify-spacep-between mb-4 flex-wrap gap-4">
            <p>Basic text button</p>
            <div class="column-gap-4">
                <e-button-m v-for="button in buttons" :key="button.text" :type="button.type" text>
                    {{ button.text }}
                </e-button-m>
            </div>

            <p>Background color always on</p>
            <div class="column-gap-4">
                <e-button-m v-for="button in buttons" :key="button.text" :type="button.type" text bg>
                    {{ button.text }}
                </e-button-m>
            </div>

            <p>Disabled text button</p>
            <div class="column-gap-4">
                <e-button-m v-for="button in buttons" :key="button.text" :type="button.type" text disabled>
                    {{ button.text }}
                </e-button-m>
            </div>
        </div>
        <text class="cell-title">图标按钮</text>
        <div class="flex justify-spacep-between mb-4 flex-wrap gap-4">
            <div class="column-gap-4">
                <e-button-m type="primary" :icon="Edit" />
                <e-button-m type="primary" :icon="Share" />
                <e-button-m type="primary" :icon="Delete" />
                <e-button-m type="primary" :icon="Search">Search</e-button-m>
                <e-button-m type="primary">
                    Upload
                    <e-icon-m class="ep-icon--right"><Upload /></e-icon-m>
                </e-button-m>
            </div>
        </div>
        <text class="cell-title">按钮组</text>
        <div class="flex justify-spacep-between mb-4 flex-wrap gap-4">
            <e-button-group-m>
                <e-button-m type="primary" :icon="ArrowLeft">Previous Page</e-button-m>
                <e-button-m type="primary">
                    Next Page
                    <e-icon-m class="ep-icon--right"><ArrowRight /></e-icon-m>
                </e-button-m>
            </e-button-group-m>

            <e-button-group-m class="ml-4">
                <e-button-m type="primary" :icon="Edit" />
                <e-button-m type="primary" :icon="Share" />
                <e-button-m type="primary" :icon="Delete" />
            </e-button-group-m>
        </div>
        <text class="cell-title">加载状态按钮</text>
        <div class="column-gap-4">
            <e-button-m type="primary" loading>Loading</e-button-m>
            <e-button-m type="primary" :loading-icon="Football" loading>Loading</e-button-m>
            <e-button-m type="primary" loading>
                <template #loading>
                    <e-icon-m :name="Football"></e-icon-m>
                </template>
                Loading
            </e-button-m>
        </div>
        <text class="cell-title">块级按钮</text>
        <div class="flex justify-spacep-between mb-4 flex-wrap gap-4">
            <div class="demo-block">
                <e-button-m block>块级按钮</e-button-m>
                <e-button-m type="primary" block>主要按钮</e-button-m>
                <e-button-m type="success" block>成功按钮</e-button-m>
                <e-button-m type="warning" block>警告按钮</e-button-m>
                <e-button-m type="danger" block>危险按钮</e-button-m>
                <e-button-m type="info" block>信息按钮</e-button-m>
            </div>
        </div>
        <text class="cell-title">调整尺寸</text>
        <div class="flex justify-spacep-between mb-4 flex-wrap gap-4">
            <e-row-m class="column-gap-4">
                <e-button-m size="large" round>Large</e-button-m>
                <e-button-m round>Default</e-button-m>
                <e-button-m size="small" round>Small</e-button-m>
                <e-button-m size="large" :icon="Search" round>Search</e-button-m>
                <e-button-m :icon="Search" round>Search</e-button-m>
                <e-button-m size="small" :icon="Search" round>Search</e-button-m>
            </e-row-m>
            <e-row-m class="column-gap-4">
                <e-button-m :icon="Search" size="large" circle />
                <e-button-m :icon="Search" circle />
                <e-button-m :icon="Search" size="small" circle />
            </e-row-m>
        </div>
        <text class="cell-title">自定义颜色</text>
        <div class="flex justify-spacep-between mb-4 flex-wrap gap-4">
            <div class="column-gap-4">
                <e-button-m color="#626aef" :dark="isDark">Default</e-button-m>
                <e-button-m color="#626aef" :dark="isDark" plain>Plain</e-button-m>

                <e-button-m color="#626aef" :dark="isDark" disabled>Disabled</e-button-m>
                <e-button-m color="#626aef" :dark="isDark" disabled plain>Disabled Plain</e-button-m>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import {
    Check,
    Delete,
    Edit,
    Message,
    Search,
    Star,
    Share,
    Upload,
    ArrowLeft,
    ArrowRight,
    Football
} from '@epoint-mfe/eui-icons';
const buttons = [
    { type: 'default', text: 'default', icon: 'Search' },
    { type: 'primary', text: 'primary', icon: 'Edit' },
    { type: 'success', text: 'success', icon: 'Check' },
    { type: 'info', text: 'info', icon: 'Message' },
    { type: 'warning', text: 'warning', icon: 'Star' },
    { type: 'danger', text: 'danger', icon: 'Delete' }
] as const;
const isDark = ref(false);
</script>
<style lang="scss" scoped>
@import '../css/common.scss';
.m-2 {
    margin-bottom: 8px;
}
.mt-4 {
    margin-top: 16px;
}
.ep-button .custom-loading .circular {
    margin-right: 6px;
    width: 18px;
    height: 18px;
    animation: loading-rotate 2s linear infinite;
}
.column-gap-4 {
    display: flex;
    flex-wrap: wrap;
    column-gap: 10px;
}
.ep-icon--right {
    display: flex;
    align-items: center;
    font-size: 1.2em;
    margin-left: var(--e-space-s);
}
</style>