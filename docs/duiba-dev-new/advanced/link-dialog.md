---
nav:
  title: duiba-dev-new
  order: 1
group:
  title: 高级组件
  order: 4
title: LinkDialog弹窗
order: 2
---

# LinkDialog弹窗

带有URL链接复制功能的弹窗

组件源码： [http://gitlab2.dui88.com/frontend/duiba-dev-new/blob/master/refactor/dev-new-refactor/src/components/BusinessDialog/LinkDialog.vue](http://gitlab2.dui88.com/frontend/duiba-dev-new/blob/master/refactor/dev-new-refactor/src/components/BusinessDialog/LinkDialog.vue)

### 使用方法

```html
<link-dialog :visible.sync="dialogVisible" :url="copyUrl" />
```

## [效果预览](https://hd.dlp.duiba.com.cn/static/index/new?appId=1#/example?active=2)

预览效果源码 [http://gitlab2.dui88.com/frontend/duiba-dev-new/tree/master/refactor/dev-new-refactor/src/views/example/components/demo-dialog.vue](http://gitlab2.dui88.com/frontend/duiba-dev-new/tree/master/refactor/dev-new-refactor/src/views/example/components/demo-dialog.vue)

## 组件属性

参数|说明|类型|可选值|默认值
:---:|:--:|:---:|:---:|:---:
visible|	控制是否显示|	boolean|	true/false|	-
value/v-model|	等同vsible|	boolean|	true/false|	-

## slot

插槽名称|说明
:---:|:--:
