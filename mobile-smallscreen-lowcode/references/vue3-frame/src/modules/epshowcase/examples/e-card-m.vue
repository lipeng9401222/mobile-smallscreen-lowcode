<template>
    <div class="van-content">
        <div class="example-group">
            <text class="cell-title">基本用法</text>
            <div class="example-card">
                <e-card-m class="box-card">
                    <template #header>
                        <div class="card-header">
                            <span>Card name</span>
                            <e-button-m class="button" text>Operation button</e-button-m>
                        </div>
                    </template>
                    <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>
                    <template #footer>
                        <e-button-m class="button" text>Footer Content</e-button-m>
                    </template>
                </e-card-m>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">简单卡片</text>
            <div class="example-card">
                <e-card-m class="box-card">
                    <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>
                </e-card-m>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">带图片</text>
            <div class="example-card">
                <e-row-m>
                    <e-col-m v-for="(o, index) in 2" :key="o" :span="11" :offset="index > 0 ? 2 : 0">
                        <e-card-m :body-style="{ padding: '0px' }">
                            <img
                                src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                                class="image"
                            />
                            <div>
                                <span>Yummy hamburger</span>
                                <div class="bottom">
                                    <time class="time">{{ currentDate }}</time>
                                    <e-button-m text class="button">Operating</e-button-m>
                                </div>
                            </div>
                        </e-card-m>
                    </e-col-m>
                </e-row-m>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">阴影</text>
            <div class="example-card">
                <e-row-m :gutter="12">
                    <e-col-m :span="8">
                        <e-card-m shadow="always">Always</e-card-m>
                    </e-col-m>
                    <e-col-m :span="8">
                        <e-card-m shadow="never">Never</e-card-m>
                    </e-col-m>
                </e-row-m>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const currentDate = ref(new Date());
</script>

<style scoped lang="scss">
@import '../css/common.scss';

.card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.text {
    font-size: 14px;
}

.item {
    margin-bottom: 18px;
}

.box-card {
    max-width: 480px;
}

.time {
    font-size: 12px;
    color: #999;
}

.bottom {
    margin-top: 13px;
    line-height: 12px;
}

.button {
    padding: 0;
    min-height: auto;
}

.image {
    width: 100%;
    display: block;
}
</style>
