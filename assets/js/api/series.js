import { getPopularSeries, getTopRatedSeries, renderCards, getHeroSeries, renderHero, getTopRatedSeriesByCategory, getPopularSeriesByCategory, getHeroSeriesByCategory } from "./api.js";

getHeroSeries().then(serie => renderHero(serie));
getPopularSeries().then(series => renderCards(series, "popular-series"));
getTopRatedSeries().then(series => renderCards(series, "top-series"));

// Categories
const comedyBtn = document.getElementById("comedy-btn");
const dramaBtn = document.getElementById("drama-btn");
const animeBtn = document.getElementById("anime-btn");

comedyBtn.addEventListener("click", () => {
    getTopRatedSeriesByCategory(35).then(series => renderCards(series, "top-series"));
    getPopularSeriesByCategory(35).then(series => renderCards(series, "popular-series"));
    getHeroSeriesByCategory(35).then(serie => renderHero(serie));
});

dramaBtn.addEventListener("click", () => {
    getTopRatedSeriesByCategory(18).then(series => renderCards(series, "top-series"));
    getPopularSeriesByCategory(18).then(series => renderCards(series, "popular-series"));
    getHeroSeriesByCategory(18).then(serie => renderHero(serie));
});

animeBtn.addEventListener("click", () => {
    getTopRatedSeriesByCategory(16).then(series => renderCards(series, "top-series"));
    getPopularSeriesByCategory(16).then(series => renderCards(series, "popular-series"));
    getHeroSeriesByCategory(16).then(serie => renderHero(serie));
});
