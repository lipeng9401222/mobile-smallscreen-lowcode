<template>
    <div class="van-content">
        <div class="example-group">
            <text class="cell-title">基本用法</text>
            <div class="example-card">
                <e-upload-m
                    ref="upload1"
                    v-model:file-list="fileList"
                    class="upload-demo"
                    action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
                    multiple
                    :on-preview="handlePreview"
                    :on-remove="handleRemove"
                    :before-remove="beforeRemove"
                    :limit="3"
                    :on-exceed="handleExceed"
                >
                    <e-button-m type="primary">Click to upload</e-button-m>
                    <template #tip>
                        <div class="ep-upload__tip">这里是对上传文件的提示说明文本，例如格式、大小等</div>
                    </template>
                </e-upload-m>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">覆盖先前文件</text>
            <div class="example-card">
                <e-upload-m
                    ref="upload5"
                    class="upload-demo"
                    action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
                    :limit="1"
                    :on-exceed="handleExceed2"
                    :auto-upload="false"
                >
                    <template #trigger>
                        <e-button-m type="primary">select file</e-button-m>
                    </template>
                    <e-button-m class="ml-3" type="success" @click="submitUpload2">upload to server</e-button-m>
                    <template #tip>
                        <div class="ep-upload__tip text-red">limit 1 file, new file will cover the old file</div>
                    </template>
                </e-upload-m>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">用户头像</text>
            <div class="example-card">
                <e-upload-m
                    class="avatar-uploader"
                    action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess"
                    :before-upload="beforeAvatarUpload"
                >
                    <img v-if="imageUrl" :src="imageUrl" class="avatar" />
                </e-upload-m>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">照片墙</text>
            <div class="example-card">
                <e-upload-m
                    v-model:file-list="fileList"
                    action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
                    list-type="card"
                    :on-preview="handlePreview"
                    :on-remove="handleRemove"
                ></e-upload-m>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">自定义缩略图</text>
            <div class="example-card">
                <e-upload-m action="#" :auto-upload="false">
                    <template #file="{ file }">
                        <img class="ep-upload-list__item-thumbnail" :src="file.url" @click="handleShowTop(file)" />
                    </template>
                </e-upload-m>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">带缩略图的文件列表</text>
            <div class="example-card">
                <e-upload-m
                    ref="upload2"
                    v-model:file-list="fileList"
                    class="upload-demo"
                    action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
                    :on-preview="handlePreview"
                    :on-remove="handleRemove"
                    list-type="vertical"
                >
                    <e-button-m type="primary">Click to upload</e-button-m>
                    <template #tip>
                        <div class="ep-upload__tip">jpg/png files with a size less than 500kb</div>
                    </template>
                </e-upload-m>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">文件列表控制</text>
            <div class="example-card">
                <e-upload-m
                    ref="upload3"
                    v-model:file-list="fileList"
                    class="upload-demo"
                    action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
                    :on-change="handleChange"
                >
                    <e-button-m type="primary">Click to upload</e-button-m>
                    <template #tip>
                        <div class="ep-upload__tip">jpg/png files with a size less than 500kb</div>
                    </template>
                </e-upload-m>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">手动上传</text>
            <div class="example-card">
                <e-upload-m
                    ref="upload4"
                    class="upload-demo"
                    action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
                    :auto-upload="false"
                >
                    <template #trigger>
                        <e-button-m type="primary">select file</e-button-m>
                    </template>
                    <e-button-m class="ml-3" type="success" @click="submitUpload">upload to server</e-button-m>
                    <template #tip>
                        <div class="ep-upload__tip">jpg/png files with a size less than 500kb</div>
                    </template>
                </e-upload-m>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">排序</text>
            <div class="example-card">
                <e-upload-m
                    v-model:file-list="fileList"
                    action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
                    enable-sort
                    :on-sort-change="handleSortChange"
                ></e-upload-m>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">权限控制</text>
            <div class="example-card">
                <e-upload-m
                    action="#"
                    v-model:file-list="fileList"
                    :enable-add="true"
                    :enable-download="true"
                    :enable-delete="true"
                    :enable-preview="false"
                >
                    <template #file="{ file, enableDelete, enableDownload, enablePreview }">
                        <img
                            class="ep-upload-list__item-thumbnail"
                            :src="file.url"
                            @click="handleShowTop(file, enablePreview, enableDownload, enableDelete)"
                        />
                    </template>
                </e-upload-m>
            </div>
        </div>

        <em-dialog ref="emDialogRef"></em-dialog>
        <em-image-preview ref="emImagePreviewRef"></em-image-preview>
        <em-actionsheet
            @close="showTop = !showTop"
            v-model="showTop"
            :actions="actionsTop"
            @select="onSelectTop"
            close-on-click-action
        />
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import type { UploadProps, UploadFile, UploadFiles } from '@epoint-mfe/eui-components';
import { genFileId } from '@epoint-mfe/eui-components';

