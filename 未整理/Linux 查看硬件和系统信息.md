---
title: Linux 查看硬件和系统信息
uid: 1080943532583
aliases: []
categories: null
tags:
  - 计算机/Linux
  - 计算机/Linux/硬件信息
  - 系统信息
  - 操作系统版本
  - 系统内核
  - 发行版本
  - 计算机/Linux/硬件信息
description: null
cover: null
cssclasses: null
author: null
domain: null
originalLink: null
createTime: '2024-04-19 13:37:45'
updateTime: '2024-04-19 13:37:45'
---

# Linux 查看硬件和系统信息

## 查看操作系统版本信息

| 命令                  | 说明                  |
| --------------------- | --------------------- |
| `cat /proc/version`   | 查看系统版本信息      |
| `uname -a`            | 查看系统内核信息      |
| `cat /etc/issue`      | 查看发行版本信息      |
| `cat /etc/os-release` | 查看详细发行版本信息  |
| `cat /proc/cpuinfo`   | 查看硬件信息          |
| `getconf LONG_BIT`    | 查看 32bit 还是 64bit |
