
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');
var _ = require('underscore');
var LastFmNode = require('lastfm').LastFmNode;
var mongoose = require('mongoose');



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


console.log('starting');

// create database connection

mongoose.connect('mongodb://localhost/revivyl');
var db = mongoose.connection;

// create database schema

var albumSchema = mongoose.Schema({
  name: String,
  artist: String,
  mbid: String,
  releaseYear: Number,
  producers: String,
  engineers: String,
  labels: String
});

// create album model passing the name and the schema

var Album = mongoose.model('Album', albumSchema);

// pass hard-coded data to album model

var albumData = new Album({
<<<<<<< HEAD
  name: "Catch Bull at Four",
  artist: "Cat Stevens",
  mbid: "5adb8b74-54b8-4700-836e-550b6a2a2f71",
  releaseYear: 1972,
  producers: "Paul Samwell-Smith",
  engineers: "",
  labels: "A&M"
=======
  name: "The Album",
  artist: "ABBA",
  mbid: "d87e52c5-bb8d-4da8-b941-9f4928627dc8",
  releaseYear: 1977,
  producers: "Benny Andersson and Bjorn Ulvaeus",
  engineers: "Michael B. Tretow",
  labels: "Atlantic"
>>>>>>> bf2388e80593844d10820554884f9fa713709ab8
});

// calling the save function on this object saves the data to database

albumData.save();


<<<<<<< HEAD
// Album.findOne({artist: "ABBA"}, 'name', function (err, album){
//   if (err) return handleError(err);
//   console.log('%s says hi', album.name)
// });

Album.find(function (err, data){
  if (err)
    console.log("did not connect");
  else
    console.log(data);
=======
Album.findOne({artist: "ABBA"}, 'name', function (err, album){
  if (err) return handleError(err);
  console.log('%s says hi', album.name)
});

Album.find(function (err, data){
  if (err)
    console.log("did not connect")
  else
    console.log(data)
>>>>>>> bf2388e80593844d10820554884f9fa713709ab8
});



// db.createCollection("Artist");
// Artist.insert({name:"Abba", albums:["GOLD", "Voulez-vous"], artistID:mbid, members:[mbid[1],mbid[2],mbid[3]]});

// this is for loggin' in and identifying with LastFM for their info
var lastfm = new LastFmNode({
  api_key: 'cd33c3cd8b6ec13a6670c289dc4ac51d',    // sign-up for a key at http://www.last.fm/api
  secret: 'is 6b31fdda029117ad44ecbc86de6e26e2',
  useragent: 'appname/vX.X MyApp' // optional. defaults to lastfm-node.
});

app.get('/', routes.index);
app.get('/users', user.list);

app.get('/abba', function(req, res){
  // var tell = req.query;
  // console.log = tell;
  res.render('index2');
});

app.get('/about', function(req, res){
<<<<<<< HEAD
	// var tell = req.query;
	res.render('index3');
=======
	var tell = req.query;
	console.log(tell.goods);
  res.send("poop");
>>>>>>> bf2388e80593844d10820554884f9fa713709ab8
});

// app.get('/abba', function(req, res){
// 	var show = req.query;
// 	console.log(show.here);
// });


// this is the search request for bands from LastFM
app.post('/search', function(req, res){
	var artId='';
	var artistSearch = req.body.artistSearch;
	var request = lastfm.request("artist.search", {
    	artist: artistSearch,
    	handlers: {
        	success: function(data) {
            console.log(data.results.artistmatches.artist);
            // res.send(data);
            var highest = _.max(data.results.artistmatches.artist, function(o){return parseInt(o.listeners);});
            var artId = highest.mbid;
            console.log(artId);

            // Raine says to make this a function and remove it
              var request = lastfm.request("artist.getInfo", {
              mbid: artId,
              handlers: {
                  success: function(data){
                    console.log(data);
                    res.send(data);
                  },
                  error: function(error){
                  console.log("Error: " + error.message);
                  }
              }

              });
        	},
        	error: function(error) {
        	console.log("Error: " + error.message);
        	}
    	}

	});
  console.log("hoho" + artId);
	// FURTHER GUIDANCE FROM ROB
// res.render("/", {searchResult : jsdjdsj} );
// });
// app.get('/:artistName')
});




http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
