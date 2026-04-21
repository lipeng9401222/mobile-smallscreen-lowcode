<template>
    <div class="van-content">
        <text class="cell-title">基本使用</text>
        <e-tree-m
            ref="treeRef"
            :data="treeData"
            :default-expanded-keys="['0-0-0']"
            :default-selected-keys="['0-1-1-2']"
            @select="handleSelect"
        />
        <div class="example-info">
            <p>选中节点: {{ selectedInfo }}</p>
        </div>

        <text class="cell-title">带单选框的树</text>
        <e-tree-m v-model:checked-keys="singleModeCheckedKeys" :checkable="true" :multiple="false" :data="treeData" />
        <div class="example-info">
            <p>checkedKeys: {{ singleModeCheckedKeys.join(', ') || '无' }}</p>
        </div>

        <text class="cell-title">带复选框的树</text>
        <div class="example-flex">
            <e-checkbox-m v-model="checkStrictly">checkStrictly</e-checkbox-m>
        </div>
        <e-tree-m
            ref="multiModeTreeRef"
            v-model:checked-keys="multiModeCheckedKeys"
            v-model:selected-keys="multiModeSelectedKeys"
            :checkable="true"
            :multiple="true"
            :check-strictly="checkStrictly"
            :data="treeData"
        />
        <div class="example-info">
            <p>checkedKeys: {{ multiModeCheckedKeys.join(', ') || '无' }}</p>
        </div>

        <text class="cell-title">双向绑定示例</text>
        <div class="example-flex">
            <e-button-m type="primary" @click="toggleChecked">
                {{ isAllNodesChecked ? '取消全选' : '全选' }}
            </e-button-m>
        </div>
        <e-tree-m
            v-model:selected-keys="bindingSelectedKeys"
            v-model:checked-keys="bindingCheckedKeys"
            v-model:expanded-keys="bindingExpandedKeys"
            :checkable="true"
            :multiple="true"
            :data="treeData"
            :check-strictly="false"
            @select="onBindingSelect"
            @check="onBindingCheck"
            @expand="onBindingExpand"
        />
        <div class="example-info">
            <p>checkedKeys: {{ bindingCheckedKeys.join(', ') || '无' }}</p>
        </div>

        <text class="cell-title">设置回填方式</text>
        <div class="example-flex">
            <e-radio-group-m v-model="checkedStrategy" type="button" @change="handleStrategyChange">
                <e-radio-m v-for="item in strategyOptions" :key="item.value" :value="item.value">
                    {{ item.label }}
                </e-radio-m>
            </e-radio-group-m>
        </div>
        <e-tree-m
            ref="strategyTreeRef"
            v-model:checked-keys="strategyCheckedKeys"
            :checkable="true"
            :multiple="true"
            :checked-strategy="checkedStrategy"
            :data="treeData"
        />
        <div class="example-info">
            <p>checkedKeys: {{ strategyCheckedKeys.join(', ') || '无' }}</p>
        </div>

        <text class="cell-title">定制额外节点</text>
        <e-tree-m
            v-model:checked-keys="extraNodeCheckedKeys"
            :data="extraNodeTreeData"
            :block-node="true"
            :checkable="true"
            :multiple="true"
        >
            <template #extra="nodeData">
                <e-icon-m style="color: #3370ff" @click="() => onIconClick(nodeData)">
                    <Plus />
                </e-icon-m>
                <e-icon-m style="color: #f53f3f" @click="() => onIconClick(nodeData)">
                    <Minus />
                </e-icon-m>
            </template>
        </e-tree-m>
        <div class="example-info">
            <p>checkedKeys: {{ extraNodeCheckedKeys.join(', ') || '无' }}</p>
        </div>

        <text class="cell-title">动态加载节点</text>
        <e-tree-m :data="dynamicTreeData" :load-more="loadMoreNodes" />
        <div class="example-info">
            <p>点击展开节点时会动态加载子节点数据，并显示loading效果。</p>
        </div>

        <text class="cell-title">加载中图标自定义</text>
        <div class="example-flex">
            <e-button-m type="primary" @click="resetLoadingData">重置加载数据</e-button-m>
        </div>
        <div class="example-info">
            <p>加载延时: {{ loadingDelay }}秒</p>
        </div>
        <e-tree-m :data="loadingTreeData" :load-more="loadMoreNodes">
            <template #loading-icon="{ isLeaf, loading }">
                <!-- 定制 loading 图标 -->
                <!-- 使用 is-loading 类让图标旋转 -->
                <e-icon-m v-if="!isLeaf && loading" class="is-loading">
                    <Promotion />
                </e-icon-m>
            </template>
        </e-tree-m>

        <text class="cell-title">类型图标</text>
        <e-tree-m
            v-model:checked-keys="typeIconCheckedKeys"
            :data="treeData"
            :show-type-icon="showTypeIcon"
            checkable
            multiple
        />
        <div class="example-info">
            <p>checkedKeys: {{ typeIconCheckedKeys.join(', ') || '无' }}</p>
        </div>

        <text class="cell-title">类型图标自定义</text>
        <e-tree-m
            v-model:checked-keys="typeIconCustomCheckedKeys"
            :data="typeIconTreeData"
            checkable
            multiple
            show-type-icon
        >
            <template #type-icon="{ isLeaf, expanded }">
                <template v-if="!isLeaf">
                    <Folder v-if="!expanded" />
                    <FolderOpened v-else />
                </template>
                <template v-else>
                    <User />
                </template>
            </template>
        </e-tree-m>
        <div class="example-info">
            <p>checkedKeys: {{ typeIconCustomCheckedKeys.join(', ') || '无' }}</p>
        </div>

        <text class="cell-title">节点图标</text>
        <e-tree-m v-model:checked-keys="nodeIconCheckedKeys" :data="treeData" show-icon checkable multiple />
        <div class="example-info">
            <p>checkedKeys: {{ nodeIconCheckedKeys.join(', ') || '无' }}</p>
        </div>

        <text class="cell-title">节点图标自定义</text>
        <e-tree-m v-model:checked-keys="nodeIconCustomCheckedKeys" :data="nodeIconTreeData" checkable multiple show-icon>
            <template #icon="{ isLeaf, expanded }">
                <!-- 定制节点图标 -->
                <template v-if="!isLeaf">
                    <Folder v-if="!expanded" />
                    <FolderOpened v-else />
                </template>
                <template v-else>
                    <User />
                </template>
            </template>
        </e-tree-m>
        <div class="example-info">
            <p>checkedKeys: {{ nodeIconCustomCheckedKeys.join(', ') || '无' }}</p>
        </div>

        <text class="cell-title">搜索树（单选）</text>
        <e-tree-m
            v-model:checked-keys="searchSingleCheckedKeys"
            :data="treeData"
            show-filter
            checkable
            :multiple="false"
        />

        <text class="cell-title">搜索树（多选）</text>
        <e-tree-m
            v-model:checked-keys="searchMultiCheckedKeys"
            :data="treeData"
            show-filter
            checkable
            :multiple="true"
            :check-strictly="false"
        />

        <text class="cell-title">远程搜索树（单选）</text>
        <e-tree-m
            v-model:checked-keys="remoteSearchSingleCheckedKeys"
            :data="remoteTreeData"
            show-filter
            :filter-method="remoteFilter"
            checkable
            :multiple="false"
        />

        <text class="cell-title">远程搜索树（多选）</text>
        <e-tree-m
            v-model:checked-keys="remoteSearchMultiCheckedKeys"
            :data="remoteTreeData"
            show-filter
            :filter-method="remoteFilter"
            checkable
            :multiple="true"
            :check-strictly="false"
        />

        <text class="cell-title">自定义 data 的字段名称</text>
        <e-tree-m
            :default-selected-keys="['0-0-1']"
            :field-names="{
                value: 'value',
                label: 'text',
                children: 'items',
                icon: 'customIcon'
            }"
            :data="customFieldsTreeData"
        />
        <div class="example-info">
            <p>自定义字段映射: { value: 'value', label: 'text', children: 'items', icon: 'customIcon' }</p>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref, onMounted, nextTick, watch, computed } from 'vue';
