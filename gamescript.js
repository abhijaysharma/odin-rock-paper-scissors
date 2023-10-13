function getComputerChoice() {
    let string;
    let rand = Math.floor(Math.random() * 3);
    switch (rand) {
        case 0:
            string = "rock";
            break;
        case 1:
            string = "paper"
            break;
        case 2:
            string = "scissors"
            break;
    }
    return string;
}

function playRound(playerSelection, computerSelection) {
    switch (playerSelection.toLowerCase()) {
        case "rock":
            switch(computerSelection) {
                case "rock":
                    return "It's a tie! We both had Rock!"
                case "paper":
                    compPoints++;
                    return "You lose! Paper beats Rock!"
                case "scissors":
                    userPoints++;
                    return "You win! Rock beats Scissors!"
            }
        case "paper":
            switch(computerSelection) {
                case "rock":
                    userPoints++;
                    return "You win! Paper beats Rock!"
                case "paper":
                    return "It's a tie! We both had Paper!"
                case "scissors":
                    compPoints++;
                    return "You lose! Scissors beats Paper!"
            }
        case "scissors":
            switch(computerSelection) {
                case "rock":
                    compPoints++;
                    return "You lose! Rock beats Scissors!"
                case "paper":
                    userPoints++;
                    return "You win! Scissors beats Paper!"
                case "scissors":
                    return "It's a tie! We both had Scissors!"
            }
    }
}

function game() {
    for(let i = 1; i <= 5; i++) {
        playerSelection = prompt("Enter selection for round " + i + ": ");
        computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        console.log("Current Score: User - " + userPoints + ", Computer - " + compPoints);
    }
    
    if (userPoints > compPoints) {
        console.log("You win!")
    }
    else {
        console.log("You lose!")
    }

    return;
}

playerSelection = "start";
computerSelection = "rock";
var userPoints = 0;
var compPoints = 0;
game();