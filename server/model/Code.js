const mysql = require('../store/MySQLService')

module.exports = class Code {
  /**
   * Import code in to DB
   * @param {Object} codeInfo
   */
  static async importCode(codeInfo) {
    // check if code existed
    const existed = await this.validateCode(codeInfo.code)

    if ((existed.success) || (existed.message != 'Invalid invitation code')) {
      return {
        success: false,
        message: 'Invitation code existed'
      }
    }
    return await mysql.promise.query(`
      INSERT INTO invitation_code(
        code,
        receiver_email
      ) VALUES (?,?)
    `, [
      codeInfo.code,
      codeInfo.receiverEmail
    ]).then(([rows, fields]) => {
      return {
        success: true,
        message: 'Code imported successful',
        codeId: rows.insertId
      }
    }).catch((err) => {
      return {
        success: false,
        message: err.message
      }
    })
  }

  /**
   * Validate and Use the invitation code
   * @param {String} code
   * @return {Object} | The status of the validation code
   */
  static async useCode(code) {
    return await mysql.promise.query(`
      SELECT * FROM invitation_code WHERE code = ? LIMIT 1
    `, [code])
      .then(async ([rows, fields]) => {
        if (rows.length == 0) {
          return {
            success: false,
            message: 'Invalid invitation code'
          }
        }
        if (rows[0].used) {
          return {
            success: false,
            message: 'Invitation code was used'
          }
        }
        return await mysql.promise.query(`
          UPDATE invitation_code SET used = ? WHERE code = ?
        `, [true, code])
          .then((row, field) => {
            if (row[0].changedRows > 0) {
              return {
                success: true,
                message: 'Invitation code is ready'
              }
            }
            return {
              success: false,
              message: 'Invitation code can not use'
            }
          })
          .catch((err) => {
            return {
              success: false,
              message: err.message
            }
          })
      })
  }

  static async validateCode(code) {
    return await mysql.promise.query(`
      SELECT * FROM invitation_code WHERE code = ? LIMIT 1
    `, [code])
      .then(async ([rows, fields]) => {
        if (rows.length == 0) {
          return {
            success: false,
            message: 'Invalid invitation code'
          }
        }
        if (rows[0].used) {
          return {
            success: false,
            message: 'Invitation code was used'
          }
        }
        return {
          success: true,
          message: 'Invitation code is ready'
        }
      })
      .catch((err) => {
        return {
          success: false,
          message: err.message
        }
      })
  }
}
