const mysql = require('../store/MySQLService')

module.exports = class Partner {
  /**
   * Get all partners
   */
  static async getAllPartners() {
    return await mysql.promise.query(`
      SELECT * FROM partners
    `, [])
      .then(([rows, fields]) => {
        return rows
      })
      .catch((err) => {
        return {
          success: false,
          message: err
        }
      })
  }

  /**
   * Get partner info by id
   * @param {Integer} partnerId
   */
  static async getPartner(partnerId) {
    return await mysql.promise.query(`
      SELECT * FROM partners WHERE id = ?
    `, [partnerId])
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
   * Create partner in DB
   * @param {Object} partner Partner info
   */
  static async createPartner(partner) {
    return await mysql.promise.query(`
      INSERT INTO partners(
        company_name,
        logo,
        company_website
      ) VALUES (?,?,?)
    `, [
      partner.company_name,
      partner.logo,
      partner.companyWebsite
    ])
      .then(([rows, fields]) => {
        return (rows.affectedRows > 0) ? {
          success: true,
          message: 'Partner created successful',
          partnerId: rows.insertId
        } : {
          success: false,
          message: 'Can not create partner'
        }
      })
      .catch((err) => {
        return {
          success: false,
          message: err
        }
      })
  }

  /**
   * Remove partner by Id
   * @param {Integer} partnerId
   */
  static async removePartner(partnerId) {
    return await mysql.promise.query(`
      DELETE FROM partners WHERE id = ?
    `, [partnerId])
      .then(([rows, fields]) => {
        return {
          success: true,
          message: 'Partner removed successful'
        }
      })
      .catch((err) => {
        return {
          success: false,
          message: err
        }
      })
  }

  static async updatePartner(data) {
    return await mysql.promise.query(`
      UPDATE partners SET
        company_name = ?,
        company_website = ?
      WHERE id = ?
    `, [
      data.company_name,
      data.company_website,
      data.id
    ])
      .then(([rows,fields])=>{
        return {
          success: true,
          message: 'Update partner successful'
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
