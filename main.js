//### Variables
const rules = document.querySelector(".rules");
const close = document.querySelector(".close");
const modal = document.querySelector(".modal");
const replay = document.querySelector(".replay");
const scoreCount = document.querySelector(".counter");
const choices = document.querySelectorAll(".choice-wrapper");
const resultContent = document.querySelector(".win-or-lose h1");
const winLose = document.querySelector(".win-or-lose");
const computerImg = document.querySelector(".computer-img");
const computerCard = document.querySelector(".computer-choice");
const playerImg = document.querySelector(".player-img");
const playerCard = document.querySelector(".player-choice");
const scoreBoard = {
  player: 0,
};
//### Events
// Modals
rules.addEventListener("click", () => {
  modal.classList.add("show");
});
close.addEventListener("click", () => {
  modal.classList.remove("show");
});
window.addEventListener("click", (e) => {
  if (e.target == modal) {
    modal.classList.remove("show");
  }
});
// Choices (Rock, Scissors, Paper)
choices.forEach((choice) => choice.addEventListener("click", play));

//### Functions
// Play Game
function play(e) {
  const playerChoice = e.target.id;
  const computerChoice = getComputerChoice();
  const winner = getWinner(playerChoice, computerChoice);
  // Add Result Load
  showWinner(winner, computerChoice, playerChoice);
  // Add Computer Result Delay
  setTimeout(() => {
    showResult(computerChoice);
  }, 1500);
  winLose.classList.add("win-fade");
  // Replay
  replay.addEventListener("click", () => {
    document.querySelector(".section-content").style.display = "block";
    document.querySelector(".result").style.display = "none";
    winLose.classList.remove("win-fade");
    computerCard.classList.remove(`${computerChoice}`);
    playerCard.classList.remove(`${playerChoice}`);
  });
}
// Get Computer Choice
function getComputerChoice() {
  const random = Math.random();
  if (random < 0.34) {
    return "rock";
  } else if (random <= 0.67) {
    return "paper";
  } else {
    return "scissors";
  }
}
// Get winner
function getWinner(p, c) {
  if (p === c) {
    return "draw";
  } else if (p === "rock") {
    if (c === "paper") {
      return "computer";
    } else {
      return "player";
    }
  } else if (p === "paper") {
    if (c === "scissors") {
      return "computer";
    } else {
      return "player";
    }
  } else if (p === "scissors") {
    if (c === "rock") {
      return "computer";
    }
  } else {
    return "player";
  }
}
// Show Winner
function showWinner(winner, computerChoice, playerChoice) {
  if (winner === "player") {
    scoreBoard.player++;
    resultContent.textContent = "You Win";
    addSrc(computerChoice, playerChoice);
  } else if (winner === "computer") {
    scoreBoard.player--;
    resultContent.textContent = "You Lose";
    addSrc(computerChoice, playerChoice);
  } else {
    resultContent.textContent = "It's a draw";
    addSrc(computerChoice, playerChoice);
  }
  if (scoreBoard.player < 0) {
    scoreBoard.player = 0;
  }
  // Show score
  scoreCount.innerHTML = `<p>${scoreBoard.player}</p>`;
  // Show Result Modal
  document.querySelector(".result").style.display = "block";
  document.querySelector(".section-content").style.display = "none";
  document.querySelector(".computer-img").style.display = "none";
  document.querySelector(".computer-choice").classList.add("loading");
  computerCard.classList.remove(`${computerChoice}`);
}
// Computer Result Delay
function showResult(computerChoice) {
  document.querySelector(".computer-img").style.display = "block";
  document.querySelector(".computer-choice").classList.remove("loading");
  computerCard.classList.add(`${computerChoice}`);
}
// Add Image src
function addSrc(computer, player) {
  computerImg.src = `/images/icon-${computer}.svg`;
  playerImg.src = `/images/icon-${player}.svg`;
  playerCard.classList.add(`${player}`);
}
