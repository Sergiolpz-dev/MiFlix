import { getPopularMovies, getTopRatedMovies, renderCards, getHeroMovie, renderHero } from "./api.js";

getHeroMovie().then(movie => renderHero(movie));
getPopularMovies().then(movies => renderCards(movies, "popular-movies"));
getTopRatedMovies().then(movies => renderCards(movies, "top-movies"));
