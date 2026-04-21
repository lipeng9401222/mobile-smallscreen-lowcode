<template>
    <div class="van-content">
        <div class="example-group">
            <text class="cell-title">基本用法</text>
            <div class="example-card">
                <div class="example-content">
                    <div class="example-desc">大尺寸复选框</div>
                    <div class="example-row">
                        <e-checkbox-m v-model="checked1" label="选项 1" size="large" />
                        <e-checkbox-m v-model="checked2" label="选项 2" size="large" />
                    </div>
                    
                    <div class="example-desc">默认尺寸复选框</div>
                    <div class="example-row">
                        <e-checkbox-m v-model="checked3" label="选项 1" />
                        <e-checkbox-m v-model="checked4" label="选项 2" />
                    </div>
                    
                    <div class="example-desc">小尺寸复选框</div>
                    <div class="example-row">
                        <e-checkbox-m v-model="checked5" label="选项 1" size="small" />
                        <e-checkbox-m v-model="checked6" label="选项 2" size="small" />
                    </div>
                    
                    <div class="example-desc">禁用状态</div>
                    <div class="example-row">
                        <e-checkbox-m v-model="checked5" label="选项 1" size="small" disabled />
                        <e-checkbox-m v-model="checked6" label="选项 2" size="small" disabled />
                    </div>
                </div>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">自定义内容</text>
            <div class="example-card">
                <div class="example-desc">通过 render 函数自定义选项内容</div>
                <e-checkbox-group-m v-model="checked7" :options="options" :render="customRender" />
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">禁用状态</text>
            <div class="example-card">
                <div class="example-row">
                    <e-checkbox-m v-model="checked1" disabled>Disabled</e-checkbox-m>
                    <e-checkbox-m v-model="checked2">Not disabled</e-checkbox-m>
                </div>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">复选框组</text>
            <div class="example-card">
                <e-checkbox-group-m v-model="checkList">
                    <e-checkbox-m value="A" label="选项 A" />
                    <e-checkbox-m value="B" label="选项 B" />
                    <e-checkbox-m value="C" label="选项 C" />
                    <e-checkbox-m value="D" label="禁用的" disabled />
                    <e-checkbox-m value="E" label="禁用的 已被勾选" disabled />
                </e-checkbox-group-m>
                <div class="example-info">
                    <p>已选中: {{ checkList.join(', ') || '无' }}</p>
                </div>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">垂直排布</text>
            <div class="example-card">
                <div class="example-content">
                    <div class="example-desc">水平排布（默认）</div>
                    <e-checkbox-group-m v-model="checkList2">
                        <e-checkbox-m value="A" label="选项 A" />
                        <e-checkbox-m value="B" label="选项 B" />
                        <e-checkbox-m value="C" label="选项 C" />
                        <e-checkbox-m value="D" label="禁用的" disabled />
                        <e-checkbox-m value="E" label="禁用的 已被勾选" disabled />
                    </e-checkbox-group-m>

                    <div class="example-desc">垂直排布</div>
                    <e-checkbox-group-m v-model="checkList3" direction="vertical">
                        <e-checkbox-m value="A" label="选项 A" />
                        <e-checkbox-m value="B" label="选项 B" />
                        <e-checkbox-m value="C" label="选项 C" />
                        <e-checkbox-m value="D" label="禁用的" disabled />
                        <e-checkbox-m value="E" label="禁用的 已被勾选" disabled />
                    </e-checkbox-group-m>
                </div>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">不定状态</text>
            <div class="example-card">
                <div class="example-content">
                    <div class="example-desc">全选功能，支持不定状态</div>
                    <e-checkbox-m v-model="checkAll" :indeterminate="isIndeterminate" @change="handleCheckAllChange">
                        Check all
                    </e-checkbox-m>
                    <e-checkbox-group-m v-model="checkedCities" @change="handleCheckedCitiesChange">
                        <e-checkbox-m v-for="city in cities" :key="city" :value="city" :label="city">{{ city }}</e-checkbox-m>
                    </e-checkbox-group-m>
                    <div class="example-info">
                        <p>已选城市: {{ checkedCities.join(', ') || '无' }}</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">最小/最大项已选</text>
            <div class="example-card">
                <div class="example-desc">限制选择数量：最少1个，最多2个</div>
                <e-checkbox-group-m v-model="checkedCities1" :min="1" :max="2">
                    <e-checkbox-m v-for="city in cities1" :key="city" :label="city" :value="city">{{ city }}</e-checkbox-m>
                </e-checkbox-group-m>
                <div class="example-info">
                    <p>已选: {{ checkedCities1.length }}/2</p>
                </div>
            </div>
        </div>
        <text class="cell-title">按钮样式</text>
        <div class="flex justify-spacep-between mb-4 flex-wrap gap-4">
            <div>
                <e-checkbox-group-m v-model="checkboxGroup1" size="large">
                    <e-checkbox-button-m v-for="city in cities" :key="city" :value="city" :label="city">
                        {{ city }}
                    </e-checkbox-button-m>
                </e-checkbox-group-m>
            </div>
            <div class="demo-button-style">
                <e-checkbox-group-m v-model="checkboxGroup2">
                    <e-checkbox-button-m v-for="city in cities" :key="city" :value="city" :label="city">
                        {{ city }}
                    </e-checkbox-button-m>
                </e-checkbox-group-m>
            </div>
            <div class="demo-button-style">
                <e-checkbox-group-m v-model="checkboxGroup3" size="small">
                    <e-checkbox-button-m
                        v-for="city in cities"
                        :key="city"
                        :value="city"
                        :label="city"
                        :disabled="city === 'Beijing'"
                    >
                        {{ city }}
                    </e-checkbox-button-m>
                </e-checkbox-group-m>
            </div>
            <div class="demo-button-style">
                <e-checkbox-group-m v-model="checkboxGroup4" size="small" disabled>
                    <e-checkbox-button-m v-for="city in cities" :key="city" :value="city" :label="city">
                        {{ city }}
                    </e-checkbox-button-m>
                </e-checkbox-group-m>
            </div>
        </div>
        <text class="cell-title">块级显示</text>
        <div>
            <e-checkbox-group-m v-model="checkboxGroup1" size="large" block>
                <e-checkbox-button-m v-for="city in cities" :key="city" :value="city" :label="city">
                    {{ city }}
                </e-checkbox-button-m>
            </e-checkbox-group-m>
        </div>
        <div class="demo-button-style">
            <e-checkbox-group-m v-model="checkboxGroup2" block>
                <e-checkbox-button-m v-for="city in cities" :key="city" :value="city" :label="city">
                    {{ city }}
                </e-checkbox-button-m>
            </e-checkbox-group-m>
        </div>
        <div class="demo-button-style">
            <e-checkbox-group-m v-model="checkboxGroup3" size="small" block>
                <e-checkbox-button-m
                    v-for="city in cities"
                    :key="city"
                    :value="city"
                    :label="city"
                    :disabled="city === 'Beijing'"
                >
                    {{ city }}
                </e-checkbox-button-m>
            </e-checkbox-group-m>
        </div>

        <text class="cell-title">通过数据创建组</text>
        <div class="flex justify-spacep-between mb-4 flex-wrap gap-4">
            <div class="box">
                <e-button-m @click="add">新增选项</e-button-m>

                <e-form-m :model="formData">
                    <e-form-item-m label="选项" props="check">
                        <e-checkbox-group-m v-model="formData.check" :options="data" />
                    </e-form-item-m>
                    <e-form-item-m label="选项按钮" props="check">
                        <e-checkbox-group-m v-model="formData.check" :options="data" option-type="button" />
                    </e-form-item-m>
                    <text class="info">tips: 自己写标签时优先级更高,options 不会生效</text>
                    <e-form-item-m label="选项" props="check">
                        <e-checkbox-group-m v-model="formData.check" :options="data">
                            <e-checkbox-m value="1">1</e-checkbox-m>
                            <e-checkbox-m value="2">2</e-checkbox-m>
                            <e-checkbox-m value="3">3</e-checkbox-m>
                        </e-checkbox-group-m>
                    </e-form-item-m>
                </e-form-m>
            </div>
        </div>
        <text class="cell-title">带边框</text>
        <div class="flex justify-spacep-between mb-4 flex-wrap gap-4">
            <div>
                <e-checkbox-m v-model="checked1" label="Option1" size="large" border />
                <e-checkbox-m v-model="checked2" label="Option2" size="large" border />
            </div>
            <div class="mt-4">
                <e-checkbox-m v-model="checked3" label="Option1" border />
                <e-checkbox-m v-model="checked4" label="Option2" border />
            </div>
            <div class="mt-4">
                <e-checkbox-group-m v-model="checkboxGroup5" size="small">
                    <e-checkbox-m label="选项1" value="Option1" border />
                    <e-checkbox-m label="选项2" value="Option2" border />
                </e-checkbox-group-m>
            </div>
            <div class="mt-4">
                <e-checkbox-group-m v-model="checkboxGroup5" size="small">
                    <e-checkbox-m label="选项1" value="Option1" border disabled />
                    <e-checkbox-m label="选项2" value="Option2" border disabled />
                </e-checkbox-group-m>
            </div>
        </div>
        <text class="cell-title">跳出组</text>
        <div class="flex justify-spacep-between mb-4 flex-wrap gap-4">
            <e-checkbox-group-m v-model="checkList1">
                <e-checkbox-m value="A" label="选项 A" />
                <e-checkbox-m value="B" label="选项 B" />
                <e-checkbox-m value="C" label="选项 C" />
                <e-checkbox-m v-model="independentValue" value="D" label="跳出组" :skip-group="true" />
            </e-checkbox-group-m>

            <e-button-m @click="onSubmit">提交</e-button-m>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { h, ref, reactive } from 'vue';
