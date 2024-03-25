export const BASE_URL = 'https://api.themoviedb.org/3/';

// opzioni che possono essere date come parametro alla funzione fetch
export  const OPTIONS = {
    headers: {
        "Content-Type": "application/json", // formato nel quale i dati ci devono essere restituiti
        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMjNmZTliZGJlMTBhOTExNjgzYTIyNTdlYzJlNTVkMCIsInN1YiI6IjY1ZTg2YzZkYTFhOWJhMDE2MmJlNTgxNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VNn4nXsYAtmCWjzW4h3RASCD76J4Q8YhFMt_bGJ3uyQ"
        //nell'authorisation abbiamo inserito nella stringa il bearer () + l'access token 
    }, //info aggiuntive date quando facciamo la chiamata
};



