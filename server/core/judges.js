const Judges = require('../model/Judges')
const FileService = require('../store/FileService')

module.exports = class JudgesHandler {
  static getAllJudges(req, res) {
    Judges.getAllJudges()
      .then((data) => {
        res.json(data)
        res.end()
      })
      .catch((err) => {
        res.json(err)
        res.end()
      })
  }

  static getJudgeInfo(req, res) {
    (async () => {
      if (typeof req.body.judgeId === 'undefined') return Promise.reject('Missing judge id')
      const response = await Judges.getJudge(req.body.judgeId)
        .then((data) => {
          res.json(data)
          res.end()
        })
        .catch((err) => {
          res.json(err)
          res.end()
        })
    })().catch((err) => {
      res.json({
        success: false,
        message: err
      })
      res.end()
    })
  }

  static createJudge(req, res) {
    (async () => {
      const judge = req.body
      if (!judge.name) return Promise.reject('Missing full name')
      if (!judge.job_title) return Promise.reject('Missing job title')
      if (!judge.company) return Promise.reject('Missing company')
      // Handle upload image
      judge.avatar = req.body.fileName
      // --end handle upload image

      const response = await Judges.createJudge(judge)
      res.json(response)
    })()
      .catch((err) => {
        res.json({
          success: false,
          message: err
        })
      })
  }

  static removeJudge(req, res) {
    let imageName = '';
    (async () => {
      if (!req.body.judgeId) return Promise.reject('Missing judge id')

      // get image name
      const info = await Judges.getJudge(req.body.judgeId)
      imageName = info.avatar

      // Delete data
      const response = await Judges.deleteJudge(req.body.judgeId)
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
