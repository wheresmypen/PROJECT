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

	var context = {"artist":"ABBA", "location":"home"};

	var html = template(context);

	console.log(JSON.stringify(html));

	$("#HERTZ").append(html);


var cloak = "voulez-vous"

	$("#clkl").on('click', function(){
		console.log("%#%" + albumData + "%#%");
		window.location.href=('/artists/abba/'+cloak)
		// $.get('/about', {"goods": "bads"});
	});



	$("#clkr").on('click', function(){
		console.log("see me!");
		window.location.href='/artists/abba/voulez-vous'

		// $.get('/artists/abba', {"here": "now"});
	});

	$('#compile').on('click', function(){
		console.log("here we are");
		window.location.href='/compile'
	});

});