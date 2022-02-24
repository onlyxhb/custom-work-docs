---
nav:
  title: duiba-dev-new
  order: 1
group:
  title: 基础组件
  order: 3
title: Form表单验证
order: 8
---

# 表单验证 (文档待完善)

```html
<db-form
  ref="form"
  label-position="left"
  :label-width="120"
  style="width:500px;"
  :model="formValidate"
  :rules="ruleValidate">
  <db-form-item label="Name" prop="name" required>
    <db-input type="text" placeholder="yoyoyo~" v-model="formValidate.name"/>
  </db-form-item>
  <db-form-item label="Email" prop="mail" required>
    <db-input type="text" placeholder="yoyoyo~" v-model="formValidate.mail"/>
  </db-form-item>
  <db-form-item label="是否上架">
    <db-switch v-model="formValidate.shangjia" show-text/>
  </db-form-item>
  <db-form-item label="商品类型" required prop="type">
    <db-radio-group v-model="formValidate.type" :options="newOptions3"></db-radio-group>
  </db-form-item>
  <db-form-item label="商品分类" required prop="fenlei">
    <db-checkbox-group ref="checkGroup2" v-model="formValidate.fenlei" :options="fenleiOptions"  />
  </db-form-item>
  <db-form-item>
    <div class="example-form-action">
      <db-button type="plain" @click="formReset">重置</db-button>
      <db-button style="margin-left:40px;" @click="allValidate">提交</db-button>
    </div>
  </db-form-item>
</db-form>
<script>
  export default {
    data () {
      return {
        formValidate: {
          name: '',
          mail: '',
          type: '',
          fenlei: [],
          shangjia: false
        },
        ruleValidate: {
          name: [
            { required: true, message: '不能为空', trigger: 'blur' }
          ],
          mail: [
            { required: true, message: '邮箱不能为空', trigger: 'blur' },
            { type: 'email', message: '邮箱地址格式不正确', trigger: 'blur' }
          ],
          type: [
            { required: true, type: 'number', message: '请选择商品类型', trigger: 'change' }
          ],
          fenlei: [
            { required: true, type: 'array', min: 1, message: '至少选一项', trigger: 'change' },
            { type: 'array', max: 2, message: '最多选两项', trigger: 'change' }
          ]
        },\
      }
    }
  }
</script>
```
