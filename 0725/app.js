var app = require('express')
//配置使用 atr-template 模板引擎
app.engine('art', require('express-art-template'))

app.get('/' , (req , res)=>{
   res.send('hello from simple server :)')
})

app.post('/' , (req , res)=>{

   res.send('hello from simple server :)')

})


// 当以/public/开头的时候，去./public/目录中找对应的文件
app.use('/public/', express.static('./public/'));
//省略第一个参数的时候，可以通过省略/public/去访问
app.use(express.static('public'));
