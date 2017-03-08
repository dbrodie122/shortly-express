var parseCookies = function(req, res, next) {
  
  // get cookies from request
  // parse those cookies
  // add those parsed cookies to cookies property on request
  req.cookies = {};

  if (req.headers.cookie) {
    var cookies = req.headers.cookie.split('; ');
    cookies = cookies.map(function(input) {

      return input.split('=');
    });
    
    cookies.forEach(function(cookie) {
      var key = cookie[0];
      var val = cookie[1];
      // req.set('Cookies')[key] = val;
      req.cookies[key] = val;
    });

    
  }
  next();
};

module.exports = parseCookies;