const admin = require('firebase-admin')

const app = admin.initializeApp()

const uid = '9YRPJEfGrVcTSHKuD1bVTnFB8l43'

// admin.auth().getUser(uid)
//   .then(function(userRecord) {
//     // See the UserRecord reference doc for the contents of userRecord.
//     console.log('Successfully fetched user data:', userRecord.toJSON());
//   })
//   .catch(function(error) {
//     console.log('Error fetching user data:', error);
//   });

// let phoneNumber = '+84394012229';

// admin.auth().getUserByPhoneNumber(phoneNumber)
// .then(function(userRecord) {
//   // See the UserRecord reference doc for the contents of userRecord.
//   console.log('Successfully fetched user data:', userRecord.toJSON());
// })
// .catch(function(error) {
//   console.log('Error fetching user data:', error);
// });

// admin.auth().deleteUser(uid)
//   .then(function() {
//     console.log('Successfully deleted user');
//   })
//   .catch(function(error) {
//     console.log('Error deleting user:', error);
//   });
