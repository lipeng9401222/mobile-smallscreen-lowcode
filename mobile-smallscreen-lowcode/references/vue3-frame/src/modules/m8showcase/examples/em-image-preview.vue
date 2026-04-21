<template>
    <div class="container">
        <div class="van-content">
            <h4 class="cell-title" @touchstart="showMessage('touchstart')" @click="showMessage('click')">基础用法</h4>
            <em-button
                type="primary"
                @click="onShowImg(['https://img.yzcdn.cn/vant/apple-1.jpg', 'https://img.yzcdn.cn/vant/apple-2.jpg'])"
            >
                预览图片
            </em-button>

            <h4 class="cell-title">指定初始位置</h4>
            <em-button
                type="primary"
                @click="
                    onShowImg({
                        images: ['https://img.yzcdn.cn/vant/apple-1.jpg', 'https://img.yzcdn.cn/vant/apple-2.jpg', 'https://picsum.photos/100/300', 'https://picsum.photos/300/100'],
                        startPosition: 2
                    })
                "
            >
                指定初始位置
            </em-button>

            <h4 class="cell-title">展示关闭按钮</h4>
            <em-button
                type="primary"
                @click="
                    onShowImg({
                        images: ['https://img.yzcdn.cn/vant/apple-1.jpg', 'https://img.yzcdn.cn/vant/apple-2.jpg'],
                        closeable: true,
                        onClose: onClose
                    })
                "
            >
                展示关闭按钮
            </em-button>

            <h4 class="cell-title">异步关闭</h4>
            <em-button
                type="primary"
                @click="
                    onShowImg2({
                        images: ['https://img.yzcdn.cn/vant/apple-1.jpg', 'https://img.yzcdn.cn/vant/apple-2.jpg'],
                        asyncClose: true
                    })
                "
            >
                异步关闭
            </em-button>
            
            <em-image-preview ref="emImagePreview" />

            <h4 class="cell-title">组件调用</h4>
            <em-button type="primary" @click="show = true">组件调用</em-button>

            <em-image-preview v-model="show" :images="images" @change="onChange" @close="onClose">
                <template v-slot:index>第{{ index }}页</template>
            </em-image-preview>

        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: 'ImagePreview',
    data() {
        return {
            show: false,
            index: 0,
            images: ['https://img.yzcdn.cn/vant/apple-1.jpg', 'https://img.yzcdn.cn/vant/apple-2.jpg']
        };
    },
    methods: {
        showMessage(msg){
            console.log(msg);
        },
        onShowImg(option) {
            ImagePreview(option);
        },
        onShowImg2(option) {
            const instance = ImagePreview(option);

            setTimeout(() => {
                instance.close();
            }, 1000);
        },
        onChange(index) {
            this.index = index;
        },
        onClose(opt) {
            console.log(opt);
        }
    }
};
</script>

<style scoped>
.van-content {
    padding-left: 10px;
    padding-right: 10px;
}

.van-content img {
    width: 100%;
    margin-bottom: 5px;
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