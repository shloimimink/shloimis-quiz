function check () {

    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var correct = 0;

    if (question1 === "Brussels") {
        correct++;
    }

    if(question2 === "Rome") {
        correct++
    }
    if(question3 === "Albany") {
        correct++
    }

    var message = ["Great job!", "Thats okey", "you really need to do better"];
    var pictures = ["img/win.gif", "img/meh.gif", "img/lose.gif"];

    var range;

    if(correct < 1){
        range = 2;
    }
    if(correct > 0 && correct < 3){
        range = 1;
    }
    if(correct > 2){
        range = 0;
    }

    document.getElementById("after_submit").style.visibility = "visible";

    document.getElementById("message").innerHTML = message[range];
    document.getElementById("number_correct").innerHTML="you got " + correct + " correct.";
    document.getElementById("picture").src = pictures[range];

}
