import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });

let choices = ['rock', 'paper', 'scissors'];
let computerChoice = choices[Math.floor(Math.random() * choices.length)];

let myChoice = await userInput.question('Kies uit rock, paper, scissors: ');

if (myChoice === 'rock' && computerChoice === 'rock') {
  console.log('You choice is: ' + myChoice + ', computer choice is: ' + computerChoice);
  console.log('Draw!');
} else if (myChoice === 'rock' && computerChoice === 'paper') {
  console.log('You choice is: ' + myChoice + ', computer choice is: ' + computerChoice);
  console.log('You lose!')
} else if (myChoice === 'rock' && computerChoice === 'scissors') {
  console.log('You choice is: ' + myChoice + ', computer choice is: ' + computerChoice);
  console.log('You win!')
} else if (myChoice === 'paper' && computerChoice === 'paper') {
  console.log('You choice is: ' + myChoice + ', computer choice is: ' + computerChoice);
  console.log('Draw!')
} else if (myChoice === 'paper' && computerChoice === 'scissors') {
  console.log('You choice is: ' + myChoice + ', computer choice is: ' + computerChoice);
  console.log('You lose!')
} else if (myChoice === 'paper' && computerChoice === 'rock') {
  console.log('You choice is: ' + myChoice + ', computer choice is: ' + computerChoice);
  console.log('You win!')
} else if (myChoice === 'scissors' && computerChoice === 'scissors') {
  console.log('You choice is: ' + myChoice + ', computer choice is: ' + computerChoice);
  console.log('Draw!')
} else if (myChoice === 'scissors' && computerChoice === 'paper') {
  console.log('You choice is: ' + myChoice + ', computer choice is: ' + computerChoice);
  console.log('You win!')
} else if (myChoice === 'scissors' && computerChoice === 'rock') {
  console.log('You choice is: ' + myChoice + ', computer choice is: ' + computerChoice);
  console.log('You lose!')
} else {
  console.log('You choice is: ' + myChoice + ', computer choice is: ' + computerChoice);
  console.log('Invalid choice');
}

process.exit();