import { Female, Male } from '@epoint-mfe/eui-icons';

const checked1 = ref(true);
const checked2 = ref(false);
const checked3 = ref(false);
const checked4 = ref(false);
const checked5 = ref(false);
const checked6 = ref(false);
const checkList = ref(['E', 'A']);
const checkList2 = ref(['E', 'A']);
const checkList3 = ref(['E', 'A']);
const checkboxGroup1 = ref(['Shanghai']);
const checkboxGroup2 = ref(['Shanghai']);
const checkboxGroup3 = ref(['Shanghai']);
const checkboxGroup4 = ref(['Shanghai']);
const checkboxGroup5 = ref(['Option1']);

// 自定义内容
const checked7 = ref([]);
const options = ref([
    {
        value: 1,
        label: '自定义 Option 1',
        gender: 0,
        contentStyle: 'color: blue;display:flex;',
        icon: '<e-icon-m><male /></e-icon-m>'
    },
    {
        value: 2,
        label: '自定义 Option 2',
        gender: 1,
        contentStyle: 'color: red; display:flex;',
        icon: '<e-icon-m><female /></e-icon-m>'
    }
]);

type RemoteDataItem = {
    value: string; // value
    label: string; // label
    disable: boolean; // disabled
    icon: string; // 图标
    gender: 0 | 1; // 性别
    contentStyle: string;
};

