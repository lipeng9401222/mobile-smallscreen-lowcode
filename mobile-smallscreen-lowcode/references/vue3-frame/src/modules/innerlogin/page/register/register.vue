<template>
    <div class="container register" id="container" ref="container">
        <div class="content" ref="content">
            <em-notice-bar
                class="reg-notice"
                wrapable
                :scrollable="false"
                text="为提升账号安全和信任级别，为方便您找回密码，请务必准确填写本人的身份信息，认证后不能更改，隐私信息未经本人许可严格保密"
            />
            <em-form :show-error="false" @submit="onSubmit">
                <div class="field-title">账号信息</div>
                <em-field
                    input-align="vertical"
                    v-model="personData.loginid"
                    label="用户账号"
                    clearable
                    placeholder="请以字母开头,可使用数字和下划线,6-20个字符"
                    name="loginid"
                    :rules="[
                        {
                            required: true,
                            validator: loginIdValidator,
                            message: '请以字母开头,可使用数字和下划线,6-20个字符'
                        }
                    ]"
                />
                <em-field
                    input-align="vertical"
                    v-model="personData.password"
                    :type="passwordType"
                    label="登录密码"
                    :placeholder="complexpasswordmsg"
                    :right-icon="rightIcon"
                    @click-right-icon="onClick('icon')"
                    name="password"
                    :rules="[
                        {
                            required: true,
                            validator: passwordValidator,
                            message: complexpasswordmsg
                        }
                    ]"
                />
                <em-field
                    input-align="vertical"
                    v-model="personData.repassword"
                    :type="passwordType"
                    label="确认密码"
                    placeholder="请保持两次输入的密码一致"
                    :right-icon="rightIcon"
                    @click-right-icon="onClick('icon')"
                    name="repassword"
                    :rules="[
                        {
                            required: true,
                            validator: rePasswordValidator,
                            message: '请保持两次输入的密码一致'
                        }
                    ]"
                />
                <div class="field-title">证件信息</div>
                <em-field
                    input-align="vertical"
                    :modelValue="formData.cardtype"
                    label="证件类型"
                    placeholder="请选择"
                    is-link
                    readonly
                    @click="onClick('cardtype')"
                    name="cardtype"
                    :rules="[{ required: true, message: '请选择证件类型' }]"
                />
                <em-field
                    input-align="vertical"
                    v-model="personData.cardnum"
                    label="证件号码"
                    placeholder="请输入"
                    name="cardnum"
                    @focus="onFocus"
                    :rules="[
                        {
                            required: true,
                            message: '请输入正确的证件号码',
                            validator: cardNumValidator
                        }
                    ]"
                />
                <em-field
                    input-align="vertical"
                    v-model="personData.displayname"
                    label="真实姓名"
                    placeholder="请输入"
                    name="displayname"
                    :maxlength="50"
                    :rules="[{ required: true, message: '请输入真实姓名' }]"
                    @focus="onFocus"
                />
                <em-field
                    input-align="vertical"
                    v-model="personData.mobile"
                    type="tel"
                    label="手机号码"
                    placeholder="请输入"
                    name="mobile"
                    :rules="[{ validator: mobileValidator, message: '请输入11位手机号码' }]"
                    @focus="onFocus"
                />
                <em-field
                    input-align="vertical"
                    v-model="verifyCode"
                    type="number"
                    label="短信验证码"
                    placeholder="请输入"
                    name="verifyCode"
                    :rules="[{ required: true, message: '请输入验证码' }]"
                    class="code-btn"
                    @focus="onFocus"
                >
                    <template #button>
                        <em-button
                            type="info"
                            size="small"
                            round
                            :disabled="codeDisabled"
                            @click.prevent="onClick('code')"
                            color="#2E6BE5"
                        >
                            {{ msgCode }}
                        </em-button>
                    </template>
                </em-field>

                <footer>
                    <!-- 隐私授权协议组件 -->
                    <privacyFooter v-model:isRead="isRead" ref="emFooter"></privacyFooter>
                    <em-button
                        class="btn-size em-register-btn"
                        round
                        block
                        type="info"
                        native-type="submit"
                        color="#2E6BE5"
                    >
                        注册
                    </em-button>
                </footer>
            </em-form>

            <section>
                <em-picker
                    v-model="showPicker"
                    show-toolbar
                    :columns="Columns"
                    @confirm="onConfirm"
                    @cancel="showPicker = false"
                />
            </section>
        </div>
        <!-- 顶部通知 -->
        <em-notify v-model="isshowNotify" :type="notifyType" :message="notifyMsg"></em-notify>
    </div>
