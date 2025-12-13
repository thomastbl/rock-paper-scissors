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

function calcPoints (player1, player2) {

}

function calculateRoundWinner (player1choice, player2choice, player1points, player2points) {
    if ((player1choice === "ROCK" && player2choice === "SCISSORS")||(player1choice === "PAPER" && player2choice === "ROCK")||(player1choice === "SCISSORS" && player2choice === "PAPER")) {
        calcPoints(player1points)
    } else if ((player2choice === "ROCK" && player1choice === "SCISSORS")||(player2choice === "PAPER" && player1choice === "ROCK")||(player2choice === "SCISSORS" && player1choice === "PAPER")) {
        calcPoints(player2points)
} 
}

function matchRound () {
    let player1points, player2points = 0;
    let playerChoice = playerMakeChoice();
    let computerChoice = computerMakeChoice();
    console.log(`You : ${playerChoice} | Computer : ${computerChoice}`);
    let rounds = Number(prompt("Combien de rounds ?"));
}

matchRound();