function showValue(newValue)
	{			
		var year=newValue;
		document.getElementById("range").innerHTML=year;
		function configureEvent(event, date)
			{
				if (year >= date)
					{
						event.addTo(map);
				}
			
				else 
					{
						map.removeLayer(event);
				}
			}
		configureEvent(columbusLeft, 1492);
		configureEvent(columbusArrived, 1492);
		configureEvent(columbusJourney, 1492);
		configureEvent(gutenberg, 1450);
		
}

function changeMode()
	{
		if (document.getElementById("mode").innerHTML === "Free Browse"){
			document.getElementById("mode").innerHTML = "Challenge";
			if (document.getElementById("modeSwitch")){
			document.getElementById("modeSwitch").id = "challengeMode";}
			else {
			document.getElementById("freeBrowse").id = "challengeMode";}
			if (document.getElementById("mapContainer")){
			document.getElementById("mapContainer").id = "mapContainerSmall";}
			else {
			document.getElementById("mapContainerBig").id = "mapContainerSmall";}
			document.getElementById("history").style.visibility = "visible";
			document.getElementById("facts").style.visibility = "visible";
			document.getElementById("country").style.visibility = "visible";
			
			}
		
		else if (document.getElementById("mode").innerHTML === "Challenge"){
			document.getElementById("mode").innerHTML = "Free Browse";
			document.getElementById("challengeMode").id = "freeBrowse";
			document.getElementById("mapContainerSmall").id = "mapContainerBig";
			document.getElementById("history").style.visibility = "hidden";
			document.getElementById("facts").style.visibility = "hidden";
			document.getElementById("country").style.visibility = "hidden";
			}
}	

function question(type)
	{
		document.getElementById("placeHolder").id = "questionBox";
		document.getElementById("questionBox").style.visibility = "visible";
		if (type == 'history')
			{
				document.getElementById("changeQuestion").innerHTML = "Who invented the first airplane and when?";
			}
		else if (type == 'facts')
			{
				document.getElementById("changeQuestion").innerHTML = "Which one of these countries has the monetary unit of a Peso?";
			}
	}
	
function closeQuestion()
	{
		document.getElementById("questionBox").style.visibility = "hidden";
		document.getElementById("questionBox").id = "placeHolder";
	}