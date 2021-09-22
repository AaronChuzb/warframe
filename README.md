<!--
 * @Date: 2021-09-22 14:40:26
 * @LastEditors: AaronChu
 * @LastEditTime: 2021-09-22 15:40:27
-->
# 星际战甲助手小程序

[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

关于

整个项目包括后端开发完全是为爱发电，忙的最近电波都没有打完，一个人开发整个项目就当是锻炼写代码的速度和能力吧，我也知道上班摸鱼是挺不对的，一想到几十个核桃的数据还等着录就头疼。未来还将添加武器和战甲模块，感觉那些才是大头，毕竟涉及的数据多了不是一星半点，强烈要求有兴趣的小伙伴加入。

本项目采用的技术方案：

1. 客户端采用[uniapp](https://uniapp.dcloud.io/README)开发，打包多端小程序。
2. 客户端UI部分采用[uViewUI](https://www.uviewui.com/)，部分采用原生组件。
3. 无限加载列表采用[z-paging](https://z-paging.com/)，一个非常nice的无限加载列表解决方案，之前采用的是一个小姐姐的写的[mescroll](https://www.mescroll.com/)，好用是好用就是其采用scroll-view的方法时存在性能问题，然而body模式那满屏的滚动条实在接受不来，相对来说z-paging这方面优化做的非常不错，主要是调用真的十分简单。墙裂推荐👍🏻。
4. 中台项目技术方案请查看[warframe_admin_server](https://github.com/AaronChuzb/warframe_admin_server)这个仓库。


## 内容列表

- [背景](#背景)
- [安装](#安装)
  - [配置请求地址](#配置请求地址)
- [项目结构](#项目结构)
- [适配](#适配)
- [相关仓库](#相关仓库)
- [维护者](#维护者)
- [如何贡献](#如何贡献)
- [使用许可](#使用许可)

## 背景

`初衷：` 我也是🐹这不用多说了，起初家里不太好的时候访问wiki有点费劲，加上wiki只有部分内容是国服的，而且遗物上有许多的差异，许多时候使用起来并不方便，所以这是我开这个项目的初衷。目前为爱发电，可能后期访问量上去了会接那么一点点广告，收入当然是供给服务器和oss啦。


写这个项目也是存在一点的困难的，难在本仓鼠是一个纯前端，对接口编写基本不怎么精通，幸好全栈开发有一套解决方案我特别中意，对之前没接触过后端开发的朋友是特别友好的。

当然说了这么多还是在这里列出一些尚待解决的问题：


1. 多端共用一套登录逻辑，接入同一个接口。
2. 个人用户项目涉及的一些微信小程序QQ小程序上架问题。
3. **来人帮忙添加数据啊，后台的权限做好了**。

废话讲的有点多，还是讲讲这代码怎么在本地跑起来吧。

## 安装

这个项目使用 [node](http://nodejs.org) 和 [npm](https://npmjs.com)。请确保你本地安装了它们。
拉取代码下来后在项目的根目录执行，安装uViewui的依赖。

```sh
$ npm install
```

### 配置请求地址

修改```utils```文件夹下```request.js```的```http```变量请配合使用后端的项目，运行的地址端口是127.0.0.1:3000，其中客户端的前置地址为```127.0.0.1:3000/app/api```。注意这个地址不支持手机预览，预览访问不到该接口的。


## 项目结构

这只列出我新增的部分，其余的内容请自行查看uniapp使用文档（虽然写的十分烂）

api：模块化的接口请求  
components：全局组件  
utils：封装好的工具类  




## 适配

采用rpx像素做单位默认就是适配好的，H5下页面高度会有问题的，这个不解释，具体请以实机运行为准。

## 相关仓库

- [warframe_admin_server](https://github.com/AaronChuzb/warframe_admin_server) — 本项目的中台和后端

## 维护者

[@AaronChuzb](https://github.com/AaronChuzb)。

## 如何贡献

非常欢迎你的加入！[提一个 Issue](https://github.com/AaronChuzb/warframe/issues/new) 或者联系作者邮箱aaronchu_cn@163.com。


标准 Readme 遵循 [Contributor Covenant](http://contributor-covenant.org/version/1/3/0/) 行为规范。


## 使用许可

[MIT](LICENSE) © Aaron Chu
