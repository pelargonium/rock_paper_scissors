let humanScore = 0; //define players score variable
let computerScore = 0; //define computer score variable

let computerChoice = getComputerChoice();
function getComputerChoice() {  //Get computer choice
  let number = Math.random() * 100; //use Math.random * 100 to generate a number
  if (number <= 33) return "rock"; 
      //IF number is <= 33 computerChoice = rock
  else if (number > 33 && number < 67) return "paper";   
      //ElseIf number is >33 && <66 computerChoice = paper 
  else return "scissors";
      //Else computerChoice = scissors
}

let humanChoice = getHumanChoice();
function getHumanChoice() 
{   //define function getHumanChoice
  let output;
  while (output === undefined) //loop until valid input
    {
    let input = prompt("Type rock, paper, or scissors:");  //use prompt method to get user input
    if (input.toLowerCase() === "rock" || input.toLowerCase() === "paper" || input.toLowerCase() === "scissors") //IF user input is rock, paper or scissors 
      {
      output = input.toLowerCase();
      return output; // return humanChoice
      }
    else 
      {
      console.log("Invalid entry. Try again!" )//else display wrong input error and repeat prompt
      }
    }
}

function playRound(computer, human) //define function playRound that accepts two parameters
{
  const answers = {"rock": ["paper","scissors"],"paper": ["scissors","rock"],"scissors": ["rock","paper"]}; //object containing arrays of win/loss conditions for each computer choice
  if (answers[computer][0] === human) //checks if human choice is equal to win condition
    {
      humanScore++; //increments human score
      console.log(`You lose! ${human.charAt(0).toUpperCase()+human.slice(1)} beats ${computer}.`)
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
console.log(computerChoice);
console.log(humanChoice);
playRound(computerChoice, humanChoice);
console.log(humanScore);
console.log(computerScore);

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