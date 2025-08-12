import { getPopularMovies, getTopRatedMovies, renderCards, getHeroMovie, renderHero, getTopRatedMoviesByCategory, getPopularMoviesByCategory, getHeroMovieByCategory } from "./api.js";

getHeroMovie().then(movie => renderHero(movie));
getPopularMovies().then(movies => renderCards(movies, "popular-movies"));
getTopRatedMovies().then(movies => renderCards(movies, "top-movies"));


// Categories
const comedyBtn = document.getElementById("comedy-btn");
const dramaBtn = document.getElementById("drama-btn");
const animeBtn = document.getElementById("anime-btn");

comedyBtn.addEventListener("click", () => {
    getTopRatedMoviesByCategory(35).then(movies => renderCards(movies, "top-movies"));
    getPopularMoviesByCategory(35).then(movies => renderCards(movies, "popular-movies"));
    getHeroMovieByCategory(35).then(movie => renderHero(movie));
});

dramaBtn.addEventListener("click", () => {
    getTopRatedMoviesByCategory(18).then(movies => renderCards(movies, "top-movies"));
    getPopularMoviesByCategory(18).then(movies => renderCards(movies, "popular-movies"));
    getHeroMovieByCategory(18).then(movie => renderHero(movie));
});

animeBtn.addEventListener("click", () => {
    getTopRatedMoviesByCategory(16).then(movies => renderCards(movies, "top-movies"));
    getPopularMoviesByCategory(16).then(movies => renderCards(movies, "popular-movies"));
    getHeroMovieByCategory(16).then(movie => renderHero(movie));
});
