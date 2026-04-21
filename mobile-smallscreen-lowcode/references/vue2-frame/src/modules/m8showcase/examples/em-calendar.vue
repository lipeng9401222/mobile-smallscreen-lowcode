<template>
    <div class="container">
        <h4 class="cell-title">基础用法</h4>
        <em-cell title="选择单个日期" is-link :value="date1" @click="show1 = true" />
        <em-calendar v-model="show1" @confirm="onConfirm"></em-calendar>
        <em-cell title="选择多个日期" is-link :value="text" @click="show2 = true" />
        <em-calendar v-model="show2" type="multiple" @confirm="onConfirm2"></em-calendar>
        <em-cell is-link title="选择日期区间" :value="date3" @click="show3 = true" />
        <em-calendar v-model="show3" type="range" @confirm="onConfirm3"></em-calendar>

        <h4 class="cell-title">快捷选择</h4>
        <em-cell title="选择单个日期" is-link :value="date4" @click="show4 = true" />
        <em-calendar v-model="show4" @confirm="onConfirm4" :show-confirm="false"></em-calendar>
        <em-cell is-link title="选择日期区间" :value="date5" @click="show5 = true" />
        <em-calendar v-model="show5" type="range" @confirm="onConfirm5" :show-confirm="false"></em-calendar>

        <h4 class="cell-title">自定义日历</h4>
        <em-cell is-link title="自定义颜色" :value="date6" @click="show6 = true" />
        <em-calendar v-model="show6" color="#07c160" type="range" @confirm="onConfirm6"></em-calendar>
        <em-cell is-link title="自定义日期范围" :value="date7" @click="show7 = true" />
        <em-calendar
            v-model="show7"
            :min-date="minDate"
            :max-date="maxDate"
            color="#07c160"
            type="range"
            @confirm="onConfirm7"
        ></em-calendar>
        <em-cell is-link title="自定义按钮文字" :value="date8" @click="show8 = true" />
        <em-calendar
            v-model="show8"
            type="range"
            confirm-text="完成"
            confirm-disabled-text="请选择结束时间"
            @confirm="onConfirm8"
        ></em-calendar>
        <em-cell is-link title="自定义日期文案" :value="date9" @click="onclickShow" />
        <em-calendar
            v-model="show9"
            type="range"
            :min-date="minDate"
            :max-date="maxDate"
            :formatter="formatter"
            @confirm="onConfirm9"
        ></em-calendar>
        <em-cell is-link title="自定义日期位置" :value="date10" @click="show10 = true" />
        <em-calendar v-model="show10" type="range" position="right" :round="false" @confirm="onConfirm10"></em-calendar>
        <em-cell is-link title="日期区间最大范围" :value="date11" @click="show11 = true" />
        <em-calendar
            v-model="show11"
            type="range"
            first-day-of-week="2"
            :max-range="3"
            @confirm="onConfirm11"
        ></em-calendar>
        <em-cell is-link title="自定义周起始日" :value="date12" @click="show12 = true" />
        <em-calendar v-model="show12" type="range" @confirm="onConfirm12"></em-calendar>

        <h4 class="cell-title">平铺展示</h4>
        <em-calendar
            title="日历"
            :poppable="false"
            :show-confirm="false"
            custom-style="height:500px;"
            ref="calendar"
        />
    </div>
</template>

<script>
export default {
    name: 'Calendar',
    data() {
        return {
            tiledMinDate: new Date(2022, 4, 26).getTime(),
            tiledMaxDate: new Date(2022, 10, 20).getTime(),
            date1: '',
            show1: false,
            text: '',
            show2: false,
            date3: '',
            show3: false,
            date4: '',
            show4: false,
            date5: '',
            show5: false,
            date6: '',
            show6: false,
            date7: '',
            show7: false,
            date8: '',
            show8: false,
            date9: '',
            show9: false,
            date10: '',
            show10: false,
            date11: '',
            show11: false,
            date12: '',
            show12: false,
            minDate: new Date(2010, 4, 1).getTime(),
            maxDate: new Date(2010, 4, 31).getTime()
        };
    },
    mounted() {
        let date = new Date(2022, 7, 1);

        setTimeout(() => {
            this.$refs.calendar.scrollToDate(date);
        }, 500);
    },
    methods: {
        formatDate(date) {
            return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
        },
        onConfirm(date) {
            this.show1 = false;
            this.date1 = this.formatDate(date);
        },
        onConfirm2(date) {
            this.show2 = false;
            this.text = `选择了 ${date.length} 个日期`;
        },
        onConfirm3(dateRange) {
            const [start, end] = dateRange;

            this.show3 = false;
            this.date3 = `${this.formatDate(start)} - ${this.formatDate(end)}`;
        },
        onConfirm4(date) {
            this.show4 = false;
            this.date4 = this.formatDate(date);
        },
        onConfirm5(dateRange) {
            const [start, end] = dateRange;

            this.show5 = false;
            this.date5 = `${this.formatDate(start)} - ${this.formatDate(end)}`;
        },
        onConfirm6(dateRange) {
            const [start, end] = dateRange;

            this.show6 = false;
            this.date6 = `${this.formatDate(start)} - ${this.formatDate(end)}`;
        },
        onConfirm7(dateRange) {
            const [start, end] = dateRange;

            this.show7 = false;
            this.date7 = `${this.formatDate(start)} - ${this.formatDate(end)}`;
        },
        onConfirm8(dateRange) {
            const [start, end] = dateRange;

            this.show8 = false;
            this.date8 = `${this.formatDate(start)} - ${this.formatDate(end)}`;
        },
        onConfirm9(dateRange) {
            const [start, end] = dateRange;

            this.show9 = false;
            this.date9 = `${this.formatDate(start)} - ${this.formatDate(end)}`;
        },
        onConfirm10(dateRange) {
            const [start, end] = dateRange;

            this.show10 = false;
            this.date10 = `${this.formatDate(start)} - ${this.formatDate(end)}`;
        },
        onConfirm11(dateRange) {
            const [start, end] = dateRange;

            this.show11 = false;
            this.date11 = `${this.formatDate(start)} - ${this.formatDate(end)}`;
        },
        onConfirm12(dateRange) {
            const [start, end] = dateRange;

            this.show12 = false;
            this.date12 = `${this.formatDate(start)} - ${this.formatDate(end)}`;
        },
        monthShow(data) {
            console.log('monthShow');
            console.log(data);
        },
        onclickShow() {
            this.show9 = true;
        },
        formatter(day) {
            const month = day.date.getMonth() + 1;
            const date = day.date.getDate();

            if (month === 5) {
                if (date === 1) {
                    day.topInfo = '劳动节';
                } else if (date === 4) {
                    day.topInfo = '青年节';
                } else if (date === 11) {
                    day.text = '今天';
                }
            }

            if (day.type === 'start') {
                day.bottomInfo = '入店';
            } else if (day.type === 'end') {
                day.bottomInfo = '离店';
            }

            return day;
        }
    }
};
</script>
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