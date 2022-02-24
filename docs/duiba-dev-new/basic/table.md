---
nav:
  title: duiba-dev-new
  order: 1
group:
  title: 基础组件
  order: 3
title: Table表格
order: 9
---

# db-table

表格组件

## 代码示例

```html
<db-table
  :columns="columns"
  :data="data"
  @select-change="selectChange"
  :multi-button-group="operationZone"
  selection>
</db-table>

<script>
export default {
    data () {
      return {
        operationZone: [
          {
            buttonTxt: '批量上架',
            event: this.clickButton
          },
          {
            buttonTxt: '批量删除',
            event: this.operation
          }
        ],
        columns: [
          {
            title: '商品',
            key: 'product',
            width: 300,
            render (h, {row, index}) {
              return (
                <div class="test-wrap">
                  <img class="img-test" src="http://yun.dui88.com/images/201808/8ds2taot97.jpg" />
                  <div>
                    <p>虚拟积分隐藏测试</p>
                    <p>5金币 + 55.0元</p>
                  </div>
                </div>
              )
            }
          },
          {
            title: '服务名称',
            key: 'title'
          },
          {
            title: '规格',
            key: 'type'
          },
          {
            title: '到期时间',
            key: 'date'
          },
          {
            title: '服务状态',
            key: 'status'
          },
          {
            title: '操作',
            key: 'action',
            render (h, { row, column }) {
              const { clickButton } = this
              return (
                <div class="row-action">
                  <a onClick={() => {
                    clickButton(row)
                  }}>下架</a>
                  <a>编辑</a>
                  <a>已经全额退款</a>
                  <a>...</a>
                </div>
              )
            }
          }
        ],
        data: [
          {
            title: '兑吧版本号名称',
            type: '专业版',
            date: '2019-09-01',
            status: '服务期',
            _selected: true
          }, {
            title: '兑吧版本号名称',
            type: '专业版',
            date: '2019-09-01',
            status: '服务期'
          }, {
            title: '兑吧版本号名称',
            type: '专业版',
            date: '2019-09-01',
            status: '服务期'
          }, {
            title: '兑吧版本号名称',
            type: '专业版',
            date: '2019-09-01',
            status: '服务期'
          }, {
            title: '兑吧版本号名称',
            type: '专业版',
            date: '2019-09-01',
            status: '服务期'
          }, {
            title: '兑吧版本号名称',
            type: '专业版',
            date: '2019-09-01',
            status: '服务期'
          }, {
            title: '兑吧版本号名称',
            type: '专业版',
            date: '2019-09-01',
            status: '服务期'
          }, {
            title: '兑吧版本号名称',
            type: '专业版',
            date: '2019-09-01',
            status: '服务期'
          }
        ]
      }
    }
  }
</script>

```

## Attributes

参数|说明|类型|可选值|默认值
:---:|:--:|:---:|:---:|:---:
