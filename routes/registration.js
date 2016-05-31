var express = require('express');
var router = express.Router();

router.get('/registration', function(req, res, next) {
  res.render('registration');
});

module.exports = router;

