const questions = [
  { q: "What is 2 + 2?", options: ["3", "4", "5"], answer: 1 },
  { q: "Which is a CSS property?", options: ["margin", "include", "method"], answer: 0 },
  { q: "Which tag is used for JavaScript?", options: ["js", "script", "java"], answer: 1 },
  { q: "What does HTML stand for?", options: ["Hyper Text Markup Language", "Hyperlinks Text Module", "None"], answer: 0 },
  { q: "What is the output of [] + {}?", options: ["[object Object]", "NaN", "Error"], answer: 0 },
  { q: "Which method adds to end of array?", options: ["push()", "pop()", "shift()"], answer: 0 },
  { q: "Use of localStorage?", options: ["Store data", "Display HTML", "Render CSS"], answer: 0 },
  { q: "setTimeout is:", options: ["blocking", "non-blocking", "synchronous"], answer: 1 },
  { q: "Which keyword declares a variable?", options: ["var", "define", "def"], answer: 0 },
  { q: "console.log prints to:", options: ["alert", "console", "screen"], answer: 1 },
  { q: "CSS stands for:", options: ["Cascading Style Sheets", "Coding Style Structure", "Creative Sheet Syntax"], answer: 0 },
  { q: "What is NaN in JS?", options: ["Not a Number", "Null and Nothing", "Negative Number"], answer: 0 },
  { q: "Which CSS unit is relative?", options: ["px", "em", "cm"], answer: 1 },
  { q: "Which array method removes first element?", options: ["pop()", "shift()", "slice()"], answer: 1 },
  { q: "typeof null is:", options: ["object", "null", "undefined"], answer: 0 },
];

let index = 0;
let score = 0;
let timer;
let timerBar;

const quizContainer = document.getElementById('quiz-container');

function startQuiz() {
  showQuestion();
}

function showQuestion() {
  if (index >= questions.length) {
    showResult();
    return;
  }

  const q = questions[index];
  quizContainer.innerHTML = `
    <div class="question">
      <p>${index + 1}. ${q.q}</p>
      <div class="timer" id="timer-bar"></div>
      ${q.options.map((opt, i) => `
        <div>
          <input type="radio" name="opt" id="opt${i}" />
          <label for="opt${i}" onclick="selectAnswer(${i})">${opt}</label>
        </div>`).join('')}
    </div>
  `;

  timerBar = document.getElementById('timer-bar');
  let timeLeft = 100;
  timerBar.style.width = "100%";
  timer = setInterval(() => {
    timeLeft -= 10;
    timerBar.style.width = timeLeft + "%";
    if (timeLeft <= 0) {
      clearInterval(timer);
      nextQuestion();
    }
  }, 1000);
}

function selectAnswer(selected) {
  clearInterval(timer);
  const correct = questions[index].answer;
  const labels = document.querySelectorAll("label");
  labels[correct].classList.add("correct");
  if (selected !== correct) labels[selected].classList.add("incorrect");
  else score++;

  setTimeout(nextQuestion, 1000);
}

function nextQuestion() {
  index++;
  showQuestion();
}

function showResult() {
  document.getElementById("result-modal").classList.remove("hidden");
  document.getElementById("score").textContent = score;
  const stars = "★".repeat(Math.ceil(score / 5)) + "☆".repeat(3 - Math.ceil(score / 5));
  document.getElementById("star-rating").textContent = stars;
  saveScore(score);
}

function saveScore(score) {
  let scores = JSON.parse(localStorage.getItem("quiz-scores") || "[]");
  scores.push(score);
  scores.sort((a, b) => b - a);
  localStorage.setItem("quiz-scores", JSON.stringify(scores.slice(0, 5)));
  showLeaderboard();
}

function showLeaderboard() {
  const scores = JSON.parse(localStorage.getItem("quiz-scores") || "[]");
  document.getElementById("top-scores").innerHTML = scores.map(s => `<li>${s}</li>`).join("");
}

startQuiz();
showLeaderboard();
