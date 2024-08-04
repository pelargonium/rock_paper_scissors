//Get computer choice
  //declare computerChoice variable
  //define function getComputerChoice 
    //use Math.random * 100 to generate a number
      //IF number is <= 33 computerChoice = rock
      //ElseIf number is >33 && <66 computerChoice = paper 
      //Else computerChoice = scissors
    //return computerChoice
  //define function getHumanChoice
    //use prompt method to get user input
      //IF user input is rock, humanChoice = rock
      //ElseIf user input is paper, humanChoice = paper
      //elseif user input is scissors, humanChoice = scissors
      //else display wrong input error and repeat prompt
    // return humanChoice
//define players score variables
//define function playRound that accepts two parameters
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