const express = require('express')
const bodyParser = require('body-parser')

const indexRouter = require('./router/indexRouter')
const loginRouter = require('./router/loginRouter')

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use('/node_modules', express.static('./node_modules'))
app.use(indexRouter)
app.use(loginRouter)

app.listen(3000, '127.0.0.2', () => {
  console.log('http://127.0.0.2:3000')
})