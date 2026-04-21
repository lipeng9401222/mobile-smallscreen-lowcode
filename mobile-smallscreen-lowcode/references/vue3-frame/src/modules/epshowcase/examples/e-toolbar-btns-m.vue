<template>
    <div class="van-content">
        <div class="example-group">
            <text class="cell-title">基本使用</text>
            <div class="example-card">
                <div class="bottom-container">
                    <e-toolbar-btns-m :items="items" borderPosition="both" />
                </div>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">调整平铺按钮最大展示数量</text>
            <div class="example-card">
                <div class="bottom-container">
                    <e-toolbar-btns-m :items="items" max-display-count="4" displayedIconBtnNum="2" borderPosition="both" />
                </div>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">固定按钮布局</text>
            <div class="example-card">
                <div class="bottom-container">
                    <e-toolbar-btns-m
                        :responsive="false"
                        :items="items"
                        max-display-count="3"
                        displayedIconBtnNum="1"
                        borderPosition="both"
                    />
                </div>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">下拉按钮组</text>
            <div class="example-card">
                <div class="bottom-container">
                    <e-toolbar-btns-m
                        :responsive="false"
                        :items="items2"
                        max-display-count="3"
                        displayedIconBtnNum="1"
                        borderPosition="both"
                    />
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { reactive } from 'vue';
const clickEvt = (e: any) => {
    ejs.ui.toast(`${e.content}被点击`);
};
const items = reactive([
    {
        content: '图标按钮1',
        id: '1',
        icon: 'Edit', // 支持 vant 图标库 及 PC 端的 EUI ICON 名称，以及图片链接
        onClick: clickEvt
    },
    {
        content: '图标按钮2',
        id: '2',
        icon: 'like',
        onClick: clickEvt,
        visible: true
    },
    {
        content: '图标按钮3',
        id: '3',
        icon: 'https://img01.yzcdn.cn/vant/cat.jpeg',
        visible: true,
        onClick: clickEvt
    },
    {
        content: '副按钮',
        id: '4',
        icon: 'arrow',
        iconPosition: 'right', // 图标位置，支持 top left 和 right，默认为 top 即图标按钮
        onClick: clickEvt
    },
    {
        content: '主按钮',
        id: '5',
        icon: 'Loading',
        iconPosition: 'left',
        type: 'primary', // 按钮类型
        onClick: clickEvt
    }
]);

const items2 = reactive([
    {
        content: '图标按钮1',
        id: '21',
        icon: 'Edit', // 支持 vant 图标库 及 PC 端的 EUI ICON 名称，以及图片链接
        onClick: clickEvt
    },
    {
        content: '图标按钮2',
        id: '22',
        icon: 'like',
        onClick: clickEvt,
        visible: true
    },
    {
        content: '图标按钮3',
        id: '23',
        icon: 'https://img01.yzcdn.cn/vant/cat.jpeg',
        visible: true,
        onClick: clickEvt
    },
    {
        content: '副按钮',
        id: '24',
        control: 'dropdown',
        items: [
            {
                content: '图标按钮241',
                id: '241',
                onClick: clickEvt
            },
            {
                content: '图标按钮242',
                id: '242',
                onClick: clickEvt
            }
        ],
        onClick: clickEvt
    },
    {
        content: '主按钮',
        id: '25',
        icon: 'Loading',
        iconPosition: 'left',
        control: 'buttonGroup',
        items: [
            {
                content: '图标按钮251',
                id: '251',
                onClick: clickEvt
            },
            {
                content: '图标按钮252',
                id: '252',
                onClick: clickEvt
            }
        ],
        type: 'primary', // 按钮类型
        onClick: clickEvt
    }
]);
</script>
<style lang="scss" scoped>
@import '../css/common.scss';

.bottom-container {
    padding-top: 100px;
}
</style>
