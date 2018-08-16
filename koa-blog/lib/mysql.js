const mysql = require('mysql')
const config = require('../config/default.js')

// 创建一个连接池 创建一个链接
const pool = mysql.createPool({
  host: config.database.HOST,
  user: config.database.USERNAME,
  password: config.database.PASSWORD,
  database: config.database.DATABASE,
  port: config.database.PORT
})

function query (sql, values) {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        reject(err)
      } else {
        connection.query(sql, values, (err, rows) => {
          if (err) {
            reject(err)
          } else {
            resolve(rows)
          }
          // 释放跟数据库的连接
          connection.release()
        })
        
      }
    })
  })
}

// 准备默认的数据表 VARCHAR 0-255

let users = ` create table if not exists users(
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL COMMENT '用户名',
  pass VARCHAR(100) NOT NULL COMMENT '密码',
  avatar VARCHAR(100) NOT NULL COMMENT '头像',
  moment VARCHAR(100) NOT NULL COMMENT '注册时间',
  PRIMARY KEY (id)
)`

// TEXT(0) 文章字数不限
let posts = `create table if not exists posts(
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL COMMENT '文章作者',
  title TEXT(0) NOT NULL COMMENT '评论题目',
  content TEXT(0) NOT NULL COMMENT '评论内容',
  md TEXT(0) NOT NULL COMMENT 'markdown',
  uid VARCHAR(40) NOT NULL COMMENT '用户id',
  moment VARCHAR(100) NOT NULL COMMENT '发表时间',
  comments VARCHAR(200) NOT NULL DEFAULT '0',
  pv VARCHAR(40) NOT NULL DEFAULT '0' COMMENT '浏览量',
  avatar VARCHAR(100) NOT NULL COMMENT '用户头像',
  PRIMARY KEY(id)
 )`

 let comment = `create table if not exists comment(
   id INT NOT NULL AUTO_INCREMENT,
   name VARCHAR(100) NOT NULL COMMENT '用户名称',
   content TEXT(0) NOT NULL COMMENT '评论内容',
   moment VARCHAR(40) NOT NULL COMMENT '评论时间',
   postid VARCHAR(40) NOT NULL COMMENT '文章id',
   avatar VARCHAR(10) NOT NULL COMMENT '用户头像',
   PRIMARY KEY(id)
 )`

let createTable = (sql) => {
  return query(sql, [])
}

createTable(users)
createTable(posts)
createTable(comment)

exports.findDataByName = (name) => {
  let _sql = `select * from users where name = "${name}";`
  return query(_sql)
}

exports.insertData = (value) => {
  let _sql = `insert into users set name = ?,pass=?,avatar=?,moment=?;`
  return query(_sql, value)
}
