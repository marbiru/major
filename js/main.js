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