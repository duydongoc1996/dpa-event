const Partner = require('../model/Partner')
const FileService = require('../store/FileService')

module.exports = class PartnerHandler {
  static getAllPartners(req, res) {
    (async () => {
      res.json(await Partner.getAllPartners())
      res.end()
    })()
      .catch((err) => {
        res.json({
          success: false,
          message: err
        })
      })
  }

  static getPartner(req, res) {
    (async () => {
      // validate
      if (!req.body.partnerId) return Promise.reject('Missing partner id')
      // ok
      res.json(await Partner.getPartner(req.body.partnerId))
      res.end()
    })()
      .catch((err) => {
        res.json({
          success: false,
          message: err
        })
      })
  }

  static createPartner(req, res) {
    (async () => {
      const partner = req.body
      // validate
      if (!req.body.company_name) return Promise.reject('Missing company name')
      if (Object.keys(req.files).length == 0) return Promise.reject('Missing avatar')
      // Handle upload image
      partner.logo = req.body.fileName
      // --end handle upload image
      // ok
      res.json(await Partner.createPartner(partner))
      res.end()
    })()
      .catch((err) => {
        res.json({
          success: false,
          message: err
        })
      })
  }

  static removePartner(req, res) {
    let imageName = '';
    (async () => {
      // validate
      if (!req.body.partnerId) return Promise.reject('Missing partner id')

      // get partner info
      const info = await Partner.getPartner(req.body.partnerId)
      imageName = info.logo
      // ok
      res.json(await Partner.removePartner(req.body.partnerId))
    })()
      .catch((err) => {
        res.json({
          success: false,
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

  static updatePartner(req,res) {
    (async ()=>{
      const data = req.body;
      if (data.company_name == null) return Promise.reject('Missing company name');
      if (data.id == null) return Promise.reject('Missing id')
      //ok
      res.json(await Partner.updatePartner(data))
    })()
      .catch((err) => {
        res.json({
          success: false,
          message: err
        })
      })
  }
}
