/*jshint esversion: 6 */

// Create questions - and answers
var q_a = document.querySelector(".q-a");
var question = document.createElement("h1");
var score = 0;
var btn = document.createElement("button");
btn.innerHTML = "Check Your Answer";

function game() {
    score = 0;
    var answer = document.createElement("input");
    answer.setAttribute("answer", "4");
    answer.id = "answer-input";
    answer.setAttribute("autocomplete", "off");
    answer.placeholder = "Type your answer...";
    answer.setAttribute("second-answer", "four");
    question.innerHTML = "How many members are in the music group ABBA?";
    q_a.appendChild(question);
    q_a.appendChild(answer);
    q_a.appendChild(document.createElement("br"));
    q_a.appendChild(btn);
    btn.innerHTML = "submit";
    btn.setAttribute("style", 
      `font-size: 24px; background-color: #ff4c4c; 
       cursor: pointer;
       color: #ffff;
       padding: 5px;
       border-radius: 3px;
       border: 1px solid white;
       text-transform: uppercase;`);

    // answer check and continue // 
    btn.onclick = function() { checkAns1(); };

    function checkAns1() {
      var answerInput = document.getElementById("answer-input");
      var answerVal = answerInput.value.toLowerCase();
      var mainAnswer = answerInput.getAttribute("answer");
      var secondAnswer = answerInput.getAttribute("second-answer");
      if(answerVal==mainAnswer || answerVal==secondAnswer) {
        alert("Correct answer!");
        answerInput.value = "";
        score++;
        question.innerHTML = "What is the capital of Sweden?";
        answer.setAttribute("answer", "stockholm");
        answer.setAttribute("second-answer", "Stockholm");
        btn.onclick = function() { checkAns2(); } ;
      } else {
        alert("Incorrect answer.");
        answerInput.value = "";
        question.innerHTML = "What is the capital of Sweden?";
        answer.setAttribute("answer", "stockholm");
        answer.setAttribute("second-answer", "Stockholm");
        btn.onclick = function() { checkAns2(); } ;
      }
    }
    
    function checkAns2() {
  var answerInput = document.getElementById("answer-input");
  var answerVal = answerInput.value.toLowerCase();
  var mainAnswer = answerInput.getAttribute("answer");
  var secondAnswer = answerInput.getAttribute("second-answer");
  if(answerVal==mainAnswer || answerVal==secondAnswer) {
    alert("Correct answer!");
    answerInput.value = "";
    score++;
    question.innerHTML = "In which month do you celebrate swedish midsummer?";
    answer.setAttribute("answer", "june");
    answer.setAttribute("second-answer", "June");
    btn.onclick = function() { checkAns3(); } ;
  } else {
    alert("Incorrect answer.");
    answerInput.value = "";
    question.innerHTML = "In which month do you celebrate swedish midsummer?";
    answer.setAttribute("answer", "june");
    answer.setAttribute("second-answer", "June");
    btn.onclick = function() { checkAns3(); } ;
  }
}
  

function checkAns3() {
    var answerInput = document.getElementById("answer-input");
    var answerVal = answerInput.value.toLowerCase();
    var mainAnswer = answerInput.getAttribute("answer");
    var secondAnswer = answerInput.getAttribute("second-answer");
    if(answerVal==mainAnswer || answerVal==secondAnswer) {
      alert("Correct answer!");
      score++;
      answerInput.value = "";
      question.innerHTML =  "What is the Swedish world-famous furniture making company called?";
      answer.setAttribute("answer", "ikea");
      answer.setAttribute("second-answer", "");
      btn.onclick = function() { checkAns4(); } ;
    } else {
      alert("Incorrect answer.");
      answerInput.value = "";
      question.innerHTML = "What is the Swedish world-famous furniture making company called?";
      answer.setAttribute("answer", "ikea");
      answer.setAttribute("second-answer", "");
      btn.onclick = function() { checkAns4(); } ;
    }
  }
  

  function checkAns4() {
    var answerInput = document.getElementById("answer-input");
    var answerVal = answerInput.value.toLowerCase();
    var mainAnswer = answerInput.getAttribute("answer");
    var secondAnswer = answerInput.getAttribute("second-answer");
    if(answerVal==mainAnswer) {
      alert("Correct answer!");
      answerInput.value = "";
      score++;
      question.innerHTML = " What is the colour of the cross on the Swedish flag?";
      answer.setAttribute("answer", "yellow");
      answer.setAttribute("second-answer", "");
      btn.onclick = function() { checkAns5(); };
    } else {
  
      alert("Incorrect answer.");
      answerInput.value = "";
      question.innerHTML = " What is the colour of the cross on the Swedish flag?";
      answer.setAttribute("answer", "yellow");
      answer.setAttribute("second-answer", "");
      btn.onclick = function() { checkAns5(); } ;
    }
  }
  function checkAns5() {
  var answerInput = document.getElementById("answer-input");
  var answerVal = answerInput.value.toLowerCase();
  var mainAnswer = answerInput.getAttribute("answer");
  var secondAnswer = answerInput.getAttribute("second-answer");
  if(answerVal==mainAnswer) {
    alert("Correct answer!");
    score++;
    question.innerHTML = "<span style='color: green;'>Your Score: " + score + "</span>";
    answerInput.remove();
    btn.innerHTML = "start over";
    btn.style.background = "#ff2626";
    answerInput.value = "";
    btn.style.color = "white";
    btn.style.textTransform = "uppercase";
    btn.onclick = function() { game() ;} ;
  } else {
    alert("Incorrect answer.");
    answerInput.remove();
   
    btn.innerHTML = "start again";
    btn.style.background = "#E7625F";
    btn.style.color = "white";
    btn.style.textTransform = "uppercase";
    btn.onclick = function() { game() ;};
    question.innerHTML = "<span style='font-family: Lucida Console;'>Your Score: " + score + "</span>";
  }
}

window.checkAns1 = checkAns1;
window.checkAns2 = checkAns2;
window.checkAns3 = checkAns3;
window.checkAns4 = checkAns4;
window.checkAns5 = checkAns5;
}

var start = document.createElement("button");
start.innerText = "START";
start.style.background = "#ff2626";
start.style.color = "white";
start.onclick = startGame();

function startGame() {
 start.remove();
 game();
}