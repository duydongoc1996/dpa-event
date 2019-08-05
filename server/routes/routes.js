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
const ScheduleHandler = require('../core/schedule')
const AdminHandler = require('../core/admin');

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
  app.get('/api', middleware.checkToken, (req, res) => {
    res.json({
      success: true,
      message: 'Authenticated'
    })
  })
  app.post('/api/login', handlers.login)
  app.post('/api/register', middleware.checkToken, AdminHandler.register)

  // Sponsor Routes
  app.post('/api/sponsor/create', middleware.uploadImage, SponsorHandler.createSponsor)
  app.post('/api/sponsor/status', middleware.checkToken, SponsorHandler.updateStatus)
  app.param(['sponsorId'], (req, res, next, value) => {
    req.body.sponsorId = value
    next()
  })
  app.get('/api/sponsor/:sponsorId', SponsorHandler.getSponsor)
  app.get('/api/sponsors', SponsorHandler.getAllSponsors)

  // Judges Routes
  app.get('/api/judges', JudgesHandler.getAllJudges)
  app.param(['judgeId'], (req, res, next, value) => {
    req.body.judgeId = value
    next()
  })
  app.get('/api/judge/:judgeId', JudgesHandler.getJudgeInfo)
  app.post('/api/judge/create', middleware.checkToken, middleware.uploadImage, JudgesHandler.createJudge)
  app.post('/api/judge/remove/:judgeId', middleware.checkToken, JudgesHandler.removeJudge)

  // Booking Routes
  app.post('/api/code', CodeHandler.validateCode)
  app.post('/api/code/import', middleware.checkToken, CodeHandler.importCode)
  app.post('/api/booking', BookingHandler.booking)
  app.param(['attendeeId'], (req, res, next, value) => {
    req.body.attendeeId = value
    next()
  })
  app.get('/api/attendees', middleware.checkToken, BookingHandler.getAllAttendee)
  app.get('/api/attendee/:attendeeId', middleware.checkToken, BookingHandler.getAttendee)
  app.get('/api/booking/resend/:attendeeId', BookingHandler.resendEmail)

  // Partners Routes
  app.get('/api/partners', PartnerHandler.getAllPartners)
  app.param(['partnerId'], (req, res, next, value) => {
    req.body.partnerId = value
    next()
  })
  app.get('/api/partner/:partnerId', PartnerHandler.getPartner)
  app.post('/api/partner/create', middleware.checkToken, middleware.uploadImage, PartnerHandler.createPartner)
  app.post('/api/partner/remove/:partnerId', middleware.checkToken, PartnerHandler.removePartner)

  // Nominate Routes
  app.post('/api/nominate/create', middleware.uploadImage, NominateHandler.createNominate)
  app.get('/api/nominate/categories', NominateHandler.getAllAwardCategory)
  app.param(['categoryId'], (req,res,next,value) => {
    req.body.categoryId = value
    next()
  })
  app.post('/api/nominate/category/create', middleware.checkToken, NominateHandler.createAwardCategory)
  app.post('/api/nominate/category/remove/:categoryId', middleware.checkToken, NominateHandler.deleteAwardCategory)
  app.get('/api/nominate/nominees', middleware.checkToken, NominateHandler.getAllNominee)

  //Schedule
  app.get('/api/schedules', ScheduleHandler.getAllSchedule)
  app.post('//apischedule', middleware.checkToken, ScheduleHandler.createSchedule)
  app.param(['scheduleId'], (req,res,next,value) => {
    req.body.scheduleId = value
    next()
  })
  app.post('/api/schedule/remove/:scheduleId', middleware.checkToken, ScheduleHandler.deleteSchedule)
  app.post('/api/schedule/order/:scheduleId', middleware.checkToken, ScheduleHandler.orderSchedule)
}
