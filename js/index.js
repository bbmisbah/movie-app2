import { getSearchPerson, getTrending, getTrendingMovies, getTrendingTvSeries, getSearchPerson } from "./api/trendingGetters.js"
import { BASE_URL, PERSON } from "./api/config.js";

getTrending();

getTrendingMovies();

getTrendingTvSeries();

getSearchPerson("Clooney");



