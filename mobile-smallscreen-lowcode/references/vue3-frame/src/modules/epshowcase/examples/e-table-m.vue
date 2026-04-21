<template>
    <div class="van-content">
        <e-tabs-m :ellipsis="false" v-model="active">
            <e-tab-pane-m class="page-tab" title="基础用法">
                <e-table-m
                    ref="tableRef1"
                    rowKey="userGuid"
                    :columns="columnList1"
                    :data-source="dataSource1"
                    height="100%"
                    @click-action="clickAction"
                ></e-table-m>
            </e-tab-pane-m>
            <e-tab-pane-m class="page-tab" title="使用插槽">
                <e-table-m :dataSource="dataSource1" :columns="columnList1" height="100%">
                    <template #bodyCell="{ column, record }">
                        <template v-if="column.key === 'ouName'">
                            <e-tag-m>
                                {{ record.ouName }}
                            </e-tag-m>
                        </template>
                        <template v-else-if="column.key === 'date'">
                            <span style="color: blue">
                                {{ record.date }}
                            </span>
                        </template>
                        <template v-else-if="column.key === 'action'">
                            <div @click.stop="Del">
                                <e-button-m link type="danger">删除</e-button-m>
                            </div>
                        </template>
                    </template>
                </e-table-m>
            </e-tab-pane-m>
            <e-tab-pane-m class="page-tab" title="异步加载">
                <e-table-m
                    :dataSource="dataSource"
                    :columns="columnList1"
                    :row-key="(record) => record.userGuid"
                    :pagination="pagination"
                    :loading="loading"
                    height="100%"
                    @change="onTableChange"
                ></e-table-m>
            </e-tab-pane-m>
            <e-tab-pane-m class="page-tab" title="筛选和排序">
                <e-table-m
                    :dataSource="editData"
                    :columns="columnList1"
                    :loading="loading2"
                    :pagination="pagination2"
                    height="100%"
                    @change="onTableChange2"
                >
                    <template #toolbar>
                        <e-toolbar-m>
                            <template #filter>
                                <e-toolbar-search-m :search-list="searchList" @advance-search="onAdvanceSearch" />
                            </template>
                            <template #extra>
                                <e-toolbar-sort-m v-model="sorter" :sort-list="sortList" />
                            </template>
                        </e-toolbar-m>
                    </template>
                </e-table-m>
            </e-tab-pane-m>
            <e-tab-pane-m class="page-tab" title="可编辑表格">
                <e-table-m
                    ref="tableRef"
                    :rowKey="rowKey"
                    :dataSource="editData3"
                    :columns="columnList7"
                    height="100%"
                    showDetail
                    :title="() => '事项详情'"
                    :getFormBtns="getFormBtns"
                >
                    <template #editor="{ column, record, editable }">
                        <e-input-m
                            v-if="column.dataIndex === 'age'"
                            v-model.number="record[column.dataIndex]"
                            :disabled="!editable"
                            type="number"
                        />
                    </template>
                </e-table-m>
            </e-tab-pane-m>
            <e-tab-pane-m class="page-tab" title="带边框">
                <e-radio-group-m v-model="borderStyle" label="边框控制">
                    <e-radio-button-m value="none">无边框</e-radio-button-m>
                    <e-radio-button-m value="horizontal">行边框</e-radio-button-m>
                    <e-radio-button-m value="full">全边框</e-radio-button-m>
                </e-radio-group-m>
                <e-table-m
                    :borderStyle="borderStyle"
                    :dataSource="dataSource1"
                    :columns="columnList1"
                    height="calc(100% - 30px)"
                >
                    <template #title>表头</template>
                    <template #footer>表尾</template>
                </e-table-m>
            </e-tab-pane-m>
            <e-tab-pane-m class="page-tab" title="单元格自动省略">
                <div style="margin-bottom: 10px">
                    <e-switch-m v-model="ellipsisEnabled" />
                    <span style="margin-left: 8px">{{ ellipsisEnabled ? '开启省略' : '关闭省略' }}</span>
                </div>
                <e-table-m :dataSource="dataSource1" :columns="columnList2" height="calc(100% - 40px)"></e-table-m>
            </e-tab-pane-m>
            <e-tab-pane-m class="page-tab" title="冻结操作列">
                <e-table-m :dataSource="dataSource1" :columns="columnList3" height="100%"></e-table-m>
            </e-tab-pane-m>
            <e-tab-pane-m class="page-tab" title="行列合并">
                <e-table-m
                    :dataSource="dataSource1"
                    :columns="columnList4"
                    borderStyle="full"
                    :stripe="false"
                    height="100%"
                ></e-table-m>
            </e-tab-pane-m>
            <e-tab-pane-m class="page-tab" title="隐藏列">
                <e-button-m
                    v-for="(item, index) in columnList6"
                    :key="index"
                    :type="item.hidden ? 'default' : 'primary'"
                    @click="changeVisible(item)"
                >
                    {{ item.title }}
                </e-button-m>
                <e-table-m
                    :dataSource="dataSource1"
                    :columns="columnList6"
                    borderStyle="full"
                    :stripe="false"
                    height="calc(100% - 40px)"
                ></e-table-m>
            </e-tab-pane-m>
            <e-tab-pane-m class="page-tab" title="表头分组">
                <e-table-m
                    :dataSource="dataSource1"
                    borderStyle="full"
                    :stripe="false"
                    :columns="columnList5"
                    height="100%"
                ></e-table-m>
            </e-tab-pane-m>
            <e-tab-pane-m class="page-tab" title="批处理">
                <e-table-m
                    rowKey="userGuid"
                    :columns="columnList1"
                    :data-source="dataSource1"
                    height="100%"
                    :row-selection="rowSelection"
                ></e-table-m>
            </e-tab-pane-m>
            <!-- 以下待补充 -->
            <!-- <e-tab-pane-m class="page-tab" title="总结栏">
                <e-table-m :columns="columnList9" :data-source="data9" :pagination="false" borderStyle="full">
                    <template #summary>
                        <e-table-summary-row-m>
                            <e-table-summary-cell-m>总计</e-table-summary-cell-m>
                            <e-table-summary-cell-m>
                                <e-text-m type="danger">{{ totals.totalBorrow }}</e-text-m>
                            </e-table-summary-cell-m>
                            <e-table-summary-cell-m>
                                <e-text-m>{{ totals.totalRepayment }}</e-text-m>
                            </e-table-summary-cell-m>
                        </e-table-summary-row-m>
                        <e-table-summary-row-m>
                            <e-table-summary-cell-m>余额</e-table-summary-cell-m>
                            <e-table-summary-cell-m :col-span="2">
                                <e-text-m type="danger">
                                    {{ totals.totalBorrow - totals.totalRepayment }}
                                </e-text-m>
                            </e-table-summary-cell-m>
                        </e-table-summary-row-m>
                    </template>
                </e-table-m>
            </e-tab-pane-m> -->
            <e-tab-pane-m class="page-tab" title="渲染HTML">
                <e-table-m :dataSource="data" :columns="columnList10" height="100%"></e-table-m>
            </e-tab-pane-m>
            <e-tab-pane-m class="page-tab" title="自定义表头cell">
                <e-table-m :dataSource="dataSource1" :columns="columnList11" height="100%">
                    <template #headerCell="{ column }">
                        <template v-if="column.key === 'action'">
                            <span>
                                <e-icon-m name="Sunny"></e-icon-m>
                                更多
                            </span>
                        </template>
                    </template>
                </e-table-m>
            </e-tab-pane-m>
        </e-tabs-m>
    </div>
