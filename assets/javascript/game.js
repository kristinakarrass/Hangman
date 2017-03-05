	// assign variables

	var word = ["sunflower", "peony", "lavender rose", "rose", "lilly", "snapdragon"];

	var arrLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

	var guesses = 10;
	var randomWord, userInput;
	var secretWord = [];
	var wordArray = [];
	var guessedLetters = [];
	var checkWord = [];


// start the game
	window.onload = function () {

		document.getElementById("lives").innerHTML = guesses;	

		document.getElementById("gameStart").onclick = function() {


				var randomWord = word[Math.floor(Math.random() * word.length)];
				console.log(randomWord);

				for (var i = 0; i < randomWord.length; i++) {

					if (arrLetter.indexOf(randomWord.charAt(i)) !== -1) {
						console.log(randomWord.charAt(i))
						wordArray.push(" " + randomWord.charAt(i) + " ");
						checkWord.push(randomWord.charAt(i));
						// var correctLetter = document.createTextNode("__ ");
						// document.querySelector("#secretWord").appendChild(correctLetter);
						secretWord.push(" __ ");
					}

					else {
						wordArray.push(randomWord.charAt(i));
						secretWord.push('\u00A0\u00A0\u00A0');
						checkWord.push(randomWord.charAt(i));
						// var notLetter = document.createTextNode('\u00A0\u00A0\u00A0');
						// document.querySelector("#secretWord").appendChild(notLetter);
					}
				} //closes for loop

				document.getElementById('secretWord').innerHTML = secretWord.join("");

									console.log(secretWord);
									console.log(wordArray);

			document.onkeyup = function() {

				var userGuess = event.key = String.fromCharCode(event.keyCode).toLowerCase();
				console.log(userGuess);

					if (checkWord.indexOf(userGuess) !== -1) {

							for (var i = 0; i < randomWord.length; i++){

					// if (guessedLetters.indexOf(userGuess) !== -1) {
						// alert("You have already used this letter!");
					// }				

							 		if (userGuess === randomWord.charAt(i)) {
									secretWord[i] = wordArray [i];
									guessedLetters.push(userGuess);
									document.getElementById("usedLetters").innerHTML = guessedLetters;
								}
							} //closes second loop
	

					} // closes if statement
					else if (guesses === 0) {
						
					}
					else {
						guesses--;
						document.getElementById("lives").innerHTML = guesses;
					}
				// } //closes first for loop

				document.getElementById('secretWord').innerHTML = secretWord.join("");

			} // closes onkeyup function
			
		}; //closes function gameStart


	}   // closes onload function