const express = require('express')
const router = express.Router()

const indexCtrl = require('../controller/indexCtrl')
router.get('/', (req, res) => {
  indexCtrl.showIndexPage(req,res)
})
module.exports = router
