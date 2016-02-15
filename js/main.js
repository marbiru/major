/* dummy code:
 - a list of the zodiac symbols
 - using the year and a modulo calculation, figure out where we are in the cycle and select "before" or "after"
 - update so that it knows the exact date each year instead of just "february"

*/

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

var newYearDateArray = [
"17th February",
"6th February",
"26th January",
"14th February",
"3rd February",
"23rd January",
"11th February",
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
]

$( "input").on('keyup', function() {
    printNewYearDate.innerHTML = newYearDateArray[0];
    printNewYearDate2.innerHTML = "hello";
});

$( "#before" ).click(function () {

	var inputYear = $( "#inputYear" ).val();

	var moduloYear = (inputYear - 1) % 12;

	console.log(moduloYear);

	printZodiac.innerHTML = zodiacArray[moduloYear];

});

$( "#after" ).click(function () {
	
	var inputYear = $( "#inputYear" ).val();

	var moduloYear = inputYear % 12;

	console.log(moduloYear);
	
	printZodiac.innerHTML = zodiacArray[moduloYear];

});