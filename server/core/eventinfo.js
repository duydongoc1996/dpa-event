const EventInfo = require('../model/EventInfo');

module.exports = class EventInfoHandler {

  static get(req,res) {
    (async ()=> {
      res.json(await EventInfo.get())
    })()
  }

  static create(req,res) {
    (async ()=>{
      const data = req.body;
      if (data.title == null) return Promise.reject('Missing title');
      if (data.date == null) return Promise.reject('Missing date');
      if (data.content == null) return Promise.reject('Missing content');
      res.json(await EventInfo.create(data))
    })()
      .catch(err=>{
        res.json({
          success: false,
          message: err
        })
      })
  }
}