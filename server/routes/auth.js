const express = require('express');
const router = express.Router();
const admin = require('../services/firebase-service.js');

router.post('/', async (req, res) => {
  const payload = {
    email: req.body.email,
    password: req.body.password
  }
  const user = await admin.auth().createUser(payload);
  // add logic to check for errors during firebase create
  // if firebase user was created ok, extract uid and save to the dB
  // if db user not saved, delete firebase user and send error,
  // else send FB user object to the client:
  res.send(user);
})

router.get('/', (req, res) => {
  res.send('Auth page: get request');
});

module.exports = router;
