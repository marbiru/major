var zodiacArray = [
"Monkey",
"Rooster",
"Dog",
"Pig",
"Rat",
"Ox",
"Tiger",
"Rabbit",
"Dragon",
"Snake",
"Horse",
"Goat",
]

var zodiacImageArray = [
"<img src='img/monkey.png'></img>",
"<img src='img/rooster.png'></img>",
"<img src='img/dog.png'></img>",
"<img src='img/pig.png'></img>",
"<img src='img/rat.png'></img>",
"<img src='img/ox.png'></img>",
"<img src='img/tiger.png'></img>",
"<img src='img/rabbit.png'></img>",
"<img src='img/dragon.png'></img>",
"<img src='img/snake.png'></img>",
"<img src='img/horse.png'></img>",
"<img src='img/goat.png'></img>",
]

var newYearDateArray = [
"31st January",
"19th February",
"8th February",
"28th January",
"15th February",
"5th February",
"24th January",
"12th February",
"2nd February",
"22nd January",
"9th February",
"29th January",
"17th February",
"6th February",
"26th January",
"14th February",
"3rd February",
"23rd January",
"11th February",
]

$( "input").on('keyup', function() {

	var inputYear = $( "#inputYear" ).val();

	var moduloYear = inputYear % 19;

    printNewYearDate.innerHTML =newYearDateArray[moduloYear];

    printNewYearDate2.innerHTML =newYearDateArray[moduloYear];
});

$( "#before" ).click(function () {

	var inputYear = $( "#inputYear" ).val();

	var moduloYear = (inputYear - 1) % 12;

	printZodiac.innerHTML = zodiacArray[moduloYear];

	printImage.innerHTML = zodiacImageArray[moduloYear];

});

$( "#after" ).click(function () {
	
	var inputYear = $( "#inputYear" ).val();

	var moduloYear = inputYear % 12;
	
	printZodiac.innerHTML = zodiacArray[moduloYear];

	printImage.innerHTML = zodiacImageArray[moduloYear];

});