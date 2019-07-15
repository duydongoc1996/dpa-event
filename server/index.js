// Dependencies
const express = require('express')
const app = express()
const port = 8000
const log = require('log4js').getLogger()
const morgan = require('morgan')
const cors = require('cors')

// Service
// const Service = require('./services/index');
// Load config
const config = require('./config/app')

/**
 * Log
 */
log.level = 'debug'
app.use(morgan('combined'))

/**
 * Routes
 */
app.use(cors())
app.use('/static', express.static('upload'));
(require('./routes/routes'))(app)

/**
 * Start app
 */
log.debug('Server start on port ', port)
app.listen(port)
