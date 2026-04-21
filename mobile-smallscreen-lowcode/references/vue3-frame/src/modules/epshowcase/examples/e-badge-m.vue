<template>
    <div class="van-content">
        <div class="example-group">
            <text class="cell-title">基本使用</text>
            <div class="example-card">
                <div class="example-row">
                    <e-badge-m :value="12" class="item">
                        <e-button-m>comments</e-button-m>
                    </e-badge-m>
                    <e-badge-m :value="3" class="item">
                        <e-button-m>replies</e-button-m>
                    </e-badge-m>
                    <e-badge-m :value="1" class="item" type="primary">
                        <e-button-m>comments</e-button-m>
                    </e-badge-m>
                    <e-badge-m :value="2" class="item" type="warning">
                        <e-button-m>replies</e-button-m>
                    </e-badge-m>

                    <e-dropdown-m  class="item" trigger="click">
                        <span class="ep-dropdown-link">Click Me
                          <e-icon-m class="e-icon--right"><caret-bottom /></e-icon-m>
                        </span>
                        <template #dropdown>
                            <e-dropdown-menu-m>
                                <e-dropdown-item-m class="clearfix">
                                    comments
                                    <e-badge-m class="mark" :value="12" />
                                </e-dropdown-item-m>
                                <e-dropdown-item-m class="clearfix">
                                    replies
                                    <e-badge-m class="mark" :value="3" />
                                </e-dropdown-item-m>
                            </e-dropdown-menu-m>
                        </template>
                    </e-dropdown-m>
                </div>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">最大值</text>
            <div class="example-card">
                <div class="example-row">
                    <e-badge-m :value="200" :max="99" class="item">
                        <e-button-m>comments</e-button-m>
                    </e-badge-m>
                    <e-badge-m :value="100" :max="10" class="item">
                        <e-button-m>replies</e-button-m>
                    </e-badge-m>
                </div>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">自定义显示内容</text>
            <div class="example-card">
                <div class="example-row">
                    <e-badge-m value="new" class="item">
                        <e-button-m>comments</e-button-m>
                    </e-badge-m>
                    <e-badge-m value="hot" class="item">
                        <e-button-m>replies</e-button-m>
                    </e-badge-m>
                </div>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">小红点</text>
            <div class="example-card">
                <div class="example-row">
                    <e-badge-m is-dot class="item">query</e-badge-m>
                    <e-badge-m is-dot class="item">
                        <e-button-m class="sharep-button" :icon="'Share'" type="primary" />
                    </e-badge-m>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { CaretBottom } from '@epoint-mfe/eui-icons';
</script>
<style lang="scss" scoped>
@import '../css/common.scss';

.item {
    margin: 10px 15px;
}
</style>
