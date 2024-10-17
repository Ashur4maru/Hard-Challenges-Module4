import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });

let choices = ['rock', 'paper', 'scissors'];
let computerChoice = choices[Math.floor(Math.random() * choices.length)];

let score = 0;
let computerScore = 0;

while (score < 3 && computerScore < 3) {
  let myChoice = await userInput.question('Kies uit rock, paper, scissors: ');
  computerChoice = choices[Math.floor(Math.random() * choices.length)];

  if (myChoice === 'rock' && computerChoice === 'rock') {
    console.log('You choice is: ' + myChoice + ', computer choice is: ' + computerChoice);
    console.log('Draw!');
  } else if (myChoice === 'rock' && computerChoice === 'paper') {
    console.log('You choice is: ' + myChoice + ', computer choice is: ' + computerChoice);
    console.log('You lose!')
    computerScore++;
  } else if (myChoice === 'rock' && computerChoice === 'scissors') {
    console.log('You choice is: ' + myChoice + ', computer choice is: ' + computerChoice);
    console.log('You win!')
    score++;
  } else if (myChoice === 'paper' && computerChoice === 'paper') {
    console.log('You choice is: ' + myChoice + ', computer choice is: ' + computerChoice);
    console.log('Draw!')
  } else if (myChoice === 'paper' && computerChoice === 'scissors') {
    console.log('You choice is: ' + myChoice + ', computer choice is: ' + computerChoice);
    console.log('You lose!')
    computerScore++;
  } else if (myChoice === 'paper' && computerChoice === 'rock') {
    console.log('You choice is: ' + myChoice + ', computer choice is: ' + computerChoice);
    console.log('You win!')
    score++;
  } else if (myChoice === 'scissors' && computerChoice === 'scissors') {
    console.log('You choice is: ' + myChoice + ', computer choice is: ' + computerChoice);
    console.log('Draw!')
  } else if (myChoice === 'scissors' && computerChoice === 'paper') {
    console.log('You choice is: ' + myChoice + ', computer choice is: ' + computerChoice);
    console.log('You win!')
    score++;
  } else if (myChoice === 'scissors' && computerChoice === 'rock') {
    console.log('You choice is: ' + myChoice + ', computer choice is: ' + computerChoice);
    console.log('You lose!')
    computerScore++;
  } else {
    console.log('You choice is: ' + myChoice + ', computer choice is: ' + computerChoice);
    console.log('Invalid choice');
  }
}

if (score > computerScore) {
  console.log('Je hebt gewonen!')
} else {
  console.log('Computer is gewonen!')
}

process.exit();