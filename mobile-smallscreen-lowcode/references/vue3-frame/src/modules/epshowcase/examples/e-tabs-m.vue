<template>
  <div class="van-content">
    <div class="example-group">
      <text class="cell-title">基础用法</text>
      <div class="example-card">
        <e-tabs-m v-model="activeName" class="demo-tabs" @tab-click="handleClick">
          <e-tab-pane-m label="用户" name="first">用户内容</e-tab-pane-m>
          <e-tab-pane-m label="配置" name="second">配置内容</e-tab-pane-m>
          <e-tab-pane-m label="角色" name="third">角色内容</e-tab-pane-m>
          <e-tab-pane-m label="任务" name="fourth">任务内容</e-tab-pane-m>
        </e-tabs-m>
      </div>
    </div>

    <div class="example-group">
      <text class="cell-title">Iframe选项卡</text>
      <div class="example-card">
        <div class="example-content">
          <e-button-m type="primary" size="small" @click="reloadIframe" class="mb-2">刷新选项卡</e-button-m>
          <e-tabs-m ref="iframeTabs" v-model="iframeTabName" class="demo-tabs">
            <e-tab-pane-m
              ref="iframeRef1"
              label="EUI-Vue"
              name="first"
              url="http://192.168.219.170/docs/vue/latest/component/component/button.html"
              @load="onIframeLoad"
            />
            <e-tab-pane-m
              ref="iframeRef2"
              label="EUI-F9"
              name="second"
              url="http://192.168.219.170/showcase/eui3/components/"
              lazy
              @load="onIframeLoad"
            />
          </e-tabs-m>
        </div>
      </div>
    </div>

    <div class="example-group">
      <text class="cell-title">卡片风格</text>
      <div class="example-card">
        <e-tabs-m v-model="cardTabName" type="card">
          <e-tab-pane-m label="用户" name="first">用户内容</e-tab-pane-m>
          <e-tab-pane-m label="配置" name="second">配置内容</e-tab-pane-m>
          <e-tab-pane-m label="角色" name="third">角色内容</e-tab-pane-m>
          <e-tab-pane-m label="任务" name="fourth">任务内容</e-tab-pane-m>
        </e-tabs-m>
      </div>
    </div>

    <div class="example-group">
      <text class="cell-title">边框卡片</text>
      <div class="example-card">
        <e-tabs-m v-model="borderCardTabName" type="border-card">
          <e-tab-pane-m label="用户" name="first">用户内容</e-tab-pane-m>
          <e-tab-pane-m label="配置" name="second">配置内容</e-tab-pane-m>
          <e-tab-pane-m label="角色" name="third">角色内容</e-tab-pane-m>
          <e-tab-pane-m label="任务" name="fourth">任务内容</e-tab-pane-m>
        </e-tabs-m>
      </div>
    </div>

    <div class="example-group">
      <text class="cell-title">选项卡位置</text>
      <div class="example-card">
        <div class="example-content">
          <e-radio-group-m v-model="tabPosition" class="mb-2">
            <e-radio-button-m value="top">顶部</e-radio-button-m>
            <e-radio-button-m value="bottom">底部</e-radio-button-m>
          </e-radio-group-m>
          <e-tabs-m :tab-position="tabPosition" v-model="positionTabName">
            <e-tab-pane-m label="用户" name="first">用户内容</e-tab-pane-m>
            <e-tab-pane-m label="配置" name="second">配置内容</e-tab-pane-m>
            <e-tab-pane-m label="角色" name="third">角色内容</e-tab-pane-m>
            <e-tab-pane-m label="任务" name="fourth">任务内容</e-tab-pane-m>
          </e-tabs-m>
        </div>
      </div>
    </div>

    <div class="example-group">
      <text class="cell-title">自定义选项卡</text>
      <div class="example-card">
        <e-tabs-m v-model="iconTabName">
          <e-tab-pane-m name="first">
            <template #label>
              <span class="custom-tabs-label">
                <e-icon-m name="User" />
                <span>用户</span>
              </span>
            </template>
            用户内容
          </e-tab-pane-m>
          <e-tab-pane-m name="second">
            <template #label>
              <span class="custom-tabs-label">
                <e-icon-m name="Setting" />
                <span>配置</span>
              </span>
            </template>
            配置内容
          </e-tab-pane-m>
          <e-tab-pane-m name="third">
            <template #label>
              <span class="custom-tabs-label">
                <e-icon-m name="Bell" />
                <span>角色</span>
              </span>
            </template>
            角色内容
          </e-tab-pane-m>
        </e-tabs-m>
      </div>
    </div>

    <div class="example-group">
      <text class="cell-title">添加 & 关闭选项卡</text>
      <div class="example-card">
        <e-tabs-m v-model="customTabsValue"  editable @tab-remove="removeCustomTab" @tab-add="addCustomTab">
          <e-tab-pane-m v-for="item in customTabs" :key="item.name" :label="item.title" :name="item.name">
            {{ item.content }}
          </e-tab-pane-m>
        </e-tabs-m>
      </div>
    </div>

    <div class="example-group">
      <text class="cell-title">自定义新选项卡触发按钮</text>
      <div class="example-card">
        <div class="example-content">
          <e-button-m size="small" @click="addTab" class="mb-2">添加标签页</e-button-m>
          <e-tabs-m v-model="editableTabsValue" type="card" closable @tab-remove="removeTab">
            <e-tab-pane-m v-for="item in editableTabs" :key="item.name" :label="item.title" :name="item.name">
              {{ item.content }}
            </e-tab-pane-m>
          </e-tabs-m>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// 基础标签页
