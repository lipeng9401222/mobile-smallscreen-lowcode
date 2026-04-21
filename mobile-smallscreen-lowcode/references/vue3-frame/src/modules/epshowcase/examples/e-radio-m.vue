<template>
    <div class="van-content">
        <div class="example-group">
            <text class="cell-title">基本用法</text>
            <div class="example-card">
                <div class="example-content">
                    <div class="example-desc">大尺寸单选框</div>
                    <e-radio-group-m v-model="radio1">
                        <e-radio-m value="1" size="large">Option 1</e-radio-m>
                        <e-radio-m value="2" size="large">Option 2</e-radio-m>
                    </e-radio-group-m>
                    
                    <div class="example-desc">默认尺寸单选框</div>
                    <e-radio-group-m v-model="radio2">
                        <e-radio-m value="1">Option 1</e-radio-m>
                        <e-radio-m value="2">Option 2</e-radio-m>
                    </e-radio-group-m>
                    
                    <div class="example-desc">小尺寸单选框</div>
                    <e-radio-group-m v-model="radio3">
                        <e-radio-m value="1" size="small">Option 1</e-radio-m>
                        <e-radio-m value="2" size="small">Option 2</e-radio-m>
                    </e-radio-group-m>
                    
                    <div class="example-desc">禁用状态</div>
                    <e-radio-group-m v-model="radio3" disabled>
                        <e-radio-m value="1" size="small">Option 1</e-radio-m>
                        <e-radio-m value="2" size="small">Option 2</e-radio-m>
                    </e-radio-group-m>
                </div>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">自定义渲染内容</text>
            <div class="example-card">
                <div class="example-desc">通过 render 函数自定义选项内容</div>
                <e-radio-group-m v-model="checked2" :options="options" :render="customRender" />
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">禁用状态</text>
            <div class="example-card">
                <div class="example-row">
                    <e-radio-m v-model="radio" disabled value="disabled">Option A</e-radio-m>
                    <e-radio-m v-model="radio" disabled value="selected and disabled">Option B</e-radio-m>
                </div>
                <div class="example-info">
                    <p>当前选中: {{ radio }}</p>
                </div>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">单选按钮组</text>
            <div class="example-card">
                <e-radio-group-m v-model="radio">
                    <e-radio-m :value="3">Option A</e-radio-m>
                    <e-radio-m :value="6">Option B</e-radio-m>
                    <e-radio-m :value="9">Option C</e-radio-m>
                </e-radio-group-m>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">按钮样式</text>
            <div class="example-card">
                <div class="example-content">
                    <div class="example-desc">大尺寸按钮</div>
                    <e-radio-group-m v-model="radio5" size="large">
                        <e-radio-button-m label="New York" value="New York" />
                        <e-radio-button-m label="Washington" value="Washington" />
                        <e-radio-button-m label="Los Angeles" value="Los Angeles" />
                        <e-radio-button-m label="Chicago" value="Chicago" />
                    </e-radio-group-m>
                    
                    <div class="example-desc">默认尺寸按钮</div>
                    <e-radio-group-m v-model="radio6">
                        <e-radio-button-m label="New York" value="New York" />
                        <e-radio-button-m label="Washington" value="Washington" />
                        <e-radio-button-m label="Los Angeles" value="Los Angeles" />
                        <e-radio-button-m label="Chicago" value="Chicago" />
                    </e-radio-group-m>
                    
                    <div class="example-desc">小尺寸按钮</div>
                    <e-radio-group-m v-model="radio7" size="small">
                        <e-radio-button-m label="New York" value="New York" />
                        <e-radio-button-m label="Washington" value="Washington" />
                        <e-radio-button-m label="Los Angeles" value="Los Angeles" />
                        <e-radio-button-m label="Chicago" value="Chicago" />
                    </e-radio-group-m>
                </div>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">块级样式</text>
            <div class="example-card">
                <div class="example-content">
                    <div class="example-desc">普通按钮组</div>
                    <e-radio-group-m v-model="radio8">
                        <e-radio-button-m label="上海" value="Shanghai" />
                        <e-radio-button-m label="北京" value="Beijing" />
                        <e-radio-button-m label="广州" value="Guangzhou" />
                        <e-radio-button-m label="深圳" value="Shenzhen" />
                    </e-radio-group-m>

                    <div class="example-desc">块级按钮组（宽度充满父容器）</div>
                    <e-radio-group-m v-model="radio8" block>
                        <e-radio-button-m label="上海" value="Shanghai" />
                        <e-radio-button-m label="北京" value="Beijing" />
                        <e-radio-button-m label="广州" value="Guangzhou" />
                        <e-radio-button-m label="深圳" value="Shenzhen" />
                    </e-radio-group-m>
                </div>
            </div>
        </div>


        <div class="example-group">
            <text class="cell-title">通过数据创建组</text>
            <div class="example-card">
                <div class="example-content">
                    <e-button-m type="primary" @click="add">新增选项</e-button-m>

                    <e-form-m :model="formData">
                        <e-form-item-m label="选项" props="radio">
                            <e-radio-group-m v-model="formData.radio" :options="data" />
                        </e-form-item-m>
                        <e-form-item-m label="选项" props="radio">
                            <e-radio-group-m v-model="formData.radio" :options="data" option-type="button" />
                        </e-form-item-m>
                        <div class="example-info">
                            <p>提示：自己写标签时优先级更高，options 不会生效</p>
                        </div>
                        <e-form-item-m label="选项" props="radio">
                            <e-radio-group-m v-model="formData.radio" :options="data">
                                <e-radio-m value="1">1</e-radio-m>
                                <e-radio-m value="2">2</e-radio-m>
                                <e-radio-m value="3">3</e-radio-m>
                            </e-radio-group-m>
                        </e-form-item-m>
                    </e-form-m>
                </div>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">垂直排列</text>
            <div class="example-card">
                <div class="example-content">
                    <div class="example-desc">水平排列（默认）</div>
                    <e-radio-group-m v-model="radio9">
                        <e-radio-m :value="1">选项 A</e-radio-m>
                        <e-radio-m :value="2">选项 B</e-radio-m>
                        <e-radio-m :value="3">选项 C</e-radio-m>
                    </e-radio-group-m>

                    <div class="example-desc">垂直排列</div>
                    <e-radio-group-m v-model="radio9" direction="vertical">
                        <e-radio-m :value="1">选项 A</e-radio-m>
                        <e-radio-m :value="2">选项 B</e-radio-m>
                        <e-radio-m :value="3">选项 C</e-radio-m>
                    </e-radio-group-m>
                </div>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">带边框</text>
            <div class="example-card">
                <div class="example-content">
                    <div class="example-desc">大尺寸边框</div>
                    <e-radio-group-m v-model="radio1">
                        <e-radio-m value="1" size="large" border>Option A</e-radio-m>
                        <e-radio-m value="2" size="large" border>Option B</e-radio-m>
                    </e-radio-group-m>
                    
                    <div class="example-desc">默认尺寸边框</div>
                    <e-radio-group-m v-model="radio2">
                        <e-radio-m value="1" border>Option A</e-radio-m>
                        <e-radio-m value="2" border>Option B</e-radio-m>
                    </e-radio-group-m>
                    
                    <div class="example-desc">小尺寸边框（部分禁用）</div>
                    <e-radio-group-m v-model="radio3" size="small">
                        <e-radio-m value="1" border>Option A</e-radio-m>
                        <e-radio-m value="2" border disabled>Option B</e-radio-m>
                    </e-radio-group-m>
                    
                    <div class="example-desc">全部禁用</div>
                    <e-radio-group-m v-model="radio4" size="small" disabled>
                        <e-radio-m value="1" border>Option A</e-radio-m>
                        <e-radio-m value="2" border>Option B</e-radio-m>
                    </e-radio-group-m>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { h, ref, reactive } from 'vue';
const radio = ref('selected and disabled');
const radio1 = ref('1');
const radio2 = ref('1');
const radio3 = ref('3');
const radio4 = ref('4');
const radio5 = ref('New York');
const radio6 = ref('New York');
const radio7 = ref('New York');
const radio8 = ref('Shanghai');
const radio9 = ref(1);
const changeRadio = (value: string) => {
    console.log('change', value); // 打印当前选中的值
};
const checked2 = ref();
const options = ref([
    {
        value: 1,
        label: '自定义 Option 1',
        gender: 0,
        contentStyle: 'color: blue;'
    },
    {
        value: 2,
        label: '自定义 Option 2',
        gender: 1,
        contentStyle: 'color: red; font-size: 16px;'
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
        [h('span', itemData.gender == 0 ? '男' : '女'), h('span', ` ${itemData.label}`)]
    );
};

// 通过数据创建组
const _data = Array.from({ length: 10 })
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
    radio: '1',
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
</script>
<style lang="scss" scoped>
@import '../css/common.scss';
</style>
