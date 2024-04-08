//const url = 'https://api.themoviedb.org/3/trending/all/day?language=en-US';
//const url = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US';

import {OPTIONS, baseUrl} from "./config.js";

export const getTrending = async () => {
    const response = await fetch(baseUrl + "trending/all/day?language=en-US", OPTIONS);
    const data = await response.json();
    return data;
};

export const getTrendingMovies = async () => {
    const response = await fetch(baseUrl + "trending/movie/day?language=en-US", OPTIONS);
    const data = await response.json();
    return data;
};

export const getTrendingActor = async () => {
    const response = await fetch(baseUrl + "search/person" + "?query=clooney", OPTIONS);
    const data = await response.json();
    return data;
};

export const getTrendingTV = async () => {
    const response = await fetch(baseUrl + "trending/tv/day?language=en-US", OPTIONS);
    const data = await response.json();
    return data;
};



/** getTrendingMovies
 * 
 * @param baseUrl
 * 
 * @returns trending movies (film di tendenza)
 */

