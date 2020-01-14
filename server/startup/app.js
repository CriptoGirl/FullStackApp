const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

// routes
const home = require('../routes/home');
const saveData = require('../routes/saveData');
const search = require('../routes/search');

app.use('/', home);
app.use('/home', home);
app.use('/saveData', saveData);
app.use('/search', search);

module.exports = app;
// module.exports = db;
