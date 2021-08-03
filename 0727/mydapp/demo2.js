//加载
const express = require('express')

const app = express()

app.get('/', (req, res) => {
    console.log(req.url);
    console.log(req.method);
    console.log(req.headers);

    //发送并结束
    res.send('hello')
    
})

app.listen(3000, ()=>{
    console.log('listen 30000');
})