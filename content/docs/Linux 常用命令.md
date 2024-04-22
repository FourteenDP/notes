---
title: Linux 常用命令
uid: 1407374884046956
archived: false
aliases: []
categories: []
tags:
  - 计算机/Linux
  - 常用命令
  - 软件包管理
  - shell
  - 文件操作
  - 文件夹操作
  - 环境配置
createTime: '2024-04-22 10:33:37'
updateTime: '2024-04-22 10:33:37'
---

# Linux 常用命令

- 查看已安装的软件包:`apt list --installed`
- 查看当前使用的 `shell`: `echo $SHELL`
- 查看系统中的所有 `shell`:`cat /etc/shells`
- 重命名文件夹和文件:`mv oldFileName newFileName`
- 新建文件夹: `mkdir folderName`
- 递归创建文件夹: `mkdir -p folderName/folderName1/folderName2`
- 更新已安装的软件包: `apt upgrade`
- 设置默认 shell: `chsh -s /bin/zsh` ^244e71
- 删除包并且删除包的配置文件: `apt remove --purge packageName`
- 删除未使用的依赖项 `apt --purge autoremove`
- 刷新 shell 环境:`source ~/.zshrc
