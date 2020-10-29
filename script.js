//defining the global variables





//on 'ready' script
$(document).ready(function() {
//event listener for start button 
$("#start").on("click", function() {
    var intro = document.getElementById("main");
    var startButton = document.getElementById("start");
    if (intro.style.display === "block" && startButton.style.display === "block") {
        intro.style.display = "none";
        startButton.style.display = "none";
    } else {
        intro.style.display = "block";
        startButton.style.display = "block";
    }

    });

});

