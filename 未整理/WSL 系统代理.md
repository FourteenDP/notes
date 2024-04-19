---
title: WSL 系统代理
uid: 403503427321
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
createTime: '2024-04-19 13:37:45'
updateTime: '2024-04-19 13:37:45'
---

# WSL 系统代理

## WSL1

 WSL1 的 Linux 子系统和 Windows 共享了网络端口

```sh

export ALL_PROXY="http://127.0.0.1:10808"

```
