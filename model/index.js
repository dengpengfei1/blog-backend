// 导入MySQL模块
const mysql = require('mysql')

// 创建一个数据库连接
let connection = mysql.createConnection({
    user: 'root',
    password: 'root',
    database: 'blog'
})

// 连接数据库
connection.connect()

module.exports = {
  findUser (userdata) {
    let user_data = userdata.data
    console.log(user_data)
    connection.query(`select * from user where user_name='${user_data.name}' and password='${user_data.pass}'`, (err, results, fileds) => {
      if (err) throw err
      console.log(results)
    })
    // connection.query(`insert into user (user_name, password) values (?, ?)`, [user_data.name, user_data.pass], (err, results, fileds) => {
    //   if (err) throw err
    // })
  },
  addUser () {

  }
}
