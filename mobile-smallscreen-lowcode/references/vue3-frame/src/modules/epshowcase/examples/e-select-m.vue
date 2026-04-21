<template>
    <div class="van-content">
        <div class="example-group">
            <text class="cell-title">基础用法</text>
            <div class="example-card">
                <div class="example-content">
                    <div class="example-desc">使用组件插槽</div>
                    <e-select-m v-model="value" placeholder="Select">
                        <e-option-m v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></e-option-m>
                    </e-select-m>
                    
                    <div class="example-desc">使用 options 数据绑定</div>
                    <e-select-m v-model="value" placeholder="Select" :options="options"></e-select-m>
                </div>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">绑定文本</text>
            <div class="example-card">
                <div class="example-content">
                    <div class="example-desc">绑定文本 - 单选模式</div>
                    <e-select-m
                        v-model="value1"
                        v-model:text="text1"
                        :options="options1"
                        :loading="loading1"
                        @visible-change="onVisibleChange1"
                    ></e-select-m>
                    <div class="example-info" v-if="value1">
                        <p>选中值: {{ value1 }} | 选中文本: {{ text1 }}</p>
                    </div>
                    
                    <div class="example-desc">绑定文本 - 多选模式</div>
                    <e-select-m
                        v-model="value2"
                        v-model:text="text2"
                        :options="options2"
                        :loading="loading2"
                        multiple
                        @visible-change="onVisibleChange2"
                        placeholder="请选择"
                    />
                    <div class="example-info" v-if="value2.length">
                        <p>选中值: {{ value2.join(', ') }}</p>
                        <p>选中文本: {{ text2.join(', ') }}</p>
                    </div>
                </div>
            </div>
        </div>


        <div class="example-group">
            <text class="cell-title">禁用选项</text>
            <div class="example-card">
                <div class="example-content">
                    <div class="example-desc">使用插槽方式禁用选项</div>
                    <e-select-m v-model="valueDisabled" placeholder="请选择">
                        <e-option-m
                            v-for="item in optionsDisabled"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                            :disabled="item.disabled"
                        />
                    </e-select-m>
                    
                    <div class="example-desc">使用 options 方式禁用选项</div>
                    <e-select-m v-model="valueDisabled" :options="optionsDisabled" placeholder="请选择" />
                </div>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">禁用选择框</text>
            <div class="example-card">
                <e-select-m v-model="valueDisabled2" disabled placeholder="请选择">
                    <e-option-m v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
                </e-select-m>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">单选可清空</text>
            <div class="example-card">
                <e-select-m v-model="valueClear" placeholder="Select" :options="options" clearable></e-select-m>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">基本多选</text>
            <div class="example-card">
                <div class="example-content">
                    <div class="example-desc">默认展示所有选中项</div>
                    <e-select-m v-model="valueMultiple" :options="options" multiple placeholder="请选择" />

                    <div class="example-desc">折叠显示选中项</div>
                    <e-select-m
                        v-model="valueMultiple2"
                        :options="options"
                        multiple
                        collapse-tags
                        placeholder="请选择"
                    />

                    <div class="example-desc">限制最多显示3个标签</div>
                    <e-select-m
                        v-model="valueMultiple3"
                        :options="options"
                        multiple
                        collapse-tags
                        :max-collapse-tags="3"
                        placeholder="请选择"
                    />
                </div>
            </div>
        </div>


        <div class="example-group">
            <text class="cell-title">自定义模板</text>
            <div class="example-card">
                <e-select-m v-model="valueCustom" placeholder="Select">
                    <e-option-m v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                        <span style="float: left;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">{{ item.label }}</span>
                        <span style="float: right;white-space: nowrap;overflow: hidden;text-overflow: ellipsis; color: var(--e-text-color-secondary); font-size: 13px">
                            {{ item.value }}
                        </span>
                    </e-option-m>
                </e-select-m>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">分组显示</text>
            <div class="example-card">
                <div class="example-content">
                    <div class="example-desc">使用插槽分组</div>
                    <e-select-m v-model="valueLabel" placeholder="请选择">
                        <e-option-group-m v-for="group in optionslabel" :key="group.label" :label="group.label">
                            <e-option-m v-for="item in group.options" :key="item.value" :label="item.label" :value="item.value" />
                        </e-option-group-m>
                    </e-select-m>
                    
                    <div class="example-desc">使用 options 分组</div>
                    <e-select-m v-model="valueLabel" :options="optionslabel" placeholder="请选择" />
                </div>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">选项过滤</text>
            <div class="example-card">
                <e-select-m
                    v-model="valueFilter"
                    :options="options"
                    filterable
                    :filter-method="filterMethod"
                    placeholder="请选择"
                />
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">远程搜索</text>
            <div class="example-card">
                <e-select-m
                    v-model="valueSearch"
                    filterable
                    :remote="true"
                    :remote-method="remoteMethod"
                    placeholder="请选择"
                >
                    <e-option-m
                        v-for="item in remoteOptions"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                    ></e-option-m>
                </e-select-m>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">创建新项目</text>
            <div class="example-card">
                <div class="example-content">
                    <div class="example-desc">多选模式 - 输入新标签名称或选择现有选项</div>
                    <e-select-m
                        v-model="createNewValue"
                        v-model:text="createNewText"
                        multiple
                        filterable
                        allow-create
                        :reserve-keyword="false"
                        placeholder="输入新标签名称或从现有选项中选择"
                        @change="onCreateNewChange"
                    >
                        <e-option-m v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
                    </e-select-m>

                    <div class="example-desc">单选模式 - 输入或选择单个标签</div>
                    <e-select-m
                        v-model="createNewSingleValue"
                        v-model:text="createNewSingleText"
                        filterable
                        allow-create
                        :reserve-keyword="true"
                        placeholder="输入或选择单个标签"
                        @change="onCreateNewSingleChange"
                    >
                        <e-option-m v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
                    </e-select-m>
                </div>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">使用 value-key 属性</text>
            <div class="example-card">
                <div class="example-content">
                    <div class="example-desc">使用插槽</div>
                    <e-select-m v-model="value3" value-key="id" placeholder="请选择">
                        <e-option-m v-for="item in options3" :key="item.id" :label="item.label" :value="item" />
                    </e-select-m>
                    
                    <div class="example-desc">使用 options</div>
                    <e-select-m v-model="value3" :options="options3" value-key="id" placeholder="请选择" />

                    <div class="example-info">
                        <p>选中项描述: {{ value3 ? value3.desc : '未选择' }}</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">自定义面板内容</text>
            <div class="example-card">
                <div class="example-content">
                    <div class="example-desc">自定义顶部和底部</div>
                    <e-select-m v-model="valuePanel" placeholder="Select">
                        <template #panel-header>
                            <div style="padding: 8px; background: #f5f7fa; font-weight: 500;">自定义顶部标题</div>
                        </template>
                        <e-option-m v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></e-option-m>
                        <template #panel-footer>
                            <div style="padding: 8px; background: #f5f7fa; font-weight: 500;">自定义底部标题</div>
                        </template>
                    </e-select-m>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