// #ifdef H5
import { h } from 'vue';
// #endif
import {
    Finished,
    Folder,
    FolderOpened,
    User,
    UserFilled,
    Promotion,
    Loading,
    Plus,
    Minus
} from '@epoint-mfe/eui-icons';

// 树组件引用
const treeRef = ref(null);

// 选中节点信息
const selectedInfo = ref('');

// 处理选择事件
const handleSelect = (selectedKeys, eventData) => {
    if (eventData && eventData.node) {
        const node = eventData.node;

        selectedInfo.value = `${node.label} (${node.value || node.key})`;
    } else {
        selectedInfo.value = selectedKeys.length > 0 ? selectedKeys.join(', ') : '无';
    }
};

// 单选框模式
const singleModeCheckedKeys = ref([]);

// 多选框模式
const multiModeCheckedKeys = ref([]);
const multiModeSelectedKeys = ref([]);
const multiModeTreeRef = ref(null);
const checkStrictly = ref(false);

// 回填方式
const strategyCheckedKeys = ref([]);
const checkedStrategy = ref('all');
const strategyOptions = [
    { value: 'all', label: 'show all' },
    { value: 'parent', label: 'show parent' },
    { value: 'child', label: 'show child' }
];

// 双向绑定示例数据
const bindingSelectedKeys = ref([]);
const bindingCheckedKeys = ref([]);
const bindingExpandedKeys = ref([]);

