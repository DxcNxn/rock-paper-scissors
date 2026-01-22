let computerChoice = "";
let humanChoice = "";

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

