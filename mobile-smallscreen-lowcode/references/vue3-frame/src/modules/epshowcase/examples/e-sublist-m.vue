<template>
    <div class="van-content">
        <div class="example-group">
            <text class="cell-title">基础用法</text>
            <div class="example-card">
                <e-sublist-m
                    :rowKey="rowKey"
                    :dataSource="tableSource.dataSource"
                    :columns="columnList"
                    :title="(record) => record && record.itemName"
                    height="500px"
                    :briefInfoList="['ouName', 'date']"
                >
                    <template #editor="{ column, record, editable }">
                        <e-input-m
                            v-if="column.dataIndex === 'age'"
                            v-model.number="record[column.dataIndex]"
                            :disabled="!editable"
                            type="number"
                        />
                    </template>
                </e-sublist-m>
            </div>
        </div>
        <div class="example-group">
            <text class="cell-title">异步加载</text>
            <div class="example-card">
                <e-sublist-m
                    :rowKey="rowKey"
                    :dataSource="dataSource"
                    :pagination="pagination"
                    :loading="loading"
                    height="500px"
                    :columns="columnList"
                    :title="(record) => record && record.itemName"
                    :briefInfoList="['ouName', 'date']"
                    @change="onTableChange"
                ></e-sublist-m>
            </div>
        </div>
        <div class="example-group">
            <text class="cell-title">结合toolbar工具栏</text>
            <div class="example-card">
                <e-sublist-m
                    :rowKey="rowKey"
                    :dataSource="dataSource2"
                    :pagination="pagination2"
                    :loading="loading2"
                    height="500px"
                    :columns="columnList"
                    :title="(record) => record && record.itemName"
                    :briefInfoList="['ouName', 'date']"
                    @change="onTableChange2"
                >
                    <template #toolbar>
                        <e-toolbar-m title="事项管理">
                            <template #filter>
                                <e-toolbar-search-m :search-list="searchList" @advance-search="onAdvanceSearch" />
                            </template>
                        </e-toolbar-m>
                    </template>
                </e-sublist-m>
            </div>
        </div>
        <div class="example-group">
            <text class="cell-title">行展开</text>
            <div class="example-card">
                <e-sublist-m
                    :rowKey="rowKey"
                    :dataSource="tableSource.dataSource"
                    :columns="columnList"
                    :title="(record) => record && record.itemName"
                    height="500px"
                    :briefInfoList="['ouName', 'date']"
                    v-model:expandedRowKeys="expandedRowKeys"
                    @expand-change="onExpand"
                ></e-sublist-m>
            </div>
        </div>
        <div class="example-group">
            <text class="cell-title">表单编辑</text>
            <div class="example-card">
                <e-sublist-m
                    ref="sublistRef"
                    :rowKey="rowKey"
                    :dataSource="editData3"
                    :columns="columnList2"
                    :title="(record) => record && record.itemName"
                    height="500px"
                    :briefInfoList="['ouName', 'date']"
                    :getFormBtns="getFormBtns"
                    v-model:expandedRowKeys="expandedRowKeys2"
                >
                    <template #editor="{ column, record, editable }">
                        <e-input-m
                            v-if="column.dataIndex === 'age'"
                            v-model.number="record[column.dataIndex]"
                            :disabled="!editable"
                            type="number"
                        />
                    </template>
                    <template #footer>
                        <div class="edit-btn">
                            <e-button-m text icon="CirclePlus" @click="onAdd">新增</e-button-m>
                        </div>
                    </template>
                </e-sublist-m>
            </div>
        </div>
        <div class="example-group">
            <text class="cell-title">切换表格形式</text>
            <div class="example-card">
                <e-switch-m v-model="renderAsTable"></e-switch-m>
                <e-sublist-m
                    :rowKey="rowKey"
                    :dataSource="tableSource.dataSource"
                    :columns="columnList"
                    :title="(record) => record && record.itemName"
                    height="500px"
                    :briefInfoList="['ouName', 'date']"
                    :renderAsTable="renderAsTable"
                ></e-sublist-m>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, reactive, watch } from 'vue';
import { useTableDataSource } from '@epoint-fe/eui-hooks';

const rowKey = 'userGuid';
// ===================================================== 基础用法 =====================================================
const columnList: Record<string, any>[] = [
    { dataIndex: 'itemName', title: '事项名称', width: 100 },
    { dataIndex: 'ouName', title: '所在部门', width: 100 },
    { dataIndex: 'date', title: '办理时间', width: 100 },
    {
        dataIndex: 'schedule',
        title: '预约时间',
        width: 100
    },
    {
        dataIndex: 'age',
        title: '年龄',
        width: 100
    },
    {
        dataIndex: 'status',
        title: '状态',
        width: 100
    }
];
// tableSource 具备以下属性： { dataSource, pageSize, current, total, loading, refresh, onTableChange }
const tableSource = useTableDataSource('/frameaction/getDataGridDataAll', {
    idField: rowKey,
    columns: columnList,
    pageSize: 10
});

