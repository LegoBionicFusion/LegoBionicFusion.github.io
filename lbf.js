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
			setTimeout(function()
				{
					document.getElementById("history").style.visibility = "hidden";
					document.getElementById("facts").style.visibility = "hidden";
					document.getElementById("country").style.visibility = "hidden";
				},
				2000);
			
			}
}	

url = document.URL;
if (/rigged$/.test(url))
	{
		var setup = 'rigged';
	}

var validation;

var historyQuestions = [
	['(Question 1)'],
	['(Question 2)'],
	['(Question 3)']
]

var factsQuestions = [
	['(Question 1)'],
	['(Question 2)'],
	['(Question 3)']
]

var points = 0;

function pointsIncrease()
	{
		points = points + 10;
		document.getElementById("score").innerHTML = points;
	}

function question(type)
	{
		document.getElementById("placeHolder").id = "questionBox";
		document.getElementById("questionBox").style.visibility = "visible";
		if (type == 'history')
			{
				document.getElementById("changeQuestion").innerHTML = setup;
				if (setup == 'rigged')
					{
						document.getElementById("changeQuestion").innerHTML = "Who invented the first airplane and when?";
						validation = /(?=.*1903)(?=.*(W|w)right)/;
					}
				else 
					{
						var qIndex = Math.floor(Math.random() * 3);
						document.getElementById("changeQuestion").innerHTML = historyQuestions[qIndex][0];
					}
			}
		else if (type == 'facts')
			{
				if (setup == 'rigged')
					{
						document.getElementById("changeQuestion").innerHTML = "Name a country with the monetary unit of a Peso?";
						validation = /^((a|A)rgentina|(m|M)exico|(c|C)(uba|hile|olombia)|(d|D)ominican (r|R)epublic|(p|P)hilippines|(u|U)ruguay)$/
					}
				else 
					{
						var qIndex = Math.floor(Math.random() * 3);
						document.getElementById("changeQuestion").innerHTML = factsQuestions[qIndex][0];
					}
			}
	}
	
function closeQuestion()
	{
		document.getElementById("questionBox").style.visibility = "hidden";
		document.getElementById("questionBox").id = "placeHolder";
	}

function submit()
	{
		var response = document.getElementById("textField").value;
		if (validation.test(response))
			{
				pointsIncrease();
			}
	}
	