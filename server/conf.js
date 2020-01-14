"use strict";

// exports.port = '6611';
exports.storage = 'mysql';
exports.database = {
  "max_connections": 30,
	"host"     : "localhost",
	"user"     : "blockhouse",
	"password" : "blockhouse01",
	"name"     : "blockhouse"
};

console.log('finished db config');
