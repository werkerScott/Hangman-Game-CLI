// dependencies
var Letter = require("./letter2.js");
var wordGenerator = require('random-word');
// grab a random word from the generator
var getWord = wordGenerator();
// initialize for renderCurrentWord
var letterArrDisplay =[];



// Create the initial word object
// 1. empty the array
// 2. get the word
// 3. put letters in array
// 4. push one letter at a time into letter constructor 
// 	  which fills the letters property with value pairs
//    and returns an array of objects
function Word() {
    this.letters = []
    var letterArr = getWord.split('')
    for (var i = 0; i < letterArr.length; i++) {
        this.letters.push(new Letter(letterArr[i]))
    }
}


// pass guess to current object and update displayVal
Word.prototype.onGuess = function(guessLetter) {
    this.letters.forEach(function(letter) {
        letter.checkGuess(guessLetter)
    });
    this.renderCurrentWord()
}


// 
Word.prototype.renderCurrentWord = function() {
    this.letters.forEach(function(letter) {
        // console.log(letter.displayVal)
        letterArrDisplay.push(letter.displayVal)
    })
    // turn array of displayVal into string to print to screen
    console.log(letterArrDisplay.join('') + "\n\n");
    // i think need to empty it each time
    letterArrDisplay =[];
}


module.exports = Word;