
checkLetter = function() {
	if (arrLetter.indexOf(userGuess) !== -1) {
			guessedLettersDisplay.push(" " + userGuess + " ");	 //pushes guessed Letter into Array to display
			guessedLetters.push(userGuess);
			return true;
					}
	else {
			alert("Please choose a letter.");
			return false;
	}}

secretWord = function() {

		var randomWord = word[Math.floor(Math.random() * word.length)];
		console.log(randomWord);

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
		return secretWord;
		document.getElementById('secretWord').innerHTML = secretWord.join("");  //displays secret word where user clicked
				console.log(secretWord);
				console.log(wordArray);
}




resetValues = function() {

				secretWord.length = 0;
				guessedLettersDisplay.length = 0;
				guesses = 10;
				
				document.getElementById("lives").innerHTML = guesses;
				document.getElementById("losses").innerHTML = losses;
				document.getElementById("timesWon").innerHTML = wins;	
				document.getElementById("usedLetters").innerHTML = guessedLettersDisplay;
}

gameWon = function() {

}

gameLost = function() {

}

