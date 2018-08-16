const http = require('http');
const fs = require('fs');
const zlib = require('zlib');
let data;
const server = http.createServer((req, res)=>{
    // req将
    data = fs.ReadStream('./a.txt.gz');
    if(req.headers['accept-encoding'].indexOf('gzip') != -1){
        gzip = zlib.createGzip();
        res.writeHead(200, {
            'Content-Encoding': 'gzip',
            'Content-Type': 'text/plain;charset=utf8'
        })
        fs.createReadStream('./a.txt').pipe(gzip).pipe(res);
    }else{
        res.writeHead(200, {
            'Content-Type': 'text/plain;charset=utf8'
        })
        fs.createReadStream('./a.txt').pipe(res);
    }
});

server.listen(8084);