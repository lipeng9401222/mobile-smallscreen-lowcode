# Tailwind CSS → SCSS 完整映射表

> 本文件为 SKILL.md 的补充参考。ZIP 转换模式下，Tailwind CSS 类必须精确转换为对应的 SCSS 样式，不允许残留任何 Tailwind 类名。

## 布局类

| Tailwind | SCSS |
|----------|------|
| `flex` | `display: flex;` |
| `flex-col` | `flex-direction: column;` |
| `flex-row` | `flex-direction: row;` |
| `flex-wrap` | `flex-wrap: wrap;` |
| `flex-1` | `flex: 1;` |
| `flex-shrink-0` | `flex-shrink: 0;` |
| `items-center` | `align-items: center;` |
| `items-start` | `align-items: flex-start;` |
| `items-end` | `align-items: flex-end;` |
| `justify-center` | `justify-content: center;` |
| `justify-between` | `justify-content: space-between;` |
| `justify-end` | `justify-content: flex-end;` |
| `grid` | `display: grid;` |
| `grid-cols-{n}` | `grid-template-columns: repeat({n}, 1fr);` |
| `gap-{n}` | `gap: {n*4}px;` 或 `gap: {n*0.25}rem;` |
| `hidden` | `display: none;` |
| `block` | `display: block;` |
| `inline-block` | `display: inline-block;` |

## 间距类

| Tailwind 模式 | SCSS |
|--------------|------|
| `p-{n}` | `padding: {n*4}px;` |
| `px-{n}` | `padding-left: {n*4}px; padding-right: {n*4}px;` |
| `py-{n}` | `padding-top: {n*4}px; padding-bottom: {n*4}px;` |
| `pt-{n}` / `pr-{n}` / `pb-{n}` / `pl-{n}` | 对应方向 `padding` |
| `m-{n}` | `margin: {n*4}px;` |
| `mx-{n}` / `my-{n}` / `mt-{n}` 等 | 同理 |
| `space-x-{n}` | `> * + * { margin-left: {n*4}px; }` |
| `space-y-{n}` | `> * + * { margin-top: {n*4}px; }` |

## 尺寸类

| Tailwind | SCSS |
|----------|------|
| `w-full` | `width: 100%;` |
| `w-{n}` | `width: {n*4}px;` |
| `h-{n}` | `height: {n*4}px;` |
| `min-h-screen` | `min-height: 100vh;` |
| `max-w-{size}` | 对应 `max-width` 值 |
| `aspect-square` | `aspect-ratio: 1 / 1;` |

## 字体与文本

| Tailwind | SCSS |
|----------|------|
| `text-xs` | `font-size: 12px;` |
| `text-sm` | `font-size: 14px;` |
| `text-base` | `font-size: 16px;` |
| `text-lg` | `font-size: 18px;` |
| `text-xl` | `font-size: 20px;` |
| `text-2xl` | `font-size: 24px;` |
| `text-3xl` | `font-size: 30px;` |
| `font-normal` | `font-weight: 400;` |
| `font-medium` | `font-weight: 500;` |
| `font-semibold` | `font-weight: 600;` |
| `font-bold` | `font-weight: 700;` |
| `text-center` | `text-align: center;` |
| `text-left` | `text-align: left;` |
| `text-right` | `text-align: right;` |
| `leading-{n}` | `line-height: {n*4}px;` 或 `line-height: {n};` |
| `truncate` | `overflow: hidden; text-overflow: ellipsis; white-space: nowrap;` |
| `line-clamp-{n}` | `display: -webkit-box; -webkit-line-clamp: {n}; -webkit-box-orient: vertical; overflow: hidden;` |

## 颜色类

| Tailwind 模式 | SCSS |
|--------------|------|
| `text-{color}-{shade}` | `color: {对应色值};` |
| `bg-{color}-{shade}` | `background-color: {对应色值};` |
| `border-{color}-{shade}` | `border-color: {对应色值};` |
| `text-white` | `color: #ffffff;` |
| `bg-white` | `background-color: #ffffff;` |
| `text-black` | `color: #000000;` |
| `text-gray-500` | `color: #6b7280;` |
| `bg-blue-500` | `background-color: #3b82f6;` |
| `opacity-{n}` | `opacity: {n/100};` |

### 常用 Tailwind 色板参考

- gray: 50=#f9fafb, 100=#f3f4f6, 200=#e5e7eb, 300=#d1d5db, 400=#9ca3af, 500=#6b7280, 600=#4b5563, 700=#374151, 800=#1f2937, 900=#111827
- blue: 50=#eff6ff, 100=#dbeafe, 200=#bfdbfe, 500=#3b82f6, 600=#2563eb, 700=#1d4ed8
- red: 500=#ef4444, 600=#dc2626
- green: 500=#22c55e, 600=#16a34a
- yellow: 500=#eab308
- orange: 500=#f97316

## 边框与圆角

| Tailwind | SCSS |
|----------|------|
| `border` | `border: 1px solid;` |
| `border-{n}` | `border-width: {n}px;` |
| `border-t` / `border-b` | `border-top: 1px solid;` / `border-bottom: 1px solid;` |
| `rounded` | `border-radius: 4px;` |
| `rounded-md` | `border-radius: 6px;` |
| `rounded-lg` | `border-radius: 8px;` |
| `rounded-xl` | `border-radius: 12px;` |
| `rounded-2xl` | `border-radius: 16px;` |
| `rounded-full` | `border-radius: 9999px;` |
| `rounded-none` | `border-radius: 0;` |

## 定位

| Tailwind | SCSS |
|----------|------|
| `relative` | `position: relative;` |
| `absolute` | `position: absolute;` |
| `fixed` | `position: fixed;` |
| `sticky` | `position: sticky;` |
| `top-0` / `right-0` / `bottom-0` / `left-0` | 对应 `top/right/bottom/left: 0;` |
| `inset-0` | `top: 0; right: 0; bottom: 0; left: 0;` |
| `z-{n}` | `z-index: {n};` |

## 阴影与效果

| Tailwind | SCSS |
|----------|------|
| `shadow-sm` | `box-shadow: 0 1px 2px 0 rgba(0,0,0,0.05);` |
| `shadow` | `box-shadow: 0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px -1px rgba(0,0,0,0.1);` |
| `shadow-md` | `box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1);` |
| `shadow-lg` | `box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1);` |
| `overflow-hidden` | `overflow: hidden;` |
| `overflow-y-auto` | `overflow-y: auto;` |
| `cursor-pointer` | `cursor: pointer;` |
| `transition` | `transition: all 0.15s ease;` |
