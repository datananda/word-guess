const Letter = require("./letter");

const Word = function (wordString) {
    this.charArray = wordString.split("").map(char => new Letter(char));
};

Word.prototype.stringify = function () {
    let wordString = "";
    this.charArray.forEach((char) => {
        wordString += char.showCharacter();
    });
    return wordString;
};

const myword = new Word("hello");
console.log(myword.stringify());
