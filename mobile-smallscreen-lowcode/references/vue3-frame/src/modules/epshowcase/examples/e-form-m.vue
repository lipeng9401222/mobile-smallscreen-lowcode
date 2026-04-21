<template>
    <div class="van-content">
        <text class="cell-title">基本使用</text>
        <div class="justify-spacep-between mb-4 flex-wrap gap-4">
            <e-form-m :model="formBase" label-width="120px">
                <e-form-item-m label="活动名称">
                    <e-input-m v-model="formBase.name" />
                </e-form-item-m>
                <e-form-item-m label="活动形式">
                    <e-input-m v-model="formBase.desc" type="textarea" />
                </e-form-item-m>
                <e-form-item-m>
                    <e-button-m type="primary" @click="onSubmit(formBase)">创建</e-button-m>
                    <e-button-m>取消</e-button-m>
                </e-form-item-m>
            </e-form-m>
        </div>

        <text class="cell-title">验证</text>
        <div class="flex justify-spacep-between mb-4 flex-wrap gap-4">
            <e-form-m ref="ruleFormRef" :model="ruleForm" :rules="rules" label-width="220px" class="demo-ruleForm">
                <e-form-item-m label="活动名称" prop="name">
                    <e-input-m v-model="ruleForm.name" />
                </e-form-item-m>
                <e-form-item-m label="活动区域" prop="region">
                    <e-select-m v-model="ruleForm.region" placeholder="选择活动区域">
                        <e-option-m label="区域一" value="shanghai" />
                        <e-option-m label="区域二" value="beijing" />
                    </e-select-m>
                </e-form-item-m>
                <e-form-item-m label="活动时间" required>
                    <em-row>
                        <em-col :span="11">
                            <e-form-item-m prop="date1">
                                <!-- <e-date-picker-m
                                    v-model="ruleForm.date1"
                                    type="date"
                                    label="选择日期"
                                    placeholder="选择日期"
                                    style="width: 100%"
                                /> -->
                            </e-form-item-m>
                        </em-col>
                        <em-col class="text-center" :span="2">
                            <span class="text-gray-500">-</span>
                        </em-col>
                        <em-col :span="11">
                            <e-form-item-m prop="date2">
                                <!-- <e-date-picker-m
                                    v-model="ruleForm.date2"
                                    type="date"
                                    label="选择日期"
                                    placeholder="选择日期"
                                    style="width: 100%"
                                /> -->
                            </e-form-item-m>
                        </em-col>
                    </em-row>
                </e-form-item-m>
                <e-form-item-m label="即时交付" prop="delivery">
                    <e-switch-m v-model="ruleForm.delivery" />
                </e-form-item-m>
                <e-form-item-m label="活动类型" prop="type">
                    <e-checkbox-group-m v-model="ruleForm.type">
                        <e-checkbox-m value="线上活动" label="线上活动" name="1" />
                        <e-checkbox-m value="促销活动" label="促销活动" name="2" />
                        <e-checkbox-m value="线下活动" label="线下活动" name="3" />
                        <e-checkbox-m value="简单品牌曝光" label="简单品牌曝光" name="4" />
                    </e-checkbox-group-m>
                </e-form-item-m>
                <e-form-item-m label="资源" prop="resource">
                    <e-radio-group-m v-model="ruleForm.resource">
                        <e-radio-m value="赞助商" label="赞助商" />
                        <e-radio-m value="场馆" label="场馆" />
                    </e-radio-group-m>
                </e-form-item-m>
                <e-form-item-m label="活动形式" prop="desc">
                    <e-input-m v-model="ruleForm.desc" type="textarea" />
                </e-form-item-m>
                <e-form-item-m label="主办人身份证号码" prop="idCard">
                    <e-input-m v-model="ruleForm.idCard" />
                </e-form-item-m>
                <e-form-item-m label="主办人手机号码" prop="phone">
                    <e-input-m v-model="ruleForm.phone" />
                </e-form-item-m>
                <e-form-item-m label="地址" prop="address">
                    <e-input-m v-model="ruleForm.address" />
                </e-form-item-m>
                <e-form-item-m label="社会信用代码" prop="creditCode">
                    <e-input-m v-model="ruleForm.creditCode" />
                </e-form-item-m>
                <e-form-item-m label="邮编" prop="postCode">
                    <e-input-m v-model="ruleForm.postCode" />
                </e-form-item-m>
                <e-form-item-m label="爱好" prop="hobby">
                    <e-input-m v-model="ruleForm.hobby" />
                </e-form-item-m>
                <e-form-item-m>
                    <!--<e-button-m @click="validateField">验证指定字段</e-button-m>
                    <e-button-m @click="scrollToField">滚动到指定字段</e-button-m>
                    <e-button-m @click="clearValidate">清除指定字段的验证消息。</e-button-m>-->
                    <e-button-m type="primary" @click="submitForm(ruleFormRef)">创建</e-button-m>
                    <e-button-m type="primary" @click="quicklyValidate(ruleFormRef)">快速验证</e-button-m>
                    <e-button-m @click="resetForm(ruleFormRef)">重置</e-button-m>
                </e-form-item-m>
            </e-form-m>
        </div>

        <text class="cell-title">自定义验证规则</text>
        <div class="justify-spacep-between mb-4 flex-wrap gap-4">
            <e-form-m ref="ruleFormRef2" :model="ruleForm2" status-icon :rules="rules2" label-width="120px">
                <e-form-item-m label="密码" prop="pass">
                    <e-input-m v-model="ruleForm2.pass" type="password" autocomplete="off" show-password />
                </e-form-item-m>
                <e-form-item-m label="再次输入密码" prop="checkPass">
                    <e-input-m v-model="ruleForm2.checkPass" type="password" autocomplete="off" show-password />
                </e-form-item-m>
                <e-form-item-m label="年龄" prop="age">
                    <e-input-m v-model.number="ruleForm2.age" />
                </e-form-item-m>
                <e-form-item-m>
                    <e-button-m type="primary" @click="submitForm(ruleFormRef2)">Submit</e-button-m>
                    <e-button-m @click="resetForm(ruleFormRef2)">Reset</e-button-m>
                </e-form-item-m>
            </e-form-m>
        </div>
        <text class="cell-title">添加/删除表单项</text>
        <div class="justify-spacep-between mb-4 flex-wrap gap-4">
            <e-form-m ref="formRef" :model="dynamicValidateForm" label-width="120px">
                <e-form-item-m
                    prop="email"
                    label="电子邮件"
                    :rules="[
                        {
                            required: true,
                            message: '请输入电子邮件地址',
                            trigger: 'blur'
                        },
                        {
                            type: 'email',
                            message: '请输入正确的电子邮件地址',
                            trigger: ['blur', 'change']
                        }
                    ]"
                >
                    <e-input-m v-model="dynamicValidateForm.email" />
                </e-form-item-m>
                <e-form-item-m
                    v-for="(domain, index) in dynamicValidateForm.domains"
                    :key="domain.key"
                    :label="'域名' + (index + 1)"
                    :prop="'domains.' + index + '.value'"
                    :rules="{
                        required: true,
                        message: '域名不能为空',
                        trigger: 'blur'
                    }"
                >
                    <e-input-m v-model="domain.value" />
                    <e-button-m class="mt-2" @click="removeDomain(domain)">删除</e-button-m>
                </e-form-item-m>
                <e-form-item-m>
                    <e-button-m type="primary" @click="submitForm(formRef)">提交</e-button-m>
                    <e-button-m @click="addDomain">新增域名</e-button-m>
                    <e-button-m @click="resetForm(formRef)">重置</e-button-m>
                </e-form-item-m>
            </e-form-m>
        </div>
        <text class="cell-title">数值验证</text>
        <div class="justify-spacep-between mb-4 flex-wrap gap-4">
            <e-form-m ref="formRef1" :model="numberValidateForm" label-width="100px">
                <e-form-item-m
                    label="年龄"
                    prop="age"
                    :rules="[
                        { required: true, message: '年龄是必填项' },
                        { type: 'number', message: '年龄必须是数字' }
                    ]"
                >
                    <e-input-m v-model.number="numberValidateForm.age" type="text" autocomplete="off" />
                </e-form-item-m>
                <e-form-item-m>
                    <e-button-m type="primary" @click="submitForm(formRef1)">提交</e-button-m>
                    <e-button-m @click="resetForm(formRef1)">重置</e-button-m>
                </e-form-item-m>
            </e-form-m>
        </div>

        <text class="cell-title">尺寸、对齐方式及风格控制</text>
        <div class="justify-spacep-between mb-4 flex-wrap gap-4">
            <div class="toolbar-box">
                <e-radio-group-m v-model="size" label="尺寸控制">
                    <e-radio-button-m value="large">大尺寸</e-radio-button-m>
                    <e-radio-button-m value="default">默认尺寸</e-radio-button-m>
                    <e-radio-button-m value="small">小尺寸</e-radio-button-m>
                </e-radio-group-m>
                <e-radio-group-m v-model="labelPosition" label="标签位置控制">
                    <e-radio-button-m value="left">label左侧</e-radio-button-m>
                    <e-radio-button-m value="right">label右侧</e-radio-button-m>
                    <e-radio-button-m value="top">label顶部</e-radio-button-m>
                </e-radio-group-m>
                <e-radio-group-m v-if="labelPosition !== 'top'" v-model="valuePosition" label="输入框位置控制">
                    <e-radio-button-m value="left">value左侧</e-radio-button-m>
                    <e-radio-button-m value="right">value右侧</e-radio-button-m>
                </e-radio-group-m>
                <text class="mx-1">圆角卡片</text>
                <e-switch-m v-model="round" />
            </div>
            <br />
            <e-form-m
                ref="form"
                :model="sizeForm"
                label-width="100px"
                :round="round"
                :label-position="labelPosition"
                :value-position="valuePosition"
                :size="size"
            >
                <e-form-item-m prop="name" label="活动名称" :rules="[{ required: true, message: '这是必填项' }]">
                    <e-input-m v-model="sizeForm.name" placeholder="请输入活动名称" />
                </e-form-item-m>
                <e-form-item-m label="活动形式">
                    <e-input-m v-model="sizeForm.desc" type="textarea" />
                </e-form-item-m>
                <!-- <e-form-item-m label="活动区域">
                    <e-select-m v-model="sizeForm.region" placeholder="请选择活动区域">
                        <e-option-m label="区域一" value="shanghai" />
                        <e-option-m label="区域二" value="beijing" />
                    </e-select-m>
                </e-form-item-m> -->
                <e-form-item-m label="活动时间">
                    <em-col :span="11">
                        <!-- <e-date-picker-m
                            v-model="sizeForm.date1"
                            type="date"
                            label="选择日期"
                            placeholder="选择日期"
                            style="width: 100%"
                        /> -->
                    </em-col>
                    <em-col class="text-center" :span="1" style="margin: 0 0.5rem">-</em-col>
                    <em-col :span="11">
                        <!-- <e-date-picker-m
                            v-model="sizeForm.date2"
                            type="date"
                            label="选择时间"
                            placeholder="选择时间"
                            style="width: 100%"
                        /> -->
                    </em-col>
                </e-form-item-m>
                <e-form-item-m label="活动类型">
                    <e-checkbox-group-m v-model="sizeForm.type">
                        <e-checkbox-m value="线上活动" label="线上活动" name="type" />
                        <e-checkbox-m value="促销活动" label="促销活动" name="type" />
                    </e-checkbox-group-m>
                </e-form-item-m>
                <e-form-item-m label="即时交付" prop="delivery">
                    <e-switch-m v-model="sizeForm.delivery" />
                </e-form-item-m>
                <e-form-item-m label="资源">
                    <e-radio-group-m v-model="sizeForm.resource">
                        <e-radio-m value="赞助商" label="赞助商" />
                        <e-radio-m value="场馆" label="场馆" />
                    </e-radio-group-m>
                </e-form-item-m>
                <e-form-item-m>
                    <e-button-m type="primary" @click="onSubmit(sizeForm)">创建</e-button-m>
                    <e-button-m>取消</e-button-m>
                </e-form-item-m>
            </e-form-m>
        </div>

        <text class="cell-title">帮助提示</text>
        <div class="justify-spacep-between mb-4 flex-wrap gap-4">
            <e-form-m :model="formTooltip" label-width="120px">
                <e-form-item-m label="活动名称" label-tooltip="帮助提示：请输入活动名称">
                    <e-input-m v-model="formTooltip.name" placeholder="请输入活动名称" />
                </e-form-item-m>
                <e-form-item-m
                    label="活动时间"
                    :label-tooltip="{
                        content: '帮助提示：<span style=\'color:var(--e-color-danger)\'>请选择日期</span>',
                        rawContent: true
                    }"
                >
                    <em-col :span="11">
                        <!-- <e-date-picker-m
                            v-model="formTooltip.date1"
                            type="date"
                            placeholder="选择日期"
                            style="width: 100%"
                        /> -->
                    </em-col>
                    <em-col :span="2" class="text-center">
                        <span class="text-gray-500">-</span>
                    </em-col>
                    <em-col :span="11">
                        <!-- <e-date-picker-m
                            v-model="formTooltip.date2"
                            type="date"
                            placeholder="选择日期"
                            style="width: 100%"
                        /> -->
                    </em-col>
                </e-form-item-m>
                <e-form-item-m label="活动类型" tooltip="帮助提示：请选择活动类型">
                    <e-checkbox-group-m v-model="formTooltip.type">
                        <e-checkbox-m value="线上活动" label="线上活动" name="type" />
                        <e-checkbox-m value="促销活动" label="促销活动" name="type" />
                    </e-checkbox-group-m>
                </e-form-item-m>
                <e-form-item-m label="活动说明">
                    <template #top>
                        <e-alert-m
                            title="提示信息"
                            type="primary"
                            show-icon
                            :closable="false"
                            style="margin-bottom: 12px; padding: 8px 12px"
                        />
                    </template>
                    <e-input-m v-model="formTooltip.desc" type="textarea" />
                    <template #extra>
                        <span>请填写活动的详细说明，不少于10个字符</span>
                    </template>
                </e-form-item-m>
                <e-form-item-m>
                    <e-button-m type="primary" @click="onSubmit(formTooltip)">创建</e-button-m>
                    <e-button-m>取消</e-button-m>
                </e-form-item-m>
            </e-form-m>
        </div>

        <text class="cell-title">脱敏数据外部提交</text>
        <div class="justify-spacep-between mb-4 flex-wrap gap-4">
            <e-form-m ref="formRef2" :model="formData" :rules="formRules">
                <e-form-item-m prop="testtext" label="测试" label-width="120px" :divider="false">
                    <e-input-m v-model="formData.testtext" placeholder="请输入" :desensitization-type="''" />
                </e-form-item-m>
                <e-divider-m content-position="right">以下为敏感数据,已脱敏</e-divider-m>
                <e-form-item-m prop="name" label="姓名" label-width="120px">
                    <e-input-m
                        v-model="formData.name"
                        placeholder="请输入"
                        :desensitization-type="DESENDATATYPE_CHINESE_NAME"
                    />
                </e-form-item-m>
                <e-form-item-m prop="address" label="地址(只读)" label-width="120px" :divider="false">
                    <e-input-m v-model="formData.address" placeholder="请输入" readonly />
                </e-form-item-m>
                <em-row>
                    <em-col :span="4" style="margin-left: 131px">
                        <e-button-m type="primary" @click="submit">提交</e-button-m>
                    </em-col>
                </em-row>
            </e-form-m>
        </div>

        <text class="cell-title">脱敏数据内部提交</text>
        <div class="justify-spacep-between mb-4 flex-wrap gap-4">
            <e-form-m
                ref="formRef3"
                :model="formData3"
                :rules="formRules3"
                :submit-url="submitUrl"
                :submit-request-options="submitRequestOptions"
            >
                <e-form-item-m prop="testtext" label="测试" label-width="120px" :divider="false">
                    <e-input-m v-model="formData3.testtext" placeholder="请输入" :desensitization-type="''" />
                </e-form-item-m>

                <e-divider-m content-position="right">以下为敏感数据,已脱敏</e-divider-m>
                <e-form-item-m prop="name" label="姓名" label-width="120px">
                    <e-input-m
                        v-model="formData3.name"
                        placeholder="请输入"
                        :desensitization-type="DESENDATATYPE_CHINESE_NAME"
                    />
                </e-form-item-m>
                <e-form-item-m prop="address" label="地址(只读)" label-width="120px" :divider="false">
                    <e-input-m v-model="formData3.address" placeholder="请输入" readonly />
                </e-form-item-m>
                <em-row>
                    <em-col :span="6" style="margin-left: 131px">
                        <e-button-m type="primary" @click="submit3">提交</e-button-m>
                    </em-col>
                </em-row>
            </e-form-m>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';
