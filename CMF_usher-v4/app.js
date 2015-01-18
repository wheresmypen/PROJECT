
// mongoose config
require('./database');

var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');
var siteMap = require('./routes/siteMap');
var startPage = require('./routes/startPage');
var submit_form = require('./routes/submit_form');
var check_login = require('./routes/check_login');
var fullSchedule = require('./routes/fullSchedule');
var selectEvent = require('./routes/selectEvent');
var optionsProfile = require('./routes/optionsProfile');
var secureOptions = require('./routes/secureOptions');

var app = express();

// view engine setup
app.set('views', path.join(__dirname + '/views'));
// app.set('view engine', 'jade');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(__dirname + '/public'));
//app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);
app.use('/siteMap', siteMap);
app.use('/startPage', startPage);
app.use('/submit_form', submit_form);
app.use('/check_login', check_login);
app.use('/fullSchedule', fullSchedule);
app.use('/selectEvent', selectEvent);
app.use('/optionsProfile', optionsProfile);
app.use('/secureOptions', secureOptions);

/// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

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


module.exports = app;
