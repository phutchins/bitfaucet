var mongoose = require('mongoose');
var Pour = require('../models/pour');
var bitcoin = require('bitcoin');
var config = require( __dirname + '/../config')();
var btcClient = new bitcoin.Client(config.bitcoin);
var qr = require('qr-image');
var fs = require('fs');
var code = qr.image(config.faucet_address.toString(), { type: 'svg' });
var output = fs.createWriteStream('public/images/wallet_qr.svg');

module.exports.controller = function(app) {
  app.get('/', function(req, res) {
    btcBalance = parseFloat('0.00000000')
    btcClient.getBalance('*', 1, function(err, balance, resHeaders) {
      if (err) {
        return console.log("Error getting balance from bitcoind wallet - "+err);
      }
      btcBalance = parseFloat(balance);
      console.log('Balance:', btcBalance);
      Pour.find( function(err, pours) {
        if (err) return console.log("Error getting pours...");
        res.render('index', {pours: pours, pour_amount: req.body.pour_amount, balance: btcBalance, faucet_address: config.faucet_address, bit_limit: config.bit_limit, net_name: config.name});
      });
    });
  });

  app.post('/', function(req, res) {
    // TODO: add constraint for pour frequency and amount
    console.log("User with IP " + req.connection.remoteAddress + " has poured " + req.body.pour_amount + " to address " + req.body.wallet_address);
    console.log("req.body.pour_amount: " + req.body.pour_amount + " config.bit_limit: " + config.bit_limit);
    if (req.body.pour_amount <= config.bit_limit) {
      btcClient.sendToAddress(req.body.wallet_address, parseFloat(req.body.pour_amount), function(err, txid) {
        if (err) return console.error(err);
        var pour = new Pour({
          ip: req.connection.remoteAddress,
          wallet_address: req.body.wallet_address,
          pour_amount: req.body.pour_amount,
          comment: req.param.comment
        });
        pour.save(function(err, item) {
          if (err) return console.error(err);
          //console.dir(item);
          Pour.find( function(err, pours) {
            if (err) return console.error("Error finding pours - " + err);
            pourMessage = 'Successfully poured ' + req.body.pour_amount + ' to ' + req.body.wallet_address;
            res.render('index', {pours: pours, balance: btcBalance, message: pourMessage, faucet_address: config.faucet_address, net_name: config.name});
          });
        });
      });
    } else {
      pourMessage = "You tried to pour too much! Don't be stingy...";
      res.render('index', {balance: btcBalance, message: pourMessage, faucet_address: config.faucet_address, net_name: config.name});
    };
  });
}
