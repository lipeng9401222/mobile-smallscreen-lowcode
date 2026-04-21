# AI 快速开发低码组件指南

## 概述

本指南介绍如何使用 AI 助手快速开发符合 M8 低码平台规范的组件。通过分析现有组件模板，AI 可以帮助你在几分钟内生成完整的组件代码。

### 适用场景

- 快速创建新的业务组件
- 基于现有组件进行定制开发
- 学习低码组件开发规范
- 提高组件开发效率

---

## 前置准备

### 1. 环境要求

- Node.js 环境
- M8跨端工程
- M8移动端插件
- AI 助手（如 Cursor、Windsurf 等）

### 2. 了解项目结构

```
src/components/card_components/
├── Test/                    # 参考模板组件
│   ├── js/
│   │   ├── base.js         # 组件基础信息
│   │   └── config.js       # 组件配置项
│   ├── plugin/
│   │   ├── boxoptions/     # 容器样式配置
│   │   └── eventgenerate/  # 事件交互
│   ├── mock/
│   │   └── data.js         # 模拟数据
│   ├── css/
│   │   └── index.scss      # 组件样式
│   ├── index.vue           # 组件主文件
│   └── index.js            # 组件注册入口
```

---

## 开发流程

### 第一步：与 AI 对话，明确需求

**关键要素：**
1. 指定参考模板
2. 描述组件功能
3. 说明业务场景

**示例对话：**

```
用户：src\components\card_components\Test 读取这个文件下的文件，
这个是一个原始的低码组件，分析文件暴露配置 config.js 以及方法等，
生成一个商城项目的分类组件
```

**AI 会做什么：**
- 读取并分析 Test 组件的所有文件
- 理解组件结构和配置规范
- 根据需求生成新组件代码

### 第二步：AI 自动生成组件

AI 会自动完成以下工作：

1. **创建目录结构**
   ```
   CategoryList/
   ├── js/
   ├── plugin/
   ├── mock/
   ├── css/
   ├── index.vue
   └── index.js
   ```

2. **生成核心文件**
   - `base.js` - 组件名称和版本信息
   - `config.js` - 完整的配置项定义
   - `index.vue` - 组件逻辑和模板
   - `data.js` - 模拟数据
   - `index.scss` - 样式文件

3. **配置交互事件**
   - 继承事件生成器
   - 定义自定义事件
   - 实现事件回调

### 第三步：检查和调整

生成后建议检查：
- [ ] 组件名称是否正确（base.js 中的 module_name）
- [ ] 配置项是否符合需求
- [ ] Mock 数据是否合理
- [ ] 样式是否需要调整
- [ ] **mounted 中是否调用了 `this.eventGenerate('onMounted', '自定义参数')`** ⚠️

**重点检查 index.vue：**
```javascript
mounted() {
    // ⚠️ 必须存在这行代码
    this.eventGenerate('onMounted', '自定义参数');
}
```

---

## 组件结构说明

### 1. base.js - 组件基础信息

```javascript
export default {
    name: '商城分类组件',           // 组件中文名称
    module_name: 'CategoryList',   // 组件英文名（必须与文件夹名一致）
    version: '1.0.0'               // 版本号
};
```

**注意事项：**
- `module_name` 必须使用大驼峰命名（PascalCase）
- `module_name` 必须与组件文件夹名完全一致
- `name` 用于在低码平台中显示

### 2. config.js - 组件配置项

配置项分为两大类：

#### options - 组件属性配置

```javascript
{
    name: 'options',
    value: [
        boxOptions,              // 通用容器样式（必须）
        {
            displayName: '布局设置',  // 配置组名称
            name: 'layout',          // 配置组标识
            value: [
                {
                    displayName: '布局方向',  // 配置项显示名
                    name: 'direction',       // 配置项标识
                    value: 'horizontal',     // 默认值
                    type: 'select',          // 配置项类型
                    options: [...]           // 选项（select 类型需要）
                }
            ]
        }
    ]
}
```

#### interaction - 交互配置

```javascript
{
    name: 'interaction',
    displayName: '交互',
    value: [
        {
            name: 'callback',        // 回调参数
            displayName: '回调参数',
            type: 'array',
            dynamic: true,
            value: [],
            template: {...}
        },
        {
            name: 'event',           // 事件配置
            displayName: '事件（新）',
            type: 'array',
            value: [
                {
                    name: 'onMounted',
                    displayName: 'onMounted事件',
                    dynamic: true,
                    type: 'array',
                    value: [],
                    template: {...}
                }
            ]
        }
    ]
}
```

