<template>
    <view class="container cont">
        <h4 class="cell-title">基础用法</h4>
        <em-password-input
            :value="value1"
            info="密码为 6 位数字"
            :focused="showKeyboard1"
            @focus="showKeyboard1 = true"
        />
        <em-number-keyboard
            :show="showKeyboard1"
            @inputkey="onInput1"
            @delete="onDelete1"
            @blur="showKeyboard1 = false"
        />
        <h4 class="cell-title">自定义长度</h4>
        <em-password-input
            :value="value2"
            :length="4"
            :gutter="15"
            :focused="showKeyboard2"
            @focus="showKeyboard2 = true"
        />
        <em-number-keyboard
            :show="showKeyboard2"
            @inputkey="onInput2"
            @delete="onDelete2"
            @blur="showKeyboard2 = false"
        />
        <h4 class="cell-title">明文展示</h4>
        <em-password-input :value="value3" :mask="false" :focused="showKeyboard3" @focus="showKeyboard3 = true" />
        <em-number-keyboard
            :show="showKeyboard3"
            @inputkey="onInput3"
            @delete="onDelete3"
            @blur="showKeyboard3 = false"
        />
        <h4 class="cell-title">错误提示</h4>
        <em-password-input
            :value="value4"
            :error-info="errorInfo"
            :focused="showKeyboard4"
            @focus="showKeyboard4 = true"
        />
        <em-number-keyboard :show="showKeyboard4" @inputkey="onInput4" @delete="onDelete4" @blur="showKeyboard4 = false" />
    </view>
</template>
<script>
export default {
    name: 'PasswordInputDemo',
    data() {
        return {
            value1: '123',
            showKeyboard1: false,
            value2: '123',
            showKeyboard2: false,
            value3: '123',
            showKeyboard3: false,
            value4: '123',
            showKeyboard4: false,
            errorInfo: ''
        };
    },
    methods: {
        onInput1(key) {
            this.value1 = (this.value1 + key).slice(0, 6);
        },
        onDelete1() {
            this.value1 = this.value1.slice(0, this.value1.length - 1);
        },
        onInput2(key) {
            this.value2 = (this.value2 + key).slice(0, 4);
        },
        onDelete2() {
            this.value2 = this.value2.slice(0, this.value2.length - 1);
        },
        onInput3(key) {
            this.value3 = (this.value3 + key).slice(0, 6);
        },
        onDelete3() {
            this.value3 = this.value3.slice(0, this.value3.length - 1);
        },
        onInput4(key) {
            this.value4 = (this.value4 + key).slice(0, 6);
            if (this.value4.length === 6) {
                this.errorInfo = '密码错误';
            } else {
                this.errorInfo = '';
            }
        },
        onDelete4() {
            this.value4 = this.value4.slice(0, this.value4.length - 1);
            this.errorInfo = '';
        }
    }
};
</script>
<style lang="scss" scoped></style>
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
.cont {
    background-color: #f7f8fa;
    padding-bottom: 300px;
}
</style>