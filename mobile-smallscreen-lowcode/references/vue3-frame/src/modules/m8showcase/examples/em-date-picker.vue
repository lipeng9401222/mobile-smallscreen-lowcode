<template>
    <div class="container">
        <div class="em-content">
            <em-cell is-link @click="show2 = true" :value="date2" title="选择年月日" />
            <em-date-picker
                v-model="show2"
                :current-date="currentDate2"
                type="date"
                title="选择年月日"
                :min-date="minDate"
                @confirm="onConfirm2"
            />

            <em-cell is-link @click="show10 = true" :value="date10" title="时间范围" />
            <em-date-picker
                :current-date="currentDate10"
                range
                type="date"
                title="范围选择年月日"
                v-model="show10"
                :min-date="minDate"
                :max-date="maxDate"
                @confirm="onConfirmRange"
            />

            <em-cell is-link @click="show11 = true" :value="date11" title="pad样式" />
            <em-date-picker
                :current-date="currentDate11"
                pad
                title="选择pad年月"
                v-model="show11"
                :min-date="minDate"
                :max-date="maxDate"
                @confirm="onConfirmPad"
            />

            <em-cell is-link @click="show8 = true" :value="date8" title="选择年月" />
            <em-date-picker
                :current-date="currentDate9"
                type="year-month"
                title="选择年月"
                v-model="show8"
                :min-date="minDate"
                :formatter="formatter"
                @confirm="onConfirm8"
            />

            <em-cell is-link @click="show3 = true" :value="date3" title="选择月日" />
            <em-date-picker
                :current-date="currentDate3"
                type="month-day"
                title="选择月日"
                v-model="show3"
                :min-date="minDate"
                :formatter="formatter2"
                @confirm="onConfirm3"
            />

            <em-cell is-link @click="show4 = true" :value="date4" title="选择时间" />
            <em-date-picker
                :current-date="currentTime"
                type="time"
                title="选择时间"
                v-model="show4"
                :min-hour="10"
                :max-hour="20"
                @confirm="onConfirm4"
            />

            <em-cell is-link @click="show1 = true" :value="date1" title="选择完整时间" />
            <em-date-picker
                v-model="show1"
                :current-date="currentDate1"
                type="datetime"
                title="选择完整时间"
                :loading="loading"
                :min-date="minDate"
                :max-date="maxDate"
                @confirm="onConfirm1"
            ></em-date-picker>

            <em-cell is-link @click="show7 = true" :value="date7" title="选择年月日小时" />
            <em-date-picker
                type="datehour"
                title="选择年月日小时"
                :loading="loading"
                v-model="show7"
                :current-date="currentDate7"
                @confirm="onConfirm7"
            />

            <em-cell is-link @click="show5 = true" :value="date5" title="选项过滤器" />
            <em-date-picker
                v-model="show5"
                :current-date="currentTime"
                type="time"
                title="选项过滤器"
                :filter="filter"
                @confirm="onConfirm5"
            />

            <em-cell is-link @click="show9 = true" :value="date9" title="自定义列排序" />
            <em-date-picker
                :current-date="currentDate9"
                type="date"
                title="自定义列排序"
                v-model="show9"
                :columns-order="['month', 'day', 'year']"
                :formatter="formatter3"
                @confirm="onConfirm9"
            />
        </div>
        <em-toast ref="emToast"></em-toast>
    </div>
</template>

<script lang="ts">
export default {
    name: 'Datepicker',
    data() {
        return {
            show1: false,
            show2: false,
            show3: false,
            show4: false,
            show5: false,
            show6: false,
            show7: false,
            show8: false,
            show9: false,
            show10: false,
            show11: false,
            date1: '',
            date2: '',
            date3: '',
            date4: '',
            date5: '',
            date6: '',
            date7: '',
            date8: '',
            date9: '',
            date10: '',
            date11: '',
            minHour: 10,
            maxHour: 20,
            minDate: new Date(2020, 0, 1).getTime(),
            maxDate: new Date(2030, 10, 1).getTime(),
            currentDate1: new Date().getTime(),
            currentDate2: new Date().getTime(),
            currentDate3: new Date(2020, 10, 1).getTime(),
            currentTime: '12:00',
            currentDate6: new Date().getTime(),
            currentDate7: new Date().getTime(),
            currentDate8: new Date().getTime(),
            currentDate9: new Date().getTime(),
            currentDate10: new Date().getTime(),
            currentDate11: new Date().getTime(),
            loading: false
        };
    },
    methods: {
        onConfirm1(date) {
            this.date1 = date;

            console.log('date1::::' + this.date1);
        },
        onConfirm2(date) {
            this.date2 = date;
        },
        onConfirm6(date) {
            this.date6 = date;
        },
        onConfirm8(date) {
            this.date8 = date;
        },
        onConfirm3(date) {
            this.date3 = date;
        },
        onConfirm7(date) {
            this.date7 = date;
        },
        onConfirm4(date) {
            this.date4 = date;
        },
        onConfirm5(date) {
            this.date5 = date;
        },
        onConfirm9(date) {
            this.date9 = date;
        },
        onConfirmRange(dateRange) {
            let [startTime, endTime] = dateRange;

            this.date10 = `${startTime} 至 ${endTime}`;
        },
        onConfirmPad(date) {
            this.date11 = date;
        },
        formatter(type, val) {
            if (type === 'year') {
                return `${val}年`;
            } else if (type === 'month') {
                return `${val}月`;
            }

            return val;
        },
        formatter2(type, val) {
            if (type === 'month') {
                return `${val}月`;
            } else if (type === 'day') {
                return `${val}日`;
            }

            return val;
        },
        filter(type, options) {
            if (type === 'minute') {
                return options.filter((option) => option % 5 === 0);
            }

            return options;
        },
        formatter3(type, val) {
            if (type === 'year') {
                return val + '年';
            }
            if (type === 'month') {
                return val + '月';
            }
            if (type === 'day') {
                return val + '日';
            }

            return val;
        }
    }
};
</script>

<style scoped lang="scss">
.em-content {
    background-color: #f7f8fa;

    .cell-title:first-child {
        margin-top: 0;
        padding-top: 11px;
    }
}
</style>
<style>
/* custom style */
.cell-title:first-child {
    padding-top: 10px;
}

.cell-title {
    padding-top: 30px;
    padding-bottom: 10px;
    padding-left: 10px;
    color: rgba(69, 90, 100, .6);
    font-size: 14px;
    font-weight: 400;
}
</style>