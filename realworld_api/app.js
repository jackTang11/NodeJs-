const express = require('express')
const router = require('./router')
const errorHandle = require('./middleware/error-handler')
const cors = require('cors')
const morgan = require('morgan')
require('./model')  //加载数据库

const app = express()

app.use(express.json())
app.use(morgan('dev')) //日志
app.use(cors()) //跨域

const PORT = process.env.PORT || 3000

//配置路由中间件
app.use('/api', router)

//挂载统一处理服务端错误的中间件
app.use(errorHandle())



app.listen(PORT, () => {
    console.log('PORT ==== ');
})