
// const SponsorService = require('./services/SponsorService');
// const AdminService = require('./services/AdminService');
// const CodeService = require('./services/CodeService');
// const BookingService = require('./services/BookingService');
// const MailingService = require('./services/MailingService');
// const FileService = require('./store/FileService');
// const VoteService = require('./services/VotingService');

// let a = new SponsorService();

// SponsorService.createSponsor({
//     companyName: 'a',
//     fullName: 'duy',
//     websiteAddress: 'fds',
//     email: 'duydo@',
//     telegramId: '876543',
//     jobTitle: 'it',
//     description: 'none',
//     logo: 'dafdfjl',
//     type: 1
//   }).then(console.log).catch(console.log);
// a.updateStatus(1,false);
// a.paymentSuccess(1);

// let admin = new AdminService();
// admin.register('test1223', '12345678', 'testtest').then(console.log);
// admin.validate('tefst','123456748').then(console.log).catch(console.log);

// CodeService.importCode({
//   code: 'ABC',
//   receiverEmail: 'duyd@gmail.com'
// }).then(console.log).catch(console.log);

// CodeService.useCode('ABfC').then(console.log).catch(console.log);

// BookingService.createAttendee({
//   code: 'ABC',
//   prefix: 'ms',
//   firstName: 'do',
//   lastName: 'duy',
//   companyName: 'fds',
//   jobTitle: 'it',
//   nationality: 'vn',
//   email: 'duydo@fds',
//   phone: '1234567899'
// }).then(console.log).catch(console.log);

// BookingService.getAllAttendees().then(console.log).catch(console.log);
// BookingService.getAttendee(4).then(console.log).catch(console.log);

// MailingService.sendMail('zeus261096@gmail.com','test','Do Ngoc Duy','ABC').then(console.log).catch(console.log);

// FileService.deleteImage('images.png').then(console.log).catch(console.log);

// VoteService.createAwardCategory('mathematics')
// VoteService.getAllAwardCategory()
// VoteService.createNominator({
//   phone: '0987654322',
//   prefix: 'mr',
//   first_name: 'duy',
//   last_name: 'do',
//   company_name: 'fds',
//   job_title: 'it',
//   company_website: 'aaaa.com',
//   email: 'du@gmail',
//   nationality: 'vn'
// })
// VoteService.existNominator('0987654324')
// VoteService.createAwardCategory('Geography')
// VoteService.createVote({
//   fk_nominator: 3,
//   fk_award_category: 12,
//   about_speaker: 'nothing',
//   links_media: 'abc.com,213123.org',
//   links_articles: 'test.com,test1.com',
//   avatar: 'logo',
//   is_know: false,
//   self: true
// })
//   .then(console.log)
//   .catch(console.log);

const categoryName = 'war war'
const sanitizeName = categoryName.replace(/( .)|(\b.)/gi, x => x.toUpperCase())
console.log(sanitizeName)
