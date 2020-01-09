const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send( { message: 'Search page'} );
});

module.exports = router;