### 3. 配置项类型说明

| 类型 | 说明 | 示例 |
|------|------|------|
| `text` | 文本输入框 | 标题、描述等 |
| `number` | 数字输入框 | 字号、间距等 |
| `boolean` | 开关 | 是否显示、是否启用 |
| `color` | 颜色选择器 | 背景色、文字颜色 |
| `select` | 下拉选择 | 布局方向、对齐方式 |
| `array` | 数组配置 | 动态列表项 |
| `boxmodel` | 盒模型 | 内外边距 |
| `uploadimage` | 图片上传 | 图标、背景图 |

### 4. index.vue - 组件主文件

**必须包含的部分：**

```vue
<script>
import '@boot';                          // 必须引入
import mockData from './mock/data';      // Mock 数据
import defaultConfig from './js/config'; // 配置项
import base from './js/base';            // 基础信息
import eventMixin from './plugin/eventgenerate'; // 事件混入

export default {
    name: base.module_name,              // 必须使用 base 中的名称
    mixins: [eventMixin],                // 必须混入事件
    props: {
        data: {                          // 数据源
            type: Array,
            default: () => mockData.data
        },
        config: {                        // 配置项
            type: Object
        },
        cdata: Object                    // 父组件数据
    },
    // ... 组件逻辑
    
    // 必须导出这两个方法
    _getConfig: () => defaultConfig,
    _getMockData: () => mockData
};
</script>
```

**关键计算属性：**

```javascript
computed: {
    // 处理容器样式（必须）
    boxOptions() {
        const { boxOptions } = this.config.options;
        const boxmodel = boxOptions.boxmodel;
        
        // 自动添加单位
        Object.keys(boxmodel).forEach((key) => {
            if (!isNaN(Number(boxmodel[key]))) {
                boxmodel[key] = boxmodel[key] + 'px';
            }
        });
        
        return boxOptions;
    },
    
    // 获取配置项
    layoutConfig() {
        return this.config.options.layout;
    }
}
```

**事件触发：**

```javascript
mounted() {
    // ⚠️ 必须：组件加载完成事件，所有组件都必须在 mounted 中调用
    this.eventGenerate('onMounted', '自定义参数');
    // 或传递对象数据
    // this.eventGenerate('onMounted', { data: this.categoryData });
},

methods: {
    handleClick(item, index) {
        // 自定义事件
        this.eventGenerate('onCategoryClick', {
            category: item,
            index: index
        });
    }
}
```

---

## 配置项详解

### 通用容器样式（boxOptions）

所有组件都必须包含的基础配置：

```javascript
{
    displayName: '通用容器样式',
    name: 'boxOptions',
    value: [
        {
            displayName: '背景颜色',
            name: 'background',
            value: '#ffffff',
            type: 'color'
        },
        {
            displayName: '盒子间距',
            name: 'boxmodel',
            type: 'boxmodel',
            value: [
                { name: 'marginTop', value: '0' },
                { name: 'marginRight', value: '0' },
                { name: 'marginBottom', value: '0' },
                { name: 'marginLeft', value: '0' },
                { name: 'paddingTop', value: '10' },
                { name: 'paddingRight', value: '10' },
                { name: 'paddingBottom', value: '10' },
                { name: 'paddingLeft', value: '10' }
            ]
        },
        {
            displayName: '宽度',
            name: 'width',
            value: '100%',
            type: 'text'
        },
        {
            displayName: '高度',
            name: 'height',
            value: 'auto',
            type: 'text'
        },
        {
            displayName: '圆角',
            name: 'borderRadius',
            value: '0',
            type: 'text'
        }
    ]
}
```

### 自定义配置项设计原则

1. **分组清晰**：相关配置放在同一组
2. **命名规范**：使用驼峰命名，语义明确
3. **默认值合理**：提供合适的默认值
4. **类型正确**：选择合适的配置项类型
5. **添加提示**：使用 `tip` 字段说明用途

**示例：**

```javascript
{
    displayName: '图标设置',
    name: 'icon',
    value: [
        {
            displayName: '显示图标',
            name: 'show',
            value: true,
            type: 'boolean'
        },
        {
            displayName: '图标大小',
            name: 'size',
            value: 50,
            type: 'number',
            tip: '单位为像素(px)'
        },
        {
            displayName: '图标圆角',
            name: 'borderRadius',
            value: '8px',
            type: 'text',
            tip: '支持 px、%、rem 等单位'
        }
    ]
}
```

