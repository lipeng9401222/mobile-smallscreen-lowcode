<template>
    <div class="van-content">
        <div class="example-group">
            <text class="cell-title">基本用法</text>
            <div class="example-card">
                <e-space-m wrap>
                    <e-card-m v-for="i in 4" :key="i" class="box-card" style="width: 70px">
                        <div v-for="o in 3" :key="o" class="text item">
                            {{ 'item ' + o }}
                        </div>
                    </e-card-m>
                </e-space-m>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">竖直布局</text>
            <div class="example-card">
                <e-space-m direction="vertical">
                    <e-card-m v-for="i in 2" :key="i" class="box-card" style="width: 70px">
                        <div v-for="o in 3" :key="o" class="text item">
                            {{ 'item ' + o }}
                        </div>
                    </e-card-m>
                </e-space-m>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">控制间隔大小</text>
            <div class="example-card">
                <div class="example-content">
                    <e-radio-group-m v-model="size">
                        <e-radio-m value="large">large</e-radio-m>
                        <e-radio-m value="default">default</e-radio-m>
                        <e-radio-m value="small">small</e-radio-m>
                    </e-radio-group-m>

                    <e-space-m wrap :size="size">
                        <e-card-m v-for="i in 3" :key="i" class="box-card" style="width: 70px">
                            <div v-for="o in 3" :key="o" class="text item">
                                {{ 'item ' + o }}
                            </div>
                        </e-card-m>
                    </e-space-m>
                </div>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">间隔为数组时效果</text>
            <div class="example-card">
                <e-space-m wrap :size="[10, 20]">
                    <e-card-m v-for="i in 4" :key="i" class="box-card" style="width: 70px">Text item</e-card-m>
                </e-space-m>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">自定义大小</text>
            <div class="example-card">
                <div class="example-content">
                    <e-slider-m v-model="size2" style="margin: 10px 0 20px;" />
                    <e-space-m wrap :size="size2">
                        <e-card-m v-for="i in 2" :key="i" class="box-card" style="width: 70px">
                            <div v-for="o in 3" :key="o" class="text item">
                                {{ 'item ' + o }}
                            </div>
                        </e-card-m>
                    </e-space-m>
                </div>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">自动换行</text>
            <div class="example-card">
                <e-space-m wrap>
                    <div v-for="i in 20" :key="i" class="box-card" style="width: 70px">Text item</div>
                </e-space-m>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">字面类型 spacer</text>
            <div class="example-card">
                <e-space-m wrap :size="10" spacer="|">
                    <e-card-m v-for="i in 2" :key="i" class="box-card" style="width: 70px">Text item</e-card-m>
                </e-space-m>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">Spacer 也可以是 VNode</text>
            <div class="example-card">
                <e-space-m wrap :size="10" :spacer="spacer">
                    <e-card-m v-for="i in 2" :key="i" class="box-card" style="width: 70px">Text item</e-card-m>
                </e-space-m>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">对齐</text>
            <div class="example-card">
                <div class="example-content">
                    <div class="example-desc">Default alignment</div>
                    <div class="alignment-container">
                        <e-space-m>
                            Sting
                            <e-card-m>
                                <template #header> header </template>
                                body
                            </e-card-m>
                            <e-button-m type="success">Success</e-button-m>
                        </e-space-m>
                    </div>

                    <div class="example-desc">Flex-start alignment</div>
                    <div class="alignment-container">
                        <e-space-m alignment="flex-start">
                            Sting
                            <e-card-m>
                                <template #header> header </template>
                                body
                            </e-card-m>
                            <e-button-m type="success">Success</e-button-m>
                        </e-space-m>
                    </div>

                    <div class="example-desc">Flex-end alignment</div>
                    <div class="alignment-container">
                        <e-space-m alignment="flex-end">
                            Sting
                            <e-card-m>
                                <template #header> header </template>
                                body
                            </e-card-m>
                            <e-button-m type="success">Success</e-button-m>
                        </e-space-m>
                    </div>
                </div>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">填充容器</text>
            <div class="example-card">
                <div class="example-content">
                    <div style="margin-bottom: 15px">fill: <e-switch-m v-model="fill" /></div>
                    <e-space-m :fill="fill" wrap style="width: 100%;">
                        <e-card-m v-for="i in 2" :key="i" class="box-card">
                            <template #header> header </template>
                            body
                        </e-card-m>
                    </e-space-m>

                    <div style="margin: 15px 0">fillRatio:<e-slider-m v-model="fillRatio" /></div>
                    <div style="margin-bottom: 15px">
                        direction:
                        <e-radio-group-m v-model="direction">
                            <e-radio-m value="horizontal">horizontal</e-radio-m>
                            <e-radio-m value="vertical">vertical</e-radio-m>
                        </e-radio-group-m>
                    </div>
                    <e-space-m fill :fill-ratio="fillRatio" :direction="direction" wrap style="width: 100%;">
                        <e-card-m v-for="i in 5" :key="i" class="box-card">
                            <template #header> header </template>
                            body
                        </e-card-m>
                    </e-space-m>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { h, ref } from 'vue';

const size = ref('default');
const size2 = ref(20);
const spacer = h('span', {
    style: {
        color: '#d9d9d9',
        padding: '0 12px'
    }
}, '|');
const fill = ref(true);
const fillRatio = ref(30);
const direction = ref('horizontal');
</script>
<style lang="scss" scoped>
@import '../css/common.scss';

.alignment-container {
    width: 260px;
    margin-bottom: 20px;
    padding: 8px;
    border: 1px solid var(--ep-border-color);
}
</style>
