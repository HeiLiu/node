var frames = [];
var fps = 1000/20;
frames[frames.length]=`
1
`;
frames[frames.length]=`
2
`;
frames[frames.length]=`
3
`;
frames[frames.length]=`
4
`;
var current = 0;
var render = () =>{
//先将控制台清屏
    // process.stdout.write('\033[0f');
    // process.stdout.write('\033[2J');
  if(current  === frames.length){
       current = 0;
 }
       process.stdout.write(frames[current++]);


//显示内容

};
setInterval(render,fps);