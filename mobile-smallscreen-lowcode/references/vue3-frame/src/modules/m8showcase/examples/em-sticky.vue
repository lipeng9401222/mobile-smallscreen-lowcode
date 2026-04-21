<template>
    <div class="em-container">
        <h4 class="cell-title">基础用法</h4>
        <em-sticky>
            <em-button type="primary" custom-style="margin-left: 15px">基础用法</em-button>
        </em-sticky>

        <h4 class="cell-title">吸顶距离</h4>
        <em-sticky :offset-top="50">
            <em-button type="info" custom-style="margin-left: 115px">吸顶距离</em-button>
        </em-sticky>

        <h4 class="cell-title">指定容器</h4>
        <div :id="id" style="height: 150px; background-color: #fff">
            <em-sticky ref="emSticky" :container="container">
                <em-button type="warning" custom-style="margin-left: 215px;">指定容器</em-button>
            </em-sticky>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: 'Sticky',
    data() {
        return {
            id: 'container-id',
            container: ''
        };
    },
    methods: {
        getContainer(){
            if (this.container) {
                this.$refs.emSticky.releaseFunc(this.container);
            }
            let selector = `#${this.id}`;

            this.container = this.$refs.emSticky.wrapFunc(() => {
                let c;

                // #ifndef MP-ALIPAY
                c = uni.createSelectorQuery().in(this).select(selector);
                // #endif
                // #ifdef MP-ALIPAY
                c = uni.createSelectorQuery().select(selector);
                // #endif

                return c;
            });
        }
    },
    mounted(){
        setTimeout(() => {
            this.getContainer();
        }, 500);
    },
    destroy(){
        if (this.container) {
            this.$refs.emSticky.releaseFunc(this.container);
        }
    },
    // #ifdef MP-WEIXIN || MP-QQ || MP-ALIPAY
    // 微信/支付宝小程序下的滚动事件,如不加,则在微信/支付宝环境下不可滚动
    onPageScroll() {}
    // #endif
};
</script>

<style lang="scss" scoped>
.em-container {
    height: 200vh;
    background: #f5f6f7;
}

.em-button {
    margin-left: 16px;
}

.cell-title:first-child {
    padding: 11px;
    margin: 0;
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