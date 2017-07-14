// counter.js
var importantDate = new Date("July 1, 2017 22:36:50");
var rainbowColors = ["#FF0000", "#FF7F00", "#eded00", "#00FF00", "#0000FF", "#4B0082", "#9400D3"];
var i = 0

setInterval(
	function () {
		var now = Date.now();
		var diffMs = now - importantDate.getTime();
		var alreadyDays = Math.round(diffMs/86400000);
		var alreadyHours = Math.round((diffMs % 86400000) / 3600000);
		var alreadyMinutes = Math.round(((diffMs % 86400000) % 3600000) / 60000);
		var alreadySeconds = Math.round(diffMs / (1000) % 60,3);

		document.getElementById("date").innerHTML = (
		"<p>" + "We are in love on  ===> " + importantDate.toString() + "</p>" +
		"<p>" + "Already ===> " + String(alreadyDays) + " days " + 
		String(alreadyHours) + " hours " + String(alreadyMinutes) + " Minutes " +
		String(alreadySeconds) + " Seconds " + "</p>");	
	}
,1000);

setInterval( 
	function () {
		if (i < rainbowColors.length)
			document.getElementById("signature").style.color = rainbowColors[i++];
		else
			i = 0;
	}
, 500);
