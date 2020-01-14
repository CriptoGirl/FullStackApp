const express = require('express');
const router = express.Router();

const db = require('../startup/db.js');

router.get('/', (req, res) => {
  const sql = 'SELECT * FROM mydata';
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send( result );
  })
  // res.send( { message: 'Search page'} );
});

module.exports = router;
