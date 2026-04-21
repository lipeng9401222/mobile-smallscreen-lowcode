<template>
    <div class="van-content">
        <workflow-container
            class="workflow-container"
            :http-action="httpActionPath"
            :process-guid="processGuid"
            :pviGuid="pviGuid"
            :workItemGuid="workItemGuid"
            :form-data="formDataForWorkflow"
            :custom-params="customParamsForWorkflow"
            :form-ref-list="formRefList"
            @init="initPage"
            @save="frozenForm"
            @close="closePage"
            @select-person="selectPerson"
        >
            <template #headerExtra="{ processInfo }">
                <div>业务其他信息： {{ processInfo }}</div>
            </template>
            <e-form-m class="form mrg" ref="frameUserForm" :model="model" label-position="top">
                <e-form-item-m label="登录名" prop="frameuser.loginid">
                    <e-input-m v-model="model.frameuser.loginid" :disabled="isFormFrozen" />
                </e-form-item-m>
                <e-form-item-m label="用户姓名" prop="frameuser.displayname">
                    <e-input-m v-model="model.frameuser.displayname" />
                </e-form-item-m>
            </e-form-m>

            <e-form-m class="form mrg" ref="userextendinfoForm" :model="model" label-position="top">
                <e-form-item-m label="用户生日" prop="frameuser.userextendinfo.birthday">
                    <!-- <e-date-picker-m
                        v-model="model.frameuser.userextendinfo.birthday"
                        type="date"
                        format="YYYY/MM/DD"
                        value-format="YYYY-MM-DD"
                    /> -->
                </e-form-item-m>
                <e-form-item-m label="身份证号" prop="frameuser.userextendinfo.identitycardnum">
                    <e-input-m
                        v-model="model.frameuser.userextendinfo.identitycardnum"
                        :desensitization-type="DESENDATATYPE_ID_CARD"
                        clearable
                    />
                </e-form-item-m>
            </e-form-m>

            <workflow-tab
                class="mrg"
                :http-action="httpActionPath"
                :pviGuid="pviGuid"
                :workItemGuid="workItemGuid"
            ></workflow-tab>
        </workflow-container>
    </div>
</template>
<script lang="ts" setup>
import { ref, computed, provide } from 'vue';
import { onPageScroll } from '@dcloudio/uni-app';
import { model as modelWorkflow } from '../model/model_workflow';
import { useSelectPersonStore } from '../../selectperson/store';
import { DESENDATATYPE_ID_CARD } from '@epoint-mfe/eui-components';

onPageScroll(() => {});
// action路径地址
const httpActionPath = 'workflowcommoncontroller/';
// 工作流页面url上会携带以下guid，流程发起时只有processGuid
// 流程guid
const processGuid = 'ac7de324-ce86-48f2-b773-18dc35ce04ef';
// 流程实例guid
const pviGuid = ref('111');
// 工作项guid
const workItemGuid = ref('123');
const model = modelWorkflow as any;
// 表单接口使用数据,设置单独监听
const formDataForWorkflow = computed(() => {
    return {
        ...(model as any).frameuser,
        // 临时处理表单数据
        otherOuGuid: (model.frameuser.otherOuGuid || []).join(',')
    };
});
// 表单一引用
const frameUserForm = ref(null);
// 表单二引用
const userextendinfoForm = ref();
// 表单引用列表
const formRefList = computed(() => [frameUserForm, userextendinfoForm]);
// 个性化入参
const customParamsForWorkflow = computed(() => {
    return {
        userguid: isFormFrozen.value ? '' : model.initUserGuid
    };
});
const isEdit = ref(true);
// 是否冻结表单
const isFormFrozen = ref(isEdit.value);

// provide('model', model);

// model.onAfterInitConfig = () => {
//     // model.securityConfig.toolRules = {
//     //   frameuser: {
//     //     loginid: [{ disabled: true }],
//     //     displayname: [{ readOnly: true }],
//     //     telephoneoffice: [{ hidden: true }]
//     //   }
//     // };
//     // model.securityConfig.rules = {
//     //   frameuser: {
//     //     loginid: [{ required: true, message: '登录名不能为空', trigger: 'blur' }],
//     //     displayname: [{ required: true, message: '姓名不能为空', trigger: 'blur' }],
//     //     ouguid: [{ required: true, message: '请选择所在部门', trigger: 'change' }]
//     //   }
//     // };
// };

// 监听工作流组件初始化完成
const initPage = async () => {
    console.log('工作流初始化');
    // TODO: 页面配置请求入参
    model.securityConfigParams.processguid = processGuid;
    model.securityConfigParams.processversioninstanceguid = pviGuid.value;
    model.securityConfigParams.workitemguid = workItemGuid.value;
    // 初始化接口
    await model.initData({ userGuid: '', pviGuid: pviGuid.value, isCopy: false });

    model.frameuser.ouguid = model.frameuser.ouguid || '';
};

// 监听工作流保存后事件回调-冻结表单
// NOTE: 当工作流按钮替代完成表单保存操作后,需冻结表单关键值,防止保存但未下送时触发另一个保存操作
const frozenForm = (saveData) => {
    console.log('保存返回:', saveData);
    isFormFrozen.value = true;
};

// 关闭当前页面，错误/成功最终执行
const closePage = () => {
    console.log('工作流页面关闭');
    ejs.page.close();
};
// 选人
const SelectPersonStore = useSelectPersonStore();
const selectPerson = (config) => {
    SelectPersonStore.setOption(config);

    ejs.page.open({
        pageUrl: '../../selectperson/index'
    });
};
</script>
<style lang="scss" scoped>
@import '../css/common.scss';

.van-content {
    padding: 0;
}
.form {
    border-radius: var(--e-border-radius-base);
    overflow: hidden;
}

.mrg {
    margin-top: var(--e-space-l);
}
</style>
