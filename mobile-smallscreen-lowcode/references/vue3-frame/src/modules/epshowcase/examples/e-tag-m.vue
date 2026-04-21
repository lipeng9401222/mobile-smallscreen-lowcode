<template>
    <div class="van-content">
        <div class="example-group">
            <text class="cell-title">基础用法</text>
            <div class="example-card">
                <div class="example-content">
                    <div class="example-row">
                        <e-tag-m>Tag 1</e-tag-m>
                        <e-tag-m type="success">Tag 2</e-tag-m>
                        <e-tag-m type="info">Tag 3</e-tag-m>
                        <e-tag-m type="warning">Tag 4</e-tag-m>
                        <e-tag-m type="danger">Tag 5</e-tag-m>
                    </div>
                </div>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">可移除标签</text>
            <div class="example-card">
                <div class="example-row">
                    <e-tag-m v-for="tag in tags" :key="tag.name" closable :type="tag.type">
                        {{ tag.name }}
                    </e-tag-m>
                </div>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">动态编辑</text>
            <div class="example-card">
                <div class="example-row">
                    <e-tag-m
                        v-for="tag in dynamicTags"
                        :key="tag"
                        closable
                        :disable-transitions="false"
                        @close="handleClose(tag)"
                    >
                        {{ tag }}
                    </e-tag-m>
                    <input
                        v-show="inputVisible"
                        ref="InputRef"
                        v-model="inputValue"
                        class="tag-input"
                        size="small"
                        @keyup.enter="handleInputConfirm"
                        @blur="handleInputConfirm"
                    />
                    <e-button-m v-show="!inputVisible" size="small" @click="showInput">
                        + New Tag
                    </e-button-m>
                </div>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">大小</text>
            <div class="example-card">
                <div class="example-content">
                    <div class="example-desc">不同尺寸</div>
                    <div class="example-row">
                        <e-tag-m size="large">Large</e-tag-m>
                        <e-tag-m>Default</e-tag-m>
                        <e-tag-m size="small">Small</e-tag-m>
                    </div>
                    <div class="example-desc">可关闭尺寸</div>
                    <div class="example-row">
                        <e-tag-m size="large" closable>Large</e-tag-m>
                        <e-tag-m closable>Default</e-tag-m>
                        <e-tag-m size="small" closable>Small</e-tag-m>
                    </div>
                </div>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">主题</text>
            <div class="example-card">
                <div class="example-content">
                    <div class="example-desc">Dark</div>
                    <div class="example-row">
                        <e-tag-m v-for="item in items" :key="item.label" :type="item.type" effect="dark">
                            {{ item.label }}
                        </e-tag-m>
                    </div>
                    <div class="example-row">
                        <e-tag-m v-for="item in items" :key="item.label + '-close'" :type="item.type" effect="dark" closable>
                            {{ item.label }}
                        </e-tag-m>
                    </div>

                    <div class="example-desc">Light</div>
                    <div class="example-row">
                        <e-tag-m v-for="item in items" :key="item.label" :type="item.type" effect="light">
                            {{ item.label }}
                        </e-tag-m>
                    </div>
                    <div class="example-row">
                        <e-tag-m v-for="item in items" :key="item.label + '-close'" :type="item.type" effect="light" closable>
                            {{ item.label }}
                        </e-tag-m>
                    </div>

                    <div class="example-desc">Plain</div>
                    <div class="example-row">
                        <e-tag-m v-for="item in items" :key="item.label" :type="item.type" effect="plain">
                            {{ item.label }}
                        </e-tag-m>
                    </div>
                    <div class="example-row">
                        <e-tag-m v-for="item in items" :key="item.label + '-close'" :type="item.type" effect="plain" closable>
                            {{ item.label }}
                        </e-tag-m>
                    </div>
                </div>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">圆角</text>
            <div class="example-card">
                <div class="example-content">
                    <div class="example-desc">Dark Round</div>
                    <div class="example-row">
                        <e-tag-m v-for="item in items" :key="item.label" :type="item.type" effect="dark" round>
                            {{ item.label }}
                        </e-tag-m>
                    </div>
                    <div class="example-desc">Light Round</div>
                    <div class="example-row">
                        <e-tag-m v-for="item in items" :key="item.label" :type="item.type" effect="light" round>
                            {{ item.label }}
                        </e-tag-m>
                    </div>
                    <div class="example-desc">Plain Round</div>
                    <div class="example-row">
                        <e-tag-m v-for="item in items" :key="item.label" :type="item.type" effect="plain" round>
                            {{ item.label }}
                        </e-tag-m>
                    </div>
                </div>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">图标标签</text>
            <div class="example-card">
                <div class="example-content">
                    <div class="example-desc">默认样式</div>
                    <div class="example-row">
                        <e-tag-m :icon="User">User</e-tag-m>
                        <e-tag-m :icon="Star" type="success">Star</e-tag-m>
                        <e-tag-m :icon="Message" type="info">Message</e-tag-m>
                        <e-tag-m :icon="Warning" type="warning">Warning</e-tag-m>
                        <e-tag-m :icon="Delete" type="danger">Delete</e-tag-m>
                    </div>
                    <div class="example-desc">Dark 主题</div>
                    <div class="example-row">
                        <e-tag-m :icon="User" effect="dark">User</e-tag-m>
                        <e-tag-m :icon="Star" type="success" effect="dark">Star</e-tag-m>
                        <e-tag-m :icon="Message" type="info" effect="dark">Message</e-tag-m>
                        <e-tag-m :icon="Warning" type="warning" effect="dark">Warning</e-tag-m>
                        <e-tag-m :icon="Delete" type="danger" effect="dark">Delete</e-tag-m>
                    </div>
                    <div class="example-desc">圆角样式</div>
                    <div class="example-row">
                        <e-tag-m :icon="User" round>User</e-tag-m>
                        <e-tag-m :icon="Star" type="success" round>Star</e-tag-m>
                        <e-tag-m :icon="Message" type="info" round>Message</e-tag-m>
                        <e-tag-m :icon="Warning" type="warning" round>Warning</e-tag-m>
                        <e-tag-m :icon="Delete" type="danger" round>Delete</e-tag-m>
                    </div>
                </div>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">可选标签</text>
            <div class="example-card">
                <div class="example-row">
                    <e-check-tag-m checked>Checked</e-check-tag-m>
                    <e-check-tag-m :checked="checked" @change="onChange">Toggle me</e-check-tag-m>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref, nextTick } from 'vue';
