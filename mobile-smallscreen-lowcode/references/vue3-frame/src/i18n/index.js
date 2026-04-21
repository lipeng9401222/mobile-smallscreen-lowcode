import { createScopedUseI18n } from '@epframe/eui-core-m';

export const I18N_COMPONENT_NAME = 'ejs-m8-mobileframe';
/**
 * 提供 组件化级别的 i18n
 * 作用: 自动添加包名前缀 useI18n 返回的 t 方法中： t('exception.404title') => t('当前包名.exception.404title')
 */
export const useI18n = createScopedUseI18n(I18N_COMPONENT_NAME);