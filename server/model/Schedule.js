const mysql = require('../store/MySQLService')

module.exports = class Schedule {

  static async getAllSchedule() {
    return await mysql.promise.query(`
      SELECT * FROM schedule
    `, [])
      .then(([rows,fields])=>{
        return rows;
      })
      .catch(err=>{
        return {
          success: false,
          message: err.message
        }
      })
  }

  static async createSchedule(schedule) {
    return await mysql.promise.query(`
      INSERT INTO schedule (
        event,
        title,
        speaker,
        time
      ) VALUES (?,?,?,?)
    `, [
      schedule.event,
      schedule.title,
      schedule.speaker,
      schedule.time
    ])
      .then(([rows,fields])=>{
        return {
          success: true,
          message: 'Create schedule successful'
        }
      })
      .catch(err=>{
        return {
          success: false,
          message: err.message
        }
      })
  }

  static async deleteSchedule(id) {
    return await mysql.promise.query(`
      DELETE FROM schedule WHERE id = ?
    `,[id])
    .then(([rows,fields])=>{
      return {
        success: true,
        message: 'Delete schedule successful'
      }
    })
    .catch(err=>{
      return {
        success: false,
        message: err.message
      }
    })
  }

  static async setOrder(id,order) {
    return await mysql.promise.query("UPDATE schedule SET `order` = ? WHERE `id` = ?", [order, id])
    .then(([rows,fields])=>{
      return {
        success: true,
        message: 'Set schedule\'s order successful'
      }
    })
    .catch(err=>{
      return {
        success: false,
        message: err.message
      }
    })
  }
}