const nodeMailer = require('nodemailer')

module.exports = class Mailing {
  static transporter() {
    return nodeMailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        // should be replaced with real sender's account
        user: 'duy.do@fdssoft.com',
        pass: 'meongu1996'
      }
    })
  }

  static getEmailMessage(fullName, code) {
    return 'Hello ' + fullName + ', your code is ' + code + ' . '
  }

  static mailOptions(to, subject, body) {
    return {
      // should be replaced with real recipient's account
      to: to,
      subject: subject,
      html: body
    }
  }

  /**
   * Send an email to Receiver
   * @param {String} to Receiver
   * @param {String} subject Mail subject
   * @param {String} fullName
   * @param {String} code
   */
  static async sendMail(to, fullName, code) {
    const subject = 'Welcome to event'
    const body = this.getEmailMessage(fullName, code)
    const mailOptions = this.mailOptions(to, subject, body)
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