const value = ref('');
const valueDisabled = ref('');
const valueDisabled2 = ref('');
const valueClear = ref('');
const valueCustom = ref('');
const valueLabel = ref('');
const valueFilter = ref('');
const valueSearch = ref('');
const valuePanel = ref('');
const valueMultiple = ref([]);
const valueMultiple2 = ref([]);
const valueMultiple3 = ref([]);
const options = [
    {
        value: 'Beijing',
        label: 'Beijing'
    },
    {
        value: 'Shanghai',
        label: 'Shanghai'
    },
    {
        value: 'Nanjing',
        label: 'Nanjing'
    },
    {
        value: 'Chengdu',
        label: 'Chengdu'
    },
    {
        value: 'Shenzhen',
        label: 'Shenzhen'
    },
    {
        value: 'Guangzhou',
        label: 'Guangzhou'
    }
];
const optionsDisabled = [
    {
        value: 'Beijing',
        label: 'Beijing'
    },
    {
        value: 'Shanghai',
        label: 'Shanghai',
        disabled: true
    },
    {
        value: 'Nanjing',
        label: 'Nanjing'
    },
    {
        value: 'Chengdu',
        label: 'Chengdu'
    },
    {
        value: 'Shenzhen',
        label: 'Shenzhen'
    },
    {
        value: 'Guangzhou',
        label: 'Guangzhou'
    }
];
const optionslabel = [
    {
        label: 'Popular cities',
        options: [
            {
                value: 'Shanghai',
                label: 'Shanghai'
            },
            {
                value: 'Beijing',
                label: 'Beijing'
            }
        ]
    },
    {
        label: 'City name',
        options: [
            {
                value: 'Chengdu',
                label: 'Chengdu'
            },
            {
                value: 'Shenzhen',
                label: 'Shenzhen'
            },
            {
                value: 'Guangzhou',
                label: 'Guangzhou'
            },
            {
                value: 'Dalian',
                label: 'Dalian'
            }
        ]
    }
];

