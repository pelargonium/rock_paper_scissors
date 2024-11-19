let humanScore = 0; //define players score variable
let computerScore = 0; //define computer score variable
let playerChoice = "";
let computerChoice = "";
let chosenButton = 'LightBlue';
let neutralButton = '#F0F0F0';

let menu = document.querySelector("#playerChoice");
console.log(menu);
menu.addEventListener('click', (event) => {
  let target = event.target;

  switch(target.id) {
      case 'rock':
          console.log('Rock was clicked');
          playerChoice = "rock";
          document.querySelector("#message").innerText = 'Rock was clicked';
          document.querySelector("#playerChoice > .rock").style.backgroundColor = chosenButton;
          console.log(playerChoice);
          computerChoice = getComputerChoice();
          console.log(computerChoice);
          playRound(computerChoice,playerChoice);
          cleanup();
          break;
      case 'paper':
          console.log('Paper was clicked');
          playerChoice = "paper";
          document.querySelector("#playerChoice > .paper").style.backgroundColor = chosenButton;
          console.log(playerChoice);
          computerChoice = getComputerChoice();
          console.log(computerChoice);
          playRound(computerChoice,playerChoice);
          cleanup();
          break;
      case 'scissors':
          console.log('Scissors was clicked');
          playerChoice = "scissors";
          document.querySelector("#playerChoice > .scissors").style.backgroundColor = chosenButton;
          console.log(playerChoice);
          computerChoice = getComputerChoice();
          console.log(computerChoice);
          playRound(computerChoice,playerChoice);
          cleanup();
          break;
  }
});

function cleanup() {
  console.log(`Player: ${humanScore}, Computer: ${computerScore}`);
  document.querySelector("#computerScore").innerText = `${computerScore}`;
  document.querySelector("#playerScore").innerText = `${humanScore}`;
  // document.querySelectorAll("button").style.backgroundColor = "blue";
  setTimeout(() => {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
      button.style.backgroundColor = neutralButton;
    });
  }, 1000); // 2000 milliseconds = 2 seconds
  playerChoice ="";
  computerChoice ="";
  setTimeout(() => {
    document.querySelector("#message").innerText = `Select your button below!`;
  }, 1000);
  playGame(humanScore,computerScore); //run the game
}

function playGame(human,computer)     
{                                    

  function resetGame() {
    humanScore = 0;
    computerScore = 0;
    document.querySelector("#computerScore").innerText = `${computerScore}`;
    document.querySelector("#playerScore").innerText = `${humanScore}`;
    console.log(computerScore);
    return;
  }

  if (humanScore === 5)
  {
    console.log("You won the game!");
    document.querySelector("#message").innerText = `You won the game!`;
    setTimeout(resetGame, 1000);
  }
  else if (computerScore === 5)
  {
    console.log("You lost the game!");
    document.querySelector("#message").innerText = `You lost the game!`;
    setTimeout(resetGame, 1000);
  }
  return;
}

function getComputerChoice() {  //Get computer choice
  let number = Math.random() * 100; //use Math.random * 100 to generate a number
  if (number <= 33) return "rock"; 
      //IF number is <= 33 computerChoice = rock
  else if (number > 33 && number < 67) return "paper";   
      //ElseIf number is >33 && <66 computerChoice = paper 
  else return "scissors";
      //Else computerChoice = scissors
}

function playRound(computer, human) //define function playRound that accepts two parameters
{
  const answers = {"rock": ["paper","scissors"],"paper": ["scissors","rock"],"scissors": ["rock","paper"]}; //object containing arrays of win/loss conditions for each computer choice
  if (answers[computer][0] === human) //checks if human choice is equal to win condition
    {
      humanScore++; //increments human score
      console.log(`You win! ${human.charAt(0).toUpperCase()+human.slice(1)} beats ${computer}.`)
      document.querySelector("#message").innerText = `You win! ${human.charAt(0).toUpperCase()+human.slice(1)} beats ${computer}.`;
      return;
    }
  else if (answers[computer][1] === human) //checks if human choice is equal to loss condition
    {
      computerScore++;  //increments computer score
      console.log(`You lose! ${computer.charAt(0).toUpperCase()+computer.slice(1)} beats ${human}.`)
      document.querySelector("#message").innerText = `You lose! ${computer.charAt(0).toUpperCase()+computer.slice(1)} beats ${human}.`;
      return;
    }
  else 
    {
      console.log("Draw! Try again!")  //declares draw
      document.querySelector("#message").innerText = "Draw! Try again!";
      return;
    }
}   

// Change color of buttons depending on win/loss/draw conditions