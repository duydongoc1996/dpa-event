const Admin = require('../model/Admin');

module.exports = class AdminHandler {

  static register(req,res) {
    (async ()=>{
      const data = req.body;
      if (!data.username) return Promise.reject('Missing username');
      if (!data.password) return Promise.reject('Missing password');

      res.json(await Admin.register(data.username,data.password,'Admin'));
    })()
    .catch(err=>{
      res.json({
        success: false,
        message: err
      })
    })
  }
}