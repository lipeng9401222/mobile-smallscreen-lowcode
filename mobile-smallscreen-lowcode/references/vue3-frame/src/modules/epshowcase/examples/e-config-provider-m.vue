<template>
    <div class="van-content">
        <text class="cell-title">i18n配置</text>
        <div class="flex justify-spacep-between mb-4 flex-wrap gap-4">
            <e-button-m @click="toggle">Switch Language</e-button-m>
            <e-config-provider-m :lang="language">
                <e-table-m :data="[]" />
                <e-pagination-m :total="100" />
            </e-config-provider-m>
        </div>
        <text class="cell-title">对按钮进行配置</text>
        <div class="flex justify-spacep-between mb-4 flex-wrap gap-4">
            <div>
                <e-checkbox-m v-model="config.autoInsertSpace">autoInsertSpace</e-checkbox-m>
            </div>
            <e-config-provider-m :button="config">
                <e-button-m>中文</e-button-m>
            </e-config-provider-m>
        </div>
        <text class="cell-title">对消息进行配置</text>
        <div class="flex justify-spacep-between mb-4 flex-wrap gap-4">
            <e-config-provider-m :message="configMessage">
                <e-button-m @click="open">OPEN</e-button-m>
            </e-config-provider-m>
        </div>
        <text class="cell-title">对select进行配置</text>
        <div class="flex justify-spacep-between mb-4 flex-wrap gap-4">
            <div>
                <e-checkbox-m v-model="selectConfig.clearable">showclearable</e-checkbox-m>
            </div>
            <e-config-provider-m :select="selectConfig">
                <e-select-m v-model="value1" multiple placeholder="请选择">
                    <e-option-m v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
                </e-select-m>
            </e-config-provider-m>
        </div>
        <text class="cell-title">对datePicker进行配置</text>
        <div class="flex justify-spacep-between mb-4 flex-wrap gap-4">
            <div>
                firstDayOfWeek：
                <e-input-number-m v-model="configDatePicker.firstDayOfWeek" :min="1" :max="7" />
            </div>
            <div>
                format：
                <e-select-m v-model="configDatePicker.format" :options="optionsDatePicker" />
            </div>
            <e-config-provider-m :date-picker="configDatePicker">
                <e-date-picker-m v-model="valueDatePicker" type="date" />
            </e-config-provider-m>
        </div>
        <text class="cell-title">对表单进行配置</text>
        <div class="flex justify-spacep-between mb-4 flex-wrap gap-4">
            <e-config-provider-m :form="formConfig">
                <e-form-m label-width="100px" :model="formConfig" :rules="rules">
                    <e-form-item-m label="标签后缀">
                        <e-input-m v-model="formConfig.labelSuffix" />
                    </e-form-item-m>
                    <e-form-item-m label="标签对齐方式">
                        <e-select-m v-model="formConfig.labelPosition" placeholder="请选择对齐方式">
                            <e-option-m
                                v-for="item in optionsForm"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                            />
                        </e-select-m>
                    </e-form-item-m>
                    <e-form-item-m label="必填星号位置设置" prop="requireAsteriskPosition">
                        <e-select-m v-model="formConfig.requireAsteriskPosition" placeholder="请选择星号位置">
                            <e-option-m
                                v-for="item in optionsForm2"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                            />
                        </e-select-m>
                    </e-form-item-m>
                </e-form-m>
            </e-config-provider-m>
        </div>
        <text class="cell-title">对文件上传进行配置</text>
        <div class="flex justify-spacep-between mb-4 flex-wrap gap-4">
            <e-config-provider-m :file-upload="configFileUpload">
                <e-file-upload-m action="https://fe.epoint.com.cn/mock/752/eui-vue/uploadFile" />
            </e-config-provider-m>
        </div>
        <!-- <text class="cell-title">对table进行配置</text>
        <div class="flex justify-spacep-between mb-4 flex-wrap gap-4">
            <e-button-m @click="togglePageSize">Switch PageSize</e-button-m>
            <e-button-m @click="toggleBorderStyle">Switch borderStyle</e-button-m>
            <e-button-m @click="toggleZIndex">Switch ZIndex</e-button-m>
            <e-config-provider-m :table="table" :zIndex="zIndex">
                <e-table-m :dataSource="dataSource" :columns="columnList"></e-table-m>
            </e-config-provider-m>
        </div>
        <text class="cell-title">对组件尺寸进行配置</text>
        <div class="flex justify-spacep-between mb-4 flex-wrap gap-4">
            <e-radio-group-m v-model="size" label="尺寸控制">
                <e-radio-button-m value="large">大尺寸</e-radio-button-m>
                <e-radio-button-m value="default">默认尺寸</e-radio-button-m>
                <e-radio-button-m value="small">小尺寸</e-radio-button-m>
            </e-radio-group-m>
            <e-config-provider-m :size="size">
                <e-table-m :dataSource="dataSource" :columns="columnList"></e-table-m>
                <e-form-m :model="form" label-width="120px">
                    <e-form-item-m label="活动名称">
                        <e-input-m v-model="form.name" />
                    </e-form-item-m>
                    <e-form-item-m label="活动形式">
                        <e-input-m v-model="form.desc" type="textarea" />
                    </e-form-item-m>
                    <e-form-item-m>
                        <e-button-m type="primary" @click="onSubmit(form)">创建</e-button-m>
                        <e-button-m>取消</e-button-m>
                    </e-form-item-m>
                </e-form-m>
            </e-config-provider-m>
        </div> -->
    </div>
