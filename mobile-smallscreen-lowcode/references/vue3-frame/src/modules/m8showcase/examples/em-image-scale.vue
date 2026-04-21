<template>
    <div class="container">
        <!-- 基础图片裁剪 -->
        <h4 class="cell-title">基础用法</h4>
        <image :src="url1" v-if="url1" mode="widthFix"></image>
        <em-image-scale
            v-if="show1"
            :image-url="imageUrl1"
            @success="
                url1 = $event.url;
                show1 = false;
            "
            @cancel="show1 = false"
        />
        <em-button @click="show1 = true">基础图片裁剪</em-button>

        <!-- 带功能图片裁剪 -->
        <h4 class="cell-title">带功能用法</h4>
        <image :src="url2" v-if="url2" mode="widthFix"></image>
        <em-image-scale
            v-if="show2"
            :isLockWidth="isLockWidth"
            :isLockHeight="isLockHeight"
            :isLockRatio="isLockRatio"
            :isLimitMove="isLimitMove"
            :isDisableScale="isDisableScale"
            :isDisableRotate="isDisableRotate"
            :isShowCancelBtn="isShowCancelBtn"
            :isShowPhotoBtn="isShowPhotoBtn"
            :isShowRotateBtn="isShowRotateBtn"
            :isShowConfirmBtn="isShowConfirmBtn"
            :image-url="imageUrl2"
            @success="
                url2 = $event.url;
                show2 = false;
            "
            @cancel="show2 = false"
        >
            <!-- 四个基本按钮插槽 -->
            <template #cancel>
                <em-button>取消</em-button>
            </template>
            <template #photo>
                <em-button>选择图片</em-button>
            </template>
            <template #rotate>
                <em-button>旋转</em-button>
            </template>
            <template #confirm>
                <em-button>确定</em-button>
            </template>
            <!-- 默认插槽 -->
            <em-row class="tools">
                <em-col span="12">
                    显示取消按钮
                    <em-switch v-model="isShowCancelBtn" @change="(value) => isShowCancelBtn = value" />
                </em-col>
                <em-col span="12">
                    显示选择图片按钮
                    <em-switch v-model="isShowPhotoBtn" @change="(value) => isShowPhotoBtn = value" />
                </em-col>
                <em-col span="12">
                    显示旋转按钮
                    <em-switch v-model="isShowRotateBtn" @change="(value) => isShowRotateBtn = value" />
                </em-col>
                <em-col span="12">
                    显示确定按钮
                    <em-switch v-model="isShowConfirmBtn" @change="(value) => isShowConfirmBtn = value" />
                </em-col>
                <em-col span="12">
                    锁定裁剪框宽度
                    <em-switch v-model="isLockWidth" @change="(value) => isLockWidth = value" />
                </em-col>
                <em-col span="12">
                    锁定裁剪框高度
                    <em-switch v-model="isLockHeight" @change="(value) => isLockHeight = value" />
                </em-col>
                <em-col span="12">
                    锁定裁剪框比例
                    <em-switch v-model="isLockRatio" @change="(value) => isLockRatio = value" />
                </em-col>
                <em-col span="12">
                    限制移动范围
                    <em-switch v-model="isLimitMove" @change="(value) => isLimitMove = value" />
                </em-col>
                <em-col span="12">
                    禁止缩放
                    <em-switch v-model="isDisableScale" @change="(value) => isDisableScale = value" />
                </em-col>
                <em-col span="12">
                    禁止旋转
                    <em-switch v-model="isDisableRotate" @change="(value) => isDisableRotate = value" />
                </em-col>
            </em-row>
        </em-image-scale>
        <em-button @click="show2 = true">带功能图片裁剪</em-button>
    </div>
</template>

<script lang="ts">
export default {
    name: 'Imagescale',
    data() {
        return {
            show1: false,
            show2: false,
            url1: '',
            imageUrl1: '/static/logo.jpg',
            url2: '',
            imageUrl2: '/static/logo.jpg',
            isLockWidth: false,
            isLockHeight: false,
            isLockRatio: true,
            isLimitMove: false,
            isDisableScale: false,
            isDisableRotate: false,
            isShowCancelBtn: true,
            isShowPhotoBtn: true,
            isShowRotateBtn: true,
            isShowConfirmBtn: true
        };
    }
};
</script>

<style scoped>
.container {
    padding: 11px 15px;
}
</style>
<style>
/* custom style */
.cell-title:first-child {
    padding-top: 10px;
}

.cell-title {
    padding-top: 30px;
    padding-bottom: 10px;
    padding-left: 10px;
    color: rgba(69, 90, 100, 0.6);
    font-size: 14px;
    font-weight: 400;
}
</style>