// 所有可选中的节点键值（排除禁用节点和禁用复选框的节点及其子节点）
const allCheckedKeys = [
    '0-0',
    '0-0-1',
    '0-1',
    '0-1-1',
    '0-1-1-1',
    '0-1-1-2',
    '0-1-2'
    // 注意：排除了 '0-0-2'(disabled), '0-0-2-1', '0-0-2-2'(disableCheckbox)
];

// 计算是否所有节点都被选中
const isAllNodesChecked = computed(() => {
    return (
        bindingCheckedKeys.value.length === allCheckedKeys.length &&
        allCheckedKeys.every((key) => bindingCheckedKeys.value.includes(key))
    );
});

// 切换全选/取消全选
const toggleChecked = () => {
    // 使用计算属性判断是否全选
    const newCheckedKeys = isAllNodesChecked.value ? [] : allCheckedKeys;

    bindingCheckedKeys.value = newCheckedKeys;
    // 在带选框的情况下，同步更新高亮状态，避免高亮状态残留
    bindingSelectedKeys.value = newCheckedKeys;
};

// 双向绑定事件处理函数
const onBindingSelect = (newSelectedKeys, event) => {
    console.log('select:', newSelectedKeys, event);
    // 在带选框的情况下，selectedKeys会自动与checkedKeys同步
    // 这里可以自行控制如何更新selectedKeys
    bindingSelectedKeys.value = newSelectedKeys;
};

const onBindingCheck = (newCheckedKeys, event) => {
    console.log('check:', newCheckedKeys, event);
    // 这里可以自行控制如何更新checkedKeys
    // bindingCheckedKeys.value = newCheckedKeys;
};

const onBindingExpand = (newExpandedKeys, event) => {
    console.log('expand:', newExpandedKeys, event);
    // 这里可以自行控制如何更新expandedKeys
    // bindingExpandedKeys.value = newExpandedKeys;
};

// 处理回填策略变更
const strategyTreeRef = ref(null);

// 处理策略变更
const handleStrategyChange = () => {
    // 清空选中的节点
    strategyCheckedKeys.value = [];

    // 使用 nextTick 确保 DOM 更新后再清理状态
    nextTick(() => {
        if (strategyTreeRef.value) {
            try {
                // 清理树组件的内部状态，确保高亮状态也被清除
                strategyTreeRef.value.selectAll(false);
                strategyTreeRef.value.checkAll(false);
            } catch (e) {
                console.warn('清理树状态失败:', e);
            }
        }
    });
};

