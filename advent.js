
var now = new Date();
var today = now.getDate();
//console.log(today);

/*get as many giphys as how many days have passed this month*/
var base = "http://api.giphy.com/v1/gifs/search?q=elf+christmas&api_key=zQS6Q69ZYfhp91Rwql4VGCufzkzT0yar&limit=" + today + "";
var xhr = $.get(base);
//var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=elf+christmas&api_key=zQS6Q69ZYfhp91Rwql4VGCufzkzT0yar&limit=30");
xhr.done(function(response) { 
	/*console.log("success got data", response);*/ 
/*--------------------------------------------*/
	
	var jiffs = response.data;

	for (i in jiffs) {

		/*if divdate(from the id) <= today, then do this append*/
		$("#container").append("<img src='"+jiffs[i].images.original.url+"' style='height:200px; width:200px; padding: 1rem;'/>");
	}
});
/*for days after today create divs with a number for each and a border for each (closed door look)
