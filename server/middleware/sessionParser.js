var Sessions = require('../models/session');
var util = require('../lib/utility');

var createSession = function(req, res, next) {
  //create a session property on the request object
  req.session = {};
  //check to see if the request has a cookie
  
  //if no cookie
    //create a unique session hash id based on the timestamp.
    //add that session hash to the req.session.hash property of the request.
    //add that session hash to the req.cookies property
  //add the session hash to the database sessions table

  next();
};

module.exports = createSession;
