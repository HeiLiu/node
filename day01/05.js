//获取进程的参数
var  argv = process.argv.slice(2);
switch(argv[0]){
	case'init':  console.log('你准备进行初始化');
	break;
	case'install':  console.log('你准备进行安装');
	break;
	case'uninstall':  console.log('你准备进行卸载');
	break;
}
console.log(argv);