<template>
    <div class="epoint-component customer-service-sheet" :style="[boxOptions, boxOptions.boxmodel]">
        <div v-if="showTrigger" class="show-box" @click="openSheet">{{ triggerText }}</div>
        <em-actionsheet
            v-model="show"
            custom-class="customer-service-sheet__popup"
            :title="resolvedTitle"
            :actions="actionList"
            :cancel-text="resolvedCancelText"
            close-on-click-action
            @open="handleOpen"
            @select="handleSelect"
            @cancel="handleCancel"
            @close="handleClose"
        />
    </div>
</template>

<script>
import '@boot';
import mockData from './mock/data';
import defaultConfig from './js/config';
import base from './js/base';
import eventMixin from './plugin/eventgenerate';

export default {
    name: base.module_name,
    mixins: [eventMixin],
    props: {
        data: {
            type: [Array, Object],
            default: () => {
                return mockData.data;
            }
        },
        config: {
            type: Object,
            default: () => {
                return {
                    options: {}
                };
            }
        },
        cdata: Object
    },
    data() {
        return {
            show: false,
            showBox: false
        };
    },
    computed: {
        options() {
            return this.config.options || {};
        },
        boxOptions() {
            const source = this.options.boxOptions || {};
            const boxOptions = JSON.parse(JSON.stringify(source || {}));
            const boxmodel = boxOptions.boxmodel || {};

            Object.keys(boxmodel).forEach((key) => {
                if (!isNaN(Number(boxmodel[key]))) {
                    boxmodel[key] = boxmodel[key] + 'px';
                }
            });

            ['width', 'height', 'borderRadius'].forEach((key) => {
                if (boxOptions[key] !== undefined && boxOptions[key] !== '' && !isNaN(Number(boxOptions[key]))) {
                    boxOptions[key] = boxOptions[key] + 'px';
                }
            });

            return boxOptions;
        },
        myData() {
            if (Array.isArray(this.data)) {
                return this.data[0] || {};
            }

            if (this.data && Array.isArray(this.data.data)) {
                return this.data.data[0] || {};
            }

            return this.data || {};
        },
        contentConfig() {
            return this.options.contentConfig || {};
        },
        resolvedTitle() {
            return this.pickValue([this.contentConfig.title, this.myData.title], '客服电话');
        },
        resolvedCancelText() {
            return this.pickValue([this.contentConfig.cancelText, this.myData.cancelText], '取消');
        },
        triggerText() {
            return this.pickValue([this.contentConfig.triggerText, this.resolvedTitle], '客服电话');
        },
        showTrigger() {
            return this.showBox && !this.show;
        },
        normalizedPhoneList() {
            const dataPhoneList = this.normalizePhoneList(
                this.myData.phoneList || this.myData.phones || this.myData.phoneNumbers
            );

            if (dataPhoneList.length) {
                return dataPhoneList;
            }

            const configPhoneList = this.normalizePhoneList(this.contentConfig.phoneList || this.contentConfig.phones);

            if (configPhoneList.length) {
                return configPhoneList;
            }

            const legacyConfigPhone = this.normalizeLegacyPhoneItem(
                this.contentConfig.content,
                this.contentConfig.phoneNumber || this.contentConfig.phone
            );

            if (legacyConfigPhone) {
                return [legacyConfigPhone];
            }

            const legacyDataPhone = this.normalizeLegacyPhoneItem(
                this.myData.content || this.myData.phoneText || this.myData.phone,
                this.myData.phoneNumber || this.myData.phone
            );

            if (legacyDataPhone) {
                return [legacyDataPhone];
            }

            return [
                {
                    name: '4006010088（转2）',
                    phoneNumber: '4006010088'
                }
            ];
        },
        resolvedContent() {
            return this.normalizedPhoneList.map((item) => item.name).join(' / ');
        },
        resolvedPhoneNumber() {
            return (this.normalizedPhoneList[0] && this.normalizedPhoneList[0].phoneNumber) || '';
        },
        actionList() {
            return this.normalizedPhoneList.map((item, index) => {
                const action = {
                    name: item.name,
                    className: 'customer-service-sheet__action',
                    phoneNumber: item.phoneNumber,
                    __sourceIndex: index
                };

                if (item.phoneNumber && item.phoneNumber !== item.name) {
                    action.subname = item.phoneNumber;
                }

                return action;
            });
        },
        isEditorMode() {
            if (typeof window === 'undefined' || !window.location || !window.location.href) {
                return false;
            }

            const currentUrl = decodeURIComponent(window.location.href);
            const parts = currentUrl.split('/');
            const host = parts[2] || '';
            const lastPart = parts[parts.length - 1] || '';

            if (host.indexOf('app.epoint.com.cn') !== -1) {
                return true;
            }

            return lastPart.indexOf('create') !== -1 || lastPart.indexOf(base.module_name) !== -1;
        }
    },
    mounted() {
        this.showBox = this.isEditorMode;
        this.eventGenerate('onMounted', this.buildPayload());
    },
    methods: {
        buildPayload(extra = {}) {
            return {
                title: this.resolvedTitle,
                content: this.resolvedContent,
                cancelText: this.resolvedCancelText,
                phoneNumber: this.resolvedPhoneNumber,
                phoneList: this.normalizedPhoneList.map((item) => {
                    return {
                        name: item.name,
                        phoneNumber: item.phoneNumber
                    };
                }),
                show: this.show,
                ...extra
            };
        },
        openSheet() {
            this.show = true;
        },
        closeSheet() {
            this.show = false;
        },
        toggleSheet(show) {
            this.show = typeof show === 'boolean' ? show : !this.show;
        },
        handleOpen() {
            this.eventGenerate('onOpen', this.buildPayload());
        },
        handleSelect(action, index) {
            const selectedPhone = this.getSelectedPhone(action, index);
            const payload = this.buildPayload({
                action,
                index,
                content: (selectedPhone && selectedPhone.name) || this.resolvedContent,
                phoneNumber: (selectedPhone && selectedPhone.phoneNumber) || '',
                selectedPhone
            });

            this.eventGenerate('onSelect', payload);

            if (!payload.phoneNumber) {
                this.showToast('请联系管理者更新正确的电话号码');

                return;
            }

            this.callPhone(payload.phoneNumber);
            this.eventGenerate('onCall', payload);
        },
        handleCancel() {
            this.closeSheet();
            this.eventGenerate('onCancel', this.buildPayload());
        },
        handleClose() {
            this.closeSheet();
            this.eventGenerate('onClose', this.buildPayload());
        },
        extractDialPhone(text) {
            const source = `${text || ''}`.trim();

            if (!source) {
                return '';
            }

            const phoneText = source.split(/(?:转|ext\.?|分机)/i)[0];

            return phoneText.replace(/[^\d]/g, '');
        },
        pickValue(candidates, fallback = '') {
            for (let i = 0; i < candidates.length; i++) {
                const current = candidates[i];

                if (current === undefined || current === null) {
                    continue;
                }

                const value = `${current}`.trim();

                if (value) {
                    return value;
                }
            }

            return fallback;
        },
        normalizePhoneList(list) {
            if (!Array.isArray(list)) {
                return [];
            }

            return list.map((item) => this.normalizePhoneItem(item)).filter((item) => !!item);
        },
        normalizeLegacyPhoneItem(content, phoneNumber) {
            const displayText = this.pickValue([content], '');
            const dialPhone = this.pickValue([phoneNumber], '');

            if (!displayText && !dialPhone) {
                return null;
            }

            return this.normalizePhoneItem({
                name: displayText || dialPhone,
                phoneNumber: dialPhone || displayText
            });
        },
        normalizePhoneItem(item) {
            if (item === undefined || item === null) {
                return null;
            }

            if (typeof item === 'string' || typeof item === 'number') {
                const text = `${item}`.trim();
                const phoneNumber = this.extractDialPhone(text);

                if (!text && !phoneNumber) {
                    return null;
                }

                return {
                    name: text || phoneNumber,
                    phoneNumber
                };
            }

            const displayText = this.pickValue(
                [item.name, item.text, item.content, item.label, item.phoneText, item.title],
                ''
            );
            const phoneSource = this.pickValue([item.phoneNumber, item.phone, item.tel, item.mobile], '');
            const phoneNumber = this.extractDialPhone(phoneSource || displayText);
            const name = displayText || phoneSource || phoneNumber;

            if (!name && !phoneNumber) {
                return null;
            }

            return {
                name,
                phoneNumber
            };
        },
        getSelectedPhone(action, index) {
            if (typeof index === 'number' && this.normalizedPhoneList[index]) {
                return this.normalizedPhoneList[index];
            }

            const sourceAction = action || {};
            const sourceIndex = Number(sourceAction.__sourceIndex);

            if (!isNaN(sourceIndex) && this.normalizedPhoneList[sourceIndex]) {
                return this.normalizedPhoneList[sourceIndex];
            }

            const phoneNumber = this.extractDialPhone(
                sourceAction.phoneNumber || sourceAction.name || sourceAction.text
            );

            if (phoneNumber) {
                const matchedPhone = this.normalizedPhoneList.find((item) => item.phoneNumber === phoneNumber);

                if (matchedPhone) {
                    return matchedPhone;
                }
            }

            return this.normalizePhoneItem(sourceAction) || this.normalizedPhoneList[0] || null;
        },
        callPhone(phoneNumber) {
            if (typeof uni !== 'undefined' && typeof uni.makePhoneCall === 'function') {
                uni.makePhoneCall({
                    phoneNumber
                });

                return;
            }

            const currentEjs = (typeof ejs !== 'undefined' && ejs) || (typeof window !== 'undefined' && window.ejs);

            if (currentEjs && currentEjs.device && typeof currentEjs.device.callPhone === 'function') {
                currentEjs.device.callPhone(phoneNumber);

                return;
            }

            if (typeof window !== 'undefined') {
                window.location.href = `tel:${phoneNumber}`;

                return;
            }

            this.showToast('当前环境暂不支持拨号');
        },
        showToast(message) {
            const currentEjs = (typeof ejs !== 'undefined' && ejs) || (typeof window !== 'undefined' && window.ejs);

            if (currentEjs && currentEjs.ui && typeof currentEjs.ui.toast === 'function') {
                currentEjs.ui.toast(message);

                return;
            }

            if (typeof uni !== 'undefined' && typeof uni.showToast === 'function') {
                uni.showToast({
                    title: message,
                    icon: 'none'
                });

                return;
            }

            console.warn(message);
        }
    },
    beforeDestroy() {},
    _getConfig: () => defaultConfig,
    _getMockData: () => mockData
};
</script>

<style lang="scss" scoped>
@import './css/index.scss';
</style>
