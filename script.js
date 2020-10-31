
/*  1. create html page add logic and styles and link all
    2. in logic, on click of start btn hide start page and display first question and answers and start timer
    3. on answer click, if correct do one thing, if wrong do something else, track score, display next question and answers
    4. if all questions are answered or if timer runs outs, hide questions and answers, display finished page with final score
*/




//on 'ready' script
$(document).ready(function() {
//event listener for start button 
$("#start").on("click", function() {
    var intro = document.getElementById("main");
    var startButton = document.getElementById("start");
    //hides beginning page intro and start button
    if (intro.style.display === "block" && startButton.style.display === "block") {
        intro.style.display = "none";
        startButton.style.display = "none";
        timer.style.display= "block";
    } else {
        intro.style.display = "block";
        startButton.style.display = "block";
        timer.style.display = "none";
    }
    //calls timer into action
    var ninetySeconds = 60 * 1.5,
    display = document.querySelector('#time');
    startTimer(ninetySeconds, display);
    

    });

    function startTimer(duration, display) {
        var timer = duration; //seconds;
        setInterval(function () {
            //minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 90, 10);
    
            //minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
    
            display.textContent = seconds;
    
            if (--timer < 0) {
                timer = duration;
            }
        }, 1000);
    }
    
   /* window.onload = function () {
        var ninetySeconds = 60 * 1.5,
            display = document.querySelector('#time');
        startTimer(ninetySeconds, display);
    };*/
    
    
    
    

});

