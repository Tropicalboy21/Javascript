
let square = document.getElementById('square');

let inputSpace = document.createElement("input");

inputSpace.className = "input";
square.appendChild(inputSpace);


var i = 0;
var j = 0
var txt1 = "Hello Universe.";
var txt2 = "The focal length of a lens gives the distance from the lens to the image.";
var speed = 50;
var speed2 = 60;
var txtClass = 'title';

let typeWriter = () => {
    if (i < txt1.length) {
        document.getElementById('title').innerHTML += txt1.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    } else if (j < txt2.length) {
        document.getElementById('quote').innerHTML += txt2.charAt(j);
        j++;
        setTimeout(typeWriter, speed2);
    }
};

typeWriter();