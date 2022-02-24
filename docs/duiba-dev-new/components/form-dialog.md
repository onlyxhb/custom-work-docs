---
nav:
  title: duiba-dev-new
  order: 1
group:
  title: 基础组件
  order: 3
title: FormDialog弹窗
order: 14
---

# db-form-dialog

操作性弹窗,带有表单项的弹窗

组件源码： [http://gitlab2.dui88.com/frontend/duiba-dev-new/blob/master/refactor/dev-new-refactor/src/components/BusinessDialog/FormDialog.vue](http://gitlab2.dui88.com/frontend/duiba-dev-new/blob/master/refactor/dev-new-refactor/src/components/BusinessDialog/FormDialog.vue)

## 使用方法

表单栏由传入的 formConfig 渲染而成

```html
<div>
  <db-button @click="handleOpen">开启弹窗</db-button>
  <db-form-dialog
    title="分享配置"
    confirmButtonText="保存"
    width="500px"
    label-width="90px"
    :visible="visible"
    :form-config="formConfig"
    :form-init-data="formInitData"
    :modal="modal"
    @confirm="handleConfirm"
    @close="handleClose"
  />
</div>

```

```html
  <db-form-dialog
    title="分享配置"
    confirmButtonText="保存"
    width="500px"
    label-width="90px"
    :visible="visible"
    :form-config="formConfig"
    :form-init-data="formInitData"
    :modal="modal"
    @confirm="handleConfirm"
    @close="handleClose"
  />
```

```js
<script>
  new Vue({
    el: '#main',
    data: {
      visible: false,
      modal: true,
      formInitData: {
        shareIconUrl: '',
        shareTitle: '',
        shareSubTitle: ''
      },
      formConfig: formConfig: [
        { label: '分享图标', type: 'image-upload', prop: 'shareIconUrl', props: defaultImgProps },
        {
          label: '标题',
          prop: 'shareTitle',
          type: 'db-limit-input',
          rules: requireRule2,
          props: { style: 'width:95%;', maxLength: 20, placeholder: '请输入标题' }
        },
        {
          label: '标识符',
          type: 'input',
          prop: 'taskIdentifier',
          props: { placeholder: '用来唯一标识任务的自定义字符串' }
        },
        { label: '要求次数', type: 'el-input-number', prop: 'requireLimit', props: { min: 1, max: 99 } },
        {
          label: '奖励积分',
          type: 'input',
          prop: 'rewardCredits',
          props: { placeholder: '请输入完成一次任务奖励的积分', maxLength: 6 },
          slotAppend: '积分'
        },
          {
          label: '券码格式',
          prop: 'couponStyle',
          type: 'check-group',
          options: typeOptions,
          textKey: 'text',
          labelKey: 'label',
          valueKey: 'value',
          rules: requireRule2
        },
          {
          label: '券码格式',
          prop: 'couponStyle2',
          type: 'radio-group',
          options: typeOptions,
          textKey: 'text',
          labelKey: 'label',
          valueKey: 'value',
          rules: requireRule2
        },
        { label: '备注', labelWidth: '100px', prop: 'text', type: 'textarea', placeholder: '请输入同意备注' },
        {
          label: '任务时间',
          type: 'el-date-picker',
          prop: 'dateRange',
          noRule: true,
          keyMapper: ['startDate', 'endDate'],
          props: { type: 'datetimerange', valueFormat: 'timestamp', size: 'small' }
        },
      ...
      ]
    },
    methods: {
      handleOpen(){
        this.visible = true;
      },
      handleConfirm(params){
        console.log(params)
      },
      handleClose() {
        console.log('close')
      }
    }
  })
</script>
```

## [效果预览](https://hd.dlp.duiba.com.cn/static/index/new?appId=1#/example?active=3)

预览效果源码 [http://gitlab2.dui88.com/frontend/duiba-dev-new/tree/master/refactor/dev-new-refactor/src/views/example/components/demo-dialog.vue](http://gitlab2.dui88.com/frontend/duiba-dev-new/tree/master/refactor/dev-new-refactor/src/views/example/components/demo-dialog.vue)

![效果预览](../../assets/image2021-11-17_12-17-41.png)

## 组件属性

参数|说明|类型|可选值|默认值
:---:|:--:|:---:|:---:|:---:
visible|是否显示|Boolean|-|false
title|标题|String|-|-
