<template>
    <div class="van-content">
        <div class="example-group">
            <text class="cell-title">基本用法</text>
            <div class="example-card">
                <e-calendar-m v-model="value" />
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">自定义内容</text>
            <div class="example-card">
                <e-calendar-m v-model="value" >
                    <template #date-cell="{ data }">
                        <p :class="data.isSelected ? 'is-selected' : ''">
                            {{ data.day.split('-').slice(2)[0] }}
                            {{ data.isSelected ? '✔️' : '' }}
                        </p>
                    </template>
                </e-calendar-m>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">范围</text>
            <div class="example-card">
                <e-calendar-m :range="[new Date(2019, 2, 4), new Date(2019, 2, 24)]"></e-calendar-m>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">自定义标题</text>
            <div class="example-card">
                <e-calendar-m ref="calendar" >
                    <template #header="{ date }">
                        <span>Custom header content</span>
                        <span>{{ date }}</span>
                        <e-button-group-m>
                            <e-button-m size="small" @click="selectDate('prev-year')">Previous Year</e-button-m>
                            <e-button-m size="small" @click="selectDate('prev-month')">Previous Month</e-button-m>
                            <e-button-m size="small" @click="selectDate('today')">Today</e-button-m>
                            <e-button-m size="small" @click="selectDate('next-month')">Next Month</e-button-m>
                            <e-button-m size="small" @click="selectDate('next-year')">Next Year</e-button-m>
                        </e-button-group-m>
                    </template>
                </e-calendar-m>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';

const value = ref(new Date());
const calendar = ref();
const selectDate = (val: string) => {
    calendar.value.selectDate(val);
};

</script>

<style lang="scss" scoped>
@import '../css/common.scss';

.is-selected {
    color: #2981da;
}
</style>
