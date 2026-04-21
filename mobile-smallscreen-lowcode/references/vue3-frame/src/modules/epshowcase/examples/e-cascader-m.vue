<template>
  <div class="van-content">
      <div class="example-group">
          <text class="cell-title">基本用法</text>
          <div class="example-card">
              <div class="example-content">
                  <p>Child options expand when clicked (default)</p>
                  <e-cascader-m v-model="value" :options="options" @change="handleChange" />
              </div>
          </div>
      </div>

      <div class="example-group">
          <text class="cell-title">禁用选项</text>
          <div class="example-card">
              <e-cascader-m v-model="value1" :options="options1" />
          </div>
      </div>

      <div class="example-group">
          <text class="cell-title">可清除</text>
          <div class="example-card">
              <e-cascader-m v-model="value2" :options="options" clearable />
          </div>
      </div>

      <div class="example-group">
          <text class="cell-title">仅显示最后一级</text>
          <div class="example-card">
              <e-cascader-m v-model="value3" :options="options" :show-all-levels="false" />
          </div>
      </div>

      <div class="example-group">
          <text class="cell-title">多选</text>
          <div class="example-card">
              <div class="example-content">
                  <div class="example-desc">Display all tags (default)</div>
                  <e-cascader-m :options="options" :props="props" clearable />
                  
                  <div class="example-desc">Collapse tags</div>
                  <e-cascader-m :options="options" :props="props" collapse-tags clearable />
                  
                  <div class="example-desc">Collapse tags tooltip</div>
                  <e-cascader-m :options="options" :props="props" collapse-tags collapse-tags-tooltip clearable />
              </div>
          </div>
      </div>

      <div class="example-group">
          <text class="cell-title">选择任意级别的选项</text>
          <div class="example-card">
              <div class="example-content">
                  <div class="example-desc">Select any level of options (Single selection)</div>
                  <e-cascader-m :options="options" :props="props1" clearable />
                  
                  <div class="example-desc">Select any level of options (Multiple selection)</div>
                  <e-cascader-m :options="options" :props="props2" clearable />
              </div>
          </div>
      </div>

      <div class="example-group">
          <text class="cell-title">动态加载</text>
          <div class="example-card">
              <e-cascader-m v-model="value4" :props="props3" />
          </div>
      </div>

      <div class="example-group">
          <text class="cell-title">可过滤</text>
          <div class="example-card">
              <div class="example-content">
                  <div class="example-desc">Filterable (Single selection)</div>
                  <e-cascader-m placeholder="Try searchingL Guide" :options="options" filterable />
                  
                  <div class="example-desc">Filterable (Multiple selection)</div>
                  <e-cascader-m placeholder="Try searchingL Guide" :options="options" :props="props" filterable />
              </div>
          </div>
      </div>

      <div class="example-group">
          <text class="cell-title">自定义选项内容</text>
          <div class="example-card">
              <e-cascader-m :options="options">
                  <template #default="{ node, data }">
                      <span>{{ data.label }}</span>
                      <span v-if="!node.isLeaf"> ({{ data.children?.length }}) </span>
                  </template>
              </e-cascader-m>
          </div>
      </div>

      <div class="example-group">
          <text class="cell-title">级联选择器面板</text>
          <div class="example-card">
              <e-cascader-panel-m :options="options" />
          </div>
      </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import type { CascaderProps } from '@epoint-mfe/eui-components';

const value = ref([]);
const value1 = ref([]);
const value2 = ref([]);
const value3 = ref([]);
const value4 = ref([]);

const handleChange = (value) => {
    console.log(value);
};

