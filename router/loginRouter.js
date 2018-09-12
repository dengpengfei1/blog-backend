const express = require('express')
const router = express.Router()

const controller = require('../controller/loginCtrl')
router.post('/register', (req, res) => {
  controller.login(req, res)
})
module.exports = router
