const mysql = require('../store/MySQLService')

module.exports = class Booking {
  /**
   * Get all attendee in DB
   */
  static async getAllAttendees() {
    return await mysql.promise.query(`
      SELECT * FROM attendee
    `, []).then(([rows, fields]) => {
      return rows
    }).catch((err) => {
      return {
        success: false,
        message: err
      }
    })
  }

  /**
   * Get attendee by Id
   * @param {String} attendeeId
   */
  static async getAttendee(attendeeId) {
    return await mysql.promise.query(`
      SELECT * FROM attendee WHERE id = ?
    `, [attendeeId])
      .then(([rows, fields]) => {
        return (rows.length > 0) ? rows[0] : {}
      })
      .catch((err) => {
        return {
          success: false,
          message: err
        }
      })
  }

  /**
   * Create attendee record in DB
   * @param {Object} attendee
   */
  static async createAttendee(attendee) {
    return await mysql.promise.query(`
      INSERT INTO attendee(
        code,
        prefix,
        first_name,
        last_name,
        company_name,
        job_title,
        nationality,
        email,
        phone
      ) VALUES (
        ?,?,?,?,?,?,?,?,?
      )
    `, [
      attendee.code,
      attendee.prefix,
      attendee.firstName,
      attendee.lastName,
      attendee.companyName,
      attendee.jobTitle,
      attendee.nationality,
      attendee.email,
      attendee.phone
    ]).then(([rows, fields]) => {
      return {
        success: true,
        message: 'Attendee created successful',
        attendeeId: rows.insertId
      }
    }).catch((err) => {
      return {
        success: false,
        message: err
      }
    })
  }
}
