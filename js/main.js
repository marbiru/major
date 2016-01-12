$( "#submit" ).click(function () {
	
	var mnemonic = "";

	var usersNumber = $( "#usersNumber" ).val();

	while (usersNumber.length > 1) {

		nextSegment = usersNumber.substring(0,2);

		if (nextSegment[0] == 0) {

			nextSegment = nextSegment[1];
		
		};

		nextImage = pegArray[nextSegment];

		usersNumber = usersNumber.substring(2);

		mnemonic += " " + nextImage;

	};

	if (usersNumber.length == 1) {
		
		nextSegment = usersNumber.substring(0,1);

		nextImage = singleDigitPegArray[nextSegment];

		mnemonic += " " + nextImage;
	};

	printMnemonic.innerHTML = mnemonic;

});