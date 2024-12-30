  let computerMove = "";
  let playerMove = "";
  let result = "";
  let score = JSON.parse(localStorage.getItem("score")) || {
  win: 0,
  lose: 0,
  tie: 0,
  };

updateScoreElement();

function computerPlay() {
  const random = Math.random();
  if (random >= 0 && random < 0.33) {
    return "Rock";
  } else if (random >= 0.33 && random < 0.66) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

function game(playerMove, computerMove) {
  if (playerMove === computerMove) {
    score.tie += 1;
    result = "It's a Tie.";
  } else if (
    (playerMove === "Rock" && computerMove === "Scissors") ||
    (playerMove === "Paper" && computerMove === "Rock") ||
    (playerMove === "Scissors" && computerMove === "Paper")
  ) {
    score.win += 1;
    result = "You Win!";
  } else {
    score.lose += 1;
    result = "You Lose!";
  }
  maingame();
  localStorage.setItem("score", JSON.stringify(score));
  updateScoreElement();
}

function updateScoreElement() {
  const displayScore = document.querySelector(".displayScore");
  displayScore.textContent = `Wins: ${score.win}, Loses: ${score.lose}, Ties: ${score.tie}`;
}

function maingame() {
  document.querySelector(".displayResult").textContent = result;
  const mainGame = document.querySelector(".mainGame");
  mainGame.innerHTML = `You : <img src="${playerMove}.png" width="50px;" style="border:none;" >  <img src="${computerMove}.png" width="50px;" style="border:none;">: Computer`;
}

console.log(JSON.stringify(score));

