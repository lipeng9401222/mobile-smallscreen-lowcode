<template>
    <div class="van-content">
        <div class="example-group">
            <text class="cell-title">基本使用</text>
            <div class="example-card">
                <e-dropdown-m>
                    <span class="ep-dropdown-link">
                        Dropdown List
                        <e-icon-m class="ep-icon--right" name="ArrowDownBold"></e-icon-m>
                    </span>
                    <template #dropdown>
                        <e-dropdown-menu-m>
                            <e-dropdown-item-m>Action 1</e-dropdown-item-m>
                            <e-dropdown-item-m>Action 2</e-dropdown-item-m>
                            <e-dropdown-item-m>Action 3</e-dropdown-item-m>
                            <e-dropdown-item-m disabled>Action 4</e-dropdown-item-m>
                            <e-dropdown-item-m divided>Action 5</e-dropdown-item-m>
                        </e-dropdown-menu-m>
                    </template>
                </e-dropdown-m>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">如何触发</text>
            <div class="example-card">
                <div class="example-content">
                    <div class="example-desc">点击触发</div>
                    <e-dropdown-m trigger="click">
                        <span class="ep-dropdown-link">
                            click to trigger
                            <e-icon-m class="ep-icon--right" name="ArrowDownBold"></e-icon-m>
                        </span>
                        <template #dropdown>
                            <e-dropdown-menu-m>
                                <e-dropdown-item-m>Action 1</e-dropdown-item-m>
                                <e-dropdown-item-m>Action 2</e-dropdown-item-m>
                                <e-dropdown-item-m>Action 3</e-dropdown-item-m>
                                <e-dropdown-item-m disabled>Action 4</e-dropdown-item-m>
                                <e-dropdown-item-m divided>Action 5</e-dropdown-item-m>
                            </e-dropdown-menu-m>
                        </template>
                    </e-dropdown-m>
                    
                    <div class="example-desc">长按触发</div>
                    <e-dropdown-m trigger="longpress">
                        <span class="ep-dropdown-link">
                            longpress to trigger
                            <e-icon-m class="ep-icon--right" name="ArrowDownBold"></e-icon-m>
                        </span>
                        <template #dropdown>
                            <e-dropdown-menu-m>
                                <e-dropdown-item-m>Action 1</e-dropdown-item-m>
                                <e-dropdown-item-m>Action 2</e-dropdown-item-m>
                                <e-dropdown-item-m>Action 3</e-dropdown-item-m>
                                <e-dropdown-item-m disabled>Action 4</e-dropdown-item-m>
                                <e-dropdown-item-m divided>Action 5</e-dropdown-item-m>
                            </e-dropdown-menu-m>
                        </template>
                    </e-dropdown-m>
                </div>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">菜单隐藏行为</text>
            <div class="example-card">
                <e-dropdown-m :hide-on-click="false">
                    <span class="ep-dropdown-link">
                        Dropdown List
                        <e-icon-m class="ep-icon--right" name="ArrowDownBold"></e-icon-m>
                    </span>
                    <template #dropdown>
                        <e-dropdown-menu-m>
                            <e-dropdown-item-m>Action 1</e-dropdown-item-m>
                            <e-dropdown-item-m>Action 2</e-dropdown-item-m>
                            <e-dropdown-item-m>Action 3</e-dropdown-item-m>
                            <e-dropdown-item-m disabled>Action 4</e-dropdown-item-m>
                            <e-dropdown-item-m divided>Action 5</e-dropdown-item-m>
                        </e-dropdown-menu-m>
                    </template>
                </e-dropdown-m>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">命令事件</text>
            <div class="example-card">
                <e-dropdown-m @command="myCommand">
                    <span class="ep-dropdown-link">
                        Dropdown List
                        <e-icon-m class="ep-icon--right" name="ArrowDownBold"></e-icon-m>
                    </span>
                    <template #dropdown>
                        <e-dropdown-menu-m>
                            <e-dropdown-item-m command="a">Action 1</e-dropdown-item-m>
                            <e-dropdown-item-m command="b">Action 2</e-dropdown-item-m>
                            <e-dropdown-item-m command="c">Action 3</e-dropdown-item-m>
                            <e-dropdown-item-m command="d" disabled>Action 4</e-dropdown-item-m>
                            <e-dropdown-item-m command="e" divided>Action 5</e-dropdown-item-m>
                        </e-dropdown-menu-m>
                    </template>
                </e-dropdown-m>
                <div class="example-info">
                    <p>选中命令: {{ selectedCommand || '无' }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const selectedCommand = ref('');

const myCommand = (command: string) => {
    selectedCommand.value = command;
    ejs.ui.toast(`click on item ${command}`);
};
</script>

<style lang="scss" scoped>
@import '../css/common.scss';

.ep-dropdown-link {
    cursor: pointer;
    color: var(--ep-color-primary);
    display: inline-flex;
    align-items: center;
}

.ep-icon--right {
    margin-left: 5px;
}

.em-dropdown-group {
    display: flex;
    gap: 16px;
}
</style>
