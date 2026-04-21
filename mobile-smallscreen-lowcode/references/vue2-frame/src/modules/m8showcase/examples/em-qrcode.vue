<template>
    <view class="page">
        <!-- 加个scroll-view测试微信小程序canvas在滚动容器中浮动问题，测试结果为：在开发者工具为浮动，预览在真机上正常。 -->
        <scroll-view :scroll-y="true" style="height: 100vh">
            <view class="page">
                <h4 class="cell-title">这是一个常规的二维码</h4>
                <view class="qrcode-box">
                    <view class="qrcode">
                        <em-qrcode
                            ref="qr1"
                            canvas-id="qr1"
                            :value="text"
                            :size="size"
                            :start="true"
                            :auto="true"
                            @click="remake('qr1')"
                            @complete="complete($event, 'qr1')"
                        ></em-qrcode>
                    </view>
                </view>

                <h4 class="cell-title">这是一个设置了边距、半透明蓝色背景和红色前景色的二维码</h4>
                <view class="qrcode-box">
                    <view class="qrcode">
                        <em-qrcode
                            ref="qr3"
                            canvas-id="qr3"
                            :value="text"
                            :size="size"
                            :start="true"
                            :auto="true"
                            :options="{
                                margin: 10,
                                backgroundColor: 'rgba(25, 147, 227, 0.5)',
                                foregroundColor: 'rgb(185, 0, 0)'
                            }"
                            @click="remake('qr3')"
                            @complete="complete($event, 'qr3')"
                        ></em-qrcode>
                    </view>
                </view>

                <h4 class="cell-title">
                    这是一个分别设置了定位角、分割图案、对齐图案、时序图案、暗块、版本信息颜色的二维码
                </h4>
                <view class="qrcode-box">
                    <view class="qrcode">
                        <em-qrcode
                            ref="qr4"
                            canvas-id="qr4"
                            :value="`---------------------------${text}---------------------------`"
                            :size="size"
                            :start="true"
                            :auto="true"
                            :options="{
                                positionProbeBackgroundColor: 'rgba(105,126,255,0.28)',
                                positionProbeForegroundColor: '#697eff',
                                separatorColor: 'rgba(184,112,253,0.29)',
                                positionAdjustBackgroundColor: 'rgba(255,122,140,0.28)',
                                positionAdjustForegroundColor: '#ff7a8c',
                                timingBbackgroundColor: 'yellow',
                                timingForegroundColor: '#fcdb87',
                                darkBlockColor: '#0f47ff',
                                typeNumberBackgroundColor: 'red',
                                typeNumberForegroundColor: '#00ff53'
                            }"
                            @click="remake('qr4')"
                            @complete="complete($event, 'qr4')"
                        ></em-qrcode>
                    </view>
                </view>

                <h4 class="cell-title">这是一个设置了纠错等级为M的二维码</h4>
                <view class="qrcode-box">
                    <view class="qrcode">
                        <em-qrcode
                            ref="qr5"
                            canvas-id="qr5"
                            :value="text"
                            :size="size"
                            :start="true"
                            :auto="true"
                            :options="{
                                errorCorrectLevel: 'M'
                            }"
                            @click="remake('qr5')"
                            @complete="complete($event, 'qr5')"
                        ></em-qrcode>
                    </view>
                </view>

                <h4 class="cell-title">这是一个带logo的二维码，logo处于二维码中间</h4>
                <view class="qrcode-box">
                    <view class="qrcode">
                        <em-qrcode
                            ref="qr6"
                            canvas-id="qr6"
                            :value="text"
                            :size="size"
                            :start="true"
                            :auto="true"
                            :options="{
                                foregroundImageSrc: '/static/logo.jpg',
                                foregroundImageWidth: size / 5,
                                foregroundImageHeight: size / 5,
                                queue: queue
                            }"
                            @click="remake('qr6')"
                            @complete="complete($event, 'qr6')"
                        ></em-qrcode>
                    </view>
                </view>

                <h4 class="cell-title">这是一个带logo的二维码，logo处于二维码右下角，与边距有一定距离</h4>
                <view class="qrcode-box">
                    <view class="qrcode">
                        <em-qrcode
                            ref="qr7"
                            canvas-id="qr7"
                            :value="text"
                            :size="size"
                            :start="true"
                            :auto="true"
                            :options="{
                                foregroundImageSrc: '/static/logo.jpg',
                                foregroundImageWidth: size / 5,
                                foregroundImageHeight: size / 5,
                                foregroundImageX: size - 10 - size / 5, // 图片绘制的水平坐标，计算到靠右位置
                                foregroundImageY: size - 10 - size / 5, // 图片绘制的垂直坐标，计算到靠下位置
                                queue: queue
                            }"
                            @click="remake('qr7')"
                            @complete="complete($event, 'qr7')"
                        ></em-qrcode>
                    </view>
                </view>

                <h4 class="cell-title">这是一个带背景图片的二维码，背景缩放1.5倍，且背景图片带有一定透明度</h4>
                <view class="qrcode-box">
                    <view class="qrcode">
                        <em-qrcode
                            ref="qr8"
                            canvas-id="qr8"
                            :value="text"
                            :size="size"
                            :start="true"
                            :auto="true"
                            :options="{
                                backgroundColor: 'rgba(0,0,0,0.2)',
                                backgroundImageSrc: '/static/logo.jpg',
                                backgroundImageWidth: size * 0.75, // 图片宽
                                backgroundImageHeight: size * 0.75, // 图片高
                                backgroundImageX: size / 2 - (size * 0.75) / 2, // 图片绘制的水平坐标，计算到居中位置
                                backgroundImageY: size / 2 - (size * 0.75) / 2, // 图片绘制的垂直坐标，计算到居中位置
                                backgroundImageAlpha: 0.88, // 透明度
                                foregroundColor: 'rgb(11, 34, 116)',
                                queue: queue
                            }"
                            @click="remake('qr8')"
                            @complete="complete($event, 'qr8')"
                        ></em-qrcode>
                    </view>
                </view>

                <h4 class="cell-title">
                    这是一个背景图片来自网络资源的二维码，且背景铺满，前景色为白色，小程序下绘制网络图片需先配置download域名白名单才能生效哦
                </h4>
                <view class="qrcode-box">
                    <view class="qrcode">
                        <em-qrcode
                            ref="qr9"
                            canvas-id="qr9"
                            :value="text"
                            :size="size"
                            :start="true"
                            :auto="true"
                            :options="{
                                backgroundImageSrc: 'https://img01.yzcdn.cn/vant/cat.jpeg',
                                backgroundImageWidth: size,
                                backgroundImageHeight: size,
                                backgroundImageAlpha: 1,
                                foregroundColor: '#f0f0f0',
                                margin: 10,
                                queue: queue
                            }"
                            @click="remake('qr9')"
                            @complete="complete($event, 'qr9')"
                        ></em-qrcode>
                    </view>
                </view>

                <h4 class="cell-title">
                    这是一个logo来自网络资源的二维码，且带有边距填充和阴影，小程序下绘制网络图片需先配置download域名白名单才能生效哦
                </h4>
                <view class="qrcode-box">
                    <view class="qrcode">
                        <em-qrcode
                            ref="qr10"
                            canvas-id="qr10"
                            :value="text"
                            :size="size"
                            :start="true"
                            :auto="true"
                            :options="{
                                foregroundImageSrc: 'https://img01.yzcdn.cn/vant/cat.jpeg',
                                foregroundImageWidth: size * 0.25,
                                foregroundImageHeight: size * 0.25,
                                foregroundImagePadding: 4,
                                foregroundImageBorderRadius: 4,
                                foregroundImageShadowBlur: 50,
                                foregroundImageShadowColor: 'red',
                                queue: queue
                            }"
                            @click="remake('qr10')"
                            @complete="complete($event, 'qr10')"
                        ></em-qrcode>
                    </view>
                </view>

                <h4 class="cell-title">这是一个批量生成的二维码</h4>
                <view class="qrcode-box" v-for="(item, index) in 5" :key="index">
                    <view class="qrcode">
                        <em-qrcode
                            :ref="`qr_${index}`"
                            :canvas-id="`qr_${index}`"
                            :value="`qr_${index}`"
                            :size="size"
                            :start="true"
                            :auto="false"
                            @click="remake(`qr_${index}`)"
                            @complete="complete($event, `qr_${index}`)"
                        ></em-qrcode>
                    </view>
                </view>

                <h4 class="cell-title">这是一个异步生成的二维码</h4>
                <view class="qrcode-box">
                    <view class="qrcode">
                        <em-qrcode
                            ref="qrsync1"
                            canvas-id="qrsync1"
                            :value="textSync"
                            :size="size"
                            :start="false"
                            :auto="true"
                            @click="remake('qrsync1')"
                            @complete="complete($event, 'qrsync1')"
                        ></em-qrcode>
                    </view>
                </view>

                <h4 class="cell-title">这是异步生成的另一种写法</h4>
                <view class="qrcode-box">
                    <view class="qrcode">
                        <em-qrcode
                            ref="qrsync2"
                            canvas-id="qrsync2"
                            :value="textSync2"
                            :size="size"
                            :start="false"
                            :auto="false"
                            @click="remake('qrsync2')"
                            @complete="complete($event, 'qrsync2')"
                        ></em-qrcode>
                    </view>
                </view>

                <view style="margin-bottom: 30px">
                    <em-popup ref="popup1" v-model="showPopup1">
                        <view class="qrcode-box" style="margin-top: 30px">
                            <view class="qrcode">
                                <em-qrcode
                                    ref="qrpopup1"
                                    canvas-id="qrpopup1"
                                    :value="text"
                                    :size="size"
                                    :start="false"
                                    @click="remake('qrpopup1')"
                                    @complete="complete($event, 'qrpopup1')"
                                ></em-qrcode>
                            </view>
                            <span class="msg">
                                弹层测试，第一种写法，默认二维码组件加载完毕暂不生成，通过弹层组件的change事件去调用二维码组件的make方法去触发生成
                            </span>
                            <view class="btns">
                                <em-button class="btn" type="primary" @click="showPopup1 = false">关闭</em-button>
                            </view>
                        </view>
                    </em-popup>
                    <em-button class="btn" type="primary" @click="onClickPopup1()">弹层测试一</em-button>
                </view>
                <view style="margin-bottom: 30px">
                    <em-popup ref="popup2" v-model="showPopup2">
                        <view class="qrcode-box" style="margin-top: 30px">
                            <view class="qrcode">
                                <em-qrcode
                                    ref="qrpopup2"
                                    canvas-id="qrpopup2"
                                    :value="text"
                                    :size="size"
                                    :start="true"
                                    @click="remake('qrpopup2')"
                                    @complete="complete($event, 'qrpopup2')"
                                ></em-qrcode>
                            </view>
                            <span class="msg">
                                弹层测试，第二种写法，默认二维码组件加载完毕立马生成，在某些设备弹层时canvas组件未在第一时间渲染完毕，可能会生成失败。优化方式，在弹层组件的change事件里延时150毫秒左右调用二维码组件的remake方法即可
                            </span>
                            <view class="btns">
                                <em-button class="btn" type="primary" @click="showPopup2 = false">关闭</em-button>
                            </view>
                        </view>
                    </em-popup>
                    <em-button class="btn" type="primary" @click="onClickPopup2()">弹层测试二</em-button>
                </view>

                <h4 class="cell-title">这是在EJS容器内部可使用EJS API截图的二维码</h4>
                <em-button class="emButton" @click="onClickScreenShot">点击截屏</em-button>
                <view class="qrcode-box">
                    <view class="qrcode">
                        <em-qrcode
                            ref="qr11"
                            :size="200"
                            :value="'https://example.com'"
                            :options="{
                                foregroundImageSrc: '/static/logo.jpg',
                                foregroundImageWidth: size / 5,
                                foregroundImageHeight: size / 5,
                                foregroundImageX: size - 10 - size / 5,
                                foregroundImageY: size - 10 - size / 5
                            }"
                            @click="remake('qr11')"
                            @complete="complete($event, 'qr11')"
                        ></em-qrcode>
                    </view>
                </view>
            </view>
        </scroll-view>
    </view>
