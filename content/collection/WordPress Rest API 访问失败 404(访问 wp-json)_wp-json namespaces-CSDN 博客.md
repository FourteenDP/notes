---
title: WordPress Rest API 访问失败 404(访问 wp-json)_wp-json namespaces-CSDN 博客
uid: 3377699721319602
aliases: []
categories: []
tags: []
author: blog.csdn.net
originalLink: 'https://blog.csdn.net/my466879168/article/details/107169245'
createTime: '2024-04-17 09:55:17'
updateTime: '2024-04-19 14:46:07'
---

### 访问 / wp-json 报 404 错误

安装的 [WordPress](https://so.csdn.net/so/search?q=WordPress&spm=1001.2101.3001.7020) 版本是 5.0.2，据说是 5 版本以上已经是默认的的开启了 rest API 服务，但是怎么访问都是报错 404，需要使用 nginx 重定向才能使用

#### 1. 修改固定链接

在 WordPress 设置中的固定连接设置中将固定链接设置改为除朴素外任意一种，最好还是数字型  

![](https://img-blog.csdnimg.cn/20200706220856430.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L215NDY2ODc5MTY4,size_16,color_FFFFFF,t_70#pic_center)

#### 2. 修改 [nginx](https://so.csdn.net/so/search?q=nginx&spm=1001.2101.3001.7020).conf 文件

使用 ps -ef | [grep](https://so.csdn.net/so/search?q=grep&spm=1001.2101.3001.7020) nginx 查看 nginx 所在的位置和 conf 文件所在的位置，然后编辑 conf 文件  

![](https://img-blog.csdnimg.cn/20200706220923872.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L215NDY2ODc5MTY4,size_16,color_FFFFFF,t_70#pic_center)

  
在 server 中插入以下几句话来进行[重定向](https://so.csdn.net/so/search?q=%E9%87%8D%E5%AE%9A%E5%90%91&spm=1001.2101.3001.7020)

```plain
if (-f $request_filename/index.html){
rewrite (.*) $1/index.html break;
}
if (-f $request_filename/index.php){
rewrite (.*) $1/index.php;
}
if (!-f $request_filename){
rewrite (.*) /index.php;
}
rewrite /wp-admin$ $scheme://$host$uri/ permanent;
#这行是为了防止打开后台、插件页等打不开的。

```

![](https://img-blog.csdnimg.cn/20200706221049457.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L215NDY2ODc5MTY4,size_16,color_FFFFFF,t_70#pic_center)

#### 3. 重启 nginx 服务器

修改完之后首先查看 nginx.conf 文件的可用性  
`/usr/sbin/nginx -t`  

![](https://img-blog.csdnimg.cn/20200706220954416.png#pic_center)

  
看到上面两句话那就证明是正确的  
然后重启 nginx 服务  
`/usr/sbin/nginx -s reload`  
现在再次用 ip+/wp-json 就不会出现 404 错误了，数据也出来了
