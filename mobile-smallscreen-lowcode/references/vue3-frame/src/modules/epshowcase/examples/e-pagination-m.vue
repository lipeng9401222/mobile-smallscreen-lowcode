<template>
    <div class="van-content">
        <div class="example-group">
            <text class="cell-title">基本使用</text>
            <div class="example-card">
                <e-pagination-m v-model:current="current" v-model:page-size="pageSize" :total="50"></e-pagination-m>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">改变每页数量</text>
            <div class="example-card">
                <e-pagination-m :total="50" show-size-changer></e-pagination-m>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">自定义下拉选项</text>
            <div class="example-card">
                <e-pagination-m
                    v-model:page-size="pageSizeRef"
                    :total="50"
                    :page-size-options="pageSizeOptions"
                    :build-option-text="buildOptionText"
                    show-size-changer
                    @show-size-change="onShowSizeChange"
                ></e-pagination-m>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">快速跳转</text>
            <div class="example-card">
                <e-pagination-m :total="50" showQuickJumper @change="onChange"></e-pagination-m>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">迷你</text>
            <div class="example-card">
                <div class="example-content">
                    <e-pagination-m size="small" :total="50" />
                    <e-pagination-m size="small" :total="50" show-size-changer show-quick-jumper />
                    <e-pagination-m size="small" :total="50" :show-total="(total) => `Total ${total} items`" />
                </div>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">简洁模式</text>
            <div class="example-card">
                <e-pagination-m :total="50" simple></e-pagination-m>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">显示总数</text>
            <div class="example-card">
                <e-pagination-m
                    v-model:current="current2"
                    v-model:page-size="pageSize2"
                    :total="85"
                    :show-total="(total, range) => `${range[0]}-${range[1]} of ${total} items`"
                />
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">修改上一步和下一步</text>
            <div class="example-card">
                <e-pagination-m :total="50">
                    <template #itemRender="{ type, originalElement }">
                        <span v-if="type === 'prev'">Previous</span>
                        <span v-else-if="type === 'next'">Next</span>
                        <component :is="originalElement" v-else />
                    </template>
                </e-pagination-m>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref, h } from 'vue';
const current = ref(1);
const pageSize = ref(10);
const current2 = ref(1);
const pageSize2 = ref(10);
const pageSizeRef = ref(10);
const pageSizeOptions = ref<string[]>(['10', '20', '30', '40', '50']);
const buildOptionText = (option) => {
    if (option.value !== '50') {
        return `${option.value}条/页`;
    }
    return '全部';
};
const onShowSizeChange = (current: number, pageSize: number) => {
    console.log('onShowSizeChange', current, pageSize);
    pageSizeRef.value = pageSize;
};

const itemRender = (page: number, type: string, originalElement: any) => {
    if (type === 'prev') {
        return h('span', {}, 'Previous');
    }
    if (type === 'next') {
        return h('span', {}, 'Next');
    }

    return originalElement;
};
const onChange = (page: number, pageSize: number) => {
    console.log('change', page, pageSize);
};
</script>
<style lang="scss" scoped>
@import '../css/common.scss';
</style>
