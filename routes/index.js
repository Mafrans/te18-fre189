var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/boot', function(req, res, next) {
  res.render('boot', { title: 'Bootstrap' });
});

/* GET home page. */
router.get('/guess', function(req, res, next) {
  res.render('guess', { title: 'Bootstrap' });
});


module.exports = router;
