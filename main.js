// Rock, Paper, Scissors

    
var getUserChoice = function () {
    userChoice = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        return userInput;
    } else {
        console.log ('Choice Input Error. Please enter one of the following only; rock, paper, or scissors. Thank you. ')
    }
}

getUserChoice('rock');

var getComputerChoice = function () {
   computerChoice = Math.floor(Math.random) * 2;
   if (computerChoice = 0) {
    return 'rock';
   } else if (computerChoice = 1) {
    return 'paper';
   } else if (computerChoice = 2) {
    return 'scissors';
   } 
}

getComputerChoice();

var determineWinner = function (userChoice, computerChoice) {
if (userChoice === computerChoice) {return `This game is a tie`;
} else if (userChoice === 'rock' && computerChoice != 'paper') {return 'You win';
} else if (userChoice === 'rock' && computerChoice === 'paper') {return 'You lose';
} else if (userChoice === 'paper' && computerChoice != 'scissors') {return'You win';
} else if (userChoice === 'rock' && computerChoice === 'scissors') {return 'You lose';
} else if (userChoice === 'scissors' && computerChoice != 'rock') {return 'You win';
} else if (userChoice === 'scissors' && computerChoice === 'rock') {return 'You lose';
}
}

var playGame = function (userChoice = getUserChoice(), computerChoice = getComputerChoice()) {
    console.log (`${userChoice} ${computerChoice}`)
};

determineWinner();
