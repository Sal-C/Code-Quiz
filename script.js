var questionPrompt = document.getElementById('question');
var timer = document.getElementById('countdown');

var startPage= document.querySelector('.startPage');
var questionsPage= document.querySelector('.questionsPage');
var resultsPage= document.querySelector('.resultsPage');
var scoreboard = document.querySelector(".scoreboard");
var response = document.querySelector('ol');
var scoreDisplay = document.querySelector('#score');
var submitScore = document.querySelector('#submitScore')
var restartButton = document.querySelector('#restart');
//questions
var questions = [
  {
    title: "",
    choices: "",
    answer: ""
  },
  {
    title: "The condition in an if / else statement is enclosed within ____.",
    choices: ["Quotes", "Curly Brackets", "Parentheses", "Square Brackets"],
    answer: "parentheses"
  },
  {
    title: "Arrays in JavaScript can be used to store ____.",
    choices: ["Strings", "Other Arrays", "Booleans", "All of the Above"],
    answer: "aota"
  },
  {
    title: "String values must be enclosed within ____ when assigned to variables.",
    choices: ["Quotes", "Curly Brackets", "Commas", "Parentheses"],
    answer: "quotes"
  },
  {
    title: "A very useful tool during development and debugging for printing content to the debugger is:",
    choices: ["JavaScript", "console.log", "terminal", "for loops"],
    answer: "quotes"
  }
  
];
//

//answer variables
var a1 = document.getElementById('a1');
var a2 = document.getElementById('a2');
var a3 = document.getElementById('a3');
var a4 = document.getElementById('a4');
//

var timeLeft = 75;
var score =0;

function setScore() {
  scoreDisplay.textContent = 'Score: '+score;
}

function startTimer() {
  startPage.style.display = "none";
  questionsPage.style.display= 'block';

  

  var timeInterval = setInterval(function() {
    timer.textContent = "Time: " + timeLeft;
    timeLeft--;

    if (timeLeft === 0) {
      timer.textContent = "";
      questionsPage.style.display='none';
      resultsPage.style.display='block';
      document.querySelector('#finalScore').textContent = score;
      clearInterval(timeInterval);
    }

  }, 1000);

}



response.addEventListener('click',function(){
    questionPrompt.textContent = questions[1].title;
    a1.textContent = questions[1].choices[0];
    a2.textContent = questions[1].choices[1];
    a3.textContent = questions[1].choices[2];
    a4.textContent = questions[1].choices[3];
    


    response.addEventListener('click',function(){
      document.getElementById('a3').setAttribute( "onClick", "wrong()" );
      document.getElementById('a4').setAttribute( "onClick", "correct()" );
      questionPrompt.textContent = questions[2].title;
      a1.textContent = questions[2].choices[0];
      a2.textContent = questions[2].choices[1];
      a3.textContent = questions[2].choices[2];
      a4.textContent = questions[2].choices[3];

      response.addEventListener('click',function(){
        document.getElementById('a4').setAttribute( "onClick", "wrong()" );
        document.getElementById('a1').setAttribute( "onClick", "correct()" );
        questionPrompt.textContent = questions[3].title;
        a1.textContent = questions[3].choices[0];
        a2.textContent = questions[3].choices[1];
        a3.textContent = questions[3].choices[2];
        a4.textContent = questions[3].choices[3];

        response.addEventListener('click',function(){
          document.getElementById('a1').setAttribute( "onClick", "wrong()" );
          document.getElementById('a2').setAttribute( "onClick", "correct()" );
          questionPrompt.textContent = questions[4].title;
          a1.textContent = questions[4].choices[0];
          a2.textContent = questions[4].choices[1];
          a3.textContent = questions[4].choices[2];
          a4.textContent = questions[4].choices[3];  
          
          response.addEventListener('click',function(){
            document.querySelector('#complete').textContent = 'Complete!';
            document.querySelector('#finalScore').textContent = score;
            questionsPage.style.display='none';
            resultsPage.style.display='block';
          })
        })

        
      })
    })

   
  
})


function correct(){
  score++
  setScore()
}

function wrong(){
  timeLeft--
  timeLeft--
  timeLeft--
  timeLeft--
  timeLeft--
  timeLeft--
  timeLeft--
  timeLeft--
  timeLeft--
  timeLeft--
  timeLeft--
  timeLeft--
  timeLeft--
  timeLeft--
  timeLeft--
}

submitScore.addEventListener('click', function(event){
  event.preventDefault();
  timeLeft = 0;
  resultsPage.style.display='none';
  scoreboard.style.display='block';
  restartButton.style.display='block';
  var storedScore = document.createElement("p");
  storedScore.textContent = "Initials: " + document.getElementById("scoreInitials").value + " | Score: " + score;
  document.querySelector(".scoreboard").appendChild(storedScore);
  
})

restartButton.addEventListener('click', function(){
  location.reload();
})