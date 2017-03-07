var db = require('../db');
var utils = require('../lib/utility');
var crypto = require('crypto');

// Write you user database model methods here

var addUser = function(data) {
  var queryString = 'INSERT INTO USERS (username, password, timestamp) VALUES (?, ?, now())';
  
  var shasum = crypto.createHash('sha1');
  shasum.update(data.password);
  data.password = shasum.digest('hex');
  
  return db.queryAsync(queryString, [data.username, data.password]);

};

var checkUserExists = function(data) {
  var queryString = "SELECT COUNT(*) FROM users WHERE username = ?";

  return db.queryAsync(queryString, [data.username]);

};

module.exports = {
  addUser: addUser,
  checkUserExists: checkUserExists
};
