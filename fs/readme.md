## 性能优化  

```
http.createServer((req, res)=>{
    // callback

})
```

web server 资源(html,js,css,mp3,json,img)  一切皆是资源  
createReadStream(读取资源)  
传输体积减小 <= 压缩  gzip 
优势： 减少传输体积，传输快；减少服务器带宽
服务器端可以进行文件操作: 读写， 权限， 压缩， 解压缩  
客户端（浏览器）
```
res.writeHead(200, {
    'Content-Type': 'text/html;charset=utf8'
})
```
