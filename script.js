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
  var answer1 = document.getElementById("answer1").value.toLowerCase();
  if (answer1 === "bad blood" || answer1 === "badblood") {
    alert("Correct!");
  } else {
    alert("Incorrect!");
  }
}

document.getElementById("submitBtn1").addEventListener("click", function () {
  checkAnswer(); // Call the checkAnswer function when the button is clicked
});

function checkAnswer2() {
  var answer2 = document.getElementById("answer2").value.toLowerCase();
  if (answer2 === "betty") {
    alert("Correct!");
  } else {
    alert("Incorrect!");
  }
}

document.getElementById("submitBtn2").addEventListener("click", function () {
  checkAnswer2(); // Call the checkAnswer function when the button is clicked
});

function nextPage() {
  window.location.href = "answeringpage.html";
  alert("Continuing to the next page");
}

// Check if the element with id "continue-btn" exists
var next = document.getElementById("continue-btn");
if (next) {
  next.addEventListener("click", nextPage);
}
