<template>
    <div class="container">
        <div class="van-content">
            <h4 class="cell-title">基础用法</h4>
            <em-radio-group v-model="radio">
                <em-radio class="test" name="1">单选框 1</em-radio>
                <em-radio name="2" @click="radioClick">单选框 2</em-radio>
            </em-radio-group>

            <h4 class="cell-title">中选框</h4>
            <em-radio-group v-model="radio">
                <em-radio name="1" :indeterminate="indeterminate">单选框 1</em-radio>
                <em-radio name="2" checked-color="#07c160" :indeterminate="indeterminate">单选框 2</em-radio>
                <em-radio name="3" disabled checked-color="#07c160" :indeterminate="indeterminate">单选框 3</em-radio>
            </em-radio-group>

            <h4 class="cell-title">水平排列</h4>
            <em-radio-group v-model="radio" checked-color="#07c160" direction="horizontal">
                <em-radio name="1">单选框 1</em-radio>
                <em-radio name="2">单选框 2</em-radio>
                <em-radio name="3">单选框 3</em-radio>
            </em-radio-group>

            <h4 class="cell-title">禁用状态</h4>

            <em-radio-group v-model="radio" disabled>
                <em-radio name="1">单选框 1</em-radio>
                <em-radio name="2">单选框 2</em-radio>
            </em-radio-group>

            <h4 class="cell-title">自定义颜色</h4>
            <em-radio-group v-model="radio">
                <em-radio name="1" checked-color="#07c160">单选框 1</em-radio>
                <em-radio name="2" checked-color="#07c160">单选框 2</em-radio>
            </em-radio-group>
            <h4 class="cell-title">自定义大小</h4>

            <em-radio-group v-model="radio">
                <em-radio name="1" icon-size="32px">单选框 1</em-radio>
                <em-radio name="2" icon-size="32px">单选框 2</em-radio>
            </em-radio-group>
            <h4 class="cell-title">自定义图标</h4>
            <em-radio-group v-model="radio" icon>
                <em-radio name="1">
                    单选框 1
                    <template #icon="props">
                        <img class="img-icon" :src="props.checked ? activeIcon : inactiveIcon" />
                    </template>
                </em-radio>
                <em-radio name="2">
                    单选框 2
                    <template #icon="props">
                        <img class="img-icon" :src="props.checked ? activeIcon : inactiveIcon" />
                    </template>
                </em-radio>
            </em-radio-group>
            <h4 class="cell-title">禁用文本点击</h4>

            <em-radio-group v-model="radio">
                <em-radio name="1" label-disabled>单选框 1</em-radio>
                <em-radio name="2" label-disabled>单选框 2</em-radio>
            </em-radio-group>
            <h4 class="cell-title">与 Cell 组件一起使用</h4>
            <em-radio-group v-model="radio">
                <em-cell-group>
                    <em-cell title="单选框 1" @click="radio = '1'">
                        <template #rightIcon>
                            <em-radio name="1" />
                        </template>
                    </em-cell>
                    <em-cell title="单选框 2" @click="radio = '2'">
                        <template #rightIcon>
                            <em-radio name="2" />
                        </template>
                    </em-cell>
                </em-cell-group>
            </em-radio-group>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            radio: '2',
            indeterminate: true,
            activeIcon: 'https://img.yzcdn.cn/vant/user-active.png',
            inactiveIcon: 'https://img.yzcdn.cn/vant/user-inactive.png'
        };
    },

    methods: {
        radioChange: function (evt) {
            console.log(evt);
        },
        radioClick(evt, value) {
            console.log(evt);
            console.log(value);
        }
    }
};
</script>

<style lang="scss" scoped>
.img-icon {
    height: 20px;
    width: 20px;
}
.em-radio {
    margin: 0 10px 10px;
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