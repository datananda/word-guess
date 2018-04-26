const Letter = require("./letter");

const Word = function (wordString) {
    this.letterArray = wordString.split("").map(char => new Letter(char));
    this.lettersRemaining = wordString.split(" ").join("").length;
};

Word.prototype.stringify = function () {
    let wordString = "";
    this.letterArray.forEach((letter) => {
        wordString += letter.showCharacter();
    });
    return wordString.trim();
};

Word.prototype.checkGuess = function (guessedCharacter) {
    let result = false;
    this.letterArray.forEach((letter) => {
        if (letter.checkGuess(guessedCharacter)) {
            this.lettersRemaining--;
            console.log(this.lettersRemaining);
            result = true;
        }
    });
    return result;
};

module.exports = Word;
