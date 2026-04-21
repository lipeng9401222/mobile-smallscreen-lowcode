<template>
    <div class="van-content">
        <div class="example-group">
            <text class="cell-title">基本使用</text>
            <div class="example-card">
                <div class="box">
                    <e-input-number-m v-model="num1" :min="1" :max="10" @change="handleChange" />
                </div>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">禁用状态</text>
            <div class="example-card">
                <div class="box">
                    <e-input-number-m v-model="num2" :min="1" :max="10" disabled />
                </div>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">步进</text>
            <div class="example-card">
                <div class="box">
                    <e-input-number-m v-model="num3" :step="2" />
                </div>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">严格步进</text>
            <div class="example-card">
                <div class="box">
                    <e-input-number-m v-model="num4" :step="2" step-strictly />
                </div>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">精度</text>
            <div class="example-card">
                <div class="box">
                    <e-input-number-m v-model="num5" :precision="2" :step="0.1" :max="10" />
                </div>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">不同的输入框尺寸</text>
            <div class="example-card">
                <div class="example-content">
                    <div class="box">
                        <div class="example-desc">Large</div>
                        <e-input-number-m v-model="num6" size="large" />
                        <div class="example-desc">Default</div>
                        <e-input-number-m v-model="num6" />
                        <div class="example-desc">Small</div>
                        <e-input-number-m v-model="num6" size="small" />
                    </div>
                </div>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">格式化展示</text>
            <div class="example-card">
                <div class="example-content">
                    <div class="box">
                        <div class="em-row">
                            <span class="cell-title">使用千分位分隔符展示：</span>
                            <e-input-number-m
                                v-model="num8"
                                :formatter="(value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')"
                                :parser="(value) => value.replace(/,/g, '')"
                                :min="0"
                                size="large"
                                class="em-thousandth"
                            />
                        </div>
                        <div class="em-row">
                            <span class="cell-title">添加前缀：</span>
                            <e-input-number-m
                                v-model="num9"
                                :formatter="(value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')"
                                :parser="(value) => value.replace(/\$\s?|(,*)/g, '')"
                                :min="0"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const num1 = ref(1);
const num2 = ref(1);
const num3 = ref(1);
const num4 = ref(1);
const num5 = ref(1);
const num6 = ref(1);
const num7 = ref(1);

//格式化展示
const num8 = ref(1000);
const num9 = ref(1);

const handleChange = (value) => {
    console.log(value);
};
</script>
<style lang="scss" scoped>
@import '../css/common.scss';

.box {
    .em-thousandth {
        :deep() {
            .em-stepper__input {
                width: 50px !important;
            }
        }
    }
    .em-row{
      display: flex;
      justify-content: flex-start;
      align-items: center;
      .cell-title{
        color: #000;
      }
    }
}
</style>
