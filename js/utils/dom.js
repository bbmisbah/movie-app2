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
  
      card.appendChild(cardText);
  
      cardContainer.appendChild(card);
    });
  });
  
  