---
nav:
  title: duiba-dev-new
  order: 1
group:
  title: 基础组件
  order: 3
title: Button按钮
order: 2
---

# db-button 按钮

按钮组件，常用的操作按钮

组件源码： [https://gitlab2.dui88.com/frontend/duiba-dev-new/blob/master/refactor/dev-new-refactor/src/components/basic/components/button/button.vue](https://gitlab2.dui88.com/frontend/duiba-dev-new/blob/master/refactor/dev-new-refactor/src/components/basic/components/button/button.vue)

### 基础用法

```html
// 默认按钮
<db-button>默认按钮</db-button>
<db-button type="plain">朴素按钮</db-button>
<db-button type="warning">按钮</db-button>
<db-button disabled>按钮disabled</db-button>

// 圆按钮
<db-button shape="round">圆按钮</db-button>
<db-button shape="round" type="plain">圆朴素按钮</db-button>
<db-button shape="round" type="warning">圆按钮</db-button>
<db-button shape="round" disabled>圆按钮disabled</db-button>

// small按钮
<db-button size="small">small按钮</db-button>
<db-button size="small" type="plain">small朴素按钮</db-button>
<db-button size="small" type="warning">small按钮</db-button>
<db-button size="small" disabled>small按钮disabled</db-button>

// mini按钮
<db-button size="mini">mini按钮</db-button>
<db-button size="mini" type="plain">mini朴素按钮</db-button>
<db-button size="mini" type="warning">mini按钮</db-button>
<db-button size="mini" disabled>mini按钮disabled</db-button>

// icon按钮
<db-button size="large"  icon="handle-sousuo">搜索</db-button>

// 路由跳转
<db-button to="/example" >路由跳转</db-button>

// loading
<db-button loading loadingText="加载中" >按钮</db-button>
```

## [效果预览](https://hd.dlp.duiba.com.cn/static/index/new?appId=1#/example?active=1)

预览效果源码 [http://gitlab2.dui88.com/frontend/duiba-dev-new/tree/master/refactor/dev-new-refactor/src/views/example/components/demo-button.vue](http://gitlab2.dui88.com/frontend/duiba-dev-new/tree/master/refactor/dev-new-refactor/src/views/example/components/demo-button.vue)

## 组件属性

参数|说明|类型|可选值|默认值
:---:|:--:|:---:|:---:|:---:
type|类型|string|primary/plain/warning|primary
size|尺寸|string|mini/small/normall/large|normall
disabled|是否禁用|boolean|-|false
to|路由跳转|string/object|-|-
shape|形状|string|default/round|round
icon|icon组件的icon-name属性|string|-|-
loading|loading状态|boolean|true/false|false
loadingText|loading状态文案|string|-|loading...

## 事件

事件名称|说明|回调参数
:---:|:--:|:---:
click|当icon点击时触发|(event: Event)
