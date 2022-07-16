function getRandomInt(max) {
    return Math.floor(Math.random() * max);
};
function computerPlay() {
    let selectedPlayer;
    let rndmNumber = getRandomInt(3);

    switch (rndmNumber) {
      case 0:
        selectedPlayer = "Rock";
        break;
      case 1:
        selectedPlayer = "Paper";
        break;
      case 2:
        selectedPlayer = "Scissors";
        break;
    }
    return selectedPlayer;
};
function selectPlayer() {
    let selectedPlayer;
    let selectedMove = prompt('Type in what is your call; Rock, paper or Scissors').toLowerCase(); 
    //let numbr = prompt('Enter number 1-3 to select your move => 1 = Rock, 2 = Paper, 3 = Scissors'); 
    selectedMove = selectedMove.toLowerCase(); 
    
    switch (selectedMove) {
      case "rock":
        selectedPlayer = "Rock";
        break;
      case "paper":
        selectedPlayer = "Paper";
        break;
      case "scissors":
        selectedPlayer = "Scissors";
        break;
      default:
        alert("You did not give valid move! please try again and check spelling.");
        selectPlayer();
        break;
    }
    return selectedPlayer;
};
function playRound(playerSelection, compterSelection) {
    let rockpaperscissors = playerSelection + " " + compterSelection;
    switch (rockpaperscissors) {
        case "Rock Scissors":
            return 1;
        case "Rock Rock":
            return 3;
        case "Paper Rock":
            return 1;
        case "Paper Paper":
            return 3;
        case "Scissors Paper":
            return 1;
        case "Scissors Scissors":
            return "Player and computer ends up in a draw";
        default:
            return 2;
        }
};


function game(){
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const playerSelection = selectPlayer();
        const compterSelection = computerPlay();
        const round = playRound(playerSelection, compterSelection);
        if (round == 1) {
            console.log("Player wins computer, " + playerSelection + " beats " + compterSelection);
            playerScore++;
        } else if (round == 2) {
            console.log("Computer wins player, " + compterSelection + " beats " + playerSelection);
            computerScore++;
        }
        else{
            console.log("Draw, no winner for this round");
        }
    }

    if (computerScore == playerScore){
        console.log("Computer and player end up in draw");
    }
    else if (computerScore > playerScore){
        console.log("Computer wins player with score of " + computerScore, playerScore);
    }
    else if (computerScore < playerScore){
        console.log("Player wins computer with score of " + playerScore, computerScore);
    }
};

game();
