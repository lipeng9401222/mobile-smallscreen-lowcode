import { globalComponents } from '@/components/global';
import { globalDirectives } from '@/directive';
import pkg from '../package.json';
import euiCoreM, { Utils, epointI18n } from '@epframe/eui-core-m';
import { zhCN, enUS } from './locale';
import { I18N_COMPONENT_NAME } from './i18n';

const locales = {
    zh_CN: zhCN,
    en_US: enUS
};

/**
 * 初始化框架提供的能力
 */
export const setup = Utils.defineSetup({
    meta: pkg,
    components: globalComponents,
    directives: globalDirectives,
    deps: [euiCoreM],
    hooks: {
        beforeSetup: (app, options) => {
            // 无法使用 ejs.m8.mobileframe 这样的包名作为语言包的key，因为是根据 . 作为链路标识进行分割的
            // 所以不能传递 locale，只能在 该钩子方法里自定义进行工程语言包注册
            Object.keys(locales).forEach((key) => {
                epointI18n.registerComponent(I18N_COMPONENT_NAME, key, locales[key]);
            });
        }
    },
    setup: () => {}
});

// 导出 ejs API 注册
export const jsApiList = [...euiCoreM.jsApiList];