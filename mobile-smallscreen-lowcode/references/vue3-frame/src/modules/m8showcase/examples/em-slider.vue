<template>
    <div class="container">
        <div class="em-content">
            <h4 class="cell-title">基本用法</h4>
            <em-slider v-model="baseValue" @change="onChange" />

            <h4 class="cell-title">双滑块</h4>
            <em-slider v-model="twoValue" range @change="onChange" />

            <h4 class="cell-title">指定选择范围</h4>
            <em-slider v-model="value" :min="-50" :max="50" @change="onChange" />

            <h4 class="cell-title">禁用</h4>
            <em-slider v-model="value2" disabled />

            <h4 class="cell-title">指定步长</h4>
            <em-slider v-model="value3" :step="10" @change="onChange" />

            <h4 class="cell-title">自定义样式</h4>
            <em-slider
                v-model="value4"
                bar-height="4px"
                active-color="#ee0a24"
                @change="onChange"
            />

            <h4 class="cell-title">自定义按钮</h4>
            <em-slider v-model="value5" active-color="#ee0a24" @change="onChange">
                <template #button>
                    <div class="custom-button">
                        {{ value5 }}
                    </div>
                </template>
            </em-slider>

            <h4 class="cell-title">垂直方向</h4>
            <div :style="{ height: '100px', paddingLeft: '50px' }">
                <em-slider v-model="value6" vertical @change="onChange" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Slider',
    data() {
        return {
            value: 0,
            value2: 50,
            value3: 50,
            value4: 50,
            value5: 50,
            value6: 50,
            baseValue: 0,
            twoValue: [10, 50]
        };
    },
    methods: {
        onChange(value) {
            console.log(`当前值：${value}`);
        }
    }
};
</script>

<style scoped>
.container {
    padding: 0 10px;
}

.custom-button {
    width: 26px;
    color: #fff;
    font-size: 10px;
    line-height: 18px;
    text-align: center;
    background-color: #ee0a24;
    border-radius: 100px;
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