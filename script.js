const scoreElement = document.getElementById("score");
let score = 0;

document.addEventListener("DOMContentLoaded", function () {
  function nextPage() {
    window.location.href = "answeringpage.html";
    alert("Continuing to the next page");
  }

  document.addEventListener("DOMContentLoaded", function () {
    var playBtn = document.getElementById("play-btn");
    playBtn.addEventListener("click", function () {
      playBtn.classList.toggle("active");
    });
  });

  var next = document.getElementById("continue-btn");
  if (next) {
    next.addEventListener("click", nextPage);
  }
});

// Function for toggling play/pause for audio file 1
function togglePlayPause() {
  var audio = document.getElementById("audio-player");
  if (audio.paused) {
    playAudio(audio);
  } else {
    pauseAudio(audio);
  }
}

// Function for toggling play/pause for audio file 2
function togglePlayPause2() {
  var audio = document.getElementById("audio-player2");
  if (audio.paused) {
    playAudio(audio);
  } else {
    pauseAudio(audio);
  }
}

// Function for toggling play/pause for audio file 3
function togglePlayPause3() {
  var audio = document.getElementById("audio-player3");
  if (audio.paused) {
    playAudio(audio);
  } else {
    pauseAudio(audio);
  }
}

// Function for toggling play/pause for audio file 4
function togglePlayPause4() {
  var audio = document.getElementById("audio-player4");
  if (audio.paused) {
    playAudio(audio);
  } else {
    pauseAudio(audio);
  }
}

// Function for toggling play/pause for audio file 5
function togglePlayPause5() {
  var audio = document.getElementById("audio-player5");
  if (audio.paused) {
    playAudio(audio);
  } else {
    pauseAudio(audio);
  }
}

// Function to play audio
function playAudio(audio) {
  var playPromise = audio.play();
  if (playPromise !== undefined) {
    playPromise
      .then((_) => {
        // Automatic playback started!
        document.getElementById("play_btn").innerText = "Pause";
      })
      .catch((error) => {
        // Auto-play was prevented
        console.log("Autoplay was prevented.");
      });
  }
}

// Function to pause audio
function pauseAudio(audio) {
  audio.pause();
  document.getElementById("play_btn").innerText = "Play";
}

function showNextQuestion(questionNumber) {
  var currentQuestion = document.querySelector(
    '.box1:not([style="display: none;"])'
  );
  var nextQuestion = document.querySelector(
    ".box1:nth-of-type(" + questionNumber + ")"
  );

  if (currentQuestion && nextQuestion) {
    currentQuestion.style.display = "none";
    nextQuestion.style.display = "block";
  }
}

function checkAnswer(questionNumber, answer) {
  let correctAnswer;
  let resultPara = document.getElementById("answerEl" + questionNumber);

  switch (questionNumber) {
    case 1:
      correctAnswer = ["bad blood", "badblood"];
      break;
    case 2:
      correctAnswer = "betty";
      break;
    case 3:
      correctAnswer = "blank space";
      break;
    case 4:
      correctAnswer = "Fearless";
      break;
    case 5:
      correctAnswer = "Trouble";
      break;
    default:
      correctAnswer = "";
  }

  if (Array.isArray(correctAnswer)) {
    if (correctAnswer.includes(answer.toLowerCase())) {
      resultPara.textContent = "Correct!";
      score++;
      scoreElement.textContent = score;
    } else {
      resultPara.textContent = "Incorrect!";
    }
  } else {
    if (answer.toLowerCase() === correctAnswer.toLowerCase()) {
      resultPara.textContent = "Correct!";
      score++;
      scoreElement.textContent = score;
    } else {
      resultPara.textContent = "Incorrect!";
    }
  }
}

function fadeOutAndPauseAudio(audio, playBtnId) {
  var fadeInterval = 0.05; // Adjust this value to control the speed of the fade-out effect
  var fadeOutInterval = setInterval(function () {
    if (audio.volume > 0) {
      audio.volume -= fadeInterval;
    } else {
      clearInterval(fadeOutInterval);
      audio.pause();
      audio.volume = 1; // Reset volume to avoid issues when playing again
      document.getElementById(playBtnId).innerText = "Play";
    }
  }, 100); // Adjust the interval as needed
}

document.getElementById("submitBtn1").addEventListener("click", function () {
  checkAnswer(1, document.getElementById("answer1").value);
  fadeOutAndPauseAudio(document.getElementById("audio-player"), "play_btn");
});

document.getElementById("submitBtn2").addEventListener("click", function () {
  checkAnswer(2, document.getElementById("answer2").value);
  fadeOutAndPauseAudio(document.getElementById("audio-player2"), "play_btn2");
});

document.getElementById("submitBtn3").addEventListener("click", function () {
  checkAnswer(3, document.getElementById("answer3").value);
  fadeOutAndPauseAudio(document.getElementById("audio-player3"), "play_btn3");
});

document.getElementById("submitBtn4").addEventListener("click", function () {
  checkAnswer(4, document.getElementById("answer4").value);
  fadeOutAndPauseAudio(document.getElementById("audio-player4"), "play_btn4");
});

document.getElementById("submitBtn5").addEventListener("click", function () {
  checkAnswer(5, document.getElementById("answer5").value);
  fadeOutAndPauseAudio(document.getElementById("audio-player5"), "play_btn5");
});
