/**
 * 面试必考的递归遍历一个文件夹下的文件 相对比较基础
 */
const fs = require('fs');
const path = require('path')

const getFilesInDir = function(dir){
    let results = [path.resolve(dir)];
    // console.log(results);
    const files = fs.readdirSync(dir, 'utf8'); // 得到一个数组
    // console.log(files);
    files.forEach(file => {
        // const stats
        file = path.resolve(dir, file);
        console.log(file);
        const stats = fs.statSync(file);
        if(stats.isFile()){
            console.log('是文件')
            results.push(file);
        }else if(stats.isDirectory()){
            // 如果是文件夹，递归调用当前的函数，其结果返回一个results数组，上一级文件夹的遍历结果results连接上去concat
           results = results.concat(getFilesInDir(file));
        // getFilesInDir(file);
        }
    })
    return results
}   

const files = getFilesInDir('./txt');
console.log(files);