</template>
<script lang="ts" setup>
import { reactive, ref, computed, watch, type Ref } from 'vue';
import { useTableDataSource } from '@epoint-fe/eui-hooks';

const tableRef1 = ref();
const active = ref(0);

watch(
    active,
    (val) => {
        if (val === 0) {
            setTimeout(() => {
                tableRef1.value.resize();
            }, 1000);
        }
    },
    {
        immediate: true
    }
);
const params: any = reactive({
    userName: '',
    loginId: '',
    ouName: ''
});
// ===================================================== 基础用法 =====================================================
const columnList1: Record<string, any>[] = [
    { key: 'itemName', dataIndex: 'itemName', title: '事项名称', width: 100 },
    { key: 'ouName', dataIndex: 'ouName', title: '所在部门', width: 100 },
    {
        key: 'date',
        dataIndex: 'date',
        title: '办理时间',
        width: 100
    },
    {
        title: '操作',
        key: 'action',
        width: 80
    }
];
const clickAction = (record: Record<string, any>) => {
    ejs.ui.actionSheet({
        items: ['编辑', '删除'],
        success: function (result) {
            if (result.which > -1) {
                ejs.ui.toast(result.content + record.itemName);
            }
        },
        error: function (err) {}
    });
};
// tableSource 具备以下属性： { dataSource, pageSize, current, total, loading, refresh, onTableChange }
// 需要双向绑定时，要解构获取
const {
    dataSource: dataSource1,
    pageSize: pageSize1,
    current: current1,
    total: total1,
    loading: loading1,
    refresh: refresh1,
    onTableChange: onTableChange1
} = useTableDataSource('/frameaction/getDataGridDataAll', {
    pageSize: 10, // 默认就是10
    idField: 'userGuid',
    columns: columnList1,
    params
});
// ===================================================== 使用插槽 =====================================================
const Del = () => {
    ejs.ui.toast('删除操作');
};
// ===================================================== 异步加载 =====================================================
// 需要双向绑定时，要解构获取
const { dataSource, pageSize, current, total, loading, refresh, onTableChange } = useTableDataSource(
    '/frameaction/getDataGridData',
    {
        pageSize: 10, // 模拟数据是10
        idField: 'userGuid',
        columns: columnList1,
        params
    }
);
const pagination = reactive({
    total,
    current: current.value,
    pageSize: pageSize.value
});

