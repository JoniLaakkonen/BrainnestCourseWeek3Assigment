function getRandomInt(max) {
    return Math.floor(Math.random() * max);
};
function computerPlay() {
    let selectedPlayer;
    let rndmNumber = getRandomInt(3);

    switch (rndmNumber){
        case 0: selectedPlayer = "Rock";
        break;
        case 1: selectedPlayer = "Paper";
        break;
        case 2: selectedPlayer = "Scissors";
        break;
    }
    return selectedPlayer;
};
function selectPlayer() {
    let selectedPlayer;
    let numbr = prompt('Enter number 1-3 to select your move => 1 = Rock, 2 = Paper, 3 = Scissors'); 

    switch(numbr){
        case '1': selectedPlayer = "Rock";
        break;
        case '2': selectedPlayer = "Paper";
        break;
        case '3': selectedPlayer = "Scissors";
        break;
        case '999': selectedPlayer = "OPGodHand";
        break;
        default: selectedPlayer = "Nothing";
        break;
    }
    return selectedPlayer;
};
function playRound(playerSelection, compterSelection) {
    if(playerSelection == "OPGodHand"){
        return "Player wins computer, players hand completely overpowers computers hand";
    }
    else{
        let rockpaperscissors = playerSelection + " " +  compterSelection;
        switch(rockpaperscissors){
            case "Rock Scissors": return "Player wins computer " + playerSelection + " slaps " + compterSelection;
            case "Rock Rock": return "Player and computer ends up in a draw";
            case "Paper Rock": return "Player wins computer " + playerSelection + " beats " + compterSelection;
            case "Paper Paper": return "Player and computer ends up in a draw";
            case "Scissors Paper": return "Player wins computer " + playerSelection + " destroys " + compterSelection;
            case "Scissors Scissors": return "Player and computer ends up in a draw";
            default: return "Computer wins player, " + compterSelection + " is better than " + playerSelection;
        }
    }
};