---
nav:
  title: duiba-dev-new
  order: 1
group:
  title: 基础组件
  order: 3
title: Dialog操作弹窗
order: 12
---

# db-dialog

操作性弹窗

## 代码示例

```html
<db-dialog
  @on-confirm="dialogVisible=false"
  @on-cancel="dialogVisible=false"
  cancelTxt="取消咯"
  confirmTxt="知道啦"
  v-model="dialogVisible"
  title="订购服务">
  <div slot="body">
    <div style="width: 300px;margin: 0 0 10px 0">
      <db-input
        name="email"
        type="text"
        v-model="inputValue"
        placeholder="请输入xxx"
        size="default"/>
    </div>
    <div style="width: 300px;margin: 0 0 10px 0">
      <db-input
        type="text"
        placeholder="请输入xxx"/>
    </div>

    <div style="width: 180px;margin: 0 0 10px 0">
      <db-input
        type="text"
        prepend="http://"
        size="small"
        placeholder="请输入xxx"/>
    </div>
  </div>
</db-dialog>
```

## Attributes

参数|说明|类型|可选值|默认值
:---:|:--:|:---:|:---:|:---:
visible|是否显示|Boolean|-|false
title|标题|String|-|-

## Events

事件名|说明|返回值
:---:|:--:|:---:
