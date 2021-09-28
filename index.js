// getting readline-sync package to read input
var readline = require("readline-sync");

// Input
var user = readline.question("Please Enter Your Name ");

// Processing

// Initialsing the score
score = 0;

// Welcome User
console.log("Hello " + user + ", Welcome to the Game 'Test Your Knowlege'");

// show rules
console.log("\n" + "#################################");
console.log("About the Game");
console.log("The game conist of some general knowlegde Questions ... answer them to test your Knowlegde");
console.log("For every correct answer your score will increase by 1");
console.log("For every weong answer your score will decrease by 0.5");
console.log("You need to mark only the correct alphabet from mutiple choices")
console.log("#################################" + "\n");

// function to execute the game
function play(question, correctAnswer){
  var userAnswer = readline.question(question + " ");

  if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()){
    console.log("Yes! You are right");
    score += 1;
  }

  else{
    console.log("Sorry! You are wrong");
    console.log("Correct Answer is ", correctAnswer.toLowerCase())
    score -= 0.5;
  }

  console.log("Your score: ", score );
  console.log("*************");
}

// creating question bank (list of objects)
questionBank = [{
  question : "The electronic toll collection FASTag has been made mandatory from which year? \n a. 2020 b. 2017 c. 2019 d. 2021 \n" ,
  answer : "d"
},
{
  question : "Who gave the call for Evergreen Revolution? \n a. M. S. Swaminathan b.  Verghese Kurien c.  Tribhuvandas Patel d.  H. M. Dalaya \n",
  answer : "a"
},
{
  question : "What is the middle name of batter Sachin Tendulkar? \n a. Rohan b. Ramesh c. Rahul d. Ravi \n",
  answer : "b"
},
{
  question : "Tsunamis are not caused by \n a. Hurricanes b. Earthquakes c. Undersea landslides d. Volcanic eruptions",
  answer : "a"
},
{
  question : "In which year was the Battle of Plassey fought? \n a. 1715 b. 1750 c. 1760 d. 1757 \n",
  answer : "d"
},
{
  question : "Union Budget is always presented first in \n a. The Rajya Sabha  b. Meeting of the Union Cabinet c.  The Lok Sabha  d. Joint session of the Parliament \n",
  answer : "c"
},
{
  question : "Which of the following is not a vector quantity? \n a. Speed  b. Velocity c.  Displacement  d. Acceleration \n",
  answer : "a"
},
{
  question : "Junk e-mail is also called \n a. Spoof  b. Spool c.  Spam  d. Sniffer script \n",
  answer : "c"
},

{
  question : "India is not a member of \n a. G - 20 b. G - 8 c. SAARC d. U.N\n",
  answer : "b"
},
{
  question : "Which of the following has no Skeleton at all ? \n a. Star fish  b. Sponge c.  Jelly fish  d. Silver fish \n",
  answer : "c"
}
];

// traversing each question and calling play function for each question
for(var i=0; i <= questionBank.length - 1; i++){
  play(questionBank[i].question, questionBank[i].answer);
}

// Output
console.log("\n" + "**************");
console.log("Thank You for Playing the Game!!");
console.log("You Scored: ", score);
console.log("**************");