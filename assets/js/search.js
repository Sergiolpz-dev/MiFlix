import { searchMovies, renderCards, searchSeries } from './api/api.js';

const searchBtn = document.getElementById('search-btn');
const searchOverlay = document.getElementById('search-overlay');
const closeIcon = document.getElementById('overlay-close-icon');
const header = document.querySelector('.header');
const main  = document.querySelector('.main');
const footer = document.querySelector('.footer');
const hr = document.querySelector('hr');


searchBtn.addEventListener('click', () => {
    searchOverlay.style.display = 'block';
    header.style.display = 'none';
    main.style.display = 'none';
    footer.style.display = 'none';
    hr.style.display = 'none';
});

// Close search overlay
closeIcon.addEventListener('click', () => {
    searchOverlay.style.display = 'none';
    header.style.display = 'flex';
    main.style.display = 'block';
    footer.style.display = 'block'; 
    hr.style.display = 'block';
});

const input = document.getElementById('search-input');

input.addEventListener('input', async () => {
    const searchValue = input.value;
    let data;
    if (searchValue.length > 2) {
        const movies = await searchMovies(searchValue);
        const series = await searchSeries(searchValue);
        data = [...movies, ...series];
        renderCards(data, "search-results");
    }
});
