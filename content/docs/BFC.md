---
title: BFC
uid: 1407374884046891
archived: false
aliases: []
categories: []
tags:
  - BFC
  - 计算机/前端/HTML
  - 计算机/前端/CSS
createTime: "2024-04-23 07:08:20"
updateTime: "2024-04-23 07:08:20"
---

# BFC

## 作用

- 形成独立空间作用域不影像外部布局

## 触发

- float 不为 none
- position 不为 relative 和 static
- overflow 不为 auto、scroll 和 hidden
- display 值为 table-cell 或 inline-block

## 解决高度塌陷

- 给父元素触发 BFC
- 添加固定高度
- 给最后一个标签添加 clear: both 清除浮动属性
