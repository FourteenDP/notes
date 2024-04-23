---
title: 单一职责原则 SRP(Single Responsibility Principle)
uid: 12947848929287676
archived: false
aliases: []
categories: []
tags:
  - 计算机/设计模式/基本原则/五大原则SOLID
createTime: "2024-04-17 09:55:17"
updateTime: "2024-04-23 15:18:38"
---

# 单一职责原则 SRP(Single Responsibility Principle)

- 定义：一个类只负责一项职责
- 解释：一个类只负责一项职责，这项职责要单一，不能够包含多个方向的职责，否则这个类就不具备可读性、可维护性和可扩展性了
- 优点：降低类的复杂度、提高类的可读性、提高系统的可维护性、变更引起的风险降低
- 缺点：增加类的个数、增加系统的复杂度
- 适用场景：只有逻辑足够简单，才可以在代码级违反单一职责原则；只有类中方法数量足够少，可以在方法级别保持单一职责原则
