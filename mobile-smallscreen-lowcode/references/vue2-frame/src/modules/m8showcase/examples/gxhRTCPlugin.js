// 仅作示例，没有实现功能
export default class GXHPlugin {
    constructor() {
        this.mode = 'gxh'; // 记录当前厂商
        // 以下字段仅作示例，具体实现时可自定义
        this._client = null; // 厂商的sdk服务
        this._localDOM = null; // 记录本端视频dom节点id
        this._opt = null; // 传入的配置项
        this._currRemoteUsers = []; // 当前远端用户
        this._isBackCamera = false; // 记录当前摄像头
        this._isPublishCamera = false; // 是否已发布本端视频流
    }

    // 插件执行内容定义在apply方法中
    apply(compiler) {
        // 初始化钩子
        compiler.hooks.init.tap('GXHPlugin', (opt) => {
            return this.init(opt);
        });

        // 获取传入实例的配置项
        compiler.hooks.getOpt.tap('GXHPlugin', (opt) => {
            this._opt = opt;
        });

        // 加入房间
        compiler.hooks.joinRoom.tapAsync('GXHPlugin', (opt) => {
            return this.joinRoom(opt);
        });

        compiler.hooks.openAudio.tapAsync('GXHPlugin', (opt) => {
            return this.openAudio(opt);
        });

        compiler.hooks.closeAudio.tapAsync('GXHPlugin', (opt) => {
            return this.closeAudio(opt);
        });

        compiler.hooks.openVideo.tapAsync('GXHPlugin', (opt) => {
            return this.openVideo(opt);
        });

        compiler.hooks.changeCamera.tapAsync('GXHPlugin', (opt) => {
            return this.changeCamera(opt);
        });

        compiler.hooks.closeVideo.tapAsync('GXHPlugin', (opt) => {
            return this.closeVideo(opt);
        });

        compiler.hooks.openSpeaker.tapAsync('GXHPlugin', (opt) => {
            return this.openSpeaker(opt);
        });

        compiler.hooks.closeSpeaker.tapAsync('GXHPlugin', (opt) => {
            return this.closeSpeaker(opt);
        });

        compiler.hooks.leaveRoom.tapAsync('GXHPlugin', (opt) => {
            return this.leaveRoom(opt);
        });

        // 检查必填参数项钩子
        compiler.hooks.checkOtherOpt.tap('GXHPlugin', (option) => {
            return this.checkOtherOpt(option);
        });

        // 销毁实例钩子
        compiler.hooks.destroy.tap('GXHPlugin', (option) => {
            return this.destroy(option);
        });

        // 重置内部变量钩子
        compiler.hooks.reset.tap('GXHPlugin', () => {
            return this.reset();
        });
    }

    // 初始化
    async init(opt) {
        // 创建rtc类
        if (!this._client) {
            this._client = {};
        }

        if (this._client) {
            opt.success && opt.success();
        }
    }

    // 加入房间
    async joinRoom(opt) {
        opt.success && opt.success();
    }

    // 发布本端语音
    async openAudio(opt) {
        opt.success && opt.success();
    }

    // 停止本端语音发布
    async closeAudio(opt) {
        opt.success && opt.success();
    }

    // 发布本端视频
    async openVideo(opt) {
        opt.success && opt.success();
    }

    // 切换摄像头
    async changeCamera(opt) {
        opt.success && opt.success();
    }

    // 停止本地视频发布
    async closeVideo(opt) {
        opt.success && opt.success();
    }

    // 开启扬声器（指放大音量）（该方法不支持iOS Safari）
    async openSpeaker(opt) {
        opt.success && opt.success();
    }

    // 关闭扬声器（切换为正常音量）
    async closeSpeaker(opt) {
        opt.success && opt.success();
    }

    // 离开会议室
    leaveRoom(opt) {
        opt.success && opt.success();
    }

    // 销毁
    destroy(opt) {
        opt.success && opt.success();
    }

    // 检查腾讯云需要的参数
    checkOtherOpt(option) {
        return option;
    }

    reset() {
        this._client = null;
        this._localDOM = null;
        this._opt = null;
        this._currRemoteUsers = [];
        this._isBackCamera = false;
        this._isPublishCamera = false;
    }
}
