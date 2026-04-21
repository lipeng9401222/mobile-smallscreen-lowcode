<template>
    <div class="van-content">
        <div class="example-group">
            <text class="cell-title">基本用法</text>
            <div class="example-card">
                <div class="example-content">
                    <e-steps-m :active="active" finish-status="success">
                        <e-step-m title="Step 1" />
                        <e-step-m title="Step 2" />
                        <e-step-m title="Step 3" />
                    </e-steps-m>
                    <e-button-m style="margin-top: 12px" @click="next">Next step</e-button-m>
                </div>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">包含状态的步骤条</text>
            <div class="example-card">
                <e-steps-m :space="200" :active="1" finish-status="success">
                    <e-step-m title="Done" />
                    <e-step-m title="Processing" />
                    <e-step-m title="Step 3" />
                </e-steps-m>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">居中</text>
            <div class="example-card">
                <e-steps-m :active="2" align-center>
                    <e-step-m title="Step 1" description="Some description" />
                    <e-step-m title="Step 2" description="Some description" />
                    <e-step-m title="Step 3" description="Some description" />
                    <e-step-m title="Step 4" description="Some description" />
                </e-steps-m>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">带有描述的步骤条</text>
            <div class="example-card">
                <e-steps-m :active="1">
                    <e-step-m title="Step 1" description="Some description" />
                    <e-step-m title="Step 2" description="Some description" />
                    <e-step-m title="Step 3" description="Some description" />
                </e-steps-m>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">带有图标的步骤条</text>
            <div class="example-card">
                <e-steps-m :active="1">
                    <e-step-m title="Step 1" icon="Edit" />
                    <e-step-m title="Step 2" icon="Upload" />
                    <e-step-m title="Step 3" icon="Picture" />
                </e-steps-m>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">竖直步骤条</text>
            <div class="example-card">
                <div style="height: 300px">
                    <e-steps-m direction="vertical" :active="1">
                        <e-step-m title="Step 1" />
                        <e-step-m title="Step 2" />
                        <e-step-m title="Step 3" />
                    </e-steps-m>
                </div>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">简单步骤条</text>
            <div class="example-card">
                <div class="example-content">
                    <e-steps-m :active="1" simple>
                        <e-step-m title="Step 1" icon="Edit" />
                        <e-step-m title="Step 2" icon="UploadFilled" />
                        <e-step-m title="Step 3" icon="Picture" />
                    </e-steps-m>

                    <e-steps-m :active="1" finish-status="success" simple style="margin-top: 20px">
                        <e-step-m title="Step 1" />
                        <e-step-m title="Step 2" />
                        <e-step-m title="Step 3" />
                    </e-steps-m>
                </div>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">节点为小圆点的步骤条</text>
            <div class="example-card">
                <div class="example-content">
                    <div class="steps-container-item">
                        <e-steps-m :active="active" finish-status="success" dot align-center>
                            <e-step-m title="Step 1" description="This is a description" />
                            <e-step-m title="Step 2" description="This is a description" />
                            <e-step-m title="Step 3" description="This is a description" />
                        </e-steps-m>
                    </div>
                    <div class="steps-container-item-vertical">
                        <e-steps-m
                            :active="active"
                            finish-status="success"
                            dot
                            direction="vertical"
                            style="height: 300px"
                            align-center
                        >
                            <e-step-m title="Step 1" status="success" description="This is a description" />
                            <e-step-m title="Step 2" status="error" description="This is a description" />
                            <e-step-m title="Step 3" status="wait" description="This is a description" />
                        </e-steps-m>
                    </div>
                    <e-button-m style="margin-top: 12px" @click="next">Next step</e-button-m>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';

const active = ref(0);

const next = () => {
    if (active.value++ > 2) active.value = 0;
};
</script>
<style lang="scss" scoped>
@import '../css/common.scss';

// 小圆点示例
.steps-container-item {
  margin-bottom: 40px;
}

.steps-container-item-vertical {
  display: flex;
  gap: 100px;
  justify-content: center;
  align-items: center;
}
</style>
