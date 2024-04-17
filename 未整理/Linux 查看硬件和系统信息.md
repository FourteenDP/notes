---
标题: Linux 查看硬件和系统信息
描述: null
封面: null
uid: 20240123112806940
aliases: []
tags:
  - 计算机/Linux
  - 计算机/Linux/硬件信息
  - 系统信息
  - 操作系统版本
  - 系统内核
  - 发行版本
  - 计算机/Linux/硬件信息
cssclasses: null
创建时间: 2023-05-07T14:01:31.000Z
更新时间: 2024-01-22T16:57:42.000Z
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
