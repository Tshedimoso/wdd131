
window.addEventListener("load", () => {
    localStorage.setItem("reviewCount", 0);
});


document.addEventListener("DOMContentLoaded", () => {
    let count = localStorage.getItem("reviewCount");

    count = count ? Number(count) + 1 : 1;

    localStorage.setItem("reviewCount", count);

    const reviewSpan = document.getElementById("reviewCount");
    if (reviewSpan) {
        reviewSpan.textContent = count;
    }
});

document.addEventListener('DOMContentLoaded', () => {
const yearEl = document.getElementById('currentyear');
const lastModEl = document.getElementById('lastModified');
if (yearEl) yearEl.textContent = new Date().getFullYear();
if (lastModEl) lastModEl.textContent = document.lastModified || 'Unknown';})

