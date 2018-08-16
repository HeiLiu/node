const express = require('express')
const app = express()
const path = require('path')
const indexRouter = require('./routes/index')
const userRouter = require('./routes/user')

// 返回的是 html 设置模板路径 模板引擎 路由启动之前完成模板配置
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// 中间件 middlewares 数组 顺序， 从上到下， 用一组中间件（函数）来为用户提供服务
// 中间件可以是个函数 做一件事 第三方的中间件就是一些封装好了的函数模块
// next 转交控制权，让下一个中间件接着运行 res.end() 结束这次服务
app.use((req, res, next) => {
  console.log('1')
  next(new Error('haha')) // 往下扔 给下面的异常捕获
})
app.use((req, res, next) => {
  console.log('2')
  res.status(200).end()
  // next()
})

// 启用中间件 路由中间件 中间件 => 每一次用户在发送请求到请求完成之前 提供的服务(有顺序)
app.use('/', indexRouter)

app.use('/users', userRouter)
// 异常捕获,进行异常处理 发送出错是要展示给用户的消息 或者页面
app.use((err, req, res, next) => {
  console.log(err.stack)
  res.status(500).send('Somthing broke, on the way...')
})
app.listen(3000)

