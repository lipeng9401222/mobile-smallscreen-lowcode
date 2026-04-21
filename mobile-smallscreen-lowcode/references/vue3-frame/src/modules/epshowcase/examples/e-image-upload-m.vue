<template>
    <div class="van-content">
        <text class="cell-title">基础用法</text>
        <e-image-upload-m
            v-model:image-list="imageList"
            action="https://fe.epoint.com.cn/mock/752/eui-vue/uploadFile"
            :data="data"
        />

        <text class="cell-title">自定义图片显示大小</text>
        <e-image-upload-m
            v-model:image-list="imageList1"
            action="https://fe.epoint.com.cn/mock/752/eui-vue/uploadFile"
            :image-size="100"
        />
        <div style="margin: 20px 0" />
        <e-image-upload-m
            v-model:image-list="imageList2"
            action="https://fe.epoint.com.cn/mock/752/eui-vue/uploadFile"
            :image-size="150"
        />

        <text class="cell-title">单图上传</text>
        <e-image-upload-m
            v-model:image-list="imageList3"
            action="https://fe.epoint.com.cn/mock/752/eui-vue/uploadFile"
            :num-limit="1"
        />

        <text class="cell-title">限制图片大小</text>
        <e-image-upload-m
            v-model:image-list="imageList4"
            action="https://fe.epoint.com.cn/mock/752/eui-vue/uploadFile"
            multiple
            :size-limit="1024"
        />
        <text>最大可上传图片大小为 1024KB</text>

        <text class="cell-title">自定义验证</text>
        <e-image-upload-m
            v-model:image-list="imageList5"
            action="https://fe.epoint.com.cn/mock/752/eui-vue/uploadFile"
            :on-validate="handleValidate"
        />

        <text class="cell-title">操作按钮</text>
        <e-image-upload-m
            v-model:image-list="imageList6"
            action="https://fe.epoint.com.cn/mock/752/eui-vue/uploadFile"
            :enable-preview="false"
            :before-remove="handleBeforeRemove"
            :on-remove="handleRemove"
        />
        <em-dialog ref="emDialogRef"></em-dialog>

        <text class="cell-title">拖拽排序</text>
        <e-image-upload-m
            v-model:image-list="imageList7"
            action="https://fe.epoint.com.cn/mock/752/eui-vue/uploadFile"
            enable-sort
            :on-sort-change="handleSortChange"
        />

        <text class="cell-title">权限控制</text>
        <e-image-upload-m
            v-model:image-list="imageList8"
            action="https://fe.epoint.com.cn/mock/752/eui-vue/uploadFile"
            :enable-add="false"
            :enable-delete="false"
            :enable-download="true"
            :enable-preview="true"
            :data="data"
        />
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import { type UploadImage } from '@epoint-mfe/eui-components';

const imageList = ref([
    {
        name: '图片1',
        attachGuid: '1',
        downloadUrl: `https://picsum.photos/800/800/?random=${Math.trunc(Math.random() * 100000)}`
    },
    {
        name: '图片2',
        attachGuid: '2',
        downloadUrl: `https://picsum.photos/800/800/?random=${Math.trunc(Math.random() * 100000)}`
    }
]);

const data = ref({
    custom: 'customData'
});

const imageList1 = ref([
    {
        name: '图片1',
        attachGuid: '1',
        downloadUrl: `https://picsum.photos/800/800/?random=${Math.trunc(Math.random() * 100000)}`
    },
    {
        name: '图片2',
        attachGuid: '2',
        downloadUrl: `https://picsum.photos/800/800/?random=${Math.trunc(Math.random() * 100000)}`
    }
]);

const imageList2 = ref([
    {
        name: '图片3',
        attachGuid: '3',
        downloadUrl: `https://picsum.photos/800/800/?random=${Math.trunc(Math.random() * 100000)}`
    },
    {
        name: '图片4',
        attachGuid: '4',
        downloadUrl: `https://picsum.photos/800/800/?random=${Math.trunc(Math.random() * 100000)}`
    }
]);

const imageList3 = ref([]);

const imageList4 = ref([]);

const imageList5 = ref([]);

const handleValidate = (file) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const isValidate = file.size < 102400;
            if (!isValidate) {
                ejs.ui.toast('验证失败，文件大小不能超过 100KB！');
            }
            resolve(isValidate);
        }, 100);
    });
};

const imageList6 = ref([
    {
        name: '图片1',
        attachGuid: '1',
        downloadUrl: `https://picsum.photos/800/800/?random=${Math.trunc(Math.random() * 100000)}`
    },
    {
        name: '图片2',
        attachGuid: '2',
        downloadUrl: `https://picsum.photos/800/800/?random=${Math.trunc(Math.random() * 100000)}`
    }
]);
const emDialogRef = ref(null);

const handleBeforeRemove = (file: UploadImage, data: Record<string, any>) => {
    return new Promise((resolve) => {
        Dialog.confirm({
            title: '删除提醒',
            message: `确定移除${file.name}？`
        })
            .then(() => {
                // 发送删除请求
                setTimeout(() => {
                    console.log('删除图片请求', data);
                    resolve(true);
                });
            })
            .catch(() => {
                resolve(false);
            });
    });
};
const handleRemove = (file: UploadImage) => {
    console.log('删除成功', file);
};

const imageList7 = ref([
    {
        name: '图片1',
        attachGuid: '1',
        downloadUrl: `https://picsum.photos/800/800/?random=${Math.trunc(Math.random() * 100000)}`
    },
    {
        name: '图片2',
        attachGuid: '2',
        downloadUrl: `https://picsum.photos/800/800/?random=${Math.trunc(Math.random() * 100000)}`
    }
]);

const handleSortChange = (images) => {
    console.log(images);
};

const imageList8 = ref([
    {
        name: '图片1',
        attachGuid: '1',
        downloadUrl: `https://picsum.photos/800/800/?random=${Math.trunc(Math.random() * 100000)}`
    },
    {
        name: '图片2',
        attachGuid: '2',
        downloadUrl: `https://picsum.photos/800/800/?random=${Math.trunc(Math.random() * 100000)}`
    }
]);
</script>
<style lang="scss" scoped>
@import '../css/common.scss';
</style>
