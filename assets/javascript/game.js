	// assign variables

	var word = ["sunflower", "peony", "lavender rose", "rose", "lilly", "snapdragon"];

	var arrLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

	var guesses = 10;
	var randomWord, userInput;
	var secretWord = [];
	var wordArray = [];


// start the game
	window.onload = function () {

			document.getElementById("gameStart").onclick = function() {


				var randomWord = word[Math.floor(Math.random() * word.length)];
				console.log(randomWord);

				for (var i = 0; i < randomWord.length; i++) {

					if (arrLetter.indexOf(randomWord.charAt(i)) !== -1) {
						console.log(randomWord.charAt(i))
						wordArray.push(" " + randomWord.charAt(i) + " ");
						// var correctLetter = document.createTextNode("__ ");
						// document.querySelector("#secretWord").appendChild(correctLetter);
						secretWord.push(" __ ");
					}

					else {
						wordArray.push(randomWord.charAt(i));
						secretWord.push('\u00A0\u00A0\u00A0');
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
				for (var i = 0; i < randomWord.length; i++){
					if (userGuess === randomWord.charAt(i)) {
						secretWord[i] = wordArray [i];
					}
				} // closes for loop
				document.getElementById('secretWord').innerHTML = secretWord.join("");
				} // closes onkeyup function
			
			}; //closes function gameStart


	}   // closes onload function