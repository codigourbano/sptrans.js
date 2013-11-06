
/**
 * Module dependencies.
 */

var express = require('express')
var routes = require('./routes');
var bus_routes = require('./routes/bus_routes');
var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// home
app.get('/', routes.index);

// check install
app.get('/check_install', routes.checkInstall);


// bus routes routes
// app.get('/routes/search/:query', routes.search);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
