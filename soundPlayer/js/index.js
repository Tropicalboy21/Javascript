var intervalId;
var countdownIntervalId;

document.querySelector("#startButton").addEventListener("click", function () {
  var start = new Audio("sounds/start.mp4");
  start.play();

  var remainingTime = 150; // Initial time in seconds (2.5 minutes)
  updateTimerDisplay(remainingTime);

  countdownIntervalId = setInterval(function () {
    remainingTime -= 1;
    updateTimerDisplay(remainingTime);
    if (remainingTime <= 0) {
      clearInterval(countdownIntervalId);
      var delatation = new Audio("sounds/delatation.mp4");
      delatation.play();
      countdownIntervalId = setInterval(function () {
        remainingTime = 150;
        updateTimerDisplay(remainingTime);
      }, 150000);
    }
  }, 1000);

  document.querySelector("#startButton").disabled = true;
  document.querySelector("#stopButton").disabled = false;
});

document.querySelector("#stopButton").addEventListener("click", function () {
  var end = new Audio("sounds/end.mp4");
  end.play();

  clearInterval(intervalId);
  clearInterval(countdownIntervalId);

  document.querySelector("#startButton").disabled = false;
  document.querySelector("#stopButton").disabled = true;
});

function updateTimerDisplay(seconds) {
  var minutes = Math.floor(seconds / 60);
  var remainingSeconds = seconds % 60;
  var timerDisplay = document.querySelector("#timerDisplay");
  timerDisplay.textContent = minutes + ":" + (remainingSeconds < 10 ? "0" : "") + remainingSeconds;
}