</template>

<script>
import api from '../api/api.js';
import { useInnerloginStore } from '../../store';
import { mapState } from 'pinia';
import privacyFooter from './privacy_footer';
import eyeClose from '../../images/icon_eye_close.png';
import eyeOpen from '../../images/icon_eye_open.png';

export default {
    components: {
        privacyFooter
    },
    // 定义用到的数据，在template中使用{{ }}包裹，自动实现绑定
    data() {
        return {
            active: Util.mpVerifyManager.userType === 'P' ? 0 : 1, //个人0,法人1
            passwordType: 'password',
            rightIcon: eyeClose,
            isRead: false, //是否已阅读协议
            time: 60,
            msgCode: '获取验证码',
            verifyCode: '', //验证码
            //个人注册数据集
            personData: {},
            legalData: {}, //法人注册数据集
            formData: {},
            Columns: [],
            certColumns: [], //证件类型
            enterpriseColumns: [], //企业类型
            showPicker: false,
            clickType: '',
            // 顶部通知栏相关参数
            isshowNotify: false,
            notifyType: '',
            notifyMsg: '',
            // 密码复杂度提醒
            complexpasswordmsg: '',
            // 密码复杂度正则
            complexpassword: '',
            // 证件类型校验正则
            cardRule: '',
            isCard: false
        };
    },
    // 计算属性
    computed: {
        ...mapState(useInnerloginStore, ['msgTime']),
        //验证码按钮置灰
        codeDisabled() {
            return this.time < this.msgTime || !(this.personData.mobile && this.personData.mobile.length === 11);
        }
    },
    async mounted() {
        // 获取密码复杂度
        await this.getpasswordcomplex();
        // 获取初始化数据
        this.getCertType();
    },
    methods: {
        onClick(val) {
            switch (val) {
                case 'icon':
                    // 密码明文切换
                    this.rightIcon = this.rightIcon === eyeClose ? eyeOpen : eyeClose;
                    this.passwordType = this.passwordType === 'password' ? 'text' : 'password';
                    break;
                case 'code':
                    // 发送验证码
                    this.sendMssage();
                    break;
                case 'cardtype':
                    //证件类型
                    this.Columns = this.certColumns;
                    this.showPicker = true;
                    this.clickType = val;
                    break;
                default:
                    break;
            }
        },
        onConfirm(val) {
            this.personData.cardtype = val.value;
            this.legalData.enterprisertype = val.value;

            this.formData[this.clickType] = val.text;
            if (this.clickType === 'cardtype') {
                // 证件类型修改正则
                if (val.value === '01') {
                    // 身份证
                    this.isCard = true;
                } else {
                    this.cardRule = new RegExp(val.rule);
                }
            }
            this.showPicker = false;
        },
        //发送验证码
        sendMssage() {
            var paramsData = {
                mobile: this.personData.mobile,
                usertype: this.active === 0 ? 'P' : 'L', //P为个人即自然人，L为法人,
                smstype: '01' //01--注册 02--登录 03--忘记密码 04--修改手机号 05账号找回 06账号注销
            };

            api.common('oauth2mem/sendmemmessagecode', paramsData, false)
                .then(() => {
                    this.showNotify('success', '验证码发送成功，请查收短信');
                    this.setInterval();
                })
                .catch((res) => {
                    ejs.ui.closeWaiting();
                    console.error(res);
                    ejs.ui.toast(res.status.text);
                });
        },
        // 校验短信验证码
        checkMssage() {
            var requestData = {
                mobile: this.personData.mobile,
                usertype: this.active === 0 ? 'P' : 'L', //P为个人即自然人，L为法人,
                smstype: '01',
                smscode: this.verifyCode
            };

            api.common('oauth2mem/checkmemmessagecode', requestData, false)
                .then(() => {
                    this.submit();
                })
                .catch((res) => {
                    ejs.ui.closeWaiting();
                    console.error(res);
                    this.showNotify('danger', res.status.text);
                });
        },
        submit() {
            api.common('oauth2mem/registerpersionuserinfo', this.personData, false)
                .then(() => {
                    ejs.ui.alert({
                        title: '提示',
                        message: '注册成功，确定后返回重新授权页面进行绑定',
                        buttonName: '确定',
                        cancelable: 0,
                        success: function () {
                            ejs.page.close();
                            // 点击 alert的按钮后回调
                        }
                    });
                })
                .catch((res) => {
                    ejs.ui.closeWaiting();
                    console.error(res);
                    ejs.ui.toast(res.status.text);
                });
        },
        //提交注册
        onSubmit() {
            if (!this.isRead) {
                this.$refs.emFooter.showNotify('danger', '请先勾选《用户协议》和《隐私政策》');

                return;
            }

            this.checkMssage();
        },
        //获取证件类型
        getCertType() {
            api.common('oauth2mem/getcardtypes', {}, false)
                .then((res) => {
                    this.certColumns = res.cardtypes.map((val) => {
                        return {
                            text: val.typename,
                            value: val.typecode,
                            rule: val.regex || ''
                        };
                    });
                })
                .catch((res) => {
                    ejs.ui.closeWaiting();
                    console.error(res);
                    ejs.ui.toast(res.status.text);
                });
        },
        // 获取密码复杂度
        getpasswordcomplex() {
            return api
                .common('oauth2mem/getpasswordcomplex', {}, false)
                .then((res) => {
                    this.complexpassword = `(${res.complexpassword})`;
                    this.complexpasswordmsg = res.complexpasswordmsg;
                })
                .catch((err) => {
                    ejs.ui.closeWaiting();
                    console.error(err);
                });
        },
        // 倒计时
        setInterval() {
            var timer = setInterval(() => {
                this.time--;
                this.msgCode = this.time + 's' + '后重新获取';

                if (this.time === 0) {
                    this.msgCode = '重新获取验证码';
                    this.time = this.msgTime;

                    clearInterval(timer);
                }
            }, 1000);
        },
        // 展示顶部通知
        showNotify(type, msg) {
            this.notifyType = type;
            this.notifyMsg = msg;
            this.isshowNotify = true;
            setTimeout(() => {
                this.isshowNotify = false;
            }, 2000);
        },
        // 聚焦，软键盘弹起事件
        onFocus() {
            // #ifdef H5
            // 将本元素滚动至可视范围内
            this.$refs.content.scrollTo(0, this.$refs.content.scrollHeight);
            // #endif
        },
        loginIdValidator(val) {
            // '请以字母开头,可使用数字和下划线,6-20个字符'
            return /^[a-zA-Z][a-zA-Z0-9_]{5,19}$/.test(val);
        },
        passwordValidator(val) {
            return new RegExp(this.complexpassword).test(val);
        },
        rePasswordValidator(val) {
            return this.personData.password === val;
        },
        cardNumValidator(val) {
            let Boolean;

            if (this.isCard) {
                Boolean = Util.string.isIdCard(val);
            } else {
                Boolean = this.cardRule.test(val);
            }

            return Boolean;
        },
        mobileValidator(val) {
            return Util.string.isMobile(val);
        }
    }
};
</script>

<style lang="scss" scoped>
@import './scss/common.scss';
@import './scss/register_index.scss';
</style>
