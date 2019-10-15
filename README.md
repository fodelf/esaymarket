<h2 align="center">
易推广让天下没有难做的开发（Serverless趋势的实践者）
</h2>
<h3 align="center">
重要:南京前端-吴文周-找工作（18651892475）
</h3>
<p>
   PS:此项目本人负责需求分析，项目技术设计，拖拽功能，生成app的微服务,
   其他功能由另外两个小伙伴完成，
   项目比较匆忙一个月利用加班之余的时间开发完成，不足之处还望指正
</p>
<p>
基于Vue开发，通过拖拽的形式，生成移动页面，app,小程序。
可以让更多没有相关基础的人们可以轻松实现设计，开发，测试，运维，推广，预测，客服一体化。
</p>
<p>
Develop by Drag&Drop
</p>
<p>
前后端端代码开源，生成app的功能代码运行在本人机器上面的微服务(如有需要call me)，利用flutter实现生成app内嵌功能代码已经上传git，之后会选择更好性能的树渲染，而不是现在的内嵌webview
</p>

### Links/相关链接

体验地址 http://easymarket.chehe88.com/

知乎视频 https://zhuanlan.zhihu.com/p/84963609

### Features

1. 组件

   - [x] 图片
   - [x] 表单
   - [x] 轮播图

2. 生成功能

   - [x] 移动页面
   - [x] 安卓
   - [ ] ios
   - [ ] 小程序

3. 数据分析

   - [x] 注册统计
   - [x] 注册分析
   - [ ] 预测数据

4. 智能 api

   - [ ] 调用百度 api 百度信息流一键推广
   - [ ] 百度 api 智能电话客户回访
   - [ ] 智能客服机器人

5. 云开发

   - [ ] 云函数
   - [ ] 云数据库
   - [ ] 云文件

6. 插件功能

   - [ ] vue 插件-符合数据格式，npm i xx 就可以使用
   - [ ] webview 插件

#### 技术栈（当前）

1. 前端：[Vue.js,flutter,mpvue]
2. 后端：[Spring]
3. 数据库：[Mysql]

## Project setup

```
npm install
```

### structure DLL

```
npm run dll
```

### Compiles and hot-reloads for development

```
npm run serve
```

### 扩展组件 配置就可以了，记得可以自定义方法哦

```
图标目录  src/views/edit/mainArea/mainAreaConfig.js
```

```
组件目录 src/components/library/widgets/views
```

```
组件配置目录  src/components/library/widgets/configs
```

### vue 插件功能（后端功能尚未实现，路径打包方式待优化,打包插件暂用 vue cli3 自带功能实现 请同学们自行安装）

```
详细工程流会在我之后开源的 EasyWork，一键工作台的开源项目中说明从组件设计到开发，再到 Jenkins,发布项目，发布组件到仓库，生成测试报告，邮件推送等
```

```
在终端中进入此目录下  src/pages/plugin
```

```
执行 vue serve App.vue 可以查看开发状态插件
```

```
执行 vue build -t lib -n easyMarket main.js 打包插件，修改package.json ，登陆npm 或者 私有仓库 发布包
```

```
在需要引入当前页面插件的Vue项目中 npm i xx 上传的项目名称，在主入口js 中 import xx from 'xx' ，再使用Vue.use(xx)
```
