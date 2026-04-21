<template>
    <div>
        <h4 class="cell-title">普通类型</h4>
        <em-rate v-model="value"></em-rate>
        <h4 class="cell-title">自定义数量</h4>
        <em-rate v-model="value1" :count="10"></em-rate>
        <h4 class="cell-title">自定义样式</h4>
        <em-rate v-model="value2" :size="25" color="#ff0" icon="like" void-icon="like-o"></em-rate>
        <h4 class="cell-title">禁用状态</h4>
        <em-rate v-model="value3" disabled></em-rate>
        <h4 class="cell-title">半星</h4>
        <em-rate v-model="value4" allow-half void-icon="star" void-color="#eee" />
        <h4 class="cell-title">只读状态</h4>
        <em-rate v-model="value5" readonly />
        <h4 class="cell-title">禁止手势滑动状态</h4>
        <em-rate v-model="value7" :touchable="false" />
        <h4 class="cell-title">监听 change 事件</h4>
        <em-rate v-model="value8" @change="onChange" />
        <h4 class="cell-title">监听 input 事件</h4>
        <em-rate v-model="value6" allow-half @input="onChange" />
        <em-toast ref="emToast"></em-toast>
    </div>
</template>
<script>
export default {
    components: {},
    data() {
        return {
            value: 0,
            value1: 3,
            value2: 3,
            value3: 3,
            value4: 2.5,
            value5: 4,
            value6: 3,
            value7: 3,
            value8: 2
        };
    },
    created() {
        setTimeout(() => {
            this.value = 2;
        }, 2000);
    },
    computed: {},
    methods: {
        onChange(value) {
            Toast(`当前评分: ${value}`);
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