<template>
    <div class="van-content">
        <div class="example-group">
            <text class="cell-title">基本用法</text>
            <div class="example-card">
                <div class="example-row">
                    <div class="demo-rate-block">
                        <span class="demonstration">Default</span>
                        <e-rate-m v-model="value1"></e-rate-m>
                    </div>

                    <div class="demo-rate-block">
                        <span class="demonstration">Color for different levels</span>
                        <e-rate-m v-model="value2" :colors="colors"></e-rate-m>
                    </div>
                </div>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">尺寸</text>
            <div class="example-card">
                <div class="example-content">
                    <div class="example-desc">Large</div>
                    <e-rate-m v-model="value3" size="large" />
                    <div class="example-desc">Default</div>
                    <e-rate-m v-model="value3" />
                    <div class="example-desc">Small</div>
                    <e-rate-m v-model="value3" size="small" />
                </div>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">启用半星</text>
            <div class="example-card">
                <e-rate-m v-model="value4" allow-half />
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">显示文本</text>
            <div class="example-card">
                <e-rate-m v-model="value5" :texts="['oops', 'disappointed', 'normal', 'good', 'great']" show-text />
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">可清除</text>
            <div class="example-card">
                <e-rate-m v-model="value6" clearable />
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">更多图标</text>
            <div class="example-card">
                <e-rate-m v-model="value7" :icons="icons" void-icon="chat-o" :colors="['#409eff', '#67c23a', '#FF9900']" />
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">只读</text>
            <div class="example-card">
                <e-rate-m v-model="value8" allow-half disabled show-score text-color="#ff9900" score-template="{value} points" />
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
const value1 = ref(null);
const value2 = ref(null);
const colors = ref(['#99A9BF', '#F7BA2A', '#FF9900']);

const value3 = ref(null);

//半星
const value4 = ref(null);

//启用文本
const value5 = ref(null);

//可清除
const value6 = ref(null);
//更多图标
const value7 = ref(null);
const icons = ref(['star', 'bag', 'clock']);

//只读
const value8 = ref(3.7);


</script>
<style lang="scss" scoped>
@import '../css/common.scss';

.em-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.demo-rate-block {
    padding: 30px 0;
    text-align: center;
    width: 49%;
    box-sizing: border-box;

    &:first-child {
        border-right: solid 1px var(--ep-border-color);
    }
}

.demo-rate-block .demonstration {
    display: block;
    color: var(--ep-text-color-secondary);
    font-size: 14px;
    margin-bottom: 20px;
}
</style>