</template>
<script lang="ts" setup>
import { computed, ref, reactive } from 'vue';
import { getAvailableLanguages, registerLocale, EMessageM, type FormRules, en } from '@epoint-mfe/eui-components';
import { useTableDataSource } from '@epoint-fe/eui-hooks';

// ================================================================= 对语言配置 =================================================================
const language = ref('zh-cn');
// 注册其他语言包
const autoLoad = () => {
    const languages = getAvailableLanguages();

    // 如语言包未注册，则引入并注册
    if (!languages.includes('en')) {
        registerLocale('en', en);
    }
};
const toggle = () => {
    const target = language.value === 'zh-cn' ? 'en' : 'zh-cn';

    if (target === 'en') {
        // 注册其他语言包，en语言包已内置可直接切换，此处仅作代码示例
        autoLoad();
    }

    language.value = target;
};

// ================================================================= 对按钮配置 =================================================================
const config = reactive({
    autoInsertSpace: true
});

// ================================================================= 对消息提示配置 =================================================================
const configMessage = reactive({
    max: 3
});
const open = () => {
    EMessageM({
        message: 'This is a normal message'
    });
};

// ================================================================= 对select配置 ==================================================================
const value1 = ref([]);
const options = [
    {
        value: 'Option1',
        label: 'Option1'
    },
    {
        value: 'Option2',
        label: 'Option2'
    },
    {
        value: 'Option3',
        label: 'Option3'
    },
    {
        value: 'Option4',
        label: 'Option4'
    },
    {
        value: 'Option5',
        label: 'Option5'
    }
];
const selectConfig = reactive({
    clearable: true
});

// ================================================================= 对日期选择器配置 ==================================================================
const optionsDatePicker = [
    { label: 'YYYY-MM-DD', value: 'YYYY-MM-DD' },
    { label: 'YYYY/MM/DD', value: 'YYYY/MM/DD' },
    { label: 'YYYY年MM月DD日', value: 'YYYY年MM月DD日' }
];
const valueDatePicker = ref('');
const configDatePicker = reactive({
    firstDayOfWeek: 1,
    format: 'YYYY-MM-DD'
});

// ================================================================= 对表单配置 ==========================================================================
const formConfig = reactive({
    labelSuffix: ':',
    labelPosition: 'top',
    requireAsteriskPosition: 'left'
});
const optionsForm = [
    {
        value: 'left',
        label: '左侧'
    },
    {
        value: 'right',
        label: '右侧'
    },
    {
        value: 'top',
        label: '顶部'
    }
];
const optionsForm2 = [
    {
        value: 'left',
        label: '左侧'
    },
    {
        value: 'right',
        label: '右侧'
    }
];
const rules = reactive<FormRules>({
    requireAsteriskPosition: [
        {
            required: true,
            trigger: 'change'
        }
    ]
});

// ================================================================= 对文件上传配置 ==================================================================

const configFileUpload = reactive({
    chunkSize: 1024,
    typeLimit: 'doc,docx,xls,xlsx,png,jpg,jpeg'
});

// ================================================================= 对表格配置 ==================================================================

const table = reactive({
    pageSize: 5,
    borderStyle: 'horizontal'
});
const zIndex = ref(100);
const togglePageSize = () => {
    table.pageSize = table.pageSize === 5 ? 10 : 5;
};
const toggleBorderStyle = () => {
    table.borderStyle = table.borderStyle === 'horizontal' ? 'full' : 'horizontal';
};
const toggleZIndex = () => {
    zIndex.value = zIndex.value === 100 ? 2000 : 100;
};
// 普通示例
const columnList: Record<string, any>[] = [
    { dataIndex: 'itemName', title: '事项名称' },
    { dataIndex: 'ouName', title: '所在部门' },
    {
        dataIndex: 'date',
        title: '办理时间',
        sorter: true, // 是否可排序
        filterInputType: 'date', // 筛选器类型：日期
        filterOperators: ['eq', 'neq', 'gt', 'gte', 'lt', 'lte'], // 筛选运算符可选列表：等于、不等于、大于、大于等于、小于、小于等于
        filterOperator: 'eq', // 筛选运算符：等于
        includeInCompoundSearch: false
    },
    {
        title: '操作',
        key: 'action',
        action: {
            items: [
                {
                    icon: 'Edit',
                    label: '修改',
                    onClick: (row) => {
                        ejs.ui.toast('修改' + row.itemName);
                    },
                    visible: (row) => row.itemName === '我是事项1'
                },
                {
                    icon: 'Setting',
                    label: '配置',
                    onClick: (row) => {
                        console.log(row);
                        ejs.ui.toast('配置' + row.itemName);
                    },
                    disabled: (row) => row.itemName === '我是事项2'
                }
            ]
        }
    }
];
// tableSource 具备以下属性： { dataSource, pageSize, current, total, loading, refresh, onTableChange }
// 需要双向绑定时，要解构获取
const { dataSource, pageSize, current, total, loading, refresh, onTableChange } = useTableDataSource(
    '/frameaction/getDataGridDataAll',
    {
        pageSize: 10, // 默认就是10
        idField: 'userGuid',
        columns: columnList
    }
);

// 尺寸控制
const size = ref('default');
const form = reactive({
    name: '',
    desc: ''
});
const onSubmit = (form: Record<string, any>) => {
    console.log(form);
};
</script>
<style lang="scss" scoped>
@import '../css/common.scss';
.van-content {
    padding: 0;
}
</style>
