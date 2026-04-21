<template>
    <div class="van-content">
        <div class="example-group">
            <text class="cell-title">基础用法</text>
            <div class="example-card">
                <div class="example-content">
                    <p>
                        整个文本框的值：
                        <span>{{ value1 }}</span>
                    </p>
                    <e-mention-m v-model="value1" :options="options1" style="width: 320px" @select="handleSelect" placeholder="Please input" />
                </div>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">Textarea</text>
            <div class="example-card">
                <e-mention-m
                    v-model="value2"
                    type="textarea"
                    :options="options2"
                    style="width: 320px"
                    placeholder="Please input"
                />
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">自定义标签</text>
            <div class="example-card">
                <e-mention-m v-model="value3" :options="options3" style="width: 320px" placeholder="Please input">
                    <template #label="{ item }">
                        <div style="display: flex; align-items: center">
                            <e-avatar-m :size="24" :src="item.avatar" />
                            <span style="margin-left: 6px">{{ item.value }}</span>
                        </div>
                    </template>
                </e-mention-m>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">加载远程选项</text>
            <div class="example-card">
                <e-mention-m
                    v-model="value4"
                    :options="options4"
                    :loading="loading"
                    style="width: 320px"
                    placeholder="Please input"
                    @search="handleSearch4"
                />
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">自定义触发字符</text>
            <div class="example-card">
                <e-mention-m
                    v-model="value5"
                    :options="options5"
                    :prefix="['@', '#']"
                    style="width: 320px"
                    placeholder="input @ to mention people, # to mention tag"
                    @search="handleSearch5"
                />
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">整体删除</text>
            <div class="example-card">
                <div class="example-content">
                    <div class="example-desc">Default whole delete</div>
                    <e-mention-m v-model="value6" whole :options="options6" style="width: 320px" placeholder="Please input" />
                    <e-divider-m />
                    <div class="example-desc">Custom whole delete check</div>
                    <e-mention-m
                        v-model="value7"
                        :options="options7"
                        :prefix="['@', '#']"
                        whole
                        :check-is-whole="checkIsWhole"
                        style="width: 320px"
                        placeholder="input @ to mention people, # to mention tag"
                        @search="handleSearch7"
                    />
                </div>
            </div>
        </div>

        <div class="example-group">
            <text class="cell-title">在表单里使用</text>
            <div class="example-card">
                <e-form-m ref="ruleFormRef" style="max-width: 600px" label-width="120px" :model="ruleForm" :rules="rules">
                    <e-form-item-m label="name" prop="name">
                        <e-mention-m v-model="ruleForm.name" :options="options" />
                    </e-form-item-m>
                    <e-form-item-m label="desc" prop="desc">
                        <e-mention-m v-model="ruleForm.desc" type="textarea" :options="options" placement="top" />
                    </e-form-item-m>
                    <e-form-item-m>
                        <e-button-m type="primary" @click="submitForm(ruleFormRef)">Submit</e-button-m>
                        <e-button-m @click="resetForm(ruleFormRef)">Reset</e-button-m>
                    </e-form-item-m>
                </e-form-m>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onBeforeUnmount, reactive } from 'vue';
const value1 = ref('@');
const options1 = ref([
    {
        label: '张三',
        value: '张三'
    },
    {
        label: '李四',
        value: '李四'
    },
    {
        label: '王五',
        value: '王五'
    },
    {
        label: 'btea',
        value: 'btea'
    }
]);
const value2 = ref('');

const options2 = ref([
    {
        label: 'Fuphoenixes',
        value: 'Fuphoenixes'
    },
    {
        label: 'kooriookami',
        value: 'kooriookami'
    },
    {
        label: 'Jeremy',
        value: 'Jeremy'
    },
    {
        label: 'btea',
        value: 'btea'
    }
]);
const value3 = ref('');

const options3 = ref([
    {
        value: 'Fuphoenixes',
        avatar: 'https://avatars.githubusercontent.com/u/27912232'
    },
    {
        value: 'kooriookami',
        avatar: 'https://avatars.githubusercontent.com/u/38392315'
    },
    {
        value: 'Jeremy',
        avatar: 'https://avatars.githubusercontent.com/u/15975785'
    },
    {
        value: 'btea',
        avatar: 'https://avatars.githubusercontent.com/u/24516654'
    }
]);
const value4 = ref('');
const loading = ref(false);
const options4 = ref([]);

let timer;
const handleSearch4 = (pattern) => {
    if (timer) clearTimeout(timer);

    loading.value = true;
    timer = setTimeout(() => {
        options4.value = ['Fuphoenixes', 'kooriookami', 'Jeremy', 'btea'].map((item) => ({
            label: pattern + item,
            value: pattern + item
        }));
        loading.value = false;
    }, 1500);
};

onBeforeUnmount(() => {
    if (timer) clearTimeout(timer);
});
const MOCK_DATA = {
    '@': ['Fuphoenixes', 'kooriookami', 'Jeremy', 'btea'],
    '#': ['1.0', '2.0', '3.0']
};
const value5 = ref('');
const options5 = ref([]);

const handleSearch5 = (_, prefix) => {
    options5.value = (MOCK_DATA[prefix] || []).map((value) => ({
        value
    }));
};
const value6 = ref('');
const value7 = ref('');
const options6 = ref(MOCK_DATA['@'].map((value) => ({ value })));
const options7 = ref([]);

const handleSearch7 = (_, prefix) => {
    options7.value = (MOCK_DATA[prefix] || []).map((value) => ({
        value
    }));
};

const checkIsWhole = (pattern, prefix) => {
    return (MOCK_DATA[prefix] || []).includes(pattern);
};
const ruleFormRef = ref();
const ruleForm = reactive({
    name: '',
    desc: ''
});

const options = ref([
    {
        label: 'Fuphoenixes',
        value: 'Fuphoenixes'
    },
    {
        label: 'kooriookami',
        value: 'kooriookami'
    },
    {
        label: 'Jeremy',
        value: 'Jeremy'
    },
    {
        label: 'btea',
        value: 'btea'
    }
]);
const handleSelect = (item) => {
    console.log('select', item);
};
const rules = reactive({
    name: [{ required: true, message: 'Please input name', trigger: 'blur' }],
    desc: [{ required: true, message: 'Please input desc', trigger: 'blur' }]
});

const submitForm = async (formEl) => {
    if (!formEl) return;
    await formEl.validate((valid, fields) => {
        if (valid) {
            console.log('submit!');
        } else {
            console.log('error submit!', fields);
        }
    });
};

const resetForm = (formEl) => {
    if (!formEl) return;
    formEl.resetFields();
};
</script>

<style scoped lang="scss">
@import '../css/common.scss';
</style>
