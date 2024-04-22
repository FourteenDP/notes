---
title: 迪米特法则 LOD(Law of Demeter)
uid: 5629499534950799
archived: false
aliases: []
categories: []
tags:
  - 计算机/设计模式/基本原则/其它原则
createTime: '2024-04-22 10:42:23'
updateTime: '2024-04-22 10:42:23'
---

# 迪米特法则 LOD(Law of Demeter)

- 定义：Talk only to your immediate friends and not to strangers，只和你的直接朋友交谈，不和陌生人说话
- 解释：一个对象应该对其他对象有最少的了解，类之间的耦合度越低，越有利于复用，一个类应该对自己需要耦合或调用的类知道得最少，类的内部如何实现与调用者或者依赖者没有关系，调用者或者依赖者只需要知道它需要的方法即可
