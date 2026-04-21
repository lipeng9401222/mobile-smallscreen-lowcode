<template>
    <div class="container">
        <div class="van-content">
            <h4 class="cell-title">基础用法</h4>
            <em-form @submit="onSubmit" colon>
                <em-field
                    v-model="username"
                    name="用户名"
                    label="用户名"
                    placeholder="用户名"
                    :rules="[{ required: true, message: '请填写用户名' }]"
                />
                <em-field
                    v-model="password"
                    type="password"
                    name="密码"
                    label="密码"
                    placeholder="密码"
                    :rules="[{ required: true, message: '请填写密码' }]"
                />
                <div style="margin: 16px">
                    <em-button round block type="info" native-type="submit">提交</em-button>
                </div>
            </em-form>

            <h4 class="cell-title">表单项类型</h4>
            <em-form input-align="vertical" @submit="onSubmit">
                <em-field name="name" label="姓名" placeholder="请输入" v-model="value7"></em-field>
                <em-field :modelValue="switchChecked1" name="switch" label="滑动开关" input-align="right">
                    <template #input>
                        <em-switch v-model="switchChecked1" />
                    </template>
                </em-field>
                <em-field name="checkbox" label="复选框" input-align="left">
                    <template #input>
                        <em-checkbox v-model="checkbox" shape="square" />
                    </template>
                </em-field>
                <em-field name="checkboxGroup1" label="复选框组">
                    <template #input>
                        <em-checkbox-group v-model="checkboxGroup1">
                            <em-checkbox name="1" shape="square">复选框 1</em-checkbox>
                            <em-checkbox name="2" shape="square" style="margin-top: 10px">复选框 2</em-checkbox>
                        </em-checkbox-group>
                    </template>
                </em-field>
                <em-field name="radio" label="单选框">
                    <template #input>
                        <em-radio-group v-model="radio" direction="horizontal">
                            <em-radio name="1">单选框 1</em-radio>
                            <em-radio name="2">单选框 2</em-radio>
                        </em-radio-group>
                    </template>
                </em-field>
                <em-field name="stepper" label="数字步进器">
                    <template #input>
                        <em-stepper v-model="stepper" />
                    </template>
                </em-field>
                <em-field
                    readonly
                    clickable
                    is-link
                    name="picker"
                    :modelValue="value9"
                    label="选择器"
                    placeholder="点击选择城市"
                    @click="showPicker4 = true"
                />
                <em-field
                    readonly
                    clickable
                    is-link
                    name="pickerMuti"
                    label="复选"
                    :modelValue="selectedList"
                    @click="onClick"
                >
                    <template #input>
                        <div v-if="selectedList.length">
                            <em-tag
                                v-for="(item, index) in selectedList"
                                :key="item"
                                basic-type="person"
                                class="tag"
                                closeable
                                @close="close(index)"
                            >
                                {{ item }}
                            </em-tag>
                        </div>
                        <text v-else class="placeholder">点击多选</text>
                    </template>
                </em-field>
                <em-field
                    readonly
                    clickable
                    is-link
                    name="datetimePicker"
                    :modelValue="value8"
                    label="时间选择"
                    placeholder="点击选择时间"
                    @click="showPicker3 = true"
                />
                <!-- <em-field
                    readonly
                    clickable
                    name="area"
                    :modelValue="value5"
                    label="地区选择"
                    placeholder="点击选择省市区"
                    @click="showArea = true"
                />
                <em-field
                    readonly
                    clickable
                    name="calendar"
                    v-model="value6"
                    label="日历"
                    placeholder="点击选择日期"
                    @click="showCalendar = true"
                /> -->

                <div style="margin: 16px">
                    <em-button round block type="info" native-type="submit">提交</em-button>
                </div>
            </em-form>
            <em-picker
                v-model="showPicker4"
                show-toolbar
                :columns="columns"
                @confirm="onConfirm4"
                @cancel="showPicker4 = false"
            />
            <em-date-picker
                v-model="showPicker3"
                basic
                type="time"
                @confirm="onConfirm3"
                @cancel="showPicker3 = false"
            />

            <h4 class="cell-title">校验规则</h4>
            <em-form validate-first @failed="onFailed" @submit="onSubmit">
                <!-- 通过 pattern 进行正则校验 -->
                <em-field
                    v-model="value1"
                    label="文本"
                    name="pattern"
                    placeholder="正则校验"
                    :rules="[{ pattern, message: '请输入六位数字' }]"
                />
                <!-- 通过 validator 进行函数校验 -->
                <em-field
                    v-model="value2"
                    label="文本"
                    name="validator"
                    placeholder="函数校验"
                    :rules="[{ validator, message: '请输入以1开头的11位数字' }]"
                />
                <!-- 通过 validator 进行异步函数校验 -->
                <em-field
                    v-model="value3"
                    label="文本"
                    name="asyncValidator"
                    placeholder="异步函数校验"
                    :rules="[{ validator: asyncValidator, message: '请输入六位数字' }]"
                />
                <div style="margin: 16px">
                    <em-button round block type="info" native-type="submit">提交</em-button>
                </div>
            </em-form>

            <h4 class="cell-title">脱敏</h4>
            <em-form ref="formComp" validate-first @failed="onFailed" @submit="onSubmit2">
                <!-- 手机号，默认脱敏校验 -->
                <em-field
                    v-model="valueMobile"
                    label="手机号"
                    name="mobile"
                    placeholder="请输入手机号"
                    :rules="[{ validator, message: '请输入以1开头的11位数字' }]"
                    :desensitization-type="DESENDATATYPE_MOBILE_PHONE"
                />
                <!-- 邮箱，自定义脱敏 -->
                <em-field
                    v-model="valueEmail"
                    label="邮箱"
                    name="email"
                    placeholder="请输入邮箱"
                    :rules="[{ validator: emailValidator, message: '请输入正确的邮箱格式' }]"
                    :desensitization-type="DESENDATATYPE_CUSTOM"
                    :desensitizer="desensitizer"
                />
                <div style="margin: 16px">
                    <em-button round block type="info" native-type="submit">提交</em-button>
                </div>
            </em-form>

            <h4 class="cell-title">表单项类型</h4>
            <em-form @submit="onSubmit">
                <em-field name="switch" label="开关">
                    <template #input>
                        <em-switch v-model="switchChecked" size="20" />
                    </template>
                </em-field>
                <!-- <em-field name="checkbox" label="复选框">
                    <template #input>
                        <em-checkbox v-model="checkbox" shape="square" />
                    </template>
                </em-field>
                <em-field name="checkboxGroup" label="复选框组">
                    <template #input>
                        <em-checkbox-group v-model="checkboxGroup" direction="horizontal">
                            <em-checkbox name="1" shape="square">复选框 1</em-checkbox>
                            <em-checkbox name="2" shape="square">复选框 2</em-checkbox>
                        </em-checkbox-group>
                    </template>
                </em-field>
                <em-field name="radio" label="单选框">
                    <template #input>
                        <em-radio-group v-model="radio" direction="horizontal">
                            <em-radio name="1">单选框 1</em-radio>
                            <em-radio name="2">单选框 2</em-radio>
                        </em-radio-group>
                    </template>
                </em-field> -->
                <em-field name="stepper" label="步进器">
                    <template #input>
                        <em-stepper v-model="stepper" />
                    </template>
                </em-field>
                <em-field name="rate" label="评分">
                    <template #input>
                        <em-rate v-model="rate" />
                    </template>
                </em-field>
                <em-field name="slider" label="滑块">
                    <template #input>
                        <view style="width: 100%">
                            <em-slider v-model="slider" />
                        </view>
                    </template>
                </em-field>
                <!-- <em-field name="uploader" label="文件上传">
                    <template #input>
                        <em-uploader v-model="uploader" />
                    </template>
                </em-field> -->
                <!-- <em-field
                    readonly
                    clickable
                    name="picker"
                    :modelValue="value"
                    label="选择器"
                    placeholder="点击选择城市"
                    @click="showPicker = true"
                />
                <em-field
                    readonly
                    clickable
                    name="datetimePicker"
                    :modelValue="value4"
                    label="时间选择"
                    placeholder="点击选择时间"
                    @click="showPicker2 = true"
                />
                <em-field
                    readonly
                    clickable
                    name="area"
                    :modelValue="value5"
                    label="地区选择"
                    placeholder="点击选择省市区"
                    @click="showArea = true"
                />
                <em-field
                    readonly
                    clickable
                    name="calendar"
                    v-model="value6"
                    label="日历"
                    placeholder="点击选择日期"
                    @click="showCalendar = true"
                /> -->

                <div style="margin: 16px">
                    <em-button round block type="info" native-type="submit">提交</em-button>
                </div>
            </em-form>
            <!-- <em-picker
                v-model="showPicker"
                show-toolbar
                :columns="columns"
                @confirm="onConfirm"
                @cancel="showPicker = false"
            />
            <em-date-picker v-model="showPicker2" type="time" @confirm="onConfirm2" @cancel="showPicker2 = false" />
            <em-area v-model="showArea" :area-list="areaList" @confirm="onConfirmArea" @cancel="showArea = false" />
            <em-calendar v-model="showCalendar" @confirm="onConfirmCalendar" /> -->
        </div>
        <em-toast ref="emToast"></em-toast>
    </div>
