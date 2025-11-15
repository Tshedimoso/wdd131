
document.addEventListener('DOMContentLoaded', () => {
const yearEl = document.getElementById('currentyear');
const lastModEl = document.getElementById('lastModified');
if (yearEl) yearEl.textContent = new Date().getFullYear();
if (lastModEl) lastModEl.textContent = document.lastModified || 'Unknown';



const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('main-nav');
if (hamburger && nav) {
hamburger.addEventListener('click', () => {
const isHidden = nav.classList.contains('nav-hidden');
if (isHidden) {
nav.classList.remove('nav-hidden');
nav.classList.add('nav-visible');
hamburger.textContent = '✕';
hamburger.setAttribute('aria-label', 'Close navigation');
} else {
nav.classList.remove('nav-visible');
nav.classList.add('nav-hidden');
hamburger.textContent = '☰';
hamburger.setAttribute('aria-label', 'Open navigation');
}
});
}
});