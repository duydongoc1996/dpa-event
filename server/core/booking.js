const Code = require('../model/Code')
const Mailing = require('../model/Mailing')
const Booking = require('../model/Booking')

module.exports = class BookingHandler {
  static booking(req, res) {
    (async () => {
      // validate
      const attendee = req.body
      if (!attendee.code) return Promise.reject('Missing invitation code')
      if (!attendee.prefix) return Promise.reject('Missing prefix')
      if (!attendee.firstName) return Promise.reject('Missing first name')
      if (!attendee.lastName) return Promise.reject('Missing last name')
      if (!attendee.companyName) return Promise.reject('Missing company name')
      if (!attendee.jobTitle) return Promise.reject('Missing job title')
      if (!attendee.nationality) return Promise.reject('Missing nationality')
      if (!attendee.email) return Promise.reject('Missing email')
      if (!attendee.phone) return Promise.reject('Missing phone number')
      // ok, validate code
      const validateCode = await Code.validateCode(attendee.code)
      if (!validateCode.success) return Promise.reject(validateCode.message)

      // send mail to attendee
      Mailing.sendMail(attendee.email, attendee.firstName + attendee.lastName, attendee.code)

      // ok, use code
      const useCode = await Code.useCode(attendee.code)
      if (!useCode.success) return Promise.reject(useCode.message)

      // create attendee
      const createAttendee = await Booking.createAttendee(attendee)
      if (!createAttendee.success) return Promise.reject(createAttendee.message)

      // response
      res.json(createAttendee)
      res.end()
    })()
      .catch((err) => {
        res.json({
          success: false,
          message: err
        })
        res.end()
      })
  }

  static getAllAttendee(req, res) {
    Booking.getAllAttendees()
      .then((data) => {
        res.json(data)
      })
      .catch((err) => {
        return {
          success: false,
          message: err
        }
      })
  }

  static getAttendee(req, res) {
    if (!req.body.attendeeId) {
      return res.json({
        success: false,
        message: 'Missing attendee id'
      })
    }
    Booking.getAttendee(req.body.attendeeId)
      .then((data) => {
        res.json(data)
      })
      .catch((err) => {
        return {
          success: false,
          message: err
        }
      })
  }

  static resendEmail(req, res) {
    (async () => {
      if (!req.body.attendeeId) return Promise.reject('Missing attendee id')

      const attendee = await Booking.getAttendee(req.body.attendeeId)
      if (attendee.email == null) return Promise.reject('Can not find email address')

      // ok,send mail
      const sendMail = await Mailing.sendMail(attendee.email, attendee.firstName + attendee.lastName, attendee.code)
      if (!sendMail.success) return Promise.reject(sendMail.message)
      // response
      res.json(sendMail)
    })()
      .catch((err) => {
        res.json({
          success: false,
          message: err
        })
      })
  }
}
