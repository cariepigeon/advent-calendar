
var now = new Date();
var today = now.getDate();
var month = now.getMonth();
if (today > 25) {
	today = 25;
}
//console.log(today);

//make sure it's december
/*if (month == 11) {*/
/*get as many giphys as how many days have passed this month*/
function giphys() {
	var base = "https://cors-anywhere.herokuapp.com/http://api.giphy.com/v1/gifs/search?q=christmas+story&api_key=zQS6Q69ZYfhp91Rwql4VGCufzkzT0yar&limit=" + today + "";
	var xhr = $.get(base);
	//var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=elf+christmas&api_key=zQS6Q69ZYfhp91Rwql4VGCufzkzT0yar&limit=30");
	xhr.done(function(response) { 
		/*console.log("success got data", response);*/ 
	/*--------------------------------------------*/
		
		var jiffs = response.data;
		for (i in jiffs) {
			/*if divdate(from the id) <= today, then do this append*/
			$("#container").append("<img src='"+jiffs[i].images.original.url+"' '/>");
		}
	});
}
/*}*/
/*End of getting giphys----------------------------------------------------------------------------------------------------*/

/*for days after today create divs with a number for each and a border for each (closed door look)*/	
const div = document.querySelector("#container");

function notDecember(div) {
	for (let k = 1; k<26; k++) {
		const divs = document.createElement('div');
		divs.className='newDiv';
		divs.textContent = [k];
		div.appendChild(divs)[k];
	}
}
function attachDivs(div) {
//make 'j' number of divs
	for (let j = (today +1); j<26; j++) {
		//console.log(j);
		const divs = document.createElement('div');
		divs.className='newDiv';
		divs.textContent = [j];
		div.appendChild(divs)[j];
	}
}
//API for getting north pole weather.
var lat = 90;
var lon = 20;
var key = '7986f10690a82af8d4327fa8a81e5f52';
$.ajax({
    url: 'https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather',
    dataType: 'json',
    type: 'GET',
    data: {lat: lat, lon: lon, appid: key, units: 'imperial'},
    
    success: function(data){
      var wf = '';
      
        wf += '<p><b>' + 'North Pole: '+ data.main.temp + '&deg;F ' + '  |  ' + data.weather[0].main /*+ ", " + 
        data.weather[0].description*/ + '<p>'
      $(".weather-container").html(wf);
    }
  });

/*------------------------------------------------*/
if (month === 11) {
	giphys();
	attachDivs(div);
}
else {
	notDecember(div);
	}
