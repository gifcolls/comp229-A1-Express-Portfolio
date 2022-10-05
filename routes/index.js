//index.js Giselle Fe 301215601 2/10/2022

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title: 'Home'});
});
/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', {title: 'Home'});
});
/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about', {title: 'About Me'});
});
/* GET projects page. */
router.get('/projects', function(req, res, next) {
  res.render('projects', {title: 'Projects'});
});
/* GET services page. */
router.get('/services', function(req, res, next) {
  res.render('services', {title: 'Services'});
});
/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', {title: 'Contact Us'});
});

module.exports = router;
