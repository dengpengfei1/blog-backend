const express = require('express')
const router = express.Router()

const controller = require('../controller/loginCtrl')
router.post('/blog/register', (req, res) => {
  controller.registerUser(req, res)
})
module.exports = router