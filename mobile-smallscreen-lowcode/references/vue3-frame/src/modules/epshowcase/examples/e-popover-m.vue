<template>
    <div class="van-content">
        <div class="example-group">
            <text class="cell-title">基本用法</text>
            <div class="example-card">
                <div class="example-content">
                    <div class="example-desc">点击触发</div>
                    <e-popover-m placement="right" title="标题" trigger="click" content="这是一段内容，这是一段内容，这是一段内容">
                        <template #reference>
                            <e-button-m>点击触发</e-button-m>
                        </template>
                    </e-popover-m>
                    
                    <div class="example-desc">长按触发</div>
                    <e-popover-m placement="right" title="标题" trigger="longpress" content="这是一段内容，这是一段内容，这是一段内容">
                        <template #reference>
                            <e-button-m>长按触发</e-button-m>
                        </template>
                    </e-popover-m>
                    
                    <div class="example-desc">手动触发</div>
                    <e-popover-m v-model:visible="visible1" placement="right" title="标题" trigger="manual"
                        content="这是一段内容，这是一段内容，这是一段内容">
                        <template #reference>
                            <e-button-m @click="manualClick">手动触发</e-button-m>
                        </template>
                    </e-popover-m>
                </div>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">丰富的内容</text>
            <div class="example-card">
                <div class="example-content">
                    <div class="example-desc">图片内容</div>
                    <e-popover-m placement="right" title="图片内容" trigger="click">
                        <template #reference>
                            <e-button-m>点击触发</e-button-m>
                        </template>
                        <div class="em-img-popover">
                            <img src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg" alt="" />
                        </div>
                    </e-popover-m>
                    
                    <div class="example-desc">图片按钮触发</div>
                    <e-popover-m placement="right" title="图片按钮" trigger="click">
                        <template #reference>
                            <div class="em-img-button">
                                <img src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg" alt="" />
                            </div>
                        </template>
                        <span>这是图片触发的内容</span>
                    </e-popover-m>
                </div>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">嵌套操作</text>
            <div class="example-card">
                <e-popover-m v-model:visible="visible" placement="right" trigger="click" :width="200">
                    <p>你确定要删除吗?</p>
                    <div style="text-align: left; margin-top: 10px;">
                        <e-button-m size="small" text @click="visible = false">取消</e-button-m>
                        <e-button-m size="small" type="primary" @click="visible = false">确认</e-button-m>
                    </div>
                    <template #reference>
                        <e-button-m type="danger">删除</e-button-m>
                    </template>
                </e-popover-m>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">自动关闭</text>
            <div class="example-card">
                <e-popover-m  v-model:visible="autoCloseVisible"  placement="top" trigger="click" :auto-close="3000" content="3秒后自动关闭">
                    <template #reference>
                        <e-button-m>自动关闭</e-button-m>
                    </template>
                </e-popover-m>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">延迟显示/隐藏</text>
            <div class="example-card">
                <e-popover-m placement="top" trigger="click" :show-after="500" :hide-after="300" content="显示延迟500ms，隐藏延迟300ms">
                    <template #reference>
                        <e-button-m>延迟触发</e-button-m>
                    </template>
                </e-popover-m>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">选项列表</text>
            <div class="example-card">
                <e-popover-m placement="top" trigger="click" :actions="actions" @select="popoverSelect">
                    <template #reference>
                        <e-button-m>选项列表</e-button-m>
                    </template>
                </e-popover-m>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
//================================简单示例================================
const visible1 = ref(false);
const manualClick = () => {
    console.log('manualClick');
    visible1.value = !visible1.value;
};
//================================简单示例================================
const visible = ref(false);

//================================选项列表================================
const actions = [
    { text: '选项一', icon: 'add-o' },
    { text: '选项二', icon: 'music-o',divider:true },
    { text: '选项三', icon: 'more-o',disabled:true,className:"em-action-item-demo" },
];
//弹出选项选择触发
const popoverSelect=(action:object, index: number)=>{
    console.log(action,index);

}
//================================选项列表================================


//================================自动关闭================================
const autoCloseVisible = ref(false);
//================================自动关闭================================


</script>

<style lang="scss" scoped>
@import '../css/common.scss';

.em-img-popover {
    height: 150px;

    img {
        width: 100%;
        height: 100%;
    }
}

.em-img-button {
    img {
        height: 50px;
        width: 50px;
        border-radius: 50%;
    }
}
</style>
