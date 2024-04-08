document.addEventListener("DOMContentLoaded", function() {
    // Esegui la chiamata all'API qui e ottieni i dati delle immagini
    
    // Esempio di dati immagine da un'API
    const imageData = [
      { url: "image1.jpg", title: "Titolo 1", description: "Descrizione 1" },
      { url: "image2.jpg", title: "Titolo 2", description: "Descrizione 2" }
      // Aggiungi altri dati immagine qui
    ];
  
    const cardContainer = document.getElementById("cardContainer");
  
    // Itera sui dati immagine e crea dinamicamente le card
    imageData.forEach(function(image) {
      const card = document.createElement("div");
      card.classList.add("card");
  
      const imageElement = document.createElement("img");
      imageElement.src = image.url;
      imageElement.alt = image.title;
      card.appendChild(imageElement);
  
      const cardText = document.createElement("div");
      cardText.classList.add("card-text");
  
      const title = document.createElement("h2");
      title.textContent = image.title;
      cardText.appendChild(title);
  
      const description = document.createElement("p");
      description.textContent = image.description;
      cardText.appendChild(description);

/*
    // creo un div principale per il carosello
      const carosello = document.createElement("div");
      carosello.classList.add("carouselExampleCaptions");

      //creo un array di immagini
      const immagini = ['immagine1.jpg', 'immagine2,jpg', 'immagine3.jpg'];

      //creo un div per ogni immagine e lo aggiungo al carosello
      immagini.forEach((immagine) => {
        const slide = 
        document.createElement('div');
        slide.classList.add('slide');

        const img = 
        document.createElement('img');
        img.setAttribute('src', immagine);

        slide.appendChild(img);
        carosello.appendChilf(slide);
      });

      //aggiungo il carosello al documento HTML 
      document.body.appendChild(carosello); */
 
      card.appendChild(cardText); 
  
      cardContainer.appendChild(card);
    });
  });
  
  