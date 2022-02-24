---
nav:
  title: duiba-dev-new
  order: 1
group:
  title: 基础组件
  order: 3
title: Page分页
order: 10
---

# db-page
分页

```html
<db-page
  :total="300"
  :current.sync="currentPage"
  :page-size="20"
  @change="pageChange"/>
```
