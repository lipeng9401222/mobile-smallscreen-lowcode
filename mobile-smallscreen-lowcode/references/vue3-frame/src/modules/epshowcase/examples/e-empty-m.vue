<template>
    <div class="van-content">
        <div class="example-group">
            <text class="cell-title">基础用法</text>
            <div class="example-card">
                <e-empty-m description="暂无数据" />
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">自定义图片</text>
            <div class="example-card">
                <e-empty-m
                    description="暂无数据"
                    image="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                />
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">图片尺寸</text>
            <div class="example-card">
                <e-empty-m description="暂无数据" :image-size="120" />
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">底部内容</text>
            <div class="example-card">
                <e-empty-m description="暂无数据">
                    <e-button-m type="primary" size="small">添加数据</e-button-m>
                </e-empty-m>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@import '../css/common.scss';
</style>
