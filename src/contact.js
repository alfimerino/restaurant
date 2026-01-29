// contact.js

import heroImage from "./assets/images/glasses.jpg";
import { createMenuSection } from "./menuSection.js";
import mapImage from "./assets/images/google-map.jpg";

export function loadContact() {
  const content = document.querySelector("#content");

  const hero = document.createElement("div");
  hero.classList.add("hero-container2");

  const image = document.createElement("img");
  image.src = heroImage;
  image.classList.add("hero-image");

  const blurbContainer = document.createElement("div");
  blurbContainer.classList.add("blurbContainer");

  const mapContainer = document.createElement("div");
  mapContainer.classList.add("blurbContainer");

  const map = document.createElement('img')
  map.src = mapImage

  const menu = [
    {
      header: "For Reservations",
      menuItems: [
        "(992) 246-7890",
        "info@abb.com",
        ],
    },
    {
      header: "Address",
      menuItems: [
        "123 Main Street New York NY, 11129",
        ],
    },
    {
      header: "Hours",
      menuItems: [
        "Tue - Sun: 11am - 3pm / 5pm - 10pm",
        ],
    },
  ];

  menu.forEach((section) => {
    const element = createMenuSection(section);
    blurbContainer.append(element);
  });

  const heroTextTitle = document.createElement("span");
  heroTextTitle.textContent = "Contact";
  heroTextTitle.classList.add("heroTextTitle");

  hero.append(image, heroTextTitle);
  mapContainer.append(map)
  content.append(hero, blurbContainer, mapContainer);
}
