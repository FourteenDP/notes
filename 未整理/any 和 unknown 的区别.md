---
title: any 和 unknown 的区别
uid: 1688849860861309
aliases: []
categories: null
tags:
  - 计算机/语言/TypeScript
description: null
original: null
cover: null
cssclasses: null
author: null
originalLink: null
createTime: '2024-04-17 09:55:17'
updateTime: '2024-04-19 14:46:07'
---

# any 和 unknown 的区别

- any 可以赋值给任何类型，unknown 只能赋值给 any 和 unknown
- unknown 类型的值不能直接使用，需要先判断类型

```ts
// any
let a: any = 1;
a = '1';
a = true;

// unknown
let b: unknown = 1;
b = '1';
b = true;

// any可以赋值给任何类型
let c: string = a;
let d: number = a;
let e: boolean = a;

// unknown只能赋值给any和unknown
let f: string = b; // error
let g: number = b; // error
let h: boolean = b; // error

let i: any = b;
let j: unknown = b;



// 使用unknown需要先判断类型
if (typeof b === 'string') {
  b.trim();
}

if (typeof b === 'number') {
  b.toFixed(2);
}

if (typeof b === 'boolean') {
  b.valueOf();
}

```
