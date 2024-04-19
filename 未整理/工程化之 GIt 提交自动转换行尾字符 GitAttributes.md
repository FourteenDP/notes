---
title: null
uid: 1407374884383075
aliases: []
categories: null
tags:
  - 计算机/工程化
  - 计算机/工程化/Git
  - 自动转换
  - 行尾字符
  - GitAttributes
description: null
original: null
cover: null
cssclasses: null
author: null
originalLink: null
createTime: '2024-04-19 14:22:40'
updateTime: '2024-04-19 14:22:40'
---

# 工程化之 GIt 提交自动转换行尾字符 GitAttributes

`.gitattributes` 文件允许您指定文件和路径属性，这些属性应由 git 在执行 git 操作（如 git commit 等）时使用。简而言之，它配置了如何处理匹配某些模式（通常是文件扩展名）的文件。常见的情况包括配置如何处理行尾、文档是否被视为二进制（不可比较）以及在提交或检出后提供特殊处

下面是一个简单的 `.gitattributes` 文件示例：

```sh
# https://docs.github.com/cn/get-started/getting-started-with-git/configuring-git-to-handle-line-endings

# Automatically normalize line endings (to LF) for all text-based files.
# 自动规范化所有基于文本的文件的行尾字符（为 LF）。
* text=auto eol=lf

# Declare files that will always have CRLF line endings on checkout.
# 声明在检出时始终具有 CRLF 行尾字符的文件。
*.{cmd,[cC][mM][dD]} text eol=crlf
*.{bat,[bB][aA][tT]} text eol=crlf

# Denote all files that are truly binary and should not be modified.
# 指示所有真正的二进制文件，不应被修改。
*.{ico,png,jpg,jpeg,gif,webp,svg,woff,woff2} binary
```
