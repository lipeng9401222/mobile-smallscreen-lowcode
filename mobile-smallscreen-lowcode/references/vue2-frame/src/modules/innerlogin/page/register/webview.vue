<template>
    <div class="content">
        <web-view :webview-styles="webviewStyles" :src="src"></web-view>
    </div>
</template>

<script>
export default {
    // 定义用到的数据，在template中使用{{ }}包裹，自动实现绑定
    data() {
        return {
            webviewStyles: {
                progress: {
                    color: '#FF3333'
                }
            },
            src: ''
        };
    },
    onLoad(opt) {
        this.src = decodeURIComponent(opt.src);
    }
};
</script>