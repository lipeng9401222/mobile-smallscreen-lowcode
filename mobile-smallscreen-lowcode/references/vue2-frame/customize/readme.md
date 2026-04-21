# 移动端前端产品与项目个性化代码隔离方案


## 背景：

产品与项目开发过程中，会存在一些个性化需求，往往是侵入式修改产品代码，导致产品代码不可维护，升级产品时需要重新修改个性化代码，增加维护成本。

移动前端跨端框架在v8.3.10版本之后个性化代码隔离方案，可以将个性化代码与产品代码隔离，不侵入产品代码进行个性化修改，便于升级产品时不需要重新修改个性化代码。

## 1.个性化实现路径：

- config.js中提供`isCustomize`配置，配置为`true`时开启个性化功能，默认为`false`

- 移动前端工程下提供`customize`个性化目录，与src目录同级

- 代码工程构建时src路径下文件与`customize`文件匹配，存在同路径同名文件时进行个性化处理。

## 2.个性化文件类型支持功能：

### 2.1 vue代码：

- 支持全局覆盖

- script支持覆盖、方法支持重写

- template支持覆盖

- style支持覆盖、插入


### 2.2 js代码：

- 支持全局覆盖

- 支持导入源文件继承修改后导出

### 2.3 css代码：

- 全局覆盖

- 支持插入


### 2.4 其他文件：

- 全局覆盖

## 3.个性化文件代码开发：

### 3.1 js文件：

#### 3.1.1 全局覆盖

默认会将个性化文件覆盖原始文件。

#### 3.1.2 继承：

支持`import`或`require`源文件，使用`{{@originalFilePath}}`，在构建时框架会将`{{@originalFilePath}}`替换为源文件路径，例如：

```js
// 使用{{@originalFilePath}}，在构建时框架会将{{@originalFilePath}}替换为源文件路径
import  routerDefault from '{{@originalFilePath}}';

routerDefault.routes.push({
    path: 'pages/xxx/xxx', // 注意个性化文件的路径定义仍然为src下的路径
    style: {
        navigationBarTitleText: 'xxx'
    }
});

// 导出路由文件
export default routerDefault;
```

### 3.2 css文件：

在个性化css文件头部添加注释，明确个性化类型。例如全局覆盖还是插入等。

#### 3.2.1 全局覆盖

```css
/* {'customMixType': 'global'} */
```

#### 3.2.2 插入

```css
/* {'customMixType': 'append'} */
```

插入类型时，会将个性化css文件插入到原始css文件后面。

### 3.3 vue文件：

#### 3.3.1 全局覆盖

按照正常开发vue组件，框架会将个性化vue组件覆盖原始文件。

#### 3.3.2 部分覆盖

可以单独只写需要覆盖的SFC部分，只覆盖对应部分。

例如：

1. 只需要覆盖template部分，script、style部分不需要修改，无需写script、style部分

```html
<template>
<!-- xxx -->
</template>
```

2. 只需要覆盖script部分，template、style部分不需要修改，无需写template、style部分

```html
<script>
// xxx
</script>
```

script部分支持重写方法，例如：

```html
<script>
// {{@originalFilePath}}会被替换为源文件路径
import origin from '{{@originalFilePath}}';

export default {
    // 先将原有属性方法继承
    ...origin,
    data() {
        return {
            ...origin.data(),
            // 重写data.title
            title: '页面跳转2'
        };
    },
    methods: {
        ...origin.methods,
        // 重写click方法
        click() {
            // xxx
        }
    }
    // 其他重写类似，对原有属性进行重写
};
</script>
```

3. 只需要覆盖style部分，script、template部分不需要修改，无需写script、template部分

style部分默认为覆盖原始css。支持`customMixType`为`append`的属性，`append`会将个性化css插入到原始css后面。

```html
<style scoped  customMixType="append">
/* xxx */
</style>
```

4. 其他文件：

    全局覆盖