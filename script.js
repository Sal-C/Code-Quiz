var questionPrompt = document.getElementById('question');
var timer = document.getElementById('countdown');

var startPage= document.querySelector('.startPage');
var questionsPage= document.querySelector('.questionsPage');
var resultsPage= document.querySelector('.resultsPage');

//questions
var questions = [
  {
    title: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts"
  },
  {
    title: "The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses"
  },
];
//

//answer variables
var a1 = document.getElementById('a1');
var a2 = document.getElementById('a2');
var a3 = document.getElementById('a3');
var a4 = document.getElementById('a4');
//



function startTimer() {
  startPage.style.display = "none";
  questionsPage.style.display= 'block';
  questionPrompt.textContent = questions[0].title;

  var timeLeft = 75;

  var timeInterval = setInterval(function() {
    timer.textContent = timeLeft + " seconds remaining";
    timeLeft--;

    if (timeLeft === 0) {
      timer.textContent = "";
      questionsPage.style.display='none';
      resultsPage.style.display='block';
      clearInterval(timeInterval);
    }

  }, 1000);

}


function nextQuestion(){
  questionPrompt.textContent = questions[1].title;
  a1.textContent = questions[1].choices[0];
  a2.textContent = questions[1].choices[1];
  a3.textContent = questions[1].choices[2];
  a4.textContent = questions[1].choices[3];
  
  
}
