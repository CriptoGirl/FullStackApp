const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'eve',
  password: '123456',
  database: 'myfullstackapp'
});

db.connect();

module.exports = db;
