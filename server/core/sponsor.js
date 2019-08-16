const Sponsor = require('../model/Sponsor')

module.exports = class SponsorHandler {
  static createSponsor(req, res) {
    // Validate
    const sponsor = req.body;
    (async () => {
      if (sponsor.company_name == null || sponsor.company_name == 'null') return Promise.reject('Missing company name')
      if (sponsor.type == null || sponsor.type == 'null') return Promise.reject('Missing sponsorship type')
      console.log(sponsor)
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

  static updateSponsor(req,res) {
    (async ()=>{
      const data = req.body;
      console.log(req.body)
      if (data.company_name == null) return Promise.reject('Missing company name');
      if (data.type == null) return Promise.reject('Missing sponsorship category');
      if (data.id == null) return Promise.reject('Missing id');
      //ok
      res.json(await Sponsor.updateSponsor(data));
    })()
      .catch(err=>{
        res.json({
          success: false,
          message: err
        })
      });
  }

  static removeSponsor(req, res) {
    let imageName = '';
    (async () => {
      if (!req.body.sponsorId) return Promise.reject('Missing sponsor id')

      // get image name
      const info = await Sponsor.getSponsor(req.body.sponsorId)
      imageName = info.logo

      // Delete data
      const response = await Sponsor.deleteSponsor(req.body.sponsorId);
      res.json(response)
    })()
      .catch((err) => {
        res.json({
          success: true,
          message: err
        })
      })
      .finally(() => {
        // Delete image
        FileService.deleteImage(imageName)
          .catch((err) => {
            console.error(err)
          })
      })
  }
}
