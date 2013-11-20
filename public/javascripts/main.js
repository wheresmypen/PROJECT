$(function(){

	var source = $("#hb-template").html();
	var template = Handlebars.compile(source);

	// $("#allbar").on('submit', function(e){
	// 	var key = e.which;
	// 	e.preventDefault();
	// 	var serge = $(this).serialize();
	// 	$.post('/searchResults', serge, function(artistInfo){
	// 	console.log(artistInfo);
	// 	// $("#banner").append("<br>" + artistInfo.artist.bio.placeformed + " is a very nice place.");
	// 	});
	// });

// if (albums.isEmpty){
	$.get("/dummy", function(data){
		console.log(data)
		var html = template(data);
		$("#slot").append(html);
	});
// }

// NEED RAINE TO FIX - PASSING ALBUM WITHOUT DATA MAKES THE HANDLEBARS FAIL AND THE APP CRASHES ON LOADING
	// var albums = [{name: "",
 //  				artist: "",
 //  				year: null,
 //  				producer: "",
 //  				engineer: "",
 //  				label: ""}];	

	// var context = {
	// 	"artist":"ABBA",
	// 	"location":"Stockholm, Sweden",
	// 	"members":"daddy"
	// 	};
	// console.log(albums);



	// setTimeout(function(){
		
		// var html = template(albums[0]);
		// $("#slot").append(html);

	// },2500);
	

	// console.log(JSON.stringify(html));

	$.post('/searchResults', function(data){
		console.log('hi');
		debugger
	});

	var cloak = "voulez-vous"

	$("#clkl").on('click', function(){
		console.log("hear me!");
		window.location.href='/artists/abba/voulez-vous'
		// $.get('/about', {"goods": "bads"});
	});



	$("#clkr").on('click', function(){
		console.log("see me!");
		window.location.href='/artists/abba/voulez-vous'


    // $.get('/artists/', {"here": "now"});
	
	});

	$('#compile').on('click', function(){
		console.log("here we are");
		window.location.href='/compile'
	});

});