import {
    DESENDATATYPE_CHINESE_NAME,
    type FormRules,
    type FormInstance,
    type SubmitRequestOptions,
    type ValidateFieldsError
} from '@epoint-mfe/eui-components';

// 基础用法
const formBase = reactive({
    name: '',
    region: '',
    showPicker: '',
    date1: '',
    date2: '',
    delivery: true,
    type: [],
    resource: '',
    desc: '',
    radio2: ''
});
const onSubmit = (form) => {
    console.log(form, 'form');
};

// 验证
const ruleFormRef = ref<FormInstance>(); // 表单引用
const ruleForm = reactive({
    name: 'Hello', // 活动名称
    region: '', // 活动区域
    count: '', // 活动次数
    date1: '', // 活动日期
    date2: '', // 活动时间
    delivery: false, // 即时交付
    type: [], // 活动类型
    resource: '', // 资源
    desc: '', // 活动形式
    idCard: '', // 主办人身份证号码
    phone: '', // 主办人身份证号码
    url: 'abc',
    email: '',
    num: 0,
    address: '',
    creditCode: '',
    postCode: '',
    hobby: ''
});
const rules = reactive<FormRules>({
    name: [
        {
            // type: 'string',
            validator: (v, opt) => {
                console.log(v, opt);
                if (v.length >= 3 && v.length <= 5) {
                    return true;
                }
                return new Error('长度应为3至5个字符');
            },
            required: false,
            // message: '长度应为3至5个字符',
            trigger: 'blur'
        }
    ],
    region: [
        {
            required: true,
            message: '请选择活动区域',
            trigger: 'change'
        }
    ],
    count: [
        {
            required: true,
            // message: '请选择活动次数',
            trigger: 'change'
        }
    ],
    date1: [{ required: true, type: 'date', message: '请选择日期', trigger: 'change' }],
    date2: [{ required: true, type: 'date', message: '请选择时间', trigger: 'change' }],
    type: [
        {
            required: true,
            message: '请至少选择一个活动类型',
            trigger: 'change'
        }
    ],
    resource: [
        {
            required: true,
            message: '请选择活动资源',
            trigger: 'change'
        }
    ],
    desc: [{ required: true, message: '请输入活动形式', trigger: 'blur' }],
    idCard: [{ type: 'idCard', required: true, message: '必须是身份证格式', trigger: 'blur' }],
    phone: [{ required: true }, { type: 'phone' }],
    url: [{ type: 'url', required: true, trigger: 'blur' }],
    email: [{ type: 'email', required: true, trigger: 'blur' }],
    num: [
        {
            type: 'number',
            min: 3,
            max: 10,
            message: '人数应在3-10人之间',
            trigger: ['blur', 'change']
        }
    ],
    address: [{ type: 'string', required: true, min: 10, trigger: 'blur' }],
    creditCode: [{ type: 'creditCode', required: true, min: 10, trigger: 'blur' }],
    postCode: [{ type: 'postCode', required: true, min: 10, trigger: 'blur' }],
    hobby: [{ type: 'enum', enums: ['读书', '音乐', '写代码'], trigger: 'blur' }]
});
const submitForm = async (formEl: FormInstance | undefined) => {
    if (!formEl) return;
    await formEl.validate((valid, fields) => {
        if (valid) {
            console.log('提交成功！');
        } else {
            console.log('提交失败！', fields);
        }
    });
};
const quicklyValidate = async (formEl: FormInstance | undefined) => {
    if (!formEl) return;
    await formEl.fastValidate((valid, fields) => {
        if (valid) {
            console.log('验证成功！');
        } else {
            console.log('验证失败！', fields);
        }
    });
};
const resetForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return;
    formEl.resetFields();
};
const validateField = () => {
    const formEl = ruleFormRef.value;
    if (!formEl) return;
    formEl.validateField(['name', 'region'], (valid, fields) => {
        if (valid) {
            console.log('字段校验成功！');
        } else {
            console.log('字段校验失败！', fields);
        }
    });
};
const scrollToField = () => {
    const formEl = ruleFormRef.value;

    if (!formEl) return;
    formEl.scrollToField('region');
};
const clearValidate = () => {
    const formEl = ruleFormRef.value;

    if (!formEl) return;
    formEl.clearValidate(['region']);
};
const options = Array.from({ length: 10000 }).map((_, idx) => ({
    value: `${idx + 1}`,
    label: `${idx + 1}`
}));

