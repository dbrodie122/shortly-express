var db = require('../db');
var utils = require('../lib/utility');
var crypto = require('crypto');

// Write you user database model methods here



var addUser = function(data) {
  var queryString = 'INSERT INTO USERS (username, password, timestamp) VALUES (?, ?, now())';
  
  var hashedPassword = utils.hashPassword(data.password);
  
  return db.queryAsync(queryString, [data.username, hashedPassword]);
};

var loginUser = function(data, callback) {
  // hash data.password
  var hashedInputPassword = utils.hashedPassword(data.password);
  // select from queryString to get corresponding password to data.username
  var queryString = 'SELECT users.password FROM users WHERE username = ?';
  //query database to get the password that is associated with the username from data.username
  db.queryAsync(queryString, [data.username], function(err, results) {
    if (err) {
      throw err;
    } else {
      //use a callback to pass the results of doing a === comparison between hashedPassword and the password from the database.
      callback(results);
    }
  });
  // compare hashed pw with database pw
    //hashed === true pw
    // if match



};

var checkUserExists = function(data, callback) {
  var queryString = "SELECT COUNT(*) FROM users WHERE username = ?";

  db.queryAsync(queryString, [data.username], function(err, results) {
    if (err) {
      throw err;
    } else {
      callback(results[0]['COUNT(*)']);
    }
  });

  // Question 1: OLD THING WE THOUGHT WOULD WORK
  // db.queryAsync(queryString, [data.username], function(err, results) {
  //   if (err) {
  //     throw err;
  //   } else {
  //     return results[0]['COUNT(*)'];
  //   }
  // });

};

module.exports = {
  addUser: addUser,
  checkUserExists: checkUserExists,
  loginUser: loginUser
};
