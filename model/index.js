// 导入MySQL模块
const mysql = require('mysql')
const sqlStr = require('./sql')

// 创建一个数据库连接
let connection = mysql.createConnection({
  user: 'root',
  password: 'root',
  database: 'blog'
})

// 连接数据库
connection.connect()

module.exports = {
  /**
   * 
   * 这里的err 和 res 需要用 callback 接收
   * model 中只是数据的 crud， 不涉及业务逻辑
   * 
   * results.affectedRows === 1 表示影响到的行有一个， 代表注册成功，否则注册失败
   * 
   */
  findUser(user_data, res) {
    connection.query(sqlStr.getUserCount, [user_data.name], (err, results, fields) => {
      if (err) throw err
      if (results[0]['count(*)'] === 0) {
        return res.send({
          errCode: 10000,
          errMsg: '用户不存在',
          data: {},
        })
      }
      connection.query(sqlStr.getUserInfo, [user_data.name, user_data.pass], (err, results, fields) => {
        if (err) throw err
        if (results.length === 0) {
          return res.send({
            errCode: 10002,
            errMsg: '密码或账号错误',
            data: {},
          })
        }
        res.send({
          errCode: 0,
          errMsg: '登陆成功',
          data: {},
        })
      })
    })
  },
  addUser(user_data, res) {
    connection.query(sqlStr.getUserCount, [user_data.name], (err, results, fields) => {
      if (err) throw err
      if (results[0]['count(*)'] !== 0) {
        return res.send({
          errCode: 10000,
          errMsg: '用户名重复',
          data: {},
        })
      }
      connection.query(sqlStr.registerUser, [user_data.name, user_data.pass], (err, results, fileds) => {
        if (err) throw err
        res.send({
          errCode: 0,
          errMsg: '注册成功',
          data: {},
        })
      })
    })
  }
}