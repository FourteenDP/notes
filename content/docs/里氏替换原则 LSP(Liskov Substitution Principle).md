---
title: 里氏替换原则 LSP(Liskov Substitution Principle)
uid: 5348024558258374
archived: false
aliases: []
categories: []
tags:
  - 计算机/设计模式/基本原则/五大原则SOLID
createTime: '2024-04-17 09:55:17'
updateTime: '2024-04-22 09:58:23'
---

# 里氏替换原则 LSP(Liskov Substitution Principle)

- 定义：所有引用基类的地方必须能透明地使用其子类的对象
- 解释：子类必须完全实现父类的方法，而且子类可以有自己的个性化方法
- 优点：可以在运行时判断任意一个实例对象是否是某个类的实例
- 缺点：增加了代码的复杂度
- 适用场景：只有当子类可以替换掉所有父类的出现的地方，父类才能真正被复用，而且子类还能增加父类的新功能