// ===================================================== 筛选和排序 =====================================================
const {
    dataSource: dataSource2,
    pageSize: pageSize2,
    current: current2,
    total: total2,
    loading: loading2,
    onTableChange: onTableChange2
} = useTableDataSource('/frameaction/getDataGridData', {
    pageSize: 10, // 模拟数据是10
    idField: 'userGuid',
    columns: columnList1,
    params
});
const editData = ref([]);

watch(
    dataSource2,
    (val) => {
        editData.value = val;
    },
    {
        immediate: true
    }
);
// 给表格组件绑定初始化的分页设置
const pagination2 = reactive({
    total: total2,
    current: current2.value,
    pageSize: pageSize2.value
});
const onAdvanceSearch = (filterRes) => {
    console.log('onAdvanceSearch', filterRes);
    // 修改列表请求的查询参数
    params.searchParams = filterRes.conditions;
    params.logicOperator = filterRes.logicOperator;

    // 筛选事件触发列表刷新
    onTableChange2(
        {
            pageSize: pageSize2.value,
            current: current2.value
        },
        filterRes,
        []
    );
};
// 筛选条件
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
    }
]);
// 排序列表
const sortList = ref([
    {
        name: '事项名称',
        field: 'itemName',
        order: 'ascend' // 可设置初始化的排序顺序
    },
    {
        name: '所在部门',
        field: 'ouName',
        order: ''
    }
]);
const sorter = ref({
    field: '',
    order: ''
});
watch(
    sorter,
    (sortRes) => {
        if (sortRes.field) {
            // 可以本地进行排序
            editData.value = editData.value
                .sort((a, b) => {
                    if (sortRes.order === 'ascend') {
                        return a[sortRes.field].localeCompare(b[sortRes.field], 'zh-CN');
                    } else {
                        return b[sortRes.field].localeCompare(a[sortRes.field], 'zh-CN');
                    }
                })
                .slice(0);

            // 也可以远程交给服务器进行排序
            // onTableChange2({
            //     pageSize: pageSize2.value,
            //     current: current2.value
            // }, null, sortRes);
        }
    },
    {
        immediate: true
    }
);

