---
title: null
uid: 7599824371934534
aliases: []
categories: null
tags:
  - 计算机/前端/UniApp
  - 计算机/前端/Vue3
  - 计算机/工程化/npm
description: null
original: null
cover: null
cssclasses: null
author: null
originalLink: null
createTime: '2024-04-19 14:44:21'
updateTime: '2024-04-19 14:44:21'
---

# 通过 CLI 构建 UniApp 项目

## Vue 2

环境安装

```
npm install -g @vue/cli
```

创建应用

```
vue create -p dcloudio/uni-preset-vue my-project
```

![[Pasted image 20230508183251.png]]

## Vue 3

创建以 javascript 开发的工程（如命令行创建失败，请直接访问 [gitee](https://gitee.com/dcloud/uni-preset-vue/repository/archive/vite.zip) 下载模板）

```
npx degit dcloudio/uni-preset-vue#vite my-vue3-project
```

创建以 typescript 开发的工程（如命令行创建失败，请直接访问 [gitee](https://gitee.com/dcloud/uni-preset-vue/repository/archive/vite-ts.zip) 下载模板）

```
npx degit dcloudio/uni-preset-vue#vite-ts my-vue3-project
```

**注意**: Vue3/Vite 版要求 node 版本 `^14.18.0 || >=16.0.0`

## 更新

> [!warning]
> 不要自己手动更新 `uni-app` 相关依赖,,依赖有最高版本限制,详细请查看官网文档

更新到最新正式版

```
npx @dcloudio/uvm
```

更新到正式版指定版本

```
npx @dcloudio/uvm 3.2.0
```

## 参考

- [uni-app官网](https://uniapp.dcloud.net.cn/quickstart-cli.html#install-vue-cli)
