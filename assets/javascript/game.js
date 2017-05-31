var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];


// Default Values
var wins = 0;
var losses = 0;
var guesses = 9;
var guessesLeft = 9;
var guessedLetters = [];
var letterToGuess = null;



var computerPick = alphabet[Math.floor(Math.random() * alphabet.length)];



var updateGuessesLeft = function() {

	document.querySelector('#GuessesLeft').innerHTML = "Guesses Left: " + guessesLeft;
};

var updateLettersToGuess = function() {
    this.letterToGuess = this.alphabet[Math.floor(Math.random() * this.alphabet.length)];
};

var updateGuessesSoFar = function() {
    document.querySelector('#GuessesSoFar').innerHTML = "Your Guesses so Far: " + guessedLetters.join(', ');
};

var reset = function() {

	totalGuesses = 9;
	guessesLeft = 9;
    guessedLetters = [];

	updateLettersToGuess();
	updateGuessesLeft();
	updateGuessesSoFar();
}



document.onkeyup = function(event) {
	guessesLeft--;
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

 guessedLetters.push(userGuess);
  updateGuessesLeft();
  updateGuessesSoFar();

        if (guessesLeft > 0){
            if (userGuess == lettersToGuess){
                wins++;
                document.querySelector('#Wins').innerHTML = "Wins: " + wins;
                reset();
            }
        }else if(guessesLeft == 0){
            losses++;
            document.querySelector('#Losses').innerHTML = "Losses: " + losses;
            
        reset();
        }
};
}