<template>
    <div class="van-content">
        <div class="example-group">
            <text class="cell-title">基本用法</text>
            <div class="example-card">
                <e-input-m v-model="input" placeholder="请输入"></e-input-m>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">禁用状态</text>
            <div class="example-card">
                <e-input-m v-model="input1" disabled placeholder="Please input" />
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">一键清空</text>
            <div class="example-card">
                <div class="example-desc">输入框支持一键清空功能，监听各类事件</div>
                <e-input-m
                    v-model="input2"
                    clearable
                    ref="inputRef"
                    placeholder="Please input"
                    @input="onInput"
                    @blur="onBlur"
                    @focus="onFocus"
                    @change="onChange"
                    @clear="onClear"
                />
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">格式化</text>
            <div class="example-card">
                <div class="example-desc">自动格式化输入内容为金额格式</div>
                <e-input-m
                    v-model="input3"
                    placeholder="输入金额"
                    :formatter="(value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')"
                    :parser="(value) => value.replace(/\$\s?|(,*)/g, '')"
                />
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">密码框</text>
            <div class="example-card">
                <div class="example-desc">密码输入框支持显示/隐藏密码</div>
                <e-input-m v-model="input4" type="password" placeholder="Please input password" show-password />
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">带图标的输入框</text>
            <div class="example-card">
                <div class="example-content">
                    <div class="example-desc">使用 suffix-icon 属性</div>
                    <e-input-m v-model="input5" placeholder="Pick a date" :suffix-icon="Calendar" />
                    
                    <div class="example-desc">使用 prefix-icon 属性</div>
                    <e-input-m v-model="input6" placeholder="Type something" :prefix-icon="Search" />
                    
                    <div class="example-desc">使用 suffix 插槽</div>
                    <e-input-m v-model="input7" placeholder="Pick a date">
                        <template #suffix>
                            <e-icon-m class="e-input__icon"><Calendar /></e-icon-m>
                        </template>
                    </e-input-m>
                    
                    <div class="example-desc">使用 prefix 插槽</div>
                    <e-input-m v-model="input8" placeholder="Type something">
                        <template #prefix>
                            <e-icon-m class="ep-input__icon"><Search /></e-icon-m>
                        </template>
                    </e-input-m>
                </div>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">文本域</text>
            <div class="example-card">
                <e-input-m v-model="textarea" :rows="2" type="textarea" placeholder="Please input" />
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">自适应文本域</text>
            <div class="example-card">
                <div class="example-content">
                    <div class="example-desc">自动调整高度</div>
                    <e-input-m v-model="textarea1" autosize type="textarea" placeholder="Please input" />
                    
                    <div class="example-divider"></div>
                    
                    <div class="example-desc">限制最小和最大行数</div>
                    <e-input-m
                        v-model="textarea2"
                        :autosize="{ minRows: 2, maxRows: 4 }"
                        type="textarea"
                        placeholder="Please input"
                    />
                </div>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">复合型输入框</text>
            <div class="example-card">
                <div class="example-content">
                    <div class="example-desc">前置内容</div>
                    <e-input-m v-model="input11" placeholder="Please input">
                        <template #prepend>Http://</template>
                    </e-input-m>
                    
                    <div class="example-desc">后置内容</div>
                    <e-input-m v-model="input22" placeholder="Please input">
                        <template #append>.com</template>
                    </e-input-m>
                </div>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">尺寸大小</text>
            <div class="example-card">
                <div class="example-content">
                    <div class="example-desc">基本尺寸</div>
                    <div class="demo-input-size">
                        <e-input-m v-model="input88" size="large" placeholder="大尺寸" />
                        <e-input-m v-model="input99" placeholder="默认尺寸" />
                        <e-input-m v-model="input00" size="small" placeholder="小尺寸" />
                    </div>
                    
                    <div class="example-desc">带后置图标</div>
                    <div class="demo-input-size">
                        <e-input-m v-model="input88" size="large" placeholder="大尺寸" :suffix-icon="Search" />
                        <e-input-m v-model="input99" placeholder="默认尺寸" :suffix-icon="Search" />
                        <e-input-m v-model="input00" size="small" placeholder="小尺寸" :suffix-icon="Search" />
                    </div>
                    
                    <div class="example-desc">带前置图标</div>
                    <div class="demo-input-size">
                        <e-input-m v-model="input88" size="large" placeholder="大尺寸" :prefix-icon="Search" />
                        <e-input-m v-model="input99" placeholder="默认尺寸" :prefix-icon="Search" />
                        <e-input-m v-model="input00" size="small" placeholder="小尺寸" :prefix-icon="Search" />
                    </div>
                </div>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">输入长度限制</text>
            <div class="example-card">
                <div class="example-content">
                    <div class="example-desc">文本输入框（最多10个字符）</div>
                    <e-input-m v-model="text" maxlength="10" placeholder="Please input" show-word-limit type="text" />
                    
                    <div class="example-divider"></div>
                    
                    <div class="example-desc">文本域（最多30个字符）</div>
                    <e-input-m v-model="textarea3" maxlength="30" placeholder="Please input" show-word-limit type="textarea" />
                </div>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">脱敏</text>
            <div class="example-card">
                <div class="example-content">
                    <div class="example-desc">手机号脱敏</div>
                    <e-input-m v-model="input55" placeholder="Please input" :desensitization-type="DESENDATATYPE_MOBILE_PHONE" />
                    
                    <div class="example-desc">身份证号脱敏</div>
                    <e-input-m v-model="input66" placeholder="Please input" desensitization-type="ID_CARD" />
                    
                    <e-button-m type="primary" @click="getInputValue">获取输入值</e-button-m>
                </div>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">自定义脱敏</text>
            <div class="example-card">
                <div class="example-content">
                    <div class="example-desc">邮箱自定义脱敏规则</div>
                    <e-input-m
                        v-model="input77"
                        placeholder="Please input"
                        :desensitization-type="DESENDATATYPE_CUSTOM"
                        :desensitizer="desensitizer"
                    />
                    <e-button-m type="primary" @click="getInputValue1">获取输入值</e-button-m>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, watch, onMounted } from 'vue';
