const HandlerGenerator = require('../auth/handler')
const handlers = new HandlerGenerator()
const middleware = require('../middleware/middleware')
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload')

// Load Handler
const NominateHandler = require('../core/nominate')
const SponsorHandler = require('../core/sponsor')
const JudgesHandler = require('../core/judges')
const CodeHandler = require('../core/code')
const BookingHandler = require('../core/booking')
const PartnerHandler = require('../core/partner')

module.exports = function (app) {
  // Middleware setup
  app.use(bodyParser.urlencoded({
    extended: true
  }))
  app.use(bodyParser.json())
  app.use(fileUpload({
    limits: { fileSize: 5 * 1024 * 1024 } // Set max file size upload = 5MB
  }))

  // Routes & Handlers AUTHORIZE
  app.get('/', (req, res) => {
    res.json({
      success: true,
      message: 'Index page'
    })
  })
  app.post('/login', handlers.login)

  // Sponsor Routes
  app.post('/sponsor/create', middleware.uploadImage, SponsorHandler.createSponsor)
  app.post('/sponsor/status', middleware.checkToken, SponsorHandler.updateStatus)
  app.param(['sponsorId'], (req, res, next, value) => {
    req.body.sponsorId = value
    next()
  })
  app.get('/sponsor/:sponsorId', SponsorHandler.getSponsor)
  app.get('/sponsors', SponsorHandler.getAllSponsors)

  // Judges Routes
  app.get('/judges', JudgesHandler.getAllJudges)
  app.param(['judgeId'], (req, res, next, value) => {
    req.body.judgeId = value
    next()
  })
  app.get('/judge/:judgeId', JudgesHandler.getJudgeInfo)
  app.post('/judge/create', middleware.checkToken, middleware.uploadImage, JudgesHandler.createJudge)
  app.post('/judge/remove/:judgeId', middleware.checkToken, JudgesHandler.removeJudge)

  // Booking Routes
  app.post('/code', CodeHandler.validateCode)
  app.post('/code/import', middleware.checkToken, CodeHandler.importCode)
  app.post('/booking', BookingHandler.booking)
  app.param(['attendeeId'], (req, res, next, value) => {
    req.body.attendeeId = value
    next()
  })
  app.get('/attendees', middleware.checkToken, BookingHandler.getAllAttendee)
  app.get('/attendee/:attendeeId', middleware.checkToken, BookingHandler.getAttendee)
  app.get('/booking/resend/:attendeeId', BookingHandler.resendEmail)

  // Partners Routes
  app.get('/partners', PartnerHandler.getAllPartners)
  app.param(['partnerId'], (req, res, next, value) => {
    req.body.partnerId = value
    next()
  })
  app.get('/partner/:partnerId', PartnerHandler.getPartner)
  app.post('/partner/create', middleware.checkToken, middleware.uploadImage, PartnerHandler.createPartner)
  app.post('/partner/remove/:partnerId', middleware.checkToken, PartnerHandler.removePartner)

  // Voting Routes
  app.post('/vote/create', middleware.uploadImage, NominateHandler.createNominate)
  app.get('/vote/categories', NominateHandler.getAllAwardCategory)
  app.post('/vote/category/create', middleware.checkToken, NominateHandler.createAwardCategory)
}
