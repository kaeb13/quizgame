/*jshint esversion: 6 */

const q_a = document.querySelector(".q-a");
const question = document.createElement("h1");
let score = 0;
const btn = document.createElement("button");
btn.style.fontFamily = "'Press Start 2P', cursive";

const questions = [
    {
        text: "What '80s TV series featured a talking car named KITT?",
        answer: "knight rider"
    },
    {
        text: "What TV series follows the lives of the Ewing family, a wealthy Texas oil family?",
        answer: "dallas"
    },
    {
        text: "Which TV series starred a group of Vietnam War veterans who worked as mercenaries?",
        answer: "the a-team"
    },
    {
        text: "What TV show featured a group of women working together in a New York City police precinct?",
        answer: "cagney & lacey"
    },
    {
        text: "What '80s TV series starred David Hasselhoff as a lifeguard?",
        answer: "baywatch"
    }
];

let currentQuestion = 0;

function game() {
    score = 0;
    currentQuestion = 0;
    displayQuestion();
}

function displayQuestion() {
    if (currentQuestion < questions.length) {
        question.innerHTML = questions[currentQuestion].text;
        q_a.innerHTML = '';
        q_a.appendChild(question);

        const answer = document.createElement("input");
        answer.id = "answer-input";
        answer.setAttribute("autocomplete", "off");
        answer.placeholder = "Type your answer...";
        q_a.appendChild(answer);

        btn.innerHTML = "Submit";
        btn.setAttribute("style",
            `font-family: 'Press Start 2P', cursive;
            font-size: 14px;
            background-color: #ff4c4c;
            cursor: pointer;
            color: #ffff;
            padding: 5px;
            border-radius: 3px;
            border: 1px solid white;
            text-transform: uppercase;`);
            btn.className = "submit-button";
        q_a.appendChild(btn);

        btn.onclick = function () { checkAnswer(); };
    } else {
        displayScore();
    }
}

function checkAnswer() {
    const answerInput = document.getElementById("answer-input");
    const answerVal = answerInput.value.toLowerCase();

    if (answerVal === questions[currentQuestion].answer) {
        alert("Correct answer!");
        score++;
    } else {
        alert("Incorrect answer.");
    }

    currentQuestion++;
    displayQuestion();
}

function displayScore() {
    const scoreResult = document.createElement("div");
    scoreResult.innerHTML = "<span style='color: green;'>Your Score: " + score + "</span>";
    q_a.appendChild(scoreResult);
    
    btn.innerHTML = "Start over";
    btn.onclick = function () { game(); };
}

/* for user to see if logged in*/ 

function checkLoggedInUser() {
    const loggedInUser = localStorage.getItem("username");
    if (loggedInUser) {
      const loggedInUserDiv = document.getElementById("logged-in-user");
      loggedInUserDiv.innerHTML = `Logged in as: ${loggedInUser}`;
    }
  }

function submitForm() {
    const username = document.getElementById('username').value;
    if (username.trim() !== '') {
        localStorage.setItem('username', username);
        location.href = 'thankyouforlogin.html';
    } else {
        alert('Please enter your name.');
    }
}

function loginPage() {
    const submitButton = document.getElementById("submitButton");
    if (submitButton) {
        submitButton.addEventListener("click", submitForm);
    }
}

/* FAKE SCORE PAGE */ 

const users = ['Alice', 'Bob', 'Charlie', 'Dave', 'Eve', 'Frank', 'Grace', 'Henry', 'Ivy', 'Jack', 'Kate', 'Larry', 'Mallory', 'Nancy', 'Oscar', 'Peggy', 'Quincy', 'Rita', 'Steve', 'Tina', 'Victor', 'Wendy', 'Xander', 'Yvonne', 'Zoe'];
const scores = [];

for (let i = 0; i < users.length; i++) {
    scores.push(Math.floor(Math.random() * 5));
}

const scoreboard = document.getElementById('scoreboard');
if (scoreboard) {
    for (let i = 0; i < users.length; i++) {
        const row = document.createElement('tr');
        const rank = document.createElement('td');
        rank.innerText = i + 1;
        const username = document.createElement('td');
        username.innerText = users[i];
        const score = document.createElement('td');
        score.innerText = scores[i];
        row.appendChild(rank);
        row.appendChild(username);
        row.appendChild(score);
        scoreboard.appendChild(row);
    }
}
    

game();
checkLoggedInUser();
loginPage()

document.addEventListener("DOMContentLoaded", function() {
    checkLoggedInUser();
document.getElementById("submitButton").addEventListener("click", submitForm);
});