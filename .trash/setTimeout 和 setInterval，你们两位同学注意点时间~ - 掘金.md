 [![稀土掘金](https://juejin.cn/post/7123440584156512293//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/e08da34488b114bd4c665ba2fa520a31.svg) ![稀土掘金](https://juejin.cn/post/7123440584156512293//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/6c61ae65d1c41ae8221a670fa32d05aa.svg)](/) 

- 首页
    
    - [首页](/)
    - [沸点](/pins)
    - [课程](/course)
    - [直播](/live)
    - [活动](/events/all)
    - [竞赛](/challenge)
    
    [商城](https://detail.youzan.com/show/goods/newest?kdt_id=104340304)
    
    [APP](/app?utm_source=jj_nav)
    
    [插件](https://juejin.cn/extension?utm_source=jj_nav)
    
    - [![image](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a65dd67b254c426b87c7ea374c32f1cc~tplv-k3u1fbpfcp-jj:144:0:0:0:q75.avis#?w=462&h=117&s=46860&e=png&a=1&b=3c46d3)](https://juejin.cn/post/7355439624100249635?utm_source=nav&utm_medium=web&utm_campaign=coze0409)

- - 搜索历史 清空
        
    - 创作者中心
        
        - 写文章
            
        - 发沸点
            
        - 写笔记
            
        - 写代码
            
        - 草稿箱
            
        
        创作灵感 查看更多
        
- ![vip](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ffd3e238ee7f46eab42bf88af17f5528~tplv-k3u1fbpfcp-image.image#?w=25&h=26&s=5968&e=svg&a=1&b=dacbbc)
    
    会员
    
- 登录
    
    注册
    
    ## 首次登录 / 注册免费领取
    
    - ![7天会员](https://juejin.cn/post/7123440584156512293//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/94c5898573aea7d3fc270d59ca4d4c62.svg~tplv-k3u1fbpfcp-image.image) 7天会员
    - ![小册7折券](https://juejin.cn/post/7123440584156512293//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/787ccfbc0314568cd120b10713b3a54e.svg~tplv-k3u1fbpfcp-image.image) 小册7折券
    - ![5万矿石](https://juejin.cn/post/7123440584156512293//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0d15112b3c153745a9942e2b93674cf3.svg~tplv-k3u1fbpfcp-image.image) 5万矿石
    
    免费试学课程 · 收藏优质内容 · 提升成长等级 登录 / 注册
    

   

 

  

# setTimeout 和 setInterval，你们两位同学注意点时间~

[ZEROL](/user/3016715636579694/posts)

2022-07-23 2,666 阅读4分钟

关注

## 一、基本定义与用法

### 1、定义

- `setTimeout()`方法用于在指定的时间（单位毫秒）后执行回调函数或指定的一段代码
- `setInterval()`方法可按照指定的时间间隔（单位毫秒）来调用回调函数或指定的一段代码

### 2、参数

- 第一个参数 function，必填，回调函数。或者是一段字符串代码，但是这种方式不建议使用，就和使用`eval()`一样，有安全风险；而且还有作用域问题（字符串会在全局作用域内被解释执行）
    
    javascript
    
    复制代码
    
      `setTimeout('console.log(123);fn()', 2000)`
    
- 第二个参数 delay，可选，单位是 ms，对于`setTimeout`是延迟时间，对于`setInterval`是间隔时间，默认都是 0
- 第三个参数 param1,param2,param3...，可选，是传递给回调函数的参数，不大常用
    
    javascript
    
    复制代码
    
      `setTimeout(function (a, b) {     console.log(a, b)   }, 2000, '我是', '定时器')`
    

### 3、返回值

- 返回一个 ID（数字），可以将这个 ID 传递给`clearTimeout()`或`clearInterval()`来取消执行
- PS: `setTimeout()`和`setInterval()`共用一个编号池，技术上，`clearTimeout()`和`clearInterval()`可以互换使用，但是为了避免混淆，一般不这么做

## 二、setTimeout 和 setInterval 的实际表现

### 1、使用 setInterval 实现计时

javascript

复制代码

  `const startTime = new Date().getTime()   let count = 0   const interval = setInterval(function () {     count++     console.log(new Date().getTime() - (startTime + count * 1000) + 'ms')     if(count === 10){       clearInterval(interval);     }   }, 1000)`

`new Date().getTime() - (startTime + count * 1000)`理想情况下应该是 0ms，然而事实并不是这样，而是存在着误差：

![png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/413fa6cbed5c46bd8a761f920028fc20~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

### 2、使用 setTimeout 实现计时

javascript

复制代码

  `const startTime = new Date().getTime(), delay = 1000   let count = 0   let timer = setTimeout(doFunc, delay)   function doFunc(){     count++     console.log(new Date().getTime() - (startTime + count * 1000) + 'ms')     if(count < 10){       timer = setTimeout(doFunc, delay)     }   }`

setTimeout 也同样存在着误差，而且时间越来越大（setTimeout 需要在同步代码执行完成后才重新开始计时）：

![png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/88ff9ecaabc44b3ca4bf28da54be81f1~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

## 三、为什么会出现误差

### 1、setTimeout 的最短延迟时间

`setTimeout`遵循的规范由 whatwg 来维护，在 [HTML Standard - 8.6 Timers](https://link.juejin.cn?target=https%3A%2F%2Fhtml.spec.whatwg.org%2Fmultipage%2Ftimers-and-user-prompts.html%23dom-settimeout "https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-settimeout") 中写到了定义定时器的详细步骤，其中有两条：

![png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/48672062a7bd44c1aea12510cf135aa5~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

上面的意思就是说，如果设置的 timeout 小于 0，则设置为 0，如果嵌套的层级超过了 5 层（计时器嵌套），并且 timeout 小于 4ms，则设置 timeout 为 4ms。并且，在不同浏览器中出现这种最小延迟的情况有所不同

具体的源代码实现以及各大浏览器实现的不同，大家可以参考这篇文章：[为什么 setTimeout 有最小延时 4ms ？](https://link.juejin.cn?target=https%3A%2F%2Fwww.bruceyj.com%2Ffront-end-interview-summary%2Fsystem-design%2Fwhy-is-the-design%2F2-why-setTimeout-4ms.html "https://www.bruceyj.com/front-end-interview-summary/system-design/why-is-the-design/2-why-setTimeout-4ms.html")

这里只看结论，定时器本身的定义步骤是造成其出现误差的原因之一

### 2、setInterval 的最小间隔时间以及回调函数阻塞

在 HTML5 标准中，setInterval 的最小间隔为 10ms，虽然我在规范文档中并未找到其相关说明，但是经过实际测试，也确实存在最小间隔时间，例如以下代码：

javascript

复制代码

  `let startTime = new Date().getTime()   let count = 0   const interval = setInterval(function () {     count++     console.log(new Date().getTime() - startTime + 'ms')     startTime = new Date().getTime()     if(count === 10) {       clearInterval(interval)     }   }, 0)`

测试结果：

![png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/71c63773de6a41d491dd52a0c4a12126~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

虽然没有 10ms 那么大的间隔，但是间隔仍然存在，猜测具体的间隔时间是和浏览器实现以及设备性能有关，无论如何，间隔是确实存在的

另外，当使用 setInterval 时间间隔到点后，仅当队列中没有该定时器的任何其他代码实例时，才会将定时器的代码添加到队列中，如果有的话，则不会添加，造成堵塞，这个也与 JS 的事件循环有关

### 3、未被激活的tabs的定时最小延迟 >= 1000ms

为了优化后台 tab 的加载损耗（以及降低耗电量），在未被激活的 tab 中定时器的最小延时限制为1s(1000ms)，具体时间在不同的浏览器实现中也有差别

### 4、JS 的事件循环机制

`setTimeout`和`setInterval`中的时间并不是到点就立即执行，而是到点将其回调函数加入异步事件队列中，按照队列先进先出的性质，该回调函数到点之后是否能执行还得取决于是否属于队列首位，如果前头还有其他事件在等待，则不能按点执行，如果没有，则将其放入同步队列执行。具体事件循环机制，可以参考这篇文章：[动图学习-EventLoop](https://juejin.cn/post/6969028296893792286 "https://juejin.cn/post/6969028296893792286")

## 四、解决方案

### 1、在浏览器中实现一个 0ms 延时的定时器

可以参考如下代码（来自于国外的一篇博客，也是 MDN 推荐的方法），主要是使用了 postMessage 方法，异步的执行了回调函数，并且速度要比 setTimeout(0) 要快的多。具体比较可以参照原文：[setTimeout with a shorter delay](https://link.juejin.cn?target=https%3A%2F%2Fdbaron.org%2Flog%2F20100309-faster-timeouts "https://dbaron.org/log/20100309-faster-timeouts")

javascript

复制代码

  `(function() {     const timeouts = [];     const messageName = "zero-timeout-message";        // 只有一个回调函数参数     function setZeroTimeout(fn) {       timeouts.push(fn);       window.postMessage(messageName, "*");     }        function handleMessage(event) {       if (event.source === window && event.data === messageName) {         event.stopPropagation();         if (timeouts.length > 0) {           const fn = timeouts.shift();           fn();         }       }     }        window.addEventListener("message", handleMessage, true);     window.setZeroTimeout = setZeroTimeout;   })();`

使用如下代码做下测试：

javascript

复制代码

  `let startTime = new Date().getTime()   let count = 0   setTimeout(doFunc)   function doFunc(){     count++     console.log(new Date().getTime() - startTime + 'ms')     startTime = new Date().getTime()     if(count < 10){       setTimeout(doFunc)     }   }`

使用 setTimeout(0) 得到的时间：

![png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/25be124d4f3c49c487a418a4d6fdaf57~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

将 setTimeout 改成 setZeroTimeout 后得到的时间，时间几乎都在 0～1，至于为什么不是绝对的 0，猜测可能与性能有关，总的来说，时间确实缩短了：

![png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1923f9c7db2949ffba0b96c89e1f55de~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

### 2、购物网站的秒杀活动

一般情况下，从服务器拿到倒数时间后，前端的执行倒计时程序持续运行，事实上，显示时间相比实际时间会越来越慢的

究其原因，倒计时通常是使用定时器实现，而 JS 的单线程特性使得同步任务执行过程中出现阻塞时，任务队列中的异步任务并不能及时执行，因此浏览器并不能保证在定时器设置的时间结束后代码总是被准时执行，从而造成了倒计时的偏差

一般的解决方法是前端定时向服务器发送请求获取最新的时间差来校准倒计时时间，和用户一直按 F5 刷新没啥区别，比较简单粗暴，下面的方法可以一定程度上解决这个问题，纯前端控制，不依赖于后端。源地址已忘

javascript

复制代码

  ``const interval = 1000   const startTime = new Date().getTime()   // 模拟服务器返回的剩余时间   let time = 60000   let count = 0   let timeCounter   if( time >= 0) {     timeCounter = setTimeout(countDown, interval)   }   function countDown () {     count++     const gap = new Date().getTime() - (startTime + count * interval)     let nextTime = interval - gap     if (nextTime < 0) {       nextTime = 0     }     time -= interval     console.log(`误差：${gap} ms，下一次执行：${nextTime} ms 后，离活动开始还有：${time} ms`)     if (time <= 0) {       clearTimeout(timeCounter)     } else {       timeCounter = setTimeout(countDown, nextTime)     }   }``

## 五、使用 setTimeout 替代 setInterval

定时器指定的时间间隔，表示的是何时将定时器的代码添加到消息队列，而不是何时执行代码。所以真正何时执行代码的时间是不能保证的，它取决于何时被主线程的事件循环获取到，并执行

假设有 `setInterval(function, 100)`，它的执行可能是这样的：

![png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5743630643c24016aed76949a438bbd6~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

上图可见，setInterval 每隔 100ms 往队列中添加一个事件；100ms 后，添加 T1 定时器代码至队列中，主线程中还有任务在执行，所以等待，some event 执行结束后执行 T1 定时器代码；又过了100ms，T2定时器被添加到队列中，主线程还在执行 T1 代码，所以等待；又过了 100ms，理论上又要往队列里推一个定时器代码，但由于此时 T2 还在队列中，所以 T3 不会被添加，结果就是此时被跳过；然后，T1 定时器执行结束后马上执行了 T2 代码，所以并没有达到定时器间隔的效果

综上所述，serInterval 有两个问题：

- 可能多个定时器会连续执行（会导致后续的间隔误差）
- 某些间隔会被跳过（这么设计也可能是为了尽量避免第一个问题）

因而一般会使用 setTimeout 模拟 setInterval，来规避掉上面的缺点

javascript

复制代码

  `setTimeout(function fn() {     // do something     setTimeout(fn, delay)   }, delay)`

这样的话，在前一个定时器代码执行完成前，不会向队列中插入新的定时器（不会连续执行），而且保证了定时器间隔

注：有些说法，可能对当队列中存在定时器实例时，是否会跳过添加实例，存在质疑；还有的说法是，在 Node 环境中会跳过，在浏览器环境中会累加；不过我这边实测，不管在 Node 还是在 web 中，当队列中存在定时器实例时，都会跳过添加的；当然也有可能是浏览器版本或内核不同，表现不同，没有细测；感兴趣的小伙伴可以使用一下代码实测下，看是会一次性输出，还是会间隔性输出

javascript

复制代码

  `let count = 0;   let countId = setInterval(function () {     if (count >= 5) {       clearInterval(countId)       return     }     count++;     console.log(2 + " time: " + Date.now());   }, 1000);   (function () {     let start = Date.now();     for (let i = 1; i <= 2000000000; i++) {       if (i === 2000000000) {         console.log(i);       }     }     console.log(Date.now() - start + 'ms');   })()`

---

**这边顺便一提，涉及到做动画的场景可能会使用定时器**

- 由于定时器的种种误差问题，以及固定时间间隔不一定与屏幕刷新时间相同，可能会引起丢帧；而且定时器在后台仍会继续执行，也会造成资源的浪费
- 一般情况下，还是推荐使用 requestAnimationFrame，RAF 重绘或回流（重排）的时间间隔是紧紧跟随浏览器的刷新频率的；并且在页面未激活时，该页面的屏幕刷新任务也会被暂停，当页面被激活时，任务会从上次停留的地方继续执行，这也就意味着将耗费更少的资源，提升了性能

### 总结

- setTimeout 和 setInterval 都存在计时误差，不会严格按照既定时间执行
- 一般情况下，这些误差不会造成太大影响，只对于某些特殊场景，对时间要求比较严格的情况下，需要特殊处理
- 对于 setInterval，个人建议能不用尽量不用，使用 setTimeout 的嵌套实现，可以规避掉一些潜在问题的发生

### 参考文章

- [blog.csdn.net/b954960630/…](https://link.juejin.cn?target=https%3A%2F%2Fblog.csdn.net%2Fb954960630%2Farticle%2Fdetails%2F82286486 "https://blog.csdn.net/b954960630/article/details/82286486")
- [juejin.cn/post/684490…](https://juejin.cn/post/6844903773622501383 "https://juejin.cn/post/6844903773622501383")
- [dbaron.org/log/2010030…](https://link.juejin.cn?target=https%3A%2F%2Fdbaron.org%2Flog%2F20100309-faster-timeouts "https://dbaron.org/log/20100309-faster-timeouts")

  

标签：

[JavaScript](/tag/JavaScript)

评论 0

![avatar](https://juejin.cn/post/7123440584156512293//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/58aaf1326ac763d8a1054056f3b7f2ef.svg)

0 / 1000

标点符号、链接等不计算在有效字数内

Ctrl + Enter

发送

登录 / 注册 即可发布评论！

暂无评论数据

![](https://juejin.cn/post/7123440584156512293//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/c12d6646efb2245fa4e88f0e1a9565b7.svg) 11

![](https://juejin.cn/post/7123440584156512293//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/336af4d1fafabcca3b770c8ad7a50781.svg) 评论

![](https://juejin.cn/post/7123440584156512293//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/3d482c7a948bac826e155953b2a28a9e.svg) 收藏

加个关注，精彩更新不错过~

![avatar](https://p9-passport.byteacctimg.com/img/user-avatar/6fc914d6ecc7692fe02469de6a47a36e~40x40.awebp)

关注

[

![avatar](https://p9-passport.byteacctimg.com/img/user-avatar/6fc914d6ecc7692fe02469de6a47a36e~130x130.awebp)

ZEROL ![创作等级LV.2](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/53901be7d27e4abe94530e12d815491d~tplv-k3u1fbpfcp-jj:0:0:0:0:q75.avis "创作等级LV.2")   

前端墨鱼狮 @peace



](/user/3016715636579694/posts)

[

3

文章

](/user/3016715636579694/posts)[

3.2k

阅读

](/user/3016715636579694/posts)[

32

粉丝

](/user/3016715636579694/followers)

加个关注，精彩更新不错过~

关注

已关注

[

私信

](/notification/im?participantId=3016715636579694)

目录

收起

- [一、基本定义与用法](#heading-0 "一、基本定义与用法")
    
    - [1、定义](#heading-1 "1、定义")
        
    - [2、参数](#heading-2 "2、参数")
        
    - [3、返回值](#heading-3 "3、返回值")
        
- [二、setTimeout 和 setInterval 的实际表现](#heading-4 "二、setTimeout 和 setInterval 的实际表现")
    
    - [1、使用 setInterval 实现计时](#heading-5 "1、使用 setInterval 实现计时")
        
    - [2、使用 setTimeout 实现计时](#heading-6 "2、使用 setTimeout 实现计时")
        
- [三、为什么会出现误差](#heading-7 "三、为什么会出现误差")
    
    - [1、setTimeout 的最短延迟时间](#heading-8 "1、setTimeout 的最短延迟时间")
        
    - [2、setInterval 的最小间隔时间以及回调函数阻塞](#heading-9 "2、setInterval 的最小间隔时间以及回调函数阻塞")
        
    - [3、未被激活的tabs的定时最小延迟 >= 1000ms](#heading-10 "3、未被激活的tabs的定时最小延迟 >= 1000ms")
        
    - [4、JS 的事件循环机制](#heading-11 "4、JS 的事件循环机制")
        
- [四、解决方案](#heading-12 "四、解决方案")
    
    - [1、在浏览器中实现一个 0ms 延时的定时器](#heading-13 "1、在浏览器中实现一个 0ms 延时的定时器")
        
    - [2、购物网站的秒杀活动](#heading-14 "2、购物网站的秒杀活动")
        
- [五、使用 setTimeout 替代 setInterval](#heading-15 "五、使用 setTimeout 替代 setInterval")
    
    - [总结](#heading-16 "总结")
        
    - [参考文章](#heading-17 "参考文章")
        

相关推荐

[

前端进阶之setTimeout 倒计时为什么会出现误差？

8.4k阅读

 · 

29点赞



](/post/6844903861925199886 "前端进阶之setTimeout 倒计时为什么会出现误差？")[

如何实现准时的setTimeout

157阅读

 · 

2点赞



](/post/7226903867580727357 "如何实现准时的setTimeout")[

setInterval和requestAnimationFrame的区别，以及引发的思考

953阅读

 · 

0点赞



](/post/6926333423191588871 "setInterval和requestAnimationFrame的区别，以及引发的思考")[

为什么会出现 setTimeout 倒计时误差

953阅读

 · 

16点赞



](/post/7239736895072632887 "为什么会出现 setTimeout 倒计时误差")[

setTimeout和setInterval

347阅读

 · 

0点赞



](/post/6972408745519218718 "setTimeout和setInterval")

精选内容

[

UE GAS进阶-深入GE

高贵纯合子

 · 

623阅读

 · 

0点赞



](/post/7359086027581931556 "UE GAS进阶-深入GE")[

UE5-GAS:读取Excel数据在蓝图创建并更新GE类

高贵纯合子

 · 

615阅读

 · 

0点赞



](/post/7359086027581898788 "UE5-GAS:读取Excel数据在蓝图创建并更新GE类")[

UE5-GAS插件UE5.3改动

高贵纯合子

 · 

620阅读

 · 

0点赞



](/post/7359077619747356726 "UE5-GAS插件UE5.3改动")[

虚幻回合制游戏战斗框架-伤害计算

高贵纯合子

 · 

641阅读

 · 

1点赞



](/post/7359086027581866020 "虚幻回合制游戏战斗框架-伤害计算")[

虚幻回合制游戏战斗框架-伤害计算-伤害动态调整

高贵纯合子

 · 

648阅读

 · 

0点赞



](/post/7359086027581849636 "虚幻回合制游戏战斗框架-伤害计算-伤害动态调整")

找对属于你的技术圈子

回复「进群」加入官方微信群

![](https://juejin.cn/post/7123440584156512293//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/qr-code.4e391ff.png)

为你推荐

- [我知道的setTimeout](/post/7001051400360689677 "我知道的setTimeout")
    
    [
    
    我知道的setTimeout 什么是setTimeout 简单来说它是一个定时器，是浏览器提供的一个api,用于延迟执行代码 它的语法是这样的: setTimeout的第一个参数可以是function
    
    ](/post/7001051400360689677)
    
    - [
        
        前端后腿哥
        
        ](/user/3808364008579624)
        
    - 2年前
        
    - 378
    - 1
    - 评论
    
    [前端](/tag/%E5%89%8D%E7%AB%AF "前端")
    
    ![我知道的setTimeout](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/20bedea8b4784887a95033aab37b637a~tplv-k3u1fbpfcp-jj:135:90:0:0:q75.avis)
    
- [js之定时器使用](/post/7000661843194839070 "js之定时器使用")
    
    [
    
    定时器的常见方法 setInterval()：循环调用。将一段代码，每隔一段时间执行一次。（循环执行） setTimeout()：延时调用。将一段代码，等待一段时间之后再执行。（只执行一次） 备注：在
    
    ](/post/7000661843194839070)
    
    - [
        
        逆风boy
        
        ](/user/2604111362002968)
        
    - 2年前
        
    - 3.2k
    - 1
    - 评论
    
    [JavaScript](/tag/JavaScript "JavaScript")
    
- [聊聊定时器 setTimeout 的时延问题](/post/7292199621299765259 "聊聊定时器 setTimeout 的时延问题")
    
    [
    
    定时器 setTimeout() 其实是有最小时延的，大约是4ms，这篇文章主要聊下关于 setTimeout 有最小时延的相关知识。
    
    ](/post/7292199621299765259)
    
    - [
        
        前端掘金者H
        
        ](/user/312692511089736)
        
    - 6月前
        
    - 1.5k
    - 10
    - 评论
    
    [前端](/tag/%E5%89%8D%E7%AB%AF "前端") [JavaScript](/tag/JavaScript "JavaScript")
    
    ![聊聊定时器 setTimeout 的时延问题](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1a58ab40b2014ba7bf6b2b00e2e4ef35~tplv-k3u1fbpfcp-jj:135:90:0:0:q75.avis#?w=440&h=150&s=1779&e=avif&b=ee746b)
    
- [setTimeout&Promise&Async之间的爱恨情仇](/post/6844903726486913032 "setTimeout&Promise&Async之间的爱恨情仇")
    
    [
    
    按照定义：setTimeout() 方法用于在指定的毫秒数后调用函数或计算表达式。第一种方法在指定毫秒数之后执行，第二种方法没有在指定毫秒数后执行，而是立刻执行。所以我个人将其分成正规军setTimeout和杂牌军setTimeout，方便后面记忆。 对于setTimeout(…
    
    ](/post/6844903726486913032)
    
    - [
        
        Sandop
        
        ](/user/2858385962706318)
        
    - 5年前
        
    - 3.1k
    - 81
    - 17
    
    [面试](/tag/%E9%9D%A2%E8%AF%95 "面试") [前端](/tag/%E5%89%8D%E7%AB%AF "前端") [Promise](/tag/Promise "Promise")
    
- [JavaScript 定时器](/post/7028136169145630728 "JavaScript 定时器")
    
    [
    
    在JavaScript中定时器有两个 setInterval() 与 setTimeout() 分别还有取消定时器的方法。 这都是window的对象，调用时可以省略window。
    
    ](/post/7028136169145630728)
    
    - [
        
        四冥
        
        ](/user/800867961807559)
        
    - 2年前
        
    - 1.5k
    - 点赞
    - 评论
    
    [JavaScript](/tag/JavaScript "JavaScript") [前端](/tag/%E5%89%8D%E7%AB%AF "前端")
    
- [JS疑难杂症之setTimeout的一些探究之一](/post/7231746152902492218 "JS疑难杂症之setTimeout的一些探究之一")
    
    [
    
    前言 我们经常会碰到一些需要定时执行的需求，比如轮播图、延迟消失等，这时候我们就会用到 setTimeout 这个方法了，设定一个回调函数和等候执行的时间，就可以实现定时或延时的需求 但是 setTi
    
    ](/post/7231746152902492218)
    
    - [
        
        人生不止如初见
        
        ](/user/3800379015302845)
        
    - 11月前
        
    - 1.1k
    - 2
    - 评论
    
    [前端](/tag/%E5%89%8D%E7%AB%AF "前端")
    
- [JS 定时器的4种写法及介绍](/post/6948305851522220063 "JS 定时器的4种写法及介绍")
    
    [
    
    JS提供了一些原生方法来实现延时去执行某一段代码，下面来简单介绍一下setTiemout、setInterval、setImmediate、requestAnimationFrame。 上面简单的介绍了四种JS的定时器，而本文将会主要介绍比较常用的两种：setTimeout和s…
    
    ](/post/6948305851522220063)
    
    - [
        
        蛋黄酥要不要来一口阿
        
        ](/user/3869905027094173)
        
    - 3年前
        
    - 4.5k
    - 点赞
    - 评论
    
    [JavaScript](/tag/JavaScript "JavaScript")
    
- [WebAPI：setTimeout是如何实现的？](/post/7265517499104608256 "WebAPI：setTimeout是如何实现的？")
    
    [
    
    setTimeout 和 XMLHttpRequest 是事件循环的两种不同类型的应用，非常典型。 function showName(){ console.log("极客时间") } var tim
    
    ](/post/7265517499104608256)
    
    - [
        
        cherish
        
        ](/user/2365804755034766)
        
    - 8月前
        
    - 612
    - 2
    - 评论
    
    [前端](/tag/%E5%89%8D%E7%AB%AF "前端") [JavaScript](/tag/JavaScript "JavaScript") [浏览器](/tag/%E6%B5%8F%E8%A7%88%E5%99%A8 "浏览器")
    
- [你真的了解 setTimeout 么？聊聊 setTimeout 的最小延时问题（附源码细节）](/post/7211409997111656504 "你真的了解 setTimeout 么？聊聊 setTimeout 的最小延时问题（附源码细节）")
    
    [
    
    在 JavaScript 中，setTimeout 是最常用函数之一，它允许开发者在指定的时间后执行一段代码。 但是需要注意的是，setTimeout 并不是 ECMAScript 标准的一部分
    
    ](/post/7211409997111656504)
    
    - [
        
        王玉略
        
        ](/user/2313028193235453)
        
    - 1年前
        
    - 998
    - 7
    - 2
    
    [前端](/tag/%E5%89%8D%E7%AB%AF "前端") [JavaScript](/tag/JavaScript "JavaScript") [面试](/tag/%E9%9D%A2%E8%AF%95 "面试")
    
- [记一次使用setInterval()，定时器不准的问题](/post/7356878329004474368 "记一次使用setInterval()，定时器不准的问题")
    
    [
    
    背景 在项目中，使用了setInterval()定时器函数实现一个倒计时的功能，并且倒计时的时长是可变的，当时长设置过大，并且在倒计时的过程中，切换浏览器，或者最小化，当再次返回的时候会出现定时器不准
    
    ](/post/7356878329004474368)
    
    - [
        
        coffee
        
        ](/user/1715683584393688)
        
    - 4天前
        
    - 366
    - 2
    - 评论
    
    [前端](/tag/%E5%89%8D%E7%AB%AF "前端") [JavaScript](/tag/JavaScript "JavaScript")
    
    ![记一次使用setInterval()，定时器不准的问题](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3b809805b9ed43ab9b1186a30e47285c~tplv-k3u1fbpfcp-jj:135:90:0:0:q75.avis#?w=3536&h=2357&s=978610&e=jpg&b=b2bdd0)
    
- [你不知道的setTimeout、setInterval](/post/7311707089494835219 "你不知道的setTimeout、setInterval")
    
    [
    
    你不知道的setTimeout、setInterval，对setTimeout、setInterval问题的总结。
    
    ](/post/7311707089494835219)
    
    - [
        
        ThisGravity
        
        ](/user/400648875546205)
        
    - 4月前
        
    - 360
    - 3
    - 评论
    
    [JavaScript](/tag/JavaScript "JavaScript")
    
    ![你不知道的setTimeout、setInterval](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fa3dfc8542ad41ffa8436806340123cf~tplv-k3u1fbpfcp-jj:135:90:0:0:q75.avis#?w=840&h=340&s=11478&e=jpg&b=f8df3e)
    
- [setTimeOut/setInterval出现时间偏差问题原因及解决方案【每日一问20210829】](/post/7001872097337311246 "setTimeOut/setInterval出现时间偏差问题原因及解决方案【每日一问20210829】")
    
    [
    
    每日一问系列，关于定时器问题笔记，涉及到JavaScript的事件循环，及setTimeOut/setInterval出现时间偏差问题原因及解决方案。
    
    ](/post/7001872097337311246)
    
    - [
        
        我叫陈龙
        
        ](/user/1415826707066231)
        
    - 2年前
        
    - 2.7k
    - 17
    - 评论
    
    [前端](/tag/%E5%89%8D%E7%AB%AF "前端") [JavaScript](/tag/JavaScript "JavaScript")
    
- [postMessage定时器解决setTimeout延迟问题](/post/6961673921150238751 "postMessage定时器解决setTimeout延迟问题")
    
    [
    
    使用postMessage()解决setTimeout()定时器延时问题，postMessage不但用在大名鼎鼎的React Scheduler设计中使用，还可以用在对页面性能要求较高的页面上。
    
    ](/post/6961673921150238751)
    
    - [
        
        微月
        
        ](/user/3941064415920894)
        
    - 2年前
        
    - 2.2k
    - 6
    - 2
    
    [前端](/tag/%E5%89%8D%E7%AB%AF "前端")
    
- [setTimeout 和 setInterval](/post/6937960220903604254 "setTimeout 和 setInterval")
    
    [
    
    有时我们并不想立即执行一个函数，而是等待特定一段时间之后再执行。这就是所谓的“计划调用（scheduling a call）”。 setTimeout 允许我们将函数推迟到一段时间间隔之后再执行。 setInterval 允许我们重复运行一个函数，从一段时间间隔之后开始运行，之…
    
    ](/post/6937960220903604254)
    
    - [
        
        王小酱
        
        ](/user/3438928100867438)
        
    - 3年前
        
    - 1.8k
    - 6
    - 2
    
    [JavaScript](/tag/JavaScript "JavaScript")
    
- [为什么会出现 setTimeout 倒计时误差](/post/7239736895072632887 "为什么会出现 setTimeout 倒计时误差")
    
    [
    
    setTimeout 倒计时误差的出现主要与 JavaScript 的事件循环机制和计时器的执行方式有关。 在 JavaScript 中，事件循环是用于管理和调度代码执行的机制。setTimeout
    
    ](/post/7239736895072632887)
    
    - [
        
        施主来了
        
        ](/user/418294220209192)
        
    - 10月前
        
    - 953
    - 16
    - 3
    
    [前端](/tag/%E5%89%8D%E7%AB%AF "前端") [JavaScript](/tag/JavaScript "JavaScript") [面试](/tag/%E9%9D%A2%E8%AF%95 "面试")
    

收藏成功！

已添加到「」， 点击更改

- 微信
    
    ![](https://juejin.cn/post/7123440584156512293)微信扫码分享
    
- 新浪微博
- QQ

 -  ![下载掘金APP](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2ad212d53ccd44569d10317171664bae~tplv-k3u1fbpfcp-jj:113:0:0:0:q75.avis) 下载APP
    
    下载APP
-  ![微信扫一扫](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9f4933cc8fdb411cba89904f14a3ec0a~tplv-k3u1fbpfcp-jj:113:0:0:0:q75.avis) 微信扫一扫
    
    微信公众号
- [新浪微博](https://weibo.com/xitucircle)

 

确定屏蔽该用户

屏蔽后，对方将不能关注你、与你产生任何互动，无法查看你的主页

取消 确定

![](https://juejin.cn/post/7123440584156512293//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/8867e249c23a7c0ea596c139befc04d7.svg)

![](https://juejin.cn/post/7123440584156512293//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/MaskGroup.13dfc4f.png) 选择你感兴趣的技术方向

后端

前端

Android

iOS

人工智能

开发工具

代码人生

阅读

跳过

上一步

至少选择1个分类

温馨提示

当前操作失败，如有疑问，可点击申诉

前往申诉 我知道了

沉浸阅读