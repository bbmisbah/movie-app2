import { BASE_URL, OPTIONS, PERSON } from "./api/config.js";

export const getTrending = async () => {
    const response = await fetch(BASE_URL + 'trending/all/day?language=en-US', OPTIONS); 

    const data = await response.json();
    
    return data;
}

//chiamata che prende il trending generale e ci restituisce solo i film

/** getTrendingMovies
 * 
 * @param baseUrl
 * 
 * @returns film di tendenza 
 */

export const getTrendingMovies = async () => {
    const response = await fetch(BASE_URL + 'trending/movie/day?language=en-US', OPTIONS);

    const data = await response.json();

    return data;
}

/**
 * chiamata che prende il trending generale e ci restituisce solo le serie
 * getTrendingTvSeries
 * @param baseUrl
 * @returns serie tv di tendenza
 */

export const getTrendingTvSeries = async () => {
    const response = await fetch(BASE_URL + 'trending/tv/day?language=en-US', OPTIONS);

    const data = await response.json();

    return data;
}

/**
 * chiamata che permette di fare ricerche per nome di persona
 * getSearchPerson
 * @return film o serie tv che includono quella persona
 */

export const getSearchPerson = async (person) => {
    const response = await fetch(BASE_URL + `search/person?query=${person}`, options);

    const data = await response.json();

    return data;
}