// 搜索树相关变量
const searchSingleCheckedKeys = ref([]);
const searchMultiCheckedKeys = ref([]);
const remoteSearchSingleCheckedKeys = ref([]);
const remoteSearchMultiCheckedKeys = ref([]);

// 定制额外节点示例变量
const extraNodeCheckedKeys = ref([]);

// 类型图标示例变量
const typeIconCheckedKeys = ref([]);
const typeIconCustomCheckedKeys = ref([]);

// 节点图标示例变量
const nodeIconCheckedKeys = ref([]);
const nodeIconCustomCheckedKeys = ref([]);

// 类型图标
const showTypeIcon = ref(true);

// 加载中图标示例数据
const loadingDelay = ref(2); // 加载延迟时间（秒）
const loadingTreeData = ref([
    {
        label: '父节点 0-0',
        value: '0-0',
        isLeaf: false,
        children: [] // 空的children数组，表示需要动态加载
    },
    {
        label: '父节点 0-1',
        value: '0-1',
        isLeaf: false,
        children: [
            {
                label: '子节点 0-1-1',
                value: '0-1-1',
                isLeaf: true
            }
        ]
    },
    {
        label: '父节点 0-2 (自定义loading图标)',
        value: '0-2',
        isLeaf: false,
        children: [],
        // #ifdef H5
        loadingIcon: ({ loading }) => {
            if (loading) {
                return h(
                    'span',
                    {
                        class: 'custom-loading-icon',
                        style: { color: 'red' }
                    },
                    h(Loading)
                );
            }

            return null;
        }
        // #endif
    }
]);

// 重置加载数据
const resetLoadingData = () => {
    loadingTreeData.value = [
        {
            label: '父节点 0-0',
            value: '0-0',
            isLeaf: false,
            children: [] // 空的children数组，表示需要动态加载
        },
        {
            label: '父节点 0-1',
            value: '0-1',
            isLeaf: false,
            children: [
                {
                    label: '子节点 0-1-1',
                    value: '0-1-1',
                    isLeaf: true
                }
            ]
        },
        {
            label: '父节点 0-2 (自定义loading图标)',
            value: '0-2',
            isLeaf: false,
            children: [],
            // #ifdef H5
            loadingIcon: ({ loading }) => {
                if (loading) {
                    return h(
                        'span',
                        {
                            class: 'custom-loading-icon',
                            style: { color: 'red' }
                        },
                        h(Loading)
                    );
                }

                return null;
            }
            // #endif
        }
    ];
};

// 加载更多节点的方法（用于loadingIcon示例）
const loadMoreNodes = (nodeData) => {
    return new Promise<void>((resolve) => {
        // 模拟加载延迟
        setTimeout(() => {
            // 确保为非叶子节点
            nodeData.isLeaf = false;

            // 创建子节点
            const childCount = Math.floor(Math.random() * 3) + 2; // 2-4个子节点
            const newChildren = [];

            for (let i = 0; i < childCount; i++) {
                const n = i + 1;
                const isChildLeaf = Math.random() > 0.7; // 70%概率是叶子节点
                const childKey = `${nodeData.value}-${n}`;

                // 如果父节点有自定义loadingIcon，子节点也继承
                const childNode: any = {
                    label: `${nodeData.label}-${n}`,
                    value: childKey,
                    key: childKey,
                    isLeaf: isChildLeaf,
                    children: isChildLeaf ? undefined : [] // 非叶子节点提供空children数组
                };

                // 如果父节点有自定义loadingIcon，子节点也继承
                if (nodeData.loadingIcon) {
                    childNode.loadingIcon = nodeData.loadingIcon;
                }

                newChildren.push(childNode);
            }

            // 更新节点的children属性
            nodeData.children = newChildren;

            // 确保DOM更新后再返回
            setTimeout(() => {
                resolve();
            }, 0);
        }, loadingDelay.value * 1000); // 使用设定的延迟时间
    });
};

