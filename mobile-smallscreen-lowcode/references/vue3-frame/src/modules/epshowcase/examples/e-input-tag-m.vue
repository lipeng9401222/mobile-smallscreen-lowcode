<template>
    <div class="van-content">
        <div class="example-group">
            <text class="cell-title">基础用法</text>
            <div class="example-card">
                <e-input-tag-m v-model="input" placeholder="Please input" />
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">最大标签数</text>
            <div class="example-card">
                <e-input-tag-m v-model="input2" :max="3" placeholder="enter up to 3 tags" />
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">禁用状态</text>
            <div class="example-card">
                <e-input-tag-m v-model="input3" disabled placeholder="Please input" />
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">可清空</text>
            <div class="example-card">
                <e-input-tag-m v-model="input4" clearable placeholder="Please input" />
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">可拖放</text>
            <div class="example-card">
                <e-input-tag-m v-model="input5" draggable placeholder="Please input" />
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">尺寸</text>
            <div class="example-card">
                <div class="example-content">
                    <div class="example-desc">Large</div>
                    <e-input-tag-m v-model="input6" size="large" placeholder="Please input" />
                    
                    <div class="example-desc">Default</div>
                    <e-input-tag-m v-model="input6" placeholder="Please input" />
                    
                    <div class="example-desc">Small</div>
                    <e-input-tag-m v-model="input6" size="small" placeholder="Please input" />
                </div>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">自定义标签</text>
            <div class="example-card">
                <div class="example-content">
                    <div class="example-row">
                        <e-segmented-m v-model="tagType" :options="type" class="mr-5" />
                        <e-segmented-m v-model="tagEffect" :options="effect" />
                    </div>
                    <e-input-tag-m v-model="input7" :tag-type="tagType" :tag-effect="tagEffect" placeholder="Please input">
                        <template #tag="{ value }">
                            <div class="flex items-center">
                                <e-icon-m class="mr-1">
                                    <CollectionTag />
                                </e-icon-m>
                                <span>{{ value }}</span>
                            </div>
                        </template>
                    </e-input-tag-m>
                </div>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">自定义前缀和后缀</text>
            <div class="example-card">
                <e-input-tag-m v-model="input8" clearable placeholder="Please input">
                    <template #prefix>
                        <e-icon-m><CollectionTag /></e-icon-m>
                    </template>
                    <template #suffix>
                        <e-icon-m><Search /></e-icon-m>
                    </template>
                </e-input-tag-m>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { CollectionTag, Search } from '@epoint-mfe/eui-icons';
import type { TagProps } from '@epoint-mfe/eui-components';

const input = ref<string[]>();
const input2 = ref<string[]>();
const input3 = ref<string[]>(['tag1', 'tag2', 'tag3']);
const input4 = ref<string[]>(['tag1', 'tag2', 'tag3']);
const input5 = ref<string[]>(['tag1', 'tag2', 'tag3']);
const input6 = ref<string[]>();
const input7 = ref<string[]>(['tag1', 'tag2', 'tag3']);
const input8 = ref<string[]>();

const type: Array<TagProps['type']> = ['success', 'info', 'warning', 'danger'];
const effect: Array<TagProps['effect']> = ['light', 'dark', 'plain'];
const tagType = ref<TagProps['type']>('');
const tagEffect = ref<TagProps['effect']>('plain');
</script>
<style lang="scss" scoped>
@import '../css/common.scss';

.flex {
    display: flex;
}

.items-center {
    align-items: center;
}
</style>
