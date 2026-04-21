import type { AxiosRequestConfig } from '@epoint-fe/utils';
import { request, debounce, getControlFrameSysParam } from '@epoint-fe/utils';
import { computed, readonly, ref, shallowReadonly, shallowRef, toValue, watch, type MaybeRef } from 'vue';
import { transformToTreeData } from './base';

type RecordType = Record<string, unknown>;
type SorterType = {
  field: string;
  order?: 'ascend' | 'descend' | null;
};
type paginationType = {
  pageSize: number;
  current: number;
};

export const useTableDataSource = (
  url: string,
  options: {
    idField: string;
    parentField?: string;
    data: MaybeRef<{
      params: {
        pageIndex?: number;
        pageSize?: number;
        conditions: Array<{
          path: string;
          type: string;
          value: any;
        }>;
      };
      customParams?: Record<string, any>;
    }>;
    beforeRequest?: (config: Partial<AxiosRequestConfig>) => Partial<AxiosRequestConfig> | undefined;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    afterRequest?: (data: any) => any;
  }
) => {
  const optionsData = toValue(options.data);
  const dataSource = shallowRef<RecordType[]>([]);
  const current = ref(optionsData.params.pageIndex ?? 1);
  const pageSize = ref(optionsData.params.pageSize ?? getControlFrameSysParam('table')?.pageSize ?? 10);
  const total = ref(0);
  const sortField = ref('');
  const sortOrder = ref('');
  const loading = ref(false);

  const params = computed(() => {
    const currentData = toValue(options.data);
    let sortCondition = {};
    if (sortField.value) {
      sortCondition = {
        sortOrders: [
          {
            sortOrder: sortOrder.value,
            sortField: sortField.value
          }
        ]
      };
    }
    if (currentData.params.sortOrders) {
      if(!sortCondition.sortOrders){
        sortCondition = {
          sortOrders: []
        };
      }
      sortCondition.sortOrders.push(...currentData.params.sortOrders);
    }
    const mergedParams = {
      ...currentData.params,
      ...{
        pageSize: pageSize.value,
        pageIndex: current.value - 1,
        ...sortCondition
      },
      conditions: [...currentData.params.conditions]
    };

    return {
      ...currentData,
      params: mergedParams
    };
  });
  const updateSort = (sorter: SorterType) => {
    const { field, order } = sorter;

    switch (order) {
      case 'ascend':
        sortField.value = field;
        sortOrder.value = 'asc';
        break;
      case 'descend':
        sortField.value = field;
        sortOrder.value = 'desc';
        break;
      default:
        sortField.value = '';
        sortOrder.value = '';
        break;
    }
  };

  const onTableChange = (pagination: paginationType, filters: any, sorter: SorterType) => {
    pageSize.value = pagination.pageSize;
    current.value = pagination.current;

    updateSort(sorter);
  };

  const transformData = (data: Record<string, string>[]) => {
    if (options.parentField) {
      data = transformToTreeData(data, options.idField, options.parentField, true);
    }
    return data;
  };

  const goToFirstPage = () => {
    current.value = 1;
  };
  const refresh = async () => {
    loading.value = true;
    let config: Partial<AxiosRequestConfig> = {
      url,
      data: params.value
    };
    if (options?.beforeRequest) {
      config = options.beforeRequest(config) ?? config;
    }
    await request(config)
      .then((res) => {
        const ret = options?.afterRequest?.(res) ?? res;
        dataSource.value = transformData(ret.data);
        total.value = ret.total;
      })
      .finally(() => {
        loading.value = false;
      });
  };

  const debouncedRefresh = debounce(refresh, 500);
  watch(params, () => {
    debouncedRefresh();
  });

  refresh();

  // get 访问器用于支持 支持不使用解构语法
  // 使用 toValue 保持响应性  eg:
  //  const X = useTableDataSource();
  //  <datagrid :data="x._dataSource">
  const result = {
    dataSource: shallowReadonly(dataSource),
    get _dataSource() {
      return toValue(dataSource);
    },

    total: readonly(total),
    get _total() {
      return toValue(total);
    },

    current: readonly(current),
    get _current() {
      return toValue(current);
    },
    pageSize,
    get _pageSize() {
      return toValue(pageSize);
    },

    loading,
    get _loading() {
      return toValue(loading);
    },
    refresh,
    onTableChange,
    goToFirstPage
  };
  return result;
};
