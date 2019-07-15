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
      if (!judge.fullName) return Promise.reject('Missing full name')
      if (!judge.jobTitle) return Promise.reject('Missing job title')
      if (!judge.links) return Promise.reject('Missing links')

      const links = judge.links.split(',')
      judge.link_1 = links[0]
      judge.link_2 = links[1]
      judge.link_3 = links[2]

      // Handle upload image
      judge.avatar = req.body.fileName
      // --end handle upload image

      const response = await Judges.createJudge(judge)
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
