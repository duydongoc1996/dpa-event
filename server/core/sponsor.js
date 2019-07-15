const Sponsor = require('../model/Sponsor')

module.exports = class SponsorHandler {
  static createSponsor(req, res) {
    // Validate
    const sponsor = req.body;
    (async () => {
      if (!sponsor.companyName) return Promise.reject('Missing company name')
      if (!sponsor.fullName) return Promise.reject('Missing full name')
      if (!sponsor.websiteAddress) return Promise.reject('Missing website address')
      if (!sponsor.email) return Promise.reject('Missing email')
      if (!sponsor.telegramId) return Promise.reject('Missing telegram id')
      if (!sponsor.jobTitle) return Promise.reject('Missing job title')
      if (!sponsor.description) return Promise.reject('Missing description')
      if (!sponsor.type) return Promise.reject('Missing sponsorship type')

      // Handle upload image
      sponsor.logo = req.body.fileName
      // --end handle upload image

      // Ok
      const response = await Sponsor.createSponsor(sponsor)
      res.json(response)
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

  static updateStatus(req, res) {
    (async () => {
      // Validate
      if (!req.body.id) return Promise.reject('Missing sponsor id')
      if (!req.body.status) return Promise.reject('Missing sponsor status')
      // ok
      const response = await Sponsor.updateStatus(req.body.id, req.body.status)
      res.json(response)
      res.end()
    })()
      .catch((err) => {
        res.json({
          success: false,
          message: err
        })
      })
  }

  static getSponsor(req, res) {
    if (!req.body.sponsorId) {
      return res.json({
        success: false,
        message: 'Missing sponsor id'
      })
    }
    Sponsor.getSponsor(req.body.sponsorId)
      .then((data) => {
        res.json(data)
        res.end()
      })
      .catch((err) => {
        res.json(err)
        res.end()
      })
  }

  static getAllSponsors(req, res) {
    Sponsor.getAllSponsor()
      .then((data) => {
        res.json(data)
        res.end()
      })
      .catch((err) => {
        res.json(err)
        res.end()
      })
  }
}
