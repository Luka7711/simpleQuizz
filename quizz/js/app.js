function submitAnswers() {
    var total = 5;
    var score = 0;

    //Get User Input

    var q1 = document.forms["quizForms"]["q1"].value;
    var q2 = document.forms["quizForms"]["q2"].value;
    var q3 = document.forms["quizForms"]["q3"].value;
    var q4 = document.forms["quizForms"]["q4"].value;
    var q5 = document.forms["quizForms"]["q5"].value;

// Validation


for(i = 1; i <= total; i++){
    if(eval('q' + i) == 0 || eval('q' + i) == ' '){
        alert("you missed question" + i);
        return false;
    }
}
//set correct answers

var answers = ['b', 'a', 'd', 'b', 'd'];

//check asnwers

if(q1 == answers[0]){
    score++;
}
if(q2 == answers[1]){
    score++;
}
if(q3 == answers[2]){
    score++;
}
if(q4 == answers[3]){
    score++;
}
if(q5 == answers[4]){
    score++;
}

var results = document.getElementById('results');
results.innerHTML = '<h3>You scored <span>'+ score +'</span> out of<span> ' +total+'</span></h3>';
return false;
}