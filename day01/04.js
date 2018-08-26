// 动 不断的切换显示的图形（字符画）
// 擦除重绘

var fs =require('fs');
// 每个成员就是帧
var frames = [];
//利用文件接口从文件中读取字符画
for(var i = 1;i < 7; i++){
  frames[frames.length]= fs.readFileSync(`./frame/${i}.txt`,'utf8');//``反引号为模板字符串
}
var fps = 10;
// 当前显示哪一帧
var current = 0;
var render = () => {

  // 将控制台清空
  process.stdout.write('\033[2J');
  process.stdout.write('\033[0f');

  // 输出新的内容
  if (current === frames.length) { current = 0; }
  process.stdout.write(frames[current++]);
}

setInterval(render, 1000 / fps);
//

// var size = process.stdout.getWindowSize();
// console.log(size);
