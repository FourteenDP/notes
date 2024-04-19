---
title: null
uid: 934796815273
aliases: []
categories: null
tags:
  - 计算机/Windows
  - 终端
  - 设置代理
  - 临时代理
  - 长期生效
  - 测试
description: null
cover: null
cssclasses: null
author: null
originalLink: null
createTime: '2024-04-19 13:56:22'
updateTime: '2024-04-19 13:56:22'
---

# Windows 终端设置代理

## 临时代理

> [!warning]
> 终端关闭后失效

```shell
set http_proxy = "http://127.0.0.1:10808"
set https_proxy = "http://127.0.0.1:10808"
```

## 长期生效

设置系统环境变量

![[CMD终端代理设置环境变量.png]]

## 测试

> [!warning]
> 不能使 ping 命令测试

```sehll
curl www.google.com
```
