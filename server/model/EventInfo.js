const mysql = require('../store/MySQLService')

module.exports = class EventInfo {

  static async get() {
    return await mysql.promise.query(`
      SELECT * FROM event_info ORDER BY id DESC LIMIT 1
    `,[])
      .then(([rows,fields])=>{
        return (rows.length > 0) ? rows[0] : Promise.reject('No information');
      })
      .catch(err=>{
        return {
          success: false,
          message: err
        }
      })
  }


  static async create(info) {
    console.log('ok')
    return await mysql.promise.query(`
      INSERT INTO event_info(
        title,
        date,
        content
      ) VALUES (?,?,?)
    `,[info.title, info.date, info.content])
      .then(([rows,fields])=>{
        return {
          success: true,
          message: 'Update event information success'
        }
      })
      .catch(err=>{
        return {
          success: false,
          message: err
        }
      })
  }
}