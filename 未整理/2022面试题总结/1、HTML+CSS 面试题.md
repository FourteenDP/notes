---
标题: 1、HTML+CSS 面试题
描述: null
封面: null
uid: 20240203221855936
aliases: null
tags:
  - 面试/面试题/前端
cssclasses: null
创建时间: 2023-05-07T17:52:33.000Z
更新时间: 2024-01-22T16:57:28.000Z
---

# 1、HTML+CSS 面试题

## 一、HTML+CSS

### 1、移动端适配你是如何做的？

```
我在上家公司主要使用rem、vh、vw、百分比作单位，使用flex进行布局、利用viewport进行适配，以iphone6机型为基准适配其他机型 ，对具有刘海屏的手机做特殊处理。当然还有其他的适配方案。
```

### 2、如何让一个盒子上下左右都居中

```
1、绝对定位、左50%、上50%、margin-left：负的盒子宽的一半、margin-top：负的盒子高的一半
2、绝对定位、上下左右为0、margin：0 auto
3、使用弹性盒实现、使用display：flex、justify-content：center、align-items center
4、使用定位及变形、给元素绝对定位左50%、上50%、transform：translate（-50% ，-50%）

```

### 3、说说你的盒模型的理解

```
在HTML中，可以把元素看做盒子，每个盒子包括：实际内容（content）、内边距（padding）、边框（border）、外边距（margin），
1、标准盒模型（W3C标准盒模型）
标准盒模型（W3C盒子模型），即盒子模型的width（height）=设置的content的宽高+padding+border+margin

2、怪异盒模型（IE盒模型）
怪异盒模型（IE盒子模型），其盒模型的width（height）= 设置的width（height）+外边距margin

```

### 4、flex 的常用属性

```
父元素添加的属性有：
  display-flex    设置元素为弹性盒
  justify-content    控制子元素主轴排列方式
  align-items     控制子元素侧轴的排列方式
  align-content      控制多轴的排列方式
  flex-wrap      是否换行
  flex-direction    排列方式（行（row）、列（column））
  flex-flow      是flex-direction 和 flex-wrap 属性的复合属性，默认值是row nowrap
子元素添加的属性有：
  order：    定义元素的排列顺序，数值越小排列越靠前，默认为0.
  flex-grow：  定义元素在剩余空间如何放大，默认为0，即有剩余空间也不放大。
  flex-shrink：定义元素的缩小比例，默认为1，即如果空间不足，该元素将缩小。
  align-self：  设置子元素在纵轴的排列方式  可以覆盖父容器的align-items的设置。
  flex-basis：  定义在分配多余空间之前，元素占据主轴的空间。
  flex：    是flex-grow、flex-shrink、flex-basis的符合属性，默认值为0 1 auto。

```

### 5、遇到过浏览器兼容性问题

```
PC端：
  1、对低版本浏览器  需要使用css  hack（比如IE6/7 可以加* _ 的方式）
  2、去掉所有标签的默认样式，对所有的标签进行初始化（引入reset.css）
  3、Css3新增属性和选择器 低版本浏览器不支持，可以加相应的浏览器内核前缀(-webkit-  -moz- -o- -ms-)
  4、Html5新增标签浏览器不兼容，使用script标签内使用js创建标签，然后使用标签。（当然也可以使用js插  件(html5.js)，就不用我们自己创建标签，直接可以使用）
移动端：
  几乎不存在浏览器兼容性问题主要是对屏幕适配做一些兼容处理。比如使用rem、百分比、viewport的方式。

```

```js
常见浏览器兼容问题有三类：html、css、javascript
  对于html兼容
    主要就是低版本浏览器不识别新增的语义化标签，我们可以在script标签内先进行创建标签，然后再使用，也可以使用js插件。
  css兼容问题：
    1、引入reset.css的将所有标签的默认样式去掉，normalize.css的作用将所有的标签的样式统一化
    2、css Hack
      1)低版本的浏览器
      2）CSS3新增的属性和选择器加上相关浏览  内核
    1、不同浏览器默认的内外边距不同（初始化页面中所有标签设置内外边距为0）
    2、IE6下元素浮动之后margin变成双倍（我们可以将元素转为行内块元素进行解决）
  Js方面的兼容问题：
    一般需要自己封装一个方法（函数），实现浏览器兼容性处理
    1、获取浏览器窗口大小
    2、Event对象 参数问题  绑定事件方式
    3、阻止默认行为、阻止冒泡
    这些都需要有兼容性写法
```

