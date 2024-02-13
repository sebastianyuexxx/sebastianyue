// scripts.js

const gifs = [
    { url: 'images/previews/cometobed.gif', title: 'GIF 1', description: 'This is GIF number 1' },
    // Add more objects like above for each GIF
  ];
  
  const container = document.getElementById('gifContainer');
  
  gifs.forEach(gif => {
    const card = document.createElement('div');
    card.classList.add('card');
  
    const img = document.createElement('img');
    img.src = gif.url;
    img.alt = gif.title;
  
    const cardContent = document.createElement('div');
    cardContent.classList.add('card-content');
  
    const title = document.createElement('h3');
    title.textContent = gif.title;
  
    const description = document.createElement('p');
    description.textContent = gif.description;
  
    cardContent.appendChild(title);
    cardContent.appendChild(description);
  
    card.appendChild(img);
    card.appendChild(cardContent);
  
    container.appendChild(card);
  });
  