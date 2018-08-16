const readline = require('readline')  
const fs = require('fs')
// process 进程 stdin 输入
let index = 0
const questions = ["Project name", "description", "author"]
const defaultAnswers = ['name', '1.0.0', 'none']
const answers = []
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '<OHAI>'
})
const preHint = `This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See \`npm help json\` for definitive documentation on these fields
and exactly what they do.

Use \`npm install <pkg> --save\` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
` 
// 创建 package.json
function createPackageJSON(){
  //  json 你想怎么准备
  var map = {}
  questions.forEach((question, index) => {
    map[question] = answers[index]
  })
  fs.writeFileSync('./package.json', JSON.stringify(map, null, 4))

}

const Ask = function (){
  if(index === questions.length){
    createPackageJSON();
    rl.close();
    return
  } 
  // rl.question(questions, (answer) => {
  //   console.log(`${questions[index]} [%s]`, answer.toUpperCase());
  // })
  let defaultAnswer = defaultAnswers[index]
  let question = questions[index] + `:(${defaultAnswer})`
  rl.question(question, (answer) => {
    answers.push(answer || defaultAnswer )
    index++
    Ask()
  })
}
Ask()



