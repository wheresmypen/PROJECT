$(function(){

	$("#allbar").on('submit', function(e){
		var key = e.which;
		e.preventDefault();
		var serge = $(this).serialize();
		$.post('/search', serge, function(artistInfo){
		console.log(artistInfo);
		$("#banner").append("<br>" + artistInfo.results.artistmatches.artist[0].name + " is a very good group.");
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