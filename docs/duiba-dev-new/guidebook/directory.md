---
nav:
  title: duiba-dev-new
  order: 1
group:
  title: 开发指南
  order: 2
title: 目录结构
order: 2
---

## 目录结构

``` 目录
|--build                // 构建相关
|--config               // 配置相关
|--documents            // 说明文档
|--mock                 // 本地 mock 数据，文件路径对应请求路径
|--src                  // 开发资源
|    |--assets          // 静态资源
|    |--components      // 公共组件
|    |--constants       // 常量，目前有 请求地址 常量
|    |--directive       // 指令
|    |--filters         // 过滤器
|    |--icons           // svg icons
|    |--minxins         // 公共混入
|    |--router          // 路由配置，权限控制相关
|    |--store           // vuex和需要全局store的方法
|    |--styles          // 各种样式
|    |--utils           // 公共工具
|    |--views           // 页面、业务
|    |--App.vue         // App入口页面
|    |--main.js         // 入口，加载组件、初始化等等
|--static               // 静态资源
|--test                 // 测试
|--.babelrc             // babel配置文件
|--.editorconfig        // 代码风格统一工具的配置文件
|--.eslintignore        // eslint忽略的配置文件
|--.eslintrc            // eslint配置文件
|--.gitignore           // git忽略提交配置文件
|--.postcssrc           // postcss配置文件
|--index.html           // html模板
|--package.json         // package.json
```
