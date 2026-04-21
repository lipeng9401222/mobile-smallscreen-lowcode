<template>
    <div class="van-content">
        <div class="example-group">
            <text class="cell-title">基本用法</text>
            <div class="example-card">
                <e-carousel-m height="150px">
                    <e-carousel-item-m v-for="item in 4" :key="item">
                        <h3 class="small justify-center" text="2xl">{{ item }}</h3>
                    </e-carousel-item-m>
                </e-carousel-m>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">指示器</text>
            <div class="example-card">
                <e-carousel-m indicator-position="outside" height="150px">
                    <e-carousel-item-m v-for="item in 4" :key="item">
                        <h3 text="2xl" justify="center">{{ item }}</h3>
                    </e-carousel-item-m>
                </e-carousel-m>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">箭头</text>
            <div class="example-card">
                <e-carousel-m :interval="5000" arrow="always" height="150px">
                    <e-carousel-item-m v-for="item in 4" :key="item">
                        <h3 text="2xl" justify="center">{{ item }}</h3>
                    </e-carousel-item-m>
                </e-carousel-m>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">自动高度</text>
            <div class="example-card">
                <div style="height: 300px">
                    <e-carousel-m height="auto" autoplay>
                        <e-carousel-item-m style="height: 100px">
                            <h3 class="small justify-center" text="2xl">height 100px</h3>
                        </e-carousel-item-m>
                        <e-carousel-item-m style="height: 200px">
                            <h3 class="small justify-center" text="2xl">height 200px</h3>
                        </e-carousel-item-m>
                        <e-carousel-item-m style="height: 300px">
                            <h3 class="small justify-center" text="2xl">height 300px</h3>
                        </e-carousel-item-m>
                    </e-carousel-m>
                </div>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">卡片模式</text>
            <div class="example-card">
                <e-carousel-m :interval="4000" :loop="false" type="card" height="200px">
                    <e-carousel-item-m v-for="item in 6" :key="item">
                        <h3 text="2xl" justify="center">{{ item }}</h3>
                    </e-carousel-item-m>
                </e-carousel-m>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">垂直方向</text>
            <div class="example-card">
                <div class="example-content">
                    <div class="example-desc">normal vertical layout</div>
                    <e-carousel-m height="200px" direction="vertical" :autoplay="false">
                        <e-carousel-item-m v-for="item in 4" :key="item">
                            <h3 text="2xl" justify="center">{{ item }}</h3>
                        </e-carousel-item-m>
                    </e-carousel-m>
                    <div class="example-desc">card vertical layout</div>
                    <e-carousel-m height="400px" direction="vertical" type="card" :autoplay="false">
                        <e-carousel-item-m v-for="item in 4" :key="item">
                            <h3 text="2xl" justify="center">{{ item }}</h3>
                        </e-carousel-item-m>
                    </e-carousel-m>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
</script>
<style lang="scss" scoped>
@import '../css/common.scss';

.demonstration {
    color: var(--e-text-color-secondary);
}

h3 {
    color: #475669;
    opacity: 0.75;
    margin: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

::v-deep .ep-carousel-item:nth-child(2n) {
    background-color: #99a9bf;
}

::v-deep .ep-carousel-item:nth-child(2n + 1) {
    background-color: #9aa2aa;
}
</style>
