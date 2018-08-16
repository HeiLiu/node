# node 服务器端开发框架  

express 利用callback 处理异步  
koa  egg 利用async await 处理异步  

## 单点入口 
 负责 App 的实例化 + listen + 通过路由分发服务器资源  

## MVC  
   router
    => controller 控制权 -> view  
    从 view 端提交数据(post || get) => controller -> model  
  
  /login  匹配路由  
    controller login.js  
              - login.ejs
              - form 提交数据 

