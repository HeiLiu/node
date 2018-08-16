const path = require('path')
const express = require('express')
const session = require('express-session')
// session 存储方式
      // 1. 内存 
      // 2. mongodb 放在数据库里
// 函数柯里化
const MongoStore = require('connect-mongo')(session);
const flash = require('connect-flash')
const config = require('config-lite')(__dirname)
const app = express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// 静态资源服务器 单独的提供对静态资源  public/ 分布式的 服务器集群 
// 启用一个express静态资源服务器
app.use(express.static(path.join(__dirname, 'public')))

app.listen(config.port, () => {
  console.log(`listen on port ${config.port}`)
})
