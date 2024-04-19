---
title: null
uid: 1688849861089079
aliases: null
categories: null
tags:
  - 计算机/Linux/Debian
description: null
original: null
cover: null
cssclasses: null
author: null
originalLink: null
createTime: '2024-04-19 14:22:40'
updateTime: '2024-04-19 14:22:40'
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
