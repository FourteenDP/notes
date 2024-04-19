---
title: Debian 中文环境
uid: 20240123112806910
aliases: null
categories: null
tags:
  - 计算机/Linux/Debian
description: null
cover: null
cssclasses: null
author: null
domain: null
originalLink: null
createTime: 2023-05-07T14:01:31.000Z
updateTime: 2024-01-22T16:57:44.000Z
---

# Debian 中文环境

```shell
# 安装
apt install locales
# 配置
sudo dpkg-reconfigure locales
# 查看当前语言
locale
# 设置失败执行以下
export LANG=zh_CN.UTF-8
# 重启终端
```
