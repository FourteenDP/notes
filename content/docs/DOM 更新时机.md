---
title: DOM 更新时机
uid: 1407374884046906
archived: false
aliases: []
categories: []
tags:
  - DOM更新
  - 计算机/前端/Vue
  - 原理
createTime: '2024-04-22 10:48:19'
updateTime: '2024-04-22 10:48:19'
---

# DOM 更新时机

当你更改响应式状态后，DOM 会自动更新。然而，你得注意 DOM 的更新并不是同步的。相反，Vue 将缓冲它们直到更新周期的 " 下个时机 " 以确保无论你进行了多少次状态更改，每个组件都只更新一次
