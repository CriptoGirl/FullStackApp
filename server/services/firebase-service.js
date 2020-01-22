//import * as admin from 'firebase-admin';

var admin = require("firebase-admin");

console.log('The value of GOOGLE_APPLICATION_CREDENTIALS is:', process.env.GOOGLE_APPLICATION_CREDENTIALS);
var serviceAccount = require(process.env.GOOGLE_APPLICATION_CREDENTIALS);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://my-full-stack-app.firebaseio.com"
});

// export default admin
module.exports = admin
