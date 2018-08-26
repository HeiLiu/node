+ 01 = process.stdout 返单引号
+ 02 = render 动画
+ 03 = 表情切换
+ 04 = 放开我动画

---
es2015

+ 模板字符串
    - var message = 'hello';
        console.log(`${message} world`);
可以随意的进行换行回车


---
+ node 约定
对于一个函数如果需要定义回调函数：
    - 回调函数一定做为参数的最后一个参数出现
    - 回调函数的第一个参数默认接收错误信息，第二个参数才是真正的回调数据(便于外界获取调用的错误情况)
    - 强调错误优先因为后面的操作大多都是一步的操作方式 ，无法通过try catch 捕获异常

---
+ 模块的定义
    - 一个合格的模块应该是有导出成员的 否则就失去了模块的意义
    - 模块内部是一个独立的作用域

    + 导出方式：
     exports.name= value;
     module.exports = {name: value};

---
+ Path路径模块
    - path.join()对所有参数进行路径拼接
    - path.dirname('04.js');
        生成04.js所在的路径 不含04.js
    - path.basename('C:\\dev\\node\\04.js');
    获取文件名04.js部分，加第二个参数js 去掉文件后缀