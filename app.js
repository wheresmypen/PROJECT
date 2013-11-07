
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');

var LastFmNode = require('lastfm').LastFmNode;
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

// this is for loggin' in and identifying with LastFM for their info
var lastfm = new LastFmNode({
  api_key: 'cd33c3cd8b6ec13a6670c289dc4ac51d',    // sign-up for a key at http://www.last.fm/api
  secret: 'is 6b31fdda029117ad44ecbc86de6e26e2',
  useragent: 'appname/vX.X MyApp' // optional. defaults to lastfm-node.
});

app.get('/', routes.index);
app.get('/users', user.list);

app.get('/about', function(req, res){
	var tell = req.query;
	console.log(tell.goods);
});

app.get('/abba', function(req, res){
	var show = req.query;
	console.log(show.here);
});


// this is the search request for bands from LastFM
app.post('/search', function(req, res){
	var returnData=[];
	console.log(returnData);
	var artistSearch = req.body.artistSearch;
	var request = lastfm.request("artist.getInfo", {
    	artist: artistSearch,
    	handlers: {
        	success: function(data) {
            console.log(data.artist.bio);
            res.send(data);
        	},
        	error: function(error) {
        	console.log("Error: " + error.message);
        	}
    	}
	});

	// FURTHER GUIDANCE FROM ROB
// res.render("/", {searchResult : jsdjdsj} );
// });
// app.get('/:artistName')
});




http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
