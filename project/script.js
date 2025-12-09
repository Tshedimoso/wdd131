const searchInput = document.querySelector('.search-bar input');
searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    artistCards.forEach((card) => {
        const artistName = card.querySelector('h3').textContent.toLowerCase();
        if (artistName.includes(query)) {
            card.style.display = 'block'; 
        } else {
            card.style.display = 'none'; 
        }
    });
});

  document.addEventListener("DOMContentLoaded", () => {
    const searchBar = document.querySelector(".search-bar input");
    const artistCards = document.querySelectorAll(".artist-card");
  
    searchBar.addEventListener("input", () => {
      const searchValue = searchBar.value.toLowerCase();
  
      artistCards.forEach(card => {
        const artistName = card.querySelector("h3").textContent.toLowerCase();
        if (artistName.includes(searchValue)) {
          card.style.display = "block"; 
        } else {
          card.style.display = "none"; 
        }
      });
    });
  });

  document.addEventListener('DOMContentLoaded', () => {
const yearEl = document.getElementById('currentyear');
const lastModEl = document.getElementById('lastModified');
if (yearEl) yearEl.textContent = new Date().getFullYear();
if (lastModEl) lastModEl.textContent = document.lastModified || 'Unknown';})

  