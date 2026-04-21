<template>
    <div class="van-content">
        <text class="cell-title">基本用法</text>
        <div class="flex justify-spacep-between mb-4 flex-wrap gap-4">
            <e-radio-group-m v-model="direction">
                <e-radio-m value="ltr">left to right</e-radio-m>
                <e-radio-m value="rtl">right to left</e-radio-m>
                <e-radio-m value="ttb">top to bottom</e-radio-m>
                <e-radio-m value="btt">bottom to top</e-radio-m>
            </e-radio-group-m>

            <e-button-m type="primary" style="margin-left: 16px" @click="drawerOpen = true">open</e-button-m>
            <e-button-m type="primary" style="margin-left: 16px" @click="drawerFooter = true">with footer</e-button-m>

            <e-drawer-m
                v-model="drawerOpen"
                title="I am the title"
                modal
                :direction="direction"
                :before-close="handleClose"
                :close-on-click-modal="true"
            >
                <span>Hi, there!</span>
            </e-drawer-m>
            <e-drawer-m v-model="drawerFooter" :direction="direction" :close-on-click-modal="true" size="60%">
                <template #header>
                    <h4>set title by slot</h4>
                </template>
                <template #default>
                    <e-radio-group-m v-model="radio1">
                        <e-radio-m value="Option 1" size="large">Option 1</e-radio-m>
                        <e-radio-m value="Option 2" size="large">Option 2</e-radio-m>
                    </e-radio-group-m>
                </template>
                <template #footer>
                    <div style="display: flex; align-items: center; justify-content: space-around">
                        <e-button-m @click="cancelClick">cancel</e-button-m>
                        <e-button-m type="primary" @click="confirmClick">confirm</e-button-m>
                    </div>
                </template>
            </e-drawer-m>
        </div>
        <text class="cell-title">无标题</text>
        <div class="flex justify-spacep-between mb-4 flex-wrap gap-4">
            <e-button-m type="primary" style="margin-left: 16px" @click="drawerNoTitle = true">open</e-button-m>

            <e-drawer-m v-model="drawerNoTitle" title="I am the title" :with-header="false" close-on-click-modal>
                <span>Hi there!</span>
                <p>There is no Header, so there is no title. You can click the overlay to close this drawer.</p>
                <p>没有顶部，所以没有标题，你可以点击遮罩层来关闭此抽屉。</p>
            </e-drawer-m>
        </div>
        <text class="cell-title">自定义内容</text>
        <div class="flex justify-spacep-between mb-4 flex-wrap gap-4">
            <e-button-m text @click="table = true">Open Drawer with nested table</e-button-m>
            <e-button-m text @click="dialog = true">Open Drawer with nested form</e-button-m>

            <e-drawer-m v-model="table" title="I have a nested table inside!" direction="rtl" size="80%">
                <e-table-m :data-source="gridData" :columns="columnList"></e-table-m>
            </e-drawer-m>
            <e-drawer-m
                ref="drawerRef"
                v-model="dialog"
                title="I have a nested form inside!"
                :before-close="handleCloseForm"
                direction="ltr"
                class="demo-drawer"
                size="80%"
            >
                <div class="demo-drawer__content">
                    <e-form-m :model="form">
                        <e-form-item-m label="Name" :label-width="formLabelWidth">
                            <e-input-m v-model="form.name" autocomplete="off" placeholder="Please enter name" />
                        </e-form-item-m>
                        <e-form-item-m label="Area" :label-width="formLabelWidth">
                            <e-select-m v-model="form.region" placeholder="Please select activity area">
                                <e-option-m label="Area1" value="shanghai" />
                                <e-option-m label="Area2" value="beijing" />
                            </e-select-m>
                        </e-form-item-m>
                    </e-form-m>
                    <div class="demo-drawer__footer">
                        <e-button-m @click="cancelForm">Cancel</e-button-m>
                        <e-button-m type="primary" :loading="loading" @click="onClick">
                            {{ loading ? 'Submitting ...' : 'Submit' }}
                        </e-button-m>
                    </div>
                </div>
            </e-drawer-m>
        </div>
        <text class="cell-title">自定义标题</text>
        <div class="flex justify-spacep-between mb-4 flex-wrap gap-4">
            <e-button-m @click="visible = true">Open Drawer with customized header</e-button-m>
            <e-drawer-m v-model="visible" :show-close="false" size="60%">
                <template #header="{ close, titleId, titleClass }">
                    <h4 :id="titleId" :class="titleClass">This is a custom header!</h4>
                    <e-button-m type="danger" @click="close">
                        <e-icon-m class="ep-icon--left"><CircleCloseFilled /></e-icon-m>
                        Close
                    </e-button-m>
                </template>
                This is drawer content.
            </e-drawer-m>
        </div>
        <text class="cell-title">嵌套的抽屉</text>
        <div class="flex justify-spacep-between mb-4 flex-wrap gap-4">
            <e-button-m type="primary" style="margin-left: 16px" @click="drawerInner = true">open</e-button-m>

            <e-drawer-m v-model="drawerInner" title="I'm outer Drawer" size="70%">
                <div>
                    <e-button-m @click="innerDrawer = true">Click me!</e-button-m>
                    <e-drawer-m
                        v-model="innerDrawer"
                        title="I'm inner Drawer"
                        :before-close="handleCloseInner"
                    >
                        <p>_(:зゝ∠)_</p>
                    </e-drawer-m>
                </div>
            </e-drawer-m>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { reactive, ref } from 'vue';
