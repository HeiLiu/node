const readline = require('readline')

const completer = (line) => {
  // console.log(line)
  const command = 'npm'
  const subCommands = ['help', 'init', 'install']
  // const re = /^(n|np)/   && re.test(line)
  if(line.length < command.length){
    return [ command.indexOf(line) === 0 ? [command] : [], line]
    // return command
  }
  // npm 将三个命令都提示出来 i=> init
  const hints = subCommands.filter( subCommand => {
    const lineTrippedCommand = line.replace(command, '').trim() 
    return lineTrippedCommand && subCommand.indexOf(lineTrippedCommand) === 0
  })
  if (hints.length === 1){
   hints = hints.map(function(hit){
     return [command, hit].join(' ')
   })
  }
  // 匹配到多个或者没有匹配到
  return [hints.length ? hints : subCommands, line]
  // const hints = line.replace(command, '')
  // const arr = subCommands.filter((item)=>{
  //   if(item.indexOf(hints) === 0){
  //     return item
  //   }
  // })
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  completer: completer
})