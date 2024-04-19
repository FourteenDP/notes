---
title: JSX 声明组件的几种方式
uid: 2251799814178901
aliases: []
categories: null
tags:
  - 计算机/前端/Vue
  - 计算机/前端/Vue3
  - 计算机/前端/JavaScript
  - JSX
  - 计算机/前端/组件
description: null
original: null
cover: null
cssclasses: null
author: null
createTime: '2024-04-17 09:55:17'
updateTime: '2024-04-19 15:45:34'
---

# JSX 声明组件的几种方式

## `defineComponent` 声明组件

```tsx
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Home',
  setup(props) {
    return () => <div>Home</div>
  },
})
```

## 箭头函数声明组件

```tsx
export default () => <div>Home</div>
```
