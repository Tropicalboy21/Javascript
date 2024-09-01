// const { title } = require("process");

// document.querySelectorAll('.service').forEach(service => {
//     service.addEventListener('click', function() {
//         document.querySelectorAll('.service').forEach(s => s.classList.remove('active'));
//         this.classList.add('active');
//     });
// });

// document.addEventListener('click', function(event) {
//     if (!event.target.closest('.service.active')) {
//         document.querySelectorAll('.service').forEach(s => s.classList.remove('active'));
//     }
// });

const cards = document.querySelectorAll('.service');

function showCard() {

    const cardContainer = document.getElementById('card-container');
    const closeButton = document.getElementById('close-icon');

    function hideCard() {
        cardContainer.classList.add("hide");
        setTimeout(function() {
            cardContainer.style.display = "none";
            cardContainer.classList.remove("hide");
        }, 5000);
    }

    closeButton.addEventListener("click", hideAlert);

}

cards.forEach(card => card.addEventListener('click', showCard));

