<template>
    <div class="van-content">
        <text class="cell-title">基础用法</text>
        <e-file-upload-m v-model:file-list="fileList" action="https://fe.epoint.com.cn/mock/752/eui-vue/uploadFile" />
        <text class="cell-title">单文件上传</text>
        <e-file-upload-m
            v-model:file-list="fileList2"
            action="https://fe.epoint.com.cn/mock/752/eui-vue/uploadFile"
            :num-limit="1"
        />
        <text class="cell-title">限制文件大小</text>
        <e-file-upload-m
            v-model:file-list="fileList3"
            action="https://fe.epoint.com.cn/mock/752/eui-vue/uploadFile"
            multiple
            :size-limit="1024"
        />
        <text>最大可上传文件大小为 1024KB</text>
        <text class="cell-title">分片上传</text>
        <e-file-upload-m
            v-model:file-list="fileList4"
            action="https://fe.epoint.com.cn/mock/752/eui-vue/uploadFile"
            chunk
            :chunk-size="1024"
        />
        <text class="cell-title">非分片模式下计算 MD5</text>
        <e-file-upload-m
            v-model:file-list="fileList5"
            action="https://fe.epoint.com.cn/mock/752/eui-vue/uploadFile"
            need-md5
        />
        <text class="cell-title">拖拽排序</text>
        <e-file-upload-m
            v-model:file-list="fileList6"
            action="https://fe.epoint.com.cn/mock/752/eui-vue/uploadFile"
            enable-sort
            :on-sort-change="handleSortChange"
        />
        <text class="cell-title">权限控制</text>
        <e-file-upload-m
            v-model:file-list="fileList7"
            action="https://fe.epoint.com.cn/mock/752/eui-vue/uploadFile"
            :enable-add="false"
            :enable-delete="true"
            :enable-download="false"
            :enable-preview="true"
            :resolve-preview-url="resolvePreviewUrl"
        />
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';

const fileList = ref([
    {
        name: '图片1.jpg',
        attachGuid: 'c8ecece4-0a99-46dc-b419-fb7050aab4c8',
        downloadUrl: 'https://picsum.photos/800/800/',
        uploadDate: '2023-10-27 18:17:31',
        size: 1392528
    },
    {
        name: '图片2.png',
        attachGuid: '19314fdd-be3b-42f4-ab7e-78c90b797b2b',
        downloadUrl: 'https://picsum.photos/800/800/',
        uploadDate: '2023-10-27 18:18:55',
        size: 79358
    }
]);

const fileList2 = ref([]);
const fileList3 = ref([]);
const fileList4 = ref([]);
const fileList5 = ref([]);

const fileList6 = ref([
    {
        name: '图片1.jpg',
        attachGuid: 'c8ecece4-0a99-46dc-b419-fb7050aab4c8',
        downloadUrl: 'https://picsum.photos/800/800/',
        uploadDate: '2023-10-27 18:17:31',
        size: 1392528
    },
    {
        name: '图片2.png',
        attachGuid: '19314fdd-be3b-42f4-ab7e-78c90b797b2b',
        downloadUrl: 'https://picsum.photos/800/800/',
        uploadDate: '2023-10-27 18:18:55',
        size: 79358
    }
]);

const handleSortChange = (files) => {
    console.log(files);
};

const fileList7 = ref([
    {
        name: '图片1.jpg',
        attachGuid: 'c8ecece4-0a99-46dc-b419-fb7050aab4c8',
        previewUrl: 'https://picsum.photos/800/800/',
        downloadUrl: 'https://picsum.photos/800/800/',
        uploadDate: '2023-10-27 18:17:31',
        size: 1392528
    },
    {
        name: '图片2.png',
        attachGuid: '19314fdd-be3b-42f4-ab7e-78c90b797b2b',
        previewUrl: 'https://picsum.photos/800/800/',
        downloadUrl: 'https://picsum.photos/800/800/',
        uploadDate: '2023-10-27 18:18:55',
        size: 79358
    }
]);
const resolvePreviewUrl = (file) => {
    return file.downloadUrl;
};
</script>
<style lang="scss" scoped>
@import '../css/common.scss';
</style>
