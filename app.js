const express = require('express')
const indexRouter = require('./router/indexRouter')

const app = express()

app.use('/node_modules', express.static('./node_modules'))
app.use(indexRouter)

app.listen(3000, '127.0.0.2', () => {
  console.log('http://127.0.0.2:3000')
})