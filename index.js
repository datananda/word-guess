const inquirer = require("inquirer");
const chalk = require("chalk");
const Word = require("./word");

const wordList = ["polaroid", "ethical", "Cosby sweater", "hoodie", "vinyl", "Thundercats", "swag", "retro", "selvage", "Williamsburg", "jean shorts", "heirloom", "tattooed", "farm to table", "DIY", "pickled", "Intelligentsia", "butcher", "drinking vinegar", "High Life", "umami", "YOLO", "roof party", "synth", "bitters", "normcore", "messenger bag", "Blue Bottle", "tote bag", "Bushwick", "Wes Anderson", "irony", "banjo", "four loko", "American Apparel", "mumblecore", "blog", "keytar", "Carles", "hella", "wolf", "crucifix", "gluten free", "forage", "next level", "slow carb", "letterpress", "tofu", "flexitarian", "pour over", "Schlitz", "vegan", "mixtape", "flannel", "gastropub", "Shoreditch", "dreamcatcher", "cray", "Vice", "cardigan", "iPhone", "kogi", "single origin", "coffee", "pop up", "cornhole", "paleo", "fanny pack", "shabby chic", "fixie", "trust fund", "chillwave", "pug", "quinoa", "tousled", "disrupt", "hashtag", "VHS", "Godard", "brunch", "semiotics", "twee", "skateboard", "Truffaut", "salvia", "sartorial", "seitan", "chia", "fap", "beard", "sustainable", "keffiyeh", "Helvetica", "Echo Park", "typewriter", "gentrify", "scenester", "locavore", "Tonx", "street art", "fingerstache", "post ironic", "before they sold out", "ennui", "authentic", "kale chips", "Tumblr", "viral", "mlkshk", "organic", "Pinterest", "artisan", "Neutra", "Kickstarter", "meh", "biodiesel", "PBR", "Marfa", "Etsy", "pork belly", "XOXO", "Odd Future", "literally", "church key", "craft beer", "distillery", "wayfarers", "readymade", "banh mi", "small batch", "food truck", "squid", "Banksy", "raw denim", "narwhal", "Austin", "put a bird on it", "plaid", "asymmetrical", "direct trade", "deep v", "occupy Portland", "art party", "Pitchfork", "sriracha", "stumptown", "leggings", "bicycle rights", "bespoke", "selfies", "master", "cleanse", "you probably have not heard of them", "photo booth", "actually", "fashion", "axe", "cred", "Brooklyn", "kitsch", "cliche", "ugh", "meggings", "chambray", "whatever", "aesthetic", "tryhard", "wolf", "moon", "mustache", "lomo", "freegan"];

const wordGame = {
    currentWord: "",
    guessesRemaining: 10,
    lettersGuessed: [],
    startNewGame() {
        this.guessesRemaining = 10;
        this.lettersGuessed = [];
        const randIndex = Math.floor(Math.random() * wordList.length);
        this.currentWord = new Word(wordList[randIndex]);
        wordList.splice(randIndex, 1);
        console.log(`\nHere's your word to guess:\n${this.currentWord.stringify()}\n`);
        this.runGame();
    },
    runGame() {
        inquirer.prompt([
            {
                type: "input",
                message: "Guess a letter",
                name: "guess",
            },
        ]).then((response) => {
            const guess = response.guess;
            if (/^[a-zA-Z]{1}$/.test(guess)) {
                if (this.lettersGuessed.includes(guess)) {
                    console.log("\nYou already guessed that letter. Try again.\n");
                    this.runGame();
                } else {
                    this.lettersGuessed.push(guess);
                    if (this.currentWord.checkGuess(guess)) {
                        console.log(chalk.green("\nCorrect!"));
                    } else {
                        this.guessesRemaining--;
                        console.log(chalk.red("\nIncorrect!"));
                        console.log(`${this.guessesRemaining} guesses remaining`);
                    }
                    console.log(`${this.currentWord.stringify()}\n`);
                    if (this.guessesRemaining > 0) {
                        if (this.currentWord.lettersRemaining > 0) {
                            this.runGame();
                        } else {
                            console.log("You won!! Choosing a new word...");
                            this.startNewGame();
                        }
                    } else {
                        console.log("You lost!! Starting a new game...");
                        this.startNewGame();
                    }
                }
            } else {
                console.log("\nOnly single letter characters are allowed. Try again.\n");
                this.runGame();
            }
        });
    },
};

wordGame.startNewGame();
