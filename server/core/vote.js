// // Verify firebase phone number
      // const validPhoneNumber = await admin.auth().getUser(data.uid)
      //   .then(function (userRecord) {
      //     return {
      //       success: true,
      //       uid: userRecord.uid
      //     }
      //   })
      //   .catch(function (error) {
      //     return false
      //   })
      // if (!validPhoneNumber) return Promise.reject('This phone number has not been verified')
      // // Delete phone number in firebase
      // const deleteUid = await admin.auth().deleteUser(validPhoneNumber.uid)
      //   .then(function () {
      //     return true
      //   })
      //   .catch(function (error) {
      //     console.error('Error deleting user:', error)
      //     return false
      //   })