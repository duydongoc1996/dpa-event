// Dependencies
const express = require('express')
const app = express();
const log = require('log4js').getLogger()
const morgan = require('morgan')
const cors = require('cors')
var ip = require("ip");
process.env.address = ip.address();
process.env.port = 8000;
process.env.baseUrl = 'http://' + process.env.address + ":" + process.env.port;
const port = process.env.port;
console.log(process.env.baseUrl)

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
