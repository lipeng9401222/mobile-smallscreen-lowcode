<template>
    <div class="container">
        <!-- #ifdef APP-PLUS -->
        <scroller class="scroller">
            <!-- #endif -->
            <div class="em-content">
                <text class="cell-title">基础用法</text>
                <em-row>
                    <em-col class="col" :span="24">
                        <em-image width="100" height="100" src="https://img.yzcdn.cn/vant/cat.jpeg" />
                    </em-col>
                </em-row>
                <text class="cell-title">填充模式</text>
                <em-row class="img-wrapper" gutter="5">
                    <em-col class="col" :span="8">
                        <em-image width="100px" height="100px" fit="contain" src="https://img.yzcdn.cn/vant/cat.jpeg" />
                        <text class="tip">contain</text>
                    </em-col>
                    <em-col class="col" :span="8">
                        <em-image width="100px" height="100px" fit="cover" src="https://img.yzcdn.cn/vant/cat.jpeg" />
                        <text class="tip">cover</text>
                    </em-col>
                    <em-col class="col" :span="8">
                        <em-image width="100px" height="100px" fit="fill" src="https://img.yzcdn.cn/vant/cat.jpeg" />
                        <text class="tip">fill</text>
                    </em-col>
                    <em-col class="col" :span="8">
                        <em-image width="100px" height="100px" fit="none" src="https://img.yzcdn.cn/vant/cat.jpeg" />
                        <text class="tip">none</text>
                    </em-col>
                </em-row>
                <text class="cell-title">圆形图片</text>
                <em-row class="img-wrapper">
                    <em-col class="col" :span="8">
                        <em-image
                            round
                            width="100"
                            height="100px"
                            fit="contain"
                            src="https://img.yzcdn.cn/vant/cat.jpeg"
                        />
                        <text class="tip">contain</text>
                    </em-col>
                    <em-col class="col" :span="8">
                        <em-image
                            round
                            width="100"
                            height="100px"
                            fit="cover"
                            src="https://img.yzcdn.cn/vant/cat.jpeg"
                        />
                        <text class="tip">cover</text>
                    </em-col>
                    <em-col class="col" :span="8">
                        <em-image
                            round
                            width="100"
                            height="100px"
                            fit="fill"
                            src="https://img.yzcdn.cn/vant/cat.jpeg"
                        />
                        <text class="tip">fill</text>
                    </em-col>
                    <em-col class="col" :span="8">
                        <em-image
                            round
                            width="100"
                            height="100px"
                            fit="none"
                            src="https://img.yzcdn.cn/vant/cat.jpeg"
                        />
                        <text class="tip">none</text>
                    </em-col>
                </em-row>
                <text class="cell-title">加载中提示</text>
                <em-row class="img-wrapper">
                    <em-col class="col" :span="8">
                        <em-image width="100px" height="100px"></em-image>
                        <text class="tip">默认提示</text>
                    </em-col>
                    <em-col class="col" :span="8">
                        <em-image width="100%" height="100px">
                            <template v-slot:loading>
                                <em-loading type="spinner" size="20"></em-loading>
                            </template>
                        </em-image>
                        <text class="tip">自定义提示</text>
                    </em-col>
                </em-row>
                <text class="cell-title">加载失败提示</text>
                <em-row class="img-wrapper">
                    <em-col class="col" :span="8">
                        <em-image width="100%" height="100px" src="https://img.yzcdn.cn/vant/cat1.jpeg"></em-image>
                        <text class="tip">默认提示</text>
                    </em-col>
                    <em-col class="col" :span="8">
                        <em-image width="100%" height="100px" src="https://img.yzcdn.cn/vant/cat1.jpeg">
                            <template v-slot:error>加载失败</template>
                        </em-image>
                        <text class="tip">自定义提示</text>
                    </em-col>
                </em-row>
            </div>
            <!-- #ifdef APP-PLUS -->
        </scroller>
        <!-- #endif -->
    </div>
</template>

<script>
export default {
    name: 'em-Image'
};
</script>

<style lang="scss" scoped>
.em-content {
    padding: 10px;
}

.tip {
    // #ifndef APP-PLUS
    display: block;
    width: 100%;
    // #endif
    margin-top: 5px;
    margin-bottom: 5px;
    color: #646566;
    font-size: 14px;
    text-align: center;
}

.col{
    align-items: center;
}

// #ifndef APP-PLUS
.em-content img {
    width: 100%;
    margin-bottom: 5px;
}
::v-deep .em-col {
    padding-right: 13px !important;
    margin-bottom: 15px;
}
// #endif

// #ifdef APP-PLUS
.scroller {
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
