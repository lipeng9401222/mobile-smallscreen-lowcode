<template>
    <view class="container">
        <view class="em-content">
            <h4 class="cell-title">基础用法</h4>
            <em-popover
                v-model="showPopover"
                :actions="actions"
                @select="onSelect"
                @close="onClose"
                @closed="onClosed"
                @open="onOpen"
                @opened="onOpened"
                customClass="leftview"
                placement="right-end"
            >
                <template #reference>
                    <em-button type="primary">浅色风格</em-button>
                </template>
            </em-popover>

            <em-popover v-model="showPopover1" overlay placement="left" theme="dark" :actions="actions" customClass="rightview">
                <template #reference>
                    <em-button type="primary">深色风格</em-button>
                </template>
            </em-popover>

            <h4 class="cell-title">弹出位置</h4>
            <em-cell is-link @click="showPosition = true" title="选择弹出位置" />
            <view style="height: 40vh; display: flex; justify-content: center; align-items: center">
                <em-popover
                    v-model="showPopover2"
                    theme="dark"
                    :actions="actions2"
                    :placement="position"
                >
                    <template #reference>
                        <view class="blue"></view>
                    </template>
                </em-popover>
            </view>
            <em-picker v-model="showPosition" :columns="columns" @change="onChange" style="margin-top: 100px" />

            <h4 class="cell-title">选项配置</h4>
            <em-popover v-model="showPopover3" :actions="actions3" customClass="leftview" placement="bottom-start">
                <template #reference>
                    <em-button type="primary">展示图标</em-button>
                </template>
            </em-popover>

            <em-popover v-model="showPopover4" :actions="actions4" customClass="rightview">
                <template #reference>
                    <em-button type="primary">禁用选项</em-button>
                </template>
            </em-popover>

            <h4 class="cell-title">自定义内容</h4>
            <em-popover v-model="showPopover5" customClass="leftview" placement="right-start">
                <uni-row>
                    <uni-col :span="24">
                        <em-image width="100" height="100" src="https://img.yzcdn.cn/vant/cat.jpeg" />
                    </uni-col>
                </uni-row>
                <template #reference>
                    <em-button type="primary">自定义内容</em-button>
                </template>
            </em-popover>
        </view>
        <em-toast ref="emToast"></em-toast>
    </view>
</template>

<script lang="ts">
export default {
    name: 'Popover',
    components: {},
    data() {
        return {
            showPopover: false,
            showPopover1: false,
            showPopover2: false,
            showPopover3: false,
            showPopover4: false,
            showPopover5: false,
            // 通过 actions 属性来定义菜单选项
            actions: [{ text: '选项一', className: 'abc-custom' }, { text: '选项二' }, { text: '选项三' }],
            actions2: [{ text: '选项一' }, { text: '选项二' }],
            actions3: [
                { text: '选项一', icon: 'add-o' },
                { text: '选项二', icon: 'music-o' },
                { text: '选项三', icon: 'more-o' }
            ],
            actions4: [{ text: '选项一', disabled: true }, { text: '选项二', disabled: true }, { text: '选项三' }],
            showPosition: false,
            columns: [
                'top',
                'top-start',
                'top-end',
                'left',
                'left-start',
                'left-end',
                'right',
                'right-start',
                'right-end',
                'bottom',
                'bottom-start',
                'bottom-end'
            ],
            position: 'right'
        };
    },
    methods: {
        onSelect(action) {
            Toast(action.text);
        },
        onChange(val) {
            console.log(1, val);
            this.position = val;
            this.showPopover2 = true;
        },
        onClosed() {
            Toast('onClosed');
        },
        onClose() {
            Toast('onClose');
        },
        onOpen() {
            Toast('onOpen');
        },
        onOpened() {
            Toast('onOpened');
        }
    }
};
</script>

<style scoped lang="scss">
::v-deep .leftview {
    margin-left: 2.667vw;
}
::v-deep .rightview {
    margin-left: 20px;
}
.blue {
    width: 120px;
    height: 80px;
    border-radius: 10px;
    background-color: #1989fa;
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