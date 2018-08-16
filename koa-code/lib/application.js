// buffer 二进制流
// node模块大部分支持订阅发布者模式 天生具有listen 的能力
const Emmiter = require('events')
const http = require('http')

module.exports = class Application extends Emmiter {
  // 借助了node的原生模块 events 
  constructor () {
    super() // 执行一下 events 的构造执行一下
    // 中间件数组 可以加元素， 有顺序 中间件是函数的一个集合
    this.middleware = []
  }
  // 中间件处理函数
  use (fn) {
    if (typeof fn !== 'function') {
      throw new TypeError('middleware must be a function')
    }
    this.middleware.push(fn)
    return this
  }
  callback () {
    this.emit('error')
    console.log('callback for middleWare')
  }
  listen (...args) {
    this.on('error', this.onerror)
    
    const server = http.createServer(this.callback())
    return server.listen(...args)
  }
  onerror () {
    console.log('我是错误处理函数，你现在出错了')
  }
}

// .listen 和 addEventListener 是一个性质
