const { Router } = require('express');
const express = require('express')
const app = express()

//利用中间件，获取log 信息
// 中间件的顺序很重
// 中间件的三个参数  req,res,next
app.use((req,res,next) => {
   console.log(req.method,req.url,Date.now());
   next()//继续执行
})
//挂载路由
// app.use(router)

//给路由限定前缀
app.use('/todos',router)

//错误处理中间件
app.use((err, req, res, next) => {
   
})
//404配置 
app.use((req, res, next) => {
   res.status(404).send('404 Not Found')
})

app.get('/' , (req , res)=>{
   res.send('get /')
})

app.get('/about' , (req , res)=>{
   res.send('get about')
})

app.post('/login' , (req , res)=>{
   res.send('post login')
})

app.listen(3000, () => {
    console.log('3000======');
})
