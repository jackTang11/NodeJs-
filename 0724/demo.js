const http = require('http');
http.createServer((req, res) => {
    
    res.write('nodejs');
    res.end();
}).listen(8001)

