//加载
const express = require('express')

const app = express()

app.get('/' , (req , res)=>{
   res.send('hello from simple server :)')
})

app.post('/' , (req , res)=>{
   res.send('hello from simple server :)')
})

app.listen(3000, ()=>{
    console.log('listen 30000');
})
