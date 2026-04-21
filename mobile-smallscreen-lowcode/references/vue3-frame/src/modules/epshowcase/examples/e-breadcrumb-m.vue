<template>
    <div class="van-content">
        <div class="example-group">
            <text class="cell-title">基础用法</text>
            <div class="example-card">
                <e-breadcrumb-m separator="/">
                    <e-breadcrumb-item-m :to="{ path: '/' }">组织架构</e-breadcrumb-item-m>
                    <e-breadcrumb-item-m><a href="https://www.baidu.com/">新点软件</a></e-breadcrumb-item-m>
                    <e-breadcrumb-item-m :to="{ path: '/' }">产品和解决方案体系</e-breadcrumb-item-m>
                    <e-breadcrumb-item-m>中央研究院</e-breadcrumb-item-m>
                </e-breadcrumb-m>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">图标分隔符</text>
            <div class="example-card">
                <e-breadcrumb-m :separator-icon="ArrowRight">
                    <e-breadcrumb-item-m :to="{ path: '/' }">组织架构</e-breadcrumb-item-m>
                    <e-breadcrumb-item-m :to="{ path: '/' }">新点软件</e-breadcrumb-item-m>
                    <e-breadcrumb-item-m :to="{ path: '/' }">产品和解决方案体系</e-breadcrumb-item-m>
                    <e-breadcrumb-item-m>中央研究院</e-breadcrumb-item-m>
                </e-breadcrumb-m>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ArrowRight } from '@epoint-mfe/eui-icons';
</script>
<style lang="scss" scoped>
@import '../css/common.scss';
</style>
