const Schedule = require('../model/Schedule');

module.exports = class ScheduleHandler {
  static getAllSchedule(req,res) {
    (async ()=> {
      const data = await Schedule.getAllSchedule();
      if (data.success === false) return Promise.reject(data.message);
      res.json(data);
    })()
      .catch(err=>{
        res.json({
          success: false,
          message: err
        })
      });
  }

  static createSchedule(req,res) {
    (async ()=>{
      const data = req.body;
      if (!data.event) return Promise.reject('Missing event');
      if (!data.title) return Promise.reject('Missing title');
      if (!data.speaker) return Promise.reject('Missing speaker');
      if (!data.time) return Promise.reject('Missing time');

      const create = await Schedule.createSchedule(data);
      if (create.success === false) return Promise.reject(create.message);
      res.json(create);
    })()
    .catch(err=>{
      res.json({
        success: false,
        message: err
      })
    });
  }

  static deleteSchedule(req,res) {
    (async ()=> {
      if (!req.body.scheduleId) return Promise.reject('Missing id');
      const del = await Schedule.deleteSchedule(req.body.scheduleId);
      if (del.success === false) return Promise.reject(del.message);
      res.json(del);
    })()
      .catch(err=>{
        res.json({
          success: false,
          message: err
        })
      });
  }

  static orderSchedule(req,res) {
    (async ()=> {
      if (!req.body.scheduleId) return Promise.reject('Missing id');
      if (!req.body.order) return Promise.reject('Missing order');
      const set = await Schedule.setOrder(parseInt(req.body.scheduleId), parseInt(req.body.order));
      if (set.success === false) return Promise.reject(set.message);
      res.json(set);
    })()
      .catch(err=>{
        res.json({
          success: false,
          message: err
        })
      });
  }
}