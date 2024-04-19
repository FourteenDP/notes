---
title: 依赖倒转原则 DIP(Dependence Inversion Principle)
uid: 1688849860861379
aliases: null
categories: null
tags:
  - 计算机/设计模式/基本原则/五大原则SOLID
description: null
original: null
cover: null
cssclasses: null
author: null
originalLink: null
createTime: '2024-04-17 09:55:17'
updateTime: '2024-04-19 14:46:07'
---

# 依赖倒转原则 DIP(Dependence Inversion Principle)

- 定义：高层模块不应该依赖底层模块，两者都应该依赖其抽象；抽象不应该依赖细节，细节应该依赖抽象
- 解释：抽象指的是接口或抽象类，细节就是具体的实现类；依赖指的是类之间的耦合关系，耦合的度越弱，越容易复用，一个处在高层的模块不应该依赖于底层模块，两者都应该依赖于抽象；抽象不应该依赖于细节，细节应该依赖于抽象
- 优点：可以减少类间的耦合性，提高系统的稳定性，提高代码的可读性和可维护性，降低变更引起的风险
- 缺点：增加了系统的复杂度和理解难度
- 适用场景：在系统中尽量使用面向接口编程，而不是面向实现编程
