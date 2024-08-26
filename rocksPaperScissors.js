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
          console.log(playerChoice);
          computerChoice = getComputerChoice();
          console.log(computerChoice);
          playRound(computerChoice,playerChoice);
          cleanup();
          break;
      case 'paper':
          console.log('Paper was clicked');
          playerChoice = "paper";
          console.log(playerChoice);
          computerChoice = getComputerChoice();
          console.log(computerChoice);
          playRound(computerChoice,playerChoice);
          cleanup();
          break;
      case 'scissors':
          console.log('Scissors was clicked');
          playerChoice = "scissors";
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
          playerChoice ="";
          computerChoice ="";
}

//on button click
  //save player choice to humanChoice
  //get computer choice
  //compare input
  //display outcome
  //change score
  //check for win conditions
  //reset humanChoice

// function playGame(human,computer)
                                                     

//     let computerChoice = getComputerChoice();
//     console.log(computerChoice);

//     playRound(computerChoice, humanChoice);

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



  // let rock = document.getElementById("rock");
  // let paper = document.getElementById("paper");
  // let scissors = document.getElementById("scissors");


  // rock.addEventListener("click", function(event){output = "rock"});
  // paper.addEventListener("click", function(event){output = "paper"});
  // scissors.addEventListener("click", function(event){output = "scissors"});



    // let input = prompt("Type rock, paper, or scissors:");  //use prompt method to get user input
    // if (input.toLowerCase() === "rock" || input.toLowerCase() === "paper" || input.toLowerCase() === "scissors") //IF user input is rock, paper or scissors 
    //   {
    //   output = input.toLowerCase();
    //   return output; // return humanChoice
    //   }
    // else 
    //   {
    //   console.log("Invalid entry. Try again!" )//else display wrong input error and repeat prompt
    //   }
// }


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

  //IF humanChoice == rock && computerChoice == paper, display loss prompt, iterate computerScore variable
    //If computerChoice == paper
      //Display loss message, iterate computerScore variable
    //elseIf computerChoice == scissors
      //Display win message, iterate humanScore variable
    //else 
      //Display draw message, end round
  //ELSEIF humanChoice == paper
    //IF computerChoice == Rock
      //Display win message, iterate humanScore variable
    //elseif computerChoice == scissors
      //Display loss message, iterate computerScore variable
    //else
      //Display draw message, end round
  //Else
    //If computerChoice == Rock
      //Display loss message, iterate computerScore variable
    //If computerChoice == Paper
      //Display win message, iterate humanScore variable
    //else
      //Display draw message, end round
//Store score in score variables

//Define function playGame
  //While computerScore + humanScore < 5
    //Run playRound
  //If humanScore > computerScore
    //Display victory message
  //Else
    //Display loss message
    
//Repeat with a loop until best of 5 rounds