// 自定义验证规则
const ruleFormRef2 = ref<FormInstance>();
const ruleForm2 = reactive({
    pass: '',
    checkPass: '',
    age: ''
});
const checkAge = (value: any, rule: any) => {
    if (!value) {
        return new Error('请输入年龄');
    }
    return new Promise((resolve) => {
        setTimeout(() => {
            if (!Number.isInteger(value)) {
                resolve(new Error('年龄只能是数字'));
            } else {
                if (value < 18) {
                    resolve(new Error('年龄必须大于18'));
                } else {
                    resolve(true);
                }
            }
        }, 1000);
    });
};
const validatePwd = (
    pwd: string,
    options: {
        minLength: number;
        requireCombo: number;
        hasNumber: boolean;
        hasLowerCase: boolean;
        hasUpperCase: boolean;
        hasSymbol: boolean;
    }
) => {
    const { minLength, requireCombo, hasNumber, hasLowerCase, hasUpperCase, hasSymbol } = options;
    if (pwd.length < minLength) return false;

    let criteriaMet = 0;
    if (hasNumber && /\d/.test(pwd)) criteriaMet++;
    if (hasLowerCase && /[a-z]/.test(pwd)) criteriaMet++;
    if (hasUpperCase && /[A-Z]/.test(pwd)) criteriaMet++;
    if (hasSymbol && /[^a-zA-Z0-9]/.test(pwd)) criteriaMet++;

    return criteriaMet >= requireCombo;
};
function defaultPwdRule(pwd: string) {
    const ok = validatePwd(pwd, {
        minLength: 8,
        requireCombo: 3,
        hasNumber: true,
        hasLowerCase: true,
        hasUpperCase: true,
        hasSymbol: true
    });
    return {
        isValid: ok,
        message: ok ? '' : '密码最短需要8个字符, 至少包含 (大写字母, 小写字母, 数字, 符号) 中的3种'
    };
}
const validatePass = (value: any, rule: any) => {
    console.log(value, rule);
    if (value === '') {
        return new Error('请输入密码');
    } else {
        const { isValid, message } = defaultPwdRule(value);
        return isValid ? true : new Error(message);
    }
};
const validatePass2 = (value: any, rule: any, callback: any) => {
    if (value === '') {
        return new Error('请再次输入密码进行确认');
    } else if (value !== ruleForm2.pass) {
        return new Error('两次的密码不一致');
    } else {
        return true;
    }
};
const rules2 = reactive<FormRules>({
    pass: [{ validator: validatePass, trigger: 'blur' }],
    checkPass: [{ validator: validatePass2, trigger: 'blur' }],
    age: [{ validator: checkAge, trigger: 'blur' }]
});

