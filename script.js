// Get computer to randomly select choices

const choice = ['rock','paper','scissors'];
function getComputerChoice(choice){
    return choice[Math.floor(Math.random()*choice.length)];
}

// play a single round of the game

const playerSelection = 'rock';
const computerSelection = getComputerChoice(choice);
function playRound(playerSelection, computerSelection){
    if (playerSelection === 'rock' && computerSelection === 'scissors' ||
    playerSelection === 'paper' && computerSelection === 'rock' ||
    playerSelection === 'scissors' && computerSelection === 'paper'){
        return 'You Win!'
    } else if (playerSelection === computerSelection){
        return 'Tie!'
    } else {
        return 'You Lose!'
    }
} 
console.log(playRound(playerSelection, computerSelection))