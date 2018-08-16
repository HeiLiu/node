const http = require('http');
const fs = require('fs');
// const index = fs.readFileSync('./index.html');
// 创建一个Web 服务器
const server = http.createServer((req, res) => {
    if (req.url == '/') {
        const indexFile = fs.createReadStream('./index.html');
        // http 响应头
        res.writeHead(200, {
            'Content-Type': 'text/html;charset=utf8'
        });
        indexFile.pipe(res)
    } else if (req.url == '/info') {
        // api后端
         info ={
            "name": "Bill Gates",
            "desc": "有钱人"
        };
        // content-type 声明response返回返回的文件格式，位浏览器解析提供参数，调用什么解析
        res.writeHead(200, {
            'Content-Type': 'text/plain;charset=utf8'
        })
        res.end(JSON.stringify(info));
    }
});

server.listen(8081);