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
  static getMailTemplate_Nominee(firstname,lastname,awardcategory) {
    return `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          .container {
            background-color: #d1c531;
            position: relative;
            padding: 3em;
          }
          .header {
            text-align: center
          }
          .body {
            border-radius: 20px;
            background-color: white;
          }
          .welcome {
            text-align: center;
            color: #d1c531;
            font-size: 30px;
            padding: 50px 0;
          }
          .btn {
            background-color: #d1c531;
            border-color: #d1c531;
            color: white;
            width: fit-content;
            height: 30px;
            font-size: 16px;
            padding: 10px 10px 0px 10px;
            margin: 0 auto;
          }
          .btn-white {
            background-color: transparent;
            border: 1px solid white
          }
          .btn .text {
            display: block;
            float: left;
            width: fit-content;
            height: 20px;
          }
          .btn img {
            display: block;
            float: left;
            width: 20px;
            height: 20px;
          }
          .content {
            position: relative;
            background-color: #f4f4f4;
            padding: 2em 3em 2em 3em;
            border-radius: 20px;
          }
          .right {
            position: relative;
            text-align: right;
          }
          .footer {
            margin: 2em 0;
            border-radius: 20px;
            
            background: url(${process.env.baseUrl}/static/mail/3.png);
            color: white;
          }
          .footer-inner {
            background-color: rgba(0,0,0,0.5);
            padding: 5em 3em 5em 3em; 
            border-radius: 20px;
          }
          .big20 {
            font-size: 20px;
          }
          .white-color {
            color: white;
          }
          .black-color {
            color: black;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <img src="${process.env.baseUrl}/static/mail/DPAlogo.png">
          </div>
          <div class="body">
            <div class="welcome">
                <img src="${process.env.baseUrl}/static/mail/nominatesuccess.png">
                <p>You are nominated for<br>Decentralized People's Awards (DPA) 2019!</p>
                <a href="https://www.dpawards.org/">
                  <div class="btn">
                    <div class="text">GO TO DPA WEBSITE &nbsp;</div>
                    <img src="${process.env.baseUrl}/static/mail/arrow-right.png">
                  </div>
                </a>
            </div>
            <div class="content">
              <p><strong>Dear, ${firstname + ' ' + lastname}</strong></p><br>
              <p class="black-color">Congratulations! You are nominated for<br> Decentralized People's Awards (DPA) 2019!</p>
              <p class="black-color">
                The award category you got nominated is as below:<br>
                ${awardcategory}
              </p>
              <p class="black-color">After public voting and assessment process, we are going to finalize the winner of each award category.<br>We will personally contact the winners afterwards.</p>
              <p class="black-color">If you have any question, feel free to ask <a href="info@purpleswan.io">info@purpleswan.io</a></p>
              <p class="black-color">Thank you!</p>
              <p class="right black-color"><strong>DPA 2019 Operation office</strong></p>
            </div>
          </div>
          <div class="footer">
            <div class="footer-inner">
                <p class="big20">Recognition on chain.</p>
                <p class="white-color">Celebrate your hard work and contribution to the blockchain industry.</p>
                <p class="white-color">TokenPost is a leading provider of news on distributed ledger technology and strives to keep readers abreast of the latest trends and technology developments in the blockchain industry. We provide unbiased and up-to-date information from numerous sources to deliver well-balanced and objective news with a creative and novel perspective. </p>
                <p class="white-color">As a vital outlet for information sharing and learning, TokenPost is opening a new chapter in the blockchain media sector by serving the public and enthusiasts, going beyond the limited role of just another news provider in the blockchain sphere. </p>
                <p class="white-color">As part of this effort, TokenPost will host Decentralized People’s Awards Korea 2019 (DPA) to celebrate the achievements of companies and individuals who have contributed to the development and innovation of the blockchain technology. As a follow up to Blockchain Open Forum 2018, the largest blockchain conference of 2018 in South Korea, DPA will become a household name for blockchain awards.</p>
                <p class="white-color">DPA will focus on identifying and bringing to light individuals and enterprises that have helped advance our society by innovating and implementing the blockchain technology in their fields. Noteworthy projects and pioneers will be selected and voted for by the people as the decentralized voice.  Joined by the most sought after experts and entrepreneurs in the current blockchain scene, Decentralized People’s Awards 2019 will also provide a special opportunity to network and promote further discussion into the future of the blockchain technology.</p>
                <a href="https://www.dpawards.org/">
                  <div class="btn btn-white">
                    <div class="text">GO TO DPA WEBSITE &nbsp;</div>
                    <img src="${process.env.baseUrl}/static/mail/arrow-right.png">
                  </div>
                </a>
            </div>
          </div>
        </div>
      <body>
    <html>
    `
  }

  static getMailTemplate_Nominator(firstname, lastname, email, phone) {
    return `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          .container {
            background-color: #d1c531;
            position: relative;
            padding: 3em;
          }
          .header {
            text-align: center
          }
          .body {
            border-radius: 20px;
            background-color: white;
          }
          .welcome {
            text-align: center;
            color: #d1c531;
            font-size: 30px;
            padding: 50px 0;
          }
          .btn {
            background-color: #d1c531;
            border-color: #d1c531;
            color: white;
            width: fit-content;
            height: 30px;
            font-size: 16px;
            padding: 10px 10px 0px 10px;
            margin: 0 auto;
          }
          .btn-white {
            background-color: transparent;
            border: 1px solid white
          }
          .btn .text {
            display: block;
            float: left;
            width: fit-content;
            height: 20px;
          }
          .btn img {
            display: block;
            float: left;
            width: 20px;
            height: 20px;
          }
          .content {
            position: relative;
            background-color: #f4f4f4;
            padding: 2em 3em 2em 3em;
            border-radius: 20px;
          }
          .right {
            position: relative;
            text-align: right;
          }
          .footer {
            margin: 2em 0;
            border-radius: 20px;
            
          }
          .footer-inner {
            background-color: #f4f4f4;
            padding: 5em 3em 5em 3em; 
            border-radius: 20px;
          }
          .big20 {
            font-size: 20px;
          }
          .label {
            font-weight: bold;
            margin-top: 1em;
            color: black;
          }
          .input {
            background-color: white;
            padding: 1em 0 1em 1em;
            margin-top: 0.5em;
            color: black;
          }
          .white-color {
            color: white;
          }
          .black-color {
            color: black;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <img src="${process.env.baseUrl}/static/mail/DPAlogo.png">
          </div>
          <div class="body">
            <div class="welcome">
                <img src="${process.env.baseUrl}/static/mail/nominatesuccess.png">
                <p class="black-color">Thank you for your nomination!</p>
                <a href="https://www.dpawards.org/">
                  <div class="btn">
                    <div class="text">GO TO DPA WEBSITE &nbsp;</div>
                    <img src="${process.env.baseUrl}/static/mail/arrow-right.png">
                  </div>
                </a>
            </div>
            <div class="content">
              <p><strong>Dear, ${firstname + ' ' + lastname}</strong></p><br>
              <p class="black-color">Thank you for submitting your nomination form for Decentralized People's Awards 2019!</p>
              <p class="black-color">Here is the copy of your nomination application.<br>
                Please check if everything is correct.
              </p>
              <p class="black-color">If you have any question, feel free to ask <a href="info@purpleswan.io">info@purpleswan.io</a></p>
              <p class="black-color">Thank you!</p>
              <p class="right black-color"><strong>DPA 2019 Operation office</strong></p>
            </div>
          </div>
          <div class="footer">
            <div class="footer-inner">
                <div class="label">First name</div>
                <div class="input">${firstname}</div>
                <div class="label">Last name</div>
                <div class="input">${lastname}</div>
                <div class="label">Email address</div>
                <div class="input">${email}</div>
                <div class="label">Cell phone</div>
                <div class="input">${phone}</div>
            </div>
          </div>
        </div>
      <body>
    <html>
    `;
  }

}
