
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
		configureEvent(aztecFall, 1521);
		configureEvent(tajMahal, 1653);
		configureEvent(constitution, 1787);
		configureEvent(wrightBros, 1903);
		configureEvent(maoZedong, 1949);
		configureEvent(chernobyl, 1986);
		configureEvent(tohokuEarthquake, 2011);
		
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
	['What region of Japan was hit by an earthquake in 2011?', /^(T|t)ohoku/],
	['Who invented the printing press and when?', /(?=.*(g|G)utenberg)(?=.*145\d)/],
	['When was the Taj Mahal completed?', /^1653$/],
	['In what country did the Chernobyl nuclear disaster occur?', /^(u|U)kraine$/],
	['In what year was the U.S. Constitution signed?', /^1787$/],
	['Which explorer led the siege of Tenochtitlan?', /((h|H)ernan(?=(c|C)ortes) | (c|C)ortes)/],
	['Where in the Americas did Columbus land on his first voyage?', /(b|B)ahamas$/],
	['Name the person who declared the Peoples Republic of China.', /^(z|Z)edong)$/]
]

var factsQuestions = [
	['Name a major language spoken in Brazil.', /^(p|P)ortu(g|gu)ese$/],
	['What is the currency of India?', /^(r|R)upee$/],
	['What is the capital of Malaysia?', /^(k|K)uala (l|L)umpur$/],
	['What is the currency of Japan?', /(y|Y)en$/],
	['What is the capital of Indonesia?', /^(j|J)akarta$/],
	['Name a major language spoken in Peru.', /^((s|S)panish | (e|E)spanol)$/],
]

var points = 0;

function pointsIncrease()
	{
		points = points + 10;
		document.getElementById("score").innerHTML = points;
	}

	
function question(type)
	{
		window.globalType = type;
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
						if (historyQuestions.length == 0)
							
							{
								closeQuestion();
							}
							
						else
							{
								var qIndex = Math.floor(Math.random() * historyQuestions.length);
								document.getElementById("changeQuestion").innerHTML = historyQuestions[qIndex][0];
								validation = historyQuestions[qIndex][1];
								historyQuestions.splice(qIndex, 1);
							}
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
						if (factsQuestions.length == 0)
							
							{
								setTimeout(closeQuestion(), 3000);
							}
							
						else
							{
								var qIndex = Math.floor(Math.random() * factsQuestions.length);
								document.getElementById("changeQuestion").innerHTML = factsQuestions[qIndex][0];
								validation = factsQuestions[qIndex][1];
								factsQuestions.splice(qIndex, 1);
							}
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
			document.getElementById("questionBox").id = "placeHolder";
			question(window.globalType);
			
	}

function trackSlider()
	{
		var x = window.event.clientX;
		document.getElementById('slider').value = ((x-80)*(1007/600))+1001;
		showValue(document.getElementById('slider').value);
	}
	
