/*jshint esversion: 6 */

const q_a = document.querySelector(".q-a");
const question = document.createElement("h1");
let score = 0;
const btn = document.createElement("button");

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
            `font-size: 24px; background-color: #ff4c4c;
            cursor: pointer;
            color: #ffff;
            padding: 5px;
            border-radius: 3px;
            border: 1px solid white;
            text-transform: uppercase;`);
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
    question.innerHTML = "<span style='color: green;'>Your Score: " + score + "</span>";
    btn.innerHTML = "Start over";
    btn.onclick = function () { game(); };
}

game();