const uploadFile = ref<UploadFile>();
const upload1 = ref<any>();
const upload2 = ref<any>();
const upload3 = ref<any>();
const upload4 = ref<any>();
const upload5 = ref<any>();

const fileList = ref<UploadFiles>([
    {
        name: 'food.jpeg',
        url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
    },
    {
        name: 'food2.jpeg',
        url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
    }
]);

const handleRemove = (file: UploadFile, fileList: UploadFiles) => {
    console.log(file, fileList);
};

const handlePreview = (file: UploadFile) => {
    console.log(file);
};

const handleExceed = (files: File[], fileList: UploadFiles) => {
    ejs.ui.toast(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
};

const handleExceed2 = (files: UploadFile[], fileList: UploadFiles) => {
    upload5.value.clearFiles();
    const file = files[0];
    file.uid = genFileId();
    upload5.value!.handleStart(file);
};

const beforeRemove = (file: UploadFile, fileList: UploadFiles) => {
    return ejs.ui.confirm({
        title: '确认删除',
        message: `确定移除 ${file.name}？`
    });
};

const submitUpload = () => {
    upload4.value!.submit();
};

const submitUpload2 = () => {
    upload5.value!.submit();
};

const handleChange = (file: UploadFile, _fileList: UploadFiles) => {
    fileList.value = _fileList;
};

const imageUrl = ref('');
const handleAvatarSuccess: UploadProps['onSuccess'] = (response, file) => {
    imageUrl.value = URL.createObjectURL(file.file);
};

const beforeAvatarUpload: UploadProps['beforeUpload'] = (rawFile) => {
    if (rawFile.type !== 'image/jpeg') {
        ejs.ui.toast('Avatar picture must be JPG format!');
        return false;
    } else if (rawFile.size / 1024 / 1024 > 2) {
        ejs.ui.toast('Avatar picture size can not exceed 2MB!');
        return false;
    }
    return true;
};

const handleShowTop = (file: UploadFile, enablePreview?: boolean, enableDownload?: boolean, enableDelete?: boolean) => {
    showTop.value = true;
    currentFile.value = file;
    actionsTop.value = [];
    if (enablePreview !== false) {
        actionsTop.value.push({ name: '预览', key: 'preview' });
    }
    if (enableDownload !== false) {
        actionsTop.value.push({ name: '下载', key: 'download' });
    }
    if (enableDelete !== false) {
        actionsTop.value.push({ name: '删除', key: 'delete' });
    }
};

const showTop = ref(false);
const currentFile = ref<UploadFile>();
const actionsTop = ref<any[]>([]);

const onSelectTop = (action) => {
    if (action.key === 'preview') {
        if (currentFile.value) {
            emImagePreviewRef.value.show([currentFile.value.url]);
        }
    } else if (action.key === 'download') {
        ejs.ui.toast('下载功能');
    } else if (action.key === 'delete') {
        ejs.ui.toast('删除功能');
    }
};

const handleSortChange = ({ file, newIndex, oldIndex }) => {
    console.log('排序变化:', { file, newIndex, oldIndex });
};

const emDialogRef = ref();
const emImagePreviewRef = ref();
</script>
<style lang="scss" scoped>
@import '../css/common.scss';

.avatar-uploader .avatar {
    width: 178px;
    height: 178px;
    display: block;
}

.text-red {
    color: red;
}

.ml-3 {
    margin-left: 12px;
}
</style>
