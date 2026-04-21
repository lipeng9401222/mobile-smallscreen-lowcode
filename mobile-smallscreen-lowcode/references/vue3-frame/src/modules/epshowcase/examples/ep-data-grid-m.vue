<template>
    <div class="van-content">
        <em-tabs v-model="active">
            <em-tab class="page-tab" title="基础用法">
                <ep-data-grid-m
                    id-field="userGuid"
                    :data="tableSource1.dataSource"
                    :loading="tableSource1.loading"
                    :total="tableSource1.total"
                    :current="tableSource1.current"
                    :page-size="tableSource1.pageSize"
                    :columns="columnList1"
                    height="100%"
                    @change="tableSource1.onTableChange"
                ></ep-data-grid-m>
            </em-tab>
            <em-tab class="page-tab" title="自定义列表">
                <ep-data-grid-m
                    id-field="userGuid"
                    :data="tableSource2.dataSource"
                    :loading="tableSource2.loading"
                    :total="tableSource2.total"
                    :current="tableSource2.current"
                    :page-size="tableSource2.pageSize"
                    :columns="columnList2"
                    height="100%"
                    @change="tableSource2.onTableChange"
                >
                    <template #bodyCell="{ record, column }">
                        <div v-if="column.key !== 'action'">{{ column.title }}: {{ record[column.dataIndex] }}</div>
                    </template>
                </ep-data-grid-m>
            </em-tab>
            <em-tab class="page-tab" title="结合工具栏使用">
                <ep-data-grid-m
                    id-field="userGuid"
                    ref="dataGridRef"
                    :data="tableSource3.dataSource"
                    :loading="tableSource3.loading"
                    :total="tableSource3.total"
                    :current="tableSource3.current"
                    :page-size="tableSource3.pageSize"
                    :columns="columnList3"
                    :keyWord="keyWord"
                    height="100%"
                    @change="tableSource3.onTableChange"
                >
                    <template #toolbar>
                        <e-toolbar-m>
                            <template #filter>
                                <e-toolbar-search-m :search-list="searchList" @advance-search="onAdvanceSearch" />
                            </template>
                        </e-toolbar-m>
                    </template>
                </ep-data-grid-m>
            </em-tab>
            <em-tab class="page-tab" title="批处理">
                <ep-data-grid-m
                    id-field="userGuid"
                    :data="tableSource5.dataSource"
                    :total="tableSource5.total"
                    :loading="tableSource5.loading"
                    :current="tableSource5.current"
                    :page-size="tableSource5.pageSize"
                    :columns="columnList5"
                    showSelectionColumn
                    :rowSelection="rowSelection"
                    height="100%"
                    dragSort
                    @change="tableSource5.onTableChange"
                    @confirm="onConfirm"
                ></ep-data-grid-m>
            </em-tab>
        </em-tabs>
    </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import { useTableDataSource } from '@epoint-fe/eui-hooks';

const active = ref(0);
const params = reactive<Record<string, any>>({
    userName: '',
    loginId: '',
    ouName: ''
});
const actions = {
    title: '操作',
    key: 'action',
    action: {
        items: [
            {
                icon: 'Edit',
                label: '修改',
                swipeAction: true,
                swipeActionType: 'primary',
                onClick: (row) => {
                    ejs.ui.toast('修改' + row.itemName);
                },
                visible: (row) => row.itemName === '我是事项1'
            },
            {
                icon: 'Setting',
                label: '配置',
                swipeAction: true,
                swipeActionType: 'success',
                onClick: (row) => {
                    console.log(row);
                    ejs.ui.toast('配置' + row.itemName);
                },
                disabled: (row) => row.itemName === '我是事项2'
            },
            {
                icon: 'Delete',
                label: '删除',
                swipeAction: true,
                swipeActionType: 'danger',
                onClick: (row) => {
                    console.log(row);
                    ejs.ui.toast('删除' + row.itemName);
                }
            }
        ]
    }
};

