import { computed, defineComponent, getCurrentInstance, h, onMounted, ref, watch } from 'vue';
import { ETabs, ETabPane, EButton } from '@epoint-fe/eui-components';
import { Utils } from '@epframe/eui-core';
import { isObject, isString } from '@epoint-fe/utils';

const { copy, request } = Utils;

const getAllComponents = (vnode) => {
  const components = [];
  if (!vnode) return [];
  // 如果是组件 vnode
  if (vnode.component) {
    // 如果是组件，添加实例
    vnode.component.proxy && vnode.component.proxy.configurable && components.push(vnode.component.proxy);

    // 继续遍历子节点
    components.push(...getAllComponents(vnode.component.subTree));
  } else if (Array.isArray(vnode.children)) {
    for (const child of vnode.children) {
      components.push(...getAllComponents(child));
    }
  }
  return components;
};

const ConfigComponent = defineComponent({
  name: 'ConfigComponent',
  props: {
    panels: {
      type: Array,
      default: () => []
    }
  },
  setup(props, { emit }) {
    const activeTab = ref(props.panels[0]?.id);

    // 获取当前激活的面板
    const getActivePanel = () => {
      return props.panels.find((item) => item.id === activeTab.value);
    };

    return () =>
      h(
        'div',
        {
          class: 'config-component-container',
          style: {
            display: 'flex',
            flexDirection: 'column',
            height: '100%'
          }
        },
        [
          // 中间部分：tabs + 内容（允许滚动）
          h(
            'div',
            {
              style: {
                flex: '1 1 auto',
                overflow: 'auto',
                minHeight: '0',
                padding: '0 0 20px 0'
              }
            },
            [
              h(
                ETabs,
                {
                  class: 'configurable-tabs-panel-content',
                  modelValue: activeTab.value,
                  tabPosition: 'left',
                  'onUpdate:modelValue': (val) => {
                    activeTab.value = val;
                  },
                  style: {
                    height: '100%'
                  }
                },
                () =>
                  props.panels.map((item) =>
                    h(
                      ETabPane,
                      {
                        label: item.title,
                        name: item.id
                      },
                      () =>
                        h(item.component, {
                          modelValue: item.model
                        })
                    )
                  )
              )
            ]
          ),

          // 底部按钮区域（固定在底部）
          h(
            'div',
            {
              style: {
                padding: '10px 0',
                textAlign: 'center',
                borderTop: '1px solid #eee',
                backgroundColor: '#fff',
                flex: '0 0 auto'
              }
            },
            [
              h(
                EButton,
                {
                  onClick: () => {
                    emit('close', getActivePanel());
                  }
                },
                () => '重置'
              ),
              h(
                EButton,
                {
                  type: 'primary',
                  style: { marginLeft: '10px' },
                  onClick: () => {
                    emit('save', getActivePanel());
                  }
                },
                () => '保存'
              )
            ]
          )
        ]
      );
  }
});

const getConfigId = (component) => {
  return component.configId ?? component.$options.name;
};

export const useConfigurable = (initData) => {
  let rootInstance;
  const components = ref([]);

  const isOnlyOne = (componentName) => {
    // 判断components 中 是否只有一个组件
    const component = components.value.filter((item) => item.$options.name === componentName);
    return component.length === 1;
  };

  const configPanels = computed(() => {
    const panels = [];

    components.value.forEach((item) => {
      const editor = item.$.exposed.getEditor();
      if (Array.isArray(editor)) {
        editor.forEach((editorItem) => {
          const itemConfig = item.$.exposed.getConfig();
          const model = ref({});
          editorItem.fields.forEach((field) => {
            model.value[field] = itemConfig[field];
          });
          panels.push({
            id: `${getConfigId(item)}-${editorItem.id}`,
            parentId: getConfigId(item),
            fields: editorItem.fields,
            title: isOnlyOne(item.$options.name) ? editorItem.title : `${item.configPanelName}-${editorItem.title}`,
            component: editorItem.editor,
            model: item.$.exposed.getConfig()
          });
        });
      } else {
        panels.push({
          id: getConfigId(item),
          parentId: getConfigId(item),
          title: item.configPanelName,
          component: item.$.exposed.getEditor(),
          model: item.$.exposed.getConfig()
        });
      }
    });

    return panels;
  });
  const updateConfig = (id, data, parentId, fields) => {
    const component = components.value.find((item) => getConfigId(item) === parentId);
    component && component.$.exposed.updateConfig(JSON.parse(JSON.stringify(data)), fields);
  };

  const initComponentsConfig = (config) => {
    if (!config || !isObject(config) || Object.keys(config).length === 0) {
      return;
    }
    components.value.forEach((item) => {
      const data = config[getConfigId(item)];
      data && item.$.exposed.updateConfig(data);
    });
  };
  // 初始化数据是异步请求的，可能还未初始化完成，所以要监听一次
  watch(
    () => initData.pageConfig.pageConfig,
    (val) => {
      if (val) {
        if (isString(val)) {
          initData.pageConfig.pageConfig = JSON.parse(val);
        }
        initComponentsConfig(initData.pageConfig.pageConfig);
      }
    },
    {
      once: true
    }
  );

  // 保存数据
  const saveData = (id, data, parentId, fields) => {
    // if (!initData.pageConfig.pageConfig) {
    initData.pageConfig.pageConfig = {};
    // }
    let configData = {};
    if (fields && fields.length) {
      fields.forEach((field) => {
        configData[field] = data[field];
      });
    } else {
      configData = data;
    }

    initData.pageConfig.pageConfig[id] = configData;
    request({
      url: '/api/user-preference/addUserPreference',
      data: {
        data: {
          pageConfig: initData.pageConfig.pageConfig
        }
      }
    });
  };
  const configPanel = () =>
    h(ConfigComponent, {
      panels: configPanels.value,
      onClose: (item) => {
        if (item.id) {
          updateConfig(item.id, defaultConfig[item.id], item.parentId, item.fields);
        }
        // dialog?.closeDialog();
      },
      onSave: (item) => {
        saveData(item.id, item.model, item.parentId, item.fields);
        updateConfig(item.id, item.model, item.parentId, item.fields);
        // dialog?.closeDialog();
      }
    });

  let dialog;
  let defaultConfig = {};
  let appContext = null;
  const showConfigPanel = () => {
    console.log(appContext);
    // 显示前先把数据备份一下，方便取消时恢复
    defaultConfig = configPanels.value.reduce((pre, cur) => {
      pre[cur.id] = copy(cur.model);
      return pre;
    }, {});

    dialog = rootInstance?.$dialog(
      {
        title: '个性化配置',
        width: 624,
        height: 638,
        draggable: true
      },
      configPanel,
      appContext
    );
  };

  onMounted(() => {
    appContext = getCurrentInstance().appContext;
    rootInstance = getCurrentInstance()?.proxy;
    if (rootInstance) {
      components.value = Array.from(getAllComponents(rootInstance.$.vnode.component.subTree));
      console.log('configurable components:', components.value);
      // 初始化数据
      initComponentsConfig(initData.pageConfig.pageConfig);
    }
  });

  return {
    showConfigPanel
  };
};
