<template>
    <div class="van-content">
        <div class="example-group">
            <text class="cell-title">基本使用</text>
            <div class="example-card">
                <div class="demo-image">
                    <div v-for="fit in fits" :key="fit" class="block">
                        <e-image-m style="width: 100px; height: 100px" :src="url" :fit="fit" />
                        <span class="demonstration">{{ fit }}</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">占位内容</text>
            <div class="example-card">
                <div class="demo-image__placeholder">
                    <div class="block">
                        <span class="demonstration">Default</span>
                        <e-image-m :src="src" />
                    </div>
                    <div class="block">
                        <span class="demonstration">Custom</span>
                        <e-image-m :src="src" >
                            <template #placeholder>
                                <div class="image-slot">
                                    Loading
                                    <span class="dot">...</span>
                                </div>
                            </template>
                        </e-image-m>
                    </div>
                </div>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">加载失败</text>
            <div class="example-card">
                <div class="demo-image__placeholder">
                    <div class="block">
                        <span class="demonstration">Default</span>
                        <e-image-m src="cross" />
                    </div>
                    <div class="block">
                        <span class="demonstration">Custom</span>
                        <e-image-m src="cross">
                            <template #error>
                                <div class="image-slot">
                                    <e-icon-m><Picture /></e-icon-m>
                                </div>
                            </template>
                        </e-image-m>
                    </div>
                </div>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">懒加载</text>
            <div class="example-card">
                <div class="demo-image__lazy">
                    <e-image-m v-for="url in srcList" :key="url" :src="url" lazy />
                </div>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">图像预览</text>
            <div class="example-card">
                <div class="demo-image__lazy">
                    <e-image-m
                        style="width: 100px; height: 100px"
                        :src="url"
                        :preview-src-list="srcList"
                        :initial-index="4"
                        fit="cover"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { Picture } from '@epoint-mfe/eui-icons';
const fits = ['fill', 'contain', 'cover', 'none'];
const src = 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg';
const url = 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg';
const srcList = [
    'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
    'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
    'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
    'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
    'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
    'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
    'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg'
];
</script>

<style scoped lang="scss">
@import '../css/common.scss';

.demo-image {
    display: flex;
    flex-flow: row wrap;
}

.demo-image .block {
    padding: 10px;
    text-align: center;
    display: block;
    box-sizing: border-box;
    vertical-align: top;
}

.demo-image .demonstration {
    display: block;
    color: #909399;
    font-size: 14px;
    margin-bottom: 20px;
}

.demo-image__placeholder .block {
    padding: 30px 0;
    text-align: center;
    display: inline-block;
    width: 49%;
    box-sizing: border-box;
    vertical-align: top;
}

.demo-image__placeholder .demonstration {
    display: block;
    color: #909399;
    font-size: 14px;
    margin-bottom: 20px;
}

.demo-image__lazy {
    padding: 0 20px;
}

.demo-image__placeholder.image-slot {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: #f5f7fa;
    color: #909399;
    font-size: 14px;
}

.demo-image__placeholder .dot {
    animation: dot 2s infinite steps(3, start);
    overflow: hidden;
}
</style>
