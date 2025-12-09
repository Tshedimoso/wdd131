
const upcomingEvents = []; 
const upcomingEventsContainer = document.getElementById("upcoming-events-content");

if (upcomingEvents.length === 0) {
    upcomingEventsContainer.innerHTML = "<p>No events available</p>";
} else {
    upcomingEvents.forEach(event => {
        const eventElement = document.createElement("div");
        eventElement.innerHTML = `
            <h3>${event.title}</h3>
            <p>Date: ${event.date}</p>
            <p>Theme: ${event.theme}</p>
        `;
        upcomingEventsContainer.appendChild(eventElement);
    });
}

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const sliderImages = document.querySelector('.slider-images');
let currentIndex = 0;

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % sliderImages.children.length;
    updateSlider();
});

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + sliderImages.children.length) % sliderImages.children.length;
    updateSlider();
});

function updateSlider() {
    const offset = -currentIndex * 100;
    sliderImages.style.transform = `translateX(${offset}%)`;
}



    