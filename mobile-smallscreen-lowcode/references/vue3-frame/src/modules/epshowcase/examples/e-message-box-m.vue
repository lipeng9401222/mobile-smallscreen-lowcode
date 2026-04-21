<template>
    <text class="cell-title">不同状态的消息弹窗</text>
    <div class="demo-message-box">
        <div class="demo-message-box__buttons">
            <e-button-m @click="openDefault">默认消息框</e-button-m>
            <e-button-m type="success" @click="openSuccess">成功消息框</e-button-m>
            <e-button-m type="warning" @click="openWarning">警告消息框</e-button-m>
            <e-button-m type="danger" @click="openError">错误消息框</e-button-m>
        </div>
    </div>
    <text class="cell-title">Alert</text>
    <e-button-m text @click="openAlert">Click to open the Message Box</e-button-m>
    <text class="cell-title">Confirm</text>
    <e-button-m text @click="openConfirm">Click to open the Message Box</e-button-m>
    <text class="cell-title">Prompt</text>
    <e-button-m text @click="openPrompt">Click to open Message Box</e-button-m>
    <text class="cell-title">DeletePrompt</text>
    <e-divider-m>默认弹框</e-divider-m>
    <e-button-m text @click="openDeletePrompt">Click to open Default Delete Prompt Message Box</e-button-m>
    <e-divider-m>个性化弹框</e-divider-m>
    <e-button-m text @click="openCustom">Click to open Message Box</e-button-m>
    <text class="cell-title">使用 VNode</text>
    <e-button-m plain @click="openVnode">Common VNode</e-button-m>
    <e-button-m plain @click="openVnode1">Dynamic props</e-button-m>
    <text class="cell-title">自定义</text>
    <e-button-m text @click="open2">Click to open Message Box</e-button-m>
    <text class="cell-title">使用 HTML 字符串</text>
    <e-button-m text @click="openHtml">Click to open Message Box</e-button-m>
    <text class="cell-title">区分取消和关闭</text>
    <e-button-m text @click="openCancelAndClose">Click to open Message Box</e-button-m>
    <text class="cell-title">自定义图标</text>
    <e-button-m text @click="openIcon">Click to open Message Box</e-button-m>
</template>

<script lang="ts" setup>
import { EMessageBoxM, EMessageM, ESwitchM } from '@epoint-mfe/eui-components';
import type { Action } from '@epoint-mfe/eui-components';
import { ref, h, markRaw } from 'vue';
import { Delete } from '@epoint-mfe/eui-icons';
const openDefault = () => {
    EMessageBoxM.alert('这是一条默认消息提示', '提示', {
        confirmButtonText: '确定'
    });
};

const openSuccess = () => {
    EMessageBoxM.alert('操作已成功完成', '成功', {
        type: 'success',
        confirmButtonText: '确定'
    });
};

const openWarning = () => {
    EMessageBoxM.confirm('此操作将永久删除该文件, 是否继续?', '警告', {
        type: 'warning',
        confirmButtonText: '确定',
        cancelButtonText: '取消'
    });
};

const openError = () => {
    EMessageBoxM.alert('系统检测到错误，请联系管理员', '错误', {
        type: 'error',
        confirmButtonText: '我知道了'
    });
};
const openAlert = () => {
    EMessageBoxM.alert('This is a message', 'Title', {
        // if you want to disable its autofocus
        // autofocus: false,
        callback: (action: Action) => {
            EMessageM({
                type: 'info',
                message: `action: ${action}`
            });
        }
    });
};
const openConfirm = () => {
    EMessageBoxM.confirm('proxy will permanently delete the file. Continue?', 'Warning', {
        type: 'warning'
    })
        .then(() => {
            EMessageM({
                type: 'success',
                message: 'Delete completed'
            });
        })
        .catch(() => {
            EMessageM({
                type: 'info',
                message: 'Delete canceled'
            });
        });
};
const openPrompt = () => {
    EMessageBoxM.prompt('请输入您的邮箱', '提示', {
        inputPattern:
            /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
        inputErrorMessage: '无效的邮箱格式',
        confirmButtonDisabled: true,
        inputValidator: (value, state, isValid) => {
            state.confirmButtonDisabled = !isValid;
            return isValid;
        }
    })
        .then(({ value }) => {
            EMessageM({
                type: 'success',
                message: `您的邮箱是: ${value}`
            });
        })
        .catch(() => {
            EMessageM({
                type: 'info',
                message: '输入已取消'
            });
        });
};
const hintValueDefault = ref('删除');
const openDeletePrompt = () => {
    EMessageBoxM.deletePrompt({
        keyword: hintValueDefault.value
    })
        .then(() => {
            EMessageM({
                type: 'success',
                message: `Delete success`
            });
        })
        .catch(() => {
            EMessageM({
                type: 'info',
                message: 'Delete canceled'
            });
        });
};
const hintValueCustom = ref('你的名字');