const columnList1: Record<string, any>[] = [
    { dataIndex: 'itemName', title: '事项名称' },
    { dataIndex: 'ouName', title: '所在部门' },
    { dataIndex: 'date', title: '办理时间' },
    { dataIndex: 'status', title: '状态', isStatus: true },
    actions
];
// tableSource 具备以下属性： { dataSource, pageSize, current, total, loading, refresh, onTableChange }
const tableSource1 = useTableDataSource('/frameaction/getDataGridData1', {
    idField: 'userGuid',
    columns: columnList1,
    params
});
const columnList2: Record<string, any>[] = [
    { dataIndex: 'itemName', title: '事项名称' },
    { dataIndex: 'ouName', title: '所在部门' },
    { dataIndex: 'date', title: '办理时间' },
    {
        dataIndex: 'age',
        title: '年龄'
    },
    actions
];
// tableSource 具备以下属性： { dataSource, pageSize, current, total, loading, refresh, onTableChange }
const tableSource2 = useTableDataSource('/frameaction/getDataGridData2', {
    idField: 'userGuid',
    columns: columnList2,
    params
});
const columnList3: Record<string, any>[] = [
    {
        dataIndex: 'itemName',
        title: '事项名称'
    },
    {
        dataIndex: 'ouName',
        title: '所在部门'
    },
    {
        dataIndex: 'date',
        title: '办理时间'
    },
    {
        dataIndex: 'schedule',
        title: '预约时间'
    },
    {
        dataIndex: 'age',
        title: '年龄',
        width: 100
    },
    actions
];
// tableSource 具备以下属性： { dataSource, pageSize, current, total, loading, refresh, onTableChange }
const tableSource3 = useTableDataSource('/frameaction/getDataGridData3', {
    idField: 'userGuid',
    columns: columnList3,
    params
});
// tableSource 具备以下属性： { dataSource, pageSize, current, total, loading, refresh, onTableChange }
const rowSelection = ref({
    type: 'checkbox', // 选择框类型，'checkbox' 多选，'radio' 单选
    selections: true, // 为true时使用默认按钮组, 为false时不展示底部按钮，也可传一个数组自定义按钮组
    selectedRowKeys: ['2', '3'], // 选中的行的 key 数组, 需要和 onChange 进行配合
    onChange: (selectedRowKeys: string[], selectedRows: object[]) => {
        // 选中的行的 key 数组改变时的回调
        console.log('onChange', selectedRowKeys, selectedRows);
        rowSelection.value.selectedRowKeys = selectedRowKeys;
    },
    onSelect: (record: object, selected: boolean, selectedRows: object[]) => {
        // 手动选择/取消某一行时的回调
        console.log('onSelect', record, selected, selectedRows);
    }
});
const columnList5: Record<string, any>[] = [
    {
        dataIndex: 'itemName',
        title: '事项名称'
    },
    {
        dataIndex: 'ouName',
        title: '所在部门'
    },
    {
        dataIndex: 'age',
        title: '年龄',
        width: 100
    },
    actions
];
// tableSource 具备以下属性： { dataSource, pageSize, current, total, loading, refresh, onTableChange }
const tableSource5 = useTableDataSource('/frameaction/getDataGridData5', {
    idField: 'userGuid',
    columns: columnList5,
    params
});

const onConfirm = (selectedRows: object[]) => {
    console.log('onConfirm', selectedRows);
    ejs.ui.toast('选中' + selectedRows.length + '行');
};

const keyWord = ref('');
const dataGridRef = ref();
const onAdvanceSearch = (filterRes, searchValue) => {
    console.log('onAdvanceSearch', filterRes);
    // 修改列表请求的查询参数
    params.searchParams = filterRes.conditions;
    params.logicOperator = filterRes.logicOperator;
    // 更新列表的关键字，使关键字高亮
    keyWord.value = searchValue;
    // 触发列表刷新
    dataGridRef.value.refresh();
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
            { label: '事项名称', value: 'itemName' },
            { label: '所在部门', value: 'ouName' },
            { label: '年龄', value: 'age' }
        ]
    },
    {
        label: '事项名称',
        field: 'itemName',
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
        label: '办理时间',
        field: 'date',
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
        label: '预约时间',
        field: 'schedule',
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
        label: '所在部门',
        field: 'ouName',
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
</script>
<style lang="scss" scoped>
@import '../css/common.scss';

.page-tab.em-tab {
    height: calc(100vh - 44px);
}
</style>