// ===================================================== 可编辑表格 =====================================================
const rowKey = 'userGuid';
const columnList7: Record<string, any>[] = [
    {
        dataIndex: 'itemName',
        title: '事项名称',
        disabled: true,
        required: true,
        width: 100
    },
    { dataIndex: 'ouName', title: '所在部门', width: 100 },
    {
        dataIndex: 'date',
        title: '办理时间',
        width: 100
    },
    {
        dataIndex: 'schedule',
        title: '预约时间',
        width: 100
    },
    {
        dataIndex: 'age',
        title: '年龄',
        width: 100,
        rules: [
            { type: 'required', message: '请输入年龄' },
            { type: 'number', message: '请输入正确的年龄' }
        ]
    },
    {
        dataIndex: 'status',
        title: '状态',
        width: 100
    }
];
const { dataSource: dataSource3 } = useTableDataSource('/frameaction/getDataGridDataAll', {
    pageSize: 10, // 模拟数据是10
    idField: 'userGuid',
    columns: columnList7,
    params
});
const editData3 = ref([]); // 编辑数据，用于列表展示
const saveData = ref([]); // 最终保存的数据，用于模拟保存，实际业务应该是去请求接口保存

watch(
    dataSource3,
    (val) => {
        saveData.value = JSON.parse(JSON.stringify(val));
    },
    {
        immediate: true
    }
);

watch(
    saveData,
    (val) => {
        editData3.value = JSON.parse(JSON.stringify(val));
    },
    {
        immediate: true
    }
);
const tableRef = ref<any>();
const add = () => {
    const userGuid = new Date().getTime().toString();
    tableRef.value.add({
        userGuid,
        itemName: '我是新增事项',
        ouName: '',
        status: '',
        age: '',
        date: '',
        schedule: ''
    });
    // 新增的数据切换成编辑态
    tableRef.value.toggleEdit(true, userGuid);
};
const save = async () => {
    // 保存之前先校验行数据
    const { valid, fields } = await tableRef.value.validateRow();
    console.log('校验表单', valid, fields);

    if (valid) {
        const currRowData = tableRef.value.getRowData();
        const index = saveData.value.findIndex((item) => item[rowKey] === currRowData[rowKey]);
        let list = saveData.value.slice(0);

        if (index > -1) {
            list = saveData.value.map((data, i) => {
                if (index === i) {
                    return currRowData;
                } else {
                    return data;
                }
            });
        } else {
            list.push(currRowData);
        }

        saveData.value = list.slice(0);

        return true;
    }

    ejs.ui.toast('保存失败！');

    return false;
};
// 行操作按钮
const getFormBtns = (record, rowIndex, editable) => {
    let btns = [];
    const detailBtns = [
        {
            content: '新增',
            id: 'add',
            icon: 'Plus',
            onClick: add
        },
        {
            content: '编辑',
            id: 'edit',
            icon: 'Edit',
            onClick: () => {
                // 切换当前弹窗数据为编辑态
                tableRef.value.toggleEdit(true);
            }
        },
        {
            content: '删除',
            id: 'delete',
            icon: 'Delete',
            onClick: () => {
                // 获取当前弹窗数据
                const currRowData = tableRef.value.getRowData();

                saveData.value = editData3.value.filter((item) => item[rowKey] !== currRowData[rowKey]);
                // 删除后跳转上一条数据，防止超限
                tableRef.value.prev();
            }
        }
    ];
    const editBtns = [
        {
            content: '保存',
            id: 'save',
            type: 'primary',
            onClick: async () => {
                const res = await save();

                if (res) {
                    // 切换为只读态
                    tableRef.value.toggleEdit(false);
                    // 保存完毕关闭弹窗
                    tableRef.value.toggleExpandRow(false);
                }
            }
        },
        {
            content: '保存并新增',
            id: 'saveAndAdd',
            onClick: async () => {
                const res = await save();

                if (res) {
                    add();
                }
            }
        },
        {
            // 上移按钮
            content: '上移',
            id: 'moveUp',
            icon: 'Top',
            onClick: () => {
                const index = tableRef.value.getCurrRowIndex();

                // 将 index 的数据上移一行
                let list = editData3.value.slice(0);
                list.splice(index - 1, 0, list.splice(index, 1)[0]);
                saveData.value = list.slice(0);
                tableRef.value.prev();
            }
        },
        {
            // 下移按钮
            content: '下移',
            id: 'moveDown',
            icon: 'Bottom',
            onClick: () => {
                const index = tableRef.value.getCurrRowIndex();

                // 将 index 的数据下移一行
                let list = editData3.value.slice(0);
                list.splice(index + 1, 0, list.splice(index, 1)[0]);
                saveData.value = list.slice(0);
                tableRef.value.next();
            }
        }
    ];

    if (editable) {
        btns = editBtns;
    } else {
        btns = detailBtns;
    }

    if (rowIndex === 0) {
        // 第一条不展示上移
        return btns.filter((item) => item.id !== 'moveUp');
    }

    if (rowIndex === editData3.value.length - 1) {
        // 最后一条不展示下移
        return btns.filter((item) => item.id !== 'moveDown');
    }

    return btns;
};

