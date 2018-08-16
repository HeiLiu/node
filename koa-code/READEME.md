## koa 的原理  
继承自事件对象 events Emmiter 获得其中的 .on() .emmit()
koa 基于http 模块 createserver 提供一个 web server 服务 
伺服状态
用户访问的时候
转变为一个状态 => 去调用createserver时候传入的callback
在listen之前 当use() 一个中间件的时候 会将该函数push进中间件数组
每次用户进来的时候 认为是一个event
用户再次进来的时候 listen 会将中间件数组中的方法(数组保障了中间件执行的顺序) 依次执行一遍

中间件每一个一般是个函数， 一般包含一些异步的处理

