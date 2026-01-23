let computerChoice = "";
let humanChoice = "";
let computerScore = 0;
let humanScore = 0;

function getComputerChoice() {
    let computer = Math.floor(Math.random() * 3) + 1;
    
    if (computer === 1) {
        computerChoice = "rock";
    } else if (computer === 2) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }

    return computerChoice;
}

function getHumanChoice() {
    humanChoice = prompt("Pick rock, paper, or scissors:", "rock");
    humanChoice = humanChoice.toLowerCase();
    return humanChoice;
}

function playRound(computerChoice, humanChoice) {
    if (computerChoice === humanChoice) {
        console.log("Tie! Your score is: " + humanScore + ". Computer's score is: " + computerScore + ".");
    } else if (computerChoice === "rock" && humanChoice === "paper") {
        humanScore += 1;
        
        console.log("Computer: " + computerChoice + ". Your choice: " + humanChoice + ". You win! Paper beats rock. Computer score: " + computerScore + ". Your score: " + humanScore + ".");
    } else if (computerChoice === "rock" && humanChoice === "scissors") {
        computerScore += 1;
        
        console.log("Computer: " + computerChoice + ". Your choice: " + humanChoice + ". You lose! Rock beats scissors. Computer score: " + computerScore + ". Your score: " + humanScore + ".");
    } else if (computerChoice === "paper" && humanChoice === "rock") {
        computerScore += 1;

        console.log("Computer: " + computerChoice + ". Your choice: " + humanChoice + ". You lose! Paper beats rock. Computer score: " + computerScore + ". Your score: " + humanScore + ".");
    } else if (computerChoice === "paper" && humanChoice === "scissors") {
        humanScore += 1;

        console.log("Computer: " + computerChoice + ". Your choice: " + humanChoice + ". You win! Scissors beats paper. Computer score: " + computerScore + ". Your score: " + humanScore + ".");
    } else if (computerChoice === "scissors" && humanChoice === "rock") {
        humanScore += 1;

        console.log("Computer: " + computerChoice + ". Your choice: " + humanChoice + ". You win! Rock beats scissors. Computer score: " + computerScore + ". Your score: " + humanScore + ".");
    } else if (computerChoice === "scissors" && humanChoice === "paper") {
        computerScore += 1;

        console.log("Computer: " + computerChoice + ". Your choice: " + humanChoice + ". You lose! Scissors beats paper. Computer score: " + computerScore + ". Your score: " + humanScore + ".");
    } else {
        console.log("Invalid input. Try again.");
    }
}

const computerSelection = getComputerChoice();
const humanSelection = getHumanChoice();

console.log(computerSelection);
console.log(humanSelection);

playRound(computerSelection, humanSelection);