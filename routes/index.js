var express = require('express');
var router = express.Router();

// Ctrl + C and type"npm start" every time you set up a new EJS page. Otherwise it won't load properly.

/* GET home page. */
router.get('/', function(req, res) {
  res.render('home')
});

// About page
router.get('/about', function(req, res) {
  res.render('about')
});

// Contact page
router.get('/contact', function(req, res) {
  res.render('contact')
});

module.exports = router;
