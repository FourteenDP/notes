---
title: null
uid: 20240123112809268
aliases: null
categories: null
tags: []
description: null
cover: null
cssclasses: null
author: null
domain: null
originalLink: null
createTime: null
updateTime: null
---

# 【WSL】 WSLg 中显示中文（解决中文乱码）_wslg 中文乱码 - CSDN 博客

- 生成 locale 配置文件

```
sudo locale-gen
locale

```

- Sharing Windows fonts with WSL

```
sudo apt install fontconfig
sudo vim /etc/fonts/local.conf

```

- paste

```
<?xml version="1.0"?>
<!DOCTYPE fontconfig SYSTEM "fonts.dtd">
<fontconfig>
    <dir>/mnt/c/Windows/Fonts</dir>
</fontconfig>

```

- 开启 WSL 下的图形界面编辑器 gedit，还有效果图：

```
gedit cn.txt

```

![](https://img-blog.csdnimg.cn/655f24dada204c2e90f4ed5164adc2a6.png)
