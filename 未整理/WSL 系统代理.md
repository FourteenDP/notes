---
title: WSL 系统代理
uid: 20240123112807156
aliases: []
categories: null
tags:
  - 计算机/Linux/WSL
  - 计算机/Linux/系统代理
description: null
cover: null
cssclasses: null
author: null
domain: null
originalLink: null
createTime: 2023-05-07T14:01:31.000Z
updateTime: 2024-01-22T16:57:39.000Z
---

# WSL 系统代理

## WSL1

 WSL1 的 Linux 子系统和 Windows 共享了网络端口

```sh

export ALL_PROXY="http://127.0.0.1:10808"

```
