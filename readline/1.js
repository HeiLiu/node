const readline = require('readline')  
const fs = require('fs')
// process 进程 stdin 输入

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('他大舅他二舅都是他舅:', function(answer) {
  console.log('你的答案 [%s]', answer.toUpperCase());
  rl.close();
})

