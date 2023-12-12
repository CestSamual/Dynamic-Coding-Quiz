var startButton = document.querySelector("#start");
var questionTitle = document.querySelector("#question-title");
var questionChoices = document.querySelector("#choices");
var choiceButtons = document.querySelector("#choice-buttons")


function printQuestion(i) {

    var hideStart = document.querySelector("#start-screen");
    var unhideQuestions = document.querySelector("#questions");
    var unhideFeedback = document.querySelector("#feedback");
    hideStart.classList.add("hide");
    unhideQuestions.classList.remove("hide");
    
    var title = questionArr[i]["questionString"];
    var choices = questionArr[i]["choices"];
    questionTitle.textContent = title;
    
    for (var j = 0; j < choices.length; j++) {
        var button = document.createElement("button");
        button.textContent = choices[j];
        choiceButtons.appendChild(button);
    
    
        button.addEventListener("click", function() {
            console.log(this.textContent)
            console.log(questionArr[i]["correct"])
            if (this.textContent === questionArr[i]["correct"]){
                unhideFeedback.classList.remove("feedback-hide");
                unhideFeedback.textContent = "Correct!";
                choiceButtons.textContent = "";
                i = i+1;
                printQuestion(i);

            }else  {
                unhideFeedback.classList.remove("feedback-hide");
                unhideFeedback.textContent = "Incorrect!";
                choiceButtons.textContent = "";
                i = i+1;
                printQuestion(i);
            
        }})
}}



function start() {
  startButton.addEventListener("click", function () {
    document.questionTitle = printQuestion(0);
  });
}

start();
