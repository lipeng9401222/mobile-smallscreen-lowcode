<template>
    <div class="van-content">
        <div class="example-group">
            <text class="cell-title">线性进度条</text>
            <div class="example-card">
                <div class="demo-progress">
                    <e-progress-m :percentage="50" />
                    <e-progress-m :percentage="100" :format="format" />
                    <e-progress-m :percentage="100" status="success" />
                    <e-progress-m :percentage="100" status="warning" />
                    <e-progress-m :percentage="50" status="exception" />
                </div>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">内部百分比</text>
            <div class="example-card">
                <div class="demo-progress">
                    <e-progress-m :text-inside="true" :stroke-width="26" :percentage="70" />
                    <e-progress-m :text-inside="true" :stroke-width="24" :percentage="100" status="success" />
                    <e-progress-m :text-inside="true" :stroke-width="22" :percentage="80" status="warning" />
                    <e-progress-m :text-inside="true" :stroke-width="20" :percentage="50" status="exception" />
                </div>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">自定义颜色</text>
            <div class="example-card">
                <div class="example-content">
                    <div class="demo-progress">
                        <e-progress-m :percentage="percentage" :color="customColor" />
                        <e-progress-m :percentage="percentage" :color="customColorMethod" />
                        <e-progress-m :percentage="percentage" :color="customColors" />
                        <e-progress-m :percentage="percentage" :color="customColors" />
                    </div>
                    <div>
                        <e-button-group-m class="btn-group">
                            <e-button-m @click="decrease">—</e-button-m>
                            <e-button-m @click="increase">+</e-button-m>
                        </e-button-group-m>
                    </div>
                </div>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">圆形进度条</text>
            <div class="example-card">
                <div class="demo-progress">
                    <e-progress-m type="circle" :percentage="0" />
                    <e-progress-m type="circle" :percentage="25" />
                    <e-progress-m type="circle" :percentage="100" status="success" />
                    <e-progress-m type="circle" :percentage="70" status="warning" />
                    <e-progress-m type="circle" :percentage="50" status="exception" />
                </div>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">仪表板进度条</text>
            <div class="example-card">
                <div class="example-content">
                    <div class="demo-progress">
                        <e-progress-m type="dashboard" :percentage="percentage3" :color="colors" />
                        <e-progress-m type="dashboard" :percentage="percentage4" :color="colors" />
                    </div>
                    <div>
                        <e-button-group-m>
                            <e-button-m @click="decrease2">—</e-button-m>
                            <e-button-m @click="increase2">+</e-button-m>
                        </e-button-group-m>
                    </div>
                </div>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">自定义内容</text>
            <div class="example-card">
                <div class="demo-progress">
                    <e-progress-m :percentage="50">
                        <e-button-m text>Content</e-button-m>
                    </e-progress-m>
                    <e-progress-m :text-inside="true" :stroke-width="20" :percentage="50" status="exception">
                        <span>Content</span>
                    </e-progress-m>
                    <e-progress-m type="circle" :percentage="100" status="success">
                        <e-icon-m name="success"/>
                    </e-progress-m>
                    <e-progress-m type="dashboard" :percentage="80">
                        <template #default="{ percentage }">
                            <div class="percentage-value">{{ percentage }}%</div>
                            <div class="percentage-label">Progressing</div>
                        </template>
                    </e-progress-m>
                </div>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">不确定进度</text>
            <div class="example-card">
                <div class="demo-progress">
                    <e-progress-m :percentage="50" :indeterminate="true" />
                    <e-progress-m :percentage="100" :format="format" :indeterminate="true" striped />
                    <e-progress-m :percentage="100" status="success" :indeterminate="true" :duration="5" />
                    <e-progress-m :percentage="100" status="warning" :indeterminate="true" :duration="1" />
                    <e-progress-m :percentage="50" status="exception" :indeterminate="true" />
                </div>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">条纹进度</text>
            <div class="example-card">
                <div class="example-content">
                    <div class="demo-progress">
                        <e-progress-m :percentage="50" :stroke-width="14" striped />
                        <e-progress-m :percentage="30" :stroke-width="14" status="warning" striped striped-flow />
                        <e-progress-m
                            :percentage="100"
                            :stroke-width="14"
                            status="success"
                            striped
                            striped-flow
                            :duration="10"
                        />
                        <e-progress-m
                            :percentage="percentage5"
                            :stroke-width="14"
                            status="exception"
                            striped
                            striped-flow
                            :duration="duration"
                        />
                    </div>
                    <e-button-group-m>
                        <e-button-m @click="decrease3">—</e-button-m>
                        <e-button-m @click="increase3">+</e-button-m>
                    </e-button-group-m>
                </div>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">方格进度</text>
            <div class="example-card">
                <div class="square-wrap">
                    <e-progress-m :percentage="30" type="square" />
                    <e-progress-m :percentage="percentage6" status="warning" type="square" />
                    <e-progress-m :percentage="percentage6" status="success" type="square" />
                    <e-progress-m :percentage="percentage6" status="exception" type="square" :square-size="18" />
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref, reactive } from 'vue';

