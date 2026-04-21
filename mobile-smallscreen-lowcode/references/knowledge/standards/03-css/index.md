# CSS 样式规范

> 定义 M8 项目的 CSS/SCSS 编码规范与最佳实践。

## 📝 命名规范

### BEM 命名

| 类型               | 格式               | 示例            |
| ------------------ | ------------------ | --------------- |
| 块（Block）        | `.block`           | `.card`         |
| 元素（Element）    | `.block__element`  | `.card__title`  |
| 修饰符（Modifier） | `.block--modifier` | `.card--active` |

```scss
.user-card {
  &__avatar {
  }
  &__name {
  }
  &--vip {
  }
}
```

### class/id 命名规则

- ✅ 使用小写字母
- ✅ 使用中划线连接
- ❌ 禁止使用大写或驼峰
- ❌ 避免过度简写

## 🎨 编码规范

### 基本规则

| 规则       | 说明                     |
| ---------- | ------------------------ |
| 预处理器   | 使用 SASS 编写           |
| 颜色简写   | `#666666` → `#666`       |
| 避免单位   | 0 值不加单位 `margin: 0` |
| 选择器换行 | 多选择器各占一行         |

### 样式穿透

```scss
// Vue2
::v-deep .em-cell {
  color: red;
}

// Vue3
:deep(.em-cell) {
  color: red;
}
```

**穿透后禁止使用 BEM 后缀选择器**，解决方案：

```scss
// 方案1：分开写
:deep(.em-cell) {
}
:deep(.em-cell__title) {
}

// 方案2：@at-root
:deep(.em-cell) {
  @at-root {
    #{&}__title {
    }
  }
}
```

### CSS 书写顺序

1. 位置属性：`position`, `top`, `z-index`, `display`, `float`
2. 大小属性：`width`, `height`, `padding`, `margin`
3. 文字属性：`font`, `line-height`, `color`, `text-align`
4. 背景边框：`background`, `border`
5. 其他属性：`animation`, `transition`

### 避免的写法

```scss
// ❌ 深层嵌套（不超过3层）
.a {
  .b {
    .c {
      .d {
      }
    }
  }
}

// ❌ 标签选择器
div.container {
}

// ❌ 通配符选择器
* {
  margin: 0;
}

// ❌ !important（除非覆盖第三方库）
.text {
  color: red !important;
}
```

## 📁 目录结构

```
src/
├── pages/
│   └── [module]/
│       └── css/
│           └── [module].scss   # 模块样式
└── common/
    └── css/
        └── common.extend       # 拓展样式
```

### 引用方式

```vue
<style lang="scss" scoped>
@import "./css/login.scss";
</style>
```

## 🎨 变量管理

```scss
// variables.scss
$primary-color: #1989fa;
$text-color: #323233;
$border-color: #ebedf0;

$font-size-sm: 12px;
$font-size-md: 14px;
$font-size-lg: 16px;

$spacing-xs: 4px;
$spacing-sm: 8px;
$spacing-md: 16px;
```

## ⚡ 性能优化

- 避免深层嵌套（不超过 3 层）
- 合理使用选择器
- 压缩和合并样式文件
- 删除冗余代码

## ✅ CSS 检查清单

- [ ] 使用 BEM 命名规范
- [ ] class 使用小写 + 中划线
- [ ] 样式穿透语法与 Vue 版本匹配
- [ ] 遵循 CSS 书写顺序
- [ ] 避免使用 !important
- [ ] 嵌套不超过 3 层
- [ ] 删除冗余代码
