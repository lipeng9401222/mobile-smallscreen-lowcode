<template>
    <div class="van-content">
        <div class="example-group">
            <text class="cell-title">基本使用</text>
            <div class="example-card">
                <e-tooltip-m content="prompts info">
                    <e-button-m>展示提示信息</e-button-m>
                </e-tooltip-m>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">设置HTML字符串</text>
            <div class="example-card">
                <e-tooltip-m rawContent content="<span>The content can be <strong>HTML</strong></span>">
                    <e-button-m>展示HTML信息</e-button-m>
                </e-tooltip-m>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">禁用</text>
            <div class="example-card">
                <e-tooltip-m disabled content="prompts info">
                    <e-button-m>禁用</e-button-m>
                </e-tooltip-m>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">自定义内容</text>
            <div class="example-card">
                <e-tooltip-m>
                    <template #content>
                        <span>Content</span>
                    </template>
                    <e-button-m>展示提示信息</e-button-m>
                </e-tooltip-m>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const visible = ref(false);
</script>

<style lang="scss" scoped>
@import '../css/common.scss';
</style>