### 6、浮动问题你是怎么解决的?

```
1、父元素设置高度
2、给父元使用overflow：hidden
3、在父元素内多写一个元素，使用行内样式写入style=“clear：both”；
4、使用万能清除浮动法
  .clearfixed:after{
    content:””;
    clear:both;
    height:0;
    display:block;
    overflow:hidden
  }

```

### 7、移动端适配 meta 标签 (viewport) 有哪些属性

| width         | 设置 layout viewport 的宽度，为一个正整数，或字符串 "width-device" |
| ------------- | ------------------------------------------------------------ |
| initial-scale | 设置页面的初始缩放值，为一个数字，可以带小数                 |
| minimum-scale | 允许用户的最小缩放值，为一个数字，可以带小数                 |
| maximum-scale | 允许用户的最大缩放值，为一个数字，可以带小数                 |
| user-scalable | 是否允许用户进行缩放，值为 "no" 或 "yes", no 代表不允许，yes 代表允许 |
|               |                                                              |

### 8、position 定位有那些属性及区别是什么

```
一共有五个分别是： relative相对定位、absolute绝对定位、fixed固定定位、static（四大体可）默认值、inherit（音嗨瑞特）。
常用的有三个：relative、absolute、fixed
特点：
  relative相对定位：元素本身位置会被保留，是根据自身位置进行偏移
  absolute绝对定位：元素本身位置不被保留，根据离他最近的具有定位属性的父元素进行偏移，如果父级没有定位，那么会根据根元素进行偏移。
  fixed固定定位：元素本身位置不被保留，根据浏览器窗口进行偏移。
  static  默认值。没有定位，元素出现在正常的流中（忽略 top, bottom, left, right z-index 声明）。
   inherit 规定从父元素继承 position 属性的值。

```

### 9、IOS 端是如何适配的

```
IOS端的适配
  1、分析机型:整体上把现有的iOS屏幕分为两大类，非全面屏和全面屏
    非全面屏：（6、6s、7、8）和Plus系列（6 Plus、6s Plus、7 Plus、8 Plus)
    全面屏： iPhoneX  iPhoneXR  iPhone 11 等
    屏幕尺寸总结，iPhone在逻辑像素共有四种，375x667，375x812，414x736，414x896
  2、安全区域
    非全面屏都是矩形，整个屏幕都是安全区域。
    全面屏受到大圆角、刘海以及底部的影响，UI图更需要考虑安全区域
    顶部44pt、 底部34pt
  3、以iphone6为进行制作去适配其它机型，对iphoneX单独处理

```

### 10、了解 2X 图和 3X 图吗

```
因为手机的dpr有2.0和3.0的，所以设计师会切出2X和3X图，我们制作的时候可以根据dpr的不同引入不同的图片
使用的是media(媒体查询)
```

### 11、H5 怎么引用原生代码，和原生怎么引入 H5 代码

```
通过JSbrige

```

### 12、HTML5 的新特性

```
1. 新增绘画 canvas元素
2. 新增媒介回放 video 和 audio 元素
3. 新增本地离线存储 localStorage 和sessionStorage
4. 新增语义化标签： header、footer、nav、section、article等
5. 新增表单控件，比如 calendar(日历)、date、time、email、url、search等

```

### 13、CSS3 的新特性

```
1、新增了选择器：first-of-type  last-of-type  nth-of-type :checked...
2、新增的属性：圆角  盒子阴影   文字阴影  盒子大小  RGBA透明度  服务器端字体  边框图片  多栏布局  多背景图  媒体查询  wordwrap  变形  动画,flex布局
```

### 14、如何处理 HTML5 新标签的浏览器兼容问题？

