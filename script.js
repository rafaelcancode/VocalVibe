function togglePlayPause() {
    var audio = document.getElementById("audio-player");
    if (audio.paused) {
        playAudio();
    } else {
        pauseAudio();
    }
}

function playAudio() {
    var audio = document.getElementById("audio-player");
    audio.play();
    document.getElementById("play_btn").innerText = "Pause";
}

function pauseAudio() {
    var audio = document.getElementById("audio-player");
    audio.pause();
    document.getElementById("play_btn").innerText = "Play";
}

function checkAnswer() {
    // Get the user's answer from the input field
    var userAnswer = document.getElementById("first_question").value.toLowerCase();
    
    // Check if the user's answer is correct
    if (userAnswer === "badblood" || userAnswer === "bad blood") {
        alert("Correct!");
    } else {
        alert("Incorrect!");
    }
}

function checkSecondAnswer() {
    var userAnswer2 = document.getElementById("second_question").value.toLowerCase().trim();
    if (userAnswer2 === betty) {
        alert("Correct!");
    } else {
        alert("Incorrect");
    }
}

function nextPage() {
    window.location.href = "answeringpage.html";
    alert("Continuing to the next page");
}

// Check if the element with id "continue-btn" exists
var next = document.getElementById("continue-btn");
if (next) {
    next.addEventListener("click", nextPage);
}
