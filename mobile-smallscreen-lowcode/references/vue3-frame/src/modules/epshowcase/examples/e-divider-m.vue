<template>
    <div class="van-content">
        <div class="example-group">
            <text class="cell-title">基础用法</text>
            <div class="example-card">
                <div class="example-content">
                    <span>今天早晨，我坐在窗前，世界像一个路人一样停下来片刻，向我点头然后离去。</span>
                    <e-divider-m />
                    <span>那里，小小的念头就像树叶的沙沙声；它们在我的心灵中轻声细语，传递着喜悦。</span>
                </div>
            </div>
        </div>

        <text class="cell-title">设置文案</text>
        <div class="example-card">
            <div>
                <span>你所看到的不是你自己，而是你的影子。</span>
                <e-divider-m content-position="left">拉宾德拉纳特·泰戈尔</e-divider-m>
                <span>我的愿望是傻瓜，它们在你的歌声中呼喊，我的大师。让我只是倾听。</span>
                <e-divider-m>
                    <e-icon-m name="StarFilled"></e-icon-m>
                </e-divider-m>
                <span>我不能选择最好的。最好的选择了我。</span>
                <e-divider-m content-position="right">拉宾德拉纳特·泰戈尔</e-divider-m>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">虚线</text>
            <div class="example-card">
                <div class="example-content">
                    <div>
                        <span>大海，你使用的是什么语言？</span>
                        <e-divider-m border-style="dashed" />
                        <span>永恒问题的语言。</span>
                    </div>
                    <e-divider-m border-style="dotted" />
                    <span>天空，你的答案是什么语言？</span>
                    <e-divider-m border-style="double" />
                    <span>永恒沉默的语言。</span>
                </div>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">垂直分隔符</text>
            <div class="example-card">
                <div class="example-row">
                    <span>雨</span>
                    <e-divider-m direction="vertical" />
                    <span>首页</span>
                    <e-divider-m direction="vertical" border-style="dashed" />
                    <span>草</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
</script>
<style lang="scss" scoped>
@import '../css/common.scss';
</style>
