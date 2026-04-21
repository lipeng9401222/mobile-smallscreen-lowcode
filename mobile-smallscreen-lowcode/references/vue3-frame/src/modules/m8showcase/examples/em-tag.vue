<template>
    <div class="container">
        <!-- #ifdef APP-PLUS -->
        <scroller class="scroller">
            <!-- #endif -->
            <div class="em-content">
                <text class="cell-title">基础用法</text>
                <em-row>
                    <em-col span="6">
                        <em-tag type="primary" @click="onClick">标签</em-tag>
                    </em-col>
                    <em-col span="6">
                        <em-tag type="success">标签</em-tag>
                    </em-col>
                    <em-col span="6">
                        <em-tag type="danger">标签</em-tag>
                    </em-col>
                    <em-col span="6">
                        <em-tag type="warning">标签</em-tag>
                    </em-col>
                </em-row>

                <text class="cell-title">基座风格: 人员、部门、职级等</text>
                <em-row>
                    <em-col span="8">
                        <em-tag basic-type="person">科长</em-tag>
                    </em-col>
                    <em-col span="8">
                        <em-tag basic-type="person" closeable @close="close()">我的部门</em-tag>
                    </em-col>
                    <em-col span="8">
                        <em-tag basic-type="person" photo="https://img01.yzcdn.cn/vant/cat.jpeg">李科员</em-tag>
                    </em-col>
                </em-row>

                <text class="cell-title">基座风格: 属性标签</text>
                <em-row>
                    <em-col span="8">
                        <em-tag type="warning" basic-type="type">待审核</em-tag>
                    </em-col>
                    <em-col span="8">
                        <em-tag type="danger" basic-type="type">特急件</em-tag>
                    </em-col>
                    <em-col span="8">
                        <em-tag type="primary" basic-type="type">待分送</em-tag>
                    </em-col>
                </em-row>

                <text class="cell-title">基座风格: 新闻标题标签</text>
                <em-row>
                    <em-col span="8">
                        <em-tag type="danger" basic-type="news">急</em-tag>
                    </em-col>
                    <em-col span="8">
                        <em-tag type="primary" basic-type="news">政策</em-tag>
                    </em-col>
                    <em-col span="8">
                        <em-tag type="danger" basic-type="news">热点</em-tag>
                    </em-col>
                </em-row>

                <text class="cell-title">基座风格: 状态标签</text>
                <em-row>
                    <em-col span="8">
                        <em-tag basic-type="status" status="complete"></em-tag>
                    </em-col>
                    <em-col span="8">
                        <em-tag basic-type="status" status="loading"></em-tag>
                    </em-col>
                    <em-col span="8">
                        <em-tag basic-type="status" status="offline"></em-tag>
                    </em-col>
                </em-row>

                <text class="cell-title">基座风格: 数值标签</text>
                <em-tag basic-type="number">12</em-tag>

                <text class="cell-title">圆角样式</text>
                <em-row>
                    <em-col span="6">
                        <em-tag round type="primary">标签</em-tag>
                    </em-col>
                    <em-col span="6">
                        <em-tag round type="success">标签</em-tag>
                    </em-col>
                    <em-col span="6">
                        <em-tag round type="danger">标签</em-tag>
                    </em-col>
                    <em-col span="6">
                        <em-tag round type="warning">标签</em-tag>
                    </em-col>
                </em-row>

                <text class="cell-title">标记样式</text>
                <em-row>
                    <em-col span="6">
                        <em-tag mark type="primary">标签</em-tag>
                    </em-col>
                    <em-col span="6">
                        <em-tag mark type="success">标签</em-tag>
                    </em-col>
                    <em-col span="6">
                        <em-tag mark type="danger">标签</em-tag>
                    </em-col>
                    <em-col span="6">
                        <em-tag mark type="warning">标签</em-tag>
                    </em-col>
                </em-row>

                <text class="cell-title">空心样式</text>
                <em-row>
                    <em-col span="6">
                        <em-tag plain type="primary">标签</em-tag>
                    </em-col>
                    <em-col span="6">
                        <em-tag plain type="success">标签</em-tag>
                    </em-col>
                    <em-col span="6">
                        <em-tag plain type="danger">标签</em-tag>
                    </em-col>
                    <em-col span="6">
                        <em-tag plain type="warning">标签</em-tag>
                    </em-col>
                </em-row>

                <text class="cell-title">自定义颜色</text>
                <em-row>
                    <em-col span="6">
                        <em-tag color="#f2826a">标签</em-tag>
                    </em-col>
                    <em-col span="6">
                        <em-tag color="#7232dd">标签</em-tag>
                    </em-col>
                    <em-col span="6">
                        <em-tag color="#7232dd" plain>标签</em-tag>
                    </em-col>
                    <em-col span="6">
                        <em-tag color="#ffe1e1" text-color="#ad0000">标签</em-tag>
                    </em-col>
                </em-row>

                <text class="cell-title">标签大小</text>
                <em-row>
                    <em-col span="8">
                        <em-tag type="danger">标签</em-tag>
                    </em-col>
                    <em-col span="8">
                        <em-tag type="danger" size="medium">标签</em-tag>
                    </em-col>
                    <em-col span="8">
                        <em-tag type="danger" size="large">标签</em-tag>
                    </em-col>
                </em-row>

                <text class="cell-title">可关闭标签</text>
                <em-row>
                    <em-col span="12">
                        <em-tag v-if="show.primary" closeable size="medium" type="primary" @close="close('primary')">
                            标签
                        </em-tag>
                    </em-col>
                    <em-col span="12">
                        <em-tag v-if="show.success" closeable size="medium" type="success" @close="close('success')">
                            标签
                        </em-tag>
                    </em-col>
                </em-row>
            </div>
            <!-- #ifdef APP-PLUS -->
        </scroller>
        <!-- #endif -->
        <em-toast ref="emToast"></em-toast>
    </div>
</template>

<script lang="ts">
export default {
    name: 'Tag',
    data() {
        return {
            show: {
                primary: true,
                success: true
            }
        };
    },
    mounted() {
        Toast.setDefaultOptions({
            context: this
        });
    },
    methods: {
        onClick(){
            Toast('触发点击事件');

        },
        close(type?: string) {
            Toast('触发关闭事件');
            this.show[type] = false;
        }
    }
};
</script>

<style scoped>
.container {
    padding: 15px 0;
}
.em-content{
    padding-left: 10px;
    padding-bottom: 50px;
}
/* #ifndef APP-PLUS */
::v-deep .em-tag {
    margin-left: 5px;
    margin-right: 5px;
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
