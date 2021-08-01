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
### 数据验证

```
npm i express-validator

   body('user.password').notEmpty().withMessage('密码不能为空'),
    body('user.email').notEmpty().withMessage('邮箱不能为空')
        .bail()//上面都可以通过，才能继续走下面
        .custom(async email => { //自定义验证，查询是否存在邮箱，此查询操作为异步
            const user = await User.findOne({ email })
            if (user) { //如果存在，直接返回
                return Promise.reject('邮箱已存在')
            }
        })



    //获取上面验证的结果
    const errors = validationResult(req)
    console.log(errors);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array()
        })
    }
    next()    

```
> 提取校验中间件 
```
https://express-validator.github.io/docs/running-imperatively.html  
Running validations imperatively

const { validationResult } = require('express-validator');

module.exports = validations => {
    return async (req, res, next) => {
        await Promise.all(validations.map(validation => validation.run(req)));

        const errors = validationResult(req);
        if (errors.isEmpty()) {
            return next();
        }

        res.status(400).json({ errors: errors.array() });
    };
};
```
