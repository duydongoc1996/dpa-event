const jwt = require('jsonwebtoken')
const FileService = require('../store/FileService')
const config = require('../config/app')

const checkToken = (req, res, next) => {
  let token = req.headers['x-access-token'] || req.headers.authorization // Express headers are auto converted to lowercase
  if (!token) {
    return res.json({
      success: false,
      message: 'No token was provided'
    })
  }
  if (token.startsWith('Bearer ')) {
    // Remove Bearer from string
    token = token.slice(7, token.length)
  }

  if (token) {
    jwt.verify(token, config.secret, (err, decoded) => {
      if (err) {
        return res.json({
          success: false,
          message: 'Token is not valid'
        })
      } else {
        req.decoded = decoded
        next()
      }
    })
  } else {
    return res.json({
      success: false,
      message: 'Auth token is not supplied'
    })
  }
}

const uploadImage = async (req, res, next) => {
  // Handle upload image
  console.log(req.body)
  if (req.files == null || Object.keys(req.files).length == 0 || req.files.image == null) {
    return res.json({
      success: false,
      message: 'Missing attached image',
    })
  }
  let imageName = ''
  let uploadError = false
  const upload = await FileService.createImage(req.files.image)
    .then((resolve) => {
      imageName = resolve
    })
    .catch((err) => {
      uploadError = true
      return err
    })
  if (uploadError) {
    return res.json({
      success: falsen,
      message: upload
    })
  }

  req.body.fileName = imageName
  // --end handle upload image
  next()
}

module.exports = {
  checkToken: checkToken,
  uploadImage: uploadImage
}