// ===================================================== 异步加载 =====================================================
// 需要双向绑定时，要解构获取
const { dataSource, pageSize, current, total, loading, refresh, onTableChange } = useTableDataSource(
    '/frameaction/getDataGridData',
    {
        pageSize: 10, // 模拟数据是10
        idField: rowKey,
        columns: columnList
    }
);
const pagination = reactive({
    total,
    current: current.value,
    pageSize: pageSize.value
});
// ===================================================== 结合toolbar工具栏 =========================================================
const params: any = reactive({
    userName: '',
    loginId: '',
    ouName: ''
});
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
    columns: columnList,
    params
});
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
    }
]);
// ===================================================== 行展开 ============================================================
const expandedRowKeys = ref(['2', '4']);
const onExpand = (expandedKeys) => {
    console.log('行展开变化事件', expandedKeys, expandedRowKeys.value);
};
// ===================================================== 表单编辑 =====================================================
const expandedRowKeys2 = ref([]); // 展开的行key数组
const sublistRef = ref<any>();
const columnList2: Record<string, any>[] = [
    {
        dataIndex: 'itemName',
        title: '事项名称',
        disabled: true,
        required: true
    },
    { dataIndex: 'ouName', title: '所在部门', width: 100 },
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
        rules: [
            { type: 'required', message: '请输入年龄' },
            { type: 'number', message: '请输入正确的年龄' }
        ]
    },
    {
        dataIndex: 'status',
        title: '状态'
    }
];
// 接口返回数据
const { dataSource: dataSource3 } = useTableDataSource('/frameaction/getDataGridDataAll', {
    pageSize: 10,
    idField: rowKey,
    columns: columnList2
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
const onAdd = () => {
    const userGuid = new Date().getTime().toString();
    // 在列表末尾新增一条数据
    sublistRef.value.add({
        userGuid,
        itemName: '我是新增事项',
        ouName: '',
        status: '',
        age: '',
        date: '',
        schedule: ''
    });
    // 切换为编辑态
    sublistRef.value.toggleEdit(true, userGuid);
    // 展开行
    expandedRowKeys2.value.push(userGuid);
};
const save = async (record) => {
    // 保存之前先校验
    const { valid, fields } = await sublistRef.value.validateRow(record[rowKey]);
    console.log('校验表单', valid, fields);

    if (valid) {
        const currRowData = sublistRef.value.getRowData(record[rowKey]);
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
const closeEdit = (record) => {
    sublistRef.value.toggleEdit(false, record[rowKey]);
};
// 行操作按钮
const getFormBtns = (record, rowIndex, editable) => {
    let btns = [];
    const detailBtns = [
        {
            content: '编辑',
            type: 'primary',
            id: 'edit',
            onClick: () => {
                console.log('编辑', record);
                const key = record[rowKey];

                sublistRef.value.toggleEdit(true, key);
                // 编辑时展开行
                if (!expandedRowKeys2.value.includes(key)) {
                    expandedRowKeys2.value.push(key);
                }
            }
        },
        {
            content: '上移',
            id: 'up',
            onClick: () => {
                // 将 index 的数据上移一行
                let list = editData3.value.slice(0);
                list.splice(rowIndex - 1, 0, list.splice(rowIndex, 1)[0]);
                saveData.value = list.slice(0);
            }
        },
        {
            content: '下移',
            id: 'down',
            onClick: () => {
                // 将 rowIndex 的数据下移一行
                let list = editData3.value.slice(0);
                list.splice(rowIndex + 1, 0, list.splice(rowIndex, 1)[0]);
                saveData.value = list.slice(0);
            }
        }
    ];
    const editBtns = [
        {
            content: '保存',
            type: 'primary',
            id: 'save',
            onClick: async () => {
                const res = await save(record);

                if (res) {
                    // 关闭编辑
                    closeEdit(record);
                }
            }
        },
        {
            content: '取消',
            id: 'cancel',
            onClick: () => {
                // 还原数据
                editData3.value = JSON.parse(JSON.stringify(saveData.value));
                closeEdit(record);
            }
        },
        {
            content: '删除',
            type: 'danger',
            id: 'del',
            onClick: () => {
                saveData.value = editData3.value.filter((item) => item[rowKey] !== record[rowKey]);
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
        return btns.filter((item) => item.id !== 'up');
    }

    if (rowIndex === editData3.value.length - 1) {
        // 最后一条不展示下移
        return btns.filter((item) => item.id !== 'down');
    }

    // 不在保存数据中说明是新增的，不展示删除
    if (saveData.value.findIndex((item) => item[rowKey] === record[rowKey]) === -1) {
        return btns.filter((item) => item.id !== 'del');
    }

    return btns;
};

// --------------------------------------------------------------------- 切换表格形式 ----------------------------------------------------------------------------------
const renderAsTable = ref(false);

const change = (data: any) => {
    console.log('change', data);
};
</script>
<style lang="scss" scoped>
@import '../css/common.scss';
</style>
