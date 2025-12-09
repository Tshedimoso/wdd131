document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.slider-images');
    const nextBtn = document.querySelector('.next-btn');
    const prevBtn = document.querySelector('.prev-btn');

    if (slider && nextBtn && prevBtn) {
        const scrollAmount = 270; // Adjust as needed

        nextBtn.addEventListener('click', function () {
            slider.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        });

        prevBtn.addEventListener('click', function () {
            slider.scrollBy({
                left: -scrollAmount,
                behavior: 'smooth'
            });
        });
    } else {
        console.error("One or more slider elements are missing.");
    }
});