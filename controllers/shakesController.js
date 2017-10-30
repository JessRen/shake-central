

// Node Dependencies
var express = require('express');
var router = express.Router();
var shake = require('../models/shake.js');


// Create routes
// ----------------------------------------------------
// Index Redirect
router.get('/', function (req, res) {
  res.redirect('/index');
});


// Index Page (render all shakes to DOM)
router.get('/index', function (req, res) {
  shake.selectAll(function(data) {
    var hbsObject = { shakes: data };
    //console.log(hbsObject);
    res.render('index', hbsObject);
  });
});


// Create a New Shake
router.post('/shake/create', function (req, res) {
  shake.insertOne(req.body.shake_name, function() {
    res.redirect('/index');
  });
});


// Devour a Shake
router.post('/shake/eat/:id', function (req, res) {
  shake.updateOne(req.params.id, { devoured: true }, function() {
    res.redirect('/index');
  });
});
// ----------------------------------------------------


// Export routes
module.exports = router;