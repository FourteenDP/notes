---
title: WSL 修改默认安装目录到其他盘
uid: 55023329739
aliases: []
categories: null
tags:
  - 计算机/Linux/WSL
  - 默认安装目录
description: null
cover: null
cssclasses: null
author: null
domain: null
originalLink: null
createTime: '2024-04-19 13:37:45'
updateTime: '2024-04-19 13:37:45'
---

# WSL 修改默认安装目录到其他盘

## 导出

```shell
wsl --export Debian d:\wsl-debian.tar
```

## 注销

```shell
wsl --unregister Deabin
```

## 导入

```shell
wsl --import Debian d:\Debian d:\wsl-debian.tar --version 2
```
