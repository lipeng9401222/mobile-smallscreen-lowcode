<template>
    <div class="van-content">
        <div class="example-group">
            <text class="cell-title">基本使用</text>
            <div class="example-card">
                <e-scrollbar-m height="400px">
                    <p v-for="item in 20" :key="item" class="scrollbar-demo-item">{{ item }}</p>
                </e-scrollbar-m>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">横向滚动</text>
            <div class="example-card">
                <e-scrollbar-m>
                    <div class="scrollbar-flex-content">
                        <p v-for="item in 50" :key="item" class="scrollbar-demo-item2">
                            {{ item }}
                        </p>
                    </div>
                </e-scrollbar-m>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">最大高度</text>
            <div class="example-card">
                <div class="example-content">
                    <div class="cell-buttons">
                        <e-button-m size="small" @click="add">添加项</e-button-m>
                        <e-button-m size="small" @click="onDelete">删除项</e-button-m>
                    </div>
                    <e-scrollbar-m max-height="400px">
                        <p v-for="item in count" :key="item" class="scrollbar-demo-item">
                            {{ item }}
                        </p>
                    </e-scrollbar-m>
                </div>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">手动滚动</text>
            <div class="example-card">
                <div class="example-content">
                    <e-scrollbar-m ref="scrollbarRef" height="400px" always @scroll="scroll">
                        <div ref="innerRef">
                            <p v-for="item in 20" :key="item" class="scrollbar-demo-item">
                                {{ item }}
                            </p>
                        </div>
                    </e-scrollbar-m>
                    <div>
                        <text class="tips">当前scrollTop高度{{ curScrollTop }}px</text>
                        <div class="cell-buttons">
                            <e-button-m size="small" @click="addScrollTop">增加50</e-button-m>
                            <e-button-m size="small" @click="reduceScrollTop">减少50</e-button-m>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import type { ScrollbarInstance } from '@epoint-mfe/eui-components';
const count = ref(3);
const add = () => {
    count.value++;
};
const onDelete = () => {
    if (count.value > 0) {
        count.value--;
    }
};

//手动滚动相关
//滚动条实例
const curScrollTop = ref(0);
const scrollbarRef = ref<InstanceType<ScrollbarInstance>>();
//滚动事件
const scroll = ({ scrollTop }) => {
    curScrollTop.value = scrollTop;
};
//增加scrollTop
const addScrollTop = () => {
    let newVal = curScrollTop.value + 50;
    scrollbarRef.value?.setScrollTop(newVal);
};
//减少scrollTop
const reduceScrollTop = () => {
    let newVal = curScrollTop.value - 50;
    scrollbarRef.value?.setScrollTop(newVal);
};

//scrollview测试
const scrollview=ref();
const curScrollViewTop=ref(0);
const scrollViewEvent=({ scrollTop }) => {
    console.log(scrollTop);
    curScrollViewTop.value=scrollTop;
};
//增加scrollTop
const addScrollViewTop = () => {
    let newVal = curScrollViewTop.value + 50;
    scrollview.value?.setScrollTop(newVal);
};
//减少scrollTop
const reduceScrollViewTop = () => {
    let newVal = curScrollViewTop.value - 50;
    scrollview.value?.setScrollTop(newVal);
};
//scrollview测试

</script>
<style lang="scss" scoped>
@import '../css/common.scss';

.cell-buttons {
    padding-left: 10px;
}

.scrollbar-flex-content {
    display: flex;
}

.scrollbar-demo-item {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    margin: 10px;
    text-align: center;
    border-radius: 4px;
    background: var(--e-color-primary-light-8);
    color: var(--e-color-primary);
}

.scrollbar-demo-item2 {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 50px;
    margin: 10px;
    text-align: center;
    border-radius: 4px;
    background: var(--e-color-danger-light-7);
    color: var(--e-color-danger);
}

.tips {
    margin-left: 10px;
    font-size: 13px;
    & + .cell-buttons {
        margin-top: 5px;
    }
}
</style>
