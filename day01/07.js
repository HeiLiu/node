//代码计时器
console.time('main');
console.log('代码开始执行');
//setTimeout(function(),0)将里面的语句块放到代码最后执行
setTimeout(()=>{
    for(var i =0 ;i<1000000000;i++){

    }
},0);
//代码执行完打印出执行时间
console.log('执行完毕');
console.timeEnd('main');