---
nav:
  title: duiba-dev-new
  order: 1
group:
  title: 基础组件
  order: 3
title: Checkbox多选框
order: 4
---

# db-checkbox

## 基础用法
<vuep template="#example"></vuep>

<script v-pre type="text/x-template" id="example">
 <template>
  <db-checkbox v-model="isCheck">苹果</db-checkbox>
</template>
<script>
  export default {
    data () {
      return {
        isCheck: false
      }
    }
  }
</script>
</script>


```html
<template>
  <db-checkbox v-model="isCheck">苹果</db-checkbox>
</template>
<script>
  export default {
    data () {
      return {
        isCheck: false
      }
    }
  }
</script>
```
---

## 多选框组
<vuep template="#example1"></vuep>

<script v-pre type="text/x-template" id="example1">
 <template>
  <db-checkbox-group ref="checkGroup" v-model="checkedList" :options="options"  />
</template>
<script>
  export default {
    data () {
      return {
        checkedList: [1],
        options: [
          { label: 'Apple', value: 1 },
          { label: 'Pear', value: 2, disabled: true },
          { label: 'Orange', value: 4 }
        ]
      }
    }
  }
</script>
</script>

```html
<template>
  <db-checkbox-group ref="checkGroup" v-model="checkedList" :options="options"  />
</template>
<script>
  export default {
    data () {
      return {
        checkedList: [1],
        options: [
          { label: 'Apple', value: 1 },
          { label: 'Pear', value: 2, disabled: true },
          { label: 'Orange', value: 4 }
        ]
      }
    }
  }
</script>
```

## 全选/全不选方法

<vuep template="#example3"></vuep>

<script v-pre type="text/x-template" id="example3">
 <template>
  <div>
    <db-button size="mini" @click="checkboxSelectAll(true)">全选</db-button>
    <db-button size="mini" @click="checkboxSelectAll(false)">全不选</db-button>
    <db-checkbox-group ref="checkGroup" v-model="checkedList" :options="options"  style="margin-top:10px;"/>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        checkedList: [1],
        options: [
          { label: 'Apple', value: 1 },
          { label: 'Pear', value: 2, disabled: true },
          { label: 'Orange', value: 4 }
        ]
      }
    },
    methods: {
      checkboxSelectAll (checked) {
        this.$refs.checkGroup.selectAll(checked)
      }
    }
  }
</script>
</script>

```html
<template>
  <div>
    <db-button size="mini" @click="checkboxSelectAll(true)">全选</db-button>
    <db-button size="mini" @click="checkboxSelectAll(false)">全不选</db-button>
    <db-checkbox-group ref="checkGroup" v-model="checkedList" :options="options"  />
  </div>
</template>
<script>
  export default {
    data () {
      return {
        checkedList: [1],
        options: [
          { label: 'Apple', value: 1 },
          { label: 'Pear', value: 2, disabled: true },
          { label: 'Orange', value: 4 }
        ]
      }
    },
    methods: {
      checkboxSelectAll (checked) {
        this.$refs.checkGroup.selectAll(checked)
      }
    }
  }
</script>
```

## 自定义模板
<vuep template="#example4"></vuep>

<script v-pre type="text/x-template" id="example4">
 <template>
  <db-checkbox-group ref="checkGroup" v-model="checkedList" :options="options"  />
</template>
<script>
  export default {
    data () {
      return {
        checkedList: [1],
        options: [
          { label: 'Apple', value: 1, 
            render (h) {
              return (
                <div>
                  <img src = {'//yun.dui88.com/images/201808/8ds2taot97.jpg'} />
                </div>
              )
            }
          },
          { label: 'Pear', value: 2, disabled: true },
          { label: 'Orange', value: 4 }
        ]
      }
    }
  }
</script>
</script>

```html
<template>
  <db-checkbox-group ref="checkGroup" v-model="checkedList" :options="options"  />
</template>
<script>
  export default {
    data () {
      return {
        checkedList: [1],
        options: [
          { label: 'Apple', value: 1,
            //  支持render函数
            render (h) {
              return (
                <div>
                  <img src = {'//yun.dui88.com/images/201808/8ds2taot97.jpg'} />
                </div>
              )
            }
          },
          { label: 'Pear', value: 2, disabled: true },
          { label: 'Orange', value: 4 }
        ]
      }
    }
  }
</script>
```
