$(function(){

	var source = $("#hb-template").html();
	var template = Handlebars.compile(source);

	$("#allbar").on('submit', function(e){
		var key = e.which;
		e.preventDefault();
		var serge = $(this).serialize();
		$.post('/search', serge, function(artistInfo){
		console.log(artistInfo);
		$("#banner").append("<br>" + artistInfo.artist.bio.placeformed + " is a very nice place.");
		});
	});

	var context = {"artist":"ABBA","location":"home"};

	var html = template(context);

	console.log(JSON.stringify(html));

	$("#HERTZ").append(html);


	// $("#clkl").on('click', function(){
	// 	console.log("hear me!");
	// 	$.get('/about', {"goods": "bads"});
	// });

	// $("#clkr").on('click', function(){
	// 	console.log("see me!");
	// 	$.get('/abba', {"here": "now"});
	// });


})