const jwt = require('jsonwebtoken')
const config = require('../config/app')
const Admin = require('../model/Admin')

module.exports = class HandlerGenerator {
  constructor() {}

  login(req, res) {
    const username = req.body.username
    const password = req.body.password
    // For the given username fetch user from DB
    Admin.validate(username, password)
      .then((result) => {
        if (result.success) {
          const token = jwt.sign(
            { username: username },
            config.secret,
            { expiresIn: '24h' /* expires in 24 hours */ }
          )
          // return the JWT token for the future API calls
          res.json({
            success: true,
            message: result.message,
            token: token
          })
        } else {
          // Failed
          res.json({
            success: false,
            message: result.message
          })
        }
      })
  }
}
