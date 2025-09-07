import { fetchData } from './api/api.js';

const API_KEY = '943f521031a9119e923409c9cb20f403';
const BASE_URL = 'https://api.themoviedb.org/3';
const LANG = 'es-ES';

const detailsOverlay = document.getElementById('details-overlay');
const backIcon = document.getElementById('back-icon');
const topRatedMovies = document.getElementById('top-movies');
const topRatedSeries = document.getElementById('top-series');
const popularMovies = document.getElementById('popular-movies');
const popularSeries = document.getElementById('popular-series');
const hero = document.getElementById('hero');
const searchResults = document.getElementById('search-results');
const searchOverlay = document.getElementById('search-overlay');

const isHome = window.location.href.includes('index.html');
const isSeries = window.location.href.includes('series.html');
const isMovies = window.location.href.includes('movies.html');

if (isHome) {
    topRatedMovies.addEventListener('click', (e) => {
        getId(e);
    });
    topRatedSeries.addEventListener('click', (e) => {
        getId(e);
    });
    popularMovies.addEventListener('click', (e) => {
        getId(e);
    });
    popularSeries.addEventListener('click', (e) => {
        getId(e);
    });

} else if (isSeries) {
    topRatedSeries.addEventListener('click', (e) => {
        getId(e);
    });
    popularSeries.addEventListener('click', (e) => {
        getId(e);
    });
} else if (isMovies) {
    topRatedMovies.addEventListener('click', (e) => {
        getId(e);
    });
    popularMovies.addEventListener('click', (e) => {
        getId(e);
    });
}

hero.addEventListener('click', (e) => {
    getIdHero(e);
});
searchResults.addEventListener('click', (e) => {
    getIdSearch(e);
});


backIcon.addEventListener('click', () => {
    detailsOverlay.style.display = 'none';
    header.style.display = 'flex';
    main.style.display = 'block';
    footer.style.display = 'block';
    hr.style.display = 'block';
    backIcon.style.display = 'none';
    detailsOverlay.innerHTML = '';
    searchOverlay.style.display = 'none';
});

function getId(e) {
    backIcon.style.display = 'block';
    const card = e.target.closest('.card');
    if (!card) return;

    detailsOverlay.style.display = 'block';
    header.style.display = 'none';
    main.style.display = 'none';
    footer.style.display = 'none';
    hr.style.display = 'none';
    const id = card.dataset.id;
    renderDetails(id);
}

function getIdHero(e) {
    backIcon.style.display = 'block';
    const card = e.target.closest('#hero-img');
    if (!card) return;

    detailsOverlay.style.display = 'block';
    header.style.display = 'none';
    main.style.display = 'none';
    footer.style.display = 'none';
    hr.style.display = 'none';
    const id = card.dataset.id;
    renderDetails(id);
}

function getIdSearch(e) {
    backIcon.style.display = 'block';
    const card = e.target.closest('.card');
    if (!card) return;

    detailsOverlay.style.display = 'block';
    header.style.display = 'none';
    main.style.display = 'none';
    footer.style.display = 'none';
    hr.style.display = 'none';
    const id = card.dataset.id;
    renderDetails(id);
    searchOverlay.style.display = 'none';
}



async function renderDetails(id) {
    const url = `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=${LANG}`;
    let data;
    try {
        data = await fetchData(url);
    } catch (error) {
        alert('Ha habido un error, por favor inténtelo de nuevo más tarde');
        detailsOverlay.style.display = 'none';
        header.style.display = 'flex';
        main.style.display = 'block';
        footer.style.display = 'block';
        hr.style.display = 'block';
        backIcon.style.display = 'none';
        return;
    }

    const $container = document.getElementById('details-overlay');
    const html = `
    <div class="details-img">
        <img src="https://image.tmdb.org/t/p/w1280/${data.backdrop_path}"
            class="details-img"
            alt="${data.title}" id="details-img" data-id="${data.id}"/>
    </div>
    <div class="details-title">
        <h3>${data.title}</h3>
        <p>${data.vote_average} ⭐</p>
    </div>
    <div class="details-genres">
        <p>${data.genres[0].name}, ${data.genres[1].name}</p>
    </div>
    <div class="details-description">
        <p>${data.overview ? data.overview : 'No hay sinopsis'}</p>
    </div>
    `;
    $container.innerHTML = html;

}



const header = document.querySelector('.header');
const main = document.querySelector('.main');
const footer = document.querySelector('.footer');
const hr = document.querySelector('hr');

