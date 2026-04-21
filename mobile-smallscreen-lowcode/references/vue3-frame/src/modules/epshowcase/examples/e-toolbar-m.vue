<template>
    <div class="van-content">
        <text class="cell-title">基本使用</text>
        <e-toolbar-m ref="toolbarRef" title="我是标题">
            <div class="table-content">我是表格内容</div>
            <template #button>
                <e-button-m type="primary">Primary</e-button-m>
                <e-button-m type="success">Success</e-button-m>
            </template>
            <template #filter>
                <div class="filter-content">搜索区域</div>
            </template>
            <template #actions>
                <e-button-group-m>
                    <e-button-m icon="LayoutCardBold" iconColor="black" text />
                    <e-button-m icon="LayoutTableBold" iconColor="black" text />
                    <e-button-m icon="MoreFilled" iconColor="black" text />
                    <!-- <e-button-m icon="LayoutCardBold" iconColor="black" text />
                    <e-button-m icon="LayoutTableBold" iconColor="black" text />
                    <e-button-m icon="MoreFilled" iconColor="black" text />
                    <e-button-m icon="LayoutCardBold" iconColor="black" text />
                    <e-button-m icon="LayoutTableBold" iconColor="black" text />
                    <e-button-m icon="MoreFilled" iconColor="black" text /> -->
                </e-button-group-m>
            </template>
        </e-toolbar-m>
        <text class="cell-title">结合标题组件</text>
        <e-toolbar-m>
            <div class="table-content">我是表格内容</div>
            <template #title>
                <e-toolbar-title-m>
                    <span>用户列表-toolbar</span>
                </e-toolbar-title-m>
            </template>
            <template #filter>
                <div class="filter-content">搜索区域</div>
            </template>
        </e-toolbar-m>
        <text class="cell-title">结合高级搜索和排序</text>
        <e-toolbar-m>
            <template #filter>
                <e-toolbar-search-m
                    ref="toolbarSearchRef"
                    :search-list="searchList"
                    :filter-plan-list="filterPlanList"
                    @advance-search="onAdvanceSearch"
                />
            </template>
            <template #extra>
                <e-toolbar-sort-m
                    ref="toolbarSortRef"
                    :sort-list="sortList"
                    @sort="onSort"
                    :showHeaderIcon="true"
                    :showOperation="false"
                    @operation="onOperation"
                />
                <!-- <e-icon-m name="MoreFilled" @click="clickMore"></e-icon-m> -->
            </template>
        </e-toolbar-m>
        <div class="table-content long">我是表格内容</div>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';

