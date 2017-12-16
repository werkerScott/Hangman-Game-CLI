

function Letter(letterArr) {
    this.value = letterArr;
    this.displayVal = "_ "
}

Letter.prototype.checkGuess = function(guess) {
  	if (guess === this.value) {
         this.displayVal = this.value;
     }
    // it matches and hasn't been guessed already - 
    // if (guess === this.value && this.displayVal !== this.value) {
    //     this.displayVal = this.value;
    // }
    // // it matches but has already been guessed - do nothing
    // else if (guess === this.value && this.displayVal === this.value) {
    //     // 0 means it was already guessed
    //     return 0;
    // }
    // // otherwise it didn't match this letter
    // else { return 1; }
}


module.exports = Letter;