<template>
    <div class="container">
        <div class="van-content">
            <h4 class="cell-title">基础用法</h4>
            <em-checkbox v-model="checked" @change="checkboxChange" @click="clickCheckbox">复选框</em-checkbox>
            <em-checkbox v-model="checked" :indeterminate="indeterminate">中选框</em-checkbox>

            <h4 class="cell-title">禁用状态</h4>

            <em-checkbox v-model="checked" disabled>复选框</em-checkbox>

            <em-checkbox-group v-model="result" disabled>
                <em-checkbox name="a">复选框 1</em-checkbox>
                <em-checkbox name="b">复选框 2</em-checkbox>
            </em-checkbox-group>

            <h4 class="cell-title">自定义形状</h4>

            <em-checkbox v-model="checked" shape="round">复选框</em-checkbox>

            <h4 class="cell-title">自定义颜色</h4>
            <em-checkbox v-model="checked" checked-color="#07c160">复选框</em-checkbox>

            <h4 class="cell-title">自定义大小</h4>

            <em-checkbox v-model="checked" icon-size="32px">复选框</em-checkbox>

            <em-checkbox-group v-model="result" icon-size="24" @change="checkboxChange">
                <em-checkbox name="a">复选框 a</em-checkbox>
                <em-checkbox name="b">复选框 b</em-checkbox>
            </em-checkbox-group>

            <h4 class="cell-title">自定义图标</h4>
            <em-checkbox v-model="checked" icon>
                自定义图标
                <template #icon="{ checked }">
                    <img class="img-icon" :src="checked ? activeIcon : inactiveIcon" />
                </template>
            </em-checkbox>
            <h4 class="cell-title">禁用文本点击</h4>

            <em-checkbox v-model="checked" label-disabled>复选框</em-checkbox>

            <h4 class="cell-title">复选框组</h4>

            <em-checkbox-group v-model="result">
                <em-checkbox name="a">复选框 a</em-checkbox>
                <em-checkbox name="b">复选框 b</em-checkbox>
            </em-checkbox-group>

            <h4 class="cell-title">水平排列</h4>
            <em-checkbox-group v-model="result" direction="horizontal">
                <em-checkbox name="a">复选框 a</em-checkbox>
                <em-checkbox name="b">复选框 b</em-checkbox>
            </em-checkbox-group>

            <h4 class="cell-title">限制最大可选数</h4>

            <em-checkbox-group v-model="result" :max="2">
                <em-checkbox name="a">复选框 a</em-checkbox>
                <em-checkbox name="b">复选框 b</em-checkbox>
                <em-checkbox name="c">复选框 c</em-checkbox>
            </em-checkbox-group>

            <h4 class="cell-title">全选与反选</h4>
            <em-checkbox-group v-model="result" ref="checkboxGroup">
                <em-checkbox name="a">复选框 a</em-checkbox>
                <em-checkbox name="b">复选框 b</em-checkbox>
                <em-checkbox name="c" disabled>复选框 c</em-checkbox>
            </em-checkbox-group>

            <em-button type="primary" @click="checkAll">全选</em-button>
            <em-button type="info" @click="toggleAll">反选</em-button>

            <h4 class="cell-title">搭配单元格组件使用</h4>
            <em-checkbox-group v-model="result" ref="checkboxes">
                <em-cell-group>
                    <em-cell
                        v-for="(item, index) in list"
                        clickable
                        :key="item"
                        :title="`复选框 ${item}`"
                        @click="toggle(index)"
                    >
                        <template #rightIcon>
                            <em-checkbox :name="item" ref="check"></em-checkbox>
                        </template>
                    </em-cell>
                </em-cell-group>
            </em-checkbox-group>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    data() {
        return {
            show: false,
            checked: false,
            toggleCheck: true,
            result: ['c'],
            checkbox: '2',
            activeIcon: 'https://img.yzcdn.cn/vant/user-active.png',
            inactiveIcon: 'https://img.yzcdn.cn/vant/user-inactive.png',
            checkbox2: 'CHN',
            list: ['a', 'b'],
            indeterminate: true
        };
    },
    methods: {
        checkboxChange: function (evt) {
            console.log(evt);
        },
        checkAll() {
            this.$refs.checkboxGroup.toggleAll({
                checked: true,
                skipDisabled: true
            });
        },
        toggleAll() {
            this.$refs.checkboxGroup.toggleAll();
        },
        clickCheckbox(e) {
            console.log(e);
        },
        toggle(index) {
            this.$refs.check[index].toggle();
        },
        showTest() {
            this.show = !this.show;
        },
        toggleTest() {
            this.$refs.node.toggle();
        }
    }
};
</script>

<style lang="scss" scoped>
.img-icon {
    height: 20px;
    width: 20px;
}
.em-checkbox {
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