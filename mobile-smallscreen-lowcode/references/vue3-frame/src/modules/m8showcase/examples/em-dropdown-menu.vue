<template>
    <div class="container">
        <div class="em-content">
            <text class="cell-title">基础用法</text>
            <em-dropdown-menu>
                <em-dropdown-item v-model="value1" :options="option1" />
                <em-dropdown-item v-model="value2" :options="option2" />
            </em-dropdown-menu>

            <text class="cell-title">自定义菜单内容</text>
            <em-dropdown-menu>
                <em-dropdown-item v-model="value" :options="option" />
                <em-dropdown-item title="筛选" ref="item">
                    <em-cell center title="包邮">
                        <template #rightIcon>
                            <em-button>点击包邮</em-button>
                        </template>
                    </em-cell>
                    <em-cell center title="团购">
                        <template #rightIcon>
                            <em-button>点击团购</em-button>
                        </template>
                    </em-cell>
                    <div
                        class="btn-wrapper"
                        style="padding-top: 5px; padding-left: 16px; padding-bottom: 5px; padding-right: 16px"
                    >
                        <em-button class="btn" type="danger" block round @click="onConfirm" color="#2e6be5">
                            确认
                        </em-button>
                    </div>
                </em-dropdown-item>
            </em-dropdown-menu>

            <text class="cell-title">自定义选中态颜色</text>
            <em-dropdown-menu active-color="red">
                <em-dropdown-item v-model="value1" :options="option1" />
                <em-dropdown-item v-model="value2" :options="option2" />
            </em-dropdown-menu>

            <text class="cell-title">向上展开</text>
            <em-dropdown-menu direction="up">
                <em-dropdown-item v-model="value1" :options="option1" />
                <em-dropdown-item v-model="value2" :options="option2" />
            </em-dropdown-menu>

            <text class="cell-title">禁用菜单</text>
            <em-dropdown-menu>
                <em-dropdown-item v-model="value1" disabled :options="option1" />
                <em-dropdown-item v-model="value2" disabled :options="option2" />
            </em-dropdown-menu>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: 'DropdownMenu',
    data() {
        return {
            value1: 0,
            value2: 'a',
            option1: [
                { text: '全部商品', value: 0 },
                { text: '新款商品', value: 1 },
                { text: '活动商品', value: 2 }
            ],
            option2: [
                { text: '默认排序', value: 'a' },
                { text: '好评排序', value: 'b' },
                { text: '销量排序', value: 'c' }
            ],
            value: 0,
            switch1: false,
            switch2: false,
            option: [
                { text: '全部商品', value: 0 },
                { text: '新款商品', value: 1 },
                { text: '活动商品', value: 2 }
            ]
        };
    },
    methods: {
        onConfirm() {
            this.$refs.item.toggle();
        }
    }
};
</script>

<style scoped>
.cell-title:first-child {
    padding-top: 15px;
    margin-top: 0;
}
.em-content {
    padding-bottom: 50px;
    background-color: #f7f8fa;
    /* height: 100vh; */
}

/* #ifdef APP-PLUS */
.btn-wrapper {
    flex-direction: row;
}
.btn {
    flex: 1;
}
/* #endif */
</style>
<style>
/* custom style */
.cell-title:first-child {
    padding-top: 10px;
}

.cell-title {
    /* #ifndef APP-PLUS */
    display: block;
    /* #endif */
    padding-top: 30px;
    padding-bottom: 10px;
    padding-left: 10px;
    color: rgba(69, 90, 100, 0.6);
    font-size: 14px;
    font-weight: 400;
}
</style>
