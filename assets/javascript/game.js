
	var arrLetter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	var word = ["GIANT PANDA", "ELEPHANT", "BELUGA WHALE", "HIPPOPOTAMUS","GRAY WOLF", "TIGER", "KOOKABURRA", "LION", "RACCOON", "PENGUIN", "SEA LION"];
	var audio = ["assets/audio/panda.mp3", "assets/audio/elephant.mp3", "assets/audio/beluga.mp3", "assets/audio/hippo.mp3", "assets/audio/greywolf.mp3", "assets/audio/tiger.mp3", "assets/audio/kookaburra.mp3", "assets/audio/lion.mp3", "assets/audio/raccoon.mp3", "assets/audio/penguin.mp3", "assets/audio/sealion.mp3"]
	var imgSrc = ["assets/images/panda.jpg", "assets/images/elephant.jpg", "assets/images/beluga.jpg", "assets/images/hippo.jpg", "assets/images/greywolf.jpg", "assets/images/tiger.jpg", "assets/images/kookaburra.jpg", "assets/images/lion.jpg", "assets/images/raccoon.jpg", "assets/images/penguin.jpg", "assets/images/sealion.jpg"];
	var link = ["https://en.wikipedia.org/wiki/Giant_panda", "https://en.wikipedia.org/wiki/Elephant", "https://en.wikipedia.org/wiki/Beluga_whale", "https://en.wikipedia.org/wiki/Hippopotamus", "https://en.wikipedia.org/wiki/Gray_wolf", "https://en.wikipedia.org/wiki/Tiger", "https://en.wikipedia.org/wiki/Kookaburra", "https://en.wikipedia.org/wiki/Lion", "https://en.wikipedia.org/wiki/Raccoon", "https://en.wikipedia.org/wiki/Penguin", "https://en.wikipedia.org/wiki/Sea_lion"];
	var guesses = 10;
	var randomWord, userInput;
	var secretWord = [];
	var wordArray = [];
	var guessedLetters = [];				//array to compare used letters
	var guessedLettersDisplay = [];			//array to display used letters 
	var checkWord = [];
	var wins = 0;
	var losses = 0;


	window.onload = function () {

		function playAudio() {
				animalSound.play();
		}

		function pauseAudio () {
			animalSound.pause();
		}

		document.getElementById("lives").innerHTML = guesses;
		document.getElementById("losses").innerHTML = losses;
		document.getElementById("timesWon").innerHTML = wins;	

		document.getElementById("secretWord").onclick = function restartGame() {

				guesses = 10;
				secretWord.length = 0; //empties word arrays for new game
				wordArray.length = 0;
				checkWord.length = 0;
				guessedLettersDisplay.length = 0; //empties guessed letters array for new game
				guessedLetters.length = 0;
				pauseAudio();
				document.getElementById("animal").src = "assets/images/questionmark.jpg";
				document.getElementById("link").href = "#";
				document.getElementById("usedLetters").innerHTML = guessedLettersDisplay;
				document.getElementById("lives").innerHTML = guesses;


				var indexNumber = Math.floor(Math.random() * 10);	//produces random number to allign word, image and sound
				var image = imgSrc[indexNumber];					//image to be displayed
				var randomWord = word[indexNumber];					//random word to be guessed
				var animalSound = audio[indexNumber];				//animal sound
				var webAddress = link[indexNumber];					//link to wikipedia	
				console.log(randomWord);

				for (var i = 0; i < randomWord.length; i++) {

					if (arrLetter.indexOf(randomWord.charAt(i)) !== -1) {
						wordArray.push(" " + randomWord.charAt(i) + " "); 	//pushes letters with spaces into array to exchange with placeholder at right guess
						secretWord.push(" __ ");							//pushes placeholder into array for display
						checkWord.push(randomWord.charAt(i));
					}

					else {
						wordArray.push('\u00A0\u00A0\u00A0');				//pushes space into array	
						secretWord.push('\u00A0\u00A0\u00A0');				//pushes spaces into array for display
						checkWord.push(randomWord.charAt(i));
					}

				} //closes for loop

				document.getElementById('secretWord').innerHTML = secretWord.join("");  //displays secret word where user clicked

									console.log(secretWord);
									console.log(wordArray);

			document.onkeyup = function() {

				var userGuess = event.key = String.fromCharCode(event.keyCode).toUpperCase();
				console.log(userGuess);


	if (arrLetter.indexOf(userGuess) !== -1) {  // checks if input is valid letter
	


					if (guessedLetters.indexOf(userGuess) === -1) {				//checks if user has guessed the letter before
				console.log(guessedLetters, userGuess);
							guessedLettersDisplay.push(" " + userGuess + " ");	 //pushes guessed Letter into Array to display
							guessedLetters.push(userGuess);


								if (checkWord.indexOf(userGuess) !== -1) {

										for (var i = 0; i < randomWord.length; i++){

										 		if (userGuess === randomWord.charAt(i)) {
												secretWord[i] = wordArray [i];				//swaps underscore with correct letter
												document.getElementById("usedLetters").innerHTML = guessedLettersDisplay.join("");
											}
										} //closes loop
				

								} // closes else if statement


								else {
									guesses--;
									document.getElementById("lives").innerHTML = guesses;
									// guessedLetters.push(userGuess);
									document.getElementById("usedLetters").innerHTML = guessedLettersDisplay.join("");						
								}
	
								if (secretWord.toString() === wordArray.toString()) {
									wins++;
									document.getElementById("animal").src = image;
									document.getElementById("animalSound").src = animalSound;
									document.getElementById("link").href = webAddress;
									playAudio(animalSound);
									document.getElementById("timesWon").innerHTML = wins;
									// restartGame();
								}	

								else if (guesses === 0) { 
									losses++;
									document.getElementById("losses").innerHTML = losses;
									restartGame();
								}			
							}

					else {
						alert("You have already used this letter!");
					}
				
				document.getElementById('secretWord').innerHTML = secretWord.join("");  // updates secretWord with guesses letters
	} //closes if statement that checks for valid user input
					
	else {
		alert("Please choose a letter.");
	}

   } // closes onkeyup function
  } //closes function gameStart
}   // closes onload function