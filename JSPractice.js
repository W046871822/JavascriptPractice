var playerChoice;
var computerChoice;

// getting the buttons by their id
var rockButton = document.getElementById("rock");
var paperButton = document.getElementById("paper");
var scissorsButton = document.getElementById("scissors");

// getting the result element
var result = document.getElementById("result");

// function to get computer choice
function getComputerChoice() {
  var choices = ["rock", "paper", "scissors"];
  var randomChoice = Math.floor(Math.random() * 3);
  return choices[randomChoice];
}

// function to determine the winner
function determineWinner(player, computer) {
  if (player === computer) {
    return "Tie!";
  } else if (player === "rock" && computer === "scissors") {
    return "You Win!";
  } else if (player === "paper" && computer === "rock") {
    return "You Win!";
  } else if (player === "scissors" && computer === "paper") {
    return "You Win!";
  } else {
    return "You Lose!";
  }
}

// function to play the game
function play(choice) {
  playerChoice = choice;
  computerChoice = getComputerChoice();
  result.innerHTML = "Your Choice: " + playerChoice + "<br> Computer's Choice: " + computerChoice + "<br>" + determineWinner(playerChoice, computerChoice);
}

// attaching event listeners to the buttons
rockButton.addEventListener("click", function() {
  play("rock");
});
paperButton.addEventListener("click", function() {
  play("paper");
});
scissorsButton.addEventListener("click", function() {
  play("scissors");
});
