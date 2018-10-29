const model = require('../model/index')

module.exports = {
  registerUser (req, res) {
    model.addUser(req.body, res)
  },
  login (req, res) {
    model.findUser(req.body, res)
  }
}