const toolbarRef = ref();
const newRow = (item) => {
    console.log('点击按钮：', item);
};
const toolbarBtnList = ref([
    {
        type: 'danger',
        plain: true,
        onClick: newRow,
        disabled: () => true,
        content: '删除选定'
    },

    {
        control: 'buttonGroup',
        type: 'primary',
        items: [
            {
                content: '测试模块',
                onClick: () => {
                    console.log('普通模块');
                }
            },
            {
                content: 'vue模块',
                onClick: () => {
                    console.log('vue模块');
                }
            },
            {
                content: '应用模块',
                onClick: () => {
                    console.log('应用模块');
                }
            }
        ]
    },
    {
        control: 'dropdown',
        content: 'dropdown模块',
        type: 'primary',
        splitButton: true,
        onClick: () => {
            console.log('dropdown-splitButton true 模块');
        },
        items: [
            {
                content: '测试模块',
                onClick: () => {
                    console.log('普通模块');
                }
            },
            {
                content: 'vue模块',
                onClick: () => {
                    console.log('vue模块');
                }
            },
            {
                content: '应用模块',
                onClick: () => {
                    console.log('应用模块');
                }
            }
        ]
    },
    {
        type: 'primary',
        onClick: newRow,
        content: '新增用户3'
    }
]);
const filterPlanList = ref([
    {
        label: '符合所有条件',
        value: 'and'
    },
    {
        label: '符合任意条件',
        value: 'or',
        default: true
    }
]);
const onAdvanceSearch = (params) => {
    console.log('onAdvanceSearch', params);
};
const searchList = ref([
    {
        label: '复合搜索',
        field: 'searchField',
        type: 'mixSearch', // 复合搜索
        default: true,
        operation: 'EQ',
        operations: [
            {
                label: '等于',
                value: 'EQ'
            },
            {
                label: '不等于',
                value: 'NQ'
            },
            {
                label: '包含',
                value: 'IN'
            },
            {
                label: '不包含',
                value: 'NOTIN'
            }
        ],
        data: [
            { label: '姓名', value: 'name' },
            { label: '所属部门', value: 'department' },
            { label: '电话', value: 'phone' }
        ]
    },
    {
        label: '用户登录名',
        field: 'loginid',
        type: 'input',
        default: true,
        operation: 'EQ',
        operations: [
            {
                label: '等于',
                value: 'EQ'
            },
            {
                label: '不等于',
                value: 'NQ'
            },
            {
                label: '包含',
                value: 'IN'
            },
            {
                label: '不包含',
                value: 'NOTIN'
            }
        ]
    },
    {
        label: '日期选择',
        field: 'birthday',
        type: 'datePicker',
        default: true,
        operation: 'EQ',
        operations: [
            {
                label: '等于',
                value: 'EQ'
            },
            {
                label: '不等于',
                value: 'NQ'
            },
            {
                label: '介于',
                value: 'BTW',
                type: 'rangeDatePicker'
            }
        ]
    },
    {
        label: '日期范围选择',
        field: 'rangeDate',
        type: 'rangeDatePicker',
        default: true,
        operation: 'BTW',
        operations: [
            {
                label: '介于',
                value: 'BTW'
            },
            {
                label: '不介于',
                value: 'NOTBTW'
            }
        ]
    },
    {
        label: '单选',
        field: 'status',
        prop: 'enabled',
        type: 'select',
        default: true,
        operation: 'EQ',
        operations: [
            {
                label: '等于',
                value: 'EQ'
            },
            {
                label: '不等于',
                value: 'NQ',
                type: 'select',
                url: '/frametoolbar/getCodeList'
            },
            {
                label: '包含',
                value: 'IN'
            },
            {
                label: '不包含',
                value: 'NOTIN'
            }
        ],
        data: [
            {
                label: '启用',
                value: '1'
            },
            {
                label: '禁用',
                value: '0'
            }
        ]
    },
    {
        label: '多选状态',
        field: 'statusMulti',
        prop: 'enabled',
        type: 'multiSelect',
        default: true,
        operation: 'EQ',
        operations: [
            {
                label: '等于',
                value: 'EQ'
            },
            {
                label: '不等于',
                value: 'NQ'
            },
            {
                label: '包含',
                value: 'IN'
            },
            {
                label: '不包含',
                value: 'NOTIN'
            }
        ],
        data: [
            {
                label: '启用',
                value: '1'
            },
            {
                label: '禁用',
                value: '0'
            }
        ]
    },
    {
        label: '数值范围',
        field: 'numberRange',
        prop: 'enabled',
        type: 'rangeNumber',
        default: true,
        operation: 'BTW',
        operations: [
            {
                label: '介于',
                value: 'BTW'
            },
            {
                label: '不介于',
                value: 'NOTBTW'
            }
        ]
    }
]);
// 排序列表--同时应只有一项存在排序设置
const sortList = ref([
    {
        name: '事项名称',
        field: 'itemName',
        order: ''
    },
    {
        name: '所在部门',
        field: 'ouName',
        order: 'descend'
    },
    {
        name: '办理时间',
        field: 'date',
        order: ''
    }
]);
const onSort = (sortRes) => {
    console.log('onSort', sortRes);
};
const onOperation = () => {
    console.log('operation');
};
const toolbarSortRef = ref();
const clickMore = () => {
    toolbarSortRef.value.toggle();
};
</script>
<style lang="scss" scoped>
@import '../css/common.scss';

.van-content {
    padding: 0;
}

.table-content {
    height: 200px;
    background-color: rgba(#0f0, 0.6);
}

.long {
    height: 500px;
}
</style>