const customRender = (itemData: RemoteDataItem) => {
    return h(
        'div',
        {
            style: itemData.contentStyle
        },
        [
            h('ep-icon', {}, [itemData.gender === 0 ? h(Male) : h(Female)]),
            h('span', itemData.gender == 0 ? '男' : '女'),
            h('span', ` ${itemData.label}`)
        ]
    );
};

// 不定状态
const checkAll = ref(false);
const isIndeterminate = ref(true);
const checkedCities = ref(['Shanghai', 'Beijing']);
const checkedCities1 = ref(['Shanghai', 'Beijing']);
const cities = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen'];
const cities1 = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen'];

const handleCheckAllChange = (val) => {
    checkedCities.value = val ? cities : [];
    isIndeterminate.value = false;
};
const handleCheckedCitiesChange = (value) => {
    const checkedCount = value.length;
    checkAll.value = checkedCount === cities.length;
    isIndeterminate.value = checkedCount > 0 && checkedCount < cities.length;
};

// 通过数据创建组
const _data = Array.from({ length: 5 })
    .fill(0)
    .map((_, i) => ({
        label: `选项${i + 1}`,
        value: `${i + 1}`,
        disabled: false
    }));
_data[0].disabled = true;
_data[2].disabled = true;
_data[4].disabled = true;
const data = reactive(_data);

const formData = reactive({
    check: ['1', '2', '3']
});

function add() {
    const i = data.length + 1;
    data.push({
        label: `选项${i}`,
        value: `${i}`,
        disabled: false
    });
    console.log(data);
}

// 跳出组
const checkList1 = ref([]);

const independentValue = ref(false);

const onSubmit = () => {
    console.log(checkList1.value, independentValue.value);
};
</script>
<style lang="scss" scoped>
@import '../css/common.scss';
.m-2 {
    margin-bottom: 8px;
}
.mt-4 {
    margin-top: 16px;
}
.demo-button-style {
    margin-top: 24px;
}
.info {
    font-size: 14px;
    color: #ff0000;
    margin-left: 16px;
}

.cell-subtitle {
    margin-bottom: 5px;
    padding-left: 10px;
    font-size: 14px;
    &:nth-child(n + 2) {
        margin-top: 10px;
    }
}
</style>
