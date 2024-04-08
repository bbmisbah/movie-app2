const IMAGE_PATH = 'https://image.tmdb.org/t/p/w342';
const API_KEY = 'b23fe9bdbe10a911683a2257ec2e55d0';

async function getTrendingMovies() {
    return fetchData(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}&language=en-US`);
}

async function getTrendingTV() {
    return fetchData(`https://api.themoviedb.org/3/trending/tv/day?api_key=${API_KEY}&language=en-US`);
}

async function searchMoviesAndTV(query) {
    const movies = await fetchData(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
    const tvShows = await fetchData(`https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
    return {movies, tvShows};
}

async function fetchData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error("Si è verificato un errore:", error);
        return [];
    }
}

function createCard(containerId, item) {
    const container = document.getElementById(containerId);
    const card = document.createElement("div");
    card.classList.add("movie-card");

    const image = document.createElement("img");
    image.src = item.poster_path ? `${IMAGE_PATH}${item.poster_path}` : 'path/to/default/image.jpg';
    image.alt = item.title || item.name;
    card.appendChild(image);

    const title = document.createElement("h1");
    title.innerText = item.title || item.name;
    card.appendChild(title);

    const description = document.createElement("p");
    description.innerText = item.overview;
    card.appendChild(description);

    container.appendChild(card);
}

async function initializeLandingPage() {
    const movies = await getTrendingMovies();
    const tvShows = await getTrendingTV();
    displayContent(movies, tvShows);
}

function displayContent(movies, tvShows) {
    const movieContainer = document.getElementById("movie-slider");
    const tvContainer = document.getElementById("tv-slider");
    movieContainer.innerHTML = '';
    tvContainer.innerHTML = '';
    movies.forEach(movie => createCard("movie-slider", movie));
    tvShows.forEach(tvShow => createCard("tv-slider", tvShow));
}


async function handleSearch(e) {
    e.preventDefault();
    const searchTerm = document.getElementById('search-box').value.trim();
    if (searchTerm.length === 0) return;

    const {movies, tvShows} = await searchMoviesAndTV(searchTerm);
    displayContent(movies, tvShows);
}

document.getElementById('search-button').addEventListener('click', handleSearch);
document.addEventListener('DOMContentLoaded', initializeLandingPage);
