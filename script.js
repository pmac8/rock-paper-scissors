// Get computer to randomly select choices

const choice = ['rock','paper','scissors'];
function getComputerChoice(choice){
    return choice[Math.floor(Math.random()*choice.length)];
}

// play a single round of the game

const playerSelection = 0;
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


// play multiple rounds of the game

//function playGame(){
   // for (let i = 0; i < 5; i++) {
      //  let playerSelection = prompt('What do you pick?');
      //  let computerSelection = getComputerChoice(choice);
      //  console.log(`Round ${i}: ${playRound(playerSelection, computerSelection)}`);
    //  }
//}
//playGame();

const button = document.createElement("button");
button.innerText = "Rock";
button.id = "rock";
button.addEventListener("click", playRound => {
    console.log(playerSelection);
})
document.body.appendChild(button);

const buttonTwo = document.createElement("button");
buttonTwo.innerText = "Paper";
buttonTwo.id = "paper";
buttonTwo.addEventListener("click", playRound  => {
    console.log("paper");
})
document.body.appendChild(buttonTwo);

const buttonThree = document.createElement("button");
buttonThree.innerText = "Scissor";
buttonThree.id = "scissor";
buttonThree.addEventListener("click", playRound  => {
    console.log("scissor");
})
document.body.appendChild(buttonThree);

const div = document.createElement("div");