---

## 实战案例

### 案例：商城分类组件开发

#### 需求分析

创建一个商城分类展示组件，需要：
- 支持横向/纵向布局
- 显示分类图标和名称
- 支持点击选中效果
- 可配置样式和间距

#### 与 AI 对话

```
用户：src\components\card_components\Test 读取这个文件下的文件，
这个是一个原始的低码组件，分析文件暴露配置 config.js 以及方法等，
生成一个商城项目的分类组件
```

#### AI 生成结果

1. **组件信息（base.js）**
   ```javascript
   export default {
       name: '商城分类组件',
       module_name: 'CategoryList',
       version: '1.0.0'
   };
   ```

2. **配置项（config.js）**
   - 布局设置：方向、列数、间距
   - 图标设置：显示、大小、圆角、背景
   - 文字设置：字号、颜色、粗细
   - 激活状态：颜色、背景

3. **Mock 数据（data.js）**
   ```javascript
   export default {
       data: [
           {
               id: 1,
               name: '手机数码',
               icon: 'https://...'
           },
           // ... 更多分类
       ]
   };
   ```

4. **组件实现（index.vue）**
   - 响应式布局计算
   - 激活状态管理
   - 点击事件处理
   - 样式动态绑定

#### 生成的组件特性

✅ 完整的配置系统  
✅ 响应式布局  
✅ 事件交互  
✅ 激活状态  
✅ 样式可配置  
✅ Mock 数据示例  

---

## 注意事项

### ⚠️ 关键必须项

#### 1. mounted 生命周期事件（必须）

**所有组件都必须在 mounted 中触发 onMounted 事件！**

```javascript
mounted() {
    // ✅ 必须调用，否则低码平台无法正确识别组件加载状态
    this.eventGenerate('onMounted', '自定义参数')
}
```

**为什么必须调用？**
- 低码平台需要通过此事件确认组件已正确加载
- 用户可以在低码平台配置 onMounted 事件的响应动作
- 确保组件生命周期与平台同步

#### 2. 命名规范

#### ✅ 正确示例

```javascript
// 组件名称：大驼峰（PascalCase）
module_name: 'CategoryList'
module_name: 'ProductCard'
module_name: 'UserInfo'

// 配置项名称：小驼峰（camelCase）
name: 'layoutDirection'
name: 'iconSize'
name: 'textColor'

// 文件夹名称：与 module_name 一致
CategoryList/
ProductCard/
UserInfo/

// mounted 生命周期：必须调用
mounted() {
    this.eventGenerate('onMounted', '自定义参数');
}
```

#### ❌ 错误示例

```javascript
// 不要使用下划线或短横线
module_name: 'category_list'  // ❌
module_name: 'category-list'  // ❌

// 不要使用小驼峰
module_name: 'categoryList'   // ❌

// 配置项不要使用大驼峰
name: 'LayoutDirection'       // ❌

// 忘记在 mounted 中调用 onMounted
mounted() {
    // ❌ 缺少 this.eventGenerate('onMounted', '自定义参数');
    console.log('组件加载完成');
}
```

### 必须包含的内容

1. **base.js 必须字段**
   ```javascript
   {
       name: '组件中文名',
       module_name: '组件英文名',
       version: '版本号'
   }
   ```

2. **config.js 必须包含**
   - `boxOptions`（通用容器样式）
   - `base` 引用
   - `dimension` 尺寸定义
   - `configuration` 配置数组
   - `onMounted` 事件定义（在 interaction.event 中）

3. **index.vue 必须包含**
   - `import '@boot'`
   - `name: base.module_name`
   - `mixins: [eventMixin]`
   - **`mounted()` 中必须调用 `this.eventGenerate('onMounted', '自定义参数')`** ⚠️
   - `_getConfig` 方法
   - `_getMockData` 方法

   ```javascript
   export default {
       name: base.module_name,
       mixins: [eventMixin],
       // ... 其他配置
       
       mounted() {
           // ⚠️ 必须：触发 onMounted 事件
           this.eventGenerate('onMounted', '自定义参数');
       },
       
       _getConfig: () => defaultConfig,
       _getMockData: () => mockData
   };
   ```

4. **事件命名规范**
   - 使用 `on` 前缀：`onMounted`、`onClick`、`onChange`
   - 自定义事件：`onCategoryClick`、`onItemSelect`

