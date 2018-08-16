const readline = require('readline')  
const fs = require('fs')
// 逐行读取文件内容  
const rl2 = readline.createInterface({
  input: fs.createReadStream('./access.log')
})

rl2.on('line', (line) => {
  const arr = line.split(' ')
  console.log('访问时间: %s %s,访问地址： %s', arr[0], arr[1], arr[13])
})