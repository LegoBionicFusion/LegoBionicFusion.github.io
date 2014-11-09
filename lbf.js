
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
			
			}
}	

url = document.URL;
if (/rigged$/.test(url))
	{
		var setup = 'rigged';
	}

var validation;

var historyQuestions = [
	['What was the name of the major Japanese earthquake in 2011?', /^(T|t)ohoku/],
	['Who invented the printing press and when?', /(?=.*(g|G)utenberg)(?=.*1455)/],
	['When was the Taj Mahal completed?', /^1643$/],
	['In what country did the Chernobyl nuclear disaster occur?', /^(u|U)kraine$/]
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
		document.getElementById('textField').focus();
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
						validation = historyQuestions[qIndex][1];
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
						validation = factsQuestions[qIndex][1];
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
		document.getElementById('textField').value = null;
		if (validation.test(response))
			{
				pointsIncrease();
				document.getElementById("correct").id = "correctShown";
				setTimeout(function()
				{
					document.getElementById("correctShown").id = "correct";
				},
				3000);
				
			}
			
		else
			{
				document.getElementById("correct").id = "correctShown";
				document.getElementById("correctShown").innerHTML = "Wrong :(";
				document.getElementById("correctShown").style.color = "red";
				setTimeout(function()
				{
					document.getElementById("correctShown").id = "correct";
					document.getElementById("correct").style.color = "#98FB98";
					document.getElementById("correct").innerHTML = "Correct!"
					
				},
				3000);
			}
			document.getElementById("questionBox").style.visibility = "visible";
			document.getElementById("questionBox").id = "placeHolder";
			question(type);	
	}

	
