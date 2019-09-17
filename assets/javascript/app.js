var number = 120;
var intervalId;





var startBtn = document.getElementById("startBtn");
// var results = document.getElementById("results");
var score = 0;
var answers = ["a", "b", "c", "b"];
var tot = answers.length;

//Start Button to Render Quiz
function startQuiz() {
    startBtn.style.display = "none";
    quiz.style.display = "block";
}

$("#startBtn").on("click", run)

function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);


    function decrement() {
        number--;
        $("#show-number").html("<p>" + number + "<p>");
    }
}


// Why is radioName working? Is this a set var for inputs?
// in the "function checkedValue(radioName)" line, what does calling out radioName in the () do?
function checkedValue(radioName){
    var radios = document.getElementsByName(radioName);
    for(var i=0; i<radios.length; i++)
      if(radios[i].checked) 
      return radios[i].value;
}


function getResults(){
    var score = 0;
    for (var x=0; x<tot; x++)
        if(checkedValue("q"+x)===answers[x]) score += 1; 
        return score;
  }

  
  //I hid the var results and in here, it's still calling in the html 'results' id. Why?
  function returnScore(){
    quiz.style.display = "none";
    results.style.display = "block";
    results.innerHTML = ("Your score is "+ getResults() +"/"+ tot);
  }


//   didn't have time to set stop function and talley score. 



// function onSubmit() {
    
//     var q0 = document.forms["quiz"]["q1"].value;
//     var q1 = document.forms["quiz"]["q2"].value;
//     var q2 = document.forms["quiz"]["q3"].value;

//     alert(q0);

//     for(var i = 0)

//     // quiz.style.display = "none";
    
// }





// click => start game
// timer starts
// user answers questions by clicking on button
// 