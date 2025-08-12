

async function fetchData(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
}

const API_KEY = '943f521031a9119e923409c9cb20f403';
const BASE_URL = 'https://api.themoviedb.org/3';
const LANG = 'es-ES';

// Películas populares
export async function getPopularMovies(page = 1) {
    const url = `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=${LANG}&page=${page}`;
    const data = await fetchData(url);
    return data.results;
}

// Series populares
export async function getPopularSeries(page = 1) {
    const url = `${BASE_URL}/tv/popular?api_key=${API_KEY}&language=${LANG}&page=${page}`;
    const data = await fetchData(url);
    return data.results;
}

// Películas mejor valoradas
export async function getTopRatedMovies(page = 1) {
    const url = `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=${LANG}&page=${page}`;
    const data = await fetchData(url);
    return data.results;
}

// Series mejor valoradas
export async function getTopRatedSeries(page = 1) {
    const url = `${BASE_URL}/tv/top_rated?api_key=${API_KEY}&language=${LANG}&page=${page}`;
    const data = await fetchData(url);
    return data.results;
}



// Funcion para crear las tarjetas
export function renderCards(data, id) {
    const $container = document.getElementById(id);
    const html = data.map(movie => {

        if(movie.poster_path != null){
            return `
            <div class="card" id="${movie.id}">
                <img src="https://image.tmdb.org/t/p/w300/${movie.poster_path}" class="card__img" alt="imagen de la película" />
            </div>
        `;
        }
    }).join('');
    $container.innerHTML = html;
}

// Funcion para obtener la película destacada
export async function getHeroMovie(page = 1) {
    const url = `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=${LANG}&page=${page}`;
    const data = await fetchData(url);
    return data.results[13];
}

// Funcion para obtener la serie destacada
export async function getHeroSeries(page = 1) {
    const url = `${BASE_URL}/tv/top_rated?api_key=${API_KEY}&language=${LANG}&page=${page}`;
    const data = await fetchData(url);
    return data.results[10];
}
// Funcion para renderizar la película destacada
export async function renderHero(data) {
    const $container = document.getElementById("hero");
    const html = `
        <img src="${window.innerWidth < 400 ? `https://image.tmdb.org/t/p/w300/${data.poster_path}` : `https://image.tmdb.org/t/p/w1280/${data.backdrop_path}`}"
            class="main_hero-img"
            style="width: ${window.innerWidth < 400 ? '100%' : '90vw'}"
            alt="imagen de la película" />
    `;
    $container.innerHTML = html;
}

// Funcion para obtener las películas mejor valoradas por categoría
export async function getTopRatedMoviesByCategory(categoryId, page = 1) {
    const url = `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=${LANG}&with_genres=${categoryId}&sort_by=vote_average.desc&vote_count.gte=1000&page=${page}`;
    const data = await fetchData(url);
    return data.results;
}

// Funcion para obtener las series mejor valoradas por categoría
export async function getTopRatedSeriesByCategory(categoryId, page = 1) {
    const url = `${BASE_URL}/discover/tv?api_key=${API_KEY}&language=${LANG}&with_genres=${categoryId}&sort_by=vote_average.desc&vote_count.gte=500&page=${page}`;
    const data = await fetchData(url);
    return data.results;
}

// Películas populares por categoría
export async function getPopularMoviesByCategory(categoryId, page = 1) {
    const url = `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=${LANG}&with_genres=${categoryId}&sort_by=popularity.desc&page=${page}`;
    const data = await fetchData(url);
    return data.results;
}

// Series populares por categoría
export async function getPopularSeriesByCategory(categoryId, page = 1) {
    const url = `${BASE_URL}/discover/tv?api_key=${API_KEY}&language=${LANG}&with_genres=${categoryId}&sort_by=popularity.desc&page=${page}`;
    const data = await fetchData(url);
    return data.results;
}

// Funcion para obtener la película destacada por categoría
export async function getHeroMovieByCategory(categoryId, page = 1) {
    const url = `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=${LANG}&with_genres=${categoryId}&sort_by=vote_average.desc&vote_count.gte=1000&page=${page}`;
    const data = await fetchData(url);
    return data.results[0];
}

// Funcion para obtener la serie destacada por categoría
export async function getHeroSeriesByCategory(categoryId, page = 1) {
    const url = `${BASE_URL}/discover/tv?api_key=${API_KEY}&language=${LANG}&with_genres=${categoryId}&sort_by=vote_average.desc&vote_count.gte=500&page=${page}`;
    const data = await fetchData(url);
    return data.results[0];
}

// Funcion para buscar películas
export async function searchMovies(value) {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${value}`;
    const data = await fetchData(url);
    console.log(data.results);
    return data.results;
}

// Funcion para buscar series
export async function searchSeries(value) {
    const url = `https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&query=${value}`;
    const data = await fetchData(url);
    return data.results;
}

