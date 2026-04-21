# TypeScript 规范

> 定义 M8 项目中 TypeScript 的使用规范。

## 📝 类型声明规范

### 必须显式声明类型

```typescript
// ✅ 正确：显式声明
const userName: string = "admin";
const userAge: number = 25;
const isActive: boolean = true;

// ❌ 错误：依赖推断的复杂类型
const userData = fetchUserData(); // 类型不明确
```

### 禁止使用 any

```typescript
// ❌ 禁止
const data: any = response.data;
function process(item: any) {}

// ✅ 正确：使用具体类型或 unknown
const data: UserInfo = response.data;
function process(item: unknown) {
  if (isUserInfo(item)) {
    // 类型收窄后使用
  }
}
```

## 📦 接口与类型定义

### 命名规范

| 类型     | 规则                | 示例          |
| -------- | ------------------- | ------------- |
| 接口     | PascalCase + I 前缀 | `IUserInfo`   |
| 类型     | PascalCase + T 前缀 | `TStatus`     |
| 枚举替代 | 常量对象            | `USER_STATUS` |

### 优先使用接口

```typescript
// ✅ 推荐：接口（支持扩展和合并）
interface IUserInfo {
  id: string;
  name: string;
  age: number;
}

interface IUserInfo {
  avatar?: string; // 接口合并
}

// ⚠️ 次选：类型别名
type TUserInfo = {
  id: string;
  name: string;
};
```

### 避免使用枚举

```typescript
// ❌ 避免：枚举
enum UserStatus {
  Active = 1,
  Inactive = 0,
}

// ✅ 推荐：常量对象
const USER_STATUS = {
  ACTIVE: 1,
  INACTIVE: 0,
} as const;

type TUserStatus = (typeof USER_STATUS)[keyof typeof USER_STATUS];
```

## 🧩 组件 Props 定义

```typescript
// Vue3 组件 Props
interface IProps {
  userId: string; // 必填
  userName?: string; // 可选
  userAge?: number; // 可选
}

const props = withDefaults(defineProps<IProps>(), {
  userName: "默认用户",
  userAge: 0,
});
```

## 📋 常用类型定义

### API 响应类型

```typescript
// 通用响应结构
interface IApiResponse<T> {
  status: {
    code: number;
    message: string;
  };
  custom: T;
}

// 列表响应
interface IListResponse<T> {
  infolist: T[];
  total: number;
}

// 使用示例
type TUserListResponse = IApiResponse<IListResponse<IUserInfo>>;
```

### 表单数据类型

```typescript
interface ILoginForm {
  username: string;
  password: string;
  remember?: boolean;
}

const form = ref<ILoginForm>({
  username: "",
  password: "",
  remember: false,
});
```

## ⚡ 类型工具

```typescript
// Partial - 所有属性可选
type TPartialUser = Partial<IUserInfo>;

// Required - 所有属性必填
type TRequiredUser = Required<IUserInfo>;

// Pick - 选取部分属性
type TUserBasic = Pick<IUserInfo, "id" | "name">;

// Omit - 排除部分属性
type TUserWithoutId = Omit<IUserInfo, "id">;

// Record - 键值对类型
type TUserMap = Record<string, IUserInfo>;
```

## ✅ TypeScript 检查清单

- [ ] 显式声明变量类型
- [ ] 未使用 any 类型
- [ ] 接口使用 I 前缀
- [ ] 类型使用 T 前缀
- [ ] 使用常量对象替代枚举
- [ ] Props 配合接口定义
