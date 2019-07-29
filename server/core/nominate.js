const firebase = require('firebase-admin')
const Nominate = require('../model/Nominate')
const Mailing = require('../model/Mailing')
// const admin = firebase.initializeApp()

module.exports = class NominateHandler {
  static createNominate(req, res) {
    const data = req.body;

    (async () => {
      // Static validate
      // --Nominator
      if (!data.by_first_name) return Promise.reject('Missing nominator first name')
      if (!data.by_last_name) return Promise.reject('Missing nominator last name')
      if (!data.by_email) return Promise.reject('Missing nominator email')
      if (!data.by_phone_number) return Promise.reject('Missing nominator phone number')
      // --Nominee
      if (!data.for_self) return Promise.reject('Missing nominating myself')
      if (!data.for_prefix) return Promise.reject('Missing nominee prefix')
      if (!data.for_first_name) return Promise.reject('Missing nominee first name')
      if (!data.for_last_name) return Promise.reject('Missing nominee last name')
      if (!data.for_company_name) return Promise.reject('Missing nominee company name')
      if (!data.for_job_title) return Promise.reject('Missing nominee job title')
      if (!data.for_company_website) return Promise.reject('Missing nominee company website address')
      if (!data.for_phone_number) return Promise.reject('Missing nominee phone number')
      if (!data.for_email) return Promise.reject('Missing nominee email')
      if (!data.for_nationality) return Promise.reject('Missing nominee nationality')
      // --Voting
      if (!data.vote_award_category) return Promise.reject('Missing voting award category')
      if (!data.vote_about_speaker) return Promise.reject('Missing voting about speaker')
      if (!data.vote_links_media) return Promise.reject('Missing voting links media')
      
      // --//--Avatar
      if (!data.fileName) return Promise.reject('Missing avatar')

      if (!data.vote_is_know) return Promise.reject('Missing voting know personally')
      // if (!data.uid) return Promise.reject('Missing uid')

      // Prepare data
      const nominatorInfo = {
        phone: data.by_phone_number,
        first_name: data.by_first_name,
        last_name: data.by_last_name,
        email: data.by_email
      }
      const awardCategory = data.vote_award_category
      const voteInfo = {
        about_speaker: data.vote_about_speaker,
        links_media: data.vote_links_media,
        links_articles: data.vote_links_articles,
        avatar: data.avatar,
        is_know: !!((data.vote_is_know === true || data.vote_is_know == 'true')),
        self: !!((data.for_self === true || data.for_self == 'true')),
        prefix: data.for_prefix,
        first_name: data.for_first_name,
        last_name: data.for_last_name,
        company_name: data.for_company_name,
        company_website: data.for_company_website,
        job_title: data.for_job_title,
        phone: data.for_phone_number,
        email: data.for_email,
        nationality: data.for_nationality,
        avatar: data.fileName,
        other_category: data.other_category
      }

      // create nominator
      const nominator = await Nominate.createNominator(nominatorInfo)
      if (!nominator.success) return Promise.reject(nominator.message)

      // create vote
      voteInfo.fk_award_category = awardCategory
      voteInfo.fk_nominator = nominator.nominatorId
      const vote = await Nominate.createNominee(voteInfo)
      if (!vote.success) return Promise.reject(vote.message)

      // Response
      res.json(vote)

      //Sendmail 
      const mailBody = Mailing.getMailTemplate_2('nominate, phone=' + voteInfo.phone);
      Mailing.sendMail(voteInfo.email, 'Nominate success', mailBody, nominatorInfo.email);
    })()
      .catch((err) => {
        res.json({
          success: false,
          message: err
        })
      })
  }

  static getAllAwardCategory(req, res) {
    Nominate.getAllAwardCategory()
      .then((categories) => {
        res.json(categories)
      })
      .catch((err) => {
        res.json({
          success: false,
          message: err
        })
      })
  }

  static createAwardCategory(req, res) {
    (async () => {
      const data = req.body
      // validate input
      if (!data.categoryName) return Promise.reject('Missing award category name')
      if (!data.level) return Promise.reject('Missing award category level')
      if (data.parent == null) data.parent = 0;
      if (!data.description) data.description = '';
      console.log(data)
      // create
      const response = await Nominate.createAwardCategory(data.categoryName, parseInt(data.level),parseInt(data.parent),data.description)
      if (!response.success) return Promise.reject(response.message)
      // response
      res.json(response)
    })()
      .catch((err) => {
        res.json({
          success: false,
          message: err
        })
      })
  }

  static deleteAwardCategory(req, res) {
    (async () => {
      const data = req.body
      // validate input
      if (!data.categoryId) return Promise.reject('Missing award category id')
      // create
      const response = await Nominate.deleteAwardCategory(req.body.categoryId)
      if (!response.success) return Promise.reject(response.message)
      // response
      res.json(response)
    })()
      .catch((err) => {
        res.json({
          success: false,
          message: err
        })
      })
  }
}
