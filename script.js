$(document).ready(function() {
    var btn = $(".button");
    btn.click(function() {
      btn.toggleClass("paused");
      return false;
    });
  });


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

function nextPage() {
    window.location.href = "answeringpage.html";
    alert("Continuing to the next page");
}

// Check if the element with id "continue-btn" exists
var next = document.getElementById("continue-btn");
if (next) {
    next.addEventListener("click", nextPage);
}
