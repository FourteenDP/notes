---
title: null
uid: 1970324837804172
aliases: []
categories: null
tags:
  - 计算机/前端/工程化
description: null
original: null
cover: null
cssclasses: null
author: null
originalLink: null
createTime: '2024-04-19 14:12:12'
updateTime: '2024-04-19 14:12:12'
---

# Vite 全局样式注入

## Vite 全局样式注入

### 问题

在使用 Vite 开发 Vue 项目时，如果需要在全局注入样式，可以在 `index.html` 中引入样式文件，但是这样做的话，每次修改样式文件都需要重新启动项目，这样就很麻烦了。

### 解决方案

在 `vite.config.js` 中配置 `css.preprocessorOptions`，如下：

```js
css: {
  preprocessorOptions: {
    scss: {
      additionalData: `@import "./src/assets/styles/global.scss";`
    }
  }
}
```
