<template>
    <div :class="['theme-base', 'theme-' + EUIThemeManager.theme]" :style="EUIThemeManager.themeVars">
        <slot></slot>
    </div>
</template>

<script lang="ts" setup>
import { EUIThemeManager } from '@/theme';
</script>
<style lang="scss">
/* 主题css */
@import '@/theme/css/index.scss';
</style>
