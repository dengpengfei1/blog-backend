module.exports = {
  getUserCount: 'select count(*) from user where user_name=?',
  getUserInfo: 'select * from user where user_name=? and password=?',
  registerUser: 'insert into user (user_name, password) values (?, ?)',
}