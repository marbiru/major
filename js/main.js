$( "#submit" ).click(function () {
	
	var mnemonic = "";

	var usersNumber = $( "#usersNumber" ).val();


	nextSegment = usersNumber.substring(0,2);

	nextImage = pegArray[nextSegment];

	usersNumber = usersNumber.substring(2);


	mnemonic = nextImage;

	printMnemonic.innerHTML = mnemonic;

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