// 添加/删除表单项
const formRef = ref<FormInstance>();
interface DomainItem {
    key: number;
    value: string;
}
const dynamicValidateForm = reactive<{
    domains: DomainItem[];
    email: string;
}>({
    domains: [
        {
            key: 1,
            value: ''
        }
    ],
    email: ''
});
const removeDomain = (item: DomainItem) => {
    const index = dynamicValidateForm.domains.indexOf(item);
    if (index !== -1) {
        dynamicValidateForm.domains.splice(index, 1);
    }
};
const addDomain = () => {
    dynamicValidateForm.domains.push({
        key: Date.now(),
        value: ''
    });
};

// 数值验证
const formRef1 = ref<FormInstance>();
const numberValidateForm = reactive({
    age: ''
});

// 尺寸边框控制
const size = ref('default');
const labelPosition = ref('left');
const valuePosition = ref('left');
const round = ref<boolean>(true);
const sizeForm = reactive({
    name: '',
    name1: '禁用',
    name2: '',
    name3: '',
    name4: '',
    name5: '',
    region: '',
    date1: '',
    date2: '',
    delivery: false,
    type: [],
    resource: '',
    desc: '',
    age: ''
});

// 帮助提示
const formTooltip = reactive({
    name: '',
    date1: '',
    date2: '',
    type: [],
    desc: ''
});

