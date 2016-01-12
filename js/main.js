$( "#submit" ).click(function () {
	
	var mnemonic = "";
	mnemonic = singleDigitPegArray[2]; // TK remove line when everything actually works

	var usersNumber = $( "#usersNumber" ).val();

	console.log(usersNumber);

	nextSegment = usersNumber.substring(0,2)

	nextImage = pegArray[nextSegment]


	mnemonic = nextImage

	printMnemonic.innerHTML = mnemonic;

});

/* 
def create_mnemonic():

	import pegs

	mnemonic = ""

	the_input = raw_input("Enter the number you'd like to memorise \n")

	while len(the_input) > 1:

		next_number = int(the_input[0:2])
		
		next_image = pegs.pegs_list[next_number]
		
		the_input = the_input[2:]
		
		mnemonic += " " + next_image

	if len(the_input) == 1:

		next_number = int(the_input[0:1])
		
		next_image = pegs.single_digit_peg_list[next_number]
		
		mnemonic += " " + next_image

	else:

		pass

	print mnemonic

create_mnemonic()

*/
