---
nav:
  title: duiba-h5-goods
  order: 2
group:
  title: 开发指南
  order: 2
title: 安装运行
order: 1
---

## 命令

``` bash
# 集成命令
npm run cli
```

``` bash

# 开发模式 localhost
npm run dev [skinName]

# 构建 
# [env] 构建环境 皮肤代码将上传至对应环境的mng
# dev 开发环境
# test 测试环境
# pre 预发环境
# prod 生产环境
npm run build [skinName] [env]

#例如
npm run build goods/card prod

# 代码校验
npm run lint

```

## 配置Mock

1. 如果不想做任何的配置，只需要在相同路径下新建同名json文件即可，例如访问`/newActivity/ajaxElement`，只需要在`/mock/newActivity`文件夹中配置ajaxElement.json。
2. 如果1无法满足需求，`/mock/index.js`和`/mock/ams.js`分别对应本地的mock配置和ams代理配置。
3. mock请求的优先级为：
  1. `/mock/ams.js`中的配置
  2. `/mock/index.js`中的配置
  3. 同路径json文件
  4. 无任何配置和json文件，统一转发至ams

`mock/index.js`中的配置，分为`post`和`get`等类型，其中`key`为对应的请求地址，`value`为本地mock数据文件路径，然后在`mock`目录中配置对应的`json`文件，例如：
```
module.exports = {
  post: {
    '/newActivity/ajaxElement': 'customAjaxElement.json',
    '/newActivity/doJoin': 'customDoJoin.json',
    '/newActivity/submit': 'customSubmit.json'
  },
  get: {

  }
};
```
`/mock/ams.js`只需要配置`get`或`post`下的请求地址即可


## 备注

1. 代码格式化一律使用[prettier](https://prettier.io/),各IED插件可查看[官方文档](https://prettier.io/docs/en/editors.html)。
2. prettier的触发方式：
	* npm run lint （使用代码校验命令主动触发）
	* npm run build  （构建之前强制触发）
	* git commit （git提交之前强制触发）
3. 图片压缩使用tinify,需要[注册API key](https://tinypng.com/developers)。并且填入util/tinify.js中的API_KEY。
4. tinify批量处理图片是把流push到对方服务器，所以皮肤开发完成后第一次build会比较慢，需要一次性处理数十张图片。
5. 归档功能是为了将skins文件夹下的代码移出，webpack dev的时候是根据skins文件夹下的内容生成入口文件，如果皮肤太多，lint、dev和build都会很慢。
6. 使用集成命令创建新皮肤、新分支，均不需要输入日期，工具会自动生成。
