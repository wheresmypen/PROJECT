
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

MongoURL = process.env.MONGOHQ_URL || 'mongodb://localhost/revivyl'; 
mongoose.connect(MongoURL);
var db = mongoose.connection;

// create database schema

var albumSchema = mongoose.Schema({
  name: String,
  artist: String,
  mbid: String,
  releaseYear: Number,
  producers: String,
  engineers: String,
  labels: String,
});

if (!albumSchema.options.toObject) albumSchema.options.toObject = {};
albumSchema.options.toObject.transform = function (doc, ret, options) {
  delete ret._id
  delete ret.__v
}

// create album model passing the name and the schema

var Album = mongoose.model('Album', albumSchema);

// pass hard-coded data to album model


var albumData = new Album({
  name: "",
  artist: "",
  mbid: "",
  releaseYear: null,
  producers: "",
  engineers: "",
  labels: ""
});

// calling the save function on this object saves the data to database

albumData.save();


// Album.findOne({artist: "ABBA"}, 'name', function (err, album){
//   if (err) return handleError(err);
//   console.log('%s says hi', album.name)
// });

Album.find(function (err, data){
  if (err){
    console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
    console.log("did not connect");
    console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
  }
  else{
    console.log("####################################################");
    console.log(data);
    console.log("####################################################");
  }
});

// var library = db.Album.find();

// Artist.insert({name:"Abba", albums:["GOLD", "Voulez-vous"], artistID:mbid, members:[mbid[1],mbid[2],mbid[3]]});

// this is for loggin' in and identifying with LastFM for their info
var lastfm = new LastFmNode({
  api_key: 'cd33c3cd8b6ec13a6670c289dc4ac51d',    // sign-up for a key at http://www.last.fm/api
  secret: 'is 6b31fdda029117ad44ecbc86de6e26e2',
  useragent: 'appname/vX.X MyApp' // optional. defaults to lastfm-node.
});

app.get('/', routes.index);
app.get('/users', user.list);

app.get('/searchResults', function(req, res){
  // var tell = req.query;
  // console.log = tell;
  res.render('band-page');
});

app.get('/compile', function(req, res){
	// var tell = req.query;
	res.render('enter-page');

});

app.get("/band-page", function(req, res){
  res.render("band-page");
})

app.post('/albums', function(req, res){
  var albumData = new Album({
    name: req.body.albumTitle,
    artist: req.body.artistTitle,
    mbid: "",
    releaseYear: req.body.titleYear,
    producers: req.body.producersName,
    engineers: "",
    labels: req.body.recordLabel
  });
  albumData.save(function(){
    res.redirect("/artists/" + albumData.artist + "/" + albumData.name);
  })

app.get("/artists/:artist/:album", function(req, res){
  var artist = req.params.artist;
  var album = req.params.album;
  Album.find({artist:artist}, function(err, albums){
    console.log(albums);
   res.render("album-page", {albums: albums});
  });
  console.log("You're in the library now!")

});

  


});

app.get("/dummy", function(req, res){
    Album.find({},  function (err, albumOne) {
      if(err){
        console.log('ERROR');
      }
      else{
        var len = albumOne.length;
        res.send(albumOne[len-1]);
      }
    });
  });



// app.get('/abba', function(req, res){
// 	var show = req.query;
// 	console.log(show.here);
// });


// this is the search request for bands from LastFM
app.post('/searchResults', function(req, res){
	var artId='';
	var artistSearch = req.body.artistSearch;
	var request = lastfm.request("artist.search", {
    	artist: artistSearch,
    	handlers: {
        	success: function(data) {
            console.log(data.results.artistmatches.artist);
            // res.send(data);
            var highest = _.max(data.results.artistmatches.artist, function(o){return parseInt(o.listeners);});
            
            console.log(highest);
            var artId = highest.mbid;
            console.log("%%%%%%%%%%%" + artId);

            // Raine says to make this a function and remove it
              var request = lastfm.request("artist.getInfo", {
              mbid: artId,
              handlers: {
                  success: function(data){
                    console.log("+++++++++++" + data);
                    // res.render('band-page', data);
                    
                    res.send(data);
                  },
                  error: function(error){
                  console.log("Errorinside: " + error.message);
                  }
              }

              });
        	},
        	error: function(error) {
        	console.log("Erroroutside: " + error.message);
        	}
    	}

	});
  console.log("hoho" + artId);

});




http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