```
方法一 :
  1、使用静态资源的html5shiv包
    <!--[if lt IE9]>
      <script src="http://cdn.static.runoob.com/libs/html5shiv/3.7/html5shiv.min.js">    </script>
  <![endif]-->
  2、载入后，初始化新标签的css
  header, section, footer, aside, nav, main, article, figure { display: block; }
方法二:

  IE6/IE7/IE8支持通过document方法产生的标签，利用这一特性让这些浏览器支持HTML5新标签

```

### 15、在地址栏输入 url 之后发生了什么（http 请求是如何解析文档的）

```
1.DNS解析，将域名地址解析为ip地址（当输入url回车之后）
  读取浏览器DNS缓存、读取系统DNS缓存、路由器DNS缓存、网络运营商DNS缓存
  递归搜索   blog.baidu.com
      .com域名下查DNS解析
      .baidu域名下查DNS解析
      .blog域名下查DNS解析
        出错了
2.（在跟服务器交互之前）TCP链接  TCP三次握手
    第一次握手：由浏览器发起，告诉服务器我要发送请求了
    第二次握手：由服务器发起，告诉浏览器我准备接收了，你赶紧发送吧。
    第三次握手：由浏览器发送，告诉服务器，我马上就发了。准备接收吧。

3.发送请求
  请求报文，HTTP协议的通信内容
4.接受响应
  响应报文
5.渲染页面
  -遇见HTML标记，浏览器会调用HTML解析器，解析成Token标记（对象上的属性名和属性值）并构成DOM树
  -遇见style/link标记，浏览器调用css解析器，处理css标记并构建cssDOM树
  -遇到script标记，调用javascript解析器，处理script代码（绑定事件，修改dom树/cssdom树）
  -将dom树和cssdom树合并成一个（render）渲染树
  -根据渲染树来计算布局，计算每个节点的几何信息（布局）
    -将各个节点颜色绘制到屏幕上（渲染）

  注意：

    这个5个步骤不一定按照顺序执行，如果dom树或cssdom树被修改了，可能会执行多次布局和渲染，往往实际页面中，这些步骤都会执行多次的。

6.断开链接 TCP的四次挥手
  第一次挥手：由浏览器发起的，发送给服务器，我东西发送完了（请求报文），你准备关闭吧。
  第二次挥手：由服务器发起的，告诉浏览器，我东西接受完了（请求报文），我准备关闭了，你也准备吧。
  第三次挥手：由服务器发起，告诉浏览器，我东西发送完了（响应报文），你准备关闭吧。
  第四次挥手：由浏览器发起，告诉服务器，我东西接受完了（响应报文），我准备关闭了，你也准备吧


重绘和回流
  什么是回流
当render tree中的一部分(或全部)因为元素的规模尺寸，布局，隐藏等改变而需要重新构建。这就称为回流(reflow)。每个页面至少需要一次回流，就是在页面第一次加载的时候，这时候是一定会发生回流的，因为要构建render tree。在回流的时候，浏览器会使渲染树中受到影响的部分失效，并重新构造这部分渲染树，完成回流后，浏览器会重新绘制受影响的部分到屏幕中，该过程成为重绘。

什么是重绘
  当render tree中的一些元素需要更新属性，而这些属性只是影响元素的外观，风格，而不会影响布局的，比如background-color。则就叫称为重绘。

区别：
他们的区别很大：
回流必将引起重绘，而重绘不一定会引起回流。比如：只有颜色改变的时候就只会发生重绘而不会引起回流
当页面布局和几何属性改变时就需要回流
比如：添加或者删除可见的DOM元素，元素位置改变，元素尺寸改变——边距、填充、边框、宽度和高度，内容改变
```

### 16、说说你对语义化的理解

```
1、去掉或者丢失样式的时候能够让页面呈现出清晰的结构；
2、有利于SEO：和搜索引擎建立良好沟通，有助于爬虫抓取更多的有效信息：爬虫依赖于标签来确定上下文和各个关键字的权重；
3、方便其他设备解析（如屏幕阅读器、盲人阅读器、移动设备）以意义的方式来渲染网页；
4、便于团队开发和维护，语义化更具可读性，是下一步吧网页的重要动向，遵循W3C标准的团队都遵循这个标准，可以减少差异化。
```
