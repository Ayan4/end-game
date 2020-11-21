let readlineSync = require('readline-sync');

let userName = readlineSync.question("what's your name ? ");

console.log(`welcome ${userName}, do you know Ayan ?`);

var score = 0;
let finalScore = 0;

console.log('');
console.log("Let's begin with GK quiz : ");
console.log('')

function play(heading, question, answer){
  console.log(heading);
  var userAnswer = readlineSync.question(question);

  if(userAnswer === answer){
    console.log('right');
    score += 1;
    finalScore = score;
  }else{
    console.log('wrong');
  }

  console.log(`current score ${score}`);
  console.log('-----------------------')
};

const questionOne = {
  heading: 'Question 1 :',
  question: 'What is the capital of india ? ',
  answer: 'new delhi'
}
const questionTwo = {
  heading: 'Question 2 :',
  question: 'In which country New york city is situated ? ',
  answer: 'usa'
}
const questionThree = {
  heading: 'Question 3 :',
  question: 'which city is called the silicon valley of india ? ',
  answer: 'bangalore'
}

const questions = [questionOne, questionTwo, questionThree];

questions.forEach(i => play(i.heading, i.question, i.answer));

console.log('Game Over !');
console.log(`your final score ${finalScore}`);