import { EMessageBoxM } from '@epoint-mfe/eui-components';
import { CircleCloseFilled } from '@epoint-mfe/eui-icons';

const drawerOpen = ref(false);
const drawerFooter = ref(false);
const drawerNoTitle = ref(false);
const drawerInner = ref(false);
const direction = ref('rtl');
const radio1 = ref('Option 1');
const visible = ref(false);
const innerDrawer = ref(false);

const handleClose = (done: () => void) => {
    EMessageBoxM.confirm('Are you sure you want to close this?')
        .then(() => {
            done();
        })
        .catch(() => {
            // catch error
        });
};

function cancelClick() {
    drawerFooter.value = false;
}

function confirmClick() {
    EMessageBoxM.confirm(`Are you confirm to chose ${radio1.value} ?`)
        .then(() => {
            drawerFooter.value = false;
        })
        .catch(() => {
            // catch error
        });
}

// 自定义内容 ↓↓↓
const formLabelWidth = '80px';
let timer: ReturnType<typeof setTimeout>;

const table = ref(false);
const dialog = ref(false);
const loading = ref(false);

const form = reactive({
    name: '',
    region: '',
    date1: '',
    date2: '',
    delivery: false,
    type: [],
    resource: '',
    desc: ''
});

const gridData = [
    {
        date: '2016-05-02',
        name: 'Peter Parker',
        address: 'Queens, New York City'
    },
    {
        date: '2016-05-04',
        name: 'Peter Parker',
        address: 'Queens, New York City'
    },
    {
        date: '2016-05-01',
        name: 'Peter Parker',
        address: 'Queens, New York City'
    },
    {
        date: '2016-05-03',
        name: 'Peter Parker',
        address: 'Queens, New York City'
    }
];

const columnList: Record<string, any>[] = [
    { key: 'date', dataIndex: 'date', title: '日期', width: '30%' },
    { key: 'name', dataIndex: 'name', title: '姓名', width: '30%' },
    { key: 'address', dataIndex: 'address', title: '地址', width: '40%' }
];

const drawerRef = ref<any>();
const onClick = () => {
    drawerRef.value?.handleClose();
};

const handleCloseForm = (done: () => void) => {
    if (loading.value) {
        return;
    }
    EMessageBoxM.confirm('Do you want to submit?')
        .then(() => {
            loading.value = true;
            timer = setTimeout(() => {
                done();
                // 动画关闭需要一定的时间
                setTimeout(() => {
                    loading.value = false;
                }, 400);
            }, 2000);
        })
        .catch(() => {
            // catch error
        });
};

const cancelForm = () => {
    loading.value = false;
    dialog.value = false;
    clearTimeout(timer);
};

const handleCloseInner = (done: () => void) => {
    EMessageBoxM.confirm('You still have unsaved data, proceed?')
        .then(() => {
            done();
        })
        .catch(() => {
            // catch error
        });
};
</script>
<style lang="scss" scoped>
@import '../css/common.scss';

.demo-drawer__footer {
    display: flex;
    align-items: center;
    justify-content: space-around;
}
.ep-icon--left {
    display: flex;
    align-items: center;
}
</style>
