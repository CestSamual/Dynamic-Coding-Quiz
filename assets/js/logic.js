var startButton = document.querySelector("#start");
var questionTitle = document.querySelector("#question-title");
var questionChoices = document.querySelector("#choices");
var choiceButtons = document.querySelector("#choice-buttons");
var finalScore = document.querySelector("#final-score");
var initial = document.querySelector("#initials");
var submitButton = document.querySelector("#submit");
var score = 0;
var timer = 60;
var unhideFeedback = document.querySelector("#feedback");
var unhideEnd = document.querySelector("#end-screen");


function countdown(){
    setTimeout(function(){
        timer --
        document.getElementById("time").innerHTML = timer;
        countdown();
    }, 1000)

}

function timePenalty(){
    timer = timer - 30
    if (timer <= 0){
        unhideEnd.classList.remove("hide");
        document.getElementById("questions").classList.add("hide");
        document.getElementById("timer").classList.add("hide");
        finalScore.textContent = score;

        
    }
}

function printQuestion(i) {
  countdown();
   


  var title = questionArr[i]["questionString"];
  var choices = questionArr[i]["choices"];
  questionTitle.textContent = title;

  for (var j = 0; j < choices.length; j++) {
    var button = document.createElement("button");
    button.textContent = choices[j];
    choiceButtons.appendChild(button);

    button.addEventListener("click", function () {
      if (this.textContent === questionArr[i]["correct"]) {
        unhideFeedback.classList.remove("feedback-hide");
        unhideFeedback.textContent = "Correct!";
        choiceButtons.textContent = "";
        i = i + 1;
        score = score + 1;
        if (i > questionArr.length - 1) {
          unhideEnd.classList.remove("hide");
          unhideFeedback.textContent = "";
          questionTitle.textContent = "";
          finalScore.textContent = score;
          document.getElementById("timer").classList.add("hide");

        


        } else {
          printQuestion(i);
        }
      } else {
        unhideFeedback.classList.remove("feedback-hide");
        unhideFeedback.textContent = "Incorrect!";
        choiceButtons.textContent = "";
        timePenalty();
        i = i + 1;
        if (i > questionArr.length - 1) {
          unhideEnd.classList.remove("hide");
          unhideFeedback.textContent = "";
          questionTitle.textContent = "";
          finalScore.textContent = score;
          document.getElementById("timer").classList.add("hide");

        } else {
          printQuestion(i);
        }
      }
    });
  }
}

function start() {
    
  startButton.addEventListener("click", function () {
    var hideStart = document.querySelector("#start-screen");
    var unhideQuestions = document.querySelector("#questions");
    hideStart.classList.add("hide");
    unhideQuestions.classList.remove("hide");
    document.questionTitle = printQuestion(0);
  });

}

start();

submitButton.addEventListener("click", function () {
    //save to local storage here
    var storageScore = JSON.parse(localStorage.getItem("score"));
    var storageInitial = JSON.parse(localStorage.getItem("initial"));
    if (storageScore ){
        storageScore.push(score);
        localStorage.setItem("score", JSON.stringify(storageScore));
    }else{
        let list = []
        list.push(score);
        localStorage.setItem("score", JSON.stringify(list));
    }
    if (storageInitial ){
        storageInitial.push(initial.value);
        localStorage.setItem("initial", JSON.stringify(storageInitial));
    }else{
        let list = []
        list.push(initial.value);
        localStorage.setItem("initial", JSON.stringify(list));
    }
    
    window.location.href="/highscores.html"

});