// 动态加载节点数据
const dynamicTreeData = ref([
    {
        label: 'Trunk 0-0',
        value: '0-0',
        key: '0-0', // 明确提供key
        isLeaf: false,
        children: [] // 空的children数组，表示需要动态加载
    },
    {
        label: 'Trunk 0-1',
        value: '0-1',
        key: '0-1', // 明确提供key
        isLeaf: false, // 标记为非叶子节点
        children: [
            {
                label: 'Branch 0-1-1',
                value: '0-1-1',
                key: '0-1-1', // 明确提供key
                isLeaf: true // 明确标记为叶子节点
            }
        ]
    }
]);

// 基础树数据
const treeData = [
    {
        label: 'Trunk 0-0',
        value: '0-0',
        children: [
            {
                label: 'Leaf',
                value: '0-0-1'
            },
            {
                label: 'Branch 0-0-2',
                value: '0-0-2',
                disabled: true,
                children: [
                    {
                        label: 'Leaf',
                        value: '0-0-2-1'
                    },
                    {
                        label: 'Leaf',
                        value: '0-0-2-2',
                        disableCheckbox: true
                    }
                ]
            }
        ]
    },
    {
        label: 'Trunk 0-1',
        value: '0-1',
        children: [
            {
                label: 'Branch 0-1-1',
                value: '0-1-1',
                children: [
                    {
                        label: 'Leaf',
                        value: '0-1-1-1'
                    },
                    {
                        label: 'Leaf',
                        value: '0-1-1-2'
                    }
                ]
            },
            {
                label: 'Leaf',
                value: '0-1-2'
            }
        ]
    }
];

// 类型图标树数据
const typeIconTreeData = [
    {
        label: '父节点1',
        value: 'node1',
        children: [
            {
                label: 'Leaf',
                value: 'node2'
            }
        ]
    },
    {
        label: '父节点2个性化图标，显示成加减号',
        value: 'node3',
        // #ifdef H5
        typeIcon: ({ expanded }) => {
            return h('span', `${expanded ? '-' : '+'}`);
        },
        // #endif
        children: [
            {
                label: '叶子节点4',
                value: 'node4'
            },
            {
                label: '叶子节点5',
                value: 'node5'
            },
            {
                label: '叶子节点6, 个性化成不一样的用户图标',
                value: 'node6',
                // #ifdef H5
                typeIcon: () => h(UserFilled)
                // #endif
            },
            {
                label: '叶子节点7, 个性化成不一样的图标',
                value: 'node7',
                // #ifdef H5
                typeIcon: () => h(Finished)
                // #endif
            },
            {
                label: '叶子节点8, 个性化成不一样的图标',
                value: 'node8',
                // #ifdef H5
                typeIcon: () =>
                    h('span', {
                        style: {
                            display: 'block',
                            width: '16px',
                            height: '16px',
                            background:
                                'url(https://oa.epoint.com.cn/OA9/fui/css/images/usertree/userOnline.png) no-repeat'
                        }
                    })
                // #endif
            },
            {
                label: '叶子节点9, 个性化成不一样的图标',
                value: 'node9',
                // #ifdef H5
                typeIcon: () => {
                    return h('span', {
                        style: {
                            display: 'block',
                            width: '16px',
                            height: '16px',
                            background:
                                'url(https://oa.epoint.com.cn/OA9/fui/css/images/usertree/userOffline.png) no-repeat'
                        }
                    });
                }
                // #endif
            }
        ]
    }
];

