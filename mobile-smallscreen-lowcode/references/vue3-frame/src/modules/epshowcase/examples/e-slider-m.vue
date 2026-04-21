<template>
    <div class="van-content">
        <div class="example-group">
            <text class="cell-title">基本用法</text>
            <div class="example-card">
                <div class="example-content">
                    <div class="slider-demo-block">
                        <span class="demonstration">Default value</span>
                        <e-slider-m v-model="value1"/>
                    </div>
                    <div class="slider-demo-block">
                        <span class="demonstration">Customized initial value</span>
                        <e-slider-m v-model="value2" />
                    </div>
                    <div class="slider-demo-block">
                        <span class="demonstration">Hide Tooltip</span>
                        <e-slider-m v-model="value3" :show-tooltip="false" />
                    </div>
                    <div class="slider-demo-block">
                        <span class="demonstration">Format Tooltip</span>
                        <e-slider-m v-model="value4" :format-tooltip="formatTooltip"/>
                    </div>
                    <div class="slider-demo-block">
                        <span class="demonstration">Disabled</span>
                        <e-slider-m v-model="value5" disabled />
                    </div>
                </div>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">离散值</text>
            <div class="example-card">
                <div class="example-content">
                    <div class="slider-demo-block">
                        <span class="demonstration">Breakpoints not displayed</span>
                        <e-slider-m v-model="value6" :step="10" />
                    </div>
                    <div class="slider-demo-block">
                        <span class="demonstration">Breakpoints displayed</span>
                        <e-slider-m v-model="value6" :step="10" show-stops />
                    </div>
                </div>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">带输入框的滑块</text>
            <div class="example-card">
                <div class="slider-demo-block mt30">
                    <e-slider-m v-model="value7" show-input />
                </div>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">尺寸</text>
            <div class="example-card">
                <div class="example-content">
                    <div class="example-desc">Large</div>
                    <e-slider-m v-model="value8" size="large" show-input />
                    <div class="example-desc">Default</div>
                    <e-slider-m v-model="value8" show-input />
                    <div class="example-desc">Small</div>
                    <e-slider-m v-model="value8" size="small" show-input />
                </div>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">放置位置</text>
            <div class="example-card">
                <div class="example-content">
                    <div class="slider-demo-block mt30">
                        <span class="demonstration">Default</span>
                        <e-slider-m v-model="value9" />
                    </div>
                    <div class="slider-demo-block mt30">
                        <span class="demonstration">Right</span>
                        <e-slider-m v-model="value9" placement="right" />
                    </div>
                    <div class="slider-demo-block mt30">
                        <span class="demonstration">Left</span>
                        <e-slider-m v-model="value9" placement="left" />
                    </div>
                    <div class="slider-demo-block mt30">
                        <span class="demonstration">Bottom</span>
                        <e-slider-m v-model="value9" placement="bottom" />
                    </div>
                </div>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">范围选择</text>
            <div class="example-card">
                <div class="slider-demo-block mt30">
                    <e-slider-m v-model="value10" range show-stops :max="10" />
                </div>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">垂直模式</text>
            <div class="example-card">
                <div class="slider-demo-block mt20">
                    <e-slider-m v-model="value" vertical height="200px" />
                </div>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">显示刻度</text>
            <div class="example-card">
                <div class="slider-demo-block mt30 pb30">
                    <e-slider-m v-model="value11" range :marks="marks" />
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref, reactive, watch } from 'vue';
import type { CSSProperties } from 'vue';

interface Mark {
    style: CSSProperties;
    label: string;
}

type Marks = Record<number, Mark | string>;
const value1 = ref(0);
watch(value1, (newVal) => {
    console.log('value1 改变为:', newVal);
});

const value2 = ref(0);
const value3 = ref(0);
const value4 = ref(0);
const value5 = ref(0);
//离散值
const value6 = ref(0);
//带数字输入框的
const value7 = ref(0);
const value8 = ref(0);
const value9 = ref(0);
const value10 = ref([4, 8]);
const value11 = ref([26, 77]);
const value = ref(0);
const formatTooltip = (val: number) => {
    return val / 100;
};
// 标记点
const marks = reactive<Marks>({
    0: '0°C',
    8: '8°C',
    37: '37°C',
    50: {
        style: {
            color: '#1989FA'
        },
        label: '50%'
    }
});
</script>
<style lang="scss" scoped>
@import '../css/common.scss';

.slider-demo-block {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    .demonstration{
        margin-top: 15px;
        margin-bottom: 15px;
    }
    .ep-slider {
        margin-top: 0;
    }
}
.mt30{
    margin-top: 30px;
}
.pb30{
    padding-bottom: 30px;
}
.mt20{
    margin-top: 20px;
}
.mt10{
    margin-top: 10px;
}
</style>