const options = [
    {
        value: 'zhinan',
        label: '指南',
        children: [
            {
                value: 'shejiyuanze',
                label: '设计原则',
                children: [
                    {
                        value: 'yizhi',
                        label: '一致'
                    },
                    {
                        value: 'fankui',
                        label: '反馈'
                    },
                    {
                        value: 'xiaolv',
                        label: '效率'
                    },
                    {
                        value: 'kekong',
                        label: '可控'
                    }
                ]
            },
            {
                value: 'daohang',
                label: '导航',
                children: [
                    {
                        value: 'cexiangdaohang',
                        label: '侧向导航'
                    },
                    {
                        value: 'dingbudaohang',
                        label: '顶部导航'
                    }
                ]
            }
        ]
    },
    {
        value: 'zujian',
        label: '组件',
        children: [
            {
                value: 'basic',
                label: 'Basic',
                children: [
                    {
                        value: 'layout',
                        label: 'Layout 布局'
                    },
                    {
                        value: 'color',
                        label: 'Color 色彩'
                    },
                    {
                        value: 'typography',
                        label: 'Typography 字体'
                    },
                    {
                        value: 'icon',
                        label: 'Icon 图标'
                    },
                    {
                        value: 'button',
                        label: 'Button 按钮'
                    }
                ]
            },
            {
                value: 'form',
                label: 'Form',
                children: [
                    {
                        value: 'radio',
                        label: 'Radio 单选框'
                    },
                    {
                        value: 'checkbox',
                        label: 'Checkbox 多选框'
                    },
                    {
                        value: 'input',
                        label: 'Input 输入框'
                    },
                    {
                        value: 'input-number',
                        label: 'InputNumber 计数器'
                    },
                    {
                        value: 'select',
                        label: 'Select 选择器'
                    },
                    {
                        value: 'cascader',
                        label: 'Cascader 级联选择器'
                    },
                    {
                        value: 'switch',
                        label: 'Switch 开关'
                    },
                    {
                        value: 'slider',
                        label: 'Slider 滑块'
                    },
                    {
                        value: 'time-picker',
                        label: 'TimePicker 时间选择器'
                    },
                    {
                        value: 'date-picker',
                        label: 'DatePicker 日期选择器'
                    },
                    {
                        value: 'datetime-picker',
                        label: 'DateTimePicker 日期时间选择器'
                    },
                    {
                        value: 'upload',
                        label: 'Upload 上传'
                    },
                    {
                        value: 'rate',
                        label: 'Rate 评分'
                    },
                    {
                        value: 'color-picker',
                        label: 'ColorPicker 颜色选择器'
                    },
                    {
                        value: 'transfer',
                        label: 'Transfer 穿梭框'
                    },
                    {
                        value: 'form',
                        label: 'Form 表单'
                    }
                ]
            },
            {
                value: 'data',
                label: 'Data',
                children: [
                    {
                        value: 'table',
                        label: 'Table 表格'
                    },
                    {
                        value: 'tag',
                        label: 'Tag 标签'
                    },
                    {
                        value: 'progress',
                        label: 'Progress 进度条'
                    },
                    {
                        value: 'tree',
                        label: 'Tree 树形控件'
                    },
                    {
                        value: 'pagination',
                        label: 'Pagination 分页'
                    },
                    {
                        value: 'badge',
                        label: 'Badge 标记'
                    }
                ]
            },
            {
                value: 'notice',
                label: 'Notice',
                children: [
                    {
                        value: 'alert',
                        label: 'Alert 警告'
                    },
                    {
                        value: 'loading',
                        label: 'Loading 加载'
                    },
                    {
                        value: 'message',
                        label: 'Message 消息提示'
                    },
                    {
                        value: 'message-box',
                        label: 'MessageBox 弹框'
                    },
                    {
                        value: 'notification',
                        label: 'Notification 通知'
                    }
                ]
            },
            {
                value: 'navigation',
                label: 'Navigation',
                children: [
                    {
                        value: 'menu',
                        label: 'NavMenu 导航菜单'
                    },
                    {
                        value: 'tabs',
                        label: 'Tabs 标签页'
                    },
                    {
                        value: 'breadcrumb',
                        label: 'Breadcrumb 面包屑'
                    },
                    {
                        value: 'dropdown',
                        label: 'Dropdown 下拉菜单'
                    },
                    {
                        value: 'steps',
                        label: 'Steps 步骤条'
                    }
                ]
            },
            {
                value: 'others',
                label: 'Others',
                children: [
                    {
                        value: 'dialog',
                        label: 'Dialog 对话框'
                    },
                    {
                        value: 'tooltip',
                        label: 'Tooltip 文字提示'
                    },
                    {
                        value: 'popover',
                        label: 'Popover 弹出框'
                    },
                    {
                        value: 'popconfirm',
                        label: 'Popconfirm 气泡确认框'
                    },
                    {
                        value: 'card',
                        label: 'Card 卡片'
                    },
                    {
                        value: 'carousel',
                        label: 'Carousel 走马灯'
                    },
                    {
                        value: 'collapse',
                        label: 'Collapse 折叠面板'
                    },
                    {
                        value: 'timeline',
                        label: 'Timeline 时间线'
                    },
                    {
                        value: 'divider',
                        label: 'Divider 分割线'
                    },
                    {
                        value: 'calendar',
                        label: 'Calendar 日历'
                    },
                    {
                        value: 'image',
                        label: 'Image 图片'
                    },
                    {
                        value: 'backtop',
                        label: 'Backtop 回到顶部'
                    },
                    {
                        value: 'infinite-scroll',
                        label: 'InfiniteScroll 无限滚动'
                    },
                    {
                        value: 'drawer',
                        label: 'Drawer 抽屉'
                    }
                ]
            }
        ]
    },
    {
        value: 'ziyuan',
        label: '资源',
        children: [
            {
                value: 'axure',
                label: 'Axure Components'
            },
            {
                value: 'sketch',
                label: 'Sketch Templates'
            },
            {
                value: 'jiaohu',
                label: '组件交互文档'
            }
        ]
    }
];

const options1 = [
    {
        value: 'zhinan',
        label: '指南',
        disabled: true,
        children: [
            {
                value: 'shejiyuanze',
                label: '设计原则',
                children: [
                    {
                        value: 'yizhi',
                        label: '一致'
                    },
                    {
                        value: 'fankui',
                        label: '反馈'
                    }
                ]
            }
        ]
    },
    {
        value: 'zujian',
        label: '组件',
        children: [
            {
                value: 'basic',
                label: 'Basic',
                children: [
                    {
                        value: 'layout',
                        label: 'Layout 布局'
                    }
                ]
            }
        ]
    }
];

const props: CascaderProps['props'] = { multiple: true };
const props1: CascaderProps['props'] = { checkStrictly: true };
const props2: CascaderProps['props'] = { multiple: true, checkStrictly: true };

const props3: CascaderProps['props'] = {
    lazy: true,
    lazyLoad(node, resolve) {
        const { level } = node;
        setTimeout(() => {
            const nodes = Array.from({ length: level + 1 }).map((item) => ({
                value: ++id,
                label: `Option - ${id}`,
                leaf: level >= 2
            }));
            resolve(nodes);
        }, 1000);
    }
};

let id = 0;
</script>
<style lang="scss" scoped>
@import '../css/common.scss';
</style>