// 节点图标树数据
const nodeIconTreeData = [
    {
        label: '父节点1',
        value: 'node1',
        children: [
            {
                label: 'Leaf',
                value: 'node2'
            }
        ]
    },
    {
        label: '父节点2个性化图标',
        value: 'node3',
        // #ifdef H5
        icon: ({ expanded }) => {
            return h('span', { style: 'color:red' }, `${expanded ? '-' : '+'}`);
        },
        // #endif
        children: [
            {
                label: '叶子节点4',
                value: 'node4'
            },
            {
                label: '叶子节点5',
                value: 'node5'
            },
            {
                label: '叶子节点6, 个性化成不一样的用户图标',
                value: 'node6',
                // #ifdef H5
                icon: () => {
                    return h(
                        'span',
                        {
                            style: { color: 'red' }
                        },
                        [h(UserFilled)]
                    );
                }
                // #endif
            },
            {
                label: '叶子节点7, 个性化成不一样的图标',
                value: 'node7',
                // #ifdef H5
                icon: () => h(Finished)
                // #endif
            },
            {
                label: '叶子节点8, 个性化成不一样的图标',
                value: 'node8',
                // #ifdef H5
                icon: () =>
                    h('span', {
                        style: {
                            display: 'block',
                            width: '16px',
                            height: '16px',
                            background:
                                'url(https://oa.epoint.com.cn/OA9/fui/css/images/usertree/userOnline.png) no-repeat'
                        }
                    })
                // #endif
            },
            {
                label: '叶子节点9, 个性化成不一样的图标',
                value: 'node9',
                // #ifdef H5
                icon: () => {
                    return h('span', {
                        style: {
                            display: 'block',
                            width: '16px',
                            height: '16px',
                            background:
                                'url(https://oa.epoint.com.cn/OA9/fui/css/images/usertree/userOffline.png) no-repeat'
                        }
                    });
                }
                // #endif
            },
            {
                label: '叶子节点10, 个性化成不一样的用户图标',
                value: 'node10',
                // #ifdef H5
                icon: () => {
                    return h(
                        'span',
                        {
                            style: { color: 'blue' }
                        },
                        [h(UserFilled)]
                    );
                }
                // #endif
            }
        ]
    }
];

