const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Save Data page');
});

module.exports = router;
