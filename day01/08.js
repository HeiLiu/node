 var fs = require('fs');
 //引入fs包进行文件读取
 //如果函数需要回调函数 放在参数最后出现
 //node约定所有回调函数都是错误优先
 fs.readFile('demo/02.js','utf8',(error,data)=>{
     if(error) throw error;
     //在异步中的错误不能被捕获 通过throw error进行错误的捕获
     console.log(data) >>a.txt;
 });