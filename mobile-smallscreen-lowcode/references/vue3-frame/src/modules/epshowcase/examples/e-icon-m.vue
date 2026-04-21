<template>
    <div class="van-content">
        <div class="example-group">
            <text class="cell-title">基础用法</text>
            <div class="example-card">
                <em-row>
                    <em-col :span="6">
                        <e-icon-m @click="onClick" name="chat-o" />
                    </em-col>
                    <em-col :span="6">
                        <e-icon-m name="Edit" />
                    </em-col>
                    <em-col :span="6">
                        <e-icon-m name="https://b.yzcdn.cn/vant/icon-demo-1126.png" />
                    </em-col>
                </em-row>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">徽标提示</text>
            <div class="example-card">
                <em-row>
                    <em-col :span="6">
                        <e-icon-m name="chat-o" dot />
                    </em-col>
                    <em-col :span="6">
                        <e-icon-m name="Edit" badge="9" />
                    </em-col>
                    <em-col :span="6">
                        <e-icon-m name="https://b.yzcdn.cn/vant/icon-demo-1126.png" badge="99+" />
                    </em-col>
                </em-row>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">图标颜色</text>
            <div class="example-card">
                <em-row>
                    <em-col :span="6">
                        <e-icon-m name="chat-o" color="#1989fa" />
                    </em-col>
                    <em-col :span="6">
                        <e-icon-m name="Edit" color="#07c160" />
                    </em-col>
                </em-row>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">图标大小</text>
            <div class="example-card">
                <em-row>
                    <em-col :span="6">
                        <e-icon-m name="chat-o" size="40" />
                    </em-col>
                    <em-col :span="6">
                        <e-icon-m name="Edit" size="3rem" />
                    </em-col>
                </em-row>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">结合 @epoint-mfe/eui-icons 库使用</text>
            <div class="example-card">
                <em-row>
                    <em-col :span="6">
                        <e-icon-m size="40" color="red">
                            <Edit />
                        </e-icon-m>
                    </em-col>
                    <em-col :span="6">
                        <Plus style="width: 1em; height: 1em; margin-right: 8px" />
                    </em-col>
                </em-row>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import { Edit, Plus } from '@epoint-mfe/eui-icons';
const current = ref(0);
const iconSize = '25px';
const fontSize = '16px';
const onClick = () => {
    ejs.ui.toast('点击图标');
};
const baseIcon = [
    'success',
    'plus',
    'minus',
    'cross',
    'fail',
    'arrow',
    'arrow-left',
    'arrow-up',
    'arrow-down',
    'circle'
];
const EUIIcon = [
    'Plus',
    'Minus',
    'CirclePlus',
    'Search',
    'Female',
    'Male',
    'Aim',
    'House',
    'FullScreen',
    'Loading',
    'Link',
    'Service',
    'Pointer',
    'Star'
];
</script>
<style scoped>
.icon-wrapper {
    font-size: 32px;
}

::v-deep .col {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    height: 68px;
}
</style>
<style lang="scss" scoped>
@import '../css/common.scss';
</style>
