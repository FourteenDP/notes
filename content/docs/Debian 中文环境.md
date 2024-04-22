---
title: Debian 中文环境
uid: 1407374884046908
archived: false
aliases: []
categories: []
tags:
  - 计算机/Linux/Debian
createTime: '2024-04-17 09:55:17'
updateTime: '2024-04-22 09:58:23'
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