5. **mounted 生命周期（必须）**
   ```javascript
   mounted() {
       // ⚠️ 所有组件都必须在 mounted 中触发 onMounted 事件
       this.eventGenerate('onMounted', '自定义参数');
   }
   ```

### 样式开发建议

1. **使用 SCSS**
   ```scss
   .component-container {
       .component-item {
           // 嵌套样式
       }
   }
   ```

2. **避免全局污染**
   - 使用 `scoped` 样式
   - 添加组件特定的类名前缀

3. **响应式设计**
   - 使用相对单位（%、rem）
   - 考虑不同屏幕尺寸

4. **性能优化**
   - 避免深层嵌套
   - 合理使用 CSS 变量

### 数据处理

1. **Props 默认值**
   ```javascript
   props: {
       data: {
           type: Array,
           default: () => mockData.data  // 使用函数返回
       }
   }
   ```

2. **配置项访问**
   ```javascript
   computed: {
       layoutConfig() {
           return this.config.options.layout;
       }
   }
   ```

3. **单位处理**
   ```javascript
   // 自动添加 px 单位
   if (!isNaN(Number(value))) {
       value = value + 'px';
   }
   ```

---

## 常见问题

### Q1: 组件名称不匹配怎么办？

**问题：** 控制台报错 "卡片组件vue内请定义name字段后重新构建！"

**解决：**
1. 检查 `base.js` 中的 `module_name`
2. 检查 `index.vue` 中的 `name: base.module_name`
3. 确保文件夹名称与 `module_name` 一致

### Q2: 配置项不生效？

**问题：** 在低码平台修改配置，组件没有变化

**解决：**
1. 检查 `computed` 中是否正确读取配置
2. 确认配置项的 `name` 是否正确
3. 检查模板中是否正确绑定

```javascript
// 正确的配置读取
computed: {
    iconSize() {
        return this.config.options.icon.size;
    }
}

// 模板中使用
:style="{ width: iconSize + 'px' }"
```

### Q3: 事件不触发？

**问题：** 点击组件没有反应

**解决：**
1. 确认已混入 `eventMixin`
2. 检查事件名称是否在 `config.js` 中定义
3. 确认使用 `this.eventGenerate()` 触发
4. **确保 mounted 中已调用 `this.eventGenerate('onMounted', '自定义参数')`**

```javascript
// ⚠️ 必须：在 mounted 中触发 onMounted 事件
mounted() {
    this.eventGenerate('onMounted', '自定义参数');
},

// 正确的事件触发
methods: {
    handleClick(item) {
        this.eventGenerate('onItemClick', item);
    }
}
```

### Q4: 样式不显示？

**问题：** 组件样式没有生效

**解决：**
1. 检查 SCSS 文件是否正确导入
2. 确认类名是否正确
3. 检查是否有样式冲突
4. 使用浏览器开发工具检查元素

### Q5: Mock 数据格式错误？

**问题：** 组件显示异常或报错

**解决：**
1. 确保 `data.js` 导出格式正确
   ```javascript
   export default {
       data: [...]  // 必须是 data 字段
   };
   ```
2. 检查数据结构是否与组件期望一致
3. 在组件中添加数据验证

### Q6: 如何添加新的配置项？

**步骤：**

1. 在 `config.js` 中添加配置定义
   ```javascript
   {
       displayName: '新配置',
       name: 'newConfig',
       value: 'default',
       type: 'text'
   }
   ```

2. 在 `index.vue` 中读取配置
   ```javascript
   computed: {
       newConfig() {
           return this.config.options.newConfig;
       }
   }
   ```

3. 在模板中使用
   ```vue
   <div :style="{ property: newConfig }">
   ```

### Q7: 如何调试组件？

**方法：**

1. **使用 console.log**
   ```javascript
   mounted() {
       console.log('组件配置:', this.config);
       console.log('组件数据:', this.data);
   }
   ```

2. **使用 Vue Devtools**
   - 查看组件树
   - 检查 props 和 data
   - 监听事件

3. **在低码平台预览**
   - 实时查看效果
   - 测试配置项
   - 验证事件交互
   
### Q8: AI 把代码改坏了怎么办？

**问题：** 让 AI 调整后，代码反而出错了

**解决：**

1. **如果有版本控制（推荐）**

   ```bash
   # 立即回滚到上一个版本
   git checkout -- src/components/card_components/CategoryList/
   
   # 或者回滚到指定提交
   git reset --hard HEAD~1
   ```

