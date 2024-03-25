/**
 * createTrendingMovies()
 * 
 * la funzione prenderà in ingresso un array di movies, per ogni movie aggiungere al dom un nuovo nodo, che sarà un tag <li> contentente il titolo del movie
 * 
 * @param array dei file
 * @returns
 */

export const createTrendingMoviesList = (movies) => {
    //recupero il nodo ul con id "trending-movies-list"
    const list = document.getElementById("trending-movies-list");

    const cardContainer = document.getElementById("movies-card");

    //ciclo su ogni elemetno dell'array che viene preso in ingresso come parametro
    movies?.results?.forEach((element) => {
        //creiamo un nuovo nodo che corrisponde a un tag <li>
        const listItem = document.createElement("li");

        //impostiamo il contenuto del tag li appena creato, assegnando  il valore del title dell'elemento coerente in questa iterazione dell'array
        listItem.innerHTML = element.title;

        //appendiamo alla pagina html il nuovo tag creato. dove? sul tag ul recuperato all'inizio mediante l'id
        list.appendChild(listItem);
    }
    ) 
    cardContainer;
}

const IMAGE_PATH = 'https://image.tmdb.org/t/p/w342';

export const createCard = (movies) => {
    const cardContainer = document.getElementById("movies-card");
    movies.results.forEach(element => {

        const card = document.createElement("div");

        const textContainer = document.createElement("div");

        const image = document.createElement("img");

        const imageUrl = element.poster_path;

        image.src = IMAGE_PATH + imageUrl;

        image.alt = 'poster';

        const title = document.createElement("h1");
        title.innerText = element.title;

        const description = document.createElement("p");
        description.innerText = element.overview;

        textContainer.appendChild(image);

        textContainer.appendChild(title);

        textContainer.appendChild(description);

        card.appendChild(textContainer);

        cardContainer.appendChild(card);


    });
}
