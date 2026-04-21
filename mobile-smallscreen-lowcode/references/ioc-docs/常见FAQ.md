# 常见FAQ
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