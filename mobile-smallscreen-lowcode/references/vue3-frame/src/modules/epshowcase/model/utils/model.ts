import { isFunction, request } from '@epoint-fe/utils';
import { reactive } from 'vue';
import { eventBus } from './eventBus';

export type ModelOptions = {
    variableClass?: string[];
    pageConfigParams?: Record<string, unknown>;
    securityConfigParams: {
        apiUrl: string;
        processguid?: string;
        processversioninstanceguid?: string;
        workitemguid?: string;
    };
    initData?: (...args: unknown[]) => unknown;
    onBeforeInitData?: () => void;
    onAfterInitData?: (model: ModelOptions) => void;
    onBeforeInitConfig?: () => void;
    onAfterInitConfig?: (model: ModelOptions) => void;
    [key: string]: unknown;
};

export const defineDataModel = (options: () => ModelOptions) => {
    if (!isFunction(options)) {
        console.error('options must be a function');

        return;
    }
    const copyOptions: ModelOptions = {
        validateOnRuleChange: true,
        ...options(),
        pageConfig: {
            pageConfig: {},
            framevariable: {}
        },
        securityConfig: {}
    };
    const _initData = copyOptions.initData;
    const model = reactive(copyOptions);

    const initPageConfig = async () => {
        model.pageConfig =
            (await request({
                url: '/api/v1/framevariable/getPageConfig',
                data: JSON.stringify({
                    entities: [
                        {
                            variableClass: copyOptions.variableClass ?? []
                        }
                    ],
                    customParams: copyOptions.pageConfigParams ?? {}
                })
            })) ?? {};

        eventBus.emit('pageConfig', model.pageConfig);
    };
    const initSecurityConfig = async () => {
        if (copyOptions.securityConfigParams) {
            model.securityConfig = await request({
                url: '/apisecurityconfig/getApiSecurityConfig',
                data: JSON.stringify(copyOptions.securityConfigParams)
            });
        }
    };

    model.initData = async (...args: unknown[]) => {
        if (isFunction(copyOptions.onBeforeInitConfig)) {
            await copyOptions.onBeforeInitConfig();
        }
        // 表单默认 rules change 时会触发校验，这里先关闭校验
        const isValidateOnRuleChange = model.validateOnRuleChange;

        if (isValidateOnRuleChange) {
            model.validateOnRuleChange = false;
        }
        await Promise.allSettled([initPageConfig(), initSecurityConfig()]);

        if (isFunction(copyOptions.onAfterInitConfig)) {
            await copyOptions.onAfterInitConfig(model);
        }

        if (isValidateOnRuleChange) {
            model.validateOnRuleChange = true;
        }
        if (isFunction(_initData)) {
            if (isFunction(copyOptions.onBeforeInitData)) {
                await copyOptions.onBeforeInitData();
            }

            const data = await _initData(...args);

            if (isFunction(copyOptions.onAfterInitData)) {
                await copyOptions.onAfterInitData(model);
            }

            return data;
        }
    };

    return model;
};
