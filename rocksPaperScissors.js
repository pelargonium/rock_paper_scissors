let humanScore = 0; //define players score variable
let computerScore = 0; //define computer score variable
let playerChoice = "";
let computerChoice = "";

// playGame(humanScore,computerScore); //run the game

let menu = document.querySelector("#playerChoice");
console.log(menu);
menu.addEventListener('click', (event) => {
  let target = event.target;

  switch(target.id) {
      case 'rock':
          console.log('Rock was clicked');
          playerChoice = "rock";
          document.querySelector("#message").innerText = 'Rock was clicked';
          document.querySelector("#playerChoice > .rock").style.backgroundColor = "blue";
          console.log(playerChoice);
          computerChoice = getComputerChoice();
          console.log(computerChoice);
          playRound(computerChoice,playerChoice);
          cleanup();
          break;
      case 'paper':
          console.log('Paper was clicked');
          playerChoice = "paper";
          document.querySelector("#playerChoice > .paper").style.backgroundColor = "blue";
          console.log(playerChoice);
          computerChoice = getComputerChoice();
          console.log(computerChoice);
          playRound(computerChoice,playerChoice);
          cleanup();
          break;
      case 'scissors':
          console.log('Scissors was clicked');
          playerChoice = "scissors";
          document.querySelector("#playerChoice > .scissors").style.backgroundColor = "blue";
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
  playerChoice ="";
  computerChoice ="";
  document.querySelectorAll("button").style.backgroundColor = "gray";
}

// function playGame(human,computer)     
// {                                    
//   while (humanScore <= 1 && computerScore <= 1);

//   if (humanScore > computerScore) 
//   {
//     console.log("You won the game!");
//   }
//   else
//   {
//     console.log("You lost the game!");
//   }
//   return;
// }

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
      return;
    }
  else if (answers[computer][1] === human) //checks if human choice is equal to loss condition
    {
      computerScore++;  //increments computer score
      console.log(`You lose! ${computer.charAt(0).toUpperCase()+computer.slice(1)} beats ${human}.`)
      return;
    }
  else 
    {
      console.log("Draw! Try again!")  //declares draw
      return;
    }
}   

// Change color of buttons depending on win/loss/draw conditions