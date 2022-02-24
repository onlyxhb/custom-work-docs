---
nav:
  title: duiba-dev-new
  order: 1
group:
  title: 高级组件
  order: 4
title: DynamicComponent
order: 3
---

## DynamicComponent

动态组件，可以按照传入的组件类型展示不同的组件, 一般用于循环遍历的场景。

组件源码： [http://gitlab2.dui88.com/frontend/duiba-dev-new/blob/master/refactor/dev-new-refactor/src/components/AbstractComponents/DynamicComponent.vue](http://gitlab2.dui88.com/frontend/duiba-dev-new/blob/master/refactor/dev-new-refactor/src/components/AbstractComponents/DynamicComponent.vue)

### 支持的组件类型

1.部分传入的类型需要转换

```js
  {
    button: 'el-button',
    textButton: 'a',
    input: 'el-input',
    textarea: 'el-input',
    select: 'el-select',
    daterange: 'el-date-picker',
    date: 'el-date-picker',
    'switch': 'el-switch',
    radioGroup: 'el-radio-group',
    checkboxGroup: 'el-checkbox-group',
    checkGroup: 'el-checkbox-group',
    imageUpload: 'image-upload',
    dragMultiImageUpload: 'drag-multi-image-upload',
    tag: 'el-tag'
  }
```

2.其他通用的全局组件类型

### 使用方法

由 formConfig 渲染而成。

```js
formConfig: [
  {label: '商品类型：', prop: 'itemType', type: 'select', options: [{value: '', label: '全部'}]},
  { label: '策略名称：', prop: 'title', type: 'input', placeholder: '请输入策略名称', rules: lengthRuleFn(0, 20) },
  ...
]
```

```html
<el-form
  inline
  :model="form"
  ref="form"
  label-width="82px">
  <el-form-item
    v-for="item in formConfig"
    :key="item.prop"
    :prop="item.prop"
    :label="item.label"
    :rules="item.rules">
    <dynamic-component
      :cmp="item"
      v-model="form[item.prop]"
      @change="val => item.change && item.change(val, form)"
    ></dynamic-component>
  </el-form-item>
</el-form>
```

## 组件属性

参数|说明|类型|可选值|默认值
:---:|:--:|:---:|:---:|:---:
value/v-model|	绑定的值|	number｜string｜array｜boolean	|-	|-
cmp|	具体组件的内容|	object|	-|	-
disabled|	是否禁用|	boolean|	true/false|	false

## formConfig

参数|说明|类型|可选值|默认值
:---:|:--:|:---:|:---:|:---:
label|	表单标签|	string|	——|	——
prop|	表单域 model 字段，在使用 validate、resetFields 方法的情况下，该属性是必填的|	string|	——|	——
rules|	表单验证规则，具体规则见element-ui中form组件说明|	object|	array|	——
show|	表单项显示控制函数，无时默认显示，参数为表单值集合|	funtion|	——|	——
type|	组件类型，具体见[dynamic-component](/duiba-dev-new/advanced/dynamic-component)|	string|	——|	——


## 事件

事件名称|说明|回调参数
:---:|:--:|:---:
click|	点击时触发|	-
input|	原生的input事件|	val:当前值
change|	原生的change事件|	val: 当前值
