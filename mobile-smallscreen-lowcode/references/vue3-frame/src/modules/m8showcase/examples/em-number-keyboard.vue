<template>
    <div class="container">
        <em-cell title="弹出默认键盘" @click="show1 = true" is-link></em-cell>
        <em-number-keyboard
            :show="show1"
            @blur="show1 = false"
            @inputkey="onInput"
            @delete="onDelete"
        ></em-number-keyboard>
        <em-cell title="带右侧栏的键盘" @click="show2 = true" is-link></em-cell>
        <em-number-keyboard
            :show="show2"
            theme="custom"
            extra-key="."
            close-button-text="完成"
            @blur="show2 = false"
            @inputkey="onInput"
            @delete="onDelete"
        > 
        </em-number-keyboard>
        <em-cell title="弹出身份证号键盘" @click="show3 = true" is-link></em-cell>
        <em-number-keyboard
            :show="show3"
            extra-key="X"
            close-button-text="完成"
            @blur="show3 = false"
            @inputkey="onInput"
            @delete="onDelete"
        > 
        </em-number-keyboard>
        <em-cell title="弹出带标题的键盘" @click="show4 = true" is-link></em-cell>
        <em-number-keyboard
            :show="show4"
            title="键盘标题"
            extra-key="."
            close-button-text="完成"
            @blur="show4 = false"
            @inputkey="onInput"
            @delete="onDelete"
        > 
        </em-number-keyboard>
        <em-cell title="弹出配置多个按键的键盘" @click="show5 = true" is-link></em-cell>
        <em-number-keyboard
            :show="show5"
            :extra-key="['00', '.']"
            close-button-text="完成"
            @blur="show5 = false"
            @inputkey="onInput"
            @delete="onDelete"
        > 
        </em-number-keyboard>
        <em-field
            label="双向绑定"
            readonly
            clickable
            :value="value"
            @click-input="show6 = true"
        ></em-field>
        <em-number-keyboard
            v-model="value"
            :show="show6"
            :maxlength="6"
            @blur="show6 = false"
        > 
        </em-number-keyboard>
        <em-cell title="弹出自定义插槽的键盘" @click="show7 = true" is-link></em-cell>
        <em-number-keyboard
            :show="show7"
            title="标题"
            close-button-text="确定"
            delete-button-text="删除"
            :transition="true"
            :random-key-order="true"
            :extra-key="'.'"
            :show-title-left="true"
            @blur="show7 = false"
            @inputkey="onInput"
            @delete="onDelete"
            @show="onShowFun"
            @hide="onHideFun"
        >
            <template #extraKey>
                按键
            </template>
            <template #delete>
                删除
            </template>
            <template #titleLeft>
                标题左侧
            </template>
        </em-number-keyboard>
        <em-cell title="弹出自定义插槽的键盘2" @click="show8 = true" is-link></em-cell>
        <em-number-keyboard
            :show="show8"
            theme="custom"
            title="标题"
            close-button-text="确定"
            delete-button-text="删除"
            :transition="true"
            :random-key-order="true"
            :extra-key="['.','00']"
            :show-title-left="true"
            :closeButtonLoading="true"
            @blur="show8 = false"
            @inputkey="onInput"
            @delete="onDelete"
            @show="onShowFun"
            @hide="onHideFun"
        >
            <template #extraKey>
                按键
            </template>
            <template #extraKeyNext>
                按键2
            </template>
            <template #delete>
                删除
            </template>
            <template #titleLeft>
                标题左侧
            </template>
        </em-number-keyboard>

        <em-toast ref="emToast"></em-toast>
    </div>
</template>

<script lang="ts">

export default {
    name: 'NumberKeyboardDemo',
    data() {
        return {
            show1: false,
            show2: false,
            show3: false,
            show4: false,
            show5: false,
            show6: false,
            show7: false,
            show8: false,
            value: ''
        };
    },
    methods: {
        onInput(key) {
            Toast({
                message: `触发inputkey事件，key:${key}`
            });
        },
        onDelete() {
            Toast({
                message: '触发delete事件'
            });
        },
        onShowFun() {
            Toast({
                message: '触发show事件'
            });
        },
        onHideFun() {
            Toast({
                message: '触发hide事件'
            });
        }
    }
};
</script>

<style lang="scss" scoped></style>
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