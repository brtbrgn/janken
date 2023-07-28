let cpuScore = 0;
let uScore = 0;
let scoreToWin = 5;
let isGameOver = false;

const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

const pPlayer = document.getElementById("player");
const pComputer = document.getElementById("computer")

const roundScore = document.querySelector("#roundScore");
const finalScore = document.querySelector("#finalScore");

rock.addEventListener('click', function() {
    if (!isGameOver){
        roundFight("rock", getComputerChoice())
        endGame();
    }
})
paper.addEventListener('click', function() {
    if (!isGameOver){
        roundFight("paper", getComputerChoice())
        endGame();
    }
})
scissors.addEventListener('click', function() {
    if (!isGameOver){
        roundFight("scissors", getComputerChoice())
        endGame();
    }
})

function getComputerChoice() {
    let rndChoice = Math.floor(Math.random() * 3);
    var txtChoice;
    switch (rndChoice) {
      case 0:
        txtChoice = 'rock';
        break;
      case 1:
        txtChoice = 'paper';
        break;
      case 2:
        txtChoice = 'scissors';
        break;
    }
    return txtChoice;
  }

function roundFight(playerSelection, computerSelection){

    const newLi = document.createElement("li");
    newLi.classList.add('newLi');
    if (cpuScore === 5 || uScore === 5){

    }
        if (playerSelection === computerSelection){
            newLi.innerText = `You: ${playerSelection} and Computer: ${computerSelection}. That's a tie!`;
            roundScore.appendChild(newLi);
        }
        else if (
            (playerSelection === "rock" && computerSelection === "scissors")||
            (playerSelection === "paper" && computerSelection === "rock") ||
            (playerSelection === "scissors" && computerSelection === "paper")
        ){
            uScore++;
            newLi.innerText = `You: ${playerSelection} and Computer: ${computerSelection}. You win!`;
            roundScore.appendChild(newLi);
            pPlayer.textContent = uScore;
        }
        
        else {
            cpuScore++;
            newLi.innerText = `You: ${playerSelection} and Computer: ${computerSelection}. You lost.`;
            roundScore.appendChild(newLi);
            pComputer.innerText = cpuScore;
        }
}

function endGame(){
    if (cpuScore === scoreToWin || uScore === scoreToWin) {
        isGameOver = true;
        if (uScore === scoreToWin) {
          finalScore.innerText = "Winner";
          player.classList.add("winner");
          computer.classList.add("loser");
        } else if (cpuScore === scoreToWin) {
          finalScore.innerText = "Loser";
          computer.classList.add("winner");
          player.classList.add("loser");
        }
      }
}

