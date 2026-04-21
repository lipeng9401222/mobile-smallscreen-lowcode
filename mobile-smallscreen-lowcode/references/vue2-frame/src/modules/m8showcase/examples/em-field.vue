<template>
    <div class="container">
        <div class="van-content">
            <h4 class="cell-title">基础用法</h4>
            <em-field label="文本" labelWidth="106px" placeholder="请输入用户名" v-model="value" @input="onInput" @click="onClick" @click-input="onClickInput"></em-field>
            <em-field
                label="横向必填项"
                required
                is-link
                labelWidth="106px"
                placeholder="请输入"
                v-model="value6"
                @input="onInput"
            ></em-field>
            <em-field
                label="纵向必填项"
                required
                is-link
                input-align="vertical"
                placeholder="请输入"
                v-model="value8"
                @input="onInput"
            ></em-field>
            <em-field
                label="多行文本框"
                required
                input-align="vertical"
                :autosize="{ minHeight: 24 }"
                type="textarea"
                placeholder="请输入"
                v-model="value10"
                @input="onInput"
            ></em-field>
            <em-field name="switch" label="滑动开关" input-align="right">
                <template v-slot:input>
                    <em-switch v-model="currSwitchValue" />
                </template>
            </em-field>

            <h4 class="cell-title">自定义类型</h4>
            <em-cell-group>
                <!-- 输入任意文本 -->
                <em-field v-model="text" label="文本" placeholder="请输入文本" />
                <!-- 输入手机号，调起手机号键盘 -->
                <em-field v-model="tel" type="tel" label="手机号" placeholder="请输入手机号" />
                <!-- 允许输入正整数，调起纯数字键盘 -->
                <em-field v-model="digit" type="digit" label="整数" placeholder="请输入整数" />
                <!-- 允许输入数字，调起带符号的纯数字键盘 -->
                <em-field v-model="number" type="number" label="数字" placeholder="请输入数字" />
                <!-- 输入密码 -->
                <em-field v-model="password" type="password" label="密码" placeholder="请输入密码" />
            </em-cell-group>

            <h4 class="cell-title">禁用输入框</h4>
            <em-cell-group>
                <em-field label="文本" value="输入框只读" readonly />
                <em-field label="文本" value="输入框已禁用" disabled />
            </em-cell-group>

            <h4 class="cell-title">显示图标</h4>
            <em-cell-group>
                <em-field
                    v-model="value1"
                    label="文本"
                    left-icon="smile-o"
                    right-icon="warning-o"
                    placeholder="显示图标"
                    @click-right-icon="onClickIcon('点击了右侧图标')"
                    @click-left-icon="onClickIcon('点击了左侧图标')"
                />
                <em-field v-model="value2" clearable label="文本" left-icon="music-o" placeholder="显示清除图标" />
            </em-cell-group>

            <h4 class="cell-title">错误提示</h4>
            <em-cell-group>
                <em-field v-model="username" required label="用户名" placeholder="请输入用户名" error />
                <em-field
                    v-model="phone"
                    required
                    label="手机号"
                    placeholder="请输入手机号"
                    error-message="手机号格式错误"
                />
            </em-cell-group>

            <h4 class="cell-title">插入按钮</h4>
            <em-field v-model="sms" center clearable label="短信验证码" placeholder="请输入短信验证码">
                <template #button>
                    <em-button size="small" type="primary">发送验证码</em-button>
                </template>
            </em-field>

            <h4 class="cell-title">格式化输入内容</h4>
            <em-cell-group>
                <em-field v-model="value3" label="文本" :formatter="formatter" placeholder="在输入时执行格式化" />
                <em-field
                    v-model="value4"
                    label="文本"
                    :formatter="formatter"
                    format-trigger="onBlur"
                    placeholder="在失焦时执行格式化"
                />
            </em-cell-group>

            <h4 class="cell-title">高度自适应</h4>
            <em-field v-model="message" rows="1" autosize label="留言" type="textarea" placeholder="请输入留言" />

            <h4 class="cell-title">显示字数统计</h4>
            <em-field
                v-model="message"
                rows="2"
                autosize
                label="留言"
                type="textarea"
                maxlength="50"
                placeholder="请输入留言"
                show-word-limit
            />

            <h4 class="cell-title">输入框内容对齐</h4>
            <em-field v-model="value" label="文本" placeholder="输入框内容右对齐" input-align="right" />
        </div>
        <em-toast ref="emToast"></em-toast>
    </div>
</template>

<script>
export default {
    name: 'Field',
    data() {
        return {
            value: '',
            username: '',
            password: '',
            disabledValue: '输入框已禁用',
            phone: '1234567',
            message: '',
            sms: '',
            text: '',
            tel: '',
            digit: '',
            number: '',
            value1: '',
            value2: '123',
            value3: '',
            value4: '',
            value5: '',
            value6: '',
            value7: '',
            value8: '',
            value9: '',
            value10: '',
            currSwitchValue: ''
        };
    },
    methods: {
        onInput(v) {
            const Console = console;

            Console.log(v);
        },
        onClick(v) {
            console.log('onClick:', v);
        },
        onClickInput(v) {
            console.log('onClickInput:', v);
        },
        onClickIcon(text) {
            Toast(text);
        },
        formatter(value) {
            // 过滤输入的数字
            return value.replace(/\d/g, '');
        }
    }
};
</script>

<style scoped lang="scss">
.van-content {
    background-color: #f7f8fa;
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