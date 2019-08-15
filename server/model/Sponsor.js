//
const mysql = require('../store/MySQLService')

module.exports = class Sponsor {
  /**
   * Get all sponsor info
   */
  static async getAllSponsor() {
    return await mysql.promise.query(`
      SELECT * FROM sponsor
    `, [])
      .then(([rows, fields]) => {
        return rows
      })
      .catch((err) => {
        return {
          success: false,
          message: err.message
        }
      })
  }

  /**
   * Get sponsor info by id
   * @param {Integer} sponsorId
   */
  static async getSponsor(sponsorId) {
    if (typeof sponsorId === 'undefined') return {}

    return await mysql.promise.query(`
      SELECT * FROM sponsor WHERE id = ? LIMIT 1
    `, [sponsorId])
      .then(([rows, fields]) => {
        if (rows.length > 0) return rows[0]
        return {}
      })
      .catch((err) => {
        return {
          success: false,
          message: err.message
        }
      })
  }

  /**
   * Insert sponsor into Database
   */
  static async createSponsor(sponsor) {
    return await mysql.promise.query(`
      INSERT INTO sponsor(
        company_name,
        full_name,
        website_address,
        email,
        telegram_id,
        job_title,
        description,
        logo,
        type,
        timestamp
      ) VALUES (
        ?,?,?,?,?,?,?,?,?,?
      )`, [
      sponsor.company_name,
      sponsor.fullName,
      sponsor.websiteAddress,
      sponsor.email,
      sponsor.telegramId,
      sponsor.jobTitle,
      sponsor.description,
      sponsor.logo,
      sponsor.type,
      +new Date()
    ]
    )
      .then(([rows, fields]) => {
        return {
          success: true,
          message: 'Sponsor was created successfuly',
          sponsorId: rows.insertId
        }
      })
      .catch((err) => {
        return {
          success: false,
          message: err.message
        }
      })
  }

  /**
   * Change payment status to True
   * @param {Integer} id
   */
  static async paymentSuccess(id) {
    return await mysql.promise.query(`
      UPDATE sponsor
      SET
        payment = ?,
        status = ?
      WHERE
        id = ?
    `, [
      true,
      true,
      this.id
    ]).then(([rows, fields]) => {
      return {
        success: true,
        message: 'Update payment status success'
      }
    }).catch((err) => {
      return {
        success: false,
        message: err.message
      }
    })
  }

  static async updateStatus(id, status) {
    return await mysql.promise.query(`
      UPDATE sponsor
      SET
        status = ?
      WHERE
        id = ?
    `, [
      status,
      id
    ]).then(([rows, fields]) => {
      return {
        success: true,
        message: 'Update status success'
      }
    }).catch((err) => {
      return {
        success: false,
        message: err.message
      }
    })
  }

  static async updateSponsor(data) {
    return await mysql.promise.query(`
      UPDATE sponsor SET
        company_name = ?,
        full_name = ?,
        website_address = ?,
        email = ?,
        telegram_id = ?,
        job_title = ?,
        description = ?,
        type = ?,
        timestamp = ?
    `,[
      data.company_name,
      data.full_name,
      data.website_address,
      data.email,
      data.telegram_id,
      data.job_title,
      data.description,
      data.type,
      +new Date()
    ]).then(([rows, fields]) => {
      return {
        success: true,
        message: 'Update sponsor success'
      }
    }).catch((err) => {
      return {
        success: false,
        message: err.message
      }
    })
  }

  static async deleteSponsor(id) {
    return await mysql.promise.query(`
      DELETE FROM sponsor WHERE id = ?
    `, [id])
      .then(([rows, fields]) => {
        return {
          success: true,
          message: 'Delete sponsor success'
        }
      }).catch((err) => {
        return {
          success: false,
          message: err.message
        }
      })
  }
}
