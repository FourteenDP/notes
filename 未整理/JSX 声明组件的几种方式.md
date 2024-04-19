---
title: JSX 声明组件的几种方式
uid: 20240123112806930
aliases: []
categories: null
tags:
  - 计算机/前端/Vue
  - 计算机/前端/Vue3
  - 计算机/前端/JavaScript
  - JSX
  - 计算机/前端/组件
description: null
cover: null
cssclasses: null
author: null
domain: null
originalLink: null
createTime: 2023-05-07T14:01:31.000Z
updateTime: 2024-01-22T16:57:43.000Z
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
