import { getPopularSeries, getTopRatedSeries, renderCards, getHeroSeries, renderHero } from "./api.js";

getHeroSeries().then(serie => renderHero(serie));
getPopularSeries().then(series => renderCards(series, "popular-series"));
getTopRatedSeries().then(series => renderCards(series, "top-series"));
