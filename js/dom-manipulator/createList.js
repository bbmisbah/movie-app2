import { getTrendingMovies } from "./api/trendingGetters.js"; // Assicurati di importare la funzione getTrendingMovies

const IMAGE_PATH = 'https://image.tmdb.org/t/p/w342';

export const createCard = (movie) => {
    const card = document.createElement("div");
    card.classList.add("movie-card");

    const image = document.createElement("img");
    const imageUrl = movie.poster_path;
    image.src = IMAGE_PATH + imageUrl;
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

async function createMovieSlider() {
    const movies = await getTrendingMovies(); // Assume che questa funzione ritorni un array di film

    const sliderContainer = document.getElementById('movie-slider');
  
    // Assicurati che il container sia vuoto prima di popolarlo
    sliderContainer.innerHTML = '';
  
    // Crea e aggiungi le card dei film al container del carosello
    movies.forEach(movie => {
        const movieCard = createCard(movie);
        sliderContainer.appendChild(movieCard);
    });

    // Aggiungi classe al container del carosello per applicare stili CSS
    sliderContainer.classList.add("movie-slider");
  
    // Qui potresti aggiungere la logica per i controlli di navigazione del carosello
}

// Chiamata alla funzione per creare il carosello
createMovieSlider();
