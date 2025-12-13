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

function initializePoints (player1points, player2points) {
    return player1points, player2points = 0;
}

function calculateRoundWinner (player1choice, player2choice, player1points, player2points) {
    if ((player1choice === "ROCK" && player2choice === "SCISSORS")||(player1choice === "PAPER" && player2choice === "ROCK")||(player1choice === "SCISSORS" && player2choice === "PAPER")) {
        player1points++;
        alert("You won the round!");
        console.log(`Scoreboard | You : ${player1points} points | Computer : ${player2points} points`);
    } else if ((player2choice === "ROCK" && player1choice === "SCISSORS")||(player2choice === "PAPER" && player1choice === "ROCK")||(player2choice === "SCISSORS" && player1choice === "PAPER")) {
        player2points++;
        alert("You lost the round...");
        console.log(`Scoreboard | You : ${player1points} points | Computer : ${player2points} points`);
}  else {
    alert("Draw");
    console.log(`Scoreboard | You : ${player1points} points | Computer : ${player2points} points`);
}
return {player1points, player2points};
}

function matchRound (playerPoints, computerPoints) {
    let playerChoice = playerMakeChoice();
    let computerChoice = computerMakeChoice();
    console.log(`You : ${playerChoice} | Computer : ${computerChoice}`);
    calculateRoundWinner(playerChoice, computerChoice, playerPoints, computerPoints);
}

let playerPoints = 0;
let computerPoints = 0;
let rounds = Number(prompt("Combien de rounds ?"));
for (i=0; i<rounds; i++){
    matchRound(playerPoints, computerPoints);
}
alert("Game over.");