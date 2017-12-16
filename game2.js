
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
		app.statusDisplay.start();
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

	    	currentWord.onGuess(answers.guessedLetter);
	    	app.evaluateStatus(currentWord);

		})
	},

	evaluateStatus: function (currentWord) {
		console.log(currentWord);
		console.log("I fired");
		console.log(currentWord.letters[0]);
		console.log(currentWord.letters[1]);
		console.log(currentWord.letters[1].displayVal);

		var tester =[];
		currentWord.letters.displayVal.forEach(function(a) {
        	tester.a.push()
    	});
    	console.log(tester);



		// if (currentWord.indexOf("_ ") === -1) {
		// 	console.log("continue");
		// }


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