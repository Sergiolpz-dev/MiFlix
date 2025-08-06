import { getPopularMovies, getPopularSeries, getTopRatedMovies, getTopRatedSeries, renderCards, getHeroMovie, renderHero } from "./api.js";

getHeroMovie().then(movie => renderHero(movie));
getPopularMovies().then(movies => renderCards(movies, "popular-movies"));
getPopularSeries().then(series => renderCards(series, "popular-series"));
getTopRatedMovies().then(movies => renderCards(movies, "top-movies"));
getTopRatedSeries().then(series => renderCards(series, "top-series"));
