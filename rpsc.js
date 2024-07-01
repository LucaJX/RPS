const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;

document.addEventListener("DOMContentLoaded", function() {
    // Selecteer de buttons
    const rockBtn = document.getElementById("rockBtn");
    const paperBtn = document.getElementById("paperBtn");
    const scissorsBtn = document.getElementById("scissorsBtn");

    // Voeg event listeners toe aan elke button
    rockBtn.addEventListener("click", function() {
        playGame('rock');
    });

    paperBtn.addEventListener("click", function() {
        playGame('paper');
    });

    scissorsBtn.addEventListener("click", function() {
        playGame('scissors');
    });
});


function playGame(playerChoice) {
    // Converteer de keuzes naar kleine letters
    playerChoice = playerChoice.toLowerCase();
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    let result = "";

    if (playerChoice == computerChoice) {
        result = "IT'S A TIE!🪢😒";
    } else if (
        (computerChoice == "rock" && playerChoice == "paper") ||
        (computerChoice == "paper" && playerChoice == "scissors") ||
        (computerChoice == "scissors" && playerChoice == "rock")
    ) {
        result = "You win!";
        playerScore++;
        playerScoreDisplay.textContent = playerScore;
    } else {
        result = "You Lose!";
        computerScore++;
        computerScoreDisplay.textContent = computerScore;
    }

    // Update displays
    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
    resultDisplay.textContent = result;

    return result;
}
