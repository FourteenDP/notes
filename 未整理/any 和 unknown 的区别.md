---
标题: any 和 unknown 的区别
描述: null
封面: null
uid: 20240123112807160
aliases: []
tags:
  - 计算机/语言/TypeScript
cssclasses: null
创建时间: 2023-05-07T14:01:32.000Z
更新时间: 2024-01-23T09:06:33.000Z
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
