---
nav:
  title: duiba-dev-new
  order: 1
group:
  title: 基础组件
  order: 3
title: Input输入框
order: 3
---


# db-input

输入框

### 基础用法

<div style="margin-top:10px;">
<db-input
  type="text"
  v-model="msg"
  placeholder="请输入xxx"/>
</div>

<div style="margin-top:10px;">
<db-input
  type="text"
  v-model="msg"
  prepend="http://"
  placeholder="请输入网址"/>
</div>

<div style="margin-top:10px;">
  <db-input
    type="text"
    v-model="msg"
    append=".com"
    placeholder="请输入网址"/>
</div>

<div style="margin-top:10px;">
  <db-input
    type="text"
    v-model="msg"
    placeholder="请输入网址"
    disabled>
</div>

<div style="margin-top:10px;">
  <db-input
    type="text"
    v-model="msg"
    placeholder="请输入网址"
    invalid>
</div>

<div style="margin-top:10px;">
  <db-input
    type="text"
    v-model="msg"
    placeholder="请输入网址"
    size="small">
</div>

<script>
  new Vue({
    el: '#main',
    data: { msg: 'Vue' }
  })
</script>

```html
// 默认input
<db-input type="text" v-model="msg" placeholder="请输入xxx"/>

// 前缀input
<db-input type="text" v-model="msg" prepend="http://"  placeholder="请输入网址"/>

<db-input  type="text"  v-model="msg"  append=".com"  placeholder="请输入网址"/>

<db-input type="text" v-model="msg" placeholder="请输入网址"  disabled />

<db-input type="text" v-model="msg" placeholder="请输入网址" invalid />

<db-input type="text" v-model="msg" placeholder="请输入网址" size="small"/>

```

## Attributes

参数|说明|类型|可选值|默认值
:---:|:--:|:---:|:---:|:---:
type|类型|string|text，textarea 和其他 [原生 input 的 type 值](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types)|text
placeholder|输入框占位文本|string / number	|-|-
value|绑定值|string / number	|-|-
size|尺寸|string|small/default|default
readonly|只读|boolean|false/true|false
disabled|禁用|boolean|false/true|false
maxlength|最大长度|number|-|-
name|原生属性|string|-|-
autofocus|原生属性，自动获取焦点|boolean|false/true|false
invalid|校验通过|boolean|false/true|false
autocomplete|原生属性，自动补全|string|on/off|off
clearable|是否可清空|boolean|false/true|false
prepend|前置内容|string/number|-|-
append|后置内容|string/number|-|-
round|圆角|boolean|false/true|false


## Events

事件名称|说明|回调参数
:---:|:--:|:---:
on-enter|用户按下回车时触发|(event: Event)
on-keydown|键盘被按下时触发|(event: Event)
on-keypress|用户按下键盘上的字符键时触发|(event: Event)
on-keyup|用户释放键盘上的字符键时触发|(event: Event)
on-click|当icon点击时触发|(event: Event)
on-focus|在 Input 获得焦点时触发|(event: Event)
on-blur|在 Input 失去焦点时触发|(event: Event)
input|在 Input 值改变时触发|(value: string | number)
on-change|在 Input 值改变时触发|(event: Event)
