
var now = new Date();
var today = now.getDate();
var month = now.getMonth();
//console.log(today);

//make sure it's december
/*if (month == 11) {*/
/*get as many giphys as how many days have passed this month*/
function giphys() {
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
}
/*}*/
/*End of getting giphys----------------------------------------------------------------------------------------------------*/
/*for days after today create divs with a number for each and a border for each (closed door look)*/
	
const div = document.querySelector("#container");

function attachDivs(div) {
//how to make j number of divs
	for (let j = (today +1); j<26; j++) {

		console.log(j);
		const divs = document.createElement('div');
		divs.className='newDiv';

		divs.style.width = "200px";
		divs.style.height = "200px";
		//make text = appropriate day for each div
		divs.textContent = [j];
		div.appendChild(divs)[j];
	}
}

attachDivs(div);
giphys();