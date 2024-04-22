---
title: Vue Router
uid: 1407374884047062
archived: false
aliases: []
categories: []
tags:
  - 计算机/前端/Vue
  - 计算机/前端/Vue3
  - 计算机/前端/JavaScript
  - 计算机/前端/Vue Router
createTime: '2024-04-22 10:48:19'
updateTime: '2024-04-22 10:48:19'
---

# Vue Router

## Setup 中使用 router

```js
import { useRouter } from 'vue-router'
// cosnt router = useRouter() // 无法使用
export default {
  setup() {
    const router = useRouter()
    return {
      router
    }
  }
}
```

## 路由元信息类型提示

```js
router.d.ts
import 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    title?: string
    showMenu?: boolean
  }
}
```
