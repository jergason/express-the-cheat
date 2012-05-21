(function () {
  "use strict";
  module.exports = function () {
    return function (req, res, next) {
      res.header('x-powered-by', 'The Cheat');
      next();
    };
  }
}());
