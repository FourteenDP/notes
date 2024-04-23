---
title: WSL 系统代理
uid: 1407374884150481
archived: false
aliases: []
categories: []
tags:
  - 计算机/Linux/WSL
  - 计算机/Linux/系统代理
createTime: "2024-04-23 07:17:50"
updateTime: "2024-04-23 07:17:50"
---

# WSL 系统代理

## WSL1

WSL1 的 Linux 子系统和 Windows 共享了网络端口

```sh

export ALL_PROXY="http://127.0.0.1:10808"

```