import { Search, Calendar } from '@epoint-mfe/eui-icons';
import { DESENDATATYPE_MOBILE_PHONE, DESENDATATYPE_CUSTOM } from '@epoint-mfe/eui-components';

const inputRef = ref(null);
const input = ref('17215683972');

watch(input, (value) => {
    console.log('input', value);
});

const onInput = (e) => {
    console.log('onInput', e);
};
const input1 = ref('输入框已禁用');
const input2 = ref('');
const input3 = ref('');
const input4 = ref('');
const input5 = ref('使用 suffix-icon');
const input6 = ref('使用 prefix-icon');
const input7 = ref('使用 suffix slot');
const input8 = ref('使用 prefix slot');
const input11 = ref('');
const input22 = ref('');
const input33 = ref('');
const input44 = ref('');
const input55 = ref('17215683972');
const input66 = ref('612300190001010000');
const input77 = ref('epoint@epoint.com.cn');
const input88 = ref('大尺寸');
const input99 = ref('中尺寸');
const input00 = ref('小尺寸');
const textarea = ref('');
const textarea1 = ref('');
const textarea2 = ref('');
const textarea3 = ref('');
const text = ref('');

const getInputValue = () => {
    ejs.ui.toast(`手机号:${input55.value};身份证号:${input66.value}`);
};
const desensitizer = (val) => {
    const index = val.indexOf('@');

    return `****${val.slice(index)}`;
};
const getInputValue1 = () => {
    ejs.ui.toast(`输入框值:${input77.value}`);
};

const onBlur = () => {
    console.log('blur');
};
const onFocus = () => {
    console.log('focus');
};
const onClear = () => {
    console.log('clear');
};
const onChange = (e) => {
    console.log('change', e);
};
const onClick = () => {
    console.log('textareaStyle', inputRef.value.textareaStyle);
    inputRef.value.select();
};
</script>
<style lang="scss" scoped>
@import '../css/common.scss';
</style>
