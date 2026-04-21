<template>
    <div class="van-content">
        <div class="example-group">
            <text class="cell-title">日期和时间</text>
            <div class="example-card">
                <div class="example-content">
                    <div class="example-desc">Default</div>
                    <e-date-picker-m v-model="value1" type="datetimerange" placeholder="Select date and time" />

                    <div class="example-desc">With shortcuts</div>
                    <e-date-picker-m
                        v-model="value2"
                        type="datetime"
                        placeholder="Select date and time"
                        :shortcuts="shortcuts"
                    />

                    <div class="example-desc">With default time</div>
                    <e-date-picker-m
                        v-model="value3"
                        type="datetime"
                        placeholder="Select date and time"
                        :default-time="defaultTime1"
                    />
                </div>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">日期时间格式</text>
            <div class="example-card">
                <div class="example-content">
                    <div class="example-desc">Emits Date object</div>
                    <div class="example-info">
                        <p>Value: {{ value4 }}</p>
                    </div>
                    <e-date-picker-m v-model="value4" type="datetime" placeholder="Pick a Date" format="YYYY/MM/DD HH:mm:ss" />

                    <div class="example-desc">Use value-format</div>
                    <div class="example-info">
                        <p>Value: {{ value5 }}</p>
                    </div>
                    <e-date-picker-m
                        v-model="value5"
                        type="datetime"
                        placeholder="Pick a Date"
                        format="YYYY/MM/DD hh:mm:ss"
                        value-format="YYYY-MM-DD h:m:s a"
                    />

                    <div class="example-desc">Timestamp</div>
                    <div class="example-info">
                        <p>Value: {{ value6 }}</p>
                    </div>
                    <e-date-picker-m
                        v-model="value6"
                        type="datetime"
                        placeholder="Pick a Date"
                        format="YYYY/MM/DD hh:mm:ss"
                        value-format="x"
                    />
                </div>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">日期和时间范围</text>
            <div class="example-card">
                <div class="example-content">
                    <div class="example-desc">Default</div>
                    <e-radio-group-m v-model="size" label="尺寸控制">
                        <e-radio-button-m value="large" @click="size = 'large'">大尺寸</e-radio-button-m>
                        <e-radio-button-m value="default" @click="size = 'default'">默认尺寸</e-radio-button-m>
                        <e-radio-button-m value="small" @click="size = 'small'">小尺寸</e-radio-button-m>
                    </e-radio-group-m>
                    <e-date-picker-m v-model="value7" :size="size" type="datetimerange" range-separator="～" />

                    <div class="example-desc">With shortcuts</div>
                    <e-date-picker-m v-model="value8" type="datetimerange" :shortcuts="shortcuts2" range-separator="～" />
                </div>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">开始日期和结束日期的默认时间值</text>
            <div class="example-card">
                <div class="example-content">
                    <div class="example-desc">Start and end date time 12:00:00</div>
                    <e-date-picker-m v-model="value9" type="datetimerange" :default-time="defaultTime1" />

                    <div class="example-desc">Start date time 12:00:00, end date time 08:00:00</div>
                    <e-date-picker-m v-model="value10" type="datetimerange" :default-time="defaultTime2" />
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
const value1 = ref('');
const value2 = ref('');
const value3 = ref('');
const value4 = ref('');
const value5 = ref('');
const value6 = ref('');
const value7 = ref<[Date, Date]>([new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)]);
const value8 = ref('');
const value9 = ref('');
const value10 = ref('');
const defaultTime1 = new Date(2000, 1, 1, 12, 0, 0); // '12:00:00'
const defaultTime2: [Date, Date] = [new Date(2000, 1, 1, 12, 0, 0), new Date(2000, 2, 1, 8, 0, 0)]; // '12:00:00', '08:00:00'
const size = ref<'default' | 'large' | 'small'>('default');
const shortcuts = [
    {
        text: '今天',
        value: new Date()
    },
    {
        text: '昨天',
        value: () => {
            const date = new Date();

            date.setTime(date.getTime() - 3600 * 1000 * 24);

            return date;
        }
    },
    {
        text: '一周前',
        value: () => {
            const date = new Date();

            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);

            return date;
        }
    }
];
const shortcuts2 = [
    {
        text: 'Last week',
        value: () => {
            const end = new Date();
            const start = new Date();

            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);

            return [start, end];
        }
    },
    {
        text: 'Last month',
        value: () => {
            const end = new Date();
            const start = new Date();

            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);

            return [start, end];
        }
    },
    {
        text: 'Last 3 months',
        value: () => {
            const end = new Date();
            const start = new Date();

            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);

            return [start, end];
        }
    }
];
</script>

<style scoped lang="scss">
@import '../css/common.scss';
</style>