// 脱敏数据外部提交
const formRef2 = ref();
const formData = reactive({
    testtext: '测试校验文本',
    name: '张三',
    address: '张家港市港城大道'
});
const formRules = reactive<FormRules>({
    testtext: [
        {
            type: 'string',
            required: true,
            message: '请输入',
            trigger: 'change'
        }
    ],
    name: [
        {
            type: 'string',
            required: true,
            message: '请输入',
            trigger: 'change'
        }
    ]
});
const submit = async () => {
    // 走表单验证
    const validateRes = await formRef2.value.validate((valid, fields) => {
        if (!valid) {
            // 处理错误信息
            ejs.ui.toast(`表单验证失败，错误字段：${Object.keys(fields).join('、')}`);

            return;
        }
    });

    // 验证未通过
    if (!validateRes) {
        return;
    }

    // 通过getCleanData 获取无需脱敏数据+脱敏已修改数据
    const data = formRef2.value.getCleanData();

    console.log('提交数据', data);

    Util.ajax({
        url: location.href,
        data
    })
        .then((res) => {
            ejs.ui.toast('提交成功');

            // 重置表单内脱敏项的已修改情况，避免重复提交
            formRef2.value.resetEditState();
        })
        .catch((err) => {
            console.error(`提交失败 ${JSON.stringify(err)}`);
        });
};

