const bcrypt = require('bcrypt')
const mysql = require('../store/MySQLService')
const saltRounds = 10

module.exports = class Admin {
  /**
   * Register a new Admin user
   * @param {String} username
   * @param {String} password
   * @param {String} fullName
   * @return { success, message }
   */
  static async register(username, password, fullName) {
    username = username.trim()
    password = password.trim()
    // Check username existed
    let usernameExist;
    [usernameExist] = await mysql.promise.query(`
      SELECT (EXISTS( SELECT id FROM admin WHERE username = ? )) as "check"`,
    [username]
    )
    if (usernameExist[0].check) {
      return {
        success: false,
        message: 'Username existed'
      }
    }

    // Create Hash password
    return await bcrypt.hash(password, saltRounds).then(async (hash) => {
      // save admin in database
      return await mysql.promise.query(`
        INSERT INTO admin(username,password,full_name) VALUES (?,?,?)
      `, [
        username,
        hash,
        fullName
      ]).then(([rows, fields]) => {
        return {
          success: true,
          message: 'Admin created successful'
        }
      }).catch((error) => {
        return {
          success: false,
          message: 'Error: ' + error
        }
      })
    })
  }

  /**
   * Check username and password to validate Admin login
   * @param {String} username
   * @param {String} password
   */
  static async validate(username, password) {
    try {
      username = username.trim()
      password = password.trim()
      // Get password in DB
      return await mysql.promise.query(`
        SELECT password FROM admin WHERE username = ?
      `, [
        username
      ])
        .then(([rows, fields]) => {
          if (rows.length > 0) return rows[0].password
          else return Promise.reject('Username is not existed')
        })
        // Compare
        .then(store_password => bcrypt.compare(password, store_password))
        .then((res) => {
          if (res) {
            return {
              success: true,
              message: 'Validate successful'
            }
          } else return Promise.reject('Incorrect password')
        })
    } catch (err) {
      return {
        success: false,
        message: err
      }
    }
  }
}
