const fs = require('fs');
let data;

try {
    data = fs.readFileSync('./f2.txt', 'utf8');
    console.log(data);
    console.log('文件读取完成');
} catch (e) {
    console.log(e);
}