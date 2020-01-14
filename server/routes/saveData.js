const express = require('express');
const router = express.Router();
const db = require('../startup/db.js');

router.post('/', (req, res) => {
  //res.send({ message: `Hello, ${req.body.email}! User registered!` })
  const sql = `INSERT INTO mydata (code, name, description, status) VALUES ('${req.body.code}', '${req.body.name}', '${req.body.description}', 'current')`
  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
      res.send( err);
    } else {
      console.log(result);
      res.send( result );
    }
  })
  // console.log({ message: `Data received by the server. Code: ${req.body.code} Name: ${req.body.name}` })
  // res.send({ message: `Data received by the server. Code: ${req.body.code} Name: ${req.body.name}` })
})

router.get('/', (req, res) => {
  res.send('Save Data page');
});

module.exports = router;
