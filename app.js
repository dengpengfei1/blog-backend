const fs = require('fs')
const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const history = require('connect-history-api-fallback')

const app = express()

// 注册路由
fs.readdir(path.resolve(__dirname, 'router'), (err, files) => {
  if (err) throw err
  files.forEach(name => {
    console.log(path.resolve('./router', name));
    app.use(require(path.resolve('./router', name)))
  })
})

//这句代码需要在express.static上面, 实现 vue-router 的 mode history
app.use(history())

// 获取请求体中的数据
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json())
app.use('/node_modules', express.static('./node_modules'))
app.use(express.static('./dist'))

app.listen(3000, '127.0.0.2', () => {
  console.log('http://127.0.0.2:3000')
})