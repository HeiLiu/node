// COMMONJS require NODE 内置支持的js模块化方案
// es6 module
// sea.js 淘宝淘汰了的模块化方案
const fs = require('fs');
let data;
// data = fs.readFileS('./f1.txt'); // 同步读取文件内容
// data = fs.readFile('./f2.txt', 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log('真正的读取完成了');
//     console.log(data);
// });
// console.log('读取完成？');

// 异步变同步，两种写法 各自欢喜
// new Promise((resolve, reject) => {
//     data = fs.readFile('./f1.txt', 'utf8', (err, data) => {
//         if (err) throw err;
//         console.log('真正的读取完成了');
//         console.log(data);
//         resolve(data);
//     });
// }).then(()=>{
//     console.log('读取完成？');
// })

const p = new Promise((resolve, reject)=>{
    data = fs.readFile('./f2.txt', 'utf8', (err, data) => {
        if (err){
            reject(err);
            //  throw err;
        }else{
            resolve(data);
        }
    });
})

p.then(data =>{
    console.log(data);
}).catch(e =>{
    console.log(e);
})