// 自定义字段名称树数据
const customFieldsTreeData = [
    {
        text: 'Trunk 0-0',
        value: '0-0',
        items: [
            {
                text: 'Branch 0-0-2',
                value: '0-0-2',
                selectable: false,
                // #ifdef H5
                customIcon: () => h(Folder),
                // #endif
                items: [
                    {
                        text: 'Leaf',
                        value: '0-0-2-1',
                        items: [
                            {
                                text: 'Leaf 0-0-2',
                                value: '0-0-2-1-0',
                                items: [
                                    {
                                        text: 'Leaf',
                                        // #ifdef H5
                                        customIcon: () => h(User),
                                        // #endif
                                        value: '0-0-2-1-0-0'
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        text: 'Trunk 0-1',
        value: '0-1',
        items: [
            {
                text: 'Branch 0-1-1',
                value: '0-1-1',
                items: [
                    {
                        text: 'Leaf',
                        value: '0-1-1-0'
                    }
                ]
            }
        ]
    }
];

// 远程搜索树数据
const remoteTreeData = ref([
    {
        label: 'Trunk 0-0',
        value: '0-0',
        children: [
            {
                label: 'Branch 0-0-0',
                value: '0-0-0',
                disabled: true,
                children: [
                    {
                        label: 'Leaf',
                        value: '0-0-0-0'
                    },
                    {
                        label: 'Leaf',
                        value: '0-0-0-1'
                    }
                ]
            },
            {
                label: 'Branch 0-0-1',
                value: '0-0-1',
                children: [
                    {
                        label: 'Leaf',
                        value: '0-0-1-0'
                    }
                ]
            }
        ]
    }
]);

// 远程搜索方法
const remoteFilter = (key: string) => {
    return new Promise((resolve) => {
        // 如果没有输入关键字，返回原始数据
        if (!key) {
            resolve(remoteTreeData.value);

            return;
        }

        // 模拟远程搜索结果
        const data = [
            {
                label: 'Trunk 0-0',
                value: '0-0',
                children: [
                    {
                        label: 'Branch 0-0-0',
                        value: '0-0-0',
                        disabled: true, // 保持禁用状态
                        children: [
                            {
                                label: 'Leaf',
                                value: '0-0-0-0'
                            },
                            {
                                label: 'Leaf',
                                value: '0-0-0-1'
                            }
                        ]
                    },
                    {
                        label: `Branch ${key}`,
                        value: '0-0-1',
                        children: [
                            {
                                label: `Leaf ${key}`,
                                value: '0-0-1-0'
                            }
                        ]
                    }
                ]
            }
        ];

        setTimeout(() => {
            resolve(data);
        }, 500);
    });
};

// 监听 checkStrictly 变化，清空已选择的节点
watch(checkStrictly, () => {
    // 清空选中状态
    multiModeCheckedKeys.value = [];
    // 清空高亮状态
    multiModeSelectedKeys.value = [];

    // 使用 nextTick 确保 DOM 更新后再清理组件内部状态
    nextTick(() => {
        if (multiModeTreeRef.value) {
            try {
                // 清理树组件的内部状态，确保高亮状态也被清除
                multiModeTreeRef.value.selectAll(false);
                multiModeTreeRef.value.checkAll(false);
            } catch (e) {
                console.warn('清理树状态失败:', e);
            }
        }
    });
});

// 组件挂载后检查选中状态
onMounted(() => {
    nextTick(() => {
        if (treeRef.value) {
            try {
                const nodes = treeRef.value.getSelectedNodes();

                if (nodes && nodes.length > 0) {
                    const node = nodes[0];

                    selectedInfo.value = `${node.label} (${node.value || node.key})`;
                }
            } catch (e) {
                console.error('获取选中节点失败:', e);
            }
        }
    });
});

// 定制额外节点示例数据
const extraNodeTreeData = ref([
    {
        label: 'Trunk 0-0',
        value: '0-0',
        children: [
            {
                label: 'Branch 0-0-0',
                value: '0-0-0',
                children: [
                    {
                        label: 'Leaf 0-0-0-0',
                        value: '0-0-0-0'
                    },
                    {
                        label: 'Leaf 0-0-0-1',
                        value: '0-0-0-1'
                    }
                ]
            },
            {
                label: 'Branch 0-0-1',
                value: '0-0-1',
                children: [
                    {
                        label: 'Leaf 0-0-1-0',
                        value: '0-0-1-0'
                    }
                ]
            }
        ]
    }
]);

// 添加节点处理函数
const onIconClick = (nodeData) => {
    console.log('onIconClick', nodeData);
};
</script>

<style lang="scss" scoped>
@import '../css/common.scss';
.example-container {
    padding: 16px;
    margin: 0 auto;

    h2 {
        margin: 24px 0 12px;
        font-size: 18px;
        color: var(--ep-text-color-primary);
    }

    .example-flex {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        margin-bottom: 12px;
        gap: 16px;
    }

    .example-info {
        margin-top: 12px;
        margin-bottom: 24px;
        padding: 8px 12px;
        font-size: 14px;
        color: var(--ep-text-color-secondary);
        background-color: var(--ep-fill-color-lighter);
        border-radius: 4px;
    }

    .example-description {
        margin-bottom: 12px;
        font-size: 14px;
        color: var(--ep-text-color-secondary);
        line-height: 1.5;
    }

    .example-bordered {
        border: 1px solid var(--ep-border-color-light);
        border-radius: 8px;
        padding: 16px;
        margin-bottom: 16px;
    }
}

/* 自定义loading图标样式 */
.custom-loading-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
}

.custom-loading-icon svg {
    width: 16px;
    height: 16px;
    display: block;
    transform-origin: 50% 50%;
    animation: custom-loading-animation 1.5s linear infinite;
}

@keyframes custom-loading-animation {
    0% {
        transform: rotate(0deg) scale(0.8);
        opacity: 0.5;
    }
    80% {
        transform: rotate(300deg) scale(1);
        opacity: 1;
    }
    100% {
        transform: rotate(360deg) scale(0.8);
        opacity: 0.5;
    }
}
</style>

