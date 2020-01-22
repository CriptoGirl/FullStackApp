const express = require('express');
const router = express.Router();

// const checkIfAuthenticated = require('../middleware/auth-middleware.js');
const db = require('../startup/db.js');

router.get('/', (req, res) => {
  // router.get('/', checkIfAuthenticated, async (_, res) => {
  const sql = 'SELECT * FROM mydata';
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send( result );
  })
  // res.send( { message: 'Search page'} );
});

module.exports = router;
