# Word Guess Game

This is a CLI hangman-style word guess game.
*HINT: words are hipster-themed*

## Prerequisites

Install the required node packages:

```
npm install
```

## Running the Application

From the command line:

``` node index.js ```

You will be shown the underscored version of the word to guess. Enter a single letter character and press enter to guess. If you use up all 10 guesses or guess the word correctly, a new word will automatically be selected.

## Packages Used

* [chalk](https://www.npmjs.com/package/chalk) - for pretty colors :)
* [inquirer](https://www.npmjs.com/package/inquirer) - for prompting the user with choices