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
const dataFilePath = './data/services.json';

async function getCardContent (title, type){
    try{
        const response = await fetch(dataFilePath);
        const data = await response.json();
        const contentData = data[type];

        if (!contentData) {
            return `
                <div class="card-content">
                    <h2>Content not found</h2>
                    <p>No content available for the selected type.</p>
                </div>
            `;
        }
        let imagesHTML = '';
        if (contentData.icons && contentData.icons.length > 0) {
            imagesHTML = `
                <div class="icons-container">
                    ${contentData.icons.map(icon => `<img src="./imgs/${icon}" alt="${contentData.title}">`).join('')}
                </div>
            `;
        } else {
            imagesHTML = '';
        }

        return `
        <div class="card-content">
			<img src="./imgs/${type}.png" alt="${title}">
            <h2>${title}</h2>
			<p>${contentData.description}</p>
            <h2>Technologies</h2>
            ${imagesHTML}
        </div>
        `;
    } catch(error) {
        console.error('Error loading JSON data:', error);
        return `
            <div class="card-content">
                <h2>Error</h2>
                <p>There was an error loading the content. Please try again later.</p>
            </div>
        `;
    }
}

async function showCard(event) {
    event.stopPropagation();
    const card = event.currentTarget;

    const content = await getCardContent(card.textContent, card.dataset.type);

    const cardContainer = document.getElementById('card-container');
    const closeButton = document.getElementById('close-icon');

    const existingContent = cardContainer.querySelector('.card-content');
    if (existingContent) {
        existingContent.remove();
    }

    cardContainer.insertAdjacentHTML('beforeend', content);

    cardContainer.classList.remove("hide");
    cardContainer.style.display = 'block';

    function hideCard() {
        cardContainer.classList.add("hide");
        setTimeout(() => {
            cardContainer.style.display = "none";
            const currentContent = cardContainer.querySelector('.card-content');
            if (currentContent) {
                currentContent.remove();
            }
        }, 300);
    }

    closeButton.addEventListener("click", hideCard);

    document.addEventListener("click", function(event) {
        if (!cardContainer.contains(event.target)) {
            hideCard();
            
        }
    }, { once: true });

}

cards.forEach(card => card.addEventListener('click', showCard));

