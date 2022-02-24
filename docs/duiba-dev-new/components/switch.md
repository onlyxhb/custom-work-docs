---
nav:
  title: duiba-dev-new
  order: 1
group:
  title: 基础组件
  order: 3
title: Switch开关
order: 7
---

# db-switch

switch 开关

## 代码示例
<vuep template="#example"></vuep>

<script v-pre type="text/x-template" id="example">
 <template>
  <db-switch
    v-model="switchValue"
    @change="switchChange"
    show-text>
  </db-switch>
</template>
<script>
  export default {
    data () {
      return {
        switchValue: false,
      }
    },
    methods: {
      switchChange () {
        // alert(this.switchChange)
      }
    }
  }
</script>
</script>


```javascript
<db-switch
  v-model="switchValue"
  @change="switchChange"
  diasbled
  show-text>
</db-switch>

```

## Attributes

参数|说明|类型|可选值|默认值
:---:|:--:|:---:|:---:|:---:
value|是否选中,双向绑定数据|Boolean|-|false
disabled|禁用开关|Boolean|-|false
show-text|是否显示开关文案|Boolean|-|false

## Events

事件名|说明|返回值
:---:|:--:|:---:
change|开关变化时触发，返回当前的状态|true/false