const openCustom = () => {
    EMessageBoxM.deletePrompt({
        message: '检查姓名',
        title: '确认删除',
        confirmTpl: ', 请再次输入姓名 %s ',
        keyword: hintValueCustom.value,
        inputErrorMessage: '输入名称不匹配',
        keywordSelectable: true
    })
        .then(() => {
            EMessageM({
                type: 'success',
                message: `Delete success`
            });
        })
        .catch(() => {
            EMessageM({
                type: 'info',
                message: 'Delete canceled'
            });
        });
};
const openVnode = () => {
    EMessageBoxM({
        title: 'Message',
        message: h('p', null, [h('span', null, 'Message can be '), h('i', { style: 'color: teal' }, 'VNode')])
    });
};

const openVnode1 = () => {
    const checked = ref<boolean | string | number>(false);
    EMessageBoxM({
        title: 'Message',
        // Should pass a function if VNode contains dynamic props
        message: () =>
            h(ESwitchM, {
                modelValue: checked.value,
                'onUpdate:modelValue': (val: boolean | string | number) => {
                    checked.value = val;
                }
            })
    });
};
const open2 = () => {
    EMessageBoxM({
        title: 'Message',
        message: h('p', null, [h('span', null, 'Message can be '), h('i', { style: 'color: teal' }, 'VNode')]),
        showCancelButton: true,
        // confirmButtonText: 'OK',
        // cancelButtonText: 'Cancel',
        beforeClose: (action, instance, done) => {
            if (action === 'confirm') {
                instance.confirmButtonLoading = true;
                instance.confirmButtonText = 'Loading...';
                setTimeout(() => {
                    done();
                    setTimeout(() => {
                        instance.confirmButtonLoading = false;
                    }, 300);
                }, 3000);
            } else {
                done();
            }
        }
    }).then((action) => {
        EMessageM({
            type: 'info',
            message: `action: ${action}`
        });
    });
};
const openHtml = () => {
    EMessageBoxM.alert('<strong>proxy is <i>HTML</i> string</strong>', 'HTML String', {
        dangerouslyUseHTMLString: true
    });
};
const openIcon = () => {
    EMessageBoxM.confirm('It will permanently delete the file. Continue?', 'Warning', {
        type: 'warning',
        icon: markRaw(Delete)
    });
};
const openCancelAndClose = () => {
  EMessageBoxM.confirm('You have unsaved changes, save and proceed?', 'Confirm', {
    distinguishCancelAndClose: true,
    confirmButtonText: '保存',
    cancelButtonText: '取消修改',
  })
    .then(() => {
      EMessageM({
        type: 'info',
        message: 'Changes saved. Proceeding to a new route.',
      });
    })
    .catch((action: Action) => {
      EMessageM({
        type: 'info',
        message: action === 'cancel' ? 'Changes discarded. Proceeding to a new route.' : 'Stay in the current route',
      });
    });
};
</script>

<style lang="scss" scoped>
@import '../css/common.scss';
.demo-message-box__buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}

.mb-4 {
    margin-bottom: 16px;
}
</style>
