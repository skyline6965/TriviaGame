var startBtn = document.getElementById("startBtn");
var results = document.getElementById("results");
results.style.display = "none";
var quiz = document.getElementById("quiz");
quiz.style.display = "none";
var questions = [{
    Q: "What year did Star Wars: A New Hope come out?", A: "1976",
    
}];

var correct = 0;




function startQuiz() {
    startBtn.style.display = "none";
    quiz.style.display = "block";
}


function getResults() {
    quiz.style.display = "none";
    results.style.display = "block";
}

// *****************************************************************************************
var startButton = document.getElementById('startBtn')

startButton.addEventListener('click', startGame)

function startGame(){
    console.log("started");
    
    console.log(questions);
}


function setNextQuestions(){

}


function selectAnswer(){

}
