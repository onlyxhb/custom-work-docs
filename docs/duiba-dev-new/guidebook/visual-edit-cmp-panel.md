---
nav:
  title: duiba-dev-new
  order: 1
group:
  title: 开发指南
  order: 2
title: 可视化组件配置面板说明文档
order: 5
---

## 配置说明
configDataJson 字段可在管理后台自由配置，原本设计为相应字段的配置，根据此字段开发者后台动态生成配置面板，但由于第一版开发时间太短、特殊化需求等原因，配置就在开发者后台写死了。写死配置对于后期动态开发与维护非常不方便，故对配置面板但实现进行第二次开发。

## configDataJson
该字段为array 类型（除种红包组件外，该组件另外做配置），一项则为一个配置项的相关配置。除每一项配置外，还需要对组件本身进行配置，故增加 type=‘cmp-rules’ 对组件进行配置

!> 若存在 cmp-rules 的配置项则默认面板根据 configDataJson 动态生成，否认先判断是否有对应的模版组件，没有则面板根据配置生成。

配置组件相应字段说明（type为 __cmp-rules__ 的具体配置见<a href="/#/visual-edit-cmp-panel?id=cmp-rules-的配置项则">cmp-rules 的配置项则</a>）

字段名称|类型|说明
:---:|:---:|:---
name|string|传入组件的字段名称
title|string|组件配置面板配置项标题
dataType|string|不推荐使用，老的组件中有使用这一字段做为组件类型，与type基本等同，两者共存时，优先识别 dataType，但不支持 __cmp-rules__ 判断
type|string|组件配置面板自动配置的组件类型，如输入框、图片选择等，具体对应类型见<a href="/#/visual-edit-cmp-panel?id=目前支持的配置组件类型">目前支持的配置组件类型</a>
default|根据组件自行确定|组件配置默认值，为减少组件配置，此字段大部分时候可不写，当配置中存在options字段时，组件类型为 __checkbox-group__ 时默认全部选中, __select-group__ 默认为 __[]__，其余都取options的第一项，具体生成规则见下
options|array|组件配置需要的选项，与type 为 select、checkbox-group、radio-group等配合使用，基本结构：[{label:'',value:''}],具体配置规格见<a href="/#/visual-edit-cmp-panel?id=ooptions-的生成规则">options 的生成规则</a>。
optionType|string|目前有一些经常复用的选项组合已建为常量，可根据此字段生成相应的options，以减少管理端的配置，具体对应表格见 <a href="/#/visual-edit-cmp-panel?id=optiontype说明">optionType 说明</a>
optionRange|object，{min:number,max:number,step:number,unit:string}|产生数字对应的options，例如：optionRange：{min:1,max:10,step:1,unit:‘个’}(step 可以省略，默认为1，unit默认为‘’),即生成 [{value:1,label:‘1个’},{value:2,label:‘2个’}...{value:10,label:‘10个’}]
filterValues|array|根据optionType 提取到的数据中需要保留的value
addItem|array、object、string|根据optionType 提取到的数据需要添加的对象，为string中获取设定好的对象，目前有 list、swiper、simple 可以选择
inline|boolean|该组件配置是否与配置标题为同一行，目前根据组件类型已有默认配置，根据具体情况可再次配置
props|object|组件选项，该字段的值会做为组件选项全部传入，使用 v-bind，具体配置见 <a href="/#/visual-edit-cmp-panel?id=目前支持的配置组件类型">目前支持的配置组件类型</a>
ctrl|object,{key:string(控制字段名),value:string（相应字段的值）}|配置项间联动控制,受dataJson中ctrl.key字段控制，该字段为ctrl.value 的值时则该配置项显示，key值支持层级写法，如‘list.0’
required|boolean|该配置项是否必填，若存在rules字段默认为必填
rules|object，{requireKeys:array,invalidMessage:string}|校验配置，requireKeys 使用在配置项为array类型的情况，以校验内部所需的字段，invalidMessage 校验不通过的提示语，非必填

示例：
```
[
  {
    "name": "type",
    "title": "选择样式",
    "type": "radio-group",
    "optionType": "listStyle",
    "default": "one"
  }
  ...
]
```

## 目前支持的配置组件类型
组件根绝配置中的type（或 dataType，兼容老数据，dataType 和type在自动生成的配置面版中功能调整为一致）字段自动配置相应的组件，目前支持的组件有：

通用配置组件

