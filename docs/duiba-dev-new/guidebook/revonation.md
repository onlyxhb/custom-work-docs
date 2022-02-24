---
nav:
  title: duiba-dev-new
  order: 1
group:
  title: 开发指南
  order: 2
title: 组件化开发指南
order: 6
---

# 组件化开发指南

### 业务流程
![业务流程图](http://cf.dui88.com/download/attachments/11545547/image2018-12-13%2010%3A59%3A5.png?version=1&modificationDate=1544669946000&api=v2)

### 开发步骤

#### 1.开发H5组件

项目: duiba-h5-floor
```目录结构
|--dist
|--mock
|--src
|    |--common
|    |--skins
|           |--normal  // 组件代码
|    |--templates
```
***
命名规则 normal-home_activity_180918
props约定命名: cdata
接口支持 axios 和 fetch
设计稿为750px 直接使用对应像素开发自动进行单位转换
***

创建新组件 npm run copy normal/xxxx  normal  

以 normal-home_activity_180918 为例

开发环境 
npm run dev normal/normal-home_activity_180918

dev/test环境 构建
npm run build normal/normal-home_activity_180918

生产环境 构建
npm run build normal/normal-home_activity_180918 prod


#### 2.兑吧管理后台添加组件
![模板管理流程图](http://cf.dui88.com/download/thumbnails/11545547/image2018-12-13%2011%3A26%3A14.png?version=1&modificationDate=1544671574000&api=v2)
![组件操作流程图](http://cf.dui88.com/download/attachments/11545547/image2018-12-13%2011%3A35%3A17.png?version=1&modificationDate=1544672117000&api=v2)

configDataJson 格式
```json
//name 为 props key值.  default为默认值   其他key值根据组件需要自定义
[
  {"name":"padding","title":"内边距","default":"yes"},
  {
    "name":"image",
    "title":"图片",
    "dataType":"image",
    "size":{"width":750,"height":[200,950]},
    "desc":"建议图片宽度为750px，高度为200-950px，支持图片格式jpg/png/gif"
  }
]
```

#### 3.开发者后台开发编辑组件
![组件创建流程图](http://cf.dui88.com/download/attachments/11545547/image2018-12-13%2011%3A59%3A56.png?version=1&modificationDate=1544673596000&api=v2)

```目录结构
|--src
|  |--views
|    |--creditShop
|        |--renovation //装修页面
|           |--decoration
|              |--config-components
|              |--config-dialog       // 组件对应的配置弹窗
|              |--icons.js            // 管理图标
|              |--mixin.js            // 通用方法
|              |--validate-rules.js   // 配置项
```


validate-rules.js 配置项
  
参数|说明|类型|可选值|默认值
:---:|:--:|:---:|:---:|:---:
propsTypes|Props数据类型|Object/Array|——|必填
rules|props配置规则|object|——|选填
emptyProps|组件初始化数据||——|选填
limit|组件限制数量
deleteKey|上传组件需要删除的key值|Array|