</template>

  <script>
export default {
    data() {
        return {
            text: 'http://app.epoint.com.cn/m8fedoc/',
            textSync: '',
            textSync2: '',
            size: 200,
            queue: false,
            showPopup1: false,
            showPopup2: false
        };
    },
    onLoad() {
        new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    text: 'uQRCode Sync'
                });
            }, 3000);
        }).then((res) => {
            this.textSync = res.text;
        });
    },
    onReady() {
        new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    text: 'uQRCode Sync'
                });
            }, 3000);
        }).then((res) => {
            this.textSync2 = res.text;
            this.make('qrsync2');
        });
    },
    created() {
        // #ifndef APP-NVUE
        this.queue = false;
        // #endif
        // #ifdef APP-NVUE
        this.queue = true;
        // #endif
    },
    methods: {
        make(refName) {
            var ref = this.$refs[refName];
            /* ref通过v-for遍历后会自动包裹在数组里，所以要判断一下 */

            if (Array.isArray(ref)) {
                ref[0].make();
            } else {
                ref.make();
            }
        },
        remake(refName) {
            var ref = this.$refs[refName];
            /* ref通过v-for遍历后会自动包裹在数组里，所以要判断一下 */

            if (Array.isArray(ref)) {
                ref[0].remake();
            } else {
                ref.remake();
            }
        },
        complete(e, refName) {
            if (e.success) {
                console.log(refName + '生成成功');
            } else {
                console.log(refName + '生成失败');
            }
        },
        onClickPopup1() {
            this.showPopup1 = true;
            setTimeout(() => {
                this.$refs.qrpopup1.make();
            }, 150);
        },
        onClickPopup2() {
            this.showPopup2 = true;
            setTimeout(() => {
                this.$refs.qrpopup2.make();
            }, 150);
        },
        onClickScreenShot() {
            ejs.io.screenShot({
                captureType: 1,
                success: function (result) {
                    ejs.ui.toast('success');
                },
                error: function (error) {}
            });
        }
    }
};
</script>

  <style>
.page {
    /* #ifndef APP-NVUE */
    display: flex;
    flex-direction: column;
    /* #endif */
    align-items: center;
}

.qrcode-box {
    /* #ifndef APP-NVUE */
    display: flex;
    flex-direction: column;
    /* #endif */
    align-items: center;
    margin-bottom: 30px;
    padding: 0 30px;
}

.qrcode {
    padding: 16px;
    background-color: #ffffff;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
    border-radius: 2px;
    overflow: hidden;
}

.msg {
    margin-top: 15px;
    font-size: 14px;
    color: #9a9b9c;
}

.btns {
    margin-top: 10px;
    /* #ifndef APP-NVUE */
    display: flex;
    /* #endif */
    flex-direction: row;
}

.btn {
    margin: 0 5px;
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