type|说明|可配置props|自动生成的默认值|
:---:|:---:|:---|:---:
checkbox|单项选择，对应组件：el-checkbox|参照el-checkbox|-
checkbox-group|多选择组，对应组件： el-checkbox-group，选项由options字段渲染生成|参照el-checkbox-group|自动产生的默认值为选中所有
radio-group|单选组, 对应组件：二次封装 el-radio-group,支持图片展示，选项由options字段渲染生成|-|自动产生的默认值为第一项
select|选择组件，对应组件：el-select，选项由options字段渲染生成|参照el-select|自动产生的默认值为第一项
input|输入框，对应 el-input|参照el-input|-
add-img|添加图片，自定义组件|1、height:Number<br>2、width:Number<br>3、noText:Boolean(是否隐藏文本)}|-
image-item|添加图片，自定义组件|1、height:Number<br>2、width:Number<br>3、desc:String|-
color-picker|颜色设置组件，二次封装：el-color-picker|1、defColor:String，重置默认颜色|根据props中的defColor 字段生成
config-tip|配置提示组件，自定义组件|tips:Array或String，提示文本|-
image-list|图片列表配置组件，自定义组件|1、desc: String,描述 <br>2、limit：Number，数量限制，默认20<br> 3、min：Number，最小数量，默认 1<br>4、imgWidth：stirng、number，图片宽度，默认80 <br>5、imgHeight：string、number，图片高度，默认 50<br>6: config：object，{ imageKey:string（默认为image）,linkKey:string,textKey:string},图片、链接、文本字段名，linkKey、textKey 若未配置则不展示该配置项|根据props中的min字段生成对应数量的对象数组
link|链接配置组件|-|-
rich-editor|富文本编辑器|1、mode:string|-
slider|滑块，二次封装 el-silder|1、min：number，默认值1；<br>2、max：number，默认值100；<br>3、step：number，默认值为1|-

<!-- goods-list|商品、活动配置组件|配置较为复制，推荐二次封装为自定义配置组件后使用|-
group-list|分组配置组件|配置较为复制，推荐二次封装为自定义配置组件后使用|- -->

自定义配置组件（含业务逻辑）

type|说明|可配置props|自动生成的默认值|
:---:|:---:|:---|:---
custom-seckill-act|秒杀活动选中组件|1、limit：number，数量上线，默认50<br>2、min：number，数量最小值，默认为1|根据props中的min字段生成对应数量的对象数组


## cmp-rules 的配置项则
字段名|类型|说明|默认值
:---:|:---:|:---|:---:
type|string|配置规则的标识，只能为 **cmp-rules** |-
emptyCmpKeys|string、Array |是否显示空白组件相关校验字段|-
hoverImage|string|左侧组件选择hover显示图标地址
image|string|左侧组件选择普通状态显示图标地址
limit|number|一个模版中同一组件最多可添加的数量，为 -1 时则添加数量无限制，为免运营误改，与useLimit 等同时才起作用|-
useLimit|number|为免运营误改，与limit 等同时才起作用
dataCopy|number、boolean|该组件配置的默认值是否提前已有同类组件的配置，为number则为第几项，0 为第一项，-1为最后一项，为true默认为最后一项|false
illustrate|string|组件说明

### default（默认值）生成规则

## options 的生成规则
优先级：

* 1、直接在configDataJson 中相应配置中完整写出 options
* 2、使用optionType 字段获取已经写好options，例如：optionType 为‘listStyle’，则是列表样式类型，并且可以根据filterValues过滤默认的选项,根据addItem 添加选项形成最终的options
* 3、使用optionRange 产生数字对应的options，例如：optionRange：{min:1,max:10,step:1,unit:‘个’}(step 可以省略，默认为1，unit默认为‘’),即生成 [{value:1,label:‘1个’},{value:2,label:‘2个’}...{value:10,label:‘10个’}]

## optionType说明
字段名|使用场合|对应完整的options
:---:|:---:|:---
listStyle|列表样式|{ value: 'one', label: '一行一个', image: '//yun.dui88.com/saas/images/sp_1.png'},<br>{ value: 'two', label: '一行两个', image: '//yun.dui88.com/saas/images/sp_2.png'},<br>{ value: 'three', label: '一大两小', image: '///yun.dui88.com/saas/images/sp_3.png'}
yn|有无|{ value: 'yes', label: '有' },<br>{ value: 'no', label: '无' }
ny|无有|{ value: 'no', label: '无' },<br>{ value: 'yes', label: '有' }
bool-ny|无有, Boolean值|{ value: false, label: '无' },<br>{ value: true, label: '有' }
lineStyle|线条样式|{ value: 'solid', label: '实线' },<br>{ value: 'dashed', label: '虚线' },<br>{ value: 'dotted', label: '点线' }
position|位置选项|{label: '页面底部', value: 'bottom'},<br>{label: '页面顶部', value: 'top'}
time|出现时机|{label: '每次访问出现', value: 'everytime'},<br>{label: '每天出现一次', value: 'everyday'}
style|样式|{ value: 'one', label: '样式1' },<br>{ value: 'two', label: '样式2' }
align|对齐选择|{ value: 'left', label: '底部显示' },<br>{ value: 'center', label: '居中显示' }
