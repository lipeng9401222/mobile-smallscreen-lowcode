<template>
    <div class="container">
        <div class="van-content">
            <h4 class="cell-title">基础用法</h4>
            <em-gallery :data="[1, 2, 3, 4]" :autoplay="3000"></em-gallery>
            <h4 class="cell-title">图片轮播</h4>
            <em-gallery :data="data"></em-gallery>
            <h4 class="cell-title">纵向滚动</h4>
            <em-gallery :data="[1, 2, 3, 4]" :vertical="true" :height="150"></em-gallery>
            <h4 class="cell-title">设置控件大小</h4>
            <em-gallery :data="[1, 2, 3, 4]" :width="300"></em-gallery>
            <h4 class="cell-title">自定义指示器</h4>
            <em-gallery :data="[1, 2, 3, 4]" :show-self-indicator="true" @change="onChange">
                <div class="custom-indicator" slot="indicator">{{ current + 1 }}/4</div>
            </em-gallery>
            <h4 class="cell-title">初始位置索引值</h4>
            <em-gallery :data="[1, 2, 3, 4]" :initialSwipe="2" :indicatorColor="'red'" ></em-gallery>
            <h4 class="cell-title">取消无限循环</h4>
            <em-gallery :data="[1, 2, 3, 4]" :loop="false"></em-gallery>
            <h4 class="cell-title">禁用手势滑动</h4>
            <em-gallery :data="[1, 2, 3, 4]" :touchable="false"></em-gallery>
            <h4 class="cell-title">前后边距</h4>
            <em-gallery :data="[1, 2, 3, 4]" previous-margin="20px" next-margin="20px" :autoplay="5000000"></em-gallery>
            <h4 class="cell-title">事件方法</h4>
            <em-gallery :data="[1, 2, 3, 4]" :touchable="false" ref="gallery" @click="onClick"></em-gallery>
            <em-button @click="onPrev">上一页</em-button>
            <em-button @click="onNext">下一页</em-button>
            <em-button @click="onSkip">跳转到第3页</em-button>
        </div>
        <em-toast ref="emToast"></em-toast>
    </div>
</template>
<script>
export default {
    name: 'GalleryDemo',
    data() {
        return {
            data: [
                {
                    guid: '1',
                    pic: 'https://img.yzcdn.cn/vant/cat.jpeg',
                    title: '标题1'
                },
                {
                    guid: '2',
                    pic: 'https://img.yzcdn.cn/vant/cat.jpeg',
                    title: '标题2'
                },
                {
                    guid: '3',
                    pic: 'https://img.yzcdn.cn/vant/cat.jpeg',
                    title: '标题3'
                },
                {
                    guid: '4',
                    pic: 'https://img.yzcdn.cn/vant/cat.jpeg',
                    title: '标题4'
                }
            ],
            current: 0
        };
    },
    methods: {
        onChange(index) {
            this.current = index;
        },
        // 上一页
        onPrev() {
            this.$refs.gallery.prev();
        },
        // 下一页
        onNext() {
            this.$refs.gallery.next();
        },
        // 跳转
        onSkip() {
            this.$refs.gallery.swipeTo(2, {immediate: true});
        },
        // 触发点击事件
        onClick(value, index) {
            Toast(`触发点击事件，value:${value},index:${index}`);
        }
    }
};
</script>
<style lang="scss" scoped>
.custom-indicator {
    position: absolute;
    right: 1.333vw;
    bottom: 1.333vw;
    padding: .533vw 1.333vw;
    font-size: 3.2vw;
    color: #fff;
    background: rgba(0,0,0,.1);
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