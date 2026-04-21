<template>
    <div id="app" class="em-container">
        <em-button @click="joinRoom">点击进房</em-button>
        <em-button @click="openAudio">发布语音</em-button>
        <em-button @click="closeAudio">关闭语音发布</em-button>
        <em-button @click="openVideo">发布视频</em-button>
        <em-button @click="changeCamera">切换摄像头</em-button>
        <em-button @click="closeVideo">关闭视频发布</em-button>
        <em-button @click="openSpeaker">开启扬声器</em-button>
        <em-button @click="closeSpeaker">关闭扬声器</em-button>
        <em-button @click="leaveRoom">离开房间</em-button>
        <em-button @click="destroy">销毁实例</em-button>
        <!-- 本端视频展示 -->
        <h1>本端视频</h1>
        <div v-if="mode !== 'rongyun'" class="localVideo" :id="localVideoId" :ref="localVideoId"></div>
        <video v-else class="localVideo" :id="localVideoId" :ref="localVideoId"></video>
        <!-- 远端视频展示 -->
        <h1>远端视频</h1>
        <div v-for="item in remoteUsers" :key="item">
            <div v-if="mode !== 'rongyun'" class="remoteVideo" :id="item" :ref="item"></div>
            <video v-else class="remoteVideo" :id="item" :ref="item"></video>
        </div>
    </div>
</template>

<script lang="ts">
import trtcRTC from '@epoint-mrc/rtc/trtc';
import rongyunRTC from '@epoint-mrc/rtc/rongyun';
import manager from '@epoint-mrc/rtc/manager';
import { RTCOption } from '@epoint-mrc/rtc/types';
import GXHPlugin from './gxhRTCPlugin';
import { nextTick } from 'vue';
export default {
    onLoad(option) {
        this.userId = option.userId || '1';
        this.type = option.type || 'all';
        this.mode = option.mode || 'trtc';
        this.name = option.name || 'ceshi';
        this.token = option.token || '';
        this.initTRTC();
    },
    // 定义用到的数据，在template中使用{{ }}包裹，自动实现绑定
    data() {
        return {
            mode: 'trtc',
            client: null,
            localVideoId: 'local',
            userId: '1',
            roomId: '2',
            userSig: '',
            type: 'all',
            name: 'ceshi',
            token: '',
            remoteUsers: []
        };
    },
    methods: {
        // 开始通话
        async initTRTC() {
            let userId = this.userId;
            let roomId = this.roomId;
            let name = this.name;

            console.log('name', name);
            console.log('token', this.token);
            console.log('this.roomId', this.roomId);
            console.log('this.userId', this.userId);

            const trtcOpt = {
                type: this.type, // 切换音频或视频，audio/video/all
                roomId, // 房间号
                appKey: '1600000593', // 厂商音视频应用ID
                userId,
                secretKey: 'a26162c61dda01d15f7bf7439b7977364d619c735ef552a0f6a508af2ea223d7' // 腾讯云音视频应用密钥，其他厂商可忽略
            };
            const rongyunOpt = {
                type: this.type, // 切换音频或视频，audio/video/all
                roomId, // 房间号
                // appKey: 'pwe86gg9d78x6', // 厂商音视频应用ID
                appKey: '25wehl3u2vzfw',
                userId,
                url: 'https://testoa.epoint.com.cn/rongyunbase-soa', // 获取token地址
                name,
                // navi: 'https://218.4.136.120:1444', // 私有化部署地址
                token: this.token,
                Util: Util
            };

            let opt: RTCOption = trtcOpt;
            let RTC = trtcRTC;

            switch (this.mode) {
                case 'trtc':
                    opt = trtcOpt;
                    RTC = trtcRTC;
                    break;
                case 'rongyun':
                    opt = rongyunOpt;
                    RTC = rongyunRTC;
                    break;
                case 'gxh':
                    opt = {
                        type: this.type, // 切换音频或视频，audio/video/all
                        roomId, // 房间号
                        appKey: '1600000593', // 厂商音视频应用ID
                        userId,
                        plugins: [new GXHPlugin()]
                    };
                    RTC = manager;
                    break;
                default:
                    break;
            }

            // 实例化音视频组件
            this.client = new RTC(opt);

            // 初始化trtc实例
            this.client.init({
                success() {
                    console.log('初始化rtc成功');
                },
                error(err) {
                    console.error('初始化失败', err);
                }
            });
        },
        joinRoom() {
            const self = this;

            // 加入房间
            this.client.joinRoom({
                // 这里通过回调函数提供音视频组件一个播放远端视频的DOM id
                getRemoteVideoNode(remoteUserId, streamType) {
                    return new Promise((resolve) => {
                        let view = `${remoteUserId}_${streamType}`;

                        if (self.remoteUsers.indexOf(view) === -1) {
                            self.remoteUsers.push(view);
                        }

                        nextTick(() => {
                            resolve(self.mode === 'rongyun' ? self.$refs[view][0].$el.querySelector('video') : view);
                        });
                    });
                },
                removeRemoteVideoNode(remoteUserId, streamType) {
                    let view = `${remoteUserId}_${streamType}`;

                    self.remoteUsers = self.remoteUsers.filter((item) => {
                        return item !== view;
                    });
                },
                success() {
                    console.log('进入房间成功');
                },
                error(err) {
                    console.error('进入房间失败', err);
                }
            });
        },
        openAudio() {
            this.client.openAudio({
                success() {
                    console.log('发布本端音频成功');
                },
                error(err) {
                    console.error('发布本端音频失败', err);
                }
            });
        },
        closeAudio() {
            this.client.closeAudio({
                success() {
                    console.log('取消发布本端音频成功');
                },
                error(err) {
                    console.error('取消发布本端音频失败', err);
                }
            });
        },
        openVideo() {
            this.client.openVideo({
                dom:
                    this.mode === 'rongyun'
                        ? this.$refs[this.localVideoId].$el.querySelector('video')
                        : this.$refs[this.localVideoId],
                success() {
                    console.log('发布本端视频成功');
                },
                error(err) {
                    console.error('发布本端视频失败', err);
                }
            });
        },
        changeCamera() {
            this.client.changeCamera({
                success() {
                    console.log('切换摄像头成功');
                },
                error(err) {
                    console.error('切换摄像头失败', err);
                }
            });
        },
        closeVideo() {
            this.client.closeVideo({
                success() {
                    console.log('取消发布本端视频成功');
                },
                error(err) {
                    console.error('取消发布本端视频失败', err);
                }
            });
        },
        // 扬声器功能暂时先忽略
        openSpeaker() {
            this.client.openSpeaker({
                success() {
                    console.log('开启扬声器成功');
                },
                error(err) {
                    console.error('开启扬声器失败', err);
                }
            });
        },
        // 扬声器功能暂时先忽略
        closeSpeaker() {
            this.client.closeSpeaker({
                success() {
                    console.log('关闭扬声器成功');
                },
                error(err) {
                    console.error('关闭扬声器失败', err);
                }
            });
        },
        leaveRoom() {
            this.client.leaveRoom({
                success() {
                    console.log('离开房间成功');
                },
                error(err) {
                    console.error('离开房间失败', err);
                }
            });
        },
        destroy() {
            this.client.destroy({
                success() {
                    console.log('实例销毁成功');
                },
                error(err) {
                    console.error('实例销毁失败', err);
                }
            });
        }
    }
};
</script>

<!-- css部分 -->

<style lang="scss" scoped>
.localVideo,
.remoteVideo {
    width: 100vw;
    height: 100px;
}
</style>
