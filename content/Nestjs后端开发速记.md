https://zhuanlan.zhihu.com/p/555833984

# nestjs 之后端开发速记

## 架构流程

Controller -> Service -> Repository -> Database

Controller: 负责接收请求，处理请求参数，调用Service层的方法，返回结果给客户端

- 只能被注入

Service: 业务逻辑处理层，负责处理业务逻辑，调用Repository层的方法

- 能够被注入，也可以注入别的对象

Repository: 数据库操作层，负责数据库的增删改查操作

Database: 数据库

## 什么是IoC

IoC(Inversion of Control): 控制反转，是一种设计原则，它将传统的程序控制流程反转，由被调用者控制调用者。这样，对象之间的关系从原来的直接依赖变为间接依赖，从而实现了控制反转。

DI(Dependency Injection): 依赖注入，是IoC的一种实现方式，通过依赖注入，可以将依赖对象的创建和维护交给外部容器，从而实现了控制反转。

[基于TypeScript实现IoC容器](https://juejin.cn/post/7061510864708304933)

后端系统有很多的对象，这些对象之间的关系错综复杂，如果手动创建并组装对象比较麻烦，所以后端框架一般都提供了 IoC 机制。

IoC 机制是在 class 上标识哪些是可以被注入的，它的依赖是什么，然后从入口开始扫描这些对象和依赖，自动创建和组装对象。

Nest 里通过 @Controller 声明可以被注入的 controller，通过 @Injectable 声明可以被注入也可以注入别的对象的 provider，然后在 @Module 声明的模块里引入。

并且 Nest 还提供了 Module 和 Module 之间的 import，可以引入别的模块的 provider 来注入。

虽然 Nest 这套实现了 IoC 的模块机制看起来繁琐，但是却解决了后端系统的对象依赖关系错综复杂的痛点问题。

### NestJS中的IoC简单使用

nest 会从 AppModule 开始解析 class 上通过装饰器声明的依赖信息，自动创建和组装对象。

所以 AppController 只是声明了对 AppService 的依赖，就可以调用它的方法了

nest 在背后自动做了对象创建和依赖注入的工作。

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5245830454164037a3001c6c4288a8b3~tplv-k3u1fbpfcp-jj-mark:1663:0:0:0:q75.awebp)

nest 也能够导入其他模块，比如这里的 AppModule 导入了 UserModule，那么 UserModule 里的对象也会被 nest 创建和注入。

**NestJS中的依赖注入示例**

```typescript
// user.module.ts
import { Module } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserController } from "./user.controller";
@Module({
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
// app.module.ts
import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
// 通过 @Module 声明模块，其中 controllers 是控制器，只能被注入。
// providers 里可以被注入，也可以注入别的对象，比如这里的 AppService。
@Module({
  imports: [UserModule], // 导入其他模块，UserModule 里的对象也可以被注入。
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

// app.controller.ts
import { Controller, Get, Inject } from "@nestjs/common";
import { AppService } from "./app.service";
// @Controller，代表这个 class 可以被注入，nest 也会把它放到 IoC 容器里。
// Controller 只需要被注入，所以 nest 单独给它加了 @Controller 的装饰器。
@Controller()
export class AppController {
  @Inject(AppService)
  private readonly appService: AppService;
  constructor() {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

// app.service.ts
import { Injectable } from "@nestjs/common";
// @Injectable，代表这个 class 可注入，那么 nest 就会把它的对象放到 IOC 容器里。
// Service 是可以被注入也是可以注入到别的对象的，所以用 @Injectable 声明。
@Injectable()
export class AppService {
  getHello(): string {
    return "Hello World!";
  }
}
```

## 多种依赖注入方式

一般情况下，provider 是通过 @Injectable 声明，然后在 @Module 的 providers 数组里注册的 class。

默认的 token 就是 class，这样不用使用 @Inject 来指定注入的 token。

但也可以用字符串类型的 token，不过注入的时候要用 @Inject 单独指定。

除了可以用 useClass 指定注入的 class，还可以用 useValue 直接指定注入的对象。

如果想动态生成对象，可以使用 useFactory，它的参数也注入 IOC 容器中的对象，然后动态返回 provider 的对象。

如果想起别名，可以用 useExisting 给已有的 token，指定一个新 token。

灵活运用这些 provider 类型，就可以利用 Nest 的 IOC 容器中注入任何对象。


## 如何调试 NestJS

NestJS 项目的调试和普通的 Node.js 项目一样，可以通过 VSCode 或 浏览器的开发者工具来调试。

复杂的代码需要用断点调试查看调用栈和作用域，也就是代码的执行路线，然后单步执行。

node 代码可以加上 --inspect 或者 --inspect-brk 启动调试 ws 服务，然后用 Chrome DevTools 或者 vscode debugger 连上来调试。

nest 项目的调试也是 node 调试，可以使用 nest start --debug 启动 ws 服务，然后在 vscode 里 attach 上来调试，也可以添加个调试配置来运行 npm run start:dev。

nest 项目最方便的调试方式还是在 VSCode 里添加 npm run start:dev 的调试配置。

此外，我们还理解了 logpoint、条件断点、异常断点等断点类型。

学会了 nest 项目的调试，就可以直接在代码里打断点了。

### 使用浏览器开发者工具调试 NestJS

```bash
npm run start:debug
```

会开启一个调试端口，然后在浏览器的开发者工具里打开这个端口，就可以在浏览器里调试 NestJS 项目了。

打开 chrome://inspect/，可以看到可以调试的目标：
![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6a0ff69dc97e47ef9d6eccd1ae9d8501~tplv-k3u1fbpfcp-jj-mark:1663:0:0:0:q75.awebp)
![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b9ae4e138a374a62b5dd67b4e7592210~tplv-k3u1fbpfcp-jj-mark:1663:0:0:0:q75.awebp)

### 使用 VSCode 调试 NestJS

1. 在 .vscode 文件夹下创建 launch.json 文件，配置调试信息

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "debug nest",
      "runtimeExecutable": "npm",
      "args": ["run", "start:dev"],
      "skipFiles": ["<node_internals>/**"], // 跳过 node 内部文件
      "console": "integratedTerminal" // 调试时在终端里显示
    }
  ]
}j
```

## AOP

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7b3b3b3b3b3b4b3b8)
