import sini from "./images/sini.jpeg";
import cappuccino from "./images/cappuccino.jpg";
import latte from "./images/steaming-cup-coffee.jpg";
import muffin from "./images/muffin.jpg";
import espresso from "./images/espresso.jpg"

const menuItems = [
  {
    name: "Cappuccino",
    description: "A classic Italian coffee made with espresso, steamed milk, and foam.",
    price: "$4.50",
    image: cappuccino
  },
  {
    name: "Latte",
    description: "Espresso with steamed milk and a light layer of foam on top.",
    price: "$4.00",
    image: latte
  },
  {
    name: "Muffin",
    description: "Freshly baked muffin, perfect for a light snack.",
    price: "$2.00",
    image: muffin
  },
  {
    name: "Espresso",
    description: "A strong and rich coffee shot served black.",
    price: "$2.50",
    image: espresso
  }
  
];

export const menu = function() {
    const content = document.querySelector("#content");
    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menu-container");

    menuItems.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <p class="price">${item.price}</p>
            `;

        menuContainer.appendChild(card);
    });
    content.appendChild(menuContainer);

    
}