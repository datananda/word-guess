const Letter = function Letter(character) {
    this.character = character;
    this.guessed = false;
};

Letter.prototype.showCharacter = function () {
    if (this.guessed) {
        return this.character;
    }
    return "_";
};

Letter.prototype.checkGuess = function (guessedCharacter) {
    if (guessedCharacter === this.character) {
        this.guessed = true;
    }
};

module.exports = Letter;