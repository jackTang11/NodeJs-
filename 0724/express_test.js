var express = require('express');

var app = express();

app.get('/', (req, res) => {
    res.send('hello from simple server :)')
})

app.get('/about' , (req , res)=>{
   res.send('demo express')
})

app.listen(3000, function(){
    
})