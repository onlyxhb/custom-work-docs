---
nav:
  title: duiba-dev-new
  order: 1
group:
  title: 基础组件
  order: 3
title: Select选择器
order: 6
---

# db-select

## 基本用法
<vuep template="#example"></vuep>

<script v-pre type="text/x-template" id="example">
 <template>
  <db-select
  v-model="citySelected"
  :options="cityList"
  style="width:140px"
  placeholder="哈哈哈"/>
</template>
<script>
  export default {
    data () {
      return {
        citySelected: 'London',
        cityList: [
        {
          value: 'New York',
          label: 'New York'
        },
        {
          value: 'London',
          label: 'London'
        },
        {
          value: 'Sydney',
          label: 'Sydney'
        },
        {
          value: 'Ottawa',
          label: 'Ottawa'
        },
        {
          value: 'Paris',
          label: 'Paris'
        },
        {
          value: 'Canberra',
          label: 'Canberra'
        }
      ]
      }
    }
  }
</script>
</script>

```html
<db-select
  <template>
  <db-select
  v-model="citySelected"
  :options="cityList"
  style="width:140px"
  placeholder="哈哈哈"/>
</template>
<script>
  export default {
    data () {
      return {
        citySelected: 'London',
        cityList: [
        {
          value: 'New York',
          label: 'New York'
        },
        {
          value: 'London',
          label: 'London'
        },
        {
          value: 'Sydney',
          label: 'Sydney'
        },
        {
          value: 'Ottawa',
          label: 'Ottawa'
        },
        {
          value: 'Paris',
          label: 'Paris',
          disabled: true
        },
        {
          value: 'Canberra',
          label: 'Canberra'
        }
      ]
      }
    }
  }
</script>
```

## 禁用选项
<vuep template="#example2"></vuep>

<script v-pre type="text/x-template" id="example2">
 <template>
  <db-select
  v-model="citySelected"
  :options="cityList"
  style="width:140px"
  placeholder="哈哈哈"/>
</template>
<script>
  export default {
    data () {
      return {
        citySelected: 'London',
        cityList: [
        {
          value: 'New York',
          label: 'New York'
        },
        {
          value: 'London',
          label: 'London'
        },
        {
          value: 'Sydney',
          label: 'Sydney',
          disabled: true
        },
        {
          value: 'Ottawa',
          label: 'Ottawa',
          disabled: true
        },
        {
          value: 'Paris',
          label: 'Paris'
        },
        {
          value: 'Canberra',
          label: 'Canberra'
        }
      ]
      }
    }
  }
</script>
</script>

```html
<template>
  <db-select
  v-model="citySelected"
  :options="cityList"
  style="width:140px"
  placeholder="哈哈哈"/>
</template>
<script>
  export default {
    data () {
      return {
        citySelected: 'London',
        cityList: [
        {
          value: 'New York',
          label: 'New York'
        },
        {
          value: 'London',
          label: 'London'
        },
        {
          value: 'Sydney',
          label: 'Sydney',
          disabled: true
        },
        {
          value: 'Ottawa',
          label: 'Ottawa',
          disabled: true
        },
        {
          value: 'Paris',
          label: 'Paris'
        },
        {
          value: 'Canberra',
          label: 'Canberra'
        }
      ]
      }
    }
  }
</script>
```
