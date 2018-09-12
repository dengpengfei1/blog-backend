const model = require('../model/index')

module.exports = {
  registerUser (req, res) {

  },
  login (req, res) {
    model.findUser(req.body)
  }
}