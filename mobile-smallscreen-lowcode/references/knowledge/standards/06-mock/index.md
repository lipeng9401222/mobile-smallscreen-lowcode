# Mock 数据规范

> 定义 M8 项目中 Mock 数据的使用规范。

## 📁 文件位置

```
src/pages/[module_name]/
├── [module_name].vue
├── router.js
├── store.js
└── mock.js          # Mock 数据定义
```

框架会自动引入模块下的 `mock.js` 文件。

## 📝 基础结构

```javascript
import Mock from "@mock";

const resultData = [
  {
    methodUrl: "/rest/api/endpoint", // 接口地址
    input: {}, // 入参（可选）
    output: {}, // 出参（Mock 数据）
  },
];

export default resultData;
```

## 📋 列表数据示例

```javascript
import Mock from "@mock";

const resultData = [
  {
    methodUrl: "/rest/mock/list",
    input: {
      keyword: "",
      currentpageindex: "",
      pagesize: "",
    },
    output: Mock.mock({
      "infolist|10-20": [
        {
          title: () => Mock.Random.csentence(10),
          date: () => Mock.Random.date(),
          id: () => Mock.Random.guid(),
          content: "来源：综合",
          photo: () => Mock.Random.image("114x83", "#00405d", "#FFF", "Mock"),
        },
      ],
    }),
  },
];

export default resultData;
```

## 📄 详情数据示例

```javascript
import Mock from "@mock";

const resultData = [
  {
    methodUrl: "/rest/mock/detail",
    input: {
      guid: "",
    },
    output: Mock.mock({
      info: {
        title: Mock.Random.csentence(5, 10),
        content: Mock.Random.cparagraph(3, 5),
        author: Mock.Random.cname(),
        date: Mock.Random.date(),
        views: Mock.Random.integer(100, 10000),
      },
    }),
  },
];

export default resultData;
```

## 🎲 Mock.js 常用方法

| 方法                            | 说明       | 示例             |
| ------------------------------- | ---------- | ---------------- |
| `Mock.Random.guid()`            | 生成 GUID  | `"550e8400-..."` |
| `Mock.Random.date()`            | 随机日期   | `"2024-01-15"`   |
| `Mock.Random.cname()`           | 随机中文名 | `"张三"`         |
| `Mock.Random.csentence(n)`      | 中文句子   | `"这是一段..."`  |
| `Mock.Random.cparagraph()`      | 中文段落   | 多句话           |
| `Mock.Random.integer(min, max)` | 随机整数   | `256`            |
| `Mock.Random.image(size)`       | 随机图片   | URL              |

### 数组生成语法

```javascript
// 生成 10-20 个元素的数组
'infolist|10-20': [{ ... }]

// 固定生成 5 个元素
'items|5': [{ ... }]

// 随机选择一个
'status|1': ['待处理', '处理中', '已完成']
```

## 📡 请求调用示例

```javascript
Util.ajax({
  url: `${Config.serverUrl}/rest/mock/list`,
  data: {
    params: JSON.stringify({
      currentpageindex: 0,
      pagesize: 10,
    }),
  },
})
  .then((result) => {
    if (result?.status?.code === 1) {
      // 获取 mock 数据
      console.log(result.custom.infolist);
    }
  })
  .catch((err) => {
    console.error(err);
  });
```

## ⚠️ 注意事项

1. **扁平结构**：直接导出 `info` 或 `infolist`，无需嵌套 `custom`/`status`
2. **数组导出**：`resultData` 必须是数组
3. **接口匹配**：`methodUrl` 用于匹配请求地址
4. **错误处理**：所有 mock 接口应包含错误处理

## 🔄 与真实接口切换

使用 `sdoc-mcp` 服务时，可检索真实接口替换 Mock。

## ✅ 检查清单

- [ ] mock.js 放在模块目录下
- [ ] resultData 为数组格式
- [ ] 包含 methodUrl、input、output
- [ ] 数据结构为扁平格式
- [ ] 使用 Mock.Random 生成随机数据
