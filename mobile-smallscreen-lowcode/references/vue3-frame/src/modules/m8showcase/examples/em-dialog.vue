<template>
    <div class="container">
        <div class="van-content">
            <text class="cell-title">提示弹窗</text>
            <div class="btn-wrapper">
                <em-button
                    type="primary"
                    plain
                    class="btnClass"
                    @click="
                        openDialog({
                            title: '标题',
                            message: '弹窗内容'
                        })
                    "
                >
                    提示弹窗
                </em-button>
                <em-button class="btnClass" type="primary" plain @click="openDialog({ message: '弹窗内容' })">
                    无标题提示
                </em-button>
            </div>
            <text class="cell-title">普通样式</text>
            <div class="btn-wrapper">
                <em-button
                    type="primary"
                    plain
                    class="btnClass"
                    @click="
                        openDialog({
                            title: '标题',
                            message: '弹窗内容',
                            theme: 'default'
                        })
                    "
                >
                    提示弹窗
                </em-button>
                <em-button
                    type="primary"
                    class="btnClass"
                    plain
                    @click="
                        openDialog({
                            message: '弹窗内容',
                            theme: 'default'
                        })
                    "
                >
                    提示弹窗
                </em-button>
            </div>
            <text class="cell-title">确认弹窗</text>
            <em-button
                type="primary"
                class="btnClass"
                plain
                @click="
                    openConfirmDialog({
                        title: '标题',
                        message: '弹窗内容'
                    })
                "
            >
                确认弹窗
            </em-button>

            <text class="cell-title">异步关闭</text>
            <em-button
                type="primary"
                class="btnClass"
                plain
                @click="
                    openConfirmDialog({
                        title: '标题',
                        message: '弹窗内容',
                        beforeClose
                    })
                "
            >
                异步关闭
            </em-button>

            <text class="cell-title">组件调用</text>
            <em-button class="btnClass" type="primary" plain @click="show = true">组件调用</em-button>
            <em-dialog
                v-model="show"
                title="标题"
                show-cancel-button
                :before-close="beforeClose"
                :close-on-click-overlay="true"
            >
                <image src="https://img.yzcdn.cn/vant/apple-3.jpg" class="img" />
            </em-dialog>
        </div>
        <em-dialog ref="emDialog"></em-dialog>
    </div>
</template>
<script lang="ts">
export default {
    name: 'Dialog',
    data() {
        return {
            show: false,
            show1: false
        };
    },
    mounted() {
        Dialog.setDefaultOptions({
            context: this
        });
    },
    methods: {
        openDialog(options) {
            Dialog.alert(options)
                .then(() => {
                    console.log('确定');
                })
                .catch(() => {
                    console.log('取消');
                });
        },
        openConfirmDialog(options) {
            Dialog.confirm(options)
                .then(() => {
                    // confirm
                    console.log('点击了确认');
                })
                .catch(() => {
                    // close
                    console.log('点击了取消');
                });
        },
        beforeClose(action, done) {
            if (action === 'confirm') {
                setTimeout(done, 1000);
            } else {
                done();
            }
        }
    }
};
</script>

<style lang="scss">
.btnClass {
    margin-left: 10px;
}

.btn-wrapper {
    flex-direction: row;
}

.img {
    width: 320px;
    height: 257px;
}
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
