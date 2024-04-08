// Definizione della costante per il percorso delle immagini
const IMAGE_PATH = 'https://image.tmdb.org/t/p/w342';

// Funzione per effettuare la chiamata API per ottenere i film di tendenza
async function getTrendingMovies() {
    const API_KEY = 'b23fe9bdbe10a911683a2257ec2e55d0'; // Inserisci la tua API key qui
    const url = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}&language=en-US`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error("Si è verificato un errore durante il recupero dei dati dei film:", error);
        return [];
    }
}

// Funzione per creare una card di film
function createCard(movie) {
    const card = document.createElement("div");
    card.classList.add("movie-card");

    const image = document.createElement("img");
    const imageUrl = movie.poster_path;
    image.src = `${IMAGE_PATH}${imageUrl}`;
    image.alt = 'poster';
    card.appendChild(image);

    const title = document.createElement("h1");
    title.innerText = movie.title;
    card.appendChild(title);

    const description = document.createElement("p");
    description.innerText = movie.overview;
    card.appendChild(description);

    return card;
}

// Funzione per filtrare i film in base al titolo
function filterMoviesByTitle(movies, query) {
    return movies.filter(movie => movie.title.toLowerCase().includes(query.toLowerCase()));
}

// Funzione per aggiornare il carosello dei film con i film filtrati
function updateMovieSlider(filteredMovies) {
    const cardContainer = document.getElementById("movie-slider");
    // Assicurati che il container sia vuoto prima di popolarlo
    cardContainer.innerHTML = '';

    // Crea e aggiungi le card dei film filtrati al carosello
    filteredMovies.forEach(movie => {
        const movieCard = createCard(movie);
        cardContainer.appendChild(movieCard);
    });
}

// Funzione per inizializzare il carosello dei film
async function initializeMovieSlider() {
    const movies = await getTrendingMovies(); // Chiamata API per ottenere i dati dei film
    let filteredMovies = [...movies]; // Inizializza la lista dei film filtrati con tutti i film

    // Inizializzazione della casella di ricerca
    const searchBox = document.getElementById('search-box');
    searchBox.addEventListener('input', (event) => {
        const query = event.target.value;
        filteredMovies = filterMoviesByTitle(movies, query);
        updateMovieSlider(filteredMovies);
    });

    // Crea il carosello dei film iniziale con tutti i film
    updateMovieSlider(filteredMovies);
}

// Inizializzazione del carosello dei film al caricamento della pagina
document.addEventListener('DOMContentLoaded', initializeMovieSlider);