const source = [
    {
        value: '1',
        label: 'Option1'
    },
    {
        value: '2',
        label: 'Option2'
    },
    {
        value: '3',
        label: 'Option3'
    },
    {
        value: '4',
        label: 'Option4'
    },
    {
        value: '5',
        label: 'Option5'
    }
];

const value1 = ref('1');
const text1 = ref('Option1');
const options1 = ref([]);
const loading1 = ref(false);
const onVisibleChange1 = (visible: boolean) => {
    console.log('visible change', visible);
    if (visible && options1.value.length === 0) {
        loading1.value = true;

        // // 模拟懒加载
        setTimeout(() => {
            options1.value = source;
            loading1.value = false;
        }, 500);
    }
};

const value2 = ref(['2']);
const text2 = ref(['Option2']);
const options2 = ref([]);
const loading2 = ref(false);
const onVisibleChange2 = (visible: boolean) => {
    if (visible && options2.value.length === 0) {
        loading2.value = true;
        // 模拟懒加载
        setTimeout(() => {
            options2.value = source;
            loading2.value = false;
        }, 500);
    }
};
const filterMethod = (value: string) => {
    console.log('自定义filterMethod方法', value);

    return source.filter((item) => {
        return item.label.toLowerCase().includes(value.toLowerCase());
    });
};

//==================================远程搜索==================================
interface ListItem {
    value: string;
    label: string;
}
const loading = ref(false);
const list = ref<ListItem[]>([]);
const remoteOptions = ref<ListItem[]>([]);
const remoteMethod = (value: string) => {
    if (value) {
        loading.value = true;
        setTimeout(() => {
            loading.value = false;
            remoteOptions.value = list.value.filter((item) => {
                return item.label.toLowerCase().includes(value.toLowerCase());
            });
        }, 200);
    } else {
        remoteOptions.value = [];
    }
};
const states = [
    'Alabama',
    'Alaska',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'Florida',
    'Georgia',
    'Hawaii',
    'Idaho',
    'Illinois',
    'Indiana',
    'Iowa',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Maine',

];
onMounted(() => {
    list.value = states.map((item) => {
        return { value: `value:${item}`, label: `label:${item}` };
    });
});

//==================================创建新项目==================================
const createNewValue = ref([]);
const createNewText = ref([]);
const createNewSingleValue = ref('');
const createNewSingleText = ref('');

// 创建新项目多选模式的变化事件
const onCreateNewChange = (value, text) => {
    console.log('多选模式 - 值变化:', value);
    console.log('多选模式 - 文本变化:', text);
    console.log('多选模式 - 当前选中项数量:', value?.length || 0);
};

// 创建新项目单选模式的变化事件
const onCreateNewSingleChange = (value, text) => {
    console.log('单选模式 - 值变化:', value);
    console.log('单选模式 - 文本变化:', text);
};

//============================使用value-key属性==========================
type Option = {
    id: number;
    label: string;
    desc: string;
};
const value3 = ref<Option>();
const options3 = ref([
    { id: 1, label: 'Option A', desc: 'Option A - 230506' },
    { id: 2, label: 'Option B', desc: 'Option B - 230506' },
    { id: 3, label: 'Option C', desc: 'Option C - 230506' },
    { id: 4, label: 'Option A', desc: 'Option A - 230507' }
]);

</script>

<style lang="scss" scoped>
@import '../css/common.scss';
</style>
