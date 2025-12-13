function isValidChoice (choice) {
    switch (choice) {
        case "PAPER":
        case "ROCK":
        case "SCISSORS":
            return true;
        default:
            alert("Ce choix n'est pas valide");
            return false;
    }
}

function playerMakeChoice () {
    let playerChoice = "";
    do {
        playerChoice = prompt("Quel est votre choix?","").toUpperCase();
    } while (!isValidChoice(playerChoice))
    return playerChoice;
}

function computerMakeChoice () {
    let randomChoice = Math.ceil(Math.random()*3);
    console.log(randomChoice);
    let computerChoice = "";
    switch (randomChoice) {
        case 1:
            computerChoice = "PAPER";
            break;
        case 2:
            computerChoice = "ROCK";
            break;
        case 3: 
            computerChoice = "SCISSORS";
            break;
    }
    return computerChoice;
}

function allocatePoints (player) {

}

function calculateRoundWinner (player1choice, player2choice) {
    if (player1choice === "ROCK" && player2choice === "SCISSORS") {
        return allocatePoints(player1choice)
    }
}

function matchRound () {
    let playerChoice = playerMakeChoice();
    let computerChoice = computerMakeChoice();
    console.log(`You : ${playerChoice} | Computer : ${computerChoice}`);
}

matchRound();