</template>

<script lang="ts">
import { DESENDATATYPE_CUSTOM, DESENDATATYPE_MOBILE_PHONE } from '@components/common/use-desensitization';
export default {
    name: 'Field',
    data() {
        return {
            checkbox: false,
            username: '',
            password: '',
            switchChecked: false,
            switchChecked1: false,
            checkboxGroup: [],
            checkboxGroup1: [],
            checkboxGroup2: [],
            radio: '1',
            stepper: 1,
            value1: '',
            value2: '',
            value3: '',
            pattern: '^\\d{6}$',
            rate: 3,
            slider: 50,
            uploader: [{ url: 'https://img.yzcdn.cn/vant/leaf.jpg' }],
            value: '',
            columns: ['杭州', '宁波', '温州', '嘉兴', '湖州'],
            showPicker: false,
            value4: '',
            showPicker2: false,
            showPicker3: false,
            showPicker4: false,
            showPicker5: false,
            value5: '',
            showArea: false,
            areaList: {
                // eslint-disable-next-line camelcase
                province_list: {
                    110000: '北京市',
                    120000: '天津市'
                },
                // eslint-disable-next-line camelcase
                city_list: {
                    110100: '北京市',
                    110200: '县',
                    120100: '天津市',
                    120200: '县'
                },
                // eslint-disable-next-line camelcase
                county_list: {
                    110101: '东城区',
                    110102: '西城区',
                    110105: '朝阳区',
                    110106: '丰台区',
                    120101: '和平区',
                    120102: '河东区',
                    120103: '河西区',
                    120104: '南开区',
                    120105: '河北区'
                }
            },
            value6: '',
            showCalendar: false,
            value7: '',
            value8: '',
            value9: '',
            selectedList: [],
            valueMobile: '11111111111',
            valueEmail: '222@qq.com'
        };
    },
    computed: {
        DESENDATATYPE_CUSTOM() {
            return DESENDATATYPE_CUSTOM;
        },
        DESENDATATYPE_MOBILE_PHONE() {
            return DESENDATATYPE_MOBILE_PHONE;
        }
    },
    methods: {
        onSubmit(values) {
            console.log('submit', values);
        },
        // 校验函数返回 true 表示校验通过，false 表示不通过
        validator(val) {
            return /^1\d{10}$/.test(val);
        },
        // 异步校验函数返回 Promise
        asyncValidator(val) {
            return new Promise((resolve) => {
                Toast.loading('验证中...');

                setTimeout(() => {
                    Toast.clear();
                    resolve(/^\d{6}$/.test(val));
                }, 1000);
            });
        },
        emailValidator(val) {
            return /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/.test(val);
        },
        desensitizer(val) {
            const index = val.indexOf('@');

            return `****${val.slice(index)}`;
        },
        onSubmit2(values) {
            ejs.ui.alert(JSON.stringify(values), '提交成功', '确定');
            // 提交成功后需要重置脱敏字段编辑状态
            this.$refs.formComp.resetEditState();
        },
        onFailed(errorInfo) {
            var Console = console;

            Console.log('failed', errorInfo);
        },
        onConfirm(value) {
            this.value = value;
            this.showPicker = false;
        },
        onConfirm2(time) {
            this.value4 = time;
            this.showPicker2 = false;
        },
        onConfirm3(time) {
            this.value8 = time;
            this.showPicker3 = false;
        },
        onConfirm4(value) {
            this.value9 = value;
            this.showPicker4 = false;
        },
        onConfirmArea(values) {
            this.value5 = values.map((item) => item.name).join('/');
            this.showArea = false;
        },
        onConfirmCalendar(date) {
            this.value6 = `${date.getMonth() + 1}/${date.getDate()}`;
            this.showCalendar = false;
        },
        onClick() {
            const self = this;

            ejs.ui.select({
                title: '',
                items: ['远野贵树', '篠原明里', '澄田花苗', '立花泷', '宫水三叶'],
                choiceState: ['0', '0', '0', '1', '1'],
                isMultiSelect: 1,
                cancelable: 1,
                h5UI: false, // 是否强制使用H5-UI效果，默认false
                success: function (result) {
                    self.selectedList = result.choiceContent;
                },
                error: function () {}
            });
        },
        close(index) {
            let list = this.selectedList.slice(0);

            list.splice(index, 1);
            this.selectedList = list;
        }
    }
};
</script>

<style scoped>
.van-content {
    background-color: #f7f8fa;
}

.tag {
    margin-left: 10px;
    margin-bottom: 10px;
}

.placeholder {
    font-size: 16px;
    color: rgb(184, 190, 204);
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
    color: rgba(69, 90, 100, 0.6);
    font-size: 14px;
    font-weight: 400;
}
</style>
