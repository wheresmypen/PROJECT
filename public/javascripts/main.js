$(function(){

	$("#allbar").on('submit', function(e){
		var key = e.which;
		e.preventDefault();
		var serge = $(this).serialize();
		$.post('/search', serge, function(artistInfo){
		console.log(artistInfo);
		$("#banner").append("<br>" + artistInfo.artist.bio.placeformed + " is a very nice place.");
		});
	});

	$("#clkl").on('click', function(){
		console.log("hear me!");
		$.get('/about', {"goods": "bads"});
	});

	$("#clkr").on('click', function(){
		console.log("see me!");
		$.get('/abba', {"here": "now"});
	});


})