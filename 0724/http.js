var http = require('http')

var server = http.createServer();

server.on('request', function (req, res) {
    console.log(req.url);
    res.end("csaguoa");
})

server.listen(8004, function(){
    console.log('========');
})