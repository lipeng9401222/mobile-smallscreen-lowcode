<template>
    <div class="container">
        <div class="van-content">
            <h4 class="cell-title">基础用法</h4>
            <em-circle v-model="currentRate" :rate="rate" :speed="speed" :text="text" />

            <h4 class="cell-title">样式定制</h4>
            <em-circle v-model="currentRate1" :rate="rate" :speed="speed" :stroke-width="6" text="宽度定制" />
            <em-circle
                v-model="currentRate2"
                :rate="rate"
                :speed="speed"
                layer-color="#ebedf0"
                color="#ee0a24"
                text="颜色定制"
            />
            <em-circle v-model="currentRate3" :rate="rate" :speed="speed" :color="gradientColor" text="渐变色" />
            
            <em-circle v-model="currentRate4" :rate="rate" :speed="speed" :clockwise="false" text="逆时针方向" />
            <em-circle
                v-model="currentRate5"
                :rate="rate"
                :speed="speed"
                size="120px"
                :clockwise="false"
                text="大小定制"
            />

            <div class="btn-area">
                <em-button type="primary" size="small" custom-style="margin-right: 10px" @click="add">增加</em-button>
                <em-button type="danger" size="small" @click="less">减少</em-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'component_circle',
    data() {
        return {
            currentRate: 0,
            currentRate1: 0,
            currentRate2: 0,
            currentRate3: 0,
            currentRate4: 0,
            currentRate5: 0,
            rate: 70,
            speed: 100,
            gradientColor: {
                '0%': '#3fecff',
                '100%': '#6149f6'
            }
        };
    },
    methods: {
        add() {
            if (this.rate >= 100) {
                this.rate = 100;
            } else {
                this.rate += 20;
            }
        },
        less() {
            if (this.rate <= 0) {
                this.rate = 0;
            } else {
                this.rate -= 20;
            }
        }
    },
    computed: {
        text() {
            return `${this.currentRate.toFixed(0)}%`;
        }
    }
};
</script>

<style lang="scss" scoped>
.van-content {
    height: calc(100vh - 46px);
    background-color: #f7f8fa;
}
::v-deep .em-circle {
    margin-left: 10px;
}

.btn-area {
    margin-top: 10px;
    padding-left: 10px;
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