import { getPopularMovies, getPopularSeries, getTopRatedMovies, getTopRatedSeries, renderCards, getHeroMovie, renderHero, getTopRatedMoviesByCategory, getTopRatedSeriesByCategory, getPopularMoviesByCategory, getPopularSeriesByCategory, getHeroMovieByCategory, getHeroSeriesByCategory } from "./api.js";

// Hero
getHeroMovie().then(movie => renderHero(movie));

// Cards
getPopularMovies().then(movies => renderCards(movies, "popular-movies"));
getPopularSeries().then(series => renderCards(series, "popular-series"));
getTopRatedMovies().then(movies => renderCards(movies, "top-movies"));
getTopRatedSeries().then(series => renderCards(series, "top-series"));

// Categories
const comedyBtn = document.getElementById("comedy-btn");
const dramaBtn = document.getElementById("drama-btn");
const animeBtn = document.getElementById("anime-btn");

comedyBtn.addEventListener("click", () => {
    getTopRatedMoviesByCategory(35).then(movies => renderCards(movies, "top-movies"));
    getTopRatedSeriesByCategory(35).then(series => renderCards(series, "top-series"));
    getPopularMoviesByCategory(35).then(movies => renderCards(movies, "popular-movies"));
    getPopularSeriesByCategory(35).then(series => renderCards(series, "popular-series"));
    getHeroMovieByCategory(35).then(movie => renderHero(movie));
});

dramaBtn.addEventListener("click", () => {
    getTopRatedMoviesByCategory(18).then(movies => renderCards(movies, "top-movies"));
    getTopRatedSeriesByCategory(18).then(series => renderCards(series, "top-series"));
    getPopularMoviesByCategory(18).then(movies => renderCards(movies, "popular-movies"));
    getPopularSeriesByCategory(18).then(series => renderCards(series, "popular-series"));
    getHeroMovieByCategory(18).then(movie => renderHero(movie));
});

animeBtn.addEventListener("click", () => {
    getTopRatedMoviesByCategory(16).then(movies => renderCards(movies, "top-movies"));
    getTopRatedSeriesByCategory(16).then(series => renderCards(series, "top-series"));
    getPopularMoviesByCategory(16).then(movies => renderCards(movies, "popular-movies"));
    getPopularSeriesByCategory(16).then(series => renderCards(series, "popular-series"));
    getHeroMovieByCategory(16).then(movie => renderHero(movie));
});
