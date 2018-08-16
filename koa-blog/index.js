const Koa = require('koa')
const path = require('path')
const ejs = require('ejs')
const session = require('koa-session-minimal')
const views = require('koa-views')
const MysqlStore = require('koa-mysql-session')
const router = require('koa-router')
const staticCache = require('koa-static-cache')
const bodyParser = require('koa-bodyparser')
const config = require('./config/default.js')

const app = new Koa()

const sessionMysqlConfig = {
  user: config.database.USERNAME,
  password: config.database.PASSWORD,
  database: config.database.DATABASE,
  host: config.database.HOST
}

app.use(session({
  key: 'USER_SID',
  store: new MysqlStore(sessionMysqlConfig)
}))

app.use(staticCache(path.join(__dirname, './public'), {
  dynamic: true
},{
  maxAge: 365*24*60*60
}))

app.use(staticCache(path.join(__dirname, './images'), {
  dynamic: true
},{
  maxAge: 365*24*60*60
}))

// 在路由之前配置模板
app.use(views(path.join(__dirname, 'views'), {
  extension: 'ejs'
}))
// 表单提交数据处理
app.use(bodyParser({
  formLimit: '1mb'
}))
// 作为路由中间件引入一下
app.use(require('./routes/posts.js').routes())
app.use(require('./routes/signup.js').routes())

app.listen(config.port)
console.log(`listening on port ${config.port}`)
