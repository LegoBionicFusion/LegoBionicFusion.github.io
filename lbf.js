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
			document.getElementById("mode").innerHTML = "Game";
			if (document.getElementById("modeSwitch")){
			document.getElementById("modeSwitch").id = "gameMode";}
			else {
			document.getElementById("freeBrowse").id = "gameMode";}
			document.getElementById("mapContainer").style.padding="0px 100px 0px 100px";
		}
		
		else if (document.getElementById("mode").innerHTML === "Game"){
			document.getElementById("mode").innerHTML = "Free Browse";
			document.getElementById("gameMode").id = "freeBrowse";
			document.getElementById("mapContainer").style.padding="0px 0px 0px 0px";
			}
}	