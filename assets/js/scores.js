// this function will be called by logic.js passing the final score as a parameter
// local storage of final score
// used to display scoreboard

// score (finalScore, initial);
//      DO STUFF

// uses score and intiial from local store
var initial = document.querySelector("#initials");
var highscoreBtn = document.getElementById("clear");

function FinalScore() {
  //load from local storage
  var scores = JSON.parse(localStorage.getItem("score"));
  var initialList = JSON.parse(localStorage.getItem("initial"));
  var scoreboard = document.getElementById("highscores")
  for (var i = 0; i < scores.length; i++){
    var li = document.createElement("li");
    li.textContent = initialList[i] + " - " + scores[i];
    //var newContext = document.createTextNode(initial + " - " + scores[i])
    //li.appendChild(newContext);
    scoreboard.appendChild(li);
    
      
  } 



  return scores;
}

function clearHighscores(){
    localStorage.setItem("score", "[]");
    localStorage.setItem("initial", "[]");
    document.getElementById("highscores").innerHTML = "";
}

highscoreBtn.addEventListener("click", function() {
    clearHighscores();
})

FinalScore();
