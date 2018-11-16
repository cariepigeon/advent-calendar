
var now = new Date();
var today = now.getDate();
var month = now.getMonth();
//console.log(today);

//make sure it's december
/*if (month == 11) {*/
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
			$("#container").append("<img src='"+jiffs[i].images.original.url+"' style='height:200px; width:200px; '/>");
		}
	});
/*}*/
	/*for days after today create divs with a number for each and a border for each (closed door look)*/
	const div = document.querySelector(".next");
	function attachDivs(div) {
		/*Add for loop to create new div for each day left until christmas*/
		let divs = document.createElement('div');
		divs.className='newDiv';

		//content should be 32 - today
		divs.textContent = (31 - `${today}`);
		console.log(divs.textContent);
		divs.style.width = "200px";
		divs.style.height = "200px";
		div.appendChild(divs);
	}
	attachDivs(div);