2. **如果有备份**

   ```bash
   # 恢复备份
   cp -r src/components/card_components/CategoryList.backup/ \
         src/components/card_components/CategoryList/
   ```

3. **如果没有备份**

   - 重新让 AI 生成一次
   - 或者手动修复错误
   - 或者回到传统开发方式

**预防措施：**

- 生成后立即提交到 Git
- 每次调整后都提交
- 不要让 AI 多次修改同一文件
- 手动调整优先于 AI 调整

### Q9: 如何选择合适的 AI 模型？

**推荐顺序：**

1. **首选：GPT-4 或 Claude 3.5 Sonnet**
   - 代码质量最高
   - 可直接使用
   - 虽然订阅费高，但总体最划算

2. **备选：GPT-3.5 或 Claude 3**
   - 代码质量良好
   - 需要更多调整
   - 性价比较高

3. **谨慎：Gemini Pro 等**
   - 代码质量一般
   - 可能需要修复
   - 不推荐新手使用

4. **避免：免费小模型**
   - 代码可能无法使用
   - 浪费时间
   - 不如手工开发

**判断标准：**

- 生成后立即运行语法检查
- 如果 5 分钟内发现大量错误，立即换模型
- 不要在劣质代码上浪费时间

### Q10: 为什么不能让 AI 多次修改？

**原因：**

1. **上下文幻觉**
   - AI 可能"忘记"之前的正确代码
   - AI 可能产生前后矛盾的代码

2. **覆盖风险**
   - AI 可能覆盖你已经调整好的部分
   - AI 可能把改好的文件改坏

3. **不可控性**
   - 不知道 AI 会改哪些地方
   - 难以追踪修改内容
   - 出错后难以恢复

**正确做法：**

- AI 只负责初始生成
- 后续调整全部手动进行
- 保持完全可控
- 使用版本控制
### Q11: 如何在本地预览调试组件？

**方法：**

1. **指令**

   ```bash
   npm run ioc start XXX(文件夹名)/XXX(组件名)
   ```

2. **使用 M8 插件预览**

 	![image.png](https://oa.epoint.com.cn/h5/fileattaches/20260121/1768984877442_9223aafd/image.png)


### Q12: 如何上传组件到低码平台？

**步骤：**

1. **构建组件**
- 指令
   ```bash
   npm run ioc build XXX(文件夹名)/XXX(组件名)
   ```
- M8插件
	![image.png](https://oa.epoint.com.cn/h5/fileattaches/20260121/1768985009603_2949ed20/image.png)

2. **上传到平台**

  通过平台界面上传(http://218.4.136.120:8990/smallscreen-demo/)
![image.png](https://oa.epoint.com.cn/h5/fileattaches/20260121/1768985181812_749af3f5/image.png)
3. **平台验证**

   - 在组件库中查找组件
   - 拖拽到画布测试
   - 配置和事件测试
   - 预览页面验证样式与交互逻辑

4. **版本管理**

- 遵循语义化版本号
- git仓库及时同步更新


---

## 总结

使用 AI 开发低码组件的优势：

✅ **快速生成**：几分钟完成完整组件  
✅ **规范统一**：自动遵循平台规范  
✅ **配置完整**：生成丰富的配置项  
✅ **代码质量**：结构清晰，易于维护  
✅ **学习参考**：通过生成代码学习最佳实践  

关键要点：

1. 明确需求，清晰描述
2. 指定参考模板
3. 检查生成结果
4. **确保 mounted 中调用 `this.eventGenerate('onMounted', '自定义参数')`** ⚠️
5. 根据需要调整
6. 测试验证功能

---

## 附录

### 常用配置项类型速查

| 类型 | 用途 | 配置示例 |
|------|------|----------|
| text | 文本输入 | 标题、描述、URL |
| number | 数字输入 | 字号、间距、数量 |
| boolean | 开关 | 是否显示、是否启用 |
| color | 颜色 | 背景色、文字颜色 |
| select | 选择 | 布局方向、对齐方式 |
| array | 列表 | 动态数据项 |
| boxmodel | 盒模型 | 内外边距 |
| uploadimage | 图片 | 图标、背景图 |

### 事件命名规范

| 事件类型 | 命名示例 | 说明 |
|---------|---------|------|
| 生命周期 | onMounted | 组件加载完成 |
| 点击事件 | onClick, onItemClick | 元素点击 |
| 变化事件 | onChange, onValueChange | 值变化 |
| 自定义事件 | onCategoryClick | 业务相关事件 |