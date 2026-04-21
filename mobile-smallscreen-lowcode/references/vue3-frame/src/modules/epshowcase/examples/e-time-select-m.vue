<template>
    <div class="van-content">
        <div class="example-group">
            <text class="cell-title">固定选择器</text>
            <div class="example-card">
                <e-time-select-m v-model="value" start="08:30" step="00:15" end="18:30" />
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">时间格式</text>
            <div class="example-card">
                <e-time-select-m
                    v-model="value1"
                    start="00:00"
                    step="00:30"
                    end="23:59"
                    placeholder="Select time"
                    format="hh:mm A"
                />
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">固定时间范围</text>
            <div class="example-card">
                <e-time-select-m v-model="value2" range start="08:30" step="00:15" end="18:30" placeholder="Select time" />
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">固定时间范围2</text>
            <div class="example-card">
                <div class="example-content">
                    <e-time-select-m
                        v-model="startTime"
                        :max-time="endTime"
                        placeholder="Start time"
                        start="08:30"
                        step="00:15"
                        end="18:30"
                    />
                    <e-time-select-m
                        v-model="endTime"
                        :min-time="startTime"
                        placeholder="End time"
                        start="08:30"
                        step="00:15"
                        end="18:30"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const value = ref('');
const value1 = ref('');
const value2 = ref('');
const startTime = ref('');
const endTime = ref('');
</script>
<style scoped lang="scss">
@import '../css/common.scss';
</style>
