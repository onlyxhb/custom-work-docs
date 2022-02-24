---
nav:
  title: duiba-dev-new
  order: 1
group:
  title: 开发指南
  order: 2
title: 请求与调试
order: 4
---

# 请求与调试
新封装的地址常量只需加入到 `api/url` 文件夹下, `api/url/index.js`会自动加载该目录下的其他所有文件。

## url常量基本结构
```
export default {
  get: {
    auth: '/auth/getAuthList',
    ...
  },
  post: {
    agentApplyList: '/newmanager/saas/agent/selectAgentOrders',
    ...
  }
  ... // 其他请求方式，如delete、patch等
};
```

## 支持的请求方式
```
Vue.prototype.$axios = axios;
Vue.prototype.$ajax = requests.ajax;
Vue.prototype.$ajax.get = requests.get;
Vue.prototype.$ajax.post = requests.post;
Vue.prototype.$ajax.patch = requests.patch;
Vue.prototype.$ajax.delete = requests.delete;
Vue.prototype.$ajax.upload = requests.upload;
```
封装后的请求函数会拦截一切失败请求包括网络问题、业务问题导致的失败。
具体说明：

方法名|说明|参数
:---:|:--:|:---:
$axios|原生axios|具体参数见axios文档
$ajax|封装后请求函数，可自动判断请求的类型，支持get/post|requestType: url常量，data：请求数据/object，config：具体配置见下表
$ajax.get|get请求|requestType: url常量，data：请求数据/object，config：具体配置见下表
$ajax.post|post请求|requestType: url常量，data：请求数据/object，config：具体配置见下表
$ajax.delete|delete请求|requestType: url常量，data：请求数据/object，config：具体配置见下表
$ajax.patch|patch请求|requestType: url常量，data：请求数据/object，config：具体配置见下表

config 说明

字段|说明|类型|可选值|默认值
:---:|:--:|:---:|:--:|:---:
showSuccessMsg|请求成功后是否显示成功消息|boolean|true/false|false
hideErrorMsg|请求失败时不显示相关错误消息|boolean|true/false|false
method|$ajax 请求时指定请求方式|string|——|——
cache|请求是否本地缓存，为 true 则默认获取缓存数据，无视缓存时间，为 number 则代表缓存时间间隔，0 等同于 true|number/boolean|——|false
dataType|请求数据以何种形式传输，值为query/params直接拼接在url中，值为json则以json的形式传送，值为form，post请求时是否以formData的形式传输数据|string|query、params、json、form|——

* vue 组件之外使用
``` router/routeRequire.js
import ajax from '@/utils/request';
...
ajax.get('auth').then(res => {
  const authList = res.authList;
  ...
}
```
* vue 组件中使用
```
...
methods: {
  getDetail() {
    this.$ajax('agentProcessList', { pageNo: 2 }, { showSuccessMsg: true, form: true }).then(res => {
      this.detail = res.data.vo;
    });
  }
}
...
```
## 本地调试
本地调试有三种方式
* dev： 链接开发环境
* ams： 链接eolinker 接口文档库
* local： 使用本地mock

?> 修改 `refactor/src/api/request.js`文件下的 MOCK_TYPE 可切换调试方式
```
const MOCK_TYPE = 'dev';
let ROOT = '';

if (process.env.NODE_ENV === 'development') {
  ROOT = {
    'local': '/mock',
    'dev': '/dev',
    'ams': '/ams'
  }[MOCK_TYPE] || ROOT;
}
```

### 使用 开发环境
?> 由于目前后端没有提供开发环境永不过期的tooken数据，故每天需修改 `refactor/config/index.js` 中的cookie值。目前只需要可使用的 `sso_ticket`(可以去开发环境复制) 值即可。
```
const cookie = 'sso_ticket=213d3626801082b0cffbca7be6335f47; ';
```
### 使用 eolinker 接口文档库
修改 `MOCK_TYPE` 后只要有该接口就可以正常使用。但目前接口文档不完整。