import type { TagProps } from '@epoint-mfe/eui-components';
import { Delete, Message, Star, User, Warning } from '@epoint-mfe/eui-icons';
type Item = { type: TagProps['type']; label: string };

const items = ref<Array<Item>>([
    { type: '', label: 'Tag 1' },
    { type: 'success', label: 'Tag 2' },
    { type: 'info', label: 'Tag 3' },
    { type: 'danger', label: 'Tag 4' },
    { type: 'warning', label: 'Tag 5' }
]);
const tags = ref([
    { name: 'Tag 1', type: '' },
    { name: 'Tag 2', type: 'success' },
    { name: 'Tag 3', type: 'info' },
    { name: 'Tag 4', type: 'warning' },
    { name: 'Tag 5', type: 'danger' }
]);
const inputValue = ref('');
const dynamicTags = ref(['Tag 1', 'Tag 2', 'Tag 3']);
const inputVisible = ref(false);
const InputRef = ref<HTMLInputElement>();

const handleClose = (tag: string) => {
    dynamicTags.value.splice(dynamicTags.value.indexOf(tag), 1);
};

const showInput = () => {
    inputVisible.value = true;
};

const handleInputConfirm = () => {
    if (inputValue.value) {
        dynamicTags.value.push(inputValue.value);
    }
    inputVisible.value = false;
    inputValue.value = '';
};
const checked = ref(false);

const onChange = (status: boolean) => {
    checked.value = status;
};
</script>
<style lang="scss" scoped>
@import '../css/common.scss';

.tag-input {
    width: 100px;
    height: 32px;
    padding: 0 8px;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    font-size: 14px;
    outline: none;
    
    &:focus {
        border-color: #409eff;
    }
}
</style>
