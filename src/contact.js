// contact.js

import heroImage from "./assets/images/glasses.jpg";
import { createMenuSection } from "./menuSection.js";

export function loadContact() {
  const content = document.querySelector("#content");

  const hero = document.createElement("div");
  hero.classList.add("hero-container2");

  const image = document.createElement("img");
  image.src = heroImage;
  image.classList.add("hero-image");

  const blurbContainer = document.createElement("div");
  blurbContainer.classList.add("blurbContainer");

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
  content.append(hero, blurbContainer);
}
