<template>
    <div class="container register" ref="container">
        <div class="content" ref="content">
            <div v-show="registerStep === 1">
                <em-notice-bar
                    class="reg-notice"
                    wrapable
                    :scrollable="false"
                    text="为提升账号安全和信任级别，为方便您找回密码，请务必准确填写本人的身份信息，认证后不能更改，隐私信息未经本人许可严格保密"
                />
                <em-form :show-error="false" @submit="onNext">
                    <div class="field-title">企业认证</div>
                    <em-field
                        v-model="formData.enterprisertype"
                        label="法人类型"
                        placeholder="请选择"
                        is-link
                        readonly
                        @click="onClick('enterprisertype')"
                        name="enterprisertype"
                        :rules="[{ required: true, message: '请选择法人类型' }]"
                    />
                    <em-field
                        v-model="legalData.ouname"
                        label="企业名称"
                        placeholder="请输入"
                        name="ouname"
                        show-word-limit
                        :maxlength="50"
                        :rules="[{ required: true, message: '请输入企业名称' }]"
                    />
                    <em-field
                        v-model="legalData.enterprisecode"
                        label="统一社会信用代码"
                        placeholder="请输入18位统一社会信用代码"
                        name="enterprisecode"
                        :rules="[
                            {
                                required: true,
                                message: '请输入18位统一社会信用代码'
                            }
                        ]"
                    />

                    <div style="margin: 16px">
                        <em-button class="btn-size" round block type="info" native-type="submit" color="#2E6BE5">
                            下一步
                        </em-button>
                    </div>
                </em-form>
            </div>

            <div v-show="registerStep === 2">
                <div class="login-title">
                    <div class="title">账号创建</div>
                    <div>{{ legalData.ouname }}</div>
                </div>

                <em-form :show-error="false" @submit="onSubmit" class="content-tabs-padding">
                    <div class="field-title">账号信息</div>
                    <em-field
                        input-align="vertical"
                        v-model="legalData.loginid"
                        label="用户账号"
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
                        v-model="legalData.password"
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
                        v-model="legalData.repassword"
                        :type="passwordType"
                        label="确认密码"
                        placeholder="请保持两次输入的密码一致"
                        :right-icon="rightIcon"
                        @click-right-icon="onClick('icon')"
                        name="validator"
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
                        v-model="legalData.cardnum"
                        label="证件号码"
                        placeholder="请输入"
                        name="cardnum"
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
                        v-model="legalData.displayname"
                        label="真实姓名"
                        placeholder="请输入"
                        name="displayname"
                        :maxlength="50"
                        :rules="[{ required: true, message: '请输入真实姓名' }]"
                    />
                    <em-field
                        input-align="vertical"
                        v-model="legalData.mobile"
                        type="tel"
                        label="手机号码"
                        placeholder="请输入"
                        name="mobile"
                        :rules="[{ validator: mobileValidator, message: '请输入11位手机号码' }]"
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
                        <em-button round block type="info" native-type="submit" color="#2E6BE5" class="em-register-btn">
                            注册
                        </em-button>
                    </footer>
                </em-form>
            </div>
        </div>
        <section>
            <em-picker
                v-model="showPicker"
                show-toolbar
                :columns="Columns"
                @confirm="onConfirm"
                @cancel="showPicker = false"
            />
        </section>
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
    name: 'register_legal',
    components: {
        privacyFooter
    },
    data() {
        return {
            registerStep: 1,
            passwordType: 'password',
            rightIcon: eyeClose,
            isRead: false, //是否已阅读协议
            time: 60,
            msgCode: '获取验证码',
            verifyCode: '', //验证码
            legalData: {
                mobile: ''
            }, //法人注册数据集
            formData: {},

            Columns: [],
            certColumns: [], //证件类型
            showPicker: false,
            // 顶部通知栏
            isshowNotify: false,
            notifyType: 'danger',
            notifyMsg: '',
            // 密码复杂度信息
            complexpasswordmsg: '',
            // 密码复杂度正则
            complexpassword: '',
            // 证件类型校验正则
            cardRule: '',
            enterpriseColumns: [] //企业类型
        };
    },
    computed: {
        ...mapState(useInnerloginStore, ['msgTime']),
        //验证码按钮置灰
        codeDisabled() {
            return this.time < this.msgTime || !(this.legalData.mobile && this.legalData.mobile.length === 11);
        }
    },
    async mounted() {
        this.time = this.msgTime;
        this.getCertType();
        // 获取密码复杂度
        await this.getpasswordcomplex();
        //获取企业类型
        this.getEnterpriseType();
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
                    this.sendMessage();
                    break;
                case 'cardtype':
                    //证件类型
                    this.Columns = this.certColumns;
                    this.showPicker = true;
                    this.clickType = val;
                    break;
                case 'back':
                    console.log('router go -1');
                    this.$router.go(-1);

                    break;
                case 'enterprisertype':
                    //企业类型
                    this.Columns = this.enterpriseColumns;
                    this.showPicker = true;
                    this.clickType = val;
                    break;
                default:
                    break;
            }
        },
        onConfirm(val) {
            this.legalData.cardtype = val.value;
            this.formData[this.clickType] = val.text;
            if (this.clickType === 'cardtype') {
                // 证件类型修改正则
                this.cardRule = new RegExp(val.rule);
            }
            this.showPicker = false;
        },
        //发送验证码
        sendMessage() {
            var paramsData = {
                mobile: this.legalData.mobile,
                usertype: 'L', //P为个人即自然人，L为法人,
                smstype: '01' //01--注册 02--登录 03--忘记密码 04--修改手机号 05账号找回 06账号注销
            };

            api.common('oauth2mem/sendmemmessagecode', paramsData, false)
                .then(() => {
                    this.showNotify('success', '验证码发送成功');
                    this.setInterval();
                })
                .catch((res) => {
                    ejs.ui.closeWaiting();
                    console.error(res);
                    ejs.ui.toast(res.status.text);
                });
        },
        // 校验短信验证码
        checkMessage() {
            var requestData = {
                mobile: this.legalData.mobile,
                usertype: 'L', //P为个人即自然人，L为法人,
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
        // 注册
        submit() {
            api.common('oauth2mem/registerlegalpersonuserinfo', this.legalData, false)
                .then(() => {
                    ejs.ui.alert({
                        title: '提示',
                        message: '注册成功，确定后返回重新授权页面进行绑定',
                        buttonName: '确定',
                        cancelable: 0,
                        success: function () {
                            ejs.page.close();
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

            this.checkMessage();
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
        // 倒计时
        setInterval() {
            var timer = setInterval(() => {
                this.time--;
                this.msgCode = this.time + 's后重新获取';

                if (this.time === 0) {
                    this.msgCode = '重新获取验证码';
                    this.time = this.msgTime;

                    clearInterval(timer);
                }
            }, 1000);
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
        //获取企业类型
        getEnterpriseType() {
            api.common('oauth2mem/getenterprisetypes', {}, false)
                .then((res) => {
                    this.enterpriseColumns = res.typelist.map((val) => {
                        return {
                            text: val.typename,
                            value: val.typecode
                        };
                    });
                })
                .catch((res) => {
                    ejs.ui.closeWaiting();
                    console.error(res);
                    ejs.ui.toast(res.status.text);
                });
        },
        //下一步
        onNext() {
            let paramsData = {
                ouname: this.legalData.ouname,
                enterprisecode: this.legalData.enterprisecode
            };

            api.common('oauth2mem/checkenterprisecode', paramsData, true)
                .then(() => {
                    this.registerStep = 2;
                })
                .catch((res) => {
                    ejs.ui.closeWaiting();
                    console.error(res);
                    ejs.ui.toast(res.status.text);
                });
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
        loginIdValidator(val) {
            // '请以字母开头,可使用数字和下划线,6-20个字符'
            return /^[a-zA-Z][a-zA-Z0-9_]{5,19}$/.test(val);
        },
        passwordValidator(val) {
            return new RegExp(this.complexpassword).test(val);
        },
        rePasswordValidator(val) {
            return this.legalData.password === val;
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
