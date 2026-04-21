<template>
    <div class="container">
        <!-- #ifdef APP-PLUS -->
        <scroller class="scroller">
            <!-- #endif -->
            <div class="van-content">
                <text class="cell-title">按钮类型</text>
                <div class="btn-area">
                    <em-button class="emButton" type="primary">主要按钮</em-button>
                    <em-button class="emButton" type="info">信息按钮</em-button>
                    <em-button class="emButton" type="default">默认按钮</em-button>
                    <em-button class="emButton" type="warning">警告按钮</em-button>
                    <em-button class="emButton" type="danger">危险按钮</em-button>
                </div>

                <text class="cell-title">text</text>
                <div class="btn-area">
                    <em-button class="emButton" plain type="primary" text="朴素按钮"></em-button>
                    <em-button class="emButton" type="info" text="朴素按钮"></em-button>
                </div>

                <text class="cell-title">iconPosition</text>
                <div class="btn-area">
                    <em-button
                        class="emButton"
                        type="primary"
                        icon="plus"
                        text="朴素按钮"
                    ></em-button>
                    <em-button class="emButton" icon-position="right" loading text="朴素按钮"></em-button>
                </div>

                <text class="cell-title">朴素按钮</text>
                <div class="btn-area">
                    <em-button class="emButton" plain type="primary">朴素按钮</em-button>
                    <em-button class="emButton" plain type="info">朴素按钮</em-button>
                </div>

                <text class="cell-title">细边框</text>
                <div class="btn-area">
                    <em-button class="emButton" plain hairline type="primary">细边框按钮</em-button>
                    <em-button class="emButton" plain hairline type="info" @click="onClick">细边框按钮</em-button>
                </div>

                <text class="cell-title">禁用状态</text>
                <div class="btn-area">
                    <em-button class="emButton" disabled type="primary" @click="onClick">
                        禁用状态
                    </em-button>
                    <em-button class="emButton" disabled>禁用状态</em-button>
                    <em-button class="emButton" disabled type="primary" plain>禁用状态</em-button>
                    <em-button class="emButton" color="#7232dd" loading disabled>单色按钮</em-button>
                </div>

                <text class="cell-title">加载状态</text>
                <div class="btn-area">
                    <em-button class="emButton" loading type="primary" />
                    <em-button class="emButton" loading type="primary" loading-type="spinner" />
                    <em-button class="emButton" loading type="info" loading-text="加载中..." />
                    <em-button class="emButton" loading loading-type="spinner" loading-text="加载中..." plain />
                    <em-button class="emButton" color="#7232dd" loading-type="spinner" loading>单色按钮</em-button>
                    <em-button class="emButton" color="#7232dd" loading plain>单色按钮</em-button>
                </div>

                <text class="cell-title">按钮形状</text>
                <div class="btn-area">
                    <em-button class="emButton" square type="primary">方形按钮</em-button>
                    <em-button class="emButton" round type="info">圆形按钮</em-button>
                </div>
                <text class="cell-title">图标按钮</text>
                <div class="btn-area">
                    <em-button class="emButton" icon="plus" type="primary" />
                    <em-button class="emButton" icon="plus" type="primary">按钮</em-button>
                    <em-button class="emButton" icon="https://img.yzcdn.cn/vant/user-active.png" type="info">
                        按钮
                    </em-button>
                </div>
                <text class="cell-title">按钮尺寸</text>
                <div class="btn-area">
                    <em-button class="emButton" type="primary" size="large">大号按钮</em-button>
                    <em-button class="emButton" type="primary" size="normal">普通按钮</em-button>
                    <em-button class="emButton" type="primary" size="small">小型按钮</em-button>
                    <em-button class="emButton" type="primary" size="mini">迷你按钮</em-button>
                </div>
                <text class="cell-title">块级元素</text>
                <div class="btn-area">
                    <em-button class="emButton" type="primary" block>块级元素</em-button>
                </div>
                <text class="cell-title">页面导航</text>
                <div class="btn-area">
                    <em-button class="emButton" type="primary" url="./em-loading">URL 跳转</em-button>
                    <em-button class="emButton" type="primary" url="http://www.baidu.com">外部链接 跳转</em-button>
                    <em-button class="emButton" type="primary" to="./em-cell">路由跳转</em-button>
                    <em-button class="emButton" type="primary" :to="{ path: './em-cell', query: { a: 'b' } }">
                        路由对象跳转
                    </em-button>
                    <em-button
                        class="emButton"
                        type="primary"
                        :to="{ path: '../index', query: { a: 'b' }, replace: true }"
                    >
                        路由替换跳转
                    </em-button>
                </div>
                <text class="cell-title">自定义颜色</text>
                <div class="btn-area">
                    <em-button class="emButton" color="#7232dd">单色按钮</em-button>
                    <em-button class="emButton" color="#7232dd" plain>单色按钮</em-button>
                    <em-button class="emButton" color="linear-gradient(to right, #ff6034, #ee0a24)">
                        渐变色按钮
                    </em-button>
                </div>

                <!-- <text class="cell-title">开放能力</text>
            <div class="btn-area">
                <em-button open-type="getUserInfo" @getuserinfo="getuserinfo">获取用户信息</em-button>
                <em-button open-type="launchApp" app-parameter="测试" @launchapp="getuserinfo" @error="getuserinfo">打开app</em-button>
                <em-button open-type="getPhoneNumber" @getphonenumber="getuserinfo">获取手机号</em-button>
                <em-button open-type="openSetting" @opensetting="getuserinfo">打开授权页</em-button>
            </div> -->
            </div>
            <!-- #ifdef APP-PLUS -->
        </scroller>
        <!-- #endif -->
    </div>
</template>

<script lang="ts">
export default {
    name: 'Button',
    methods: {
        onClick() {
            ejs.ui.toast('触发了click事件');
            console.log('触发了click事件');
        },
        getuserinfo(info) {
            console.log(info);
        },
        touchstart() {
            ejs.ui.toast('触发了touchstart事件');
        }
    }
};
</script>

<style lang="scss" scoped>
.van-content {
    padding-left: 10px;
    padding-right: 10px;
}

.cell-title {
    display: block;
    padding-left: 0;
}

// #ifndef APP-PLUS
::v-deep .em-button {
    margin-right: 10px;
    margin-bottom: 10px;
}
// #endif

.emButton {
    margin-right: 10px;
    margin-bottom: 10px;
}

// #ifdef APP-PLUS
.btn-area {
    flex-direction: row;
    flex-wrap: wrap;
}

.scroller{
    height: 700px;
}
// #endif
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
