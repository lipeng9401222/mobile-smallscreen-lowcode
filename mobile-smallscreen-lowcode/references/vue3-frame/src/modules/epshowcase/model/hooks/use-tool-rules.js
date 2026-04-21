import { computed, useAttrs, inject } from 'vue';
import { FormToolRulesKey } from '@epframe/eui-core-m/src/components/constants';
import { formItemContextKey } from '@epoint-fe/eui-components';
import { isObject } from '@epoint-fe/utils';

export const useToolRules = (rulesPropsKeyMap) => {
  const formItemCtx = inject(formItemContextKey);
  const formToolRules = inject(FormToolRulesKey);
  const attrs = useAttrs();

  const transformRules = (rules) => {
    if (rulesPropsKeyMap && isObject(rules)) {
      return Object.keys(rules).reduce((acc, cur) => {
        if (rulesPropsKeyMap[cur]) {
          acc[rulesPropsKeyMap[cur]] = rules[cur];
        } else {
          acc[cur] = rules[cur];
        }
        return acc;
      }, {});
    }
    return rules;
  };
  const rules = computed(() => {
    const keys = (formItemCtx?.prop ?? '').split('.');
    let rules = formToolRules?.value;
    let key = keys.shift();
    if (!key) {
      return;
    }
    while (rules && key) {
      rules = rules[key];
      key = keys.shift();
    }
    return rules;
  });

  // 计算合并后的属性，让toolRules中的字段覆盖$attrs中的相同字段
  const mergedAttrs = computed(() => {
    return {
      ...attrs,
      ...transformRules(rules.value ?? {})
    };
  });

  return {
    mergedAttrs
  };
};
