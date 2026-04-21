<template>
    <div class="container">
        <em-header title="Uploader 图片上传"></em-header>
        <div class="em-content">
            <h4 class="cell-title">基础用法</h4>
            <em-uploader :after-read="afterRead" v-model="fileList0" />

            <h4 class="cell-title">文件预览</h4>
            <em-uploader v-model="fileList" multiple accept="video" />

            <h4 class="cell-title">上传状态</h4>
            <em-uploader v-model="fileList2" :after-read="afterRead2" />

            <h4 class="cell-title">限制上传数量</h4>
            <em-uploader v-model="fileList3" multiple :max-count="2" />

            <h4 class="cell-title">限制上传大小</h4>
            <em-uploader multiple :max-size="14 * 1024" @oversize="onOversize" />

            <h4 class="cell-title">自定义上传样式</h4>
            <em-uploader v-model="fileList1">
                <em-button icon="plus" type="primary">上传文件</em-button>
            </em-uploader>

            <h4 class="cell-title">隐藏上传区域</h4>
            <em-uploader v-model="fileList" :show-upload="false"></em-uploader>

            <h4 class="cell-title">上传前置处理</h4>
            <em-uploader v-model="fileList6" :before-read="beforeRead" />

            <h4 class="cell-title">删除前置处理</h4>
            <em-uploader v-model="fileList7" :before-delete="beforeDel" />

            <h4 class="cell-title">禁用文件上传</h4>
            <em-uploader disabled />

            <h4 class="cell-title">自定义单个图片预览</h4>
            <em-uploader v-model="fileList5" :deletable="false" />
        </div>
        <em-toast ref="emToast"></em-toast>
    </div>
</template>

<script lang="ts">
export default {
    name: 'Uploader',
    data() {
        return {
            file: null,
            fileList0: [],
            fileList1: [],
            fileList: [
                { url: 'https://img.yzcdn.cn/vant/leaf.jpg' },
                // Uploader 根据文件后缀来判断是否为图片文件
                // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
                { url: 'https://img.yzcdn.cn/vant/leaf.jpg', isImage: true }
            ],
            fileList2: [
                {
                    url: 'https://img.yzcdn.cn/vant/leaf.jpg',
                    status: 'uploading',
                    message: '上传中...'
                },
                {
                    url: 'https://img.yzcdn.cn/vant/tree.jpg',
                    status: 'failed',
                    message: '上传失败!'
                }
            ],
            fileList3: [],
            fileList4: [{ url: 'https://img.yzcdn.cn/vant/leaf.jpg', name: '图片名称' }],
            fileList5: [
                { url: 'https://img01.yzcdn.cn/vant/leaf.jpg' },
                {
                    url: 'https://img01.yzcdn.cn/vant/sand.jpg',
                    deletable: true
                },
                {
                    url: 'https://img01.yzcdn.cn/vant/tree.jpg',
                    deletable: true,
                    imageFit: 'contain',
                    previewSize: 120
                }
            ],
            fileList6: [],
            fileList7: []
        };
    },
    methods: {
        afterRead(file) {
            // // 此时可以自行将文件上传至服务器
            console.log(file);
        },
        afterRead2(file) {
            file.status = 'uploading';
            file.message = '上传中...';

            setTimeout(() => {
                file.status = 'failed';
                file.message = '上传失败';
            }, 1000);
        },
        beforeDel(file) {
            Toast({ message: '文件路径为' + file.path });
        },
        onOversize(file) {
            console.log(file);
            Toast({ message: '文件大小不能超过 14kb' });
        },
        beforeRead(file) {
            console.log(file);
            if (file.size > 2 * 1024) {
                Toast({ message: '文件大小不能超过2 MB' });

                return false;
            }

            return true;
        },
        // 返回 Promise
        asyncBeforeRead(file) {
            return new Promise((resolve, reject) => {
                if (file.type !== 'image/jpeg') {
                    Toast({ message: '请上传 jpg 格式图片' });
                    reject(new Error('请上传 jpg 格式图片'));
                } else {
                    let img = new File(['foo'], 'bar.jpg', {
                        type: 'image/jpeg'
                    });

                    resolve(img);
                }
            });
        }
    },
    // #ifdef MP-WEIXIN || MP-QQ || MP-ALIPAY
    // 微信/支付宝小程序下的滚动事件,如不加,则在微信/支付宝环境下不可滚动
    onPageScroll() {}
    // #endif
};
</script>

<style scoped>
.em-uploader {
    padding-left: 10px;
}
.preview-cover {
    position: absolute;
    box-sizing: border-box;
    bottom: 0;
    left: 0;
    z-index: 99;
    width: 100%;
    height: 30%;
    padding: 4px;
    color: #fff;
    font-size: 12px;
    text-align: center;
    background: rgba(0, 0, 0, 0.3);
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
    color: rgba(69, 90, 100, .6);
    font-size: 14px;
    font-weight: 400;
}
</style>