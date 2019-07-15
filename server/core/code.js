const Code = require('../model/Code')

module.exports = class CodeHandler {
  static validateCode(req, res) {
    (async () => {
      // validate
      if (!req.body.code) return Promise.reject('Missing code')
      const code = req.body.code.trim()
      // ok
      res.json(await Code.validateCode(code))
      res.end()
    })()
      .catch((err) => {
        res.json({
          success: false,
          message: err
        })
        res.end()
      })
  }

  static importCode(req, res) {
    // validate
    (async () => {
      if (!req.body.code) return Promise.reject('Missing code')

      res.json(await Code.importCode({
        code: req.body.code,
        receiverEmail: req.body.receiverEmail
      }))
      res.end()
    })()
      .catch((err) => {
        res.json({
          success: false,
          message: err
        })
        res.end()
      })
  }
}
