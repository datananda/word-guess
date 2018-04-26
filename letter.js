const Letter = function Letter(character) {
    this.character = character;
    this.guessed = false;
};

Letter.prototype.showCharacter = function () {
    if (this.character === " ") {
        return "  ";
    } else if (this.guessed) {
        return `${this.character} `;
    }
    return "_ ";
};

Letter.prototype.checkGuess = function (guessedCharacter) {
    if (guessedCharacter.toLowerCase() === this.character.toLowerCase()) {
        this.guessed = true;
        return true;
    }
    return false;
};

module.exports = Letter;