const activeName = ref('first');
const handleClick = (tab) => {
  console.log('标签点击:', tab);
};

// Iframe选项卡
const iframeTabName = ref('first');
const iframeTabs = ref(null);
const iframeRef1 = ref(null);
const iframeRef2 = ref(null);
const onIframeLoad = (pane) => {
  console.log('标签加载:', pane);
};
const reloadIframe = () => {
  if (iframeTabName.value === 'first' && iframeRef1.value) {
    iframeRef1.value.reload();
  } else if (iframeTabName.value === 'second' && iframeRef2.value) {
    iframeRef2.value.reload();
  }
};

// 卡片风格标签页
const cardTabName = ref('first');

// 边框卡片标签页
const borderCardTabName = ref('first');

// 选项卡位置
const tabPosition = ref('top');
const positionTabName = ref('first');

// 带图标的标签页
const iconTabName = ref('first');

// 只显示图标
const iconOnlyTabName = ref('first');

// 可关闭标签页
let tabIndex = 2;
const editableTabsValue = ref('2');
const editableTabs = ref([
  {
    title: '标签页 1',
    name: '1',
    content: '标签页 1 内容'
  },
  {
    title: '标签页 2',
    name: '2',
    content: '标签页 2 内容'
  }
]);

const addTab = () => {
  const newTabName = `${++tabIndex}`;
  editableTabs.value.push({
    title: `新标签页`,
    name: newTabName,
    content: `新标签页 ${newTabName} 的内容`
  });
  editableTabsValue.value = newTabName;
};

const removeTab = (targetName) => {
  const tabs = editableTabs.value;
  let activeName = editableTabsValue.value;

  if (activeName === targetName) {
    tabs.forEach((tab, index) => {
      if (tab.name === targetName) {
        const nextTab = tabs[index + 1] || tabs[index - 1];
        if (nextTab) {
          activeName = nextTab.name;
        }
      }
    });
  }

  editableTabsValue.value = activeName;
  editableTabs.value = tabs.filter((tab) => tab.name !== targetName);
};

// 自定义新选项卡触发按钮
let customIndex = 2;
const customTabsValue = ref('2');
const customTabs = ref([
  {
    title: '标签页 1',
    name: '1',
    content: '标签页 1 内容'
  },
  {
    title: '标签页 2',
    name: '2',
    content: '标签页 2 内容'
  }
]);

const addCustomTab = () => {
  const newTabName = `${++customIndex}`;
  customTabs.value.push({
    title: `新标签页`,
    name: newTabName,
    content: `新标签页 ${newTabName} 的内容`
  });
  customTabsValue.value = newTabName;
};

const removeCustomTab = (targetName) => {
  const tabs = customTabs.value;
  let activeName = customTabsValue.value;

  if (activeName === targetName) {
    tabs.forEach((tab, index) => {
      if (tab.name === targetName) {
        const nextTab = tabs[index + 1] || tabs[index - 1];
        if (nextTab) {
          activeName = nextTab.name;
        }
      }
    });
  }

  customTabsValue.value = activeName;
  customTabs.value = tabs.filter((tab) => tab.name !== targetName);
};
</script>

<style lang="scss" scoped>
@import '../css/common.scss';

.mb-2 {
  margin-bottom: 10px;
}

.custom-tabs-label {
  display: flex;
  align-items: center;
  justify-content: center;

  .ep-icon {
    margin-right: 4px;
  }
}

.demo-tabs {
  margin-bottom: 20px;
}

:deep(.em-tab) {
  height: auto;
  min-height: 60px;
}

:deep(.tab-iframe) {
  height: 300px;
}
</style>
