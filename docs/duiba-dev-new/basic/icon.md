---
nav:
  title: duiba-dev-new
  order: 1
group:
  title: 基础组件
  order: 3
title: Icon图标
order: 1
---

# Icon 图标

图标组件, 提供了一套常用的图标集合, 底层使用的是iconfont

组件源码： [http://gitlab2.dui88.com/frontend/duiba-dev-new/blob/master/refactor/dev-new-refactor/src/components/basic/components/icon/icon.vue](http://gitlab2.dui88.com/frontend/duiba-dev-new/blob/master/refactor/dev-new-refactor/src/components/basic/components/icon/icon.vue)

## 使用方法
直接通过属性icon-name 来使用即可。例如：

```html
// toobar 类型图标
<icon icon-name="toolbar-kefudianhua"></icon>
// handle 类型图标
<icon icon-name="handle-tixing"></icon>
// nav 类型图标
<icon icon-name="nav-fanhui"></icon>
```

## 图标集合

1、[toolbar示例地址](http://yun.dui88.com/saas/components/toolbar/demo_fontclass.html)

![toobar](http://yun.dui88.com/saas/documents/toolbar/demo_fontclass.png)

2、[handle示例地址](http://yun.dui88.com/saas/components/handle/demo_fontclass.html)

![handle](http://yun.dui88.com/saas/documents/handle/demo_fontclass.png)

3、[nav示例地址](http://yun.dui88.com/saas/components/nav/demo_fontclass.html)

![nav](http://yun.dui88.com/saas/documents/nav/demo_fontclass.png)

## [效果预览](https://hd.dlp.duiba.com.cn/static/index/new?appId=1#/example?active=0)

预览效果源码 [http://gitlab2.dui88.com/frontend/duiba-dev-new/tree/master/refactor/dev-new-refactor/src/views/example/components/demo-icon.vue](http://gitlab2.dui88.com/frontend/duiba-dev-new/tree/master/refactor/dev-new-refactor/src/views/example/components/demo-icon.vue)

## 组件属性

参数|说明|类型|可选值|默认值
:---:|:--:|:---:|:---:|:---:
icon-name|图标class|string|-|-

## 事件

事件名称|说明|回调参数
:---:|:--:|:---:
click|当icon点击时触发|(event: Event)