const percentage = ref(20);
const percentage3 = ref(10);
const percentage4 = ref(20);
const percentage5 = ref(30);
const percentage6 = ref(50);
const duration = ref(3);

const customColor = '#909399';
const customColorMethod = (percentage: number) => {
    if (percentage < 30) {
        return '#909399';
    }
    if (percentage < 70) {
        return '#e6a23c';
    }
    return '#67c23a';
};
const customColors = reactive([
    { color: '#f56c6c', percentage: 20 },
    { color: '#e6a23c', percentage: 40 },
    { color: '#5cb87a', percentage: 60 },
    { color: '#1989fa', percentage: 80 },
    { color: '#6f7ad3', percentage: 100 }
]);
const colors = reactive([
    { color: '#f56c6c', percentage: 20 },
    { color: '#e6a23c', percentage: 40 },
    { color: '#5cb87a', percentage: 60 },
    { color: '#1989fa', percentage: 80 },
    { color: '#6f7ad3', percentage: 100 }
]);
const format = (percentage: number) => {
    return percentage === 100 ? 'Full' : `${percentage}%`;
};

const increase = () => {
    percentage.value += 10;
    if (percentage.value > 100) {
        percentage.value = 100;
    }
};
const decrease = () => {
    percentage.value -= 10;
    if (percentage.value < 0) {
        percentage.value = 0;
    }
};

const increase2 = () => {
    percentage3.value += 10;
    percentage4.value += 10;
    if (percentage3.value > 100) {
        percentage3.value = 100;
    }
    if (percentage4.value > 100) {
        percentage4.value = 100;
    }
};
const decrease2 = () => {
    percentage3.value -= 10;
    percentage4.value -= 10;
    if (percentage3.value < 0) {
        percentage3.value = 0;
    }
    if (percentage4.value < 0) {
        percentage4.value = 0;
    }
};

const increase3 = () => {
    percentage5.value += 10;
    duration.value += 1;
    if (percentage5.value > 100) {
        percentage5.value = 100;
    }
};
const decrease3 = () => {
    percentage5.value -= 10;
    duration.value -= 1;
    if (percentage5.value < 0) {
        percentage5.value = 0;
    }
    if (duration.value < 1) {
        duration.value = 1;
    }
};
</script>
<style lang="scss" scoped>
@import '../css/common.scss';

.demo-progress {
    .ep-progress--line {
        margin-bottom: 15px;
        width: 350px;
    }
    .ep-progress--circle {
        margin-right: 15px;
    }
}

.btn-group {
    margin-top: 15px;
}

.percentage-value {
    font-size: 28px;
    color: var(--ep-color-primary);
}

.percentage-label {
    font-size: 12px;
    color: var(--ep-text-color-regular);
    margin-top: 10px;
}

.square-wrap {
    display: flex;
    flex-direction: column;
    gap: 20px;
}
</style>
