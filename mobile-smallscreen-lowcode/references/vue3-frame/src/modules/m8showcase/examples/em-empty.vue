<template>
    <div class="container">
        <!-- #ifdef APP-PLUS -->
        <scroller class="scroller">
            <!-- #endif -->
            <div class="van-content">
                <text class="cell-title">基础用法</text>
                <em-empty description="描述文字" />

                <text class="cell-title">图片类型</text>
                <em-tabs v-model="active">
                    <em-tab title="通用错误">
                        <em-empty image="error" description="描述文字" />
                    </em-tab>
                    <em-tab title="网络错误">
                        <em-empty image="network" description="描述文字" />
                    </em-tab>
                    <em-tab title="搜索提示">
                        <em-empty image="search" description="描述文字" />
                    </em-tab>
                </em-tabs>

                <text class="cell-title">基座风格</text>
                <em-tabs v-model="active1">
                    <em-tab title="通用错误">
                        <em-empty image="basic-error" basic description="发生错误" />
                    </em-tab>
                    <em-tab title="网络错误">
                        <em-empty image="basic-network" basic description="网络异常" />
                    </em-tab>
                    <em-tab title="搜索提示">
                        <em-empty image="basic-search" basic description="搜索内容为空" />
                    </em-tab>
                    <em-tab title="其他提示" class="clearfix">
                        <em-row v-for="(v, i) in factIcon" :key="i">
                            <em-col :span="6" v-for="(image, k) in v" :key="k">
                                <em-empty :image="image" image-size="100px" :description="image" />
                            </em-col>
                        </em-row>
                    </em-tab>
                </em-tabs>

                <text class="cell-title">自定义图片</text>
                <em-empty
                    class="custom-image"
                    image="https://img.yzcdn.cn/vant/custom-empty-image.png"
                    description="描述文字"
                />

                <text class="cell-title">底部内容</text>
                <em-empty description="描述文字">
                    <em-button round type="danger" custom-class="bottom-button">按钮</em-button>
                </em-empty>
            </div>
            <!-- #ifdef APP-PLUS -->
        </scroller>
        <!-- #endif -->
    </div>
</template>

<script lang="ts">
export default {
    name: 'EmptyDemo',
    data() {
        return {
            active: 0,
            active1: 0,
            factIcon: [
                ['todo', 'basic-search', 'schedule', 'notice'],
                ['basic-network', 'minimessage', 'message', 'mail'],
                ['logagent', 'leave', 'instructions', 'group'],
                ['basic-error', 'document', 'basic-default', 'contact'],
                ['announcement']
            ]
        };
    }
};
</script>

<style scoped>
/* .custom-image .em-empty__image {
    width: 90px;
    height: 90px;
} */
/* #ifndef APP-PLUS */
::v-deep .bottom-button {
    width: 160px;
    height: 40px;
}
/* #endif */

/* #ifdef APP-PLUS */
.scroller {
    height: 700px;
}
/* #endif */
</style>
<style>
/* custom style */
.cell-title:first-child {
    padding-top: 10px;
}

.cell-title {
    /* #ifndef APP-PLUS */
    display: block;
    /* #endif */
    padding-top: 30px;
    padding-bottom: 10px;
    padding-left: 10px;
    color: rgba(69, 90, 100, 0.6);
    font-size: 14px;
    font-weight: 400;
}
</style>
