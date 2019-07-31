const nodeMailer = require('nodemailer')
const config = require('../config/app')

module.exports = class Mailing {
  static transporter() {
    return nodeMailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        // should be replaced with real sender's account
        user: config.email.user,
        pass: config.email.pass
      }
    })
  }

  static getMailTemplate_1(fullName, code) {
    return 'Hello ' + fullName + ', your code is ' + code + ' . ';
  }
  static getMailTemplate_2(message) {
    return message;
  }

  static mailOptions(to, subject, body, cc) {
    return {
      // should be replaced with real recipient's account
      to: to,
      subject: subject,
      html: body,
      cc: cc
    }
  }

  /**
   * Send an email to Receiver
   * @param {String} to Receiver
   * @param {String} subject Mail subject
   * @param {String} body
   */
  static async sendMail(to, subject, body, cc) {
    const mailOptions = this.mailOptions(to, subject, body, cc)
    return await this.transporter().sendMail(mailOptions).then((info) => {
      if (info) {
        return {
          success: true,
          message: 'Email has been sent to ' + to
        }
      }
    })
      .catch((err) => {
        return {
          success: false,
          message: err.code
        }
      })
  }
}
