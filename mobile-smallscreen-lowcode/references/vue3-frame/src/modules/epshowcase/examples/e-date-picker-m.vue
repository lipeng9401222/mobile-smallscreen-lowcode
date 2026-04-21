<template>
    <div class="van-content">
        <div class="example-group">
            <text class="cell-title">一般使用</text>
            <div class="example-card">
                <e-date-picker-m
                    v-model="datepickerValue"
                    :default-value="currentDate"
                    format="YYYY-MM-DD"
                    value-format="YYYY-MM-DD"
                    type="date"
                    placeholder="Pick a day"
                    @change="change"
                />
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">禁用日期</text>
            <div class="example-card">
                <e-date-picker-m
                    v-model="value14"
                    :default-value="currentDate"
                    format="YYYY-MM-DD"
                    value-format="YYYY-MM-DD"
                    type="date"
                    placeholder="Pick a day"
                    :disabled-date="disabledDate"
                    @change="change"
                />
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">禁用周末的日期选择器</text>
            <div class="example-card">
                <e-date-picker-m v-model="value15" type="date" placeholder="请选择日期" :disabled-date="disabledDate2" />
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">week</text>
            <div class="example-card">
                <e-date-picker-m v-model="value1" type="week" placeholder="Pick a week" />
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">month</text>
            <div class="example-card">
                <e-date-picker-m v-model="value2" type="month" placeholder="Pick a month" />
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">year</text>
            <div class="example-card">
                <e-date-picker-m v-model="value3" type="year" placeholder="Pick a year" />
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">Dates</text>
            <div class="example-card">
                <e-date-picker-m v-model="value4" type="dates" placeholder="Pick a Dates" />
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">日期范围</text>
            <div class="example-card">
                <e-date-picker-m v-model="value5" type="daterange" range-separator="～" />
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">月份范围</text>
            <div class="example-card">
                <e-date-picker-m v-model="value6" type="monthrange" range-separator="～" />
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">默认值 date</text>
            <div class="example-card">
                <e-date-picker-m
                    v-model="value7"
                    type="date"
                    placeholder="Pick a date"
                    :default-value="new Date(2010, 9, 1)"
                />
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">daterange</text>
            <div class="example-card">
                <e-date-picker-m
                    v-model="value8"
                    type="daterange"
                    :default-value="[new Date(2010, 9, 1), new Date(2010, 10, 1)]"
                />
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">周一作为一周的第一天</text>
            <div class="example-card">
                <e-date-picker-m v-model="value16" type="date" placeholder="请选择日期" :first-day-of-week="1" />
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">周日作为一周的第一天（默认）</text>
            <div class="example-card">
                <e-date-picker-m v-model="value17" type="date" placeholder="请选择日期" :first-day-of-week="7" />
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">Emits Date object</text>
            <div class="example-card">
                <div class="example-content">
                    <div class="example-desc">Value: {{ value9 }}</div>
                    <e-date-picker-m v-model="value9" type="date" placeholder="Pick a Date" format="YYYY/MM/DD" />
                </div>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">Use value-format</text>
            <div class="example-card">
                <div class="example-content">
                    <div class="example-desc">Value：{{ value10 }}</div>
                    <e-date-picker-m
                        v-model="value10"
                        type="date"
                        placeholder="Pick a Date"
                        format="YYYY/MM/DD"
                        value-format="YYYY-MM-DD"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const currentDate = new Date();
const datepickerValue = ref('');
const value1 = ref('');
const value2 = ref('');
const value3 = ref('');
const value4 = ref([]);
const value5 = ref<[Date, Date] | null>(null);
const value6 = ref<[Date, Date] | null>(null);
const value7 = ref('');
const value8 = ref<[Date, Date] | null>(null);
const value9 = ref<Date | null>(null);
const value10 = ref('');
const value14 = ref('');
const value15 = ref('');
const value16 = ref('');
const value17 = ref('');

const change = (value) => {
    console.log('change', value);
};

const disabledDate = (time: Date) => {
    return time.getTime() > Date.now();
};

const disabledDate2 = (time: Date) => {
    const day = time.getDay();
    return day === 0 || day === 6;
};
</script>

<style lang="scss" scoped>
@import '../css/common.scss';

.block {
    padding: 0;

    .cell-title {
        padding: 0;
    }
}
</style>