// 脱敏数据内部提交
const formRef3 = ref();
const formData3 = reactive({
    testtext: '测试必填文本',
    name: '张三',
    address: '张家港市港城大道'
});
const formRules3 = reactive<FormRules>({
    testtext: [
        {
            type: 'string',
            required: true,
            message: '请输入',
            trigger: 'change'
        }
    ],
    name: [
        {
            type: 'string',
            required: true,
            message: '请输入',
            trigger: 'change'
        }
    ]
});

// 表单请求配置
const submitUrl = ref(location.href);
const submitRequestOptions: Partial<SubmitRequestOptions> = {
    method: 'get',
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'with-test-falg': '1'
    },
    withCredentials: false,
    getRequestData: (data: Record<string, any>) => {
        console.log('提交数据', data);
        ejs.ui.toast(`提交数据： ${JSON.stringify(data)}`);

        return data;
    },
    validateErrorHandler: (fields: ValidateFieldsError): void => {
        ejs.ui.toast(`表单验证失败，错误字段：${Object.keys(fields).join('、')}`);
    },
    onSuccess: (response: any): void => {
        ejs.ui.toast('提交成功');
    }
};
// 表单提交
const submit3 = () => {
    // 表单提交
    formRef3.value.submit();
};
</script>
<style lang="scss" scoped>
@import '../css/common.scss';
.van-content {
    padding: 0 16px;
    background-color: #f7f8fa;
}
</style>
