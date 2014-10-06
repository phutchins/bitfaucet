var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var lessMiddleware = require('less-middleware');
var bodyParser = require('body-parser');
var http = require('http');
var fs = require('fs');
var config = require(__dirname + '/config')();
var bson = require('bson');

var app = express();

var mongoose = require('mongoose');
var db = mongoose.connection;

var bitcoin = require('bitcoin');
var btcClient = new bitcoin.Client(config.bitcoin);

db.on('error', console.error);
db.once('open', function() {
  // create schemas and models here? maybe not.
});

mongoose.connect('mongodb://' + config.mongo.host + ':' + config.mongo.port + '/faucet');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));

//app.configure(function() {
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

var bootstrapPath = path.join(__dirname, 'node_modules', 'bootstrap');
app.use(lessMiddleware(path.join(__dirname, 'public'), {
  dest: path.join(__dirname, 'public'),
  parser: {
    paths: [path.join(bootstrapPath, 'less')],
  }
}));
app.use(express['static'](path.join(__dirname, 'public')));
//});
//app.use(less(path.join(__dirname, 'public/stylesheets', 'less'), {
//  paths  : [bootstrapPath],
//  dest   : path.join(__dirname, 'public', 'stylesheets'),
//  preprocess: {
//    path: function(pathname, req) {
//      return pathname.replace('/stylesheets/', '/');
//    }
//  },
//  debug: true
//}));

//app.use(lessMiddleware(path.join(__dirname, 'public'), {
//  parser: {
//    paths: [TWITTER_BOOTSTRAP_PATH]
//  }
//}));
//app.use(express.static(path.join(__dirname, 'public')));

//app.use('/', routes);
//app.use('/users', users);

// catch 404 and forward to error handler
//app.use(function(req, res, next) {
//    var err = new Error('Not Found');
//    err.status = 404;
//    next(err);
//});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

//module.exports = app;

fs.readdirSync(__dirname + '/controllers').forEach(function(file) {
  if(file.substr(-3) == '.js') {
    route = require(__dirname + '/controllers/' + file);
    route.controller(app);
  }
});

http.createServer(app).listen(config.port, function() {
  console.log('BitFaucet server listening on port ' + config.port);
});
