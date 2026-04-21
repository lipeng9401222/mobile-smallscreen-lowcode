<template>
    <div class="van-content">
        <div class="example-group">
            <text class="cell-title" style="margin-top: 0;">基本用法</text>
            <div class="example-card">
                <e-collapse-m v-model="activeNames1" @change="handleChange">
                    <e-collapse-item-m title="一致性" name="1">
                        <div>与现实生活保持一致：符合真实生活的过程和逻辑，并遵守用户习惯的语言和习惯；</div>
                        <div>在界面内保持一致性：所有元素都应该保持一致，如：设计风格、图标和文本、元素位置等。</div>
                    </e-collapse-item-m>
                    <e-collapse-item-m title="反馈" name="2">
                        <div>操作反馈：通过样式更新和交互效果使用户清晰感知其操作；</div>
                        <div>视觉反馈：通过更新或重新排列页面元素来反映当前状态。</div>
                    </e-collapse-item-m>
                    <e-collapse-item-m title="效率" name="3">
                        <div>简化流程：保持操作流程简单和直观；</div>
                        <div>明确和清晰：明确表达您的意图，以便用户能够迅速理解并做出决策；</div>
                        <div>易于识别：界面应该直截了当，帮助用户辨识，并让他们免于记忆和回忆。</div>
                    </e-collapse-item-m>
                    <e-collapse-item-m title="可控性" name="4">
                        <div>决策制定：提供关于操作的建议是可以接受的，但不要代替用户做决策；</div>
                        <div>可控的后果：用户应该获得自由操作的权利，包括取消、中止或终止当前操作。</div>
                    </e-collapse-item-m>
                </e-collapse-m>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">显示序号</text>
            <div class="example-card">
                <e-checkbox-m v-model="showIndex" style="padding: 0 10px;">显示序号</e-checkbox-m>
                <e-collapse-m v-model="activeNames3" :show-index="showIndex" class="collapse">
                    <e-collapse-item-m title="一致性" name="1">
                        <template #index="{ index, formatedIndex }">
                            <span class="index" style="color: red">
                                起始值： {{ index }} ；默认是 {{ formatedIndex }}
                            </span>
                        </template>
                        <div>与现实生活保持一致：与现实生活的过程和逻辑一致，并符合用户习惯的语言和习惯；</div>
                        <div>在界面内保持一致性：所有元素都应保持一致，如设计风格、图标和文本、元素位置等。</div>
                    </e-collapse-item-m>
                    <e-collapse-item-m title="反馈" name="2">
                        <div>操作反馈：通过样式更新和交互效果使用户清晰地感知其操作；</div>
                        <div>视觉反馈：通过更新或重新排列页面元素来反映当前状态。</div>
                    </e-collapse-item-m>
                    <e-collapse-item-m title="效率" name="3">
                        <div>简化流程：保持操作流程简单和直观；</div>
                        <div>明确清晰：明确表达您的意图，以便用户能够快速理解并做出决策；</div>
                        <div>易于识别：界面应该直接，有助于用户识别，避免他们记忆和回想。</div>
                    </e-collapse-item-m>
                    <e-collapse-item-m title="可控性">
                        <div>决策制定：提供操作建议是可以接受的，但不要为用户做决策；</div>
                        <div>可控的后果：用户应该被授予自由操作的权利，包括取消、中止或终止当前操作。</div>
                    </e-collapse-item-m>
                </e-collapse-m>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">开启面板间距</text>
            <div class="example-card">
                <e-collapse-m v-model="activeNames4" gap>
                    <e-collapse-item-m title="一致性" name="1">
                        <div>与现实生活保持一致：符合真实生活的过程和逻辑，并遵守用户习惯的语言和习惯；</div>
                        <div>在界面内保持一致性：所有元素都应该保持一致，如：设计风格、图标和文本、元素位置等。</div>
                    </e-collapse-item-m>
                    <e-collapse-item-m title="反馈" name="2">
                        <div>操作反馈：通过样式更新和交互效果使用户清晰感知其操作；</div>
                        <div>视觉反馈：通过更新或重新排列页面元素来反映当前状态。</div>
                    </e-collapse-item-m>
                    <e-collapse-item-m title="效率" name="3">
                        <div>简化流程：保持操作流程简单和直观；</div>
                        <div>明确和清晰：明确表达您的意图，以便用户能够迅速理解并做出决策；</div>
                        <div>易于识别：界面应该直截了当，帮助用户辨识，并让他们免于记忆和回忆。</div>
                    </e-collapse-item-m>
                    <e-collapse-item-m title="可控性" name="4">
                        <div>决策制定：提供关于操作的建议是可以接受的，但不要代替用户做决策；</div>
                        <div>可控的后果：用户应该获得自由操作的权利，包括取消、中止或终止当前操作。</div>
                    </e-collapse-item-m>
                </e-collapse-m>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">隐藏标题前色块</text>
            <div class="example-card">
                <e-collapse-m v-model="activeNames5" header-prefix="none">
                    <e-collapse-item-m title="一致性" name="1">
                        <div>与现实生活保持一致：符合真实生活的过程和逻辑，并遵守用户习惯的语言和习惯；</div>
                        <div>在界面内保持一致性：所有元素都应该保持一致，如：设计风格、图标和文本、元素位置等。</div>
                    </e-collapse-item-m>
                    <e-collapse-item-m title="反馈" name="2">
                        <div>操作反馈：通过样式更新和交互效果使用户清晰感知其操作；</div>
                        <div>视觉反馈：通过更新或重新排列页面元素来反映当前状态。</div>
                    </e-collapse-item-m>
                    <e-collapse-item-m title="效率" name="3">
                        <div>简化流程：保持操作流程简单和直观；</div>
                        <div>明确和清晰：明确表达您的意图，以便用户能够迅速理解并做出决策；</div>
                        <div>易于识别：界面应该直截了当，帮助用户辨识，并让他们免于记忆和回忆。</div>
                    </e-collapse-item-m>
                    <e-collapse-item-m title="可控性" name="4">
                        <div>决策制定：提供关于操作的建议是可以接受的，但不要代替用户做决策；</div>
                        <div>可控的后果：用户应该获得自由操作的权利，包括取消、中止或终止当前操作。</div>
                    </e-collapse-item-m>
                </e-collapse-m>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">设置箭头样式</text>
            <div class="example-card">
                <e-collapse-m v-model="activeNames6" arrow-type="icon">
                    <e-collapse-item-m title="一致性" name="1">
                        <template #arrow="{ isActive }">
                            <span class="myspan">{{ isActive ? '收起' : '展开' }}</span>
                        </template>
                        <div>与现实生活保持一致：符合真实生活的过程和逻辑，并遵守用户习惯的语言和习惯；</div>
                        <div>在界面内保持一致性：所有元素都应该保持一致，如：设计风格、图标和文本、元素位置等。</div>
                    </e-collapse-item-m>
                    <e-collapse-item-m title="反馈" name="2">
                        <div>操作反馈：通过样式更新和交互效果使用户清晰感知其操作；</div>
                        <div>视觉反馈：通过更新或重新排列页面元素来反映当前状态。</div>
                    </e-collapse-item-m>
                    <e-collapse-item-m title="效率" name="3">
                        <div>简化流程：保持操作流程简单和直观；</div>
                        <div>明确和清晰：明确表达您的意图，以便用户能够迅速理解并做出决策；</div>
                        <div>易于识别：界面应该直截了当，帮助用户辨识，并让他们免于记忆和回忆。</div>
                    </e-collapse-item-m>
                    <e-collapse-item-m title="可控性" name="4">
                        <div>决策制定：提供关于操作的建议是可以接受的，但不要代替用户做决策；</div>
                        <div>可控的后果：用户应该获得自由操作的权利，包括取消、中止或终止当前操作。</div>
                    </e-collapse-item-m>
                </e-collapse-m>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">手风琴效果</text>
            <div class="example-card">
                <e-collapse-m v-model="activeNames7" accordion>
                    <e-collapse-item-m title="一致性" name="1">
                        <div>与现实生活保持一致：与现实生活的过程和逻辑一致，并符合用户习惯的语言和习惯；</div>
                        <div>在界面内保持一致性：所有元素都应保持一致，如设计风格、图标和文本、元素位置等。</div>
                    </e-collapse-item-m>
                    <e-collapse-item-m title="反馈" name="2">
                        <div>操作反馈：通过样式更新和交互效果使用户清晰地感知其操作；</div>
                        <div>视觉反馈：通过更新或重新排列页面元素来反映当前状态。</div>
                    </e-collapse-item-m>
                    <e-collapse-item-m title="效率" name="3">
                        <div>简化流程：保持操作流程简单和直观；</div>
                        <div>明确清晰：明确表达您的意图，以便用户能够快速理解并做出决策；</div>
                        <div>易于识别：界面应该直接，有助于用户识别，避免他们记忆和回想。</div>
                    </e-collapse-item-m>
                    <e-collapse-item-m title="可控性" name="4">
                        <div>决策制定：提供操作建议是可以接受的，但不要为用户做决策；</div>
                        <div>可控的后果：用户应该被授予自由操作的权利，包括取消、中止或终止当前操作。</div>
                    </e-collapse-item-m>
                </e-collapse-m>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">自定义面板标题</text>
            <div class="example-card">
                <e-collapse-m v-model="activeNames8">
                    <e-collapse-item-m name="1">
                        <template #title>
                            一致性
                            <e-icon-m class="header-icon">
                                <InfoFilled />
                            </e-icon-m>
                        </template>
                        <div>与现实生活保持一致：符合真实生活的过程和逻辑，并遵守用户习惯的语言和习惯；</div>
                        <div>在界面内保持一致性：所有元素都应该保持一致，如：设计风格、图标和文本、元素位置等。</div>
                    </e-collapse-item-m>
                    <e-collapse-item-m title="反馈" name="2">
                        <template #index>
                            <span class="index" style="color: red;">2</span>
                        </template>
                        <div>操作反馈：通过样式更新和交互效果使用户能够清晰地感知他们的操作；</div>
                        <div>视觉反馈：通过更新或重新排列页面元素来反映当前状态。</div>
                    </e-collapse-item-m>
                    <e-collapse-item-m title="效率" name="3">
                        <div>简化流程：保持操作流程简单和直观；</div>
                        <div>明确和清晰：明确表达您的意图，以便用户能够迅速理解并做出决策；</div>
                        <div>易于识别：界面应该直截了当，帮助用户辨识，避免他们记忆和回忆。</div>
                    </e-collapse-item-m>
                    <e-collapse-item-m title="可控性" name="4">
                        <div>决策制定：提供关于操作的建议是可以接受的，但不要代替用户做决策；</div>
                        <div>可控的后果：用户应该被赋予自由操作的权利，包括取消、中止或终止当前操作。</div>
                    </e-collapse-item-m>
                </e-collapse-m>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref, watch } from 'vue';
import { InfoFilled } from '@epoint-mfe/eui-icons';

const activeNames1 = ref(['1']);
const activeNames2 = ref(['1']);
const activeNames3 = ref(['1']);
const activeNames4 = ref(['1']);
const activeNames5 = ref(['1']);
const activeNames6 = ref(['1']);
const activeNames7 = ref(['1']);
const activeNames8 = ref(['1']);

const showNav = ref(true);
const itemTitle = ref('可编辑名称');
const textValue = ref('可编辑名称');
const showIndex = ref(true);

const handleChange = (val: string[]) => {
    console.log(val);
};

watch(activeNames7, (val) => {
    console.log('accordion v-model', val);
});
watch(activeNames1, (val) => {
    console.log('v-model', val);
});

</script>
<style lang="scss" scoped>
@import '../css/common.scss';

::v-deep .ep-input__input {
    background-color: #f5f5f5;
    padding: 3px 5px;
}
</style>
