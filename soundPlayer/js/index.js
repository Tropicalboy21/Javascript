var intervalId; // Declare a variable to store the interval ID
var countdownIntervalId; // Declare a variable to store the countdown interval ID

function startTimer() {
  var remainingTime = 150; // Initial time in seconds (2.5 minutes)
  updateTimerDisplay(remainingTime);

  countdownIntervalId = setInterval(function () {
    remainingTime -= 1;
    updateTimerDisplay(remainingTime);
    if (remainingTime <= 0) {
      clearInterval(countdownIntervalId);
      var audio = new Audio("sounds/delatation.mp4"); // Replace "sound.mp3" with your sound file
      audio.play();
      setTimeout(function () {
        clearInterval(intervalId);
        intervalId = setInterval(playSound, 150000); // Restart the sound interval
        startTimer(); // Restart the countdown
      }, audio.duration * 1000); // Wait for the sound to finish playing
    }
  }, 1000); // Update the countdown every second

  intervalId = setInterval(playSound, 150000); // Start playing sound every 2.5 minutes
}

document.querySelector("#startButton").addEventListener("click", function () {
  var start = new Audio("sounds/start.mp4");
  start.play();
  startTimer();

  // Disable the start button and enable the stop button
  document.querySelector("#startButton").disabled = true;
  document.querySelector("#stopButton").disabled = false;
});

document.querySelector("#stopButton").addEventListener("click", function () {
  var end = new Audio("sounds/end.mp4");
  end.play();

  // Clear both intervals when stop button is clicked
  clearInterval(intervalId);
  clearInterval(countdownIntervalId);

  // Enable the start button and disable the stop button
  document.querySelector("#startButton").disabled = false;
  document.querySelector("#stopButton").disabled = true;

  // Reset timer display to 2 minutes and 30 seconds
  updateTimerDisplay(150);
});

function updateTimerDisplay(seconds) {
  var minutes = Math.floor(seconds / 60);
  var remainingSeconds = seconds % 60;
  var timerDisplay = document.querySelector("#timerDisplay");
  timerDisplay.textContent = minutes + ":" + (remainingSeconds < 10 ? "0" : "") + remainingSeconds;
}

function playSound() {
  var audio = new Audio("sounds/delatation.mp4"); // Replace "sound.mp3" with your sound file
  audio.play();
}