// Variables

let winsComputer = 0;
let winsPlayer = 0;
let guessTracker = 0;

// Scorecard Display

const computerWins = document.getElementById("computerWins");
const playerWins = document.getElementById("playerWins");

computerWins.textContent = "Computer Wins: " + winsComputer;
playerWins.textContent = "Player Wins: " + winsPlayer;


// Set Computer Choices from 0-99

//Option A: Generating Array. I like this better but don't know how to pick from it.
const computerChoices = []
for (var i = 0; i < 100; i++) {
    computerChoices.push(i);
}

//Option B: Use Math Random. I don't understnad this but it's less work to get a guess.
const computerGuess = computerChoices[Math.floor(Math.random() * 100 + 1 computerChoices.length)];


// How to Manage User Input

const playerGuess = prompt("What is your guess? (0-100)");

// How to Start Game

document.onkeyup = function (event) {

        const startGame = event.key.toLowerCase();

        if (startGame === p) {
            let guessTracker = 0;
            prompt("What is your guess? (0-100)");
        }

        //Evaluate Guesses

        if (computerGuess === playerGuess) {
            alert("You guessed correctly!");
        } else if (computerGuess > playerGuess) {
            alert("Guess Higher!");
            guessTracker++;
        } else {
            alert("Guess Lower!");
            guessTracker++
        }

        // End Game after score of 5 for either Computer or Player

        if (winsComputer === 5) {
            alert("Game Over, Computer Won!");
        } else if (winsPlayer === 5) {
            alert("Game Over, You Won!");
        } else() {
            alert("Let's play again!");
        }


        //Give Player 3 Guesses

        if guessTracker > 2 {
            alert("You've ran out of guesses!");
        }