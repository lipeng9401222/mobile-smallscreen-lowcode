<template>
    <div class="van-content">
        <div class="example-group">
            <text class="cell-title">基本用法</text>
            <div class="example-card">
                <e-tree-select-m v-model="value1" :data="data" />
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">复选框</text>
            <div class="example-card">
                <e-tree-select-m v-model="value2" :data="data" checkable multiple />
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">单选框</text>
            <div class="example-card">
                <e-tree-select-m v-model="value3" :data="data" checkable />
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">多选模式(非联动)</text>
            <div class="example-card">
                <e-tree-select-m v-model="value13" :data="data" checkable multiple check-strictly />
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">定制回填方式</text>
            <div class="example-card">
                <div class="example-content">
                    <div class="strategy-wrapper">
                        <e-radio-group-m v-model="checkedStrategy" type="button" @change="handleStrategyChange">
                            <e-radio-m v-for="item in strategyOptions" :key="item.value" :value="item.value">
                                {{ item.label }}
                            </e-radio-m>
                        </e-radio-group-m>
                    </div>
                    <e-tree-select-m
                        v-model="value7"
                        checkable
                        multiple
                        :checked-strategy="checkedStrategy"
                        :keep-selected-on-strategy-change="false"
                        :data="data"
                    />
                </div>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">禁用选项</text>
            <div class="example-card">
                <e-tree-select-m v-model="value4" :data="disabledData" />
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">可过滤（带选框）</text>
            <div class="example-card">
                <e-tree-select-m v-model="value9" :data="data" filterable checkable />
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">远程搜索（带选框）</text>
            <div class="example-card">
                <e-tree-select-m
                    v-model="value10"
                    :data="remoteData"
                    filterable
                    checkable
                    :filter-method="filterMethod"
                    :loading="isLoading"
                />
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">自定义内容</text>
            <div class="example-card">
                <e-tree-select-m v-model="value11" :data="data" placeholder="自定义节点显示内容">
                    <template #default="{ data: { label } }">
                        {{ label }}
                        <span style="color: gray">(suffix)</span>
                    </template>
                </e-tree-select-m>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">延迟加载</text>
            <div class="example-card">
                <e-tree-select-m v-model="value12" :data="defaultTreeData" :load-more="loadMore" />
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

interface TreeNodeData {
    value?: string | number;
    label?: string;
    children?: TreeNodeData[];
    disabled?: boolean;
    isLeaf?: boolean;
    selectable?: boolean;
}

const value1 = ref('');
const value2 = ref([]);
const value3 = ref('');
const value4 = ref('');
const value7 = ref([]);
const value9 = ref([]);
const value10 = ref([]);
const value11 = ref('');
const value12 = ref('');
const value13 = ref([]);

const data: TreeNodeData[] = [
    {
        value: '1',
        label: 'Level one 1',
        children: [
            {
                value: '1-1',
                label: 'Level two 1-1',
                children: [
                    {
                        value: '1-1-1',
                        label: 'Level three 1-1-1'
                    }
                ]
            }
        ]
    },
    {
        value: '2',
        label: 'Level one 2',
        children: [
            {
                value: '2-1',
                label: 'Level two 2-1',
                children: [
                    {
                        value: '2-1-1',
                        label: 'Level three 2-1-1'
                    }
                ]
            },
            {
                value: '2-2',
                label: 'Level two 2-2',
                children: [
                    {
                        value: '2-2-1',
                        label: 'Level three 2-2-1'
                    }
                ]
            }
        ]
    },
    {
        value: '3',
        label: 'Level one 3',
        children: [
            {
                value: '3-1',
                label: 'Level two 3-1',
                children: [
                    {
                        value: '3-1-1',
                        label: 'Level three 3-1-1'
                    }
                ]
            },
            {
                value: '3-2',
                label: 'Level two 3-2',
                children: [
                    {
                        value: '3-2-1',
                        label: 'Level three 3-2-1'
                    }
                ]
            }
        ]
    }
];

const disabledData: TreeNodeData[] = [
    {
        value: '1',
        label: 'Level one 1',
        children: [
            {
                value: '1-1',
                label: 'Level two 1-1',
                disabled: true,
                children: [
                    {
                        value: '1-1-1',
                        label: 'Level three 1-1-1'
                    }
                ]
            }
        ]
    },
    {
        value: '2',
        label: 'Level one 2',
        disabled: true
    }
];

const checkedStrategy = ref('all');
const strategyOptions = [
    { label: '全部', value: 'all' },
    { label: '父节点', value: 'parent' },
    { label: '子节点', value: 'child' }
];

const handleStrategyChange = (value) => {
    value7.value = [];
};

const remoteData = ref<TreeNodeData[]>([]);
const isLoading = ref(false);

const filterMethod = (pattern, node) => {
    isLoading.value = true;
    setTimeout(() => {
        remoteData.value = data;
        isLoading.value = false;
    }, 1000);
    return node.label.includes(pattern);
};

const defaultTreeData: TreeNodeData[] = [
    {
        value: '1',
        label: 'Level one 1',
        isLeaf: false
    },
    {
        value: '2',
        label: 'Level one 2',
        isLeaf: false
    }
];

const loadMore = (node: TreeNodeData, resolve: (data: TreeNodeData[]) => void) => {
    setTimeout(() => {
        resolve([
            {
                value: `${node.value}-1`,
                label: `Level two ${node.value}-1`,
                isLeaf: false
            },
            {
                value: `${node.value}-2`,
                label: `Level two ${node.value}-2`,
                isLeaf: true
            }
        ]);
    }, 1000);
};
</script>

<style lang="scss" scoped>
@import '../css/common.scss';

.strategy-wrapper {
    margin-bottom: 16px;
}
</style>
