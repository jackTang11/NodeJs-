### 创建项目
```
mkdir realworld

cd realworld

npm init -y

npm i express
```
### app.js
```
const express = require('express')

const app = express()

const PORT = process.env.PORT || 3000

```
### 目录结构
```
config 配置文件
    config.default.js 
controller 用于解析用户的输入，处理后返回响应的结果
model 数据持久化
middleware 用于编写中间件
router 用于配置URL路由
util 工具模块
app.js 用于自定义启动路由
```
###  配置常用的中间件
```
解析请求体
app.use(exress.json())
app.use(express.urlencoded())

日志输出 morgan()
    日志需要进行安装
    npm i morgan
    app.use(morgan('dev'))

为客户端提供跨域资源请求 cors() 
    npm i morgan
    app.use(cors()) 需要放在路由之前

    验证：
    随便发送一个请求，看响应头是否包含
    Access-Control-Allow-Origin *
```
### 路由设计
> router 中创建用index.js index.js
```
const express = require('express')

const router = express.Router();

module.exports = router;

```
> app.js 进行路由器中间件配置
```
const router = require('./router')

//所有接口都以/api开头  配置路由中间件
app.use('/api', router)
```


