var firebase = require('firebase/app')
require('firebase/auth')

var firebaseConfig = {
  apiKey: 'AIzaSyBL_eSmsmYZGFF-tWnnCLiHvH7WVOSB8HU',
  authDomain: 'my-full-stack-app.firebaseapp.com',
  databaseURL: 'https://my-full-stack-app.firebaseio.com',
  projectId: 'my-full-stack-app',
  storageBucket: 'my-full-stack-app.appspot.com',
  messagingSenderId: '470194054235',
  appId: '1:470194054235:web:113eb439efed41ad0bcb7e',
  measurementId: 'G-G0L975FF7F'
}

let firebaseApp = firebase.initializeApp(firebaseConfig)
let firebaseAuth = firebaseApp.auth()

export { firebaseAuth }
