
document.addEventListener('DOMContentLoaded', runTW);

var i = 0;
var txt = 'Hello! I am Lenin Ugalde.';
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
    background.style.webkitBackdropFilter = `blur(${blurAmount}px)`; 
}

document.getElementById('content-container').addEventListener('scroll', scrollValue);


function smoothScrollToTop() {
    const startPosition = document.getElementById('content-container').scrollTop;
    const duration = 1000; // Scroll duration in milliseconds
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, -startPosition, duration);

        document.getElementById('content-container').scrollTop = run;

        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}

document.getElementById('scrollUpButton').addEventListener('click', smoothScrollToTop);

function scrollValue() {
    const background = document.getElementById('content-container');
    const firstSectionHeight = document.querySelector('.section').offsetHeight; 
    const scroll = background.scrollTop;
    const height = firstSectionHeight / 2;
    const maxBlur = 10;
    let blurAmount = 0;

    if (scroll > height) {
        const scrollPastSection = scroll - height;
        blurAmount = Math.min((scrollPastSection / height) * maxBlur, maxBlur);
    }

    background.style.backdropFilter = `blur(${blurAmount}px)`;
    background.style.webkitBackdropFilter = `blur(${blurAmount}px)`; 
}

document.getElementById('content-container').addEventListener('scroll', scrollValue);


const d = new Date();
let year = d.getFullYear();
document.getElementById("year").innerHTML = year;
