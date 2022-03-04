---
nav:
  title: duiba-h5-goods
  order: 2
group:
  title: 商品模块
  order: 2
title: 实物
order: 1
---

## 结构
商品实物模块实现了组件隔离，对我们而言，在开发中如果需要定制某个组件，只需要在对应的定制目录下新建一个同名文件就可以了，甚至不用关心引入，我们已经为你自动全局引入了。

<Tree title="goods">
  <ul>
    <li>
      object
      <small>实物商品模块代码</small>
      <ul>
        <li>
          components
          <small>这个目录存放着通用逻辑的组件</small>
          <ul>
            <li>
              baseInfo
              <small>头部商品基本信息（示意）</small>
              <ul>
                <li>
                  commonCredits
                  <small>价格展示 （slot）</small>
                  <ul>
                    <li>index.vue</li>
                  </ul>
                </li>
                <li>
                  originBuy
                  <small>原价购买（slot）</small>
                  <ul>
                    <li>index.vue</li>
                  </ul>
                </li>
                <li>index.vue</li>
              </ul>
            </li>
            <li>
              bottomMsg
              <small>底部提示区 (权益兑换)</small>
              <ul>
                <li>index.vue</li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          custom
          <small>这个目录存放着定制代码，我们改动最多的地方</small>
          <ul>
            <li>
              zjqc
              <small>智己汽车相关定制代码</small>
              <ul>
                <li>
                  components
                  <small>这个目录存放着定制逻辑的组件，会覆盖通用逻辑的组件</small>
                  <ul>
                    <li>
                      bottomMsg
                      <small>底部提示区 (权益兑换)</small>
                      <ul>
                        <li>
                          bottomMsg.vue
                          <small>这个组件会被全局声明为 zjqcBottomMsg</small>
                        </li>
                        <li>
                          index.vue
                          <small>这个组件会被全局声明为 zjqcBottomMsg</small>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  index.vue
                  <small>有此文件就会覆盖掉主页面</small>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          data
          <small>这个目录存放着本地DATA的mock数据</small>
          <ul>
            <li>
              data.html
              <small>DATA数据</small>
            </li>
          </ul>
        </li>
        <li>
          App.vue
          <small>Vue的主入口</small>
        </li>
        <li>
          common.less
          <small>这里存放着一个公共的样式函数，需手动引入</small>
        </li>
        <li>
          index.ejs
          <small>实物模块的入口，通常是固定的，不需要改动</small>
        </li>
        <li>
          index.js
          <small>挂载App.vue文件，也是一个入口</small>
        </li>
        <li>
          index.less
          <small>实物模块全局通用样式，已全局引入</small>
        </li>
        <li>
          index.vue
          <small>主页面-通用逻辑，内部拆分成了各个组件</small>
        </li>
        <li>
          loadCmps.js
          <small>动态引入定制模块的组件到全局，是拆离组件的基础</small>
        </li>
        <li>
          mixins.js
          <small>内部引入了全局组件，不需要每个定制主页面重复引入</small>
        </li>
        <li>
          package.json
          <small>清单文件</small>
        </li>
      </ul>
    </li>
  </ul>
</Tree>

整个实物页面目前可以拆分为以下几部分
- 顶部轮播图
- 秒杀倒计时
- 头部商品基本信息
- 优惠提示
- 商品规格信息展示
- 商品内容区--包含商品详情、重要声明、发货、价格说明等模块
- 底部提示区-权益兑换
- 底部按钮模块
- 浮窗区域


## 补充

- 约定式路由，目录嗅探, 最多支持3层

- 全局组件的使用

  ```html
  <component :is="comps.bottomMsg || 'bottomMsg'" />
  ```
- 定制模块
  - 只定制入口页面
  - 入口页面和定制组件
  - 只定制组件
  - 只定制某个组件的子组件，例如 `countDown`

- 样式的隔离，每个定制组件样式都是用`scoped`

- 参考部分文档的语言切换
```js
index.vue
index.cn.vue
index.en.vue
```
