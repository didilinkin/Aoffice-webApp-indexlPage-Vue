# A+office-Webapp-index首页-Vue制作
***
## 使用技术说明:

* Vuejs           框架
* uex            状态管理
* Sass            样式预处理器
* Axios           交互处理
* Webpack         模块打包
* Babel           ES6转译ES5工具
* Yarn            模块依赖安装

***
## Components Structure / 组件结构说明:
```
App.vue (根节点)
    |
    |_ Header.vue (顶部)
        |
        |_ NavBtn.vue (导航按钮)
        |
        |_ Search.vue (搜索框)
    |
    |_ Content.vue (内容)
        |
        |_ Title.vue (标题组件; Props传入值：'热门办公室推荐')
        |
        |_ BuuildingList.vue (楼盘列表)
        |
        |_ Title.vue (标题组件; Props传入值：'关于我们')
        |
        |_ AboutUs.vue ('关于我们'内容)

```
***

## Build Setup / 开发流程

``` bash
# install dependencies/拉取项目,在项目路径下执行
# 国内环境建议使用cnpm install
npm install

# *推荐Yarn
yarn install

# serve with hot reload at localhost:8080
# npm安装依赖后,运行node服务器,打开 localhost:80 预览 (已运行热更新功能)
npm run dev

# build for production with minification
# 当修改代码后,需要手动打包发布时,运行npm run build命令进行打包
npm run build
```

关于Vue-loader的文档可在此处阅读 [docs for vue-loader](http://vuejs.github.io/vue-loader).

***

### UI组件库将 使用 [Mint UI](http://mint-ui.github.io/#!/zh-cn)

### 当制作多页面时,将引入`路由` [vue-router 2](http://router.vuejs.org/zh-cn/) 来制作SPA单页面应用

***


## 测试机器: iPhone 6s

## 测试浏览器: Chrome/Safari/FireFox/微信
