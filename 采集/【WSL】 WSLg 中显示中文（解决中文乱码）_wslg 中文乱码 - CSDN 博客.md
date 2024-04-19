---
title: 【WSL】 WSLg 中显示中文（解决中文乱码）_wslg 中文乱码 - CSDN 博客
uid: 2251799814507528
aliases: null
categories: null
tags: []
description: null
original: null
cover: null
cssclasses: null
author: blog.csdn.net
originalLink: 'https://blog.csdn.net/weixin_41714373/article/details/119519589'
createTime: '2024-04-19 14:22:39'
updateTime: '2024-04-19 14:22:39'
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
