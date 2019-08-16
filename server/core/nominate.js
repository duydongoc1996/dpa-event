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

      // get award category name
      let categoryName = '';
      const fullPath = await Nominate.getFullPathAwardCategory([voteInfo.fk_award_category]);
      const fullPathCategory = fullPath[0].join(' > ');
      let currentCategory = await Nominate.getAwardCategory(parseInt(voteInfo.fk_award_category));
      if (currentCategory.name == 'Others') {
        const otherCategory = voteInfo.other_category;
        categoryName = fullPathCategory + ' > ' + otherCategory;
      } else {
        categoryName = fullPathCategory;
      }
      // Response
      res.json(vote)

      //Sendmail to nominator
      const mailBodyNominator = Mailing.getMailTemplate_Nominator(
        nominatorInfo.first_name,
        nominatorInfo.last_name,
        nominatorInfo.email,
        nominatorInfo.phone
      );
      Mailing.sendMail(nominatorInfo.email, 'DPA 2019 Nomination', mailBodyNominator, '');
      //Sendmail to nominee
      const mailBodyNominee = Mailing.getMailTemplate_Nominee(voteInfo.first_name,voteInfo.last_name, categoryName)
      Mailing.sendMail(voteInfo.email, 'DPA 2019 Nomination', mailBodyNominee, '');


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

  static updateAwardCategory(req,res) {
    (async () => {
      const data = req.body;
      if (data.id == null) return Promise.reject('Missing id');
      if (data.name == null) return Promise.reject('Missing name');
      if (data.description == null) data.description = '';
      //update
      const response = await Nominate.updateAwardCategory(data)
      if (response.success === false) return Promise.reject(response.message);
      //response
      resj.json(response);
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
      .catch((err) => 
        res.json({
          success: false,
          message: err
        })
      )
  }

  static getAllNominee(req,res) {
    (async () => {
      const data = req.query;
      console.log(data)
      if (data.offset == null) data.offset = 1;
      if (data.limit == null) data.limit = 20; 
      const response = await Nominate.getAllNominee();
      res.json(response);
    })()
      .catch((err) => {
        res.json({
          success: false,
          message: err
        })
      })
  }

  static getNomineeById(req,res) {
    (async () => {
      if (!req.body.nomineeId) return Promise.reject('Missing nominee id');
      const response = await Nominate.getNomineeById(parseInt(req.body.nomineeId));
      res.json(response);
    })()
      .catch((err) => {
        res.json({
          success: false,
          message: err
        })
      })
  }

  static updateNominee(req,res) {
    (async () => {
      const data = req.body;
      if (data.about_speaker == null) return Promise.reject('Missing description')
      if (data.links_media == null) return Promise.reject('Missing links media')
      if (data.avatar == null) return Promise.reject('Missing avatar');
      if (data.prefix == null) return Promise.reject('Missing prefix');
      if (data.first_name == null) return Promise.reject('Missing first name');
      if (data.last_name == null) return Promise.reject('Missing last name');
      if (data.company_name == null) return Promise.reject('Missing company name');
      if (data.company_website == null) return Promise.reject('Missing company website');
      if (data.job_title == null) return Promise.reject('Missing job title');
      if (data.phone == null) return Promise.reject('Missing phone');
      if (data.email == null) return Promise.reject('Missing email');
      if (data.nationality == null) return Promise.reject('Missing nationality');
      if (data.id == null ) return Promise.reject('Missing id');

      res.json(await Nominate.updateNominee(data))
    })()
      .catch((err) => {
        res.json({
          success: false,
          message: err
        })
      })
  }

  static countNominator(req,res) {
    (async ()=>{
      res.json(await Nominate.countNominators())
    })()
      .catch((err) => {
        res.json({
          success: false,
          message: err
        })
      })
  }

  static getAllNominator(req,res) {
    (async()=>{
      res.json(await Nominate.getAllNominators())
    })()
    .catch((err) => {
      res.json({
        success: false,
        message: err
      })
    })
  }

  static updateNominator(req,res) {
    (async ()=>{
      const data = req.body;
      if (data.first_name == null) return Promise.reject('Missing first name');
      if (data.last_name == null) return Promise.reject('Missing last name');
      if (data.email == null) return Promise.reject('Missing email');
      if (data.phone == null) return Promise.reject('Missing phone');
      if (data.id == null) return Promise.reject('Missing id');
      //ok
      res.json(await Nominate.updateNominator(data));
    })()
      .catch((err) => {
        res.json({
          success: false,
          message: err
        })
      })
  }

  static countNominee(req,res) {
    (async ()=>{
      res.json(await Nominate.countNominees())
    })()
      .catch((err) => {
        res.json({
          success: false,
          message: err
        })
      })
  }

  static getFullPathAwardCategories(req,res) {
    (async()=>{
      const listCategory = req.body.list.split(',');
      if (listCategory == null || listCategory.length == 0) return Promise.reject('Missing id');
      //ok
      const list = await Nominate.getFullPathAwardCategory(listCategory)
      const response = list.map(x=>x.join(' > '));
      res.json(response);
    })()
    .catch((err) => {
      res.json({
        success: false,
        message: err
      })
    })
  }
}
