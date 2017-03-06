// assign variables

	var word = ["elephant", "beluga whale", "hippopotamus","grey wolf", "tiger", "kookaburra", "lion", "raccoon", "penguin", "sea lion"];

	var arrLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

	var guesses = 10;
	var randomWord, userInput;
	var secretWord = [];
	var wordArray = [];
	var guessedLetters = [];				//array to compare used letters
	var guessedLettersDisplay = [];			//array to display used letters 
	var checkWord = [];
	var wins = 0;
	var losses = 0;
	// imgArr[0].src = "../images/elephant.jpg";
	// imgArr[1].src = "../images/beluga.jpg";
	// imgArr[2].src = "../images/hippo.jpg";
	// imgArr[3].src = "../images/greywolf.jpg";	
	// imgArr[4].src = "../images/tiger.jpg";
	// imgArr[5].src = "../images/kookaburra.jpg";
	// imgArr[6].src = "../images/lion.jpg";
	// imgArr[7].src = "../images/raccoon.jpg";
	// imgArr[8].src = "../images/penguin.jpg";
	// imgArr[9].src = "../images/sealion.jpg";

// start the game
random = function() {
		var randomWord = word[Math.floor(Math.random() * word.length)];
		return randomWord
}

guessWord = function() {
		random();
		for (var i = 0; i < randomWord.length; i++) {

			if (arrLetter.indexOf(randomWord.charAt(i)) !== -1) {
				console.log(randomWord.charAt(i))
				wordArray.push(" " + randomWord.charAt(i) + " "); 	//pushes letters with spaces into array to exchange with placeholder at right guess
				checkWord.push(randomWord.charAt(i));				//pushes letters into array to compare with userGuess
				secretWord.push(" __ ");							//pushes placeholder into array for display
			}

			else {
				wordArray.push(" " + randomWord.charAt(i) + " ");				//pushes space into array	
				secretWord.push('\u00A0\u00A0\u00A0');				//pushes spaces into array for display
				checkWord.push(randomWord.charAt(i));				//pushes space into array
			}
		} //closes for loop
		// return secretWord;
		document.getElementById('secretWord').innerHTML = secretWord.join("");  //displays secret word where user clicked
				console.log(secretWord);
				console.log(wordArray);
} //closes guessWord function

	window.onload = function () {


		document.getElementById("lives").innerHTML = guesses;
		document.getElementById("losses").innerHTML = losses;
		document.getElementById("timesWon").innerHTML = wins;	

		document.getElementById("secretWord").onclick = function restartGame() {

				secretWord.length = 0;
				guessedLettersDisplay.length = 0;
		random();		
		guessWord();


	document.onkeyup = function() {

				var userGuess = event.key = String.fromCharCode(event.keyCode).toLowerCase();
				console.log(userGuess);


			if (arrLetter.indexOf(userGuess) !== -1) { //checks that user chooses a valid letter

							// guessedLettersDisplay.push(" " + userGuess + " ");	 //pushes guessed Letter into Array to display
							// guessedLetters.push(userGuess);


					if (guessedLetters.indexOf(userGuess) === -1) {				//makes sure user has not used the letter before

									guessedLettersDisplay.push(" " + userGuess + " ");	 //pushes guessed Letter into Array to display
									guessedLetters.push(userGuess);


									if (guesses === 0) {
										losses++;
										document.getElementById("losses").innerHTML = losses;
										document.getElementById("animal").src = "../images/tiger.jpg";
										restartGame();

									}

									else if (secretWord.toString() === wordArray.toString()) {
										wins++;
										document.getElementById("timesWon").innerHTML = wins;
										restartGame();
									}

									else if (checkWord.indexOf(userGuess) !== -1) {

											for (var i = 0; i < randomWord.length; i++){

									// if (guessedLetters.indexOf(userGuess) !== -1) {
										// alert("You have already used this letter!");
									// }				

											 		if (userGuess === randomWord.charAt(i)) {
													secretWord[i] = wordArray [i];				//swaps underscore with correct letter
													// guessedLetters.push(userGuess);				
													document.getElementById("usedLetters").innerHTML = guessedLettersDisplay.join("");
												}
											} //closes second loop
					

									} // closes else if statement

									else {
										guesses--;
										document.getElementById("lives").innerHTML = guesses;
										// guessedLetters.push(userGuess);
										document.getElementById("usedLetters").innerHTML = guessedLettersDisplay.join("");						
									}}
					else {
						alert("You have already used this letter!");
					}
				
				document.getElementById('secretWord').innerHTML = secretWord.join("");

			} // closes if statement that checks for valid letter input

			else {
				alert("Please choose a letter.");
			}








				// } //closes first for loop
					} //closes onkeyup function


			
		} //closes onclick function

	}   // closes onload function