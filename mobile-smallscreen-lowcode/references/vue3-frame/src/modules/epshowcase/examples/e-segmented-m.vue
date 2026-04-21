<template>
    <div class="van-content">
        <div class="example-group">
            <text class="cell-title">基本使用</text>
            <div class="example-card">
                <div class="example-content">
                    <div class="example-desc">Large</div>
                    <e-segmented-m v-model="value" :options="options" size="large"></e-segmented-m>
                    <div class="example-desc">Default</div>
                    <e-segmented-m v-model="value" :options="options" size="default" style="margin-top: 10px"></e-segmented-m>
                    <div class="example-desc">Small</div>
                    <e-segmented-m v-model="value" :options="options" size="small" style="margin-top: 10px"></e-segmented-m>
                </div>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">配置方向</text>
            <div class="example-card">
                <div class="example-content">
                    <e-segmented-m v-model="size" :options="sizeOptions" style="margin-bottom: 1rem" />
                    <e-segmented-m v-model="direction" :options="directionOptions" style="margin-bottom: 1rem" />
                    <e-segmented-m v-model="value2" :options="options2" :direction="direction" :size="size">
                        <template #default="scope">
                            <div :class="['flex', 'items-center', 'gap-2', 'flex-col', direction === 'horizontal' && 'p-2']">
                                <e-icon-m size="20" :name="scope.item.icon"></e-icon-m>
                                <div>{{ scope.item.label }}</div>
                            </div>
                        </template>
                    </e-segmented-m>
                </div>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">禁用状态</text>
            <div class="example-card">
                <div class="example-content">
                    <div class="example-desc">Disabled</div>
                    <e-segmented-m v-model="value3" :options="options3" disabled />
                    <div class="example-desc">Enabled</div>
                    <e-segmented-m v-model="value3" :options="options3" style="margin-top: 10px" />
                </div>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">Block 分段选择器</text>
            <div class="example-card">
                <e-segmented-m v-model="value4" :options="options4" block />
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">自定义内容</text>
            <div class="example-card">
                <e-segmented-m v-model="value2" :options="options2">
                    <template #default="scope">
                        <div class="flex flex-col items-center gap-2 p-2">
                            <e-icon-m size="20" :name="scope.item.icon"></e-icon-m>
                            <div>{{ scope.item.label }}</div>
                        </div>
                    </template>
                </e-segmented-m>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">自定义样式</text>
            <div class="example-card">
                <div class="custom-style">
                    <e-segmented-m v-model="value5" :options="options5" block />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const value = ref('Mon');

const options = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

//==========================================配置方向==============================================
import type { SegmentedProps } from '@epoint-mfe/eui-components';
const value2 = ref('Apple');
const direction = ref<SegmentedProps['direction']>('horizontal');
const size = ref<SegmentedProps['size']>('default');

const directionOptions = [
    { label: 'Horizontal', value: 'horizontal' },
    { label: 'Vertical', value: 'vertical' }
];

const sizeOptions = ['large', 'default', 'small'];

const options2 = [
    {
        label: 'Apple',
        value: 'Apple',
        icon: 'Apple'
    },
    {
        label: 'Cherry',
        value: 'Cherry',
        icon: 'Cherry'
    },
    {
        label: 'Grape',
        value: 'Grape',
        icon: 'Grape'
    },
    {
        label: 'Orange',
        value: 'Orange',
        icon: 'Orange'
    },
    {
        label: 'Pear',
        value: 'Pear',
        icon: 'Pear',
        disabled: true
    }
];
//==========================================禁用状态==============================================
const value3 = ref('Mon');
const options3 = [
    {
        label: 'Mon',
        value: 'Mon',
        disabled: true
    },
    {
        label: 'Tue',
        value: 'Tue'
    },
    {
        label: 'Wed',
        value: 'Wed',
        disabled: true
    },
    {
        label: 'Thu',
        value: 'Thu'
    },
    {
        label: 'Fri',
        value: 'Fri',
        disabled: true
    },
    {
        label: 'Sat',
        value: 'Sat'
    },
    {
        label: 'Sun',
        value: 'Sun'
    }
];
//==========================================Block分段选择器==============================================
const value4 = ref('Mon');

const options4 = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sunday long long long long long long long'];

//==========================================自定义样式==============================================

const value5 = ref('Delicacy');

const options5 = ['Delicacy', 'Desserts&Drinks', 'Fresh foods', 'Supermarket'];
</script>

<style lang="scss" scoped>
@import '../css/common.scss';

.flex {
    display: flex;
}

.flex-col {
    flex-direction: column;
}

.items-center {
    align-items: center;
}

.custom-style {
    height: 50px;
    .ep-segmented {
        --e-segmented-item-selected-color: var(--e-text-color-primary);
        --e-segmented-item-selected-bg-color: #ffd100;
        --e-border-radius-base: 16px;
    }
}
</style>
