import { ref, watch, onMounted } from 'vue';
import { action2restAxios } from '@epoint-fe/utils';

interface RemoteMethodParams {
  url: string;
  params: Record<string, unknown>;
}

export function useToolbarService(props: { value: unknown }, emit: (event: string, value: unknown) => void) {
  // 值状态
  const val = ref(props.value);
  // 文本状态
  const text = ref('');

  // 监听父组件传递的 value 变化
  watch(
    () => props.value,
    (newVal) => {
      if (newVal !== val.value) {
        val.value = newVal;
      }
    }
  );

  // 初始化触发更新
  onMounted(() => {
    emit('update:value', val.value);
    emit('update:text', text.value);
  });

  // 值变化处理
  const handleValueChange = (newVal: unknown) => {
    emit('update:value', newVal);
    emit('update:text', text.value);
  };

  const getData = ({ url, params }: RemoteMethodParams) => {
    return action2restAxios({
      url,
      data: params || {}
    });
  };

  return {
    val,
    text,
    handleValueChange,
    getData
  };
}
