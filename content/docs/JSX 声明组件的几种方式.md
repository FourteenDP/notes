---
title: JSX 声明组件的几种方式
uid: 2251799814178901
archived: false
aliases: []
categories: []
tags:
  - 计算机/前端/Vue
  - 计算机/前端/Vue3
  - 计算机/前端/JavaScript
  - JSX
  - 计算机/前端/组件
createTime: "2024-04-23 07:17:50"
updateTime: "2024-04-23 07:17:50"
---

# JSX 声明组件的几种方式

## `defineComponent` 声明组件

```tsx
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
  setup(props) {
    return () => <div>Home</div>;
  },
});
```

## 箭头函数声明组件

```tsx
export default () => <div>Home</div>;
```
