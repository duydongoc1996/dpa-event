const fs = require('fs')

module.exports = class FileService {
  /**
   * Save file to upload folder
   * @param {File} file
   */
  static async createImage(image) {
    // The name of the input field (i.e. "iamge") is used to retrieve the uploaded file

    // Sanitize the image
    const pos = image.name.lastIndexOf('.')
    const ext = image.name.substring(pos)
    const filename = image.name.substring(0, pos)
    let index = 1
    while (fs.existsSync('./upload/' + image.name)) {
      image.name = filename + (index++) + ext
    }
    let response = Promise.resolve(image.name)
    try {
      fs.writeFileSync('./upload/' + image.name, image.data)
    } catch (err) {
      response = Promise.reject('Error while write image: ' + err.code)
    } finally {
      return response
    }
  }

  /**
   * Delete an image in folder upload
   * @param {String} filename Image name
   */
  static async deleteImage(filename) {
    if (!filename) return Promise.reject('No filename was provided')
    let response = Promise.resolve('File was deleted succesful (' + filename + ')')
    try {
      fs.unlinkSync('./upload/' + filename)
    } catch (err) {
      if (err.code == 'ENOENT') {
        response = Promise.resolve('File does not exist')
      } else {
        response = Promise.reject(err.message)
      }
    } finally {
      return response
    }
  }
}
