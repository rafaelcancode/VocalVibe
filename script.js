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

/* function checkAnswer(questionNumber) {
  var answer = document
    .getElementById("answer" + questionNumber)
    .value.toLowerCase();
  var correctAnswer;

  // Set correct answer based on the question number
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

  // Check if the answer is correct
  if (Array.isArray(correctAnswer)) {
    if (correctAnswer.includes(answer)) {
      alert("Correct!");
    } else {
      alert("Incorrect!");
    }
  } else {
    if (answer === correctAnswer) {
      alert("Correct!");
    } else {
      alert("Incorrect!");
    }
  }
}

document.getElementById("submitBtn1").addEventListener("click", function () {
  checkAnswer(1); // Call the checkAnswer function for question 1 when the button is clicked
});

document.getElementById("submitBtn2").addEventListener("click", function () {
  checkAnswer(2); // Call the checkAnswer function for question 2 when the button is clicked
});

document.getElementById("submitBtn3").addEventListener("click", function () {
  checkAnswer(3); // Call the checkAnswer function for question 3 when the button is clicked
});

document.getElementById("submitBtn4").addEventListener("click", function () {
  checkAnswer(4); // Call the checkAnswer function for question 4 when the button is clicked
});

document.getElementById("submitBtn5").addEventListener("click", function () {
  checkAnswer(5); // Call the checkAnswer function for question 5 when the button is clicked
});
 */

function checkAnswer(questionNumber, answer) {
  let correctAnswer;

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
      alert("Correct!");
    } else {
      alert("Incorrect!");
    }
  } else {
    if (answer.toLowerCase() === correctAnswer.toLowerCase()) {
      alert("Correct!");
    } else {
      alert("Incorrect!");
    }
  }
}

document.getElementById("submitBtn1").addEventListener("click", function () {
  checkAnswer(1, document.getElementById("answer1").value);
});

document.getElementById("submitBtn2").addEventListener("click", function () {
  checkAnswer(2, document.getElementById("answer2").value);
});

document.getElementById("submitBtn3").addEventListener("click", function () {
  checkAnswer(3, document.getElementById("answer3").value);
});

document.getElementById("submitBtn4").addEventListener("click", function () {
  checkAnswer(4, document.getElementById("answer4").value);
});

document.getElementById("submitBtn5").addEventListener("click", function () {
  checkAnswer(5, document.getElementById("answer5").value);
});
