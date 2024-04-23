---
title: WSL 修改默认安装目录到其他盘
uid: 2251799814282306
archived: false
aliases: []
categories: []
tags:
  - 计算机/Linux/WSL
  - 默认安装目录
createTime: "2024-04-23 00:07:33"
updateTime: "2024-04-23 00:07:33"
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
