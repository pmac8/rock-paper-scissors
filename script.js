const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");
const outcomeDiv = document.querySelector(".outcome");
const playerScoreSpan = document.querySelector(".player-score");
const computerScoreSpan = document.querySelector(".computer-score");

// Get computer to randomly select choices

const choice = ['rock','paper','scissors'];
function getComputerChoice(choice){
    return choice[Math.floor(Math.random()*choice.length)];
}

// play a single round of the game

let playerSelection = 0;
let playerScore = 0;
let computerScore = 0;

const computerSelection = getComputerChoice(choice);
function playRound(playerSelection, computerSelection){
    if (playerSelection === 'rock' && computerSelection === 'scissors' ||
    playerSelection === 'paper' && computerSelection === 'rock' ||
    playerSelection === 'scissors' && computerSelection === 'paper'){
        playerScore++
        const p = document.createElement('p')
        p.innerText = 'You win!'
        outcomeDiv.appendChild(p)
    } else if (playerSelection === computerSelection){
        const p = document.createElement('p')
        p.innerText = 'Tie!'
        outcomeDiv.appendChild(p)
    } else {
        computerScore++
        const p = document.createElement('p')
        p.innerText = 'You Lose!'
        outcomeDiv.appendChild(p)
    }
} 

const checkForWinner = (playerScore, computerScore) => {
    if (playerScore === 5){
        const h2 = document.createElement('h2')
        h2.classList.add('player-win')
        h2.innerText = 'You won great job!'
        outcomeDiv.append(h2)
    } 
    
    if (computerScore === 5) {
        const h2 = document.createElement('h2')
        h2.classList.add('computer-win')
        h2.innerText = 'You lost try again!'
        outcomeDiv.append(h2)
    }
}

const updateScores = (playerScore, computerScore) => {
    playerScoreSpan.innerText = `Players Score: ${playerScore}`
    computerScoreSpan.innerText = `Computers Score: ${computerScore}`
}

rockButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice(choice);
    const playerSelection = 'rock';
    playRound(playerSelection, computerSelection);
    updateScores(playerScore,computerScore)
    checkForWinner(playerScore, computerScore)
})

paperButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice(choice);
    const playerSelection = 'paper';
    playRound(playerSelection, computerSelection);
    updateScores(playerScore,computerScore)
    checkForWinner(playerScore, computerScore)
})

scissorsButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice(choice);
    const playerSelection = 'scissors';
    playRound(playerSelection, computerSelection);
    updateScores(playerScore,computerScore)
    checkForWinner(playerScore, computerScore)
})
// play multiple rounds of the game

//function playGame(){
   // for (let i = 0; i < 5; i++) {
      //  let playerSelection = prompt('What do you pick?');
      //  let computerSelection = getComputerChoice(choice);
      //  console.log(`Round ${i}: ${playRound(playerSelection, computerSelection)}`);
    //  }
//}
//playGame();
