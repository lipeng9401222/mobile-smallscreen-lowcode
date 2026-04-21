/* eslint-disable @typescript-eslint/no-explicit-any */
import { computed, nextTick, readonly, ref, shallowReadonly, toValue, unref } from 'vue';
import type { AxiosRequestConfig } from '@epoint-fe/utils';
import { request } from '@epoint-fe/utils';
import { transformToTreeData } from './base';

type Node = Record<string, any>;
const isFlatTreeDataType = (value: Node[]) => {
  return value && value[0] && Reflect.has(value[0], 'pid');
};

const getFlattenTreeData = (tree: Node[]) => {
  const flattenTreeData: Node[] = [];

  const preOrder = (tree: Node[] | undefined) => {
    if (!tree) return;
    tree.forEach((node) => {
      flattenTreeData.push(node);
      preOrder(node.children);
    });
  };

  preOrder(tree);

  return flattenTreeData;
};

const getKey2TreeNode = (flattenTreeData: Node[]) => {
  const key2TreeNode = new Map<string, Node>();
  flattenTreeData.forEach((node) => {
    key2TreeNode.set(node.id, node);
  });
  console.log('key2TreeNode');
  console.log(key2TreeNode);
  return key2TreeNode;
};
export const useTreeDataSource = (
  url: string,
  options?: {
    beforeRequest?: (config: Partial<AxiosRequestConfig>) => Partial<AxiosRequestConfig> | undefined;
    afterRequest?: (data: any) => any;
  }
) => {
  const loadFn = (params: Record<string, unknown>) => {
    let config: Partial<AxiosRequestConfig> = {
      url,
      data: {
        params
      }
    };
    if (options?.beforeRequest) {
      config = options.beforeRequest(config) ?? config;
    }
    return request(config).then((res) => {
      return (options?.afterRequest?.(res) ?? res).data;
    });
  };
  const loadMore = (node: Record<string, any>) => {
    return loadFn({
      treeNode: {
        text: '',
        value: '',
        node: {
          id: node.id ?? '',
          text: ''
        }
      }
    }).then((data) => {
      node.children = transformData(data);

      console.log('node.children');
      console.log(node.children);
    });
  };
  const filterMethod = (key: string) => {
    return loadFn({
      treeNode: {
        text: '',
        value: '',
        search_condition: key ?? ''
      }
    }).then((data) => transformData(data));
  };

  const treeData = ref();

  const fieldNames = {
    value: 'id',
    label: 'text',
    disabled: 'noClick'
  };

  const key2TreeNode = computed(() => getKey2TreeNode(getFlattenTreeData(treeData.value)));
  const expandedKeys = ref(['f9root']);
  const expandedNodes = computed(() => expandedKeys.value.map((key) => key2TreeNode.value.get(key)));
  const expandNodes = () => {
    for (const node of expandedNodes.value.values()) {
      if (node && !node.children) {
        loadMore(node).then(() => {
          nextTick(() => {
            expandNodes();
          });
        });
        return;
      }
    }
  };
  const getExpandKeysFromData = () => {
    const keys = new Set(['f9root']);
    for (const node of key2TreeNode.value.values()) {
      if (node.expanded) {
        keys.add(node.id);
      }
    }
    return [...keys];
  };

  const checkedKeys = ref<string[]>([]);
  const getCheckedKeys = (data: Node[]) => {
    const keys: string[] = [];
    if (!data) {
      return keys;
    }
    data.forEach((node) => {
      if (node.checked) {
        keys.push(node.id);
      }
      if (node.children) {
        keys.push(...getCheckedKeys(node.children));
      }
    });

    return keys;
  };
  const transformData = (data: Node[]) => {
    const transformedData = isFlatTreeDataType(data) ? transformToTreeData(data, 'id', 'pid') : data;

    const _checkedKeys = getCheckedKeys(transformedData);
    checkedKeys.value = [...new Set(checkedKeys.value.join(..._checkedKeys))];

    return transformedData;
  };

  const refresh = (keepExpand: boolean = false) => {
    loadFn({
      treeNode: {
        text: '',
        value: ''
      }
    }).then((data) => {
      treeData.value = transformData(data);

      if (keepExpand) {
        expandNodes();
      } else {
        expandedKeys.value = getExpandKeysFromData();
      }
    });
  };

  refresh();

  return {
    dataSource: shallowReadonly(treeData),
    get _dataSource() {
      return toValue(treeData);
    },

    fieldNames: readonly(fieldNames),
    get _fieldNames() {
      return toValue(fieldNames);
    },

    expandedKeys,
    get _expandedKeys() {
      return toValue(expandedKeys);
    },

    checkedKeys,
    get _checkedKeys() {
      return toValue(checkedKeys);
    },

    loadMore,
    filterMethod,
    refresh
  };
};
