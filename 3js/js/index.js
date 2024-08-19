
document.addEventListener('DOMContentLoaded', runTW);

var i = 0;
var txt = 'Hello World! I am Lenin Ugalde.';
var speed = 50;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("greeting").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    } else {
        setTimeout(() => {
            i = 0;
            document.getElementById("greeting").innerHTML = "";
            typeWriter();
        }, 5000); 
    }
}

function runTW(){
    typeWriter();
}

function scrollValue() {
    const background = document.getElementById('content-container');
    const firstSectionHeight = document.querySelector('.section').offsetHeight; // Get the height of the first section
    const scroll = background.scrollTop; // Get the scroll position
    const height = firstSectionHeight / 2;
    // Calculate the blur intensity based on how far the user has scrolled past the first section
    const maxBlur = 10; // Maximum blur intensity
    let blurAmount = 0;

    if (scroll > height) {
        // Calculate blur based on scroll past the first section
        const scrollPastSection = scroll - height;
        blurAmount = Math.min((scrollPastSection / height) * maxBlur, maxBlur);
    }

    // Apply the blur filter to the content container
    background.style.backdropFilter = `blur(${blurAmount}px)`;
}

document.getElementById('content-container').addEventListener('scroll', scrollValue);
