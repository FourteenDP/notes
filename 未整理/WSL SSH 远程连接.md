---
标题: WSL SSH 远程连接
描述: null
封面: null
uid: 20240123112807100
aliases: []
tags:
  - 计算机/Linux/WSL
  - 计算机/Linux
  - SSH
  - 远程连接
  - 服务安装
  - 配置信息
cssclasses: null
创建时间: 2023-05-07T14:01:31.000Z
更新时间: 2024-01-22T16:57:39.000Z
---

# WSL SSH 远程连接

## SSH 服务安装

WSL 子系统的 SSH 服务无法连接，需要重新安装

```shell
apt remove openssh-server
apt install openssh-server
```

## 编辑配置信息

- 编辑 `/etc/ssh/sshd_config`

```shell
PasswordAuthentication yes
Port 22
PermitRootLogin yes
```

- 开启服务
`service ssh start`
- 查看状态
`service ssh status`
