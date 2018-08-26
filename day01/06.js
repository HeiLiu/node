process.stdin.setEncoding('utf8');

// process.stdin.on('readable', () => {
//   const chunk = process.stdin.read();
//   if (chunk !== null) {
//     process.stdout.write(`data: ${chunk}`);
//   }
// });

var  msg = '请输入你的用户名：\n ';
var users ={
	'admin':'123',
	'user':321
}
//區分此時是否在輸入用戶名 
var isInputUsername = true;
var username = '';
process.stdout.write(msg);
process.stdin.on('data',(userInput)=>{
	//通过process.stdin获取到的 username实际上是一个Object[二进制数组]
	// 回车是输入的最后一个字符 通过下面验证
	// process.stdout.write(`*${userInput}*`);
	userInput = userInput.trim();//通过trim()去除多余的enter回车 防止比较出错
	if(!username){
		if(Object.keys(users).indexOf(userInput)===-1){
			process.stdout.write('用户名不存在\n');
			process.stdout.write(msg);
			username = '';
		}else{
			process.stdout.write(userInput + '请输入你的密码:\n');
			username = userInput;
			// process.stdout.write(`現在正在輸入密碼${users[username]}`);
			
		}
	}else{
		// console.log(`*${userInput}*`);
		if(userInput ===users[username]){
			console.log('登录成功');
		}else{
			console.log('密码错误');
		}
		
	}
});







