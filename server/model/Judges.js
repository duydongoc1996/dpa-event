const mysql = require('../store/MySQLService')

module.exports = class Judges {
  /**
   * Return all judges with status
   * @param {Boolean} status
   */
  static async getAllJudges(status) {
    const str = (typeof status !== 'undefined') ? ' WHERE status = ?' : ''
    const query = 'SELECT * FROM judges ' + str
    return await mysql.promise.query(query, [status])
      .then(([rows, fields]) => {
        return rows
      }).catch((err) => {
        return err
      })
  }

  /**
   * Get judge by Id
   * @param {Integer} judgeId
   */
  static async getJudge(judgeId) {
    return await mysql.promise.query(`
      SELECt * FROM judges WHERE id = ?
    `, [judgeId])
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
   * Create new judge in DB
   * @param {Object} judge
   */
  static async createJudge(judge) {
    return await mysql.promise.query(`
      INSERT INTO judges(
        full_name,
        job_title,
        link_1,
        link_2,
        link_3,
        avatar
      ) VALUES (
        ?,?,?,?,?,?
      )
    `, [
      judge.fullName,
      judge.jobTitle,
      judge.link_1,
      judge.link_2,
      judge.link_3,
      judge.avatar
    ]).then(([rows, fields]) => {
      return {
        success: true,
        message: 'Create new Judge successful',
        judgeId: rows.insertId
      }
    }).catch((err) => {
      return {
        success: false,
        message: err
      }
    })
  }

  /**
   * Delete judge by Id
   * @param {Integer} judgeId
   */
  static async deleteJudge(judgeId) {
    return await mysql.promise.query(`
      DELETE FROM judges WHERE id = ?
    `, [judgeId])
      .then(([rows, fields]) => {
        return {
          success: true,
          message: 'Delete judge successful'
        }
      })
      .catch((err) => {
        return {
          success: false,
          message: err
        }
      })
  }
}
