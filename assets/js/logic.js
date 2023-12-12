var startButton = document.querySelector("#start");
var questionTitle = document.querySelector("#question-title");


var questionChoices = document.querySelector("#choices");

function printQuestion() {
  var hideStart = document.querySelector("#start-screen");
  var unhideQuestions = document.querySelector("#questions");
  hideStart.classList.add("hide");
  unhideQuestions.classList.remove("hide");

  for (var i = 0; i < questionArr.length; i++) {
    var title = questionArr[i]["questionString"];
    var choices = questionArr[i]["choices"];
    questionTitle.textContent = title;
    questionChoices.textContent = choices;

    console.log(title);
    console.log(choices);
  }
}

function start() {
  startButton.addEventListener("click", function () {
    document.questionTitle = printQuestion();
  });
}

start();
