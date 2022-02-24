---
nav:
  title: duiba-dev-new
  order: 1
group:
  title: 高级组件
  order: 4
title: 其他通用组件
order: 7
---

# 其他通用组件

这里列举剩下的一些通用组件


组件源码： 
- [db-page-title](http://gitlab2.dui88.com/frontend/duiba-dev-new/blob/master/refactor/dev-new-refactor/src/components/others/PageTitle.vue)
- [db-page](http://gitlab2.dui88.com/frontend/duiba-dev-new/blob/master/refactor/dev-new-refactor/src/components/basic/components/page/page.vue)
- [db-table-empty](http://gitlab2.dui88.com/frontend/duiba-dev-new/blob/master/refactor/dev-new-refactor/src/components/others/TableEmpty.vue)
- [db-tip](http://gitlab2.dui88.com/frontend/duiba-dev-new/blob/master/refactor/dev-new-refactor/src/components/others/Tip.vue)
- [db-loading](http://gitlab2.dui88.com/frontend/duiba-dev-new/blob/master/refactor/dev-new-refactor/src/components/others/Loading.vue)
- [form-switch](http://gitlab2.dui88.com/frontend/duiba-dev-new/blob/master/refactor/dev-new-refactor/src/components/FormItem/Switch/index.vue)
- [db-switch](http://gitlab2.dui88.com/frontend/duiba-dev-new/blob/master/refactor/dev-new-refactor/src/components/basic/components/switch/switch.vue)
- [db-select](http://gitlab2.dui88.com/frontend/duiba-dev-new/blob/master/refactor/dev-new-refactor/src/components/basic/components/select/select.vue)
- [db-form-table](http://gitlab2.dui88.com/frontend/duiba-dev-new/blob/master/refactor/dev-new-refactor/src/components/FormItem/FormTable/index.vue)
- [color-picker](http://gitlab2.dui88.com/frontend/duiba-dev-new/blob/master/refactor/dev-new-refactor/src/components/FormItem/ColorPicker/ColorPicker.vue)
- [color-picker2](http://gitlab2.dui88.com/frontend/duiba-dev-new/blob/master/refactor/dev-new-refactor/src/components/FormItem/ColorPicker/ColorPicker2.vue)
- [db-limit-input](http://gitlab2.dui88.com/frontend/duiba-dev-new/blob/master/refactor/dev-new-refactor/src/components/FormItem/Input/limitInput.vue)
- [input-limit](http://gitlab2.dui88.com/frontend/duiba-dev-new/blob/master/refactor/dev-new-refactor/src/components/FormItem/Input/inputLimit.vue)
- [db-breadcrumb-bar](http://gitlab2.dui88.com/frontend/duiba-dev-new/blob/master/refactor/dev-new-refactor/src/components/others/breadcrumbBar.vue)

非全局通用组件(需手动引入)
- [db-chart](http://gitlab2.dui88.com/frontend/duiba-dev-new/blob/master/refactor/dev-new-refactor/src/components/chart/index.vue)
- [rich-editor](http://gitlab2.dui88.com/frontend/duiba-dev-new/blob/master/refactor/dev-new-refactor/src/components/FormItem/RichEditor/index.vue)

### 使用方法

```html
<db-page-title title="我的商品" sub-title="查看券码" />
<db-page :total="300" :current.sync="currentPage" :page-size="20" @change="pageChange" />
<db-table-empty />
<db-tip :show.sync="showTip">hello world</db-tip>
<db-loading :show="showLoading" />
<form-switch label="测试" :value="form.switch" />
<db-switch v-model="form.switch1" size="default" show-text />
<db-switch v-model="form.switch2" size="default" disabled />
<db-select v-model="form.citySelected" :options="cityList" style="width:140px" placeholder="哈哈哈" />
<db-form-table ref="levelForm" :data="form.configlist" :columns="columns" max-height="560" />
<color-picker v-model="form.color" defColor="#fff" />
<color-picker2 v-model="form.color2" defColor="#fff" />
<db-limit-input size="mini" v-model="form.name" :maxlength="10" />
<input-limit v-model="form.name" :max-length="10" placeholder="请填写奖品名称" />
<db-breadcrumb-bar />
 
// import dbChart from '@/components/chart/index';
// import RichEditor from '@/components/FormItem/RichEditor/index';
<db-chart :options="options"></db-chart>
<rich-editor v-model="form.description" mode="default" placeholder="富文本编辑器示例"></rich-editor>
```

## [效果预览](https://hd.dlp.duiba.com.cn/static/index/new?appId=1#/example?active=5)

预览效果源码 [http://gitlab2.dui88.com/frontend/duiba-dev-new/tree/master/refactor/dev-new-refactor/src/views/example/components/demo-others.vue](http://gitlab2.dui88.com/frontend/duiba-dev-new/tree/master/refactor/dev-new-refactor/src/views/example/components/demo-others.vue)

