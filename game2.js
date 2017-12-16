
// dependencies
var inquirer = require("inquirer");
var	Word = require("./word2.js");

// word constructor
var currentWord, guessCount, areBlanks;

// console.log(game.letters);
// game.renderCurrentWord();


var app = {
	newGame: function () {
		currentWord = new Word();
	    guessCount = 10;
	    areBlanks = true;
	    console.log(currentWord);
		app.statusDisplay.active();
	    currentWord.renderCurrentWord();
	    app.guessLetter();
	},


	guessLetter: function () {
		// ask for letter with inquirer
	    inquirer.prompt([{
	        type: "input",
	        message: "Guess letter",
	        name: "guessedLetter"
	    }]).then(function(answers) {
	    	// passes letter to functions that check to see if match
	    	// updates object if matches
	    	// prints to screen
	    	currentWord.onGuess(answers.guessedLetter);
	    	// pass current object state to evalatuation handler
	    	app.evalStatus(currentWord);
		})
	},

	askEndGame: function () {
		// prompt for yes no
		// if yes
			// then new game
		// if no
			// return
	},

// MAIN LOGIC HERE
	evalStatus: function (currentWord) {
		console.log(currentWord);
		// console.log(currentWord.letters[0]);
		// console.log(currentWord.letters[1]);
		// console.log(currentWord.letters[1].displayVal);

		// GUESSES CHECK
		// remove one from counter

		// if guessCount = 0
			// print you lost
			// then run askEndGame
		// otherwise just continue on


		// var evalBlanks = function result
			// if evalBlanks is true (there is one)
				// then somehow get back to guessLetter and getNewGuess
			// "else" evalBlanks is false (all filled in)
				// then print you won
				// then run askEndGame
		return
	},

	evalBlanks: function () {
		// loop through for blanks
		// return true as soon as one is found
		// if none are found, return false
	},


	udpateDisplay: function () {
		app.statusDisplay.active();
	    currentWord.renderCurrentWord();
	    app.guessLetter();
	},


	statusDisplay: {
		start: function() {console.log("\nWelcome to Hangman\n" + "Guesses remaining: " + guessCount) +"\n"},
		active: function() {console.log("\nGuesses remaining: " + guessCount) +"\n"},
		gameOver: function() {"\nGame Over\n"},
	}
}

////////// RUN GAME ///////////////


app.newGame();