// ===================================================== 带边框 =====================================================
const borderStyle = ref('none');

// ===================================================== 单元格自动省略 =====================================================
const ellipsisEnabled = ref(true);
const baseColumns: Record<string, any>[] = [
    { dataIndex: 'itemName', title: '事项名称' },
    { dataIndex: 'ouName', title: '所在部门' },
    {
        dataIndex: 'date',
        title: '办理时间'
    },
    {
        title: '操作',
        key: 'action'
    }
];
const columnList2 = computed(() => {
    return baseColumns.map((column) => {
        if (column.dataIndex === 'date') {
            return {
                ...column,
                width: 100,
                ellipsis: ellipsisEnabled.value
            };
        }
        return column;
    });
});
// ===================================================== 冻结操作列 =====================================================
const columnList3: Record<string, any>[] = [
    { dataIndex: 'itemName', title: '事项名称', width: 100 },
    { dataIndex: 'ouName', title: '所在部门', width: 100 },
    { dataIndex: 'date', title: '办理时间', width: 100 },
    {
        title: '操作',
        key: 'action',
        fixed: true,
        width: 80
    }
];
// ===================================================== 行列合并 =====================================================
const sharedOnCell = (_, index) => {
    if (index >= 4) {
        return { colSpan: 0 };
    }
};
const columnList4: Record<string, any>[] = [
    {
        dataIndex: 'itemName',
        title: '事项名称',
        width: 100,
        customCell: (_, index) => ({
            colSpan: index < 4 ? 1 : 5
        })
    },
    { dataIndex: 'ouName', title: '所在部门', width: 100, customCell: sharedOnCell },
    {
        dataIndex: 'date',
        title: '办理时间',
        colSpan: 2,
        width: 100,
        customCell: (_, index) => {
            if (index === 2) {
                return { rowSpan: 2 };
            }
            if (index === 3) {
                return { rowSpan: 0 };
            }
            if (index >= 4) {
                return { colSpan: 0 };
            }
        }
    },
    {
        dataIndex: 'schedule',
        title: '预约时间',
        colSpan: 0,
        width: 100,
        customCell: sharedOnCell
    },
    {
        dataIndex: 'age',
        title: '年龄',
        width: 100,
        customCell: sharedOnCell
    }
];
// ===================================================== 隐藏列 =====================================================
const changeVisible = (item) => {
    item.hidden = !item.hidden;
};
const columnList6: Ref<Record<string, any>[]> = ref([
    { dataIndex: 'itemName', title: '事项名称', width: 100, hidden: false },
    { dataIndex: 'ouName', title: '所在部门', width: 100, hidden: false },
    { dataIndex: 'date', title: '办理时间', width: 100, hidden: false },
    {
        title: '操作',
        key: 'action',
        width: 80,
        fixed: true,
        hidden: false
    }
]);

// ===================================================== 表头分组 =====================================================
const columnList5: Record<string, any>[] = [
    { dataIndex: 'itemName', title: '事项名称', width: 100 },
    {
        title: '其他信息',
        children: [
            { dataIndex: 'ouName', title: '所在部门', width: 100 },
            {
                title: '时间',
                width: 100,
                children: [
                    { dataIndex: 'date', title: '办理时间' },
                    {
                        dataIndex: 'schedule',
                        title: '预约时间'
                    }
                ]
            }
        ]
    },
    {
        title: '状态',
        children: [
            { dataIndex: 'age', title: '年龄', width: 100 },
            {
                title: '进度',
                dataIndex: 'status',
                width: 100
            }
        ]
    },
    {
        title: '操作',
        key: 'action',
        fixed: true,
        width: 80
    }
];

// ===================================================== 批处理 =====================================================
const rowSelection = reactive({
    selectedRowKeys: [],
    onChange: (selectedRowKeys: string[], selectedRows: Record<string, any>[]) => {
        rowSelection.selectedRowKeys = selectedRowKeys;
        console.log(`选中的行键值: ${rowSelection.selectedRowKeys}`, '选中的行数据: ', selectedRows);
    },
    getCheckboxProps: (record: Record<string, any>) => ({
        disabled: record.itemName === '我是事项1' // 配置不可选中的列
    })
});
// ===================================================== 总结栏 =====================================================
const columnList9 = ref([
    {
        title: '姓名',
        dataIndex: 'name'
    },
    {
        title: '借款',
        dataIndex: 'borrow'
    },
    {
        title: '还款',
        dataIndex: 'repayment'
    }
]);
const data9 = ref([
    {
        key: '1',
        name: '张三',
        borrow: 10,
        repayment: 33
    },
    {
        key: '2',
        name: '李四',
        borrow: 100,
        repayment: 0
    },
    {
        key: '3',
        name: '王五',
        borrow: 10,
        repayment: 10
    },
    {
        key: '4',
        name: '赵六',
        borrow: 75,
        repayment: 45
    }
]);
const totals = computed(() => {
    let totalBorrow = 0;
    let totalRepayment = 0;

    data9.value.forEach(({ borrow, repayment }) => {
        totalBorrow += borrow;
        totalRepayment += repayment;
    });
    return { totalBorrow, totalRepayment };
});
// ===================================================== 渲染HTML =====================================================
const columnList10 = [
    {
        title: '姓名',
        dataIndex: 'name',
        width: 200,
        allowHtml: 'text'
    },
    {
        title: '性别',
        dataIndex: 'sex',
        width: 200,
        allowHtml: 'html'
    },
    {
        title: '地址',
        dataIndex: 'address',
        width: 200,
        allowHtml: 'decodeHtml'
    }
];
const data = [
    {
        key: '1',
        name: '<span style="color: red">张三</span>',
        sex: '<span style="color: red">女</span>',
        address: '<span style="color: red">纽约第一湖公园</span>'
    },
    {
        key: '2',
        name: '&lt;span style=&quot;color: red&quot;&gt;李四&lt;/span&gt;',
        sex: '&lt;span style=&quot;color: red&quot;&gt;男&lt;/span&gt;',
        address: '&lt;span style=&quot;color: red&quot;&gt;伦敦第一湖公园&lt;/span&gt;'
    },
    {
        key: '3',
        name: '王五',
        sex: '男',
        address: '悉尼第一湖公园'
    }
];
// ===================================================== 自定义表头cell =====================================================
const columnList11: Record<string, any>[] = [
    {
        key: 'itemName',
        dataIndex: 'itemName',
        title: '事项名称',
        width: 100,
        required: true,
        tooltip: '请输入事项名称'
    },
    {
        key: 'ouName',
        dataIndex: 'ouName',
        title: '所在部门',
        width: 100,
        tooltip: {
            content: '<span style="color: var(--e-color-danger)">请输入所在部门</span>',
            placement: 'left',
            effect: 'light',
            rawContent: true,
            showArrow: false
        },
        editor: {
            type: 'input',
            props: {}
        },
        rules: [{ required: true, message: '请输入所在部门' }]
    },
    {
        key: 'date',
        dataIndex: 'date',
        title: '办理时间',
        width: 100,
        tooltip: '请输入办理时间',
        rules: [
            { type: 'required', message: '请输入办理时间' },
            { type: 'date', message: '请输入正确的办理时间' }
        ]
    },
    {
        title: '操作',
        key: 'action',
        width: 80
    }
];
</script>

<style lang="scss" scoped>
@import '../css/common.scss';

::v-deep .page-tab.ep-tab {
    height: calc(100vh - 48px);
    overflow: hidden;
}

// ::v-deep .em-table__cell.table-striped {
//     background-color: #fafafa;
// }
</style>
