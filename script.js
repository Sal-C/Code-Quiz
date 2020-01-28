var questionPrompt = document.getElementById('question');
var timer = document.getElementById('countdown');

var startPage= document.querySelector('.startPage');
var questionsPage= document.querySelector('.questionsPage');
var resultsPage= document.querySelector('.resultsPage');
var response = document.querySelector('ol');
var scoreDisplay = document.querySelector('#score');
//questions
var questions = [
  {
    title: "",
    choices: "",
    answer: ""
  },
  {
    title: "The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses"
  },
  {
    title: "Arrays in JavaScript can be used to store ____.",
    choices: ["strings", "other arrays", "booleans", "all of the above"],
    answer: "aota"
  },
  {
    title: "String values must be enclosed within ____ when assigned to variables.",
    choices: ["quotes", "curly brackets", "commas", "parentheses"],
    answer: "quotes"
  },
  {
    title: "Which of the following is not an operator.",
    choices: ["add", "sub", "del", "yikes"],
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
  scoreDisplay.textContent = score;
}

function startTimer() {
  startPage.style.display = "none";
  questionsPage.style.display= 'block';

  

  var timeInterval = setInterval(function() {
    timer.textContent = timeLeft + " seconds remaining";
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
  
}