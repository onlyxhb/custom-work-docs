---
nav:
  title: duiba-dev-new
  order: 1
group:
  title: 基础组件
  order: 3
title: ListPage - 二次封装el-table
order: 13
---

# list-page（简单表单页面组件）
考虑到部分表单页面的构成较为简单一致，基本分为搜索栏、表单栏、分页栏三部分，代码重复率很高，为节约开发维护成本故抽取出此组件。较为简单的表单展示页面推荐使用此组件。

## 基础使用
搜索栏由传入的 formConfig 渲染而成。
```formConfig
formConfig: [
  { label: '公司名称', prop: 'company', type: 'input' },
  { label: '负责人姓名', prop: 'name', type: 'input' },
  ...
]
```
表单配置
```columnss
columns: [
  { label: '序号', prop: 'id' },
  { label: '广告位ID', prop: 'slotId' },
  { label: '产品线', prop: 'channelType', formatter: (row) => channelFormatter(row.channelType) },
  ...
]
```
```
<list-page
  ref="list"
  :form-init-data="form"
  request-type="getAdvicementList"
  :request-config="{form: true}"
  :form-config="formConfig"
  :columns="columns"
  searchBtnType="ghost"
  >
  <template slot="right-btns">
    <el-button type="primary" @click="addDialogVisible = true">添加</el-button>
  </template>
  <template slot="columns">
    <el-table-column label="屏蔽策略" align="center" width="150">
      <template slot-scope="scope" >
        <el-button @click="showSetDialog(scope.row)" type="text" size="small">设置</el-button>
      </template>
    </el-table-column>
  </template>
</list-page>
```
![基础配置](//yun.dui88.com/20180723174657.png)
## 非靠右新增按钮
```
<list-page
  :form-init-data="form"
  request-type="agentChargeList"
  :form-config="formConfig"
  :tabs="tabs"
  tab-key="state"
  :columns="columns"
  searchBtnType="ghost"
  >
  <template slot="btns">
    <el-button type="primary" @click="showDialog">新建充值</el-button>
  </template>
  <template slot="columns">
    ...
  </template>
</list-page>
```
![含 tab 栏](//yun.dui88.com/20180723175211.png)
## 无搜索
```
<list-page
  request-type="getSigninContractList"
  :columns="columns"
  ref="list"
  >
  <template slot="right-btns">
    <el-button type="primary" @click="goEditPage()">契约签到</el-button>
  </template>
  <template slot="columns">
    ...
  </template>
</list-page>
```

![无搜索](//yun.dui88.com/20180723184458.png)


## Attributes
参数|说明|类型|可选值|默认值
:---:|:--:|:---:|:---:|:---:
requestType|列表请求的类型，相关url对应的字段，无需指定请求方式，由请求函数通过url定义的方式自行判断|string|——|必填
requestConfig|请求配置，会并入请求函数的第三个参数，使用请参考请求封装的函数|object|——|——
title|弹窗标题|string|——|'添加'
formInitData|表单初始值|object|——|——
formData|请求额外值，会在请求时加上|object|——|——
formConfig|表单配置，具体配置见下表|array|——|必填
tabs|tab栏配置|array，[{ txet, key值字段（由tabKey指定） }]|——|——
tabKey|tab栏的key值|string|——|——
columns|表格配置，具体配置见下表|array|——|——
searchBtnText|搜索按钮文本|string|——|'搜索'
searchBtnType|搜索按钮类型|string|primary / success / warning / danger / info / text|'primary'
search|搜索函数，如非必要不推荐使用|Function，参数form表单值|——|——
formateRequestData|格式化搜索数据|function|——|（form）=> form
pageProps|分页相关字段|{pageNo, pageSize, total }|——|——
showPage|是否显示分页信息|boolean|true/false|true
showCheckbox|是否显示多选|boolean|true/false|false
handleBtns|操作栏配置|Array，[{text, handleClick}]|-|-


## formConfig
参数|说明|类型|可选值|默认值
:---:|:--:|:---:|:---:|:---:
label|表单标签|string|——|——
prop|表单域 model 字段，在使用 validate、resetFields 方法的情况下，该属性是必填的|string|——|——
rules|表单验证规则，具体规则见element-ui中form组件说明|object|array|——|——
show|表单项显示控制函数，无时默认显示，参数为表单值集合|funtion|——|——
type|组件类型，具体见[dynamic-component](/components/dynamic-component)|string|——|——

其余属性见[dynamic-component](/components/dynamic-component)说明

## columns
表格配置

参数|说明|类型|可选值|默认值
:---:|:--:|:---:|:---:|:---:
label|显示的标题|string|——|——
prop|对应列内容的字段名，也可以使用 property 属性|string|——|——
render|渲染函数|function(h, params({row,column,$index}))|——|——
fomatter|格式化函数|function|——|——
type|组件类型，具体见[dynamic-component](/components/dynamic-component)|string|——|——


其余属性会全部渲染到table-column组件中
