
var intervalId;

document.querySelector("#startButton").addEventListener("click", function () {

  var start = new Audio("sounds/snare.mp3");
  start.play();

  intervalId = setInterval(function () {
    var dilatation = new Audio("sounds/two-shot.mp4");

    dilatation.play();
  }, 150000);


  // document.querySelector("#startButoon").disabled = true;

  // document.querySelector("#stopButton").disabled = false;

});


document.querySelector("#stopButton").addEventListener("click", function () {

  var end = new Audio("sounds/snare.mp3");
  end.play();

  clearInterval(intervalId);

  // document.querySelector("#startButoon").disabled = false;

  // document.querySelector("#stopButton").disabled = true;

})