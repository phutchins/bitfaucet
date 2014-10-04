var mongoose = require('mongoose');
var Pour = require('../models/pour');

module.exports.controller = function(app) {
  app.post('/pour', function(req, res) {
    // TODO: add constraint for pour frequency and amount
    console.log("User with IP " + req.connection.remoteAddress + " has poured " + req.body.pour_ammount + " to address " + req.body.wallet_address);

    var pour = new Pour({
      ip: req.connection.remoteAddress,
      pour_ammount: req.param.amount,
      comment: req.param.comment
    });
    pour.save(function(err, item) {
      if (err) return console.error(err);
      console.dir(item);
      Pour.find( function(err, pours) {
        res.render('index', {pours: pours});
      });
    });
  });
}


