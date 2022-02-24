---
nav:
  title: duiba-dev-new
  order: 1
group:
  title: 基础组件
  order: 3
title: Modal提示框
order: 11
---

# db-modal

弹窗组件

## 代码示例
<vuep template="#example"></vuep>

<script v-pre type="text/x-template" id="example">
 <template>
  <div>
    <db-button @click="alert">$modal</db-button> <br/><br/>
    <db-button @click="alert1">$alert.error</db-button><br/><br/>
    <db-button @click="alert2">$alert.success</db-button><br/><br/>
    <db-button @click="alert3">$confirm.error</db-button><br/><br/>
    <db-button @click="alert4">$confirm.info</db-button><br/><br/>
    <db-button @click="alert5">$confirm.success</db-button>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        switchValue: false,
      }
    },
    methods: {
      alert () {
        this.$modal({
          type: 'confirm',
          icon: 'success',
          title: '确定要删除这条信息么?',
          content: '此操作将会彻底删除信息不再恢复，这里是附加的简单描述',
          confirmTxt: '知道了',
          concelTxt: '取消'
        })
        .then(action => {
          console.log('这里是确定回调')
        })
        .catch(action => {
          console.log('这里是取消回调')
        })
      },
      alert1 () {
        this.$alert.error({
          title: '错误alert'
        })
      },
      alert2 () {
        this.$alert.success({
          title: '成功alert'
        })
      },
      alert3 () {
        this.$alert.success({
          title: 'info alert'
        })
      },
      alert4 () {
        this.$confirm.info({
          title: 'infoconfirm'
        })
      },
      alert5 () {
        this.$confirm.success({
          title: '成功confirm'
        })
      }
    }
  }
</script>
</script>

```javascript
this.$modal({
  type: 'confirm',
  icon: 'success',
  title: '确定要删除这条信息么?',
  content: '此操作将会彻底删除信息不再恢复，这里是附加的简单描述',
  confirmTxt: '知道了',
  concelTxt: '取消'
})
.then(action => {
  console.log('这里是确定回调')
})
.catch(action => {
  console.log('这里是取消回调')
})

this.$alert.error({
  title: '错误alert'
})

this.$alert.success({
  title: '成功alert'
})

this.$alert.info({
  title: 'info alert'
})

this.$confirm.error({
  title: '错误confirm'
})

this.$confirm.success({
  title: '成功confirm'
})

this.$confirm.info({
  title: 'info confirm'
})
```

## Attributes

参数|说明|类型|可选值|默认值
:---:|:--:|:---:|:---:|:---:
type|类型|string|confirm/alert|alert
icon|图标|string|success/info/error|-
title|标题|string|-|-
content|内容|string|-|'提示'
confirmTxt|确定按钮文本|string|-|'确定'
cancekTxt|取消按钮文本|string|-|'取消'
