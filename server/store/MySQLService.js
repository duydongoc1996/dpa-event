const mysql = require('mysql2')
// Load config
const config = require('../config/app')

/**
 * Mysql
 */
const pool = mysql.createPool(config.mysql)
const promise = pool.promise()

module.exports = {
  pool: pool,
  promise: promise
}
