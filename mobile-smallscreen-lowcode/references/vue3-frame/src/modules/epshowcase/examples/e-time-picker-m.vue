<template>
    <div class="van-content">
        <div class="example-group">
            <text class="cell-title">基本使用</text>
            <div class="example-card">
                <e-time-picker-m v-model="value1" placeholder="Arbitrary time" />
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">限制时间范围</text>
            <div class="example-card">
                <e-time-picker-m
                    v-model="value2"
                    :disabled-hours="disabledHours"
                    :disabled-minutes="disabledMinutes"
                    :disabled-seconds="disabledSeconds"
                    placeholder="Arbitrary time"
                />
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">可以选择任意时间范围</text>
            <div class="example-card">
                <e-time-picker-m v-model="value3" is-range range-separator="～" placeholder="Start time ～ End time" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const value1 = ref();
const value2 = ref(new Date(2016, 9, 10, 18, 30));
const value3 = ref<any>([new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)]);

const makeRange = (start: number, end: number) => {
    const result: number[] = [];

    for (let i = start; i <= end; i++) {
        result.push(i);
    }

    return result;
};

const disabledHours = () => {
    return makeRange(0, 16).concat(makeRange(19, 23));
};

const disabledMinutes = (hour: number) => {
    if (hour === 17) {
        return makeRange(0, 29);
    }
    if (hour === 18) {
        return makeRange(31, 59);
    }
};

const disabledSeconds = (hour: number, minute: number) => {
    if (hour === 18 && minute === 30) {
        return makeRange(1, 59);
    }
};
</script>

<style lang="scss" scoped>
@import '../css/common.scss';
</style>
