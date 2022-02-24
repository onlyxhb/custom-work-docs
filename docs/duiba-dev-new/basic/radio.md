---
nav:
  title: duiba-dev-new
  order: 1
group:
  title: 基础组件
  order: 3
title: Radio单选框
order: 5
---

# db-radio

## 基础用法

<vuep template="#example"></vuep>

<script v-pre type="text/x-template" id="example">
 <template>
  <db-radio v-model="isCheck" >杭州</db-radio>
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
  <db-radio v-model="isCheck" >杭州</db-radio>
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

## 单选组
<vuep template="#example2"></vuep>

<script v-pre type="text/x-template" id="example2">
 <template>
  <db-radio-group v-model="radioChecked" :options="options" offset="30" />
</template>
<script>
  export default {
    data () {
      return {
        radioChecked: 1,
        options: [
          { label: 'Apple', value: 1 },
          { label: 'Pear', value: 2 },
          { label: 'Orange', value: 4 }
        ]
      }
    }
  }
</script>
</script>

```html
<template>
  <db-radio-group v-model="radioChecked" :options="options" offset="30" />
</template>
<script>
  export default {
    data () {
      return {
        radioChecked: 1,
        options: [
          { label: 'Apple', value: 1 },
          { label: 'Pear', value: 2 },
          { label: 'Orange', value: 4 }
        ]
      }
    }
  }
</script>
```

## 禁用
<vuep template="#example3"></vuep>

<script v-pre type="text/x-template" id="example3">
 <template>
  <db-radio-group v-model="radioChecked" :options="options" offset="30" />
</template>
<script>
  export default {
    data () {
      return {
        radioChecked: 1,
        options: [
          { label: 'Apple', value: 1, disabled: true },
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
  <db-radio-group v-model="radioChecked" :options="options" offset="30" />
</template>
<script>
  export default {
    data () {
      return {
        radioChecked: 1,
        options: [
          { label: 'Apple', value: 1, disabled: true },
          { label: 'Pear', value: 2, disabled: true },
          { label: 'Orange', value: 4 }
        ]
      }
    }
  }
</script>
```

## 自定义模板
<vuep template="#example4"></vuep>

<script v-pre type="text/x-template" id="example4">
 <template>
  <db-radio-group v-model="radioChecked" :options="options" offset="30" />
</template>
<script>
  export default {
    data () {
      return {
        radioChecked: 1,
        options: [
        { label: 'Apple',
          value: 1,
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
  <db-radio-group v-model="radioChecked" :options="options" offset="30" />
</template>
<script>
  export default {
    data () {
      return {
        radioChecked: 1,
        options: [
        { 
          label: 'Apple',
          value: 1,
          // render函数
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
