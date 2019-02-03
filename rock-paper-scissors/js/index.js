const winningSound = new Audio(
  "http://www.wavsource.com/snds_2018-06-03_5106726768923853/sfx/chime.wav"
);

const rock = document.getElementById("rock").addEventListener("click", run);
const paper = document.getElementById("paper").addEventListener("click", run);
const scissors = document.getElementById("scissors").addEventListener("click", run);

const player = document.getElementById("player");
const opponent = document.getElementById("opponent");
const result = document.getElementById("result");

let playerChoice;
let opponentChoice;

function opponentPick() {
  let randomPick = Math.floor(Math.random() * 12 + 1);
  if (randomPick <= 4) {
    opponentChoice = "Rock";
  } else if (randomPick <= 8 && randomPick > 4) {
    opponentChoice = "Paper";
  } else {
    opponentChoice = "Scissors";
  }
}

function chooseWinner() {
  document.getElementById("player").innerHTML = `You have chosen ${playerChoice}`;
  document.getElementById("opponent").innerHTML = `Your opponent has chosen ${opponentChoice}`;

  if (playerChoice === opponentChoice) {
    document.getElementById("result").innerHTML = `You Tied!`;
  } else if (playerChoice === "Rock" && opponentChoice === "Paper") {
    document.getElementById("result").innerHTML = `You Lost!`;
  } else if (playerChoice === "Rock" && opponentChoice === "Scissors") {
    document.getElementById("result").innerHTML = `You Won!`;
    winningSound.play();
  } else if (playerChoice === "Paper" && opponentChoice === "Scissors") {
    document.getElementById("result").innerHTML = `You Lost!`;
  } else if (playerChoice === "Paper" && opponentChoice === "Rock") {
    document.getElementById("result").innerHTML = `You Won!`;
    winningSound.play();
  } else if (playerChoice === "Scissors" && opponentChoice === "Rock") {
    document.getElementById("result").innerHTML = `You Lost!`;
  } else if (playerChoice === "Scissors" && opponentChoice === "Paper") {
    document.getElementById("result").innerHTML = `You Won!`;
    winningSound.play();
  }
}

function run() {
  playerChoice = this.innerText;
  opponentPick();
  chooseWinner();
}