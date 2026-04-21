# 移动端前端产品与项目个性化代码隔离方案


## 背景：

产品与项目开发过程中，会存在一些个性化需求，往往是侵入式修改产品代码，导致产品代码不可维护，升级产品时需要重新修改个性化代码，增加维护成本。

移动前端跨端框架在v8.3.10版本之后个性化代码隔离方案，可以将个性化代码与产品代码隔离，不侵入产品代码进行个性化修改，便于升级产品时不需要重新修改个性化代码。

## 1.个性化实现路径：

- config.js中提供`isCustomize`配置，配置为`true`时开启个性化功能，默认为`false`

- 移动前端工程下提供`custom`个性化目录，与src目录、node_modules目录同级

- 支持个性化 `src` 目录和 `node_modules/@epoint-mrc` 目录，用于个性化工程代码和框架依赖代码

## 2.个性化功能：

- 代码工程构建时 `src`、`node_modules/@epoint-mrc` 路径下文件与 `custom` 文件匹配，存在同路径同名文件时进行读取 `custom` 文件内容。

## 3.目录结构

```
├── node_modules
│   ├── @epoint-mrc
│   │   ├── em-components
|   │   │   ├── xxx.vue
├── custom                     // 个性化目录
│   ├── src
│   │   ├── pages
│   │   │  ├── index
│   │   │  │   ├── index.vue   // 个性化覆盖代码工程同路径index.vue文件
│   ├── node_modules
│   │   ├── @epoint-mrc
│   │   │  ├── em-components
|   │   │  │   ├── xxx.vue     // 个性化覆盖框架xxx组件
├── src
│   ├── pages
│   │  ├── index
│   │  │   ├── index.vue   // 个性化覆盖代码工程同路径index.vue文件
├── package.json
```

