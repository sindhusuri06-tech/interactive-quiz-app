const questions = [
  {
    q: "HTML stands for?",
    options: ["Hyper Text Markup Language", "High Text Machine Language", "Hyperlinks Text Mark Language", "None"],
    answer: 0
  }
];

let index = 0;

function loadQuestion() {
  document.getElementById("question").innerText = questions[index].q;
}

function checkAnswer(ans) {
  if (ans === questions[index].answer) {
    document.getElementById("feedback").innerText = "Correct!";
  } else {
    document.getElementById("feedback").innerText = "Wrong!";
  }
}

function nextQuestion() {
  document.getElementById("feedback").innerText = "